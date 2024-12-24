# Внутреигровые формы

Помимо стандартных "полноблочных" блоков, формы могут быть самыми разными. Игра предоставляет различные вариации базовых моделей, таких как ступеньки или полублоки. Обычно их реализации используются совместно со стандартными, полноблочными блоками. Здесь представлено большинство существующих форм, а также различные типы смешивания текстур атласа.

## Определимся с форматом

Прежде всего, форма блока может быть изменена несколькими способами. Это дополнительные свойства посредством добавления внутреигрового типа, любая параллелепипедная форма (в виде коробки; или же шейп), рендеры с использованием коробок или создания разверток меж вершин, а также нативное изменение формы. Мы поверхностно рассмотрим все кроме последнего.

Для регистрации блока с такой формой воспользуемся дополнительными свойствами:

```js
const BLOCK_TYPE_SOME_NAME = Block.createSpecialType({
    rendertype: 0 // просто цельный блок, базовое значение
    // некоторые свойства, которые будут изменены: если в примере
    // подается лишь объект, его необходимо выделить именно сюда
});
```

И помимо этого, некоторым формам нужно будет добавить функционал.

### Листва

Не учитывая различные интеграции вроде Better Foliage, листва это полноблочный блок лишь с измененными дополнительными свойствами. Общее определение сводится лишь к паре функций:

```js
IDRegistry.genBlockID("oxidized_leaves");
Block.createBlock("oxidized_leaves", [{
    name: "tile.oxidized_leaves.name",
    texture: [["oxidized_leaves", 0]],
    inCreative: true
}], BLOCK_TYPE_LEAVES);
```

И конечно же, перед этим определите `BLOCK_TYPE_LEAVES` по формату, и желательно, в отдельном месте для всех блоков:

```js title="BLOCK_TYPE_LEAVES"
{
    base: VanillaBlockID.leaves,
    explosionres: 1,
    renderlayer: EBlockRenderLayer.RAY_TRACED_WATER,
    renderallfaces: true,
    lightopacity: 1,
    translucency: 0.5,
    destroytime: 0.7,
    sound: "grass"
}
```

:::note Время для локализации

```js
Translation.addTranslation("tile.oxidized_leaves.name", {
    en: "Oxidized Leaves",
    ru: "Окислевшаяся листва"
});
```

:::

### Стекло и панели

Для реализации стекол достаточно добавить прозрачность текстурам и изменить их уровень поглощения света. Помимо самого блока стекла, вероятно, вы захотите реализовать и панели, отдельно, или вместе с этим стеклом.

Определим еще один окислевшийся блок, но теперь уже стекла и панелей из него:

```js
IDRegistry.genBlockID("oxidized_glass");
Block.createBlock("oxidized_glass", [{
    name: "tile.oxidized_glass.name",
    texture: [["oxidized_glass", 0]]
}], BLOCK_TYPE_GLASS);

IDRegistry.genBlockID("oxidized_glass_pane");
Block.createBlock("oxidized_glass_pane", [{
    name: "tile.oxidized_glass_pane.name",
    texture: [["oxidized_glass", 0]]
}], BLOCK_TYPE_GLASS_PANE);
```

Дополнительные свойства для прозрачных стекол будут выглядеть весьма просто:

```js title="BLOCK_TYPE_GLASS"
{
    // TODO: это внутреигровая форма стекла, но я не уверен
    // следует ли ее использовать; реальный пример лишь один
    // rendertype: 4,
    renderlayer: EBlockRenderLayer.RAY_TRACED_WATER,
    lightopacity: 1,
    destroytime: .4,
    sound: "glass"
}
```

```js title="BLOCK_TYPE_GLASS_PANE"
{
    rendertype: 87,
    renderlayer: EBlockRenderLayer.RAY_TRACED_WATER,
    lightopacity: 1,
    destroytime: .4,
    sound: "glass"
}
```

И пусть автор этой статьи против использования "жабных фишек", но соединения меж стекол выглядят действительно неплохо. Попробуйте [библиотеку Connected Texture](TODO) для подобной реализации:

```js
ConnectedTexture.setModelForGlass(BlockID.oxidized_glass, -1, "oxidized_glass");
```

:::note Время для локализации

```js
Translation.addTranslation("tile.oxidized_glass.name", {
    en: "Oxidized Glass",
    ru: "Окислевшееся стекло"
});
Translation.addTranslation("tile.oxidized_glass_pane.name", {
    en: "Oxidized Glass Pane",
    ru: "Окислевшаяся стеклянная панель"
});
```

:::

### Растения

Можно разделить на три типа: зерновые культуры, саженцы и различные виды травы с цветами. Первые представляют собой горизонтальные пересечения нескольких слоев текстур, тогда как остальные состоят из пары текстур, расположены наискосок и пересекаются в центре. Разница между двумя последними в отсутствии случайного расположения внутри блока для первого.

Начнем с создания розоподобного растения, это весьма просто:

```js
IDRegistry.genBlockID("oxidized_rose");
Block.createBlock("oxidized_rose", [{
    name: "tile.oxidized_rose.name",
    texture: [["oxidized_rose", 0]],
    inCreative: true
}], BLOCK_TYPE_PLANT);

BlockRenderer.setCustomCollisionShape(BlockID.oxidized_wheat, -1, new ICRender.CollisionShape());
```

Определите дополнительные свойства перед созданием блока:

```js title="BLOCK_TYPE_PLANT"
{
    base: VanillaBlockID.tallgrass,
    explosionres: 0,
    rendertype: 6,
    lightopacity: 0,
    destroytime: 0,
    sound: "grass"
}
```

Можете также реализовать разрушение блока, если блок под растением будет разрушен:

```js
Callback.addCallback("DestroyBlock", function(coords, block, playerUid) {
    let region = BlockSource.getDefaultForActor(playerUid);
    if (region.getBlockId(coords.x, coords.y + 1, coords.z) == BlockID.oxidized_rose) {
        region.destroyBlock(coords.x, coords.y + 1, coords.z);
    }
});
```

В целом этого вполне достаточно для декоративных растений. Но когда дело доходит до семян и других зерновых культур, их создание может потребовать чуть большего времени.

Рассмотрим создание простой бахчи, добавив события и функционал:

```js
IDRegistry.genBlockID("oxidized_wheat");
Block.createBlock("oxidized_wheat", [{
    name: "tile.oxidized_wheat.name",
    texture: [["oxidized_wheat", 0]]
}], BLOCK_TYPE_CROP);

BlockRenderer.setCustomCollisionShape(BlockID.oxidized_wheat, -1, new ICRender.CollisionShape());
```

Не забудьте прежде объявить дополнительные свойства, правила почти те же что и других растений:

```js title="BLOCK_TYPE_CROP"
{
    base: VanillaTileID.wheat,
    explosionres: 1,
    rendertype: 1,
    lightopacity: 0,
    destroytime: 0,
    sound: "grass"
}
```

Мы не добавляем пшеницу в творческий инвентарь, так как обычно на такой случай реализовывают предмет для установки блока:

```js
IDRegistry.genItemID("oxidized_wheat");
Item.createItem("oxidized_wheat", "item.oxidized_wheat.name", {
    name: "oxidized_wheat", data: 0
}, { stack: 64 });

Item.registerUseFunction("oxidized_wheat", function(coords, item, block, playerUid) {
    if (block.id == VanillaTileID.farmland && coords.side == 1) {
        let region = BlockSource.getDefaultForActor(playerUid);
        let block = region.getBlock(coords.relative.x, coords.relative.y, coords.relative.z);
        if (World.canTileBeReplaced(block.id, block.data)) {
            region.setBlock(coords.relative.x, coords.relative.x, coords.relative.x, BlockID.oxidized_wheat, 0);
        }
    }
});
Block.registerNeighbourChangeFunction("oxidized_wheat", function(coords, block, changedCoords, region) {
    if (region.getBlockId(coords.x, coords.y - 1, coords.z) != VanillaTileID.farmland) {
        region.destroyBlock(coords.x, coords.y, coords.z);
    }
});
Block.registerDropFunction("oxidized_wheat", function(coords, blockID, blockData, level) {
    return [[ItemID.oxidized_wheat, Math.floor(Math.random() * 3 + 1), 0]];
});
```

Так, предмет пшеницы установит семена на грядку; если обновление соседнего блока приведет к отсутствии грядки под растением, будет вызвано событие его разрушения; а разрушение выбросит случайное количество предмета от 1 до 3. Почему пшеница размещает семена пшеницы?.. Вероятно, окислевшаяся пшеница может разложиться до семян. Реализуйте предмет семян самостоятельно если вам нужна внутреигровая форма растения.

Если вам понадобится создать росток для дерева, используйте случайный тик как для роста растений, так и для бахчевых культур; дополнительные свойства будут выглядеть так:

```js title="BLOCK_TYPE_SAPLING"
{
    base: VanillaBlockID.sapling,
    explosionres: 1,
    rendertype: 109,
    renderallfaces: true,
    lightopacity: 1,
    translucency: .5,
    destroytime: 0,
    sound: "grass"
}
```

Воспользуйтесь [библиотекой CropLib](TODO) для реализации роста растений, грядок и удобрений.

:::note Время для локализации

```js
Translation.addTranslation("tile.oxidized_rose.name", {
    en: "Oxidized Rose",
    ru: "Окислевшееся роза"
});
Translation.addTranslation("item.oxidized_wheat.name", {
    en: "Oxidized Wheat",
    ru: "Окислевшаяся пшеница"
});
Translation.addTranslation("tile.oxidized_wheat.name", {
    en: "Oxidized Crops",
    ru: "Окислевшиеся зерновые культуры"
});
```

:::

### Стены и забор

Наиболее примитивная реализация из всех видов форм; игра автоматически создает соединения с соседними блоками, что значительно упрощает весь процесс. Достаточно лишь дополнительных свойств:

```js
IDRegistry.genBlockID("oxidized_log_fence");
Block.createBlock("oxidized_log_fence", [{
    name: "tile.oxidized_log_fence.name",
    texture: [["oxidized_log_top", 0]]
}], BLOCK_TYPE_WOODEN_FENCE);

IDRegistry.genBlockID("oxidized_log_wall");
Block.createBlock("oxidized_log_wall", [{
    name: "tile.oxidized_log_wall.name",
    texture: [["oxidized_log_top", 0]]
}], BLOCK_TYPE_WOODEN_WALL);
```

Ну и не забудьте о дополнительных свойствах для обоих блоков в том же порядке:

```js title="BLOCK_TYPE_WOODEN_FENCE"
{
    rendertype: 11,
    renderlayer: EBlockRenderLayer.BLEND,
    lightopacity: 1,
    sound: "wood"
}
```

```js title="BLOCK_TYPE_WOODEN_WALL"
{
    rendertype: 32,
    renderlayer: EBlockRenderLayer.BLEND,
    lightopacity: 1,
    sound: "wood"
}
```

Разница между ними лишь в толщине стенок и видами соединений. Представьте себе забор и стены из булыжника.

:::note Время для локализации

```js
Translation.addTranslation("tile.oxidized_log_fence.name", {
    en: "Oxidized Log Fence",
    ru: "Забор из окислевшегося бревна"
});
Translation.addTranslation("tile.oxidized_log_wall.name", {
    en: "Oxidized Log Wall",
    ru: "Стена из окислевшегося бревна"
});
```

:::

### Полублоки

Полублок это половина от всего блока, он может быть расположен как над блоком, так и под ним. И даже, казалось бы, целый блок из двух полублоков, все еще остается полублоком (двойным полублоком); по крайней мере по логике игры. Начнем с создания блока:

```js
IDRegistry.genBlockID("oxidized_log_slab");
Block.createBlock("oxidized_log_slab", [{
    name: "tile.oxidized_log_slab.name",
    texture: [["oxidized_log_top", 0]],
    inCreative: true
}, {
    texture: [["oxidized_log_top", 0]]
}, {
    texture: [["oxidized_log_top", 0]]
}], BLOCK_TYPE_WOODEN_STUFF);
```

Обычно стандартные дополнительные свойства вполне подходят для полублоков, разве что, можем изменить звуки, испускаемые от перемещения по блоку:

```js title="BLOCK_TYPE_WOODEN_STUFF"
{
    sound: "wood"
}
```

Применим формы, каждая третья оставляет стандартную, первые две для нижнего и верхнего полублока соответственно:

```js
for (let i = 0; i < 3; i++) {
    if (i % 3 == 0) {
        Block.setShape(BlockID.oxidized_log_slab, 0, 0, 0, 1, 1/2, 1, i);
    } else if (i % 3 == 1) {
        Block.setShape(BlockID.oxidized_log_slab, 0, 1/2, 0, 1, 1, 1, i);
    }
}
```

Вы можете дублировать вариации одного блока необходимое количество раз, предварительно заменив `for (..; i < 3; ..)` на новое количество вариаций.

Ну и разделим дроп от получившегося блока:

```js
Block.registerDropFunction("oxidized_log_slab", function(coords, blockID, blockData, level) {
    if (blockData % 3 == 2) {
        return [[BlockID.oxidized_log_slab, 1, blockData % 3], [BlockID.oxidized_log_slab, 1, blockData % 3]];
    }
    return [[BlockID.oxidized_log_slab, 1, blockData % 3]];
});
Block.registerPlaceFunction("oxidized_log_slab", function(coords, item, block, playerUid, region) {
    if (block.id == item.id && block.data % 3 == item.data && Math.floor(block.data / 3) == (coords.side ^ 1)) {
        region.setBlock(coords.x, coords.y, coords.z, BlockID.oxidized_log_slab, item.data + 2);
        return;
    }
    let place = coords;
    if (!World.canTileBeReplaced(block.id, block.data)) {
        place = coords.relative;
        let tile = region.getBlock(place.x, place.y, place.z);
        if (!World.canTileBeReplaced(tile.id, tile.data)) {
            if (tile.id == item.id && tile.data % 3 == item.data) {
                region.setBlock(place.x, place.y, place.z, BlockID.oxidized_log_slab, item.data + 2);
            }
            return;
        }
    }
    region.setBlock(place.x, place.y, place.z, item.id, coords.vec.y - place.y < 0.5 ? item.data : item.data + 1);
});
Block.registerPopResourcesFunction("oxidized_log_slab", function(coords, block, region) {
    if (Math.random() < 0.25) {
        let drop = Block.getDropFunction(block.id)(coords, block.id, block.data, 127, {});
        for (let i = 0; i < drop.length; i++) {
            region.spawnDroppedItem(coords.x + .5, coords.y + .5, coords.z + .5, drop[i][0], drop[i][1], drop[i][2]);
        }
    }
});
```

На самом деле, вся логика здесь весьма проста. Мы лишь переопределяем дроп для того чтобы каждый раз выпадала вариация именно для нижней части блока, "ставим" вторую часть блока сверху, или чуть более громоздко, снизу, если вариация совпадает, а также со стандартным шансом заменяем результат от его подрыва.

Специально для упрощения этой реализации существует [библиотека Base Blocks](TODO), благодаря которой весь код выше будет сведен к паре функций:

```js
IDRegistry.genBlockID("oxidized_log_slab");
IDRegistry.genBlockID("oxidized_log_double_slab");
BaseBlocks.createSlab("oxidized_log_slab", [{
    name: "tile.oxidized_log_slab.name",
    texture: [["oxidized_log_top", 0]],
    inCreative: true
}], BLOCK_TYPE_OXIDIZED_SLAB, BlockID.oxidized_log_double_slab);
BaseBlocks.createDoubleSlab("oxidized_log_double_slab", [{
    texture: [["oxidized_log_top", 0]]
}], BLOCK_TYPE_OXIDIZED_SLAB, BlockID.oxidized_log_slab);
```

Разве что, здесь задействован еще один идентификатор для "цельного" блока.

:::note Время для локализации

```js
Translation.addTranslation("tile.oxidized_log_slab.name", {
    en: "Oxidized Log Slab",
    ru: "Плита из окислевшегося бревна"
});
```

:::

### Ступеньки

Весьма комплексный тип, требующий в первую очередь понимания того, что требуется для его реализации. Ступеньки могут быть повернуты в 4 стороны, перевернуты, и также быть повернуты в еще 4 стороны. Всего 8 сторон, каждую из которых необходимо определять перед установкой блока. Но ведь подождите, ступеньки еще и могут быть соединены с соседними блоками. А это уже рендеры с определением условий, задумайтесь, нужно ли копировать одно и то же каждый раз.

<details>
    <summary>Я уверен, что не хочу использовать библиотеки.</summary>
<div>

```js title="BlockModeler.js"
const getRotatedBoxVertexes = function(box, rotation) {
    switch (rotation) {
        case 0:
            return box;
        case 1:
            return [1 - box[3], box[1], 1 - box[5], 1 - box[0], box[4], 1 - box[2]]; // поворот на 180'
        case 2:
            return [box[2], box[1], 1 - box[3], box[5], box[4], 1 - box[0]]; // поворот на 270'
        case 3:
            return [1 - box[5], box[1], box[0], 1 - box[2], box[4], box[3]]; // поворот на 90'
    }
};

const setStairsRenderModel = function(id) {
    let boxes = [
        [0, 0, 0, 1, 0.5, 1],
        [0.5, 0.5, 0.5, 1, 1, 1],
        [0, 0.5, 0.5, 0.5, 1, 1],
        [0.5, 0.5, 0, 1, 1, 0.5],
        [0, 0.5, 0, 0.5, 1, 0.5]
    ];
    createStairsRenderModel(id, 0, boxes);
    let newBoxes = [];
    for (let i = 0, boxes_1 = boxes; i < boxes_1.length; i++) {
        let box = boxes_1[i];
        newBoxes.push([box[0], 1 - box[4], box[2], box[3], 1 - box[1], box[5]]);
    }
    createStairsRenderModel(id, 4, newBoxes);
};

const createStairsRenderModel = function(id, startData, boxes) {
    let modelConditionData = [
        { data: 3, posR: [-1, 0], posB: [0, 1] },
        { data: 2, posR: [1, 0], posB: [0, -1] },
        { data: 0, posR: [0, 1], posB: [1, 0] },
        { data: 1, posR: [0, -1], posB: [-1, 0] }
    ];
    for (let i = 0; i < 4; i++) {
        let conditionData = modelConditionData[i];
        let data = startData + i;
        let rBlockData = conditionData.data + startData;
        let groupR = ICRender.getGroup("stairs:" + rBlockData);
        let groupL = ICRender.getGroup("stairs:" + (rBlockData ^ 1));
        let currentGroup = ICRender.getGroup("stairs:" + data);
        currentGroup.add(id, data);
        let render = new ICRender.Model();
        let shape = new ICRender.CollisionShape();
        let box0 = boxes[0];
        render.addEntry(new BlockRenderer.Model(box0[0], box0[1], box0[2], box0[3], box0[4], box0[5], id, data)); // полублок основания
        shape.addEntry().addBox(box0[0], box0[1], box0[2], box0[3], box0[4], box0[5]);
        let posR = conditionData.posR; // блок справа
        let posB = conditionData.posB; // блок позади
        let posF = [posB[0] * (-1), posB[1] * (-1)]; // блок спереди
        let conditionRight = ICRender.BLOCK(posR[0], 0, posR[1], currentGroup, false);
        let conditionLeft = ICRender.BLOCK(posR[0] * (-1), 0, posR[1] * (-1), currentGroup, false);
        let conditionBackNotR = ICRender.BLOCK(posB[0], 0, posB[1], groupR, true);
        let conditionBackNotL = ICRender.BLOCK(posB[0], 0, posB[1], groupL, true);
        let box1 = getRotatedBoxVertexes(boxes[1], i);
        let model = new BlockRenderer.Model(box1[0], box1[1], box1[2], box1[3], box1[4], box1[5], id, data);
        let condition0 = ICRender.OR(conditionBackNotR, conditionLeft);
        render.addEntry(model).setCondition(condition0);
        shape.addEntry().addBox(box1[0], box1[1], box1[2], box1[3], box1[4], box1[5]).setCondition(condition0);
        let box2 = getRotatedBoxVertexes(boxes[2], i);
        let condition1 = ICRender.OR(conditionBackNotL, conditionRight);
        model = new BlockRenderer.Model(box2[0], box2[1], box2[2], box2[3], box2[4], box2[5], id, data);
        render.addEntry(model).setCondition(condition1);
        shape.addEntry().addBox(box2[0], box2[1], box2[2], box2[3], box2[4], box2[5]).setCondition(condition1);
        let box3 = getRotatedBoxVertexes(boxes[3], i);
        model = new BlockRenderer.Model(box3[0], box3[1], box3[2], box3[3], box3[4], box3[5], id, data);
        let condition2 = ICRender.AND(conditionBackNotR, conditionBackNotL, ICRender.NOT(conditionLeft), ICRender.BLOCK(posF[0], 0, posF[1], groupL, false));
        render.addEntry(model).setCondition(condition2);
        shape.addEntry().addBox(box3[0], box3[1], box3[2], box3[3], box3[4], box3[5]).setCondition(condition2);
        let box4 = getRotatedBoxVertexes(boxes[4], i);
        model = new BlockRenderer.Model(box4[0], box4[1], box4[2], box4[3], box4[4], box4[5], id, data);
        let condition3 = ICRender.AND(conditionBackNotR, conditionBackNotL, ICRender.NOT(conditionRight), ICRender.BLOCK(posF[0], 0, posF[1], groupR, false));
        render.addEntry(model).setCondition(condition3);
        shape.addEntry().addBox(box4[0], box4[1], box4[2], box4[3], box4[4], box4[5]).setCondition(condition3);
        BlockRenderer.setStaticICRender(id, data, render);
        BlockRenderer.setCustomCollisionShape(id, data, shape);
        BlockRenderer.setCustomRaycastShape(id, data, shape);
    }
};
```

```js title="BlockRegistry.js"
const EntityGetPitch = ModAPI.requireGlobal("Entity.getPitch");
const EntityGetYaw = ModAPI.requireGlobal("Entity.getYaw");

const getPlacePosition = function(coords, block, region) {
    if (World.canTileBeReplaced(block.id, block.data)) {
        return coords;
    }
    let place = coords.relative;
    block = region.getBlock(place.x, place.y, place.z);
    if (World.canTileBeReplaced(block.id, block.data)) {
        return place;
    }
    return null;
};

const getBlockRotation = function(playerUid, hasVertical) {
    let pitch = EntityGetPitch(playerUid);
    if (hasVertical) {
        if (pitch < -45) {
            return 0;
        }
        if (pitch > 45) {
            return 1;
        }
    }
    let rotation = Math.floor((EntityGetYaw(playerUid) - 45) % 360 / 90);
    if (rotation < 0) {
        rotation += 4;
    }
    return [5, 3, 4, 2][rotation];
};
```

```js
IDRegistry.genBlockID("oxidized_log_stairs");
Block.createBlock("oxidized_log_stairs", [{
    name: "tile.oxidized_log_stairs.name",
    texture: [["oxidized_log_top", 0]],
    inCreative: true
}]);

setStairsRenderModel(BlockID.oxidized_log_stairs);
(function() {
    let model = BlockRenderer.createModel();
    model.addBox(0, 0, 0, 1, 0.5, 1, BlockID.oxidized_log_stairs, 0);
    model.addBox(0, 0.5, 0, 1, 1, 0.5, BlockID.oxidized_log_stairs, 0);
    ItemModel.getFor(BlockID.oxidized_log_stairs, 0).setHandModel(model);
    ItemModel.getFor(BlockID.oxidized_log_stairs, 0).setUiModel(model);
})();

Block.registerPlaceFunction(BlockID.oxidized_log_stairs, function(coords, item, block, playerUid, region) {
    let place = getPlacePosition(coords, block, region);
    if (!place) {
        return;
    }
    let data = getBlockRotation(playerUid) - 2;
    if (coords.side == 0 || coords.side >= 2 && coords.vec.y - coords.y >= 0.5) {
        data += 4;
    }
    region.setBlock(place.x, place.y, place.z, item.id, data);
    return place;   
});
```

</div>
</details>

Более простым выходом из ситуации будет использование [библиотеки Block Engine](/api/BlockEngine), она предоставляет прототипы для создания блоков, а также функции, значительно упрощающие всю реализацию в целом. В таком случае, весь код из спойлера сводится лишь к:

```js
BlockRegistry.createStairs("oxidized_log_stairs", [{
    name: "tile.oxidized_log_stairs.name",
    texture: [["oxidized_log_top", 0]],
    inCreative: true
}]);
```

Прекрасным вариантом было бы использование внутреигрового типа, однако он не предоставляет возможности создавать повороты, но на всякий случай, тоже оставим его здесь:

```js title="BLOCK_TYPE_WOODEN_STAIRS"
{
    rendertype: 10,
    renderlayer: EBlockRenderLayer.BLEND,
    lightopacity: 1,
    sound: "wood"
}
```

:::note Время для локализации

```js
Translation.addTranslation("tile.oxidized_log_stairs.name", {
    en: "Oxidized Log Stairs",
    ru: "Ступени из окислевшегося бревна"
});
```

:::

## Реализация собственных форм

Сложна не более, чем создание полублоков. Как уже было сказано, формы блоков представляют собой параллелепипед или же типичную коробку в трехмерном мире. Для этого задействуется функция [Block.setShape](/api/namespace/Block#setShape):

```js
Block.setShape(<числовой идентификатор>, <x1>, <y1>, <z1>, <x2>, <y2>, <z2>, <вариация>);
```

В случае вариации можно задействовать `-1` для установки формы на каждую из них. К примеру, форма забора будет выглядеть весьма просто:

```js
Block.setShape(BlockID.oxidized_log_fence, 6/16, 0, 6/16, 10/16, 1, 10/16, -1);
```

Тогда, почему же мы не воспользовались ей [ранее](#стены-и-забор)? Здесь лишь создана форма, она по умолчанию не умеет создавать соединения и остается простой коробкой. Мы еще подробно рассмотрим рендеры, но для этой статьи будет достаточно этого.
