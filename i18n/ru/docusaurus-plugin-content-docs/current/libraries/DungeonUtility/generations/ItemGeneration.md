---
title: Генерация предметов
---

ItemGeneration - класс для создания генераторов предметов и взаимодействия с ними.
Данный класс может работать только с ванильными контейнерами!

## Какие проблемы решает генератор предметов?

1. Известная раньше проблема, это пустые сундуки в структурах,  DungeonUtility будет по умолчанию генерировать предметы до тех-пор пока не сгенерирует, что очень удобно.
2. Интеграция между модами
3. Просмотр игроком, что ему может выпасть в сундуке

Разберем базовые методы данного класса, в отдельности разберем создание генератора, на данный момент содержится даже проблема, чтто и в StructureLoader!
**Поэтому очень важно позаботиться об уникальности имени генератора!**

## Генерация предметов

```ts
// Создаем генератор по имени example_name, для использования генератора всегда будет необходимо использовать его
ItemGeneration.newGenerator("example_name");
```

Теперь разберем данный метод

```ts
ItemGeneration.addItem("example_name", VanillaItemID.diamond, .1, {min: 1, max:5});
```

Мы обращаемся к генератору по имени example_name и добавляем предмет с id из VanillaItemID.diamond, с шансом спавна .1(это 10%) и следующим параметром мы устанавливаем количество падающих предметов, а именно от 1 до 5.
> Помните, что метод использует [**вероятность**](https://ru.wikipedia.org/wiki/Вероятность) спавна, коротко говоря это шанс спавнв деленный на 100(например 1/100 = 1%)

Теперь разберем метод заполнения сундука

```ts
ItemGeneration.fill("example_name", x, y, z, region);
```

Данный метод заполняет сундук на координатах x, y, z и в измерении region(BlockSource)

## Интеграция с другими модами

Для того, чтобы не добавлять свои предметы в ручную в каждый мод на структуры был добавлен метод
```ts
ItemGeneration.setItemIntegration(VanillaItemID.diamond_axe, .1, {min: 1, max: 1});
```
Тут мы добавляем предмет с id из VanillaItemID.diamond_axe, с шансом спавна .1(это 10%) и следующим параметром мы устанавливаем количество падающих предметов, а именно от 1 до 1.

## Recipe Viewer

Данный метод создаст интеграцию с RecipeViewer за вас!

```ts
ItemGeneration.registerRecipeViewer("example_generator", "Title generator");
```

Разберем данный метод, данный метод позводит просматрировать игроку предметы в Recipe Viewer которые он может получить с данжей.

## Как заставить генерироваться лут в своей структуре?

```ts
examplePool.setGlobalPrototype("test_structure", Structure.getPrototypeDefault("example_generator"));
```

Разберем данный код, мы обращаемся к экземпляру StructurePool и устанавливаем ей генерацию предметов example_generator

## Примеры

```ts
// Помните, что имя генератора должно быть уникально!!!
ItemGeneration.newGenerator("example_generator");

// Добавляем предметы
ItemGeneration.addItem("example_generator", VanillaItemID.iron_ingot, .5, {min: 1, max: 3});
ItemGeneration.addItem("example_generator", VanillaItemID.diamond, .1, {min: 1, max: 1});

// Создаем событие нажатия палкой, теперь палка будет заполнять сундуки
Item.registerUseFunction(VanillaItemID.stick, (coords, item, block, player) => {
    // Заполняем сундук на координатах coords в измерении в котором находится игрок player
    ItemGeneration.fill("example_generator", coords.x, coords.y, coords.z, BlockSource.getDefaultForActor(player));
});

// Добавляем предмет вовсе другие моды
ItemGeneration.setItemIntegration(VanillaItemID.diamond_axe, .1, {min: 1, max: 1});

// Создаем интеграцию с RecipeViewer
ItemGeneration.registerRecipeViewer("example_generator", "Title generator");


// Создаем StructurePool, обратите внимание, что у каждого мода должен быть свое уникальное имя StructurePool!!!!!!!!!
let examplePool = new StructurePool("example_pool");

// Устанавливаем путь к папке со структурами, в данном случае папка structures в главное директории мода
examplePool.setPathStructures(__dir__+"structures");

// Загружаем структуру test_structure.struct из папки указаной выше, структура будет доступна по имени test_structure
examplePool.upload("test_structure");

// Устанавливаем генерацию предметов в структуре test_structure
examplePool.setGlobalPrototype("test_structure", Structure.getPrototypeDefault("example_generator"));
```
