# Первый блок

Из блоков состоит весь мир Майнкрафта. Игрок и существа перемещаются по ним, их добыча позволяет игроку добывать ресурсы и создавать новые блоки для создания уже других блоков, а некоторые можно открывать или каким-либо образом взаимодействовать с ними. Начнем с рассмотрения текстур, а после, создадим блоки с разными вариациями.

## Сколько сторон у куба

Столько и текстур отрисовывается в трехмерном пространстве. Прежде чем создавать текстуры или использовать существующие, давайте рассмотрим развертку блока:

<table className="block-uv-table">
    <tr>
        <td/>
        <td>1. Y+</td>
        <td/>
        <td/>
    </tr>
    <tr>
        <td>5. Z+</td>
        <td>3. X+</td>
        <td>4. Z-</td>
        <td>2. X-</td>
    </tr>
    <tr>
        <td/>
        <td>0. Y-</td>
        <td/>
        <td/>
    </tr>
</table>

А вместе с ней и текстуры, например, верстака:

```js
[
    ["crafting_table_bottom", 0], // снизу
    ["crafting_table_top", 0], // сверху
    ["crafting_table_front", 0], // сзади
    ["crafting_table_front", 0], // спереди
    ["crafting_table_side", 0], // слева
    ["crafting_table_side", 0] // справа
]
```

За каждой текстурой следует мета. Каждая из 6 сторон может использовать свою собственную текстуру, однако в большинстве случаев нам будет хватать и одной. Как пример, все стороны андезита:

```js
[
    ["stone", 5], ["stone", 5], // снизу и сверху
    ["stone", 5], ["stone", 5], // сзади и спереди
    ["stone", 5], ["stone", 5] // слева и справа
]
```

Однако, нам не нужно каждый раз повторять одну и ту же текстуру, чтобы описать развертку на каждую из сторон. Последняя текстура будет дублирована нужное количество раз, соответственно мы можем сократить оба списка текстур выше:

<Tabs>
<TabItem value="andesite" label="Андезит">

```js
[
    ["stone", 5]
]
```

</TabItem>
<TabItem value="crafting_table" label="Верстак">

```js
[
    ["crafting_table_bottom", 0],
    ["crafting_table_top", 0],
    ["crafting_table_front", 0],
    ["crafting_table_front", 0],
    ["crafting_table_side", 0]
]
```

</TabItem>
</Tabs>

:::tip Прочие реализации

Если представлять список текстур в сторонах света, это север (сзади, north), юг (спереди, south), запад (слева, west) и восток (справа, east) соответственно. Таким способом описаны текстуры на внутреигровых блоках.

:::

## Зарегистрируем блок

А создавая блок, мы создаем еще и предмет связанный с ним. Соответственно, блоки обладают многими свойствами предметов, такими как крафты, и некоторыми событиями. Общий синтаксис создания блоков выглядит так:

```js
Block.createBlock("некий_идентификатор", [
    // вариации одного и того же блока
], {
    // дополнительные свойства, такие как прозрачность или свечение
});
```

Сразу же зарезервируем идентификатор, как мы это [делали с предметом](items/first-item.md#зарегистрируем-предмет), и рассмотрим список доступных нам свойств:

```js
IDRegistry.genBlockID("oxidized_log");
Block.createBlock("oxidized_log", [{
    name: "Окислевшееся бревно",
    texture: [
        ["oxidized_log_top", 0],
        ["oxidized_log_top", 0],
        ["oxidized_log_side", 0]
    ],
    inCreative: true
}], "opaque");
```

Мы создаем блок c идентификатором `oxidized_log`, одной вариацией и стандартными непрозрачными свойствами. В самой вариации описаны все доступные свойства, где обязательно указание только `texture`, остальные могут быть упущены для технических блоков.

<details>
    <summary>Стандарты для создания локализации</summary>
<div>

Переводы блоков произодятся в формате `tile.<идентификатор>[.<состояние>].name`, также как и в случае предметов. И если при создании предмета мы не рассматривали состояние, то в примере выше оно задействовано:

```js
Translation.addTranslation("tile.log.oxidized.name", {
    en: "Oxidized Log",
    ru: "Окислевшееся бревно"
});
```

Обычно состояние описывает дополнительные свойства, которые присущи этой категории предметов или блоков. Например, в случае бревен это `tile.log.oak.name` и `tile.log.big_oak.name`. Бывают и более комплексные варианты, но для основной части блоков состояния не потребуются.

</div>
</details>

Добавим новые текстуры, они должны распологаться в папке __terrain-atlas__ ресурсов. Также как и в случае предмета, мы должны указывать мету, а в качестве названия текстуры будет использовано оставшееся имя файла без пути.

<div className="resource-atlas-align-box">

![log_oxidized_top_0.png](/images/blocks/log_oxidized_top_0.png)
![log_oxidized_side_0.png](/images/blocks/log_oxidized_side_0.png)
![log_oxidized_side_1.png](/images/blocks/log_oxidized_side_1.png)

</div>

Например, *assets/resources/terrain-atlas/log/log_oxidized_top_0.png* может быть использован лишь в варианте `["log_oxidized_top", 0]` и никакой другой работать не будет.

### Использование вариаций

Предоставляется в первую очередь для снижения затрат идентификаторов. Они не бесконечны, так что если вы реализуете большое количество блоков со схожими свойствами, отличным вариантом будет поместить новые блоки в вариации уже созданного.

Возьмем в основу пример с бревном, дополнив его вариациями:

```js
IDRegistry.genBlockID("oxidized_log");
Block.createBlock("oxidized_log", [{
    name: "Окислевшееся бревно",
    texture: [
        ["oxidized_log_top", 0],
        ["oxidized_log_top", 0],
        ["oxidized_log_side", 0]
    ],
    inCreative: true
}, {
    name: "Окислевшееся бревно",
    texture: [
        ["oxidized_log_side", 1],
        ["oxidized_log_side", 1],
        ["oxidized_log_top", 0],
        ["oxidized_log_top", 0],
        ["oxidized_log_side", 1]
    ],
    inCreative: true
}, {
    name: "Окислевшееся бревно",
    texture: [
        ["oxidized_log_side", 1],
        ["oxidized_log_side", 1],
        ["oxidized_log_side", 1],
        ["oxidized_log_side", 1],
        ["oxidized_log_top", 0]
    ],
    inCreative: true
}], "opaque");
```

Теперь помимо основной, вертикальной вариации бревна, существует еще и две горизонтальных, бревна в игре могут быть размещены набок. Мы зарегистрируем автоматический разворот в следующих статьях.

### Дополнительные свойства

Позволяют установить такие вещи, как прозрачность, светимость и прочие параметры отображения блока в мире. Берите лишь те, которые нужны именно вам:

```js
IDRegistry.genBlockID("oxidized_log");
Block.createBlock("oxidized_log", [ /* ... */ ], {
    // на основе блока с этим числовым идентификатором будут
    // приобретены некоторые из его свойств
    base: 0,
    // материал определяет стандартное время ломания, его звук
    // и прочие характеристики из чего изготовлен блок
    material: 3,
    // звуки блока во время ломания или ходьбе по нему:
    // normal, gravel, wood, grass, metal, stone, cloth,
    // glass, sand, snow, ladder, anvil, slime, silent,
    // itemframe, turtle_egg, bamboo, bamboo_sapling,
    // lantern, scaffolding или sweet_berry_bush
    sound: "default",
    // если истинно, блок не может быть прозрачным; непрозрачные
    // блоки работают куда стабильнее в больших количествах
    solid: false,
    // если истинно, жидкости вроде воды могут быть налиты
    // прямо в блок; в противном случае блок не может быть
    // заполнен какой-либо жидкостью
    can_contain_liquid: false,
    // блок сможет быть размещен поверх другого блока, эта
    // опция позволяет размещать блоки слоями и будет рассмотрена
    // в одной из главе создания структур
    can_be_extra_block: false,
    // обратные стороны блока не будут отрисованы, актуально
    // для прозрачных блоков вроде листвы
    renderallfaces: false,
    // одна из стандартных форм блока, по умолчанию это
    // полный блок, а может быть, например, факел (2)
    rendertype: 0,
    // режим смешивания блока для отрисовки в мире
    renderlayer: EBlockRenderLayer.OPAQUE,
    // уровень испускаемого света, значение от 0 до 15
    lightlevel: 0,
    // уровень поглощения света, где 15 - полностью
    // поглощать, обычно для непрозрачных блоков;
    // оставшийся от поглощения свет пройдет через блок
    lightopacity: 0,
    // цвет для отображения на карте; пожалуйста, используйте
    // это свойство для интеграции с миникартой
    mapcolor: 0,
    // взрывоустойчивость, определяется в блоках
    explosionres: 3.0,
    // уровень трения при ходьбе по блоку, значение ближе
    // к 0 затруднит перемещение, увеличение ускорит
    friction: 0.6,
    // время разрушения блока в секундах, либо -1 если
    // блок нельзя разрушить как бедрок
    destroytime: 1.0,
    // полупрозрачность блока, влияющая на отображение
    // теней на блоке, 0 означает тени непрозрачных блоков
    translucency: 1.0,
    // источник для получения цвета блока по биому:
    // grass, leaves или water; только для карт
    color_source: "none"
});
```

Нам также потребуется добавить свойства непрозрачного блока, которые применяются при использовании `opaque`:

```js
IDRegistry.genBlockID("oxidized_log");
Block.createBlock("oxidized_log", [ /* ... */ ], {
    base: 1,
    solid: true,
    renderlayer: EBlockRenderLayer.BLEND,
    lightopacity: 15,
    explosionres: 4.0,
    translucency: 0.0,
    sound: "stone"
});
```

Если вы планируете использовать дополнительные свойства несколько раз или реализовывать интеграции, они могут быть зарегистрированы в коде единожды:

```js
Block.createSpecialType({
    base: 1,
    solid: true,
    renderlayer: EBlockRenderLayer.BLEND,
    lightopacity: 7,
    explosionres: 4.0,
    translucency: 1.0,
    lightlevel: 15,
    sound: "stone"
}, "radiactive_log");
```

Теперь можно использовать их по ключу `radiactive_log`:

```js
IDRegistry.genBlockID("oxidized_log");
Block.createBlock("oxidized_log", [ /* ... */ ], "radiactive_log");
```

Либо, дополнительные свойства могут быть зарегистрированы по случайному ключу, который прежде всего будет доступен по некой константе:

```js
const BLOCK_TYPE_RADIACTIVE_LOG = Block.createSpecialType({
    base: 1,
    solid: true,
    renderlayer: EBlockRenderLayer.BLEND,
    lightopacity: 7,
    explosionres: 4.0,
    translucency: 1.0,
    lightlevel: 15,
    sound: "stone"
});
IDRegistry.genBlockID("oxidized_log");
Block.createBlock("oxidized_log", [ /* ... */ ], BLOCK_TYPE_RADIACTIVE_LOG);
```

Рассмотрите [SpecialType](/api/interfaces/Block.SpecialType.html) для получения полной и актуальной информации по поводу доступности определенных свойств, статьи обновляются по мере необходимости.

## Событий мало не бывает

Зарегистрируем парочку для примера. Мы можем как следить за состоянием блока, так и реализовывать взаимодействия с ним. Используем уже знакомое и новое событие.

<Tabs groupId="scripting-language">
<TabItem value="js" label="JavaScript">

```js
Callback.addCallback("ItemUse", function(coords, item, block, isExternal, playerUid) {
    if (block.id == BlockID.oxidized_log) {
        let source = BlockSource.getDefaultForActor(playerUid);
        if (source != null) {
            let data = source.getBlockData(coords.x, coords.y, coords.z);
            source.setBlock(coords.x, coords.y, coords.z, BlockID.oxidized_log, data >= 2 ? 0 : ++data);
        }
    }
});
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts
Callback.addCallback("ItemUse", (coords, item, block, isExternal, playerUid) => {
    if (block.id == BlockID.oxidized_log) {
        let source = BlockSource.getDefaultForActor(playerUid);
        let data = source?.getBlockData(coords.x, coords.y, coords.z);
        source?.setBlock(coords.x, coords.y, coords.z, BlockID.oxidized_log, data >= 2 ? 0 : ++data);
    }
});
```

</TabItem>
</Tabs>

В первую очередь, [BlockSource](/api/classes/BlockSource-1.html) используется для получения данных об окружающем мире и его изменения. Мы еще неоднократно затронем этот класс. Убеждаясь, что мы дотронулись именно до блока новых бревен, будет получен источник блоков для игрока, вызвавшего событие; и в качестве примера блок будет повернут в следующую сторону, пока не пройдет через все вариации.

Представим, что у вас появилась потребность создать подобие лаки-блока. Воспользуемся событием __DestroyBlock__ для обнаружения разрушения блока:

<Tabs groupId="scripting-language">
<TabItem value="js" label="JavaScript">

```js
Callback.addCallback("DestroyBlock", function(coords, block, playerUid) {
    if (block.id == BlockID.oxidized_log) {
        let source = BlockSource.getDefaultForActor(playerUid);
        if (source != null) {
            source.spawnEntity(coords.x, coords.y, coords.z, "minecraft:chicken");
        }
    }
});
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts
Callback.addCallback("DestroyBlock", (coords, block, playerUid) =>
    block.id == BlockID.oxidized_log && BlockSource.getDefaultForActor(playerUid)?
        .spawnEntity(coords.x, coords.y, coords.z, "minecraft:chicken"));
```

</TabItem>
</Tabs>

И для призыва курочки нам тоже понадобилось использование источника блоков. Эти события происходят на стороне сервера, а не клиента, так что его потребность должно быть не слишком сложно объяснить.
