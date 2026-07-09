---
toc_max_heading_level: 2
---

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

- Добавлены методы для манипуляции погодой, атмосферой и другими [свойствами измерений](/api/class/Dimensions.CustomDimension) (@rislaed)
- Добавлена поддержка кастомных [звуков блоков](/api/interface/Block.SpecialType#sound) (@rislaed)
- Добавлена поддержка неймспейсов для блоков и предметов и методы для работы с ними (@zheka2304, @rislaed)
- Поддержка парсинга HTML-цветов в [элементах интерфейса](/api/namespace/UI#FontColor) (@rislaed)
- Добавлен метод для получения списка кастумных измерений (@rislaed)

### Улучшения и доработки API {#3.1.0b126-api-improvements-and-refinements}

:::tip Реализована кодогенерация для API

Что позволит заметно повысить производительность и упростить введение новых методов API, включая поддержку модов на Java (@zheka2304, @rislaed). Старое API будет постепенно переноситься на новое.

:::

- Восстановление работы и перенос на кодогенерацию модуля PathNavigation (@zheka2304)
- Перенос модуля [BlockSource](/api/class/BlockSource) на кодогенерацию (@reider745)
- Добавлены методы для манипуляций с модулями API: [injectBindingsIntoScope](/api#injectBindingsIntoScope), [injectModule(s)IntoScope](/api#injectModuleIntoScope) (@rislaed)

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
- Исправлен модуль [PathNavigation](/api/interface/Entity.PathNavigation)
- В режиме разработчика теперь ошибки компиляции отображаются до входа в игру, а не после полной иницилизации
- Исправление генерации палитры блоков для синхронизации с сервером
- Параметры для блока [burnOdds](/api/interface/Block.SpecialType#burn_odds)/[flameOdds](/api/interface/Block.SpecialType#flame_odds)
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
- Исправления синхронизации [клиентской части TileEntity](/api/interface/TileEntity.LocalTileEntityPrototype), добавлены новые методы [onConnectionPlayer](/api/interface/TileEntity.TileEntityPrototype#onConnectionPlayer)/[onDisconnectionPlayer](/api/interface/TileEntity.TileEntityPrototype#onDisconnectionPlayer)
- Теперь в сохранениях вместо ошибки будет передаваться [пустой объект](/api/interface/Saver.IScopeSaver#getDefaultSaves)
- Добавлено условие [ICRender.BlockState(x, y, z, stateId, valueState)](/api/namespace/ICRender#BlockState)
- Исправлена работа интерфейсов с челкой (добавлен переключатель в настройки)
- Оптимизация генерации моделей предметов (добавлены настройки)
- Исправлен [loadCustom](/api/class/Animation.Base#loadCustom) у статических моделей на подключенных клиентах
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
- Добавлена поддержка [пустых ведер](/api/interface/Block.LiquidDescriptor#bucket) для жидкостей
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
- Добавлен метод [CustomDimensionGenerator.setGenerateCaves(generate[, generateUnderwater])](/api/class/Dimensions.CustomGenerator#setGenerateCaves), исправлена генерация подземных водоемов по умолчанию
- В BlockSource добавлен метод [listEntitiesOfTypeInAABB(x1, y1, z1, x2, y2, z2, stringType)](/api/class/BlockSource#listEntitiesOfTypeInAABB), исправлен [listEntitiesInAABB](/api/class/BlockSource#listEntitiesInAABB) с теми же аргументами
- Добавлены методы [Player.getLocal()](/api/namespace/Player#getLocal) и [Player.getServer()](/api/namespace/Player#getServer)
- Добавлены методы [UI.getMinecraftUiScale()](/api/namespace/UI#getMinecraftUiScale) и [UI.getRelMinecraftUiScale()](/api/namespace/UI#getRelMinecraftUiScale)
- Исправлен краш кастомных энчантов
- Исправлена установка [сопротивления отбрасыванию броне](/api/interface/Item.ArmorParams#knockbackResist)
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

- При создании жидкости теперь можно автоматически создать ведро с полным функционалом [(см. документацию)](/api/interface/Block.LiquidDescriptor#bucket)
- Добавлен параметр [isRenewable](/api/interface/Block.LiquidDescriptor#isRenewable) для жидкостей, отвечающий за то, является ли она возобновляемой
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
- Добавлены настройки элемента слота: [iconScale](/api/interface/UI.UISlotElementProps#iconScale) и [disablePixelPerfect](/api/interface/UI.UISlotElementProps#disablePixelPerfect)
- Добавлены методы UI.Window: [updateScrollDimensions()](/api/class/UI.Window#updateScrollDimensions) и [updateWindowPositionAndSize()](/api/class/UI.Window#updateWindowPositionAndSize)
- Добавлен новый тип расположения текста: 3 - [ALIGN_CENTER_HORIZONTAL](/api/class/UI.Font#ALIGN_CENTER_HORIZONTAL)
- Добавлен метод [runOnClientThread(function)](/api#runOnClientThread), аналог [runOnMainThread](/api#runOnMainThread), но для клиентского потока
- Исправления числовых идентификаторов предметов и связанных рецептов - звезда ада, арбуз, пластинки, лошадиная броня, огненный шар, фейерверки
- Исправлена модель нагрудника для брони из модов

## 2.2.1b95

- Добавлены методы BlockSource [setExtraBlock(x, y, z, BlockState/\[id, data\])](/api/class/BlockSource#setExtraBlock) и [getExtraBlock(x, y, z) -> BlockState](/api/class/BlockSource#getExtraBlock) для доступа и установки дополнительных блоков, таких как вода внутри других блоков
- Добавлены параметры описания блоков [can_contain_liquid](/api/interface/Block.SpecialType#can_contain_liquid) и [can_be_extra_block](/api/interface/Block.SpecialType#can_be_extra_block)
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
- Добавлен параметр методу [destroy](/api/interface/TileEntity.TileEntityPrototype#destroy) в TileEntity, отвечающий за то, было ли уничтожение вызвано событием *DestroyBlock*
- Оптимизированы методы редактирования инвентаря игрока
- Исправлена установка способностей игрока, включая полет
- Исправлен серверный каллбек открытия [ItemContainer](/api/class/ItemContainer), который происходил до отправки пакета открытия
- Исправлены некоторые рецепты печи
- Исправлен баг с загрузкой на старых версиях Android
- Исправлен баг с ломанием льда

## 2.2.0b79-81

- Добавлены отсутствующие и исправлены существующие рецепты в верстаке
- Исправлен баг, из-за которого новая версия вылетала при запуске на некоторых устройствах (начиная с [1.16.201](#220b75))
- Исправлен баг, из-за которого были частые вылеты при запуске на некоторых устройствах (старый баг, начиная с [1.11.4](changelog-legacy#200-beta))

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
- Добавлен параметр "category" при [Item.createItem](/api/interface/Item.ItemParams#category)

## 2.2.0b75

### Перенос на Minecraft 1.16.201

- В мультиплеере может возникнуть проблема синхронизации ванильных ID блоков, для ее решения можно поменять местами хоста и клиента
- Добавлен API для рендера брони и присоединяемых к мобам моделей
- Переписан загрузчик модов
- Переписана система сохранений и некоторые другие модули
- Начата работа над ECS и Java API

## Устаревшие версии

Поскольку мы не можем вместить весь список на одну страницу, чтобы не нагружать браузеры загрузкой излишнего контента, найти список изменений для старых версий можно [на этой странице](./changelog-legacy).
