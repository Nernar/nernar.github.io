# TODO

Описанные способы касаются генерации структур на сервере.

## Без патчинга

1. Получить текущий экземляр `Level` (Actor::getLevel, BlockSource::getLevel и так далее).
2. Получить `StructureManager` (Level::getStructureManager) и `JigsawStructureRegistry` (Level::getJigsawStructureRegistry) опционально.
3. Загрузить структуру в формате NBT (в целом, можно загружать напрямую из Java версии игры, хотя и не факт что все данные сохранятся; впрочем, все внутреигровые структуры загружаются именно так) с помощью `StructureManager::getOrCreateLegacy(structurePath)` или воспользоваться встроенным форматом MCStructure с помощью `StructureManager::getOrCreate(structurePath)`, экспортировать данные в который можно с помощью команды `/structure save` или структурного блока.
4. Подготовить предопределенные параметры для установки структуры с помощью `LegacyStructureSettings::LegacyStructureSettings()` или `StructureSettings::StructureSettings()`.
5. Полученный экземляр `LegacyStructureTemplate` установить в любом событии генерации с помощью `LegacyStructureTemplate::placeInWorldChunk(BlockSource&, BlockPos const&, LegacyStructureSettings&)` или `StructureTemplate` с помощью `StructureTemplate::placeInWorld(BlockSource&, BlockPalette const&, BlockPos const&, StructureSettings const&, StructureTelemetryServerData*, bool)`.

:::tip Осторожно, внутреигровые структуры!

В отличии от NBT, формат MCStructure поддерживает анимации размещения, палитры блоков и второй слой дополнительных блоков. Но к примеру, анимации, требуют заблаговременной настройки с помощью `StructureAnimationData` и установки с помощью `StructureManager::queueLoad(StructureAnimationData*)`.

:::

:::info Настроил, загрузил и установил

В целом, описание базовых условий можно совершить с помощью пакетов поведения. Вернитесь к первому шагу и получите `FeatureRegistry` (Level::getFeatureRegistry), теперь можно зарегистрировать одиночную структуру в описании обычного файла *definitions/features*. Не забудьте загрузить ее с помощью `FeatureRegistry::registerFeature<StructureTemplateFeature>(featureIdentifier)` и установить `StructureTemplateFeature::place(IBlockWorldGenAPI&, BlockPos const&, Random&, RenderParams&)`.

:::

## Встраиваем в генератор

Создадим собственную структуру, однако помимо этого многие методы необходимо расширить с помощью любого нам доступного инжектора. Рассмотрим изменение на примере генератора обычного мира, принципы генерации во всех измерениях схожи.

1. Унаследуемся от `StructureFeature::StructureFeature(unsigned int)`, где единственный аргумент это случайный сид:

    1. Реализуйте метод `bool isFeatureChunk(BiomeSource const&, Random&, ChunkPos const&, unsigned int)`, используя аргументы для определения будет ли структура сгенерирована в этом чанке.
    2. Создайте пустой метод `StructureStart* createStructureStart(Dimension&, BiomeSource&, Random&, ChunkPos const&)`, мы определимся с ним позже.
    3. По желанию дополните класс методом `getNearestGeneratedFeature(Dimension&, BiomeSource&, BlockPos const&, BlockPos&)`, который найдет структуру по ближайшим координатам (в первую очередь, для команды `/locate`).

2. Дополним генератор обычного мира:

    1. Расширьте символ `OverworldGenerator::OverworldGenerator(Dimension&, unsigned int, bool, Biome const*)` (пост-патчинг), где второй аргумент определяет случайный сид мира, а следующий нужно ли генерировать структуры; создайте экземляр вашей структуры, сохранив ее адрес в памяти таблицы генератора.
    2. Добавьте структуры в сгенерированные чанки, для этого во время генерации каждого чанка вызывается `OverworldGenerator::_prepareStructureBlueprints(ChunkPos const&, BiomeSource&)`; добавьте в него расширение `StructureFeature::createBlueprints(<адрес вашей структуры>, Dimension&, ChunkPos const&, BiomeSource&)`.
    3. Расширьте `OverworldGenerator::postProcess(ChunkViewSource&)` до `StructureFeature::postProcess(<адрес вашей структуры>, BlockSource&, Random&, int, int)`, что завершит настройку генератора (установка дверей, генерация карт и т.п.).
    4. Не забудьте очистить буферы генератора структур, расширив метод `OverworldGenerator::garbageCollectBlueprints(buffer_span<ChunkPos>)` с помощью `StructureFeature::garbageCollectBlueprints(<адрес вашей структуры>, buffer_span<ChunkPos>, unsigned int)`.
    5. Добавим определение структуры на определенном блоке, для этого расширим `OverworldGenerator::getFeatureTypeAt(BlockPos const&)` до `StructureFeature::isInsideBoundingFeature(int, int, int)` с координатами; не забывайте про уже занятые [типы структур](#внутреигровые-структуры).
    6. Расширим метод `OverworldGenerator::findNearestFeature(StructureFeatureType, BlockPos const&, BlockPos&)` для работы команды `/locate` с помощью проверки на тип запрашиваемой структуры (измените таблицу `StructureFeatureType`), а также функции поиска. Создайте ее, либо используйте существующую для поиска структуры по оффсету между двумя из них `StructureFeature::findNearestFeaturePositionBySpacing(Dimension&, StructureFeature&, BiomeSource&, BlockPos const&, BlockPos&, int, int, int, bool, int)`.
    7. Опционально расширьте `OverworldGenerator::addHardcodedSpawnAreas(LevelChunk&)` с помощью `StructureFeature::generateHardcodedMobSpawns(<адрес вашей структуры>, LevelChunk&)`; расширьте `OverworldGenerator::postProcessMobsAt(BlockSource&, int, int, Random&)` до `StructureFeature::postProcessMobsAt(BlockSource&, int, int, Random&)`; по желанию добавьте одноименный метод в `OverworldGenerator::debugRender()` для отладки.

3. Создадим начало нашей структуры, от нее отсчитывается все остальное:

    1. Унаследуемся от `StructureStart::~StructureStart()`, необходимо определить размеры с помощью `StructureStart::calculateBoundingBox()`.
    2. Изменим метод первой части второго шага, добавив реализацию созданного `StructureStart`, достаточно вызвать конструктор. Можно унаследовать части друг от друга; например, реализовав `StructurePiece`, унаследовать его в вашем `StructureStart`.
    3. Размещаем структуры, переопределив `StructureStart::postProcess(BlockSource&, Random&, BoundingBox const&)`, например как в шаге 5 прошлого параграфа.

## Маркеры, пулы и кусочки

## Внутреигровые структуры

```js
{
    END_CITY = 1,
    NETHER_FORTRESS = 2,
    MINESHAFT = 3,
    OCEAN_MONUMENT = 4,
    STRONGHOLD = 5,
    /**
    * **Jungle Pyramid** (Jungle, Jungle Hills),
    * **Swampland Hut** (Swampland, Swampland Mutated),
    * **Desert Pyramid** (Desert, Desert Hills) and
    * **Igloo** (Ice Flats, Taiga Cold).
    */
    SCATTERED_FEATURE = 6,
    VILLAGE = 7,
    WOODLAND_MANSION = 8,
    SHIPWRECK = 9,
    BURIED_TREASURE = 10,
    OCEAN_RUIN = 11,
    PILLAGER_OUTPOST = 12,
    RUINED_PORTAL = 13,
    BASTION = 14
}
```

Наглядно посмотреть на их расположение по оффсетам можно на сайте [Seed Map](https://www.chunkbase.com/apps/seed-map), выберите версию Bedrock 1.16 и выберите необходимые части генератора. Воспользуйтесь тем же сидом в игре, в том числе и для эспериментов с генерацией собственных структур.
