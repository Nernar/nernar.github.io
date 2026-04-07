# First Block

The entire world of Minecraft consists of blocks. The player and creatures move on them, mining them allows the player to obtain resources and create new blocks to create other blocks, and some can be opened or interacted with in some way. Let's start by looking at textures, and then create blocks with different variations.

## How Many Sides Does a Cube Have

That's how many textures are rendered in 3D space. Before creating textures or using existing ones, let's look at the block mapping:

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

And along with it, the textures, for example, of a crafting table:

```js
[
    ["crafting_table_bottom", 0], // bottom
    ["crafting_table_top", 0], // top
    ["crafting_table_front", 0], // back
    ["crafting_table_front", 0], // front
    ["crafting_table_side", 0], // left
    ["crafting_table_side", 0] // right
]
```

Meta follows each texture. Each of the 6 sides can use its own texture, but in most cases, one will be enough for us. As an example, all sides of andesite:

```js
[
    ["stone", 5], ["stone", 5], // bottom and top
    ["stone", 5], ["stone", 5], // back and front
    ["stone", 5], ["stone", 5] // left and right
]
```

However, we do not need to repeat the same texture every time to describe the mapping for each side. The last texture will be duplicated the required number of times, accordingly we can shorten both lists of textures above:

<Tabs>
<TabItem value="andesite" label="Andesite">

```js
[
    ["stone", 5]
]
```

</TabItem>
<TabItem value="crafting_table" label="Crafting Table">

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

:::tip Other Implementations

If we represent the list of textures in cardinal directions, it is north (back), south (front), west (left) and east (right) respectively. This is how textures on in-game blocks are described.

:::

## Let's Register a Block

And by creating a block, we also create an item associated with it. Accordingly, blocks have many item properties, such as recipes, and some events. The general syntax for creating blocks looks like this:

```js
Block.createBlock("some_identifier", [
    // variations of the same block
], {
    // additional properties, such as transparency or glowing
});
```

Let's immediately reserve an identifier, as we did with the item, and look at the list of properties available to us:

```js
IDRegistry.genBlockID("oxidized_log");
Block.createBlock("oxidized_log", [{
    name: "Oxidized Log",
    texture: [
        ["oxidized_log_top", 0],
        ["oxidized_log_top", 0],
        ["oxidized_log_side", 0]
    ],
    inCreative: true
}], "opaque");
```

We create a block with the identifier `oxidized_log`, one variation, and standard opaque properties. The variation itself describes all available properties, where specifying `texture` is mandatory, others can be omitted for technical blocks.

<details>
    <summary>Standards for creating localization</summary>
<div>

Block translations are produced in the format `tile.<identifier>[.<data>].name`, just like in the case of items. And if we did not consider the state when creating the item, then in the example above it is involved:

```js
Translation.addTranslation("tile.log.oxidized.name", {
    en: "Oxidized Log",
    ru: "Окислевшееся бревно"
});
```

Usually the state describes additional properties that are inherent in this category of items or blocks. For example, in the case of logs it is `tile.log.oak.name` and `tile.log.big_oak.name`. There are also more complex options, but for the main part of blocks states will not be required.

</div>
</details>

Let's add new textures, they must be located in the __terrain-atlas__ resource folder. Just like in the case of the item, we must specify the meta, and the remaining file name without the path will be used as the texture name.

<div className="resource-atlas-align-box">

!log_oxidized_top_0.png
!log_oxidized_side_0.png
!log_oxidized_side_1.png

</div>

For example, *assets/resources/terrain-atlas/log/log_oxidized_top_0.png* can be used only in the variant `["log_oxidized_top", 0]` and no other will work.

### Using Variations

Provided primarily to reduce identifier costs. They are not infinite, so if you implement a large number of blocks with similar properties, an excellent option would be to place new blocks in variations of an already created one.

Let's take the log example as a basis, supplementing it with variations:

```js
IDRegistry.genBlockID("oxidized_log");
Block.createBlock("oxidized_log", [{
    name: "Oxidized Log",
    texture: [
        ["oxidized_log_top", 0],
        ["oxidized_log_top", 0],
        ["oxidized_log_side", 0]
    ],
    inCreative: true
}, {
    name: "Oxidized Log",
    texture: [
        ["oxidized_log_side", 1],
        ["oxidized_log_side", 1],
        ["oxidized_log_top", 0],
        ["oxidized_log_top", 0],
        ["oxidized_log_side", 1]
    ],
    inCreative: true
}, {
    name: "Oxidized Log",
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

```mdx-code-block
import RotatableMinecraftBlock from "@site/src/components/RotatableMinecraftBlock"

<RotatableMinecraftBlock bottomTexture='log_oxidized_top_0' northTexture='log_oxidized_side_0' />
<RotatableMinecraftBlock bottomTexture='log_oxidized_side_1' westTexture='log_oxidized_top_0' />
<RotatableMinecraftBlock bottomTexture='log_oxidized_side_1' northTexture='log_oxidized_top_0' westTexture='log_oxidized_side_1' />
```

Now, in addition to the main, vertical variation of the log, there are also two horizontal ones.

We will register automatic rotation in the following articles so that logs in the game can be placed sideways.

### Additional Properties

Allow you to set things like transparency, luminance, and other block display parameters in the world. Take only those that you need:

```js
IDRegistry.genBlockID("oxidized_log");
Block.createBlock("oxidized_log", [ /* ... */ ], {
    // based on the block with this numeric identifier,
    // some of its properties will be acquired
    base: 0,
    // material determines standard breaking time, its sound
    // and other characteristics of what the block is made of
    material: 3,
    // block sounds during breaking or walking on it:
    // normal, gravel, wood, grass, metal, stone, cloth,
    // glass, sand, snow, ladder, anvil, slime, silent,
    // itemframe, turtle_egg, bamboo, bamboo_sapling,
    // lantern, scaffolding or sweet_berry_bush
    sound: "default",
    // if true, the block cannot be transparent; opaque
    // blocks work much more stably in large quantities
    solid: false,
    // if true, liquids like water can be poured
    // directly into the block; otherwise the block cannot be
    // filled with any liquid
    can_contain_liquid: false,
    // block can be placed on top of another block, this
    // option allows placing blocks in layers and will be considered
    // in one of the chapters on creating structures
    can_be_extra_block: false,
    // back sides of the block will not be rendered, relevant
    // for transparent blocks like leaves
    renderallfaces: false,
    // one of the standard block shapes, by default it is
    // a full block, and can be, for example, a torch (2)
    rendertype: 0,
    // block blending mode for rendering in the world
    renderlayer: EBlockRenderLayer.OPAQUE,
    // emitted light level, value from 0 to 15
    lightlevel: 0,
    // light absorption level, where 15 is fully
    // absorb, usually for opaque blocks;
    // remaining light from absorption will pass through the block
    lightopacity: 0,
    // color for display on the map; please use
    // this property for integration with the minimap
    mapcolor: 0,
    // blast resistance, defined in blocks
    explosionres: 3.0,
    // friction level when walking on the block, value closer
    // to 0 makes movement difficult, increase accelerates
    friction: 0.6,
    // block destruction time in seconds, or -1 if
    // the block cannot be destroyed like bedrock
    destroytime: 1.0,
    // block translucency affecting the display
    // of shadows on the block, 0 means shadows of opaque blocks
    translucency: 1.0,
    // source for obtaining block color by biome:
    // grass, leaves or water; only for maps
    color_source: "none"
});
```

We will also need to add opaque block properties, which are applied when using `opaque`:

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

If you plan to use additional properties multiple times or implement integrations, they can be registered in the code once:

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

Now you can use them by the key `radiactive_log`:

```js
IDRegistry.genBlockID("oxidized_log");
Block.createBlock("oxidized_log", [ /* ... */ ], "radiactive_log");
```

Or, additional properties can be registered by a random key, which primarily will be available via some constant:

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

Consider SpecialType for full and up-to-date information regarding the availability of certain properties, articles are updated as needed.

## There Are Never Too Many Events

Let's register a couple for example. We can both monitor the state of the block and implement interactions with it. We will use an already familiar and a new event.

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

First of all, BlockSource is used to obtain data about the surrounding world and modify it. We will touch upon this class repeatedly. Making sure that we touched exactly the block of new logs, the block source for the player who triggered the event will be obtained; and as an example, the block will be rotated to the next side until it cycles through all variations.

Imagine that you have a need to create something like a lucky block. Let's use the __DestroyBlock__ event to detect block destruction:

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

And to summon the chicken, we also needed to use the block source. These events occur on the server side, not the client side, so its need shouldn't be too difficult to explain.
