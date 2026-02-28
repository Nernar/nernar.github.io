# Список изменений

## 3.1.1b128 (@rislaed)

Хотфикс прошлого обновления и несколько полезных улучшений

### Исправления {#3.1.1b128-fixes}

- Исправлен отлов ошибок в некоторых скомпилированных библиотеках, что также исправило стактрейсы
- Исправлено дублирование сейверов TileEntity из-за ошибок модов, что могло приводить к частичной утере данных
- Исправлена [регистрация TileEntity](/api/namespace/TileEntity#registerPrototype) в случае повторной регистрации, либо с некорректными идентификаторами
- Ограничено количество сообщений на экранах с ошибками, исключая этап загрузки, что также исправило некоторые вылеты от нехватки памяти
- Исправлено открытие некоторых страниц в браузере модов

## 3.1.1b127

### Нововведения {#3.1.1b127-new-features}

- Добавлен модуль [UpdatableScheduler](/api/namespace/UpdatableScheduler), добавляющий новые возможности для настройки тика апдейтаблов и их оптимизации, старые апдейтаблы и тайл энтити также получили эти возможности посредством [_handle](/api/interface/Updatable#_handle) (@zheka2304)
- В [BlockSource](/api/class/BlockSource#playSound) (работают в мультиплеере), [World](/api/namespace/World#playSound) и [UI](/api/namespace/UI#playSound) (работают на клиенте) добавлены методы для проигрывания и остановки звуков (@rislaed)
- В Player добавлены методы для [получения вектора ввода](/api/namespace/Player#getMoveInputVector) игрока и [смены перспективы](/api/namespace/Player#setViewPerspective) (@rislaed)
- Реализованы методы [Entity.getAge](/api/namespace/Entity#getAge)/[Entity.setAge](/api/namespace/Entity#setAge) (@rislaed)
- Добавлены методы [Game.getPackVersion](/api/namespace/Game#getPackVersion)/[getPackVersionCode](/api/namespace/Game#getPackVersionCode) (@rislaed)

### Улучшения и доработки API {#3.1.1b127-api-improvements-and-refinements}

- Модуль [Item](/api/namespace/Item) переписан на кодген, добавлены новые методы для получения свойств и управления предметами (@rislaed)
- Перенос [ItemExtraData](/api/class/ItemExtraData) и [ItemInstance](/api/interface/ItemInstance) на кодген и вынос их в API для Java (@zheka2304)
- [BlockState](/api/class/BlockState) перенесен на кодген и вынесен в API для Java, калбеки, получающие раньше объект блока `{ id, data }` ([Tile](/api/interface/Tile)) теперь получают BlockState (@zheka2304)
- Все эксепшены из Java, включая ошибки из методов в кодгене теперь могут быть пойманы в скриптах, улучшено отображение Java стактрейсов таких ошибок (@zheka2304)
- Добавлены [компактные стактрейсы](/api/namespace/Logger#captureRhinoStackTrace) в ошибки об отсутствии идентификаторов предметов и рецептов, при логировании ошибок также автоматически добавляются стактрейсы (@rislaed)
- Новые и сгенерированные методы API теперь могут приводить строковые параметры к числовым значениям (@zheka2304)

### Исправления {#3.1.1b127-fixes}

- Исправлен краш при попытке [создать кидаемый предмет](/api/namespace/Item#createThrowableItem) (@rislaed, @zheka2304)
- Исправлены рандомные краши при попытке перехода между измерениями (@zheka2304)
- Отключена гарантированная инициализация тайл энтити при получении через [getTileEntity](/api/namespace/TileEntity#getTileEntity), которая ломала напряжение в IC2 (@zheka2304)
- Исправлена возможная ошибка при подключении по сети (@reider745)
- Событие [redstone](/api/interface/TileEntity#redstone) теперь откладывается до инициализации тайл энтити (@zheka2304)
- Исправлены ошибки при отправке изменений значений NaN биндингами в контейнерах (@zheka2304)
- Исправлен метод [Entity.getAllInsideBox](/api/namespace/Entity#getAllInsideBox) (@zheka2304)
- Исправлена загрузка ресурспаков для определенных версий, если мод выключен и их возможное дублирование (@rislaed)
- Исправлена работа .redirect в модах, теперь браузер отображает информацию об этом (@rislaed)
- Исправлены методы импорта контента и загрузка из файлов в игре (@rislaed)

## 3.1.0b126

### Нововведения {#3.1.0b126-new-features}

- Добавлены методы для манипуляции погодой, атмосферой и другими [свойствами измерений](/api/namespace/Dimensions#CustomDimension) (@rislaed)
- Добавлена поддержка кастомных [звуков блоков](/api/namespace/Block#sound) (@rislaed)
- Добавлена поддержка неймспейсов для блоков и предметов и методы для работы с ними (@zheka2304, @rislaed)
- Поддержка парсинга HTML-цветов в [элементах интерфейса](/api/namespace/UI#FontColor) (@rislaed)
- Добавлен метод для получения списка кастумных измерений (@rislaed)

### Улучшения и доработки API {#3.1.0b126-api-improvements-and-refinements}

:::tip Реализована кодогенерация для API

Что позволит заметно повысить производительность и упростить введение новых методов API, включая поддержку модов на Java (@zheka2304, @rislaed). Старое API будет постепенно переноситься на новое.

:::

- Восстановление работы и перенос на кодогенерацию модуля PathNavigation (@zheka2304)
- Перенос модуля [BlockSource](/api/class/BlockSource) на кодогенерацию (@reider745)
- Добавлены методы для манипуляций с модулями API: [injectBindingsIntoScope](/api/function/injectBindingsIntoScope), [injectModule(s)IntoScope](/api/function/injectModuleIntoScope) (@rislaed)

### Исправления {#3.1.0b126-fixes}

- Исправлено событие получения урона (@zheka2304)
- Исправлен метод [BlockSource.fetchEntitiesOfTypeInAABB](/api/class/BlockSource#fetchEntitiesOfTypeInAABB) (@zheka2304)
- Исправлено использование предметов из модов на некоторые ванильные блоки (@rislaed)
- [getTileEntity](/api/namespace/TileEntity#getTileEntity) теперь гарантированно возвращает уже загруженный TileEntity (@reider745)
- Исправлено отображение некоторых предметов в контейнерах (@reider745)
- Исправлено изменение насыщения игроков (@reider745)
- Исправлен дроп изумрудной руды (@mineexplorer)
- Исправлены модели адских заборов в интерфейсах (@mineexplorer)
- Исправлен кастомный цвет неба, заката и тумана (@zheka2304)
- Отключена поддержка Realms (@rislaed)

## 3.1.0b125 (@reider745, @rislaed)

### Нововведения {#3.1.0b125-new-features}

- Добавлен метод [Entity.playAnimation](/api/namespace/Entity#playAnimation)
- Добавлен метод [BlockSource.setRedstoneSignal](/api/class/BlockSource#setRedstoneSignal), добавляющий/устанавливающий блоку источник редстоун сигнала и [BlockSource.getRedstoneSignal](/api/class/BlockSource#getRedstoneSignal)
- Добавлен модуль для пользовательских шкал [CustomScale](/api/class/CustomScale)
- Добавлены методы [Game.addWorldToCache](/api/namespace/Game#addWorldToCache)/[updateWorlds](/api/namespace/Game#updateWorlds)/[getWorldsCount](/api/namespace/Game#getWorldsCount)
- Добавлен метод [BlockSource.randomTick](/api/class/BlockSource#randomTick)
- Добавлен метод [NativeTileEntity.tick](/api/interface/NativeTileEntity#tick)

### Исправления {#3.1.0b125-fixes}

- Исправление сохранений
- Исправление цвета неба/тумана/воды измерений
- Исправлен модуль [PathNavigation](/api/namespace/Entity#PathNavigation)
- В режиме разработчика теперь ошибки компиляции отображаются до входа в игру, а не после полной иницилизации
- Исправление генерации палитры блоков для синхронизации с сервером
- Параметры для блока [burnOdds](/api/namespace/Block#burn_odds)/[flameOdds](/api/namespace/Block#flame_odds)
- Фикс некоторых иконок ванильных блоков в интерфейсе

## 3.0.0b124

### Перенос на Minecraft 1.16.201 ARM64

Эта версия получила поддержку 64 битных архетиктур (arm64-v8a), что также избавило ее от ряда вылетов и повысило общую стабильность. Ожидаются некоторые ошибки, которые будут исправлены с ближайшими обновлениями.

## 2.4.0b123 (@rislaed)

Скорее всего, это последняя версия для архитектур ARM32 (armeabi-v7a). Все последующие обновления выходят для 64 битных устройств и данные паки будут получать только исправления критических ошибок.

:::note Функции и исправления браузера модов

- Добавлены разделы зависимостей и дополнений на страницах модов, теперь отображаются связанные моды и сборки
- Улучшено переключение на прокси, при ошибке выводится сообщение с рекомендацией использовать VPN
- Метка \[Адаптировано\] удалена, неадаптированные моды теперь помечаются как \[Устарело\]
- Добавлен переключатель для включения/отключения модов (доступен только во вкладке установленных модов)
- Добавлен раздел со скриншотами для сборок (не отображается, если в сборке только один скриншот), включены зависимости и комментарии
- Категория популярные заменена на редакцию для перемещения устаревших модов в конец списка
- Иконки оптимизированы под размеры экранов смартфонов, некоторые заменены на более подходящие
- Поиск с префиксом icmods: теперь позволяет искать несколько модов одновременно и корректно открывает сборки
- Убрана кликабельность тега с количеством модов; исправлено ошибочное отображение настроек на страницах списков модов

:::

- Откат изменений обновления [b122o1](#240b122o1) для Inner Core Test
- Добавлен [EDamageCause](/api/enum/EDamageCause) для определения типов урона мобов, стандартное значение урона для [ToolAPI.registerSword](/api/namespace/ToolAPI#registerSword) установлено на 4
- Исправлено отображение переводов для заголовков в конфиге, [ItemContainer.sealSlot](/api/class/ItemContainer#sealSlot) корректно перезаписывает *getTransferPolicy*, [Entity.health](/api/namespace/Entity#health) снова работает
- Исправлена реализация Java-абстрактных классов в JavaScript
- Добавлены методы для клиентской работы с Updatable: [getAllLocal](/api/namespace/Updatable#getAllLocal) и [getLocalSyncTime](/api/namespace/Updatable#getLocalSyncTime)
- Добавлена возможность применить события клика и долгого клика на слотах инвентаря, исправлены обновления и изменение размера слотов

## 2.4.0b122o1

- Множественные небольшие улучшения внутренней работы движка

## 2.4.0b122 (@reider745)

- Добавлены методы [World.addListenerChunkStateChanged(listener, statesList)](/api/namespace/World#addListenerChunkStateChanged)/[addLocalListenerChunkStateChanged](/api/namespace/World#addLocalListenerChunkStateChanged) для отслеживания загрузки и выгрузки чанков
- Добавлена возможность получения игровых настроек с помощью [Game.getOption(key)](/api/namespace/Game#getOption), воспользуйтесь [Game.getOptions](/api/namespace/Game#getOptions) для получения списка всех доступных ключей
- Добавлен каллбек *OptionsChanged*, вызывающийся сразу после завершения изменения игровых опций
- Реализованы пакеты с двоичными данными, передайте массив с байтами для их отправки
- Исправлена работа раздатчиков с ведрами жидкостей из модов, а также передача идентификатора игрока в каллбек *CraftRecipePreProvided*

## 2.4.0b120-121 (@reider745)

- Исправления прокси браузера модов
- Исправления повреждающихся сохранений в некоторых случаях, из-за коллизии
- Исправлен текст сообщений об ошибках в модах
- Добавлен модуль API [GameController](/api/namespace/GameController), который позволяет эмулировать действия игрока из модов
- Добавлен метод [Entity.getAllLocal](/api/namespace/Entity#getAllLocal)
- Исправлены каллбеки *EntityAddedLocal*/*EntityRemovedLocal* в мультиплеере
- Исправлен метод [Player.localPlayerTurn](/api/namespace/Player#localPlayerTurn)
- Исправления крашей в мод браузере
- Исправления некоторых крашей в игре, в частности от всплывающих сообщений на некоторых прошивках

## 2.4.0b118-119 (@reider745)

- Улучшение сетевого протокола
- Добавлены методы BlockSource для управления погодой
- Добавлен метод [Particles.addBreakingItemParticle](/api/namespace/Particles#addBreakingItemParticle) для создания частиц обломков предмета
- Добавлены методы [Item.setShouldDespawn](/api/namespace/Item#setShouldDespawn)/[setFireResistant](/api/namespace/Item#setFireResistant)/[setExplodable](/api/namespace/Item#setExplodable)
- Исправлена утечка памяти при рендере моделей

## 2.4.0b116-117

Добавлена поддержка серверов с модами на основе [ядра ZoteCore](https://github.com/Reider745/ZoteCoreLoader), что также включает в себя:

- Исправления списка серверов (для модпаков список хранится в основной папке модпака)
- Исправление не статичного uuid игрока (от параметров XUID и ника игрока), исправляет сохранения инвентаря в локальной игре
- Добавлена функция синхронизации порта сокет-сервера
- Добавлена синхронизация id биомов
- Другие различные исправления для серверов

:::note Другие изменения (@reider745)

- Добавлен прокси в мод браузере, который включается при невозможности подключиться к основной игре (@spawnrys)
- Исправления синхронизации [клиентской части TileEntity](/api/namespace/TileEntity#LocalTileEntityPrototype), добавлены новые методы [onConnectionPlayer](/api/namespace/TileEntity#onConnectionPlayer)/[onDisconnectionPlayer](/api/namespace/TileEntity#onDisconnectionPlayer)
- Теперь в сохранениях вместо ошибки будет передаваться [пустой объект](/api/namespace/Saver#getDefaultSaves)
- Добавлено условие [ICRender.BlockState(x, y, z, stateId, valueState)](/api/namespace/ICRender#BlockState)
- Исправлена работа интерфейсов с челкой (добавлен переключатель в настройки)
- Оптимизация генерации моделей предметов (добавлены настройки)
- Исправлен [loadCustom](/api/namespace/Animation#loadCustom) у статических моделей на подключенных клиентах
- Исправлен [Entity.getMobile](/api/namespace/Entity#getMobile)
- [World.getWorldTime](/api/namespace/World#getWorldTime) может возвращать время на клиенте

:::

:::note Другие изменения (@zheka2304)

- Исправлены частые краши Inner Core при запуске
- Обновлен до последней версии Rhino - движок javascript для модов
- Различные оптимизации нативной части Inner Core
- Добавлен метод [Player.localPlayerTurn(x, y)](/api/namespace/Player#localPlayerTurn)
- В PlayerActor добавлены методы [canFly](/api/class/PlayerActor#canFly)/[setCanFly](/api/class/PlayerActor#setCanFly), [setPlayerBoolean](/api/class/PlayerActor#setPlayerBooleanAbility)/[FloatAbility](/api/class/PlayerActor#setPlayerFloatAbility), [getPlayerBoolean](/api/class/PlayerActor#getPlayerBooleanAbility)/[FloatAbility](/api/class/PlayerActor#getPlayerFloatAbility)
- Исправлено то что модуль [World](/api/namespace/World) не работал при подключении в мультиплеере
- Добавлена поддержка [пустых ведер](/api/namespace/Block#bucket) для жидкостей
- Исправлен сломанный [эвент наступания на блок](/api/namespace/Block#registerEntityStepOnFunction)
- Исправлено перемещение игрока с помощью [Dimensions.transfer](/api/namespace/Dimensions#transfer) в тоже измерение где он находится
- Небольшие исправления генератора кастомных измерений
- Исправлена установка некоторых модов

:::

## 2.3.1b115

- Множество улучшений производительности, стабильности и небольших фиксов
- Исправлен поиск и отсутствие некоторых предметов в верстаке (например аккумулятор из IC2)
- Поддержка приоритета загрузки модов
- Добавлена экспериментальная встроенная [ECS](/api/namespace/ECS)
- Добавлен метод [ItemModel.setSpriteHandRender](/api/interface/ItemModel#setSpriteHandRender)
- Добавлен метод [CustomDimensionGenerator.setGenerateCaves(generate[, generateUnderwater])](/api/namespace/Dimensions#setGenerateCaves), исправлена генерация подземных водоемов по умолчанию
- В BlockSource добавлен метод [listEntitiesOfTypeInAABB(x1, y1, z1, x2, y2, z2, stringType)](/api/class/BlockSource#listEntitiesOfTypeInAABB), исправлен [listEntitiesInAABB](/api/class/BlockSource#listEntitiesInAABB) с теми же аргументами
- Добавлены методы [Player.getLocal()](/api/namespace/Player#getLocal) и [Player.getServer()](/api/namespace/Player#getServer)
- Добавлены методы [UI.getMinecraftUiScale()](/api/namespace/UI#getMinecraftUiScale) и [UI.getRelMinecraftUiScale()](/api/namespace/UI#getRelMinecraftUiScale)
- Исправлен краш кастомных энчантов
- Исправлена установка [сопротивления отбрасыванию броне](/api/namespace/Item#knockbackResist)
- Исправления процесса установки модов

## 2.2.1b114

Это обновление включает в себя ряд глобальных оптимизаций, которые должны заметно улучшить производительность.

:::note

Если у вас установлен мод [Kernel Extension](https://icmods.mineprogramming.org/mod?id=831), для работы требуется обновить его до последней версии.

:::

## 2.2.1b107-108

- Исправлен и улучшен API верстака, добавлена полная поддержка рецептов 2х2
- Исправлен баг, из-за которого верстак не вызывал срабатывания каллбека смены экрана
- Исправлен баг прошлой версии, из-за которого некоторые предметы и блоки создавались неправильно

## 2.2.1b106

- Ванильный верстак теперь поддерживает полный функционал рецептов из модов. Замена интерфейса верстака теперь не используется, но ее можно включить в настройках, если возникнут проблемы.
- Оптимизация [доступа к TileEntity по координатам](/api/namespace/TileEntity#getTileEntity)
- Оптимизация и исправления вызовов C++ -> Java

## 2.2.1b105

- Добавлена [экспериментальная возможность](https://gist.github.com/zheka2304/188a43e9ee130c1830af6cdc308cbeff) создания зачарований
- Небольшая оптимизация вызовов C++ -> Java
- Исправления некоторых отсутствующих иконок в интерфейсе

## 2.2.1b104

- Исправлен баг, из-за которого последний предмет в руке не тратился
- Исправлены анимированные текстуры жидкостей
- Исправлены кастомные ведра в выживании
- Теперь изменение предмета в событии *ItemUse* без его отмены работает корректно
- Добавлены методы [Block.registerClickFunction[ForID](nameId/id, (coords, item, block, player) => void)](/api/namespace/Block#registerClickFunction)
- Исправлены координаты, передаваемые в событие раздатчика, добавлен параметр слота (4 аргумент)

## 2.2.1b103

- При создании жидкости теперь можно автоматически создать ведро с полным функционалом [(см. документацию)](/api/namespace/Block#bucket)
- Добавлен параметр [isRenewable](/api/namespace/Block#isRenewable) для жидкостей, отвечающий за то, является ли она возобновляемой
- Исправлено взаимодействие ведер с жидкостями из модов

## 2.2.1b102

- Добавлен [функционал](https://gist.github.com/zheka2304/a93f32f612750cbffc637a265fbf9027) для создания жидкостей
- Исправлены различные баги менеджера модов, добавлена возможность искать мод по его идентификатору
- Добавлены методы [Entity.hasEffect(entity, effectId)](/api/namespace/Entity#hasEffect) и [Entity.getEffect(entity, effectId)](/api/namespace/Entity#getEffect)
- Добавлен метод [BlockSource.setDestroyParticlesEnabled(boolean)](/api/class/BlockSource#setDestroyParticlesEnabled)
- Исправлено то, что [Item.invokeItemUseOn](/api/namespace/Item#invokeItemUseOn) не использовал BlockSource переданной сущности
- Исправлены проблемы с ломанием блоков ванильными мечами
- Исправлен вылет при уничтожении присоединяемой модели
- Исправлено создание BlockState по идентификатору блока
- Исправлено, что [BlockState.addStates](/api/class/BlockState#addStates) не принимал объекты
- Другие, менее значительные исправления

## 2.2.1b101

- Исправлен баг, из-за которого блоки забора могли неправильно отображаться в мире

## 2.2.1b100

- Добавлен метод [Block.getMaterial(blockId)](/api/namespace/Block#getMaterial)
- Добавлены методы PlayerActor: [getItemUseDuration()](/api/class/PlayerActor#getItemUseDuration), [getItemUseIntervalProgress()](/api/class/PlayerActor#getItemUseIntervalProgress), [getItemUseStartupProgress()](/api/class/PlayerActor#getItemUseStartupProgress)
- Исправлена ошибка из-за которой список модов в мультиплеере строился некорректно
- Исправлено то, что [BlockSource.listEntitiesInAABB](/api/class/BlockSource#listEntitiesInAABB) не возвращал игрока, если ему не передавали параметров для фильтрации

## 2.2.1b99

- Исправлен баг, из-за которого синхронизация блоков в мультиплеере могла не работать
- Исправлена проверка совпадения списка модов в мультиплеере
- Исправлен вылет при запуске на старых версиях Android на некоторых устройствах

## 2.2.1b98

- Исправлен [Commands.exec](/api/namespace/Commands#exec)
- Исправлен [Entity.getNameTag](/api/namespace/Entity#getNameTag)

## 2.2.1b97

- Теперь при игре по сети производится дополнительная синхронизация идентификаторов вариаций блоков, которая должна убрать ошибку с рассинхроном идентификаторов даже при разных модах на подключенных устройствах.

## 2.2.1b96

- Добавлены методы [Recipes.getAllWorkbenchRecipes()](/api/namespace/Recipes#getAllWorkbenchRecipes) и [Recipes.getAllFurnaceRecipes()](/api/namespace/Recipes#getAllFurnaceRecipes)
- Добавлен метод [BlockSource.getBiomeDownfallAt(x, y, z)](/api/class/BlockSource#getBiomeDownfallAt)
- Добавлены настройки элемента слота: [iconScale](/api/namespace/UI#iconScale) и [disablePixelPerfect](/api/namespace/UI#disablePixelPerfect)
- Добавлены методы UI.Window: [updateScrollDimensions()](/api/namespace/UI#updateScrollDimensions) и [updateWindowPositionAndSize()](/api/namespace/UI#updateWindowPositionAndSize)
- Добавлен новый тип расположения текста: 3 - [ALIGN_CENTER_HORIZONTAL](/api/namespace/UI#ALIGN_CENTER_HORIZONTAL)
- Добавлен метод [runOnClientThread(function)](/api/function/runOnClientThread), аналог [runOnMainThread](/api/function/runOnMainThread), но для клиентского потока
- Исправления числовых идентификаторов предметов и связанных рецептов - звезда ада, арбуз, пластинки, лошадиная броня, огненный шар, фейерверки
- Исправлена модель нагрудника для брони из модов

## 2.2.1b95

- Добавлены методы BlockSource [setExtraBlock(x, y, z, BlockState/\[id, data\])](/api/class/BlockSource#setExtraBlock) и [getExtraBlock(x, y, z) -> BlockState](/api/class/BlockSource#getExtraBlock) для доступа и установки дополнительных блоков, таких как вода внутри других блоков
- Добавлены параметры описания блоков [can_contain_liquid](/api/namespace/Block#can_contain_liquid) и [can_be_extra_block](/api/namespace/Block#can_be_extra_block)
- Добавлены методы [Block.canContainLiquid(id)](/api/namespace/Block#canContainLiquid) and [Block.canBeExtraBlock(id)](/api/namespace/Block#canBeExtraBlock)
- Исправлена ошибка, из-за которой изменения настроек не применялись в первый запуск после изменений
- Исправлены вылеты в конфигурации модов
- Исправлена ошибка, из-за которой настройки языка загружались некорректно
- Добавлена настройка для разработчиков, чтобы создавать дампы информации о всех блоках

## 2.2.1b94

- Исправлен баг с выбором сборок, возникший в версии [2.2.1b93](#221b93)
- Исправлен метод [Item.isValid(id)](/api/namespace/Item#isValid), добавлены методы [IDRegistry.getStringIdAndTypeForItemId(id)](/api/namespace/IDRegistry#getStringIdAndTypeForItemId), [IDRegistry.getTypeForItemId(id)](/api/namespace/IDRegistry#getTypeForItemId), [IDRegistry.getStringIdForItemId(id)](/api/namespace/IDRegistry#getStringIdForItemId)
- Исправлен [getEnchantName](/api/class/ItemExtraData#getEnchantName) у ItemExtraData

## 2.2.1b93

- Исправлена еда, добавляемая модами
- Восстановлен базовый функционал [PathNavigation](/api/namespace/Entity#getPathNavigation)
- Добавлены методы для изменения цвета и дистанции подводного тумана, исправлен подводный туман в кастомных измерениях
- Добавлены события *EntityAddedLocal* и *EntityRemovedLocal* - аналоги *EntityAdded* и *EntityRemoved* на стороне клиента
- Исправлен метод [Entity.setOffhandItem](/api/namespace/Entity#setOffhandItem)
- Добавлен метод [Dimensions.getAllRegisteredCustomBiomes()](/api/namespace/Dimensions#getAllRegisteredCustomBiomes), возвращающий объект, содержащий все кастомные биомы
- Исправления вылетов во время игры
- Исправления ошибок и небольшой редизайн менеджера модов
- Исправлена ошибка, из-за которой могла загрузиться не та сборка модов
- Улучшена поддержка китайского языка

## 2.2.1b92

- Ошибки обновляемых объектов (например механизмов) теперь не выключают все моды, вместо этого они отключают конкретный обновляемый объект.
- Исправления вылетов на некоторых устройствах

## 2.2.1b90-91

- Хотфикс ошибок прошлой версии

## 2.2.1b89

- Исправлены ошибки, вызванные рассинхронизацией блоков в мультиплеере и работа верстака у подключенных игроков
- Добавлена возможность работы с [параметрами ванильных блоков (block states)](/api/class/BlockState)
- Исправлены ошибки с вызовом событий генерации
- Улучшена стабильность сохранений
- Исправлена вкладка ссылок
- Исправлен баг с лишними предметами в инвентаре креатива

## 2.2.1b88

- Добавлен коллбек поднятия существом дропа *EntityPickUpDrop(entity, dropEntity, dropStack, count)*, на данный момент вызывается только для игроков
- Обновлена страница ссылок, добавлены ссылки на статьи по разработке модов и сборок
- Исправлены ошибки ItemModel, другие ошибки и вылеты

## 2.2.1b87

- Исправлены ошибки системы паков, а также ошибки менеджера модов
- Исправлены отсутствующие и неправильные рецепты верстака, а также отсутствующие иконки блоков и предметов
- Добавлены полезные ссылки в пункте меню "Настройки и Ссылки"

## 2.2.1b86

- Общая оптимизация, затрагивающая многие аспекты игры, которая улучшит производительность в мире. Больше всего это проявится при нескольких крупных модах.
- Исправлены сильные лаги в инвентаре креатива, если присутствуют предметы с дополнительными данными
- Немного оптимизирован поиск в креативе

## 2.2.1b85

- Глобальное обновление менеджера модов, интерфейс полностью переработан, исправлены недочеты предыдущих версий
- Добавлена поддержка сборок модов, их установки, изменения и создания своих
- Модели блоков теперь загружаются быстрее и потребляют меньше оперативной памяти
- Методы [BlockSource.breakBlock](/api/class/BlockSource#breakBlock)/[ForJsResult](/api/class/BlockSource#breakBlockForJsResult) теперь вызывают событие *DestroyBlock*, если им был передан игрок или сущность, которая существует и находится в том же измерении, что и BlockSource (и вызов не был отменен в событии *BreakBlock*)

## 2.2.0b84

- Добавлены события *PreProcessChunk* и *PostProcessChunk* - универсальные события генерации, первое из которых вызывается перед генерацией ванильных структур, а второе после. Все остальные события генерации вызываются после генерации ванильных структур, но до *PostProcessChunk*.
- Исправлены отсутствующие рецепты кровати и сундука
- Исправлены установка мещи в ActorRenderer
- Исправлены редкие вылеты при входе и выходе из мира
- Исправлены непрозрачность текстур на далеких блоках
- Исправлен *config.json* для модов с *.redirect*
- Элементу слота добавлен binding selection_forced

## 2.2.0b83

- Переработана система дропа блоков из модов
- Добавлено событие *BreakBlock(BlockSource, position, block, isDropAllowed, player, item)* - вызывается при уничтожении блока, в отличие от DestroyBlock вызывается не только при уничтожении игроком, но и при уничтожении блока новыми методами BlockSource. Событие используется в основном для реализации дропа с блоков, логика при уничтожении руками должна находиться в *DestroyBlock*.
- Функции дропа теперь используют *BreakBlock* за основу
- Добавлены методы BlockSource: [breakBlock(x, y, z, isDropAllowed\[, actor\]\[, item\])](/api/class/BlockSource#breakBlock) - уничтожает блок, вызывая событие *BreakBlock*, [breakBlockForJsResult(x, y, z\[, actor\]\[, item\])](/api/class/BlockSource#breakBlockForJsResult) - то же самое, что и breakBlock, однако дроп и опыт не выпадает, а возвращается как результат, формат: `{ experience:, items: [{ id:, count:, data:, extra: }, ... ] }`

## 2.2.0b82

- Добавлены методы контейнера [setSlotSavingEnabled(name, enabled)](/api/class/ItemContainer#setSlotSavingEnabled), [setGlobalSlotSavingEnabled(enabled)](/api/class/ItemContainer#setGlobalSlotSavingEnabled), которые контролируют то, какие слоты сохраняются
- Добавлен параметр методу [destroy](/api/namespace/TileEntity#destroy) в TileEntity, отвечающий за то, было ли уничтожение вызвано событием *DestroyBlock*
- Оптимизированы методы редактирования инвентаря игрока
- Исправлена установка способностей игрока, включая полет
- Исправлен серверный каллбек открытия [ItemContainer](/api/class/ItemContainer), который происходил до отправки пакета открытия
- Исправлены некоторые рецепты печи
- Исправлен баг с загрузкой на старых версиях Android
- Исправлен баг с ломанием льда

## 2.2.0b79-81

- Добавлены отсутствующие и исправлены существующие рецепты в верстаке
- Исправлен баг, из-за которого новая версия вылетала при запуске на некоторых устройствах (начиная с [1.16.201](#220b75))
- Исправлен баг, из-за которого были частые вылеты при запуске на некоторых устройствах (старый баг, начиная с [1.11.4](#200-beta))

## 2.2.0b78

- Продолжение исправления генерации мира

## 2.2.0b77

- Исправлена генерация мира, которая вызывалась несколько раз на чанк. Это сильно снизит лаги от генерации мира.
- Генерация модов теперь проиcходит ПОСЛЕ ванильной генерации
- Еще одна попытка исправить загрузку модов на некоторых устройствах
- Добавлены методы логгера: [Logger.debug(tag, message)](/api/namespace/Logger#debug), [Logger.info(tag, message)](/api/namespace/Logger#info), [Logger.error(tag, message\[, error\])](/api/namespace/Logger#error)

## 2.2.0b76

- Исправлена загрузка модов с ресурспаками
- Исправлены ошибки, вызываемые сохранением
- Исправлена загрузка модов на некоторых устройствах
- Добавлен параметр "category" при [Item.createItem](/api/namespace/Item#category)

## 2.2.0b75

### Перенос на Minecraft 1.16.201

- В мультиплеере может возникнуть проблема синхронизации ванильных ID блоков, для ее решения можно поменять местами хоста и клиента
- Добавлен API для рендера брони и присоединяемых к мобам моделей
- Переписан загрузчик модов
- Переписана система сохранений и некоторые другие модули
- Начата работа над ECS и Java API

## Inner Core Legacy

:::note Что такое Inner Core для Horizon?

Horizon представляет собой универсальную платформу для запуска мобильных игр с модами и включает в себя обновленный Inner Core, предшественник которого по сей день являлся лучшим ядром модов на Minecraft PE, с огромной библиотекой из модов, накопленной за последние годы. Однако новый Inner Core обладает рядом существенных улучшений и поддерживает более новую версию Minecraft PE 1.11.4, что также дает много новых возможностей разработчикам модов.

- Новая версия Minecraft PE 1.11.4 и все связанные с ней нововведения — в первую очередь моды смогут добавлять намного больше блоков и предметов, обладающих реальными строковыми идентификаторами, а также включать себя паки ресурсов и поведения самого майна, а также взаимодействовать с ними
- Новый Inner Core гарантирует улучшение стабильности во время игры, сводя шанс краша к минимуму, что проверялось нахождением в мире до часу с несколькими модами (с условием, что все моды оптимизированы и не содержат ошибок, напрямую ведущих к крашам, к примеру, утечек памяти)
- Horizon также добавляет возможность создавать несколько сборок на основе Inner Core с раздельными модами и мирами
- Новый Inner Core позволяет создавать полноценные новые измерения, которые являются именно отдельными мирами, а не регионами обычного мира с измененной генерацией. Также в скором времени будет добавлен улучшенный генератор измерений, позволяющий создавать несколько разных биомов.
- Моды могут содержать дополнительные модули и библиотеки, написанные на С++ и напрямую взаимодействующие с Minecraft и внутренним API Inner Core, а также выводящие интерфейс в JavaScript что позволит расширять возможности в случае их нехватки. Кроме того появляется новая возможность писать моды на TypeScript вместо JS. Кроме того мод может содержать Java-код.

:::

<details>
    <summary>Полный список изменений до версии 2.1.0b72</summary>
<div>

### 2.1.0b72

- При подключении к миру, для всех блоков и предметов, которые по какой то причине есть у хоста, но нет у клиента, создаются пустышки, для предотвращения вылетов
- Нативный протокол протестирован на высокой нагрузке, исправлены возможные вылеты и зависания

### 2.1.0b71

- *(Экспериментально)* Сохранение аккаунта Xbox при повторном запуске
- Небольшие исправления

### 2.1.0b70

- Добавлена помощь по мультиплееру в окне логина в Xbox
- Увеличен таймаут инициализации клиента до 90 секунд
- Исправления сетевых сущностей
- Другие мелкие исправления

### 2.1.0b69

- Исправлена ошибка, из-за который предметы с доп. данными могли время от времени пропадать из интерфейса
- Добавлен метод [getLightLevel(x, y, z)](/api/class/BlockSource#getLightLevel) в BlockSource

### 2.1.0b68

- Небольшие улучшения нативного протокола (игра по сети через Xbox)

### 2.1.0b65-67

- Xbox логин теперь рабочий на большинстве устройств.

### 2.1.0b64

- Добавлена экспериментальная возможность логина в аккаунт Xbox

:::tip

Теперь можно подключаться к друзьям из аккаунта Xbox с такими же модами (с поддержкой мультиплеера). Подключение через Xbox происходит только через нативный протокол, добавленный в [2.1.0b63](#210b63).

:::

### 2.1.0b63

- Добавлена возможность использовать нативный протокол MCPE для игры по сети. Эта опция может быть включена в настройках движка. Нативный протокол может улучшить соединение, но на данный момент может быть нестабилен.
- Небольшие исправления

### 2.1.0b61-62

- Исправления ItemContainer и BlockSource
- Другие исправления

### 2.1.0b60

- Добавлен метод [exists()](/api/namespace/Animation#exists) у анимаций
- Небольшие исправления

### 2.1.0b59

- Добавлены методы [BlockRenderer.setCustomRaycastShape(id, data, collisionShape)](/api/namespace/BlockRenderer#setCustomRaycastShape), [BlockRenderer.setCustomCollisionAndRaycastShape(id, data, collisionShape)](/api/namespace/BlockRenderer#setCustomCollisionAndRaycastShape)
- Добавлены методы [BlockRenderer.mapCollisionModelAtCoords(dimensionId, x, y, z, model)](/api/namespace/BlockRenderer#mapCollisionModelAtCoords), [BlockRenderer.mapRaycastModelAtCoords(dimensionId, x, y, z, model)](/api/namespace/BlockRenderer#mapRaycastModelAtCoords), [BlockRenderer.mapCollisionAndRaycastModelAtCoords(dimensionId, x, y, z, model)](/api/namespace/BlockRenderer#mapCollisionAndRaycastModelAtCoords), для маппинга физических моделей и моделей для взаимодействия, передача null вместо модели уберет маппинг, маппинг работает на любой блок, включая воздух
- В BlockSource добавлен метод [getBlock(x, y, z)](/api/class/BlockSource#getBlock), возвращающий объект, содержащий идентификатор и мету
- Очистка маппинга визуальных моделей и анимаций при смене измерения (на стороне клиента)
- Небольшие исправления

### 2.1.0b58

- Небольшие исправления

### 2.1.0b57

- Добавлен метод [Network.inRemoteWorld()](/api/namespace/Network#inRemoteWorld) - возвращает `true`, если не является хостом
- Добавлено событие *ItemUseLocal(coords, item, block, player)* - использование предмета на стороне клиента
- Добавлено событие *ConnectingToHost(host, minecraftPort, moddedPort)* - подключение к удаленному миру
- Улучшения NetworkConnectedClientList
- Добавлен метод [BlockSource.getCurrentClientRegion()](/api/class/BlockSource#getCurrentClientRegion)
- Другие исправления

### 2.1.0b56

- Новая система кеширования моделей предметов, которая кеширует все модели, а не только измененные модом, и поддерживает группы кеширования.
- Вызовите [ItemModel.setCurrentCacheGroup("groupName", "version")](/api/namespace/ItemModel#setCurrentCacheGroup) в начале мода, чтобы создать группу кеша, все модели, созданные в корне этого мода (включая стандартные модели блоков) будут занесены в эту группу. Если версия кеша группы не совпадает с установленной, то кеш будет создан заново.
- Исправлено взаимодействие ItemContainer с дополнительными данными предметов.

### 2.1.0b55

- Исправлена совместимость с Recipe Viewer
- Добавлен параметр спецтипа блока [color_source](/api/namespace/Block#color_source), может быть одним из 4 значений: **"none"**, **"leaves"**, **"grass"**, **"water"**
- Загрузка моделей предметов ускорена и требует меньше памяти
- Небольшие улучшения

### 2.1.0b48-54

Эти версии содержат в основном исправления после введения мультиплеера.

### 2.1.0b47

Данное обновление добавляет экспериментальную поддержку локального мультиплеера, позволяющую игрокам с одинаковыми модами и подключенными к одной сети Wi-Fi играть вместе, при условии, что моды поддерживают игру по сети.

:::warning Все моды требуется обновить для поддержки мультиплеера

Оставлена возможность подключиться к миру с модами без поддержки мультиплеера (появится предупреждение), однако это может вызвать неправильное поведение этих модов и краши.

:::

В скором времени выйдет документация по добавлению поддержки сетевой игры в моды для их разработчиков.

### 2.0.5b46

- Исправлен баг версии [2.0.5b45](#205b45), вызывавший баги иконок от предметов с доп. данными
- Исправлен баг, из-за которого менеджер модов не отображал моды с *.redirect*

### 2.0.5b45

- Добавлен метод модели предмета [setModelOverrideCallback(function(item) \{ ... })](/api/interface/ItemModel#setModelOverrideCallback), которая устанавливает модели функцию, возвращающую модель предмета для конкретного предмета в мире. Работает как item override function, но для моделей.
- Добавлен метод [ItemModel.newStandalone()](/api/namespace/ItemModel#newStandalone), создающий пустую модель предмета, которая ни к чему не привязана, данные модели могут быть использованы, как результат функции [setModelOverrideCallback](/api/interface/ItemModel#setModelOverrideCallback)
- Теперь в функцию определения иконки предмета (item override function) может передаваться extra
- Исправлен вылет, который мог быть вызван вызовом методом [toScriptable()](/api/namespace/NBT#toScriptable) NBT-тэгов
- Для сборки java кода теперь используются другие инструменты (для построения .dex файлов используется d8, а не dx)

### 2.0.5b44

- Возможность получения и изменения NBT мобов, ванильных TileEntity и предметов
- Добавлены методы: [Entity.getCompoundTag(entity)](/api/namespace/Entity#getCompoundTag), [Entity.setCompoundTag(entity, tag)](/api/namespace/Entity#setCompoundTag)
- Добавлены методы ванильных TileEntity, возвращаемых [World.getContainer()](/api/namespace/World#getContainer): [getCompoundTag()](/api/interface/NativeTileEntity#getCompoundTag), [setCompoundTag(tag)](/api/interface/NativeTileEntity#setCompoundTag)
- Добавлены методы ItemExtraData: [getCompoundTag()](/api/class/ItemExtraData#getCompoundTag), [setCompoundTag(tag)](/api/class/ItemExtraData#setCompoundTag)
- Интерфейс модов теперь поддерживает предметы модов с анимированной иконкой
- Функция динамичной иконки предметов теперь получает второй булевый параметр [isModUi](/api/namespace/Item#registerIconOverrideFunction), показывающий, в ванильном интерфейсе иконка или нет
- Добавлен метод [Debug.big](/api/namespace/Debug#big), аналогичен [Debug.m](/api/namespace/Debug#m), однако выводит все в диалог с возможностью копирования текста и форматирует JSON
- Событие [click](/api/namespace/TileEntity#click) у TileEntity теперь получает еще один аргумент - координаты клика
- Исправлен краш, происходивший в некоторых условиях от аддонов

### 2.0.4b43

- Автоматическое удаление из миров паков ресурсов и поведения, которые были добавлены удаленными модами
- RenderMesh теперь может принимать не только абсолютный путь к файлу, но также путь в ресурсах мода или имя файла внутри директории *models/* в ресурсах мода
- Параметры элемента слота [isTransparentBackground](/api/namespace/UI#isTransparentBackground) и его устаревшая версия [needClean](/api/namespace/UI#needClean) теперь оба являются устаревшими, теперь слот по умолчанию поддерживает прозрачный фон
- Добавлен метод контейнера [setOnOpenListener(function(container, window) \{ ... \})](/api/namespace/UI#setOnOpenListener)
- Временно убрана сборка для архитектуры x86, которая пока что не была рабочей, это снизит размер пака
- Исправлена ошибка от двойного вызова [WRAP_JAVA](/api/function/WRAP_JAVA) на один и тот же класс

### 2.0.4b42

- [Callback.addCallback](/api/namespace/Callback#addCallback) теперь принимает опциональный 3 параметр - приоритет, который является целым числом (по умолчанию 0). События с большим значением приоритета вызываются раньше и наоборот.
- Слоты теперь поддерживают анимированый фон, который задается с помощью передачи массива имен текстур, вместо одной
- Слоты теперь имеют параметр text, а также на них работает метод контейнера setText. При значении этого параметра не null, текст количества будет заменен на значение этого параметра.
- [World.clip](/api/namespace/World#clip) теперь работает не только на блоки, но и на сущности при определенных значениях параметра mode
- Исправлена генерация иконок блоков со сложными моделями в интерфейсе

### 2.0.4b41

- Исправлены размытые текстуры интерфейса на некоторых устройствах

### 2.0.4b40

- Оптимизация графического интерфейса модов. Теперь он должен открываться несколько быстрее и потреблять меньше оперативной памяти.
- Добавлен новый режим стандартного окна, где все содержимое выносится в отдельное окно справа от инвентаря. Для этого нужно использовать [UI.StandardWindow](/api/namespace/UI#StandardWindow) вместо [UI.StandartWindow](/api/namespace/UI#StandartWindow), который теперь является устаревшим
- Анимации (статические модели) теперь очищаются при переходе между измерениями
- Добавлена очистка памяти, используемой нативной частью анимаций, при уничтожении самой анимации и соответствующего ей объекта
- Паки ресурсов и поведения теперь внедряются в соответствующие папки каждого мира при входе
- Добавлен метод [Updatable.addAnimator(updatable_object)](/api/namespace/Updatable#addAnimator), который добавляет обновляемый объект, который тикает на потоке клиента и не сохраняется

### 2.0.4b39

- Небольшие исправления для предыдущих версий

### 2.0.4b38

- Добавлен экспериментальный модуль [TagRegistry](/api/namespace/TagRegistry). Документация будет через какое-то время после его отладки.
- Добавлены параметры частиц [framesX](/api/namespace/Particles#framesX), [framesY](/api/namespace/Particles#framesY) для задания количества кадров по вертикали и горизонтали текстуры/региона текстуры
- Добавлен параметр частиц [rebuildDelay](/api/namespace/Particles#rebuildDelay), отвечающий за время между обновлением поворота частиц
- Добавлен параметр частиц [color2](/api/namespace/Particles#color2) и [animators.color](/api/namespace/Particles#animators), отвечающие за анимирование изменяющегося цвета
- Исправлен дроп полублоков
- Исправлены некоторые текстуры в интерфейсе

### 2.0.4b37

- Генератор пользовательских измерений сильно оптимизирован с помощью снижения детализации шума. Однако в случае, когда нужна высокая детализация, это можно настроить для отдельных генераторов шума.
- В ItemModel добавлены новые функции, позволяющие устанавливать отдельно текстуру в интерфейсе модов
- Добавлены события *DimensionLoaded(currentId, lastId)* и *DimensionUnloaded(unloadedId)*

### 2.0.4b36

- Незначительные исправления

### 2.0.4b34-35

- Меню настроек Inner Core сильно улучшено и дополнено новыми настройками
- Исправлена критическая ошибка, которая могла вызвать зависание серверного потока.
- Исправлены ошибки, которые могли возникать при загрузке из-за нехватки памяти
- Множество исправлений ошибок, которые были выявлены через статистику GP
- При установке мода, можно на выбор установить его зависимости
- Система сохранений улучшена: сохранения работают стабильнее, создается резервный файл сохранений, все ошибки сохранений показываются в одном окне и не засоряют экран
- Немного изменен вид главного меню
- Добавлен метод [Entity.getAllInsideBox(coords1, coords2\[, type, flag\])](/api/namespace/Entity#getAllInsideBox)
- Добавлен метод [Entity.getDimension(entity)](/api/namespace/Entity#getDimension)
- Добавлен метод [Item.setAllowedInOffhand(id, allowed)](/api/namespace/Item#setAllowedInOffhand)
- Добавлен метод [Game.simulateBackPressed()](/api/namespace/Game#simulateBackPressed)
- Исправлен и улучшен модуль навигации
- Исправлена работа методов [Entity.setCarriedItem](/api/namespace/Entity#setCarriedItem)/[setOffhandItem](/api/namespace/Entity#setOffhandItem)/[setArmorSlot](/api/namespace/Entity#setArmorSlot), которые не отправляли изменения на клиент
- Исправлены краши, которые могли происходить при переходе между измерениями
- Исправлена работа поворота анимаций
- Исправлена ошибка, из-за которой паки поведения не добавлялись при первом запуске
- Исправлено возможное дублирование паков поведения модов в папке мира
- Исправлена работа [Entity.spawn](/api/namespace/Entity#spawn) с мобами аддонов
- Исправлена работа модуля Translation, теперь он позволяет добавлять переводы на язык по умолчанию
- Увеличен объем кеширования имен предметов
- Исправлен метод setTouchable для игровых оверлеев
- Другие мелкие исправления, связанные со стабильностью работы

### 2.0.3b33

- Добавлена возможность создания и передачи дополнительных параметров в шейдеры для отдельных объектов (анимаций и моделей предметов)
- Добавлен интерфейс для работы с навигацией мобов через объект, возвращаемый [Entity.getPathNavigation(entity)](/api/namespace/Entity#getPathNavigation)
- Добавлена функция [Entity.getAttribute(entity, name)](/api/namespace/Entity#getAttribute) для работы с атрибутами
- Добавлены функции: [Player.setAbility(name, value)](/api/namespace/Player#setAbility), [Player.getFloatAbility(name)](/api/namespace/Player#getFloatAbility), [Player.getBooleanAbility(name)](/api/namespace/Player#getBooleanAbility)
- Шейдерам анимаций добавлен параметр uniform vec3 VIEW_POS, содержащий абсолютную позицию камеры в мире

### 2.0.3b32

- Исправлены ванильные частицы и полупрозрачные модели модов которые отображались за прозрачными блоками и облаками

### 2.0.3b31

- Небольшие исправления, включающие в себя исправления кастомых измерений и моделей блоков

### 2.0.3b30

- Измерения загружены в основную версию
- Исправлены текстуры предметов с метаданными

### 2.0.2b29

- Улучшена система TileEntity: теперь не загруженные или не имеющие тика TileEntity не будут загружать лимит обновлений. Добавлены события [load()](/api/namespace/TileEntity#load), [unload()](/api/namespace/TileEntity#unload) и [onCheckerTick(isInitialized, isLoaded, wasLoaded)](/api/namespace/TileEntity#onCheckerTick).
- Исправлен вылет от моделей мобов
- Другие мелкие исправления

### 2.0.2b28

- Добавлена настройка **disable_loading_screen**, отключающая загрузочный экран и загружающая моды в основном потоке
- Исправлены методы [World.clip](/api/namespace/World#clip), [RenderMesh.clone](/api/class/RenderMesh#clone), [Block.setupAsRedstoneReceiver](/api/namespace/Block#setupAsRedstoneReceiver)/[Emitter](/api/namespace/Block#setupAsRedstoneEmitter)
- Исправления вылетов от моделей предметов

### 2.0.2b27

- Исправлена проблема с тратой предметов при нажатии на блоки с интерфейсом
- Добавлены методы в модуль World: [clip(x1, y1, z1, x2, y2, z2)](/api/namespace/World#clip), [doesVanillaTileHasUI(id)](/api/namespace/World#doesVanillaTileHasUI), [setBlockUpdateAllowed(true, false)](/api/namespace/World#setBlockUpdateAllowed), [setBlockUpdateType(type)](/api/namespace/World#setBlockUpdateType)
- Исправлены методы работы с опытом игрока
- Исправлены трехмерные модели после сворачивания игры

### 2.0.2b26

- В конфигурацию Inner Core добавлен параметр приоритета серверного потока
- Добавлена функция [Block.registerNeighbourChangeFunction\[ForID\](id, function(coords, block, changeCoords) {})](/api/namespace/Block#registerNeighbourChangeFunction)
- Добавлена функция [Block.registerEntityInsideFunction\[ForID\](id, function(coords, block, entity) {})](/api/namespace/Block#registerEntityInsideFunction)
- Добавлена функция [Block.registerEntityStepOnFunction\[ForID\](id, function(coords, block, entity) {})](/api/namespace/Block#registerEntityStepOnFunction)
- Добавлены методы RenderMesh: [rotate(x, y, z, rx, ry, rz)](/api/class/RenderMesh#rotate), [fitIn(x1, y1, z1, x2, y2, z2\[, keepRatio\])](/api/class/RenderMesh#fitIn), [clone()](/api/class/RenderMesh#clone)
- Исправлены положения и цвета RenderMesh в моделях предметов

### 2.0.2b25

- Описанию блока добавлен параметр [sound](/api/namespace/Block#sound), устанавливает один из стандартных типов звуков
- Добавлен метод [RenderMesh.setLightPos(x, y, z)](/api/class/RenderMesh#setLightPos) - устанавливает относительную позицию для получения освещения блока
- Добавлен параметр в метод [RenderMesh.setFoliageTinted(leavesType)](/api/class/RenderMesh#setFoliageTinted)
- Исправлен метод [ItemModel.occupy()](/api/interface/ItemModel#occupy), который не предотвращал установку модели ICRender предмету при установке ее блоку

### 2.0.2b24

- Исправлен вылет от большого количества блоков с RenderMesh в чанке
- Добавлены методы RenderMesh - [setNoTint()](/api/class/RenderMesh#setNoTint), [setGrassTinted()](/api/class/RenderMesh#setGrassTinted), [setFoliageTinted()](/api/class/RenderMesh#setFoliageTinted), [setWaterTinted()](/api/class/RenderMesh#setWaterTinted)
- Добавлены методы скриптов предзагрузки - [Resources.getAllMatchingResources("regex")](/api/namespace/Resources#getAllMatchingResources), [Resources.getResourcePath("local path")](/api/namespace/Resources#getResourcePath), [Resources.getAllResourceDirectoriesPaths()](/api/namespace/Resources#getAllResourceDirectoriesPaths)

### 2.0.2b23

#### Полностью переписана часть, отвечающая за создание моделей предметов в инвентаре и анимаций предметов

- Пользовательские модели предметов в интерфейсе модов
- Анимации предметов поддерживают пользовательские модели и материалы (теперь используют RenderMesh)
- Создание моделей предметов вынесено в отдельную стадию загрузки
- Кеширование моделей - после первой загрузки модели будут загружаться намного быстрее
- Модуль [ItemModel](/api/namespace/ItemModel) сильно расширен и позволяет получать доступ ко всему, что зависит от модели предмета
- Предметам можно ставить дополнительные материалы, которые будут использованы вместо эффекта зачарования
- Параметр описания блоков [rendertype](/api/namespace/Block#rendertype) теперь работает корректно и влияет на модель в интерфейсе

#### Другие нововведения

- Добавлено условие [ICRender.RANDOM(value, max\[, seed\])](/api/namespace/ICRender#RANDOM) - условие для добавление случайности, генерирует для позиции случайную величину от 0 до max - 1, и срабатывает, если она равна value. Имеет метод [setAxisEnabled(0-2, включено)](/api/namespace/ICRender#setAxisEnabled), позволяющая игнорировать одну (или несколько) из трех координат.
- Добавлены методы [Block.setupAsRedstoneReceiver(nameID, connectToRedstone)](/api/namespace/Block#setupAsRedstoneReceiver) - делает блок приемником редстоуна, [Block.setupAsRedstoneEmitter(nameID, connectToRedstone)](/api/namespace/Block#setupAsRedstoneEmitter) - делает блок источником редстоуна, [Block.setupAsNonRedstoneTile(nameID)](/api/namespace/Block#setupAsNonRedstoneTile) - убирает всю связь с редстоуном
- RenderMesh: добавлен метод [addMesh(mesh\[, x, y, z\[, scaleX, scaleY, scaleZ\]\])](/api/class/RenderMesh#addMesh), в метод [setColor](/api/class/RenderMesh#setColor) добавлена поддержка прозрачности
- Описанию типа блока добавлен параметр [mapcolor](/api/namespace/Block#mapcolor), который задает цвет блока на карте (в формате 0xRRGGBB)

### 2.0.2b22

- Небольшие улучшения и исправления

### 2.0.2b21

- *(Экспериментально)* Общая оптимизация, ориентированная на повышение FPS с использованием динамичной смены приоритетов потоков
- *(Экспериментально)* Оптимизация генерации мира
- Небольшие исправления моделей предметов

### 2.0.2b20

Это обновление добавляет много нового и может быть нестабильно.

- Добавлена возможность добавления новых материалов и шейдеров (больше информации будет опубликовано в скором времени)
- Добавлены пользовательские модели предметов в инвентаре и в руке, для доступа к ним используйте [ItemModel.getFor(id, data)](/api/namespace/ItemModel#getFor)
- Добавлен новый режим анимации - модель с пользовательским материалом, чтобы войти в этот режим используйте [describe(\{ mesh: RenderMesh, skin: "имя текстуры", material: "имя материала" \})](/api/namespace/Animation#describe)
- Блоки с моделями ICRender автоматически получат модели в инвентаре и в руке
- Добавлены методы пользовательских изменений: [setFogDistance(close, far)](/api/namespace/Dimensions#setFogDistance), [resetFogDistance()](/api/namespace/Dimensions#resetFogDistance)
- Небольшие изменения и исправления

### 2.0.1b18

- Добавлены директории *innercore/resource_packs*, *innercore/behavior_packs* для добавления ресурспаков и пакетов поведения
- Локальные ресурспаки и пакеты поведения мира теперь автоматически подключаются
- Добавлен модуль [AddonEntityRegistry](/api/namespace/AddonEntityRegistry) и методы работы с мобами, добавляемыми аддонами
- Небольшие исправления

### 2.0.1b17

- Добавлен метод [GenerationUtils.generateOreCustom(x, y, z, id, data, amount, mode, listOfIds\[, seed\])](/api/namespace/GenerationUtils#generateOreCustom), также добавлен необязательный дополнительный параметр **seed** методу [GenerationUtils.generateOre](/api/namespace/GenerationUtils#generateOre)
- Исправлен дроп от [World.destroyBlock](/api/namespace/World#destroyBlock)
- Исправлены методы [Player.setHunger](/api/namespace/Player#setHunger), [Player.setSaturation](/api/namespace/Player#setSaturation), [Player.setExhaustion](/api/namespace/Player#setExhaustion)
- Исправления дропов некоторых блоков

### 2.0.1b16

- Добавлен звук при установке механизмов
- Исправления дропов некоторых блоков
- Небольшие исправления кастомых измерений

### 2.0.1b15

- Возвращена и оптимизирована карта биомов

### 2.0.1b14

- Временно отключена возможность генерации карт биомов

### 2.0.1b13

- Небольшие исправления

### 2.0.1b12

- Добавлен улучшенный API для новых измерений.
- Исправлен вылет от предметов с пустым и не английским базовым именем (это затронуло моды вроде Divine RPG). Это не исправит другие проблемы подобных неоптимизированных модов

### 2.0.1b11

- Добавлен полноценный интерфейс для создания новых биомов
- Добавлен каллбек *GenerateBiomeMap*, аналогичный каллбеку генерации чанка, нужный для создание карты биомов, используя методы [World.get](/api/namespace/World#getBiomeMap)/[setBiomeMap](/api/namespace/World#setBiomeMap)
- Добавлено больше параметров в каллбеки генерации, полный список параметров: (chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed)
- Добавлен метод [GenerationUtils.getPerlinNoise(x, y, z, seed, scale, numOctaves)](/api/namespace/GenerationUtils#getPerlinNoise)
- Добавлен метод [World.addGenerationCallback(callbackName, callback\[, hashString\])](/api/namespace/World#addGenerationCallback), который перед вызовом каллбека модифицирует сид чанка уникально для этого каллбека

### 2.0.1b10

- Добавлен интерфейс загрузки модов
- Моды теперь загружаются в отдельном потоке
- Исправлено зависание интерфейса после быстрых нажатий на блок или предмет с интерфейсом
- Исправлены ошибки с некоторыми инструментами и блоками
- Исправлено появление сообщения о фатальной ошибки, когда ее не происходило

### 2.0.0b9

- Классический интерфейс и интерфейс верстака доработаны
- Теперь интерфейсы механизмов и верстака закрываются при нажатии "назад" и сворачивании игры
- Исправлены возможные краши от маппинга рендера и от [Item.getName](/api/namespace/Item#getName)
- Теперь при остановке всех модов от ошибки это будет явно указано
- Утверждено исправление стабильности в билде 8

### 2.0.0b8

- Очередная попытка исправить общую стабильность, убрать у кого-то лаги и вылеты на старте (требуется тщательная проверка), по результатам тестов билдов 6-8 будет выбрана лучшая конфигурация.
- Исправлен крафт в новом верстаке

### 2.0.0b7

- Еще одна попытка исправить общую стабильность, убрать у кого-то лаги и вылеты на старте (требуется тщательная проверка)

### 2.0.0b6

- Улучшение стабильности (сообщите о проблемах, могут появиться новые вылеты)
- Изменен стиль верстака на классический
- Начат перенос интерфейса модов на классический стиль

### 2.0.0b5

- Исправления [2.0.0b4](#200b4) для систем ниже Android 9

### 2.0.0b4

- Небольшие исправления UI, в основном для устройств с вырезом

### 2.0.0b2 beta

- Небольшие исправления перед релизом

### 2.0.0 beta

- Перенос под версию 1.11.4 в виде пака для Horizon

</div>
</details>

## Лаунчер Inner Core

:::note Что такое Inner Core?

Inner Core является отдельным от MCPE полностью независимым приложением, содержащим собственный MCPE, что позволяет не только не ставить никакого дополнительного софта, но и не удалять версию MCPE, c которой вы играете. Даже миры с модами хранятся отдельно от ванильных миров. Это полная замена BlockLauncher, который долгое время существовал как единственная возможность моддинга и при этом был крайне плохо реализован и обладал ужасно неудобным API, что влекло за собой множество неприятных последствий. Теперь этому положен конец.

- Моды под Inner Core полностью совместимы и не будут конфликтовать, API построен так, что наладить взаимодействие модов друг с другом очень просто. Это позволяет создавать сложные сборки из десятков модов.
- Переносить моды со старого Core Engine чрезвычайно просто из-за того, что CE был сохранен как основной вид API модов под Inner Core, что повлечет за собой быстрый перенос развивающихся модов.
- Написанное на C++ и Java ядро API, мультипоточность, адаптация API под частые нужды модов, а так же возможность компиляции модов в Java-байткод позволяет достичь новых высот в быстродействии.
- Новые возможности во всех сферах, особенно в графической составляющей модов, которая теперь позволяет создавать любой желаемый внешний вид внутриигровых объектов. Так же сильно усовершенствованы старые модули API и введены новые, а за счет стабильной версии API будет развиваться намного быстрее.
- API графического интерфейса позволяет невероятно легко создать любой требуемый интерфейс, в том числе основной его особенностью является простое создание динамичного интерфейса, который работает в стабильных 40-60 fps.
- Сложная и вариативная структура модов, файл сборки, несколько видов API и типов выполняемых файлов позволят создавать для модов наиболее удобную структуру, что играет немаловажную роль. Собственная среда разработки, адаптированная под Inner Core позволяет разрабатывать моды с ПК, загружать и запускать их по USB.

:::

<details>
    <summary>Полный список изменений до версии 1.1.2.42 beta</summary>
<div>

### 1.1.2.42 beta

- Различные исправления

### 1.1.1.40 beta

Данное обновление содержит огромное количество нововведений, которые в основном включают в себя [новые возможности для модов](https://vk.com/wall-129680450_10421).

Изменения в геймплее:

- Автоматическое сохранение мира происходит теперь вместе с сохранением данных модов, которое устанавливается в настройках. Это значит, что при вылетах и прочих аварийных завершениях потеря прогресса будет минимальна.
- Браузер модов переработан и улучшен, теперь позволяет сортировать и искать моды по разным категориям, а так же следить за их обновлениями
- Исправлено огромное кол-во крашей, небольших багов и недоработок

Новые возможности модов:

- Система создания новых частиц позволяет создавать визуальные эффекты по уровню неотличимые даже от таких ПК модов как Thaumcraft
- Блоки и мобы теперь могут иметь любой внешний вид благодаря возможности использования полигональных трехмерных моделей
- Возвращена возможность создания собственных мобов
- Добавлена возможность создавать произвольные физические модели блоков, зависящие от внешних условий
- Новые возможности ICRender позволяют создавать логические выражения
- Добавлена поддержка доп. данных предметов (NBT), позволяющая работать с зачарованиями и собственными доп. данными
- Введена новая система библиотек, которая при переходе модов на нее, уберет конфликты, связанные с использованием некорректной версии библиотеки другими модами
- Добавлена возможность устанавливать конкретным блокам события случайных тиков

### 1.1.0.27-29 beta

Данное обновление вводит новую систему, регистрирующую и автоматически отправляющую нативные краши для аналитики. Данная система после вылета сохранит данные о нем и со следующим входом в приложение, покажет их и отошлет.

- Новая система регистрации нативных крашей и ее исправления относительно версии 1.1.0.27
- Исправления бага, из-за которого предметы иногда не стакались
- Исправления мелких багов с измерениями
- Добавлены методы, быстро фильтрующие все существующие рецепты, которые позволят без особых проблем создать NEI

### 1.1.0.25 beta

- Фиксы кастомых измерений, скоро выйдет библиотека и документация к ней.
- Улучшения и фиксы API измерений и не только
- Исправления некоторых иконок в GUI

:::warning ВАЖНО!

Полностью удалена поддержка архитектуры x86, потому что она все равно не позволяла играть, но на устройствах с поддержкой и armeabi-v7a и x86 могла запуститься последняя.

:::

### 1.1.0.24 beta

Данное обновление добавило огромное количество новых возможностей и сильно изменило приложение. Далее будут перечислены основные из них и приведены ссылки с подробным описанием.

- [Измерения](https://vk.com/wall-129680450_8680): моды теперь могут добавлять собственные измерения с полностью новой уникальной генерацией мира, открывают новые возможности для творчества и геймплея
- [Браузер модов](https://vk.com/wall-129680450_8679): это сайт и внутриигровое меню, позволяющее искать, [устанавливать и обновлять любые моды в один клик](https://vk.com/wall-129680450_8678), а любому желающему загрузить свой мод в общую библиотеку
- [Публикация в Google Play](https://vk.com/wall-129680450_9024): то, что так долго напрашивалось и что наконец то случилось, это поднимет популярность и откроет множество новых возможностей для отладки приложения, которые на момент релиза данной версии уже использованы
- Оптимизация за счет [фиксов новых и старых багов](https://vk.com/wall-129680450_8681), а так же работы с приоритетами процессов убирает основную проблему, препятствующую игре в выживании
- Огромное количество фиксов и [доработок API](https://vk.com/wall-129680450_8676), открывающих возможности, которые были закрыты до этого из-за ошибок
- Фиксы работы с памятью, интерфейса и загрузочного экрана, включая фиксы крашей, данные о которых получены через Google Play снизят кол-во вылетов на всех стадиях игры

### 1.0.2.7-9 beta

- Изменена система ресурсов. Инициализация происходит быстрее, исправлены многие баги.
- Изменена система компиляции модов. Теперь она позволяет компилировать моды любого размера и показывает процесс компиляции. Моды, которые были скомпилированы на старой версии, будут работать.
- Изменено отображение ошибок, теперь они показывают не только файл, но и мод, которому он принадлежит, а в скомпилированной форме еще и файл построения со строкой
- Исправлены вылеты при массивной модификации мира из потока
- Изменена система генерации мира. Генерация помещена в поток за счет предыдущего изменения, руды генерируются вместе со структурами на поверхности. Это полностью убирает фризы от нее, сделав исследование новых чанков намного более гладким.
- Верстак динамично подбирает размер окна для показа возможных крафтов, что уберет проблему с крафтами, которые не отображались из-за константного размера
- Исправлены краши от недостатка оперативной памяти (при установке большого кол-ва модов и вылеты интерфейса)
- Исправлена работа методов модуля Entity с несуществующими мобами. Это должно вернуть к жизни модуль MobRegistry, однако он не тестировался.
- UI.Window добавлен режим оверлея, он позволяет нормально работать вместе с игрой (не блокирует нажатия кнопок, звуков и т.п), однако снижает fps. Идеально подойдет, например, для кнопок брони в IC2.
- Исправлено появление фантомных двойников блоков, которые совместимы в 2х модах (к примеру руды Forestry и IC2). Это никак не скажется на ваших мирах и не вызовет изменения ID.
- Исправлена работа событий **BlockDestroyStarted** и **BlockDestroyContinued**
- Исправлен баг версии 1.0.2.7 с невозможностью создать супер-плоский мир
- Менее значительные фиксы

### 1.0.1.2-3 beta

- Исправлены некоторые рецепты и иконки в верстаке, исправлен баг, при котором иногда нельзя было выбрать конкретный рецепт
- Исправлена ошибка, из-за которой ванильные инструменты не ломались
- Исправлено отсутствие урона и эффектов от инструментов и оружия, которые добавлены модами
- Исправлен модуль API ArmorRegistry
- Модуль MobRegistry пока плохо отлажен и использовать его крайне не советуется
- Исправлено множество нерабочих методов API, добавлены те, которые были забыты, но существовали, введены новые
- Оптимизирован спавн частиц, исправлен вылет при спавне большого кол-ва частиц из потока. Добавлен метод, позволяющий создавать частицы на любом расстоянии от игрока.
- Исправлена, ошибка, вызывающая рандомные вылеты в мире, однако не факт, что именно она вызывала у вас вылеты и они пропадут. Так же это исправление должно убрать фризы и слегка стабилизировать работу.
- Исправлена ошибка, иногда вызывающая вылет при создании анимаций (моделей)
- Исправлена ошибка, которая, вероятно, могла вызывать краш сразу после запуска
- Теперь при вылете из-за неудачной загрузки нативного кода ошибка будет писаться в лог
- Форсирован карманный стиль интерфейса, т.к. классический у многих вызывал вылеты
- Исправлен вылет при ломании кастомого блока без функции дропа в выживании

### 1.0.0 beta

- Перенос под версию 1.0.3 в отдельном лаунчере
- Список изменений может быть неполным

</div>
</details>

## Core Engine для BlockLauncher

:::note Что такое Core Engine?

Core Engine — уникальный загрузчик модов для Minecraft PE и BlockLauncher, открывающий огромные возможности для игры с модами и их разработки. Сочетает в себе загрузчик и огромный API, который позволит создавать большие и сложные моды намного проще и качественнее.

1. Полная совместимость и взаимодействие модов, загруженных Core Engine.
2. Мощнейший API, содержащий в себе 30 модулей и около 1000 методов.
3. Оптимизация и гибкая настройка самого Core Engine и модов на нем.
4. Технология Unlimited API, позволяющая модам создавать намного больше блоков, чем в ModPE.

:::

<details>
    <summary>Полный список изменений до версии 1.2 beta</summary>
<div>

### 1.2 beta

В этой версии полностью переработан API для создания мобов, позволяющий намного быстрее, удобнее и рациональнее создавать новых мобов.

Добавлено 6 новых модулей API для работы с мобами, которые позволяют их регистрировать, описывать их внешний вид, поведение, дроп и спавн.

Подробнее можно прочитать в [документации](https://vk.com/wall-129680450_2785).

- Исправлены критические вылеты и множество более мелких ошибок
- Оптимизирована подземная генерация (руды)
- Расширен конфиг, теперь он имеет больше настроек
- Добавлены команды: `/c log` (показать лог), `/c save debug` (сохранить и вывести сохраненные данные), которые помогут в разработке
- Исправлен внешний вид моделей предметов
- Актуальные версии Minecraft PE 0.16-1.0.3

### 1.17 beta

- Исправлен критический дюп, появившийся в [1.16](#116-beta)
- Исправлено еще больше мелких недоработок интерфейса после обновлений [1.15](#115-beta) и [1.16](#116-beta)
- Исправления версий и совместимости в логе
- Актуальные версии Minecraft PE 0.14-1.0.3

### 1.16 beta

- Исправлены многие ошибки нового интерфейса, произведена его оптимизация и очистка кода
- Исправлена ошибка с пропаданием предметов, когда инвентарь игрока переполнен, теперь излишки которые не могу попасть в инвентарь выпадают
- Исправлена ошибка из-за которой предметы после захода в верстак стакались больше чем по 64
- Исправлена текстура земли покрытой снегом
- Исправлен баг, при котором предметы со шкалой повреждения (заряда) ломались при копании блоков и атаке
- Исправлены ошибки с поломкой инструментов
- Исправлена задержка атаки кастомых инструментов
- Исправлен и оптимизирован основной поток
- Возвращена поддержка версий 0.14.x

### 1.15 beta

- Оптимизирован и улучшен интерфейс, исправления включают:
  - Убрано открытие интерфейса по частям и долгая прорисовка элементов
  - Убраны зазоры в полноэкранном интерфейсе
  - Оптимизирована отрисовка слотов интерфейса
- Оптимизирован и улучшен интерфейс, улучшения включают:
  - Текст заголовка уменьшен и перемещен в центр
  - Кнопка закрытия уменьшена и перемещена в угол
  - Добавлена тень от заголовка
  - Предметы в слотах уменьшены отрисовываются без искажений пикселей
  - Увеличена толщина выделения слотов
  - Изменена стандартная рамка интерфейса, добавлена темная кайма по краям
- Исправлены анимации на версиях 0.16 и 1.0:
  - Исправлено случайное изменение размера
  - Исправлена возможность атаковать анимацию
  - Добавлено событие нажатия на анимацию
  - Анимациям предметов добавлена возможность смещения относительно центра
- Исправлена прозрачность блоков, однако такие моды как Industrial Craft все равно будут требовать доработки в этом плане
- Исправлено ломание некоторых блоков кастомными инструментами

### 1.14 beta

- Элементам интерфейса теперь добавлены значения isTouched, нажат ли элемент, touchPosition, позиция прикосновения и событие onTouchEvent(position, eventId), которые позволяют намного лучше контролировать нажатия
- Добавлен новый стандартный элемент интерфейса: textField, поле для ввода текста
- Контейнерам добавлены методы isElementTouched("name"), проверка нажат ли данный элемент, getElementTouchPosition("name"), позиция нажатия на элемент, getText("name"), для получения текста с текстовых полей и обычных текстовых элементов
- Добавлена возможность делать фон интерфейса прозрачным
- Небольшие исправления
- Актуальные версии Minecraft PE 0.14-1.0.2

### 1.13 beta

- Модуль GameObject позволяет регистрировать прототипы любых игровых объектов, описанных в ввиде набора событий, функций и данных, а потом создавать их экземпляры в мире. Кроме функции инициализации и тика такие объекты могут иметь любые кастомые события. Модуль позволяет получать все экземпляры объектов данного типа, а так же вызывать их события. Кроме всего этого эти объекты сохраняются при перезаходе в мир.
- Программно контролируемые ресурспаки: в директорию мода добавляется новый файл *resources.json*, который описывает ресурспаки которые должны и не должны быть импортированы на момент загрузки. Содержимое этого файла можно редактировать не только вручную но и методами внутри мода, что позволит добавлять или удалять часть ресурсов, например определенные шейдеры, по настройкам в конфиге.
- Более подробный и понятный лог, сокращение вывода загрузки GUI и сборки модов

### 1.12 beta

- Полная поддержка версии MCPE 1.0.x
- Библиотеки, их создание и импорт объектов API, подробнее [здесь](https://vk.com/wall-129680450_1631)
- Исправления анимаций и интерфейса
  - Исправлен неправильный показ количества создаваемого предмета в верстаке
  - Альтернативный режим отрисовки моделей предметов, который активирован на версии 1.0 и может быть активирован в файле конфигураций, если у вас проблемы с отрисовкой моделей

### 1.11 beta

- Переписан, оптимизирован и видоизменен интерфейс верстака, что сделало его намного более удобным в использовании и более похожим на оригинал
  - Слот результата заменен на кнопку, которая перемещена вниз сетки
  - Сетка крафта теперь меньше и находится по середине
  - Стрелки для перелистывания страниц теперь крупнее
  - Добавлена анимация и звук всех кнопок
  - Обсчет доступных рецептов при работе на верстаке происходит реже и перенесен в отдельный поток
- Новые возможности API - прототипы блоков и предметов как альтернативный способ их создания
  - Предмет или блок можно описать одной функцией, которая принимает строковый ID и объект-прототип, обладающий набором данных и методов-событий, полностью описывающих предмет или блок
- Небольшие исправления и расширение API
  - Добавлены новые возможности для стандартных элементов GUI
  - Исправлен метод addLiquid для хранилищ жидкостей
  - Исправлены некоторые недоработки GUI, повышена его производительность.

### 1.10 beta

- Поддержка новых версий MCPE 0.16.x и 0.14.x в дополнение к 0.15.x, самая стабильная версия для работы на данный момент 0.16.2
- Система ModPE Loader (alpha), которая позволит Core Engine загружать и запускать ModPE скрипты из специальной директории и исправлять их конфликты ID между собой и модами Core Engine
  - Моды загружаются из папки games/com.mojang/modpe
  - Система загружает только файлы *.js* (скрипты) и *.zip* (текстуры), пока нет поддержки modpkg
  - Система сейчас в alpha-версии, это значит, что она может иметь баги и загружать не все скрипты
- Улучшен и исправлен Unlimited API
  - Поддержка версий от 0.14 до 0.16
  - Специальные типы теперь могут содержать более 16 вариаций
  - Специальные типы теперь могут иметь имя, специальные типы с одинаковым именем будут объединены в 1 для уменьшения количества занимаемых ID
  - Добавлена система, которая исправляет конфликты блоков при переходе на новую версию, а также следит за тем, что блоки находятся на своих специальных типах
  - Более быстрая работа
  - Исправлены ошибки при переполнении ID блоков
- Активирован ToolAPI
  - Универсальный метод создания инструментов позволит создавать инструменты с любыми параметрами и любым набором добываемых материалов блоков
  - Создание новых материалов инструментов и блоков в дополнение к стандартным
  - Привязка событий к инструменту или оружию, динамичное изменение предмета в руке через объект
  - Поддержка всех возможных зачарований инструментов
  - События-модификаторы зачарований и скорости ломания позволят очень просто добавлять инструментам дополнительные свойства, такие, как режимы
  - Инструменты не будут изменять скорость ломания блоков если вы играете на 0.15.x
- Исправление анимаций на 0.16.x
- Исправление системы сохранения ID
- Более мелкие исправления

### 1.07 beta

- Система статических ID теперь будет изменять ID блоков вместе с изменением их специальных типов, что уберет проблему с отсутствием у некоторых блоков их свойств (материал, проводимость энергии)
- Исправлены анимации предметов, которые отсутствовали в [1.06](#106-beta)
- В API добавлен метод запуска в основном потоке, а также обработка исключений в основном потоке
- Мелкие исправления

### 1.06 beta

- В API добавлен модуль для сохранения и типизации обновляемых объектов
- Исправлено наложение текстур в моделях мобов, добавленных модами, добавлены новые методы
- Добавлены новые возможности в создании анимаций

### 1.05 beta

- Исправлен баг, при котором не сохранялись ID блоков специальных типов, из-за чего не всегда работали некоторые моды, к примеру энергия в IC PE. CE перезапуситится при первом запуске с новой версией.
- Исправлены имена блоков, по умолчанию включена опция их показа. Аддон, который был нужен до версии 1.05 более не требуется, его можно отключить.
- Исправлены некоторые ошибки gui
- Небольшая оптимизация

P.S. Приношу извинения за то, что с прошлой и этой версией ID блоков в старых мирах могут поменяться и они станут неиграбельны в выживании. В новых мирах при обновлении Core Engine или каких то модов на новые версии это не повторится.

### 1.04 beta

- Добавлена система, сохраняющая ID блоков и предметов и предотвращающая их изменение при установке новых модов и обновлении старых. Если мод был удален/отключен, а потом добавлен, его ID не будут сохранены. Система перезапустит CE при первом запуске с новой версией.
- Открытие интерфейса предметом с функцией использования более не вызывает срабатывание этой функции (установка проводов при открытии интерфейса механизма, таумономикон и т.п.)
- Если игрок крадется, то при нажатии на блок с интерфейсом, он не откроется
- Автоматическая генерация блоков в интерфейсе теперь поддерживает текстуры разрешения кроме 16x16, улучшено качество иконок, добавлена тень
- Незначительные исправления
- Актуальная версия Minecraft PE 0.15.9/10, BlockLaucher 1.13.3

:::warning ВНИМАНИЕ!

Не гарантируется, что новая система будет работать идеально, при отладке багов не найдено, однако она достаточно сложна, чтобы была вероятность их присутствия.

:::

### 1.03 beta

- Оптимизация под Industrial Craft, а также оптимизация работы в целом
- Исправлен баг интерфейса, при котором элементы накладывались на фон нецеликом
- Оптимизирована генерация мира
- Исправлены ошибки анимаций
- Исправлены бесформенные рецепты в верстаке
- Более мелкие исправления

### 1.02 beta

- Оптимизирован интерфейс, включая верстак, который вызывал у некоторых вылеты (не могу гарантировать, что они исправились у всех, у кого они были)
- Добавлен третий режим верстака, который включен по-умолчанию, похожий на стиль MCPE, но вместо прокрутки в нем идет перелистывание страниц, это сделано для уменьшения нагрузки. Для включения установите на `true` в конфиге **pocket_workbench_style** и **split_pocket_workbench_to_pages**.
- Изменены стандартные настройки, по умолчанию включена потоковая оптимизация, которая может вызывать вылеты, для ее отключения установите в конфиге **run_on_main_thread** на `true`
- Исправлены многие методы API

### 1.01 beta

- Возможность отключения потоковой оптимизации, вызывающей у многих вылеты
- Возможности настройки приоритетов всех потоков, которые контролирует Core Engine, позволит разобраться с производительностью
- Обновлен конфиг-файл с более оптимальными настройками по умолчанию
- При входе в меню паузы работа всех модов приостанавливается, чтобы избежать вылетов
- Исправлены некоторые методы API
- Исправлено поведение кастомых рецептов в верстаке стиля MCPE
- Исправлен баг, при котором текстуры модов не загружались
- Добавлена очистка текстур удаленных модов
- Исправлены многие иконки интерфейса
- Core API Level изменен на 2

### 1.0 beta

- Актуальная версия Minecraft PE 0.15.9, BlockLaucher 1.13.3

</div>
</details>
