# Генерация структуры

DefaultGenerationDescription - класс обеспечит качественную генерацию, которая создается очень просто

:::note Какие проблемы решает генератор структур DungeonUtility?

1. Частые появления структур, помимо прочего, структуры не смогут сгенерироваться друг в друге
2. Обрезание части структур, структуры могли разделяться между чанками по разным причинам

:::

## Генерация структур

Начнем, пожалуй, сразу с примера:

```ts
let examplePool = new StructurePool("example_pool");

// Устанавливаем путь к папке со структурами, в данном случае папка structures в главной директории мода
examplePool.setPathStructures(__dir__+"structures");

// Загружаем структуру 'test_structure.struct' из папки указаной выше, структура будет доступна по имени test_structure
examplePool.upload("test_structure");

// Добавляем событие StructureLoadOne, чтобы работать со структурой
Callback.addCallback("StructureLoadOne", () => {
    // Создаем DefaultGenerationDescription, даем ему структуру, которую будем генерировать с шансом 1 к 80 (примерно 1 структура на 80 чанков)
    let example_generation = new DefaultGenerationDescription(examplePool.get("test_structure"), 80);

    example_generation.setIdentifier("my_mod:test_structure");// Задаем уникальный индитификатор, для структуры
    example_generation.setSurface(true, [VanillaBlockID.grass]);// Задаем блоки на которых будет спавниться структура
    example_generation.setDistance(90, "my_mod_group");// Задаем минимальное расстояния между структурами my_mod_group

    // Регистрируем генерацию структур, по выше описаным параметрам
    example_generation.register();
});
```

### Разберем код

Для регистрации генерации структуры используется класс DefaultGenerationDescription
Он принимает структуру, которая будет генерироваться и шанс

:::info
В шансе спана указывается делитель для получения [**вероятности**](https://ru.wikipedia.org/wiki/Вероятность) спавна структуры
:::
Дальше мы устанавливаем уникальный индитификатор мода, это требуется для исправления половинчитых структур
:::info
Если ваша структура генерируется очень часто, не рекомендуется это делать
:::

```ts
example_generation.setIdentifier("my_mod:test_structure");
```

Затем мы установили поверхности на которых будет генерироваться структура, в где true - это переключатель между белым списком и черным, в примере белый список

```ts
example_generation.setSurface(true, [VanillaBlockID.grass]);
```

Дальше мы задали групу к которой принадлежит структура и минимальное растояние до ближайшей структуры данной группы(что-бы структуры не спавнились слишком часто)

```ts
example_generation.setDistance(90, "my_mod_group");
```

Ну и на последок мы зарегистрировали генерацию структуры

```ts
example_generation.register();
```

## Пример с генерацией предметов

```ts
// Помните, что имя генератора должно быть уникально!!!
ItemGeneration.newGenerator("example_generator");

// Добавляем предметы
ItemGeneration.addItem("example_generator", VanillaItemID.iron_ingot, .5, {min: 1, max: 3});
ItemGeneration.addItem("example_generator", VanillaItemID.diamond, .1, {min: 1, max: 1});

// Создаем интеграцию с Recipe Viewer
ItemGeneration.registerRecipeViewer("example_generator", "Title generator");


// Создаем StructurePool, ОБРАТИТЕ ВНИМАНИЕ, что у каждого мода должно быть свое уникальное имя StructurePool!
let examplePool = new StructurePool("example_pool");
// Устанавливаем путь к папке со структурами, в данном случае папка structures в главной директории мода
examplePool.setPathStructures(__dir__+"structures");
// Загружаем структуру 'test_structure.struct' из папки указаной выше, структура будет доступна по имени test_structure
examplePool.upload("test_structure");

// Устанавливаем генерацию предметов в структуре test_structure
examplePool.setGlobalPrototype("test_structure", Structure.getPrototypeDefault("example_generator"));

// Добавляем событие StructureLoadOne, чтобы работать со структурой
Callback.addCallback("StructureLoadOne", () => {
    // Создаем DefaultGenerationDescription, даем ему структуру которую будем генерировать, с шансом 1 к 80(примерно 1 структура на 80 чанков)
    let example_generation = new DefaultGenerationDescription(examplePool.get("test_structure"), 80);

    example_generation.setIdentifier("my_mod:test_structure");// Задаем уникальный индитификатор, для структуры
    example_generation.setSurface(true, [VanillaBlockID.grass]);// Задаем блоки на которых будет спавниться структура
    example_generation.setDistance(90, "my_mod_group");// Задаем минимальное расстояния между структурами my_mod_group

    //  Регистрируем генерацию структур, по раннее описанным параметрам
    example_generation.register();
});
```
