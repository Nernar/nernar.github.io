# Генерация структуры

*DefaultGenerationDescription* - класс, который обеспечит простую и качественную генерацию.

:::note Какие проблемы решает генератор структур Dungeon Utility?

1. Частые появления структур, помимо прочего, структуры не смогут сгенерироваться друг в друге.
2. Обрезание части структур: структуры могли разделяться между чанками по разным причинам.

:::

## Генерация структур

```ts
let examplePool = new StructurePool("example_pool");

// устанавливаем путь к папке со структурами, в данном случае папка structures в главной директории мода
examplePool.setPathStructures(__dir__ + "structures");

// загружаем структуру test_structure.struct из папки указаной выше, структура будет доступна по имени test_structure
examplePool.upload("test_structure");

// добавляем событие StructureLoadOne, чтобы работать со структурами
Callback.addCallback("StructureLoadOne", () => {
    // создаем DefaultGenerationDescription, даем ему структуру, которую будем генерировать с шансом 1 к 80 (примерно 1 структура на 80 чанков)
    let exampleGeneration = new DefaultGenerationDescription(examplePool.get("test_structure"), 80);

    // задаем уникальный идентификатор для структуры
    exampleGeneration.setIdentifier("my_mod:test_structure"); 
    // задаем блоки на которых может появиться структура
    exampleGeneration.setSurface(true, [VanillaBlockID.grass]); 
    // задаем минимальное расстояние между структурами группы my_mod_group
    exampleGeneration.setDistance(90, "my_mod_group"); 

    // регистрируем генерацию структур по только что описанным параметрам
    exampleGeneration.register();
});
```

### Разберем код

Для регистрации генерации структуры используется класс *DefaultGenerationDescription*. Он принимает структуру, которая будет генерироваться и шанс ее появления на один сгенерированный чанк.

:::tip

В шансе спавна указывается делитель для получения вероятности спавна структуры.

:::

Далее мы устанавливаем уникальный идентификатор мода, это необходимо для устранения разделения структур:

```ts
exampleGeneration.setIdentifier("my_mod:test_structure");
```

:::danger

Если ваша структура генерируется очень часто, не рекомендуется указывать идентификатор мода. Это негативно скажется на производительности, поскольку во время генерации появится слишком много проверок.

:::

Затем мы установили поверхности на которых будет генерироваться структура, где `true` — это переключатель между белым и черным списком (нужно ли использовать эти блоки или, наоборот, все кроме этих):

```ts
exampleGeneration.setSurface(true, [VanillaBlockID.grass]);
```

Теперь, мы задали группу к которой принадлежит структура, а также минимальное расстояние до ближайшей структуры из данной группы (для того чтобы структуры не появлялись слишком часто, количество структур в группе не ограничено):

```ts
exampleGeneration.setDistance(90, "my_mod_group");
```

И наконец, мы завершили регистрацию нашей структуры и добавили ее в генерацию:

```ts
exampleGeneration.register();
```

## Пример с добавлением предметов

```ts
// помните, что имя генератора должно быть уникально
ItemGeneration.newGenerator("example_generator");

// добавляем предметы в лут
ItemGeneration.addItem("example_generator", VanillaItemID.iron_ingot, .5, {min: 1, max: 3});
ItemGeneration.addItem("example_generator", VanillaItemID.diamond, .1, {min: 1, max: 1});

// создаем интеграцию с Recipe Viewer
ItemGeneration.registerRecipeViewer("example_generator", "Title generator");

// создаем StructurePool; ОБРАТИТЕ ВНИМАНИЕ: у каждого мода должно быть свое уникальное имя StructurePool!
let examplePool = new StructurePool("example_pool");
// устанавливаем путь к папке со структурами, в данном случае папка structures/ в главной директории мода
examplePool.setPathStructures(__dir__ + "structures");
// загружаем структуру test_structure.struct из папки указаной выше, структура будет доступна по имени test_structure
examplePool.upload("test_structure");

// устанавливаем лут структуре test_structure
examplePool.setGlobalPrototype("test_structure", Structure.getPrototypeDefault("example_generator"));

// добавляем событие StructureLoadOne, чтобы работать со структурой
Callback.addCallback("StructureLoadOne", () => {
    // создаем DefaultGenerationDescription, даем ему структуру которую будем генерировать с шансом 1 к 80 (примерно 1 структура на 80 чанков)
    let exampleGeneration = new DefaultGenerationDescription(examplePool.get("test_structure"), 80);

    // задаем уникальный идентификатор для структуры
    exampleGeneration.setIdentifier("my_mod:test_structure"); 
    // задаем блоки на которых может появиться структура
    exampleGeneration.setSurface(true, [VanillaBlockID.grass]); 
    // задаем минимальное расстояние между структурами группы my_mod_group
    exampleGeneration.setDistance(90, "my_mod_group"); 

    // регистрируем генерацию структур по только что описанным параметрам
    exampleGeneration.register();
});
```
