# Core Utility

Core Utility — библиотека для создания хуков (овверайда, перезаписывания результатов выполнения методов в нативе) и вызова ванильных методов из JavaScript/TypeScript, что значительно упрощает интеграции небольшого количества методов с нативом. Последняя актуальная версия библиотеки доступна к загрузке в [браузере модов](https://icmods.mineprogramming.org/mod?id=871).

+ Декларации
  + [core-utility.d.ts](https://github.com/Reider745/libs/blob/main/mod_documentation_api/CoreUtility/core-utility.d.ts) — для использования в редакторах на процессоре TypeScript

## Функции библиотеки

### GlobalContext

Глобальный контекст содержит большую часть ванильных экземпляров, прежде всего стоит поискать здесь.

Возвращает ClientInstance:

```js
GlobalContext.getClientInstance();
```

Возвращает Level для сервера:

```js
GlobalContext.getServerLevel();
```

Возвращает Level для клиента:

```js
GlobalContext.getLevel();
```

### NativeAPI

Вспомогательный класс для вызова основных методов конвертации идентификаторов между средой выполнения (runtime-значениями) и скриптом.

Идентификаторы могут быть нескольких видов, для предмета и блока они должны указываться соответственно:

```js
ConversionType.ITEM
ConversionType.BLOCK
```

Преобразовывает динамический идентификатор в статический:

```js
NativeAPI.dynamicToStatic(id, type);
```

Преобразовывает статический идентификатор в динамический:

```js
NativeAPI.staticToDynamic(id, type);
```

Возвращает уникальный идентификатор моба по ссылке на класс:

```js
NativeAPI.getActorID(actor);
```

Возвращает класс моба по его индентификатору:

```js
NativeAPI.getActorById(id);
```

### ToolTip

Под предметом отображаются дополнительные данные, например количество энергии или категория предмета. Все это можно реализовать с помощью подсказок.

Добавление подсказки предмету (сюда же входят и блоки, при регистрации для них также создается предмет):

```js
ToolTip.addToolTip(id, data, name);
```

Добавление динамической подсказки (перед основным текстом):

```js
ToolTip.addDynamicPre(id, data, function(item) {
    return Translation.translate("tool.unique_artifact.formatter");
});
```

Добавление динамической подсказки (после основного текста):

```js
ToolTip.addDynamicPost(id, data, function(item) {
    return Translation.translate("tool.unique_artifact.name");
});
```

Добавление нескольких подсказок:

```js
ToolTip.addToolTips(id, data, names);
```

Удаление определенной подсказки:

```js
ToolTip.deletToolTip(id, data, names);
```

Очищение добавленных ранее подсказок:

```js
ToolTip.clearToolTip(id, data);
```

Получение массива из всех добавленных подсказок:

```js
ToolTip.getToolTips(id, data);
```

Очистка __всех__ добавленных подсказок:

```js
ToolTip.clearToolTips();
```

### ActorDamageCause

Создаёт экземпляр класса ActorDamageCause, id это id будущего урона (можно заменить ванильные типы):

```js
new ActorDamageCause(id);
```

Устанавливает сообщение смерти:

```js
<ActorDamageCause>.setDeadMessage(function(type, name_player, attacker) {
    return "Kill "+name_player;
});
```

### TickingAreasManager

[Активная область (англ. Ticking area)](https://minecraft.wiki/w/Ticking_area) — это определённая игроком группа чанков, которые продолжают обновляться, даже если рядом нет игрока. Служит для управления заданными областями и создания новых.

Проверяет существуют ли активные области:

```js
TickingAreasManager.hasActiveAreas();
```

Добавляет сферическую активную область с определенным радиусом вокруг координат:

```js
TickingAreasManager.addArea(dimension, name, x, y, z, range);
```

Добавляет параллелепипедную активную область между координатами:

```js
TickingAreasManager.addAreaPositions(dimension, name, x1, y1, z1, x2, y2, z2);
```

Добавляет активную область для моба из измерения, это означает что моб будет сам прогружать область вокруг себя, например, так работает жемчуг края:

```js
TickingAreasManager.addEntityArea(dimension, entity);
```

Возвращает количество активных областей для всего мира в целом, они добавляются с помощью команд, в ограничении 10:

```js
TickingAreasManager.countStandaloneTickingAreas();
```

Возвращает количество активных областей в конкретном измерении:

```js
TickingAreasManager.countPendingAreas(dimension);
```

### FileUtils

Нативный модуль для работы с файлами, упрощает работу с большим количеством контента.

```js
// удаляет всю папку целиком со всем содержимым
FileUtils.deleteDirectory(path);
// удаляет только содержимое, оставляя папку
FileUtils.deleteDirectoryContents(path);
// удаляет папку если она пуста
FileUtils.deleteEmptyDirectory(dir);
// удаляет конкретный файл
FileUtils.deleteFile(file);
// переименовывает папку
FileUtils.renameDirectory(oldName, newName);
// переименовывает файл
FileUtils.renameFile(oldName, newName);
// копирует всю папку, включая файлы в ней
FileUtils.copyDirectory(from, to); 
// проверяет существует ли файл
FileUtils.fileExists(file);
// проверяет существует ли папка
FileUtils.directoryExists(dir);    
// проверяет может ли на пути размещаться файл или папка
FileUtils.isValidPath(path);
// проверяет является ли путь относительным папки игры
FileUtils.isRelativePath(path);
// проверяет существует ли файл или папка
FileUtils.isExists(pathOrFile);
// создает папку на заданном пути
FileUtils.createDirectory(path);
// создает папку, в который помещается файл, который был по этому пути раньше
FileUtils.createDirectoryForFile(path);
```

### World

Используется для управления списком миров, может быть добавлен любой путь, непредусмотренный самой игрой, например, миры для определенной сборки.

Добавляет путь в список миров:

```js
World.addWorldToCache(path);
```

Обновляет список миров, используйте для визуального изменения если игра уже загружена:

```js
World.updateWorlds();
```

Возвращает количество миров в списке, учитываются только валидные, т.е. если мир поврежден, в это количество он входить не будет:

```js
World.getWorldsCount();
```

### EntityRegister

Добавляет хандлер тика на моба, по текстовому идентификатору (например, minecraft:zombie\<\>, где \<\> - дополнительные данные для моба, возраст и т.п.):

```js
EntityRegister.setHandlerTick(name, function(ent) {
    // моб ускорится вверх и/или вся семья мобов
    Entity.setVelocity(ent, 0, 0.0005, 0);
});
```

### Gui

Проигрывавает анимацию разрушения блока на заданных координатах:

```js
Gui.animationDestroy(x, y, z);
```

## Нативные классы

Для небольшого упрощения использования ядра, ванильные классы наследуются от PointerClass.

Возвращает ссылку на класс:

```js
<pointerClass>.getPointer();
```

### BlockUtils

Возвращает PointerClass на LegacyBlock:

```js
BlockUtils.getBlockById(id);
```

Возвращает PointerClass на BlockState:

```js
BlockUtils.getBlockStateForIdData(id, data);
```

### ItemsUtil

Возвращает PointerClass по динамическому идентификатору предмета:

```js
ItemsUtil.getItemById(id);
```

Заменяет имя предмету:

```js
ItemsUtil.overrideName(id, data, name);
```

Заменяет защиту брони:

```js
ItemsUtil.overrideArmorValue(id, value);
```

### ClientInstance

+ наследуется от PointerClass

Возвращает Options:

```js
<ClientInstance>.getOptions();
```

Возвращает GuiData:

```js
<ClientInstance>.getGuiData();
```

Проигрывавает партикли разрушения блока на заданных координатах:

```js
<ClientInstance>.renderDestroyBlock(x, y, z, speed);
```

Устанавливает камеру локального игрока на другое существо:

```js
<ClientInstance>.setCameraEntity(entity);
```

### Random

+ наследуется от PointerClass

Генерирует случайное число до предела `max`:

```js
<random>.nextInt(max);
```

### Level

+ наследуется от PointerClass

Возвращает класс Random:

```js
<level>.getRandom();
```

Добавляет существо в мир по заданному неймспейсу:

```js
<level>.addEntity(source, x, y, z, namespace);
```

Возвращает отступ по времени от создания мира (1 тик = 1/20с):

```js
<level>.getCurrentTick();
```

Возвращает серверный отступ по времени от создания мира (1 тик = 1/20с):

```js
<level>.getCurrentServerTick();
```

Вовзвращает количество чанков, прогружаемых вокруг игроков:

```js
<level>.getChunkTickRange();
```

### Options

+ наследуется от PointerClass

Возвращает тип интерфейса - 0 для карманного интерфейса, 1 для стандартного:

```js
<options>.getUiProfile();
```

### GuiData

+ наследуется от PointerClass

Выводит сообщение заголовка (эквивалентная команда `/title <actorUid> title`):

```js
<guiData>.setTitle(name);
```

Выводит сообщение подзаголовка (эквивалентная команда `/title <actorUid> subtitle`):

```js
<guiData>.setSubtitle(name);
```

Выводит сообщение взаимодействия (эквивалентная команда `/title <actorUid> actionbar`):

```js
<guiData>.setActionMessage(name);
```

### BlockPos

+ наследуется от PointerClass

```js
const blockPos = new BlockPos(pointer);
const blockPos = new BlockPos(x, y, z);
blockPos.getX();
blockPos.getY();
blockPos.getZ();
blockPos.setX(x);
blockPos.setY(y);
blockPos.setZ(z);
blockPos.free();
```

### Vec3

+ наследуется от PointerClass

```js
const vec3 = new Vec3(pointer);
const vec3 = new Vec3(x, y, z);
vec3.getX();
vec3.getY();
vec3.getZ();
vec3.setX(x);
vec3.setY(y);
vec3.setZ(z);
vec3.free();
```

### Vec2

+ наследуется от PointerClass

```js
const vec2 = new Vec2(pointer);
const vec2 = new Vec2(x, y);
vec2.getX();
vec2.getY();
vec2.setX(x);
vec2.setY(y);
vec2.free();
```

### ChunkPos

+ наследуется от PointerClass

```js
const chunkPos = new ChunkPos(pointer);
const chunkPos = new ChunkPos(x, z);
chunkPos.getX();
chunkPos.getZ();
chunkPos.setX(x);
chunkPos.setZ(z);
chunkPos.free();
```

## Продвинутые возможности

Каждый метод в Майнкрафте имеет свой уникальный индентификатор (символ), по нему можно добавлять хуки (прослушиватели) на метод, ну или просто вызвать его.

> Где узнать символ метода?\
[IDA Pro – Hex Rays](https://hex-rays.com/IDA-pro/) - Windows, Linux, macOS\
[Ghidra Software Reverse Engineering Framework](https://github.com/NationalSecurityAgency/ghidra) - Windows, Linux, macOS\
[Disassembler - Viewer, Dumper](https://play.google.com/store/apps/details?id=com.mcal.disassembler) - Android

### Injector

Создан для работы с ванильными классами, позволяет вызывать методы и получать значения из них. Рекомендуется очищать, если последующее использование не предусмотрено. Может быть вызван на основе ссылки на экземпляр объекта.

```js
new Injector(pointer);
new Injector(PointerClass);
```

Оффсет класса в библиотеке, полезно, например, для поиска необходимого диассемблированного кода:

```js
<injector>.getOffset();
<injector>.getOffset(offset);
```

Вызывает ванильный метод:

```js
<injector>.call(symbol, parameters, table);
```

Вызывает ванильный метод, возвращает целочисленное значение:

```js
<injector>.getIntResult(symbol, parameters, table);
```

Вызывает ванильный метод, возвращает число с плавающей точкой:

```js
<injector>.getFloatResult(symbol, parameters, table);
```

Вызывает ванильный метод, возвращает булевое значение:

```js
<injector>.getBoolResult(symbol, parameters, table);
```

Вызывает ванильный метод, возвращает строку:

```js
<injector>.getStringResult(symbol, parameters, table);
```

Вызывает ванильный метод, возвращает ссылку на класс:

```js
<injector>.getPointerResult(symbol, parameters, table);
```

Заменяет конкретный метод класса на любой другой:

```js
<injector>.replace(table, method, symbol);
```

Освобождает память, дальнейшее взаимодействие с этим объектом недоступно:

```js
<injector>.free();
```

Устанавливает название ванильной библиотеки, откуда вызывается метод:

```js
<injector>.setLib(name);
```

#### Вызов статичных методов

Если экземпляра нет и быть не может, то метод является статичным.

Вызов таких методов происходит с помощью пустого конструктора:

```js
new Injector();
```

### Offset

Класс позволяет получать поля класса по оффсету.

```js
<offset>.setOffset(offset);
// получение целочисленного значения
<offset>.getInt(offset?);
// получения числа с плавающей точкой
<offset>.getFloat(offset?);
// получение ссылки на значение
<offset>.getPointer(offset?);
// получение строкового значения
<offset>.getString(offset?);
// освобождение памяти, дальнейшее использование невозможно
<offset>.free();
```

### Хуки

1. Создайте в папке мода файл `hooks.json`.
2. Запишите туда объект-описание хука.
3. Добавьте калбек хука в скрипт (первым параметром всегда будет controller, а вторым указатель на хукнутый класс; только после идут заданные параметры).

```json
{
    "symbol": "<symbol>",
    "callback": "<callbackName>",
    "args": [], // по умолчанию []
    "lib": "mcpe", // по умолчанию mcpe
    "return": "bool" // по умолчанию void
}
```

+ Возвращаемые типы данных
  + stl::string
  + void - принимает ссылку на класс
  + int
  + float
  + bool

+ Аргументы типы данных
  + stl::string
  + int
  + float
  + ptr
  + BlockPos
  + Vec2
  + Vec3
  + ChunkPos
  + BlockSource
  + CompoundTag

> Для остальных типов данных возможно использование ссылки на объект `ptr`. Также, не забывайте заменять `<symbol>` на конкретный символ, который необходимо овверайднуть, а `<callbackName>` на калбек, который будет вызван в результате выполнения метода.

## Примеры использования

+ Модификации
  + [TimeWand](https://icmods.mineprogramming.org/mod?id=881)
  + [NotBurningMobs](https://icmods.mineprogramming.org/mod?id=872)
  + [Combination Lock](https://icmods.mineprogramming.org/mod?id=883)
  + [Faster Ladder Climbing](https://icmods.mineprogramming.org/mod?id=869)

1. Пример Injector, при нажатии на блок вызывается его randomTick:

    ```js
    function getNativeBlock(region, x, y, z) {
        let injector = new Injector(region.getPointer()).setArgsType(["ptr"]);
        let pos = new BlockPos(x, y, z);
        let block = injector.getPointerResult("_ZNK11BlockSource8getBlockERK8BlockPos", [
            Parameter.getPointer(pos)
        ]);
        injector.free();
        pos.free();
        return block;
    }

    function randomTick(block, x, y, z, region) {
        let injector = new Injector(block).setArgsType(["ptr", "ptr", "ptr"]);
        let pos = new BlockPos(x, y, z);
        injector.call("_ZNK5Block10randomTickER11BlockSourceRK8BlockPosR6Random", [
            Parameter.getPointer(region.getPointer()),
            Parameter.getPointer(pos),
            Parameter.getPointer(GlobalContext.getServerLevel().getRandom())
        ]);
        pos.free();
        injector.free();
    }

    Callback.addCallback("ItemUse", function(pos, item, block, is, player) {
        let region = BlockSource.getDefaultForActor(player);
        randomTick(getNativeBlock(region, pos.x, pos.y, pos.z), pos.x, pos.y, pos.z, region);
    });
    ```

2. Пример Offset, при нажатии на блок будет получен экземпляр BlockPos, в котором есть координаты по оффсету:

    ```js
    Callback.addCallback("ItemUse", function(coords, item, block, is, player) {
        let pos = new BlockPos(coords.x, coords.y, coords.z);
        let injector = new Injector(pos);
        let offset = injector.getOffset();
        alert(offset.getInt(0) + " " + offset.getInt(4) + " " + offset.getInt(8));
        pos.free();
        injector.free();
    });
    ```

3. Пример с хуком, изменим логику для определения времени суток, в этом случае, мобы начнут гореть на солнце независимо от времени суток:

    ```json
    [
        {
            "symbol": "_ZNK9Dimension5isDayEv",
            "callback": "Dimension.isDay",
            "args": [],
            "priority": "pre",
            "return": "bool"
        }
    ]
    ```

    ```js
    Callback.addCallback("Dimension.isDay", function(controller, self) {
        controller.replace();
        controller.setResult(false);
    });
    ```

4. Пример с установкой силы редстоун сигнала, при нажатии палкой по блоку, установит ему силу редстоун сигнала:

    ```js
    function getDimension(region) {
        let injector = new Injector(region.getPointer());
        let dimension = injector.getPointerResult("_ZN11BlockSource12getDimensionEv");
        injector.free();
        return dimension;
    }

    function getCircuitSystem(region) {
        let injector = new Injector(getDimension(region));
        let system = injector.getPointerResult("_ZN9Dimension16getCircuitSystemEv");
        injector.free();
        return system;
    }

    let cache = {};
    function redstoneUpdate(region, x, y, z, strength) {
        let system = cache[region.getDimension()];
        if (!system) {
            cache[region.getDimension()] = getCircuitSystem(region);
            system = cache[region.getDimension()];
        }
        let injector = new Injector(system);
        let pos = new BlockPos(x, y, z);
        injector.setArgsType(["ptr", "int"]).call("_ZN13CircuitSystem11setStrengthERK8BlockPosi", [
            Parameter.getPointer(pos),
            Parameter.getInt(strength || 10)
        ]);
        injector.free();
        pos.free();
    }

    Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player) {
        if (item.id == 280)
            Updatable.addUpdatable({
                tick: 0,
                update() {
                    if (this.tick >= 20)
                        this.remove = true;
                    redstoneUpdate(BlockSource.getDefaultForActor(player), coords.x, coords.y, coords.z, 5);
                }
            })
    });
    ```

Часть методов с документацией доступна в файле деклараций [core-utility.d.ts](https://github.com/Reider745/libs/blob/main/mod_documentation_api/CoreUtility/core-utility.d.ts).

## История обновлений

+ Alpha 2.0.0
  + добавлена возможность вызывать методы с аргументами в Injector
  + добавлено возможность получения значений класса по offset
  + Добавлен модуль ToolTip
  + Добавлена возможность создавать шкалы(на данный момент документация отстусвует)
  + добавлен в api переменная vesion, в этой версии имеет значение 2
  + добавлен модуль FileAPI
  + добавлен метод injector.replace(table, symbol, replaceSymbol)

+ Alpha 2.1.0
  + фикс краша от ToolTip
  + фикс методов free
  + использование методов free не обязательно(но рекомендуется вызывать в ручную)
  + добавлен метод injector.setArgsType(string...)
  + добавлен метод item.setIsMirroredArt(boolean)
  + добавлен тип в параметры инжектора long
  + добавлена возможность получать float по offset getFloat()
  + добавлены классы Player, Actor, Mob, Block
  + добавлена возможность добавлять кастумный урон
