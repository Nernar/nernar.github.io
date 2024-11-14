# Добавление лута

*ItemGeneration* — класс для создания генераторов предметов и взаимодействия с ними. Он используется для заполнения ванильных сундуков, бочек и других ВАНИЛЬНЫХ контейнеров.

:::info Какие проблемы решает генератор предметов?

1. Известная раньше проблема, это пустые сундуки в структурах, Dungeon Utility будет по умолчанию генерировать предметы до тех пор, пока не сгенерирует, что очень удобно.
2. Интеграция между модами.
3. Просмотр игроком лута сундуков в данжах.
:::

Разберем базовые методы данного класса, а в помимо этого — создание генератора, на данный момент содержится даже проблема, чтто и в StructureLoader!
**Поэтому очень важно позаботиться об уникальности имени генератора!**

## Генератор предметов

```ts
// создаем генератор по имени example_name, последующие операции потребуют то же имя
ItemGeneration.newGenerator("example_name");
```

Генератор создан, теперь можем приступить к добавлению лута в генератор:

```ts
ItemGeneration.addItem("example_name", VanillaItemID.diamond, .1, { min: 1, max: 5 });
```

Мы обращаемся к генератору по имени *example_name* и добавляем предмет с идентификатором `VanillaItemID.diamond`, вероятность спавна 0.1 (это 10%), а последним параметром мы указываем количество предметов (от 1 до 5).

Окей, генератор создан, предмет в него добавлен, а как же нам добавить его в контейнер? Воспользуемся методом заполнения контейнера (обычно сундука):

```ts
ItemGeneration.fill("example_name", x, y, z, region);
```

Данный метод заполняет сундук на координатах x, y, z в [источник блоков](https://nernar.github.io/ru/docs/environment/modifying-region) region.

## Интеграция с другими модами

Для того, чтобы не добавлять свои предметы вручную в каждый мод на структуры, был добавлен метод:

```ts
ItemGeneration.setItemIntegration(VanillaItemID.diamond_axe, .1, { min: 1, max: 1 });
```

Тут мы добавляем предмет с идентификатором `VanillaItemID.diamond_axe`, вероятностью спавна 0.1 (это 10%), а последним параметром мы указываем количество предметов (от 1 до 1).

### Recipe Viewer

Вызов этого метода позволит игроку просматрировать предметы в Recipe Viewer, которые он сможет получить с данжей:

```ts
ItemGeneration.registerRecipeViewer("example_generator", "Title generator");
```

## Как заставить генерироваться лут в своей структуре?

```ts
examplePool.setGlobalPrototype("test_structure", Structure.getPrototypeDefault("example_generator"));
```

Мы обращаемся к экземпляру *StructurePool* и устанавливаем ему генерацию предметов `example_generator`.

## Примеры

```ts
// помните, что имя генератора должно быть уникально
ItemGeneration.newGenerator("example_generator");

// добавляем предметы в лут
ItemGeneration.addItem("example_generator", VanillaItemID.iron_ingot, .5, { min: 1, max: 3 });
ItemGeneration.addItem("example_generator", VanillaItemID.diamond, .1, { min: 1, max: 1 });

// создаем событие нажатия палкой, теперь палка будет заполнять сундуки
Item.registerUseFunction(VanillaItemID.stick, (coords, item, block, player) => {
    // заполняем сундук на координатах coords в измерении в котором находится игрок player
    ItemGeneration.fill("example_generator", coords.x, coords.y, coords.z, BlockSource.getDefaultForActor(player));
});

// добавляем предмет во все другие моды
ItemGeneration.setItemIntegration(VanillaItemID.diamond_axe, .1, { min: 1, max: 1 });

// создаем интеграцию с Recipe Viewer
ItemGeneration.registerRecipeViewer("example_generator", "Title generator");

// создаем StructurePool; ОБРАТИТЕ ВНИМАНИЕ: у каждого мода должно быть свое уникальное имя!
let examplePool = new StructurePool("example_pool");

// устанавливаем путь к папке со структурами, в данном случае папка structures/ в главной директории мода
examplePool.setPathStructures(__dir__ + "structures");

// загружаем структуру test_structure.struct из папки указаной выше, структура будет доступна по имени test_structure
examplePool.upload("test_structure");

// устанавливаем лут структуре test_structure
examplePool.setGlobalPrototype("test_structure", Structure.getPrototypeDefault("example_generator"));
```
