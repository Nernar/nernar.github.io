# In-game Shapes

Apart from standard "full-block" blocks, shapes can be very different. The game provides various variations of base models, such as stairs or slabs. Usually their implementations are used together with standard, full-block blocks. Here are presented most existing shapes, as well as various atlas texture blending types.

## Let's Define the Format

First of all, the block shape can be changed in several ways. These are additional properties by adding an in-game type, any parallelepiped shape (in the form of a box; or a shape), renders using boxes or creating layouts between vertices, as well as native shape change. We will superficially consider everything except the last one.

To register a block with such a shape, we will use additional properties:

```js
const BLOCK_TYPE_SOME_NAME = Block.createSpecialType({
    rendertype: 0 // just a whole block, base value
    // some properties that will be changed: if only an object is
    // provided in the example, it must be highlighted right here
});
```

And besides this, some shapes will need to have functionality added.

### Leaves

Not considering various integrations like Better Foliage, leaves are a full-block block only with changed additional properties. The general definition boils down to just a couple of functions:

```js
IDRegistry.genBlockID("oxidized_leaves");
Block.createBlock("oxidized_leaves", [{
    name: "tile.oxidized_leaves.name",
    texture: [["oxidized_leaves", 0]],
    inCreative: true
}], BLOCK_TYPE_LEAVES);
```

And of course, before that define `BLOCK_TYPE_LEAVES` by format, and preferably, in a separate place for all blocks:

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

:::note Time for localization

```js
Translation.addTranslation("tile.oxidized_leaves.name", {
    en: "Oxidized Leaves",
    ru: "Окислевшаяся листва"
});
```

:::

### Glass and Panes

To implement glass, it is enough to add transparency to textures and change their light absorption level. In addition to the glass block itself, you probably want to implement panes, separately, or together with this glass.

Let's define another oxidized block, but now glass and panes from it:

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

Additional properties for transparent glass will look very simple:

```js title="BLOCK_TYPE_GLASS"
{
    // TODO: this is an in-game glass shape, but I'm not sure
    // if it should be used; there is only one real example
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

And even if the author of this article is against using "toad features", connections between glasses look really good. Try the Connected Texture library for such an implementation:

```js
ConnectedTexture.setModelForGlass(BlockID.oxidized_glass, -1, "oxidized_glass");
```

:::note Time for localization

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

### Plants

Can be divided into three types: crops, saplings and various types of grass with flowers. The former represent horizontal intersections of several texture layers, while the rest consist of a pair of textures, located obliquely and intersecting in the center. The difference between the last two is the absence of random placement inside the block for the first one.

Let's start by creating a rose-like plant, it is quite simple:

```js
IDRegistry.genBlockID("oxidized_rose");
Block.createBlock("oxidized_rose", [{
    name: "tile.oxidized_rose.name",
    texture: [["oxidized_rose", 0]],
    inCreative: true
}], BLOCK_TYPE_PLANT);

BlockRenderer.setCustomCollisionShape(BlockID.oxidized_wheat, -1, new ICRender.CollisionShape());
```

Define additional properties before creating the block:

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

You can also implement block destruction if the block under the plant is destroyed:

```js
Callback.addCallback("DestroyBlock", function(coords, block, playerUid) {
    let region = BlockSource.getDefaultForActor(playerUid);
    if (region.getBlockId(coords.x, coords.y + 1, coords.z) == BlockID.oxidized_rose) {
        region.destroyBlock(coords.x, coords.y + 1, coords.z);
    }
});
```

In general, this is quite enough for decorative plants. But when it comes to seeds and other crops, their creation may require a little more time.

Let's consider creating a simple melon, adding events and functionality:

```js
IDRegistry.genBlockID("oxidized_wheat");
Block.createBlock("oxidized_wheat", [{
    name: "tile.oxidized_wheat.name",
    texture: [["oxidized_wheat", 0]]
}], BLOCK_TYPE_CROP);

BlockRenderer.setCustomCollisionShape(BlockID.oxidized_wheat, -1, new ICRender.CollisionShape());
```

Do not forget to declare additional properties beforehand, the rules are almost the same as for other plants:

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

We do not add wheat to the creative inventory, as usually an item is implemented for placing the block in such a case:

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

So, the wheat item will place seeds on the farmland; if updating the neighboring block leads to the absence of farmland under the plant, its destruction event will be triggered; and destruction will drop a random amount of item from 1 to 3. Why does wheat place wheat seeds?.. Probably, oxidized wheat can decompose to seeds. Implement the seed item yourself if you need an in-game form of the plant.

If you need to create a sapling for a tree, use a random tick as for plant growth, and for melon crops; additional properties will look like this:

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

Use the CropLib library to implement plant growth, farmlands and fertilizers.

:::note Time for localization

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

### Walls and Fences

The most primitive implementation of all shape types; the game automatically creates connections with neighboring blocks, which significantly simplifies the whole process. Only additional properties are needed:

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

And do not forget about additional properties for both blocks in the same order:

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

The difference between them is only in wall thickness and connection types. Imagine a cobblestone fence and walls.

:::note Time for localization

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

### Slabs

A slab is half of the entire block, it can be located both above the block and below it. And even seemingly a whole block of two slabs still remains a slab (double slab); at least according to the game logic. Let's start by creating a block:

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

Usually standard additional properties are quite suitable for slabs, except perhaps we can change the sounds emitted from moving on the block:

```js title="BLOCK_TYPE_WOODEN_STUFF"
{
    sound: "wood"
}
```

Let's apply shapes, every third one leaves standard, the first two for the bottom and top slab respectively:

```js
for (let i = 0; i < 3; i++) {
    if (i % 3 == 0) {
        Block.setShape(BlockID.oxidized_log_slab, 0, 0, 0, 1, 1/2, 1, i);
    } else if (i % 3 == 1) {
        Block.setShape(BlockID.oxidized_log_slab, 0, 1/2, 0, 1, 1, 1, i);
    }
}
```

You can duplicate variations of one block the required number of times, after replacing `for (..; i < 3; ..)` with the new number of variations.

And separate the drop from the resulting block:

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

Actually, all logic here is quite simple. We only redefine the drop so that the variation for the lower part of the block drops every time, "put" the second part of the block on top, or slightly more cumbersome, from below, if the variation matches, and also replace the result from its explosion with a standard chance.

Especially to simplify this implementation, there is the Base Blocks library, thanks to which all the code above will be reduced to a couple of functions:

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

Unless, another identifier for the "whole" block is involved here.

:::note Time for localization

```js
Translation.addTranslation("tile.oxidized_log_slab.name", {
    en: "Oxidized Log Slab",
    ru: "Плита из окислевшегося бревна"
});
```

:::

### Stairs

A very complex type, requiring first of all an understanding of what is required for its implementation. Stairs can be rotated in 4 directions, inverted, and also rotated in 4 more directions. A total of 8 sides, each of which must be determined before placing the block. But wait, stairs can also be connected to neighboring blocks. And these are already renders with condition determination, think about whether it is necessary to copy the same thing every time.

<details>
    <summary>I am sure that I do not want to use libraries.</summary>
<div>

```js title="BlockModeler.js"
const getRotatedBoxVertexes = function(box, rotation) {
    switch (rotation) {
        case 0:
            return box;
        case 1:
            return [1 - box[3], box[1], 1 - box[5], 1 - box[0], box[4], 1 - box[2]]; // rotation by 180'
        case 2:
            return [box[2], box[1], 1 - box[3], box[5], box[4], 1 - box[0]]; // rotation by 270'
        case 3:
            return [1 - box[5], box[1], box[0], 1 - box[2], box[4], box[3]]; // rotation by 90'
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
        render.addEntry(new BlockRenderer.Model(box0[0], box0[1], box0[2], box0[3], box0[4], box0[5], id, data)); // base slab
        shape.addEntry().addBox(box0[0], box0[1], box0[2], box0[3], box0[4], box0[5]);
        let posR = conditionData.posR; // block on the right
        let posB = conditionData.posB; // block behind
        let posF = [posB[0] * (-1), posB[1] * (-1)]; // block in front
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

A simpler solution would be to use the Block Engine library, it provides prototypes for creating blocks, as well as functions that significantly simplify the entire implementation. In this case, all the code from the spoiler is reduced to just:

```js
BlockRegistry.createStairs("oxidized_log_stairs", [{
    name: "tile.oxidized_log_stairs.name",
    texture: [["oxidized_log_top", 0]],
    inCreative: true
}]);
```

A great option would be to use the in-game type, however it does not provide the ability to create rotations, but just in case, let's leave it here too:

```js title="BLOCK_TYPE_WOODEN_STAIRS"
{
    rendertype: 10,
    renderlayer: EBlockRenderLayer.BLEND,
    lightopacity: 1,
    sound: "wood"
}
```

:::note Time for localization

```js
Translation.addTranslation("tile.oxidized_log_stairs.name", {
    en: "Oxidized Log Stairs",
    ru: "Ступени из окислевшегося бревна"
});
```

:::

## Implementation of Custom Shapes

No more difficult than creating slabs. As already mentioned, block shapes represent a parallelepiped or a typical box in a 3D world. For this, the function Block.setShape is involved:

```js
Block.setShape(<numeric identifier>, <x1>, <y1>, <z1>, <x2>, <y2>, <z2>, <variation>);
```

In the case of variation, `-1` can be used to set the shape for each of them. For example, the fence shape will look quite simple:

```js
Block.setShape(BlockID.oxidized_log_fence, 6/16, 0, 6/16, 10/16, 1, 10/16, -1);
```

Then, why didn't we use it earlier? Here only the shape is created, it does not know how to create connections by default and remains a simple box. We will examine renders in detail later, but for this article this will be enough.
