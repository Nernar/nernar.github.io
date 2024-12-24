# Список изменений

## 2.4.0b122-122o1

- Множественные небольшие улучшения внутренней работы движка

:::note Другие изменения ([@reider745](https://vk.com/id500917624))

- Добавлены методы [World.addListenerChunkStateChanged(listener, statesList)](/api/namespace/World#addListenerChunkStateChanged)/[addLocalListenerChunkStateChanged](/api/namespace/World#addLocalListenerChunkStateChanged) для отслеживания загрузки и выгрузки чанков
- Добавлена возможность получения игровых настроек с помощью [Game.getOption(key)](/api/namespace/Game#getOption), воспользуйтесь [Game.getOptions](/api/namespace/Game#getOptions) для получения списка всех доступных ключей
- Добавлен каллбек *OptionsChanged*, вызывающийся сразу после завершения изменения игровых опций
- Реализованы пакеты с двоичными данными, передайте массив с байтами для их отправки
- Исправлена работа раздатчиков с ведрами жидкостей из модов, а также передача идентификатора игрока в каллбек *CraftRecipePreProvided*

:::

:::note Другие изменения ([@rislaed](https://vk.com/id268478382))

- Добавлен [EDamageCause](/api/enum/EDamageCause) для определения типов урона мобов, стандартное значение урона для [ToolAPI.registerSword](/api/namespace/ToolAPI#registerSword) установлено на 4
- Добавлена возможность применить события клика и долгого клика на слотах инвентаря, исправлены обновления и изменение размера слотов
- Добавлены методы для клиентской работы с Updatable: [getAllLocal](/api/namespace/Updatable#getAllLocal) и [getLocalSyncTime](/api/namespace/Updatable#getLocalSyncTime)
- Исправлено отображение переводов для заголовков в конфиге, [ItemContainer.sealSlot](/api/class/ItemContainer#sealSlot) корректно перезаписывает *getTransferPolicy*, [Entity.health](/api/namespace/Entity#health) снова работает

:::

## 2.4.0b120-121 ([@reider745](https://vk.com/id500917624))

- Исправления прокси браузера модов
- Исправления повреждающихся сохранений в некоторых случаях, из-за коллизии
- Исправлен текст сообщений об ошибках в модах
- Добавлен модуль API [GameController](/api/namespace/GameController), который позволяет эмулировать действия игрока из модов
- Добавлен метод [Entity.getAllLocal](/api/namespace/Entity#getAllLocal)
- Исправлены каллбеки *EntityAddedLocal*/*EntityRemovedLocal* в мультиплеере
- Исправлен метод [Player.localPlayerTurn](/api/namespace/Player#localPlayerTurn)
- Исправления крашей в мод браузере
- Исправления некоторых крашей в игре, в частности от всплывающих сообщений на некоторых прошивках

## 2.4.0b118-119 ([@reider745](https://vk.com/id500917624))

- Улучшение сетевого протокола
- Добавлены методы BlockSource для управления погодой
- Добавлен метод [Particles.addBreakingItemParticle](/api/namespace/Particles#addBreakingItemParticle) для создания частиц обломков предмета
- Добавлены методы [Item.setShouldDespawn](/api/namespace/Item#setShouldDespawn)/[setFireResistant](/api/namespace/Item#setFireResistant)/[setExplodable](/api/namespace/Item#setExplodable)
- Исправлена утечка памяти при рендере моделей

## 2.4.0b116-117

Добавлена поддержка серверов с модами на основе [ядра ZoteCore](https://github.com/Reider745/ZoteCoreLoader) от [@reider745](https://vk.com/id500917624), что также включает в себя:

- Исправления списка серверов (для модпаков список хранится в основной папке модпака)
- Исправление не статичного uuid игрока (от параметров XUID и ника игрока), исправляет сохранения инвентаря в локальной игре
- Добавлена функция синхронизации порта сокет-сервера
- Добавлена синхронизация id биомов
- Другие различные исправления для серверов

:::note Другие изменения ([@reider745](https://vk.com/id500917624))

- Добавлен прокси в мод браузере, который включается при невозможности подключиться к основной игре ([@spawnrys](https://vk.com/id549824423))
- Исправления синхронизации [клиентской части TileEntity](/api/namespace/TileEntity#LocalTileEntityPrototype), добавлены новые методы [onConnectionPlayer](/api/namespace/TileEntity#onConnectionPlayer)/[onDisconnectionPlayer](/api/namespace/TileEntity#onDisconnectionPlayer)
- Теперь в сохранениях вместо ошибки будет передаваться [пустой объект](/api/namespace/Saver#getDefaultSaves)
- Добавлено условие [ICRender.BlockState(x, y, z, stateId, valueState)](/api/namespace/ICRender#BlockState)
- Исправлена работа интерфейсов с челкой (добавлен переключатель в настройки)
- Оптимизация генерации моделей предметов (добавлены настройки)
- Исправлен [loadCustom](/api/namespace/Animation#loadCustom) у статических моделей на подключенных клиентах
- Исправлен [Entity.getMobile](/api/namespace/Entity#getMobile)
- [World.getWorldTime](/api/namespace/World#getWorldTime) может возвращать время на клиенте

:::

:::note Другие изменения ([@zheka_smirnov](https://vk.com/id24708057))

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
- Исправлен метод [Item.isValid(id)](/api/namespace/Item#isValid), добавлены методы [IDRegistry.getStringIdAndTypeForIntegerId(id)](/api/namespace/IDRegistry#getStringIdAndTypeForIntegerId), [IDRegistry.getTypeForIntegerId(id)](/api/namespace/IDRegistry#getTypeForIntegerId), [IDRegistry.getStringIdForIntegerId(id)](/api/namespace/IDRegistry#getStringIdForIntegerId)
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

## 2.1.0b72

- При подключении к миру, для всех блоков и предметов, которые по какой то причине есть у хоста, но нет у клиента, создаются пустышки, для предотвращения вылетов
- Нативный протокол протестирован на высокой нагрузке, исправлены возможные вылеты и зависания

## 2.1.0b71

- *(Экспериментально)* Сохранение аккаунта Xbox при повторном запуске
- Небольшие исправления

## 2.1.0b70

- Добавлена помощь по мультиплееру в окне логина в Xbox
- Увеличен таймаут инициализации клиента до 90 секунд
- Исправления сетевых сущностей
- Другие мелкие исправления

## 2.1.0b69

- Исправлена ошибка, из-за который предметы с доп. данными могли время от времени пропадать из интерфейса
- Добавлен метод [getLightLevel(x, y, z)](/api/class/BlockSource#getLightLevel) в BlockSource

## 2.1.0b68

- Небольшие улучшения нативного протокола (игра по сети через Xbox)

## 2.1.0b65-67

- Xbox логин теперь рабочий на большинстве устройств.

## 2.1.0b64

- Добавлена экспериментальная возможность логина в аккаунт Xbox

:::tip

Теперь можно подключаться к друзьям из аккаунта Xbox с такими же модами (с поддержкой мультиплеера). Подключение через Xbox происходит только через нативный протокол, добавленный в [2.1.0b63](#210b63).

:::

## 2.1.0b63

- Добавлена возможность использовать нативный протокол MCPE для игры по сети. Эта опция может быть включена в настройках движка. Нативный протокол может улучшить соединение, но на данный момент может быть нестабилен.
- Небольшие исправления

## 2.1.0b61-62

- Исправления ItemContainer и BlockSource
- Другие исправления

## 2.1.0b60

- Добавлен метод [exists()](/api/namespace/Animation#exists) у анимаций
- Небольшие исправления

## 2.1.0b59

- Добавлены методы [BlockRenderer.setCustomRaycastShape(id, data, collisionShape)](/api/namespace/BlockRenderer#setCustomRaycastShape), [BlockRenderer.setCustomCollisionAndRaycastShape(id, data, collisionShape)](/api/namespace/BlockRenderer#setCustomCollisionAndRaycastShape)
- Добавлены методы [BlockRenderer.mapCollisionModelAtCoords(dimensionId, x, y, z, model)](/api/namespace/BlockRenderer#mapCollisionModelAtCoords), [BlockRenderer.mapRaycastModelAtCoords(dimensionId, x, y, z, model)](/api/namespace/BlockRenderer#mapRaycastModelAtCoords), [BlockRenderer.mapCollisionAndRaycastModelAtCoords(dimensionId, x, y, z, model)](/api/namespace/BlockRenderer#mapCollisionAndRaycastModelAtCoords), для маппинга физических моделей и моделей для взаимодействия, передача null вместо модели уберет маппинг, маппинг работает на любой блок, включая воздух
- В BlockSource добавлен метод [getBlock(x, y, z)](/api/class/BlockSource#getBlock), возвращающий объект, содержащий идентификатор и мету
- Очистка маппинга визуальных моделей и анимаций при смене измерения (на стороне клиента)
- Небольшие исправления

## 2.1.0b58

- Небольшие исправления

## 2.1.0b57

- Добавлен метод [Network.inRemoteWorld()](/api/namespace/Network#inRemoteWorld) - возвращает `true`, если не является хостом
- Добавлено событие *ItemUseLocal(coords, item, block, player)* - использование предмета на стороне клиента
- Добавлено событие *ConnectingToHost(host, minecraftPort, moddedPort)* - подключение к удаленному миру
- Улучшения NetworkConnectedClientList
- Добавлен метод [BlockSource.getCurrentClientRegion()](/api/class/BlockSource#getCurrentClientRegion)
- Другие исправления

## 2.1.0b56

- Новая система кеширования моделей предметов, которая кеширует все модели, а не только измененные модом, и поддерживает группы кеширования.
- Вызовите [ItemModel.setCurrentCacheGroup("groupName", "version")](/api/namespace/ItemModel#setCurrentCacheGroup) в начале мода, чтобы создать группу кеша, все модели, созданные в корне этого мода (включая стандартные модели блоков) будут занесены в эту группу. Если версия кеша группы не совпадает с установленной, то кеш будет создан заново.
- Исправлено взаимодействие ItemContainer с дополнительными данными предметов.

## 2.1.0b55

- Исправлена совместимость с Recipe Viewer
- Добавлен параметр спецтипа блока [color_source](/api/namespace/Block#color_source), может быть одним из 4 значений: **"none"**, **"leaves"**, **"grass"**, **"water"**
- Загрузка моделей предметов ускорена и требует меньше памяти
- Небольшие улучшения

## 2.1.0b48-54

Эти версии содержат в основном исправления после введения мультиплеера.

## 2.1.0b47

Данное обновление добавляет экспериментальную поддержку локального мультиплеера, позволяющую игрокам с одинаковыми модами и подключенными к одной сети Wi-Fi играть вместе, при условии, что моды поддерживают игру по сети.

:::warning Все моды требуется обновить для поддержки мультиплеера

Оставлена возможность подключиться к миру с модами без поддержки мультиплеера (появится предупреждение), однако это может вызвать неправильное поведение этих модов и краши.

:::

В скором времени выйдет документация по добавлению поддержки сетевой игры в моды для их разработчиков.

## 2.0.5b46

- Исправлен баг версии [2.0.5b45](#205b45), вызывавший баги иконок от предметов с доп. данными
- Исправлен баг, из-за которого менеджер модов не отображал моды с *.redirect*

## 2.0.5b45

- Добавлен метод модели предмета [setModelOverrideCallback(function(item) \{ ... })](/api/interface/ItemModel#setModelOverrideCallback), которая устанавливает модели функцию, возвращающую модель предмета для конкретного предмета в мире. Работает как item override function, но для моделей.
- Добавлен метод [ItemModel.newStandalone()](/api/namespace/ItemModel#newStandalone), создающий пустую модель предмета, которая ни к чему не привязана, данные модели могут быть использованы, как результат функции [setModelOverrideCallback](/api/interface/ItemModel#setModelOverrideCallback)
- Теперь в функцию определения иконки предмета (item override function) может передаваться extra
- Исправлен вылет, который мог быть вызван вызовом методом [toScriptable()](/api/namespace/NBT#toScriptable) NBT-тэгов
- Для сборки java кода теперь используются другие инструменты (для построения .dex файлов используется d8, а не dx)

## 2.0.5b44

- Возможность получения и изменения NBT мобов, ванильных TileEntity и предметов
- Добавлены методы: [Entity.getCompoundTag(entity)](/api/namespace/Entity#getCompoundTag), [Entity.setCompoundTag(entity, tag)](/api/namespace/Entity#setCompoundTag)
- Добавлены методы ванильных TileEntity, возвращаемых [World.getContainer()](/api/namespace/World#getContainer): [getCompoundTag()](/api/interface/NativeTileEntity#getCompoundTag), [setCompoundTag(tag)](/api/interface/NativeTileEntity#setCompoundTag)
- Добавлены методы ItemExtraData: [getCompoundTag()](/api/class/ItemExtraData#getCompoundTag), [setCompoundTag(tag)](/api/class/ItemExtraData#setCompoundTag)
- Интерфейс модов теперь поддерживает предметы модов с анимированной иконкой
- Функция динамичной иконки предметов теперь получает второй булевый параметр [isModUi](/api/namespace/Item#registerIconOverrideFunction), показывающий, в ванильном интерфейсе иконка или нет
- Добавлен метод [Debug.big](/api/namespace/Debug#big), аналогичен [Debug.m](/api/namespace/Debug#m), однако выводит все в диалог с возможностью копирования текста и форматирует JSON
- Событие [click](/api/namespace/TileEntity#click) у TileEntity теперь получает еще один аргумент - координаты клика
- Исправлен краш, происходивший в некоторых условиях от аддонов

## 2.0.4b43

- Автоматическое удаление из миров паков ресурсов и поведения, которые были добавлены удаленными модами
- RenderMesh теперь может принимать не только абсолютный путь к файлу, но также путь в ресурсах мода или имя файла внутри директории *models/* в ресурсах мода
- Параметры элемента слота [isTransparentBackground](/api/namespace/UI#isTransparentBackground) и его устаревшая версия [needClean](/api/namespace/UI#needClean) теперь оба являются устаревшими, теперь слот по умолчанию поддерживает прозрачный фон
- Добавлен метод контейнера [setOnOpenListener(function(container, window) \{ ... \})](/api/namespace/UI#setOnOpenListener)
- Временно убрана сборка для архитектуры x86, которая пока что не была рабочей, это снизит размер пака
- Исправлена ошибка от двойного вызова [WRAP_JAVA](/api/function/WRAP_JAVA) на один и тот же класс

## 2.0.4b42

- [Callback.addCallback](/api/namespace/Callback#addCallback) теперь принимает опциональный 3 параметр - приоритет, который является целым числом (по умолчанию 0). События с большим значением приоритета вызываются раньше и наоборот.
- Слоты теперь поддерживают анимированый фон, который задается с помощью передачи массива имен текстур, вместо одной
- Слоты теперь имеют параметр text, а также на них работает метод контейнера setText. При значении этого параметра не null, текст количества будет заменен на значение этого параметра.
- [World.clip](/api/namespace/World#clip) теперь работает не только на блоки, но и на сущности при определенных значениях параметра mode
- Исправлена генерация иконок блоков со сложными моделями в интерфейсе

## 2.0.4b41

- Исправлены размытые текстуры интерфейса на некоторых устройствах

## 2.0.4b40

- Оптимизация графического интерфейса модов. Теперь он должен открываться несколько быстрее и потреблять меньше оперативной памяти.
- Добавлен новый режим стандартного окна, где все содержимое выносится в отдельное окно справа от инвентаря. Для этого нужно использовать [UI.StandardWindow](/api/namespace/UI#StandardWindow) вместо [UI.StandartWindow](/api/namespace/UI#StandartWindow), который теперь является устаревшим
- Анимации (статические модели) теперь очищаются при переходе между измерениями
- Добавлена очистка памяти, используемой нативной частью анимаций, при уничтожении самой анимации и соответствующего ей объекта
- Паки ресурсов и поведения теперь внедряются в соответствующие папки каждого мира при входе
- Добавлен метод [Updatable.addAnimator(updatable_object)](/api/namespace/Updatable#addAnimator), который добавляет обновляемый объект, который тикает на потоке клиента и не сохраняется

## 2.0.4b39

- Небольшие исправления для предыдущих версий

## 2.0.4b38

- Добавлен экспериментальный модуль [TagRegistry](/api/namespace/TagRegistry). Документация будет через какое-то время после его отладки.
- Добавлены параметры частиц [framesX](/api/namespace/Particles#framesX), [framesY](/api/namespace/Particles#framesY) для задания количества кадров по вертикали и горизонтали текстуры/региона текстуры
- Добавлен параметр частиц [rebuildDelay](/api/namespace/Particles#rebuildDelay), отвечающий за время между обновлением поворота частиц
- Добавлен параметр частиц [color2](/api/namespace/Particles#color2) и [animators.color](/api/namespace/Particles#animators), отвечающие за анимирование изменяющегося цвета
- Исправлен дроп полублоков
- Исправлены некоторые текстуры в интерфейсе

## 2.0.4b37

- Генератор пользовательских измерений сильно оптимизирован с помощью снижения детализации шума. Однако в случае, когда нужна высокая детализация, это можно настроить для отдельных генераторов шума.
- В ItemModel добавлены новые функции, позволяющие устанавливать отдельно текстуру в интерфейсе модов
- Добавлены события *DimensionLoaded(currentId, lastId)* и *DimensionUnloaded(unloadedId)*

## 2.0.4b36

- Незначительные исправления

## 2.0.4b34-35

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

## 2.0.3b33

- Добавлена возможность создания и передачи дополнительных параметров в шейдеры для отдельных объектов (анимаций и моделей предметов)
- Добавлен интерфейс для работы с навигацией мобов через объект, возвращаемый [Entity.getPathNavigation(entity)](/api/namespace/Entity#getPathNavigation)
- Добавлена функция [Entity.getAttribute(entity, name)](/api/namespace/Entity#getAttribute) для работы с атрибутами
- Добавлены функции: [Player.setAbility(name, value)](/api/namespace/Player#setAbility), [Player.getFloatAbility(name)](/api/namespace/Player#getFloatAbility), [Player.getBooleanAbility(name)](/api/namespace/Player#getBooleanAbility)
- Шейдерам анимаций добавлен параметр uniform vec3 VIEW_POS, содержащий абсолютную позицию камеры в мире

## 2.0.3b32

- Исправлены ванильные частицы и полупрозрачные модели модов которые отображались за прозрачными блоками и облаками

## 2.0.3b31

- Небольшие исправления, включающие в себя исправления кастомых измерений и моделей блоков

## 2.0.3b30

- Измерения загружены в основную версию
- Исправлены текстуры предметов с метаданными

## 2.0.2b29

- Улучшена система TileEntity: теперь не загруженные или не имеющие тика TileEntity не будут загружать лимит обновлений. Добавлены события [load()](/api/namespace/TileEntity#load), [unload()](/api/namespace/TileEntity#unload) и [onCheckerTick(isInitialized, isLoaded, wasLoaded)](/api/namespace/TileEntity#onCheckerTick).
- Исправлен вылет от моделей мобов
- Другие мелкие исправления

## 2.0.2b28

- Добавлена настройка **disable_loading_screen**, отключающая загрузочный экран и загружающая моды в основном потоке
- Исправлены методы [World.clip](/api/namespace/World#clip), [RenderMesh.clone](/api/class/RenderMesh#clone), [Block.setupAsRedstoneReceiver](/api/namespace/Block#setupAsRedstoneReceiver)/[Emitter](/api/namespace/Block#setupAsRedstoneEmitter)
- Исправления вылетов от моделей предметов

## 2.0.2b27

- Исправлена проблема с тратой предметов при нажатии на блоки с интерфейсом
- Добавлены методы в модуль World: [clip(x1, y1, z1, x2, y2, z2)](/api/namespace/World#clip), [doesVanillaTileHasUI(id)](/api/namespace/World#doesVanillaTileHasUI), [setBlockUpdateAllowed(true, false)](/api/namespace/World#setBlockUpdateAllowed), [setBlockUpdateType(type)](/api/namespace/World#setBlockUpdateType)
- Исправлены методы работы с опытом игрока
- Исправлены трехмерные модели после сворачивания игры

## 2.0.2b26

- В конфигурацию Inner Core добавлен параметр приоритета серверного потока
- Добавлена функция [Block.registerNeighbourChangeFunction\[ForID\](id, function(coords, block, changeCoords) {})](/api/namespace/Block#registerNeighbourChangeFunction)
- Добавлена функция [Block.registerEntityInsideFunction\[ForID\](id, function(coords, block, entity) {})](/api/namespace/Block#registerEntityInsideFunction)
- Добавлена функция [Block.registerEntityStepOnFunction\[ForID\](id, function(coords, block, entity) {})](/api/namespace/Block#registerEntityStepOnFunction)
- Добавлены методы RenderMesh: [rotate(x, y, z, rx, ry, rz)](/api/class/RenderMesh#rotate), [fitIn(x1, y1, z1, x2, y2, z2\[, keepRatio\])](/api/class/RenderMesh#fitIn), [clone()](/api/class/RenderMesh#clone)
- Исправлены положения и цвета RenderMesh в моделях предметов

## 2.0.2b25

- Описанию блока добавлен параметр [sound](/api/namespace/Block#sound), устанавливает один из стандартных типов звуков
- Добавлен метод [RenderMesh.setLightPos(x, y, z)](/api/class/RenderMesh#setLightPos) - устанавливает относительную позицию для получения освещения блока
- Добавлен параметр в метод [RenderMesh.setFoliageTinted(leavesType)](/api/class/RenderMesh#setFoliageTinted)
- Исправлен метод [ItemModel.occupy()](/api/interface/ItemModel#occupy), который не предотвращал установку модели ICRender предмету при установке ее блоку

## 2.0.2b24

- Исправлен вылет от большого количества блоков с RenderMesh в чанке
- Добавлены методы RenderMesh - [setNoTint()](/api/class/RenderMesh#setNoTint), [setGrassTinted()](/api/class/RenderMesh#setGrassTinted), [setFoliageTinted()](/api/class/RenderMesh#setFoliageTinted), [setWaterTinted()](/api/class/RenderMesh#setWaterTinted)
- Добавлены методы скриптов предзагрузки - [Resources.getAllMatchingResources("regex")](/api/namespace/Resources#getAllMatchingResources), [Resources.getResourcePath("local path")](/api/namespace/Resources#getResourcePath), [Resources.getAllResourceDirectoriesPaths()](/api/namespace/Resources#getAllResourceDirectoriesPaths)

## 2.0.2b23

### Полностью переписана часть, отвечающая за создание моделей предметов в инвентаре и анимаций предметов

- Пользовательские модели предметов в интерфейсе модов
- Анимации предметов поддерживают пользовательские модели и материалы (теперь используют RenderMesh)
- Создание моделей предметов вынесено в отдельную стадию загрузки
- Кеширование моделей - после первой загрузки модели будут загружаться намного быстрее
- Модуль [ItemModel](/api/namespace/ItemModel) сильно расширен и позволяет получать доступ ко всему, что зависит от модели предмета
- Предметам можно ставить дополнительные материалы, которые будут использованы вместо эффекта зачарования
- Параметр описания блоков [rendertype](/api/namespace/Block#rendertype) теперь работает корректно и влияет на модель в интерфейсе

### Другие нововведения

- Добавлено условие [ICRender.RANDOM(value, max\[, seed\])](/api/namespace/ICRender#RANDOM) - условие для добавление случайности, генерирует для позиции случайную величину от 0 до max - 1, и срабатывает, если она равна value. Имеет метод [setAxisEnabled(0-2, включено)](/api/namespace/ICRender#setAxisEnabled), позволяющая игнорировать одну (или несколько) из трех координат.
- Добавлены методы [Block.setupAsRedstoneReceiver(nameID, connectToRedstone)](/api/namespace/Block#setupAsRedstoneReceiver) - делает блок приемником редстоуна, [Block.setupAsRedstoneEmitter(nameID, connectToRedstone)](/api/namespace/Block#setupAsRedstoneEmitter) - делает блок источником редстоуна, [Block.setupAsNonRedstoneTile(nameID)](/api/namespace/Block#setupAsNonRedstoneTile) - убирает всю связь с редстоуном
- RenderMesh: добавлен метод [addMesh(mesh\[, x, y, z\[, scaleX, scaleY, scaleZ\]\])](/api/class/RenderMesh#addMesh), в метод [setColor](/api/class/RenderMesh#setColor) добавлена поддержка прозрачности
- Описанию типа блока добавлен параметр [mapcolor](/api/namespace/Block#mapcolor), который задает цвет блока на карте (в формате 0xRRGGBB)

## 2.0.2b22

- Небольшие улучшения и исправления

## 2.0.2b21

- *(Экспериментально)* Общая оптимизация, ориентированная на повышение FPS с использованием динамичной смены приоритетов потоков
- *(Экспериментально)* Оптимизация генерации мира
- Небольшие исправления моделей предметов

## 2.0.2b20

Это обновление добавляет много нового и может быть нестабильно.

- Добавлена возможность добавления новых материалов и шейдеров (больше информации будет опубликовано в скором времени)
- Добавлены пользовательские модели предметов в инвентаре и в руке, для доступа к ним используйте [ItemModel.getFor(id, data)](/api/namespace/ItemModel#getFor)
- Добавлен новый режим анимации - модель с пользовательским материалом, чтобы войти в этот режим используйте [describe(\{ mesh: RenderMesh, skin: "имя текстуры", material: "имя материала" \})](/api/namespace/Animation#describe)
- Блоки с моделями ICRender автоматически получат модели в инвентаре и в руке
- Добавлены методы пользовательских изменений: [setFogDistance(close, far)](/api/namespace/Dimensions#setFogDistance), [resetFogDistance()](/api/namespace/Dimensions#resetFogDistance)
- Небольшие изменения и исправления

## 2.0.1b18

- Добавлены директории *innercore/resource_packs*, *innercore/behavior_packs* для добавления ресурспаков и пакетов поведения
- Локальные ресурспаки и пакеты поведения мира теперь автоматически подключаются
- Добавлен модуль [AddonEntityRegistry](/api/namespace/AddonEntityRegistry) и методы работы с мобами, добавляемыми аддонами
- Небольшие исправления

## 2.0.1b17

- Добавлен метод [GenerationUtils.generateOreCustom(x, y, z, id, data, amount, mode, listOfIds\[, seed\])](/api/namespace/GenerationUtils#generateOreCustom), также добавлен необязательный дополнительный параметр **seed** методу [GenerationUtils.generateOre](/api/namespace/GenerationUtils#generateOre)
- Исправлен дроп от [World.destroyBlock](/api/namespace/World#destroyBlock)
- Исправлены методы [Player.setHunger](/api/namespace/Player#setHunger), [Player.setSaturation](/api/namespace/Player#setSaturation), [Player.setExhaustion](/api/namespace/Player#setExhaustion)
- Исправления дропов некоторых блоков

## 2.0.1b16

- Добавлен звук при установке механизмов
- Исправления дропов некоторых блоков
- Небольшие исправления кастомых измерений

## 2.0.1b15

- Возвращена и оптимизирована карта биомов

## 2.0.1b14

- Временно отключена возможность генерации карт биомов

## 2.0.1b13

- Небольшие исправления

## 2.0.1b12

- Добавлен улучшенный API для новых измерений.
- Исправлен вылет от предметов с пустым и не английским базовым именем (это затронуло моды вроде Divine RPG). Это не исправит другие проблемы подобных неоптимизированных модов

## 2.0.1b11

- Добавлен полноценный интерфейс для создания новых биомов
- Добавлен каллбек *GenerateBiomeMap*, аналогичный каллбеку генерации чанка, нужный для создание карты биомов, используя методы [World.get](/api/namespace/World#getBiomeMap)/[setBiomeMap](/api/namespace/World#setBiomeMap)
- Добавлено больше параметров в каллбеки генерации, полный список параметров: (chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed)
- Добавлен метод [GenerationUtils.getPerlinNoise(x, y, z, seed, scale, numOctaves)](/api/namespace/GenerationUtils#getPerlinNoise)
- Добавлен метод [World.addGenerationCallback(callbackName, callback\[, hashString\])](/api/namespace/World#addGenerationCallback), который перед вызовом каллбека модифицирует сид чанка уникально для этого каллбека

## 2.0.1b10

- Добавлен интерфейс загрузки модов
- Моды теперь загружаются в отдельном потоке
- Исправлено зависание интерфейса после быстрых нажатий на блок или предмет с интерфейсом
- Исправлены ошибки с некоторыми инструментами и блоками
- Исправлено появление сообщения о фатальной ошибки, когда ее не происходило

## 2.0.0b9

- Классический интерфейс и интерфейс верстака доработаны
- Теперь интерфейсы механизмов и верстака закрываются при нажатии "назад" и сворачивании игры
- Исправлены возможные краши от маппинга рендера и от [Item.getName](/api/namespace/Item#getName)
- Теперь при остановке всех модов от ошибки это будет явно указано
- Утверждено исправление стабильности в билде 8

## 2.0.0b8

- Очередная попытка исправить общую стабильность, убрать у кого-то лаги и вылеты на старте (требуется тщательная проверка), по результатам тестов билдов 6-8 будет выбрана лучшая конфигурация.
- Исправлен крафт в новом верстаке

## 2.0.0b7

- Еще одна попытка исправить общую стабильность, убрать у кого-то лаги и вылеты на старте (требуется тщательная проверка)

## 2.0.0b6

- Улучшение стабильности (сообщите о проблемах, могут появиться новые вылеты)
- Изменен стиль верстака на классический
- Начат перенос интерфейса модов на классический стиль

## 2.0.0b5

- Исправления [2.0.0b4](#200b4) для систем ниже Android 9

## 2.0.0b4

- Небольшие исправления UI, в основном для устройств с вырезом

## 2.0.0b2 beta

- Небольшие исправления перед релизом

## 2.0.0 beta

- Первая версия в открытом доступе
