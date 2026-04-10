# First Block

The whole world of Minecraft consists of blocks. The player and entities move on them, mining them allows the player to extract resources and create new blocks to craft even more blocks, and some can be opened or interacted with in some way. Let's start by looking at textures, and then, we'll create blocks with different variations.

## How many sides does a cube have

Exactly as many textures as are rendered in three-dimensional space. Before creating textures or using existing ones, let's look at the unwrapping of a block:

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

Each texture is followed by a meta. Each of the 6 sides can use its own texture, but in most cases, one will be enough. As an example, all sides of andesite:

```js
[
    ["stone", 5], ["stone", 5], // bottom and top
    ["stone", 5], ["stone", 5], // back and front
    ["stone", 5], ["stone", 5] // left and right
]
```

However, we don't need to repeat the same texture every time to describe the unwrapping for each side. The last texture will be duplicated the required number of times, so we can shorten both texture lists above:

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

:::tip Other implementations

If you represent the texture list in cardinal directions, it corresponds to north (back), south (front), west (left), and east (right) respectively. This is how textures on in-game blocks are described.

:::

## Let's register a block

And when creating a block, we also create an item associated with it. Accordingly, blocks have many properties of items, such as recipes, and some events. The general syntax for creating blocks looks like this:

```js
Block.createBlock("some_identifier", [
    // variations of the same block
], {
    // additional properties, such as transparency or glowing
});
```

Let's immediately reserve an identifier, as we [did with the item](../items/first-item#lets-register-an-item), and look at the list of available properties:

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

We create a block with the identifier `oxidized_log`, one variation, and standard opaque properties. The variation itself describes all available properties, where only `texture` is required to be specified, the rest can be omitted for technical blocks.

<details>
    <summary>Standards for creating localization</summary>
<div>

Translations of blocks are made in the format `tile.<identifier>[.<state>].name`, just as in the case of items. And if we didn't consider the state when creating the item, it is involved in the example above:

```js
Translation.addTranslation("tile.log.oxidized.name", {
    en: "Oxidized Log",
    ru: "Окислевшееся бревно"
});
```

Usually, the state describes additional properties that are inherent to this category of items or blocks. For example, in the case of logs, it's `tile.log.oak.name` and `tile.log.big_oak.name`. There are also more complex options, but for the main part of the blocks, states will not be needed.

</div>
</details>

Let's add new textures, they should be located in the __terrain-atlas__ folder of resources. As in the case of an item, we must specify the meta, and the remaining file name without the path will be used as the texture name.

<div className="resource-atlas-align-box">

![log_oxidized_top_0.png](/images/blocks/log_oxidized_top_0.png)
![log_oxidized_side_0.png](/images/blocks/log_oxidized_side_0.png)
![log_oxidized_side_1.png](/images/blocks/log_oxidized_side_1.png)

</div>

For example, *assets/resources/terrain-atlas/log/log_oxidized_top_0.png* can only be used in the `["log_oxidized_top", 0]` variant and no other will work.

### Using variations

Provided primarily to reduce the cost of identifiers. They are not infinite, so if you are implementing a large number of blocks with similar properties, an excellent option would be to place new blocks in variations of an already created one.

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

Now in addition to the main, vertical variation of the log, there are also two horizontal ones.

We will register automatic rotation in the following articles so that logs in the game can be placed on their side.

### Additional properties

They allow you to set things like transparency, glow, and other parameters for rendering a block in the world. Take only those that you specifically need:

```js
IDRegistry.genBlockID("oxidized_log");
Block.createBlock("oxidized_log", [ /* ... */ ], {
    // some of its properties will be acquired
    // based on the block with this numeric identifier
    base: 0,
    // the material determines the standard breaking time, its sound
    // and other characteristics of what the block is made of
    material: 3,
    // block sounds when breaking or walking on it:
    // normal, gravel, wood, grass, metal, stone, cloth,
    // glass, sand, snow, ladder, anvil, slime, silent,
    // itemframe, turtle_egg, bamboo, bamboo_sapling,
    // lantern, scaffolding or sweet_berry_bush
    sound: "default",
    // if true, the block cannot be transparent; opaque
    // blocks work much more stably in large quantities
    solid: false,
    // if true, liquids like water can be poured
    // straight into the block; otherwise the block cannot
    // be filled with any liquid
    can_contain_liquid: false,
    // the block can be placed on top of another block, this
    // option allows placing blocks in layers and will be considered
    // in one of the structure creation chapters
    can_be_extra_block: false,
    // the back sides of the block will not be rendered, relevant
    // for transparent blocks like leaves
    renderallfaces: false,
    // one of the standard block shapes, by default it is
    // a full block, but can be, for example, a torch (2)
    rendertype: 0,
    // blending mode of the block for rendering in the world
    renderlayer: EBlockRenderLayer.OPAQUE,
    // level of emitted light, value from 0 to 15
    lightlevel: 0,
    // light opacity level, where 15 is completely
    // opaque, usually for opaque blocks;
    // light remaining from opacity will pass through the block
    lightopacity: 0,
    // color to display on the map; please use
    // this property for minimap integration
    mapcolor: 0,
    // blast resistance, defined in blocks
    explosionres: 3.0,
    // friction level when walking on the block, a value closer
    // to 0 will make movement difficult, an increase will speed it up
    friction: 0.6,
    // block breaking time in seconds, or -1 if
    // the block cannot be broken like bedrock
    destroytime: 1.0,
    // translucency of the block, affecting the display of
    // shadows on the block, 0 means shadows of opaque blocks
    translucency: 1.0,
    // source for getting the block color by biome:
    // grass, leaves or water; only for maps
    color_source: "none"
});
```

We will also need to add the properties of an opaque block, which are applied when using `opaque`:

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

Now they can be used by the key `radiactive_log`:

```js
IDRegistry.genBlockID("oxidized_log");
Block.createBlock("oxidized_log", [ /* ... */ ], "radiactive_log");
```

Or, additional properties can be registered by a random key, which will primarily be available by some constant:

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

Check out [SpecialType](/api/namespace/Block#SpecialType) for complete and up-to-date information regarding the availability of specific properties, the articles are updated as needed.

## There are never too many events

Let's register a couple for an example. We can either monitor the state of the block, or implement interactions with it. We'll use an already familiar and a new event.

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

First of all, [BlockSource](/api/class/BlockSource) is used to get data about the surrounding world and to modify it. We will touch upon this class many times more. Ensuring that we touched exactly the block of new logs, the block source for the player who triggered the event will be obtained; and as an example, the block will be rotated to the next side until it goes through all the variations.

Imagine that you have a need to create something like a lucky block. Let's use the __DestroyBlock__ event to detect the destruction of the block:

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

And to spawn a chicken, we also needed to use a block source. These events occur on the server side, not the client side, so its need shouldn't be too hard to explain.
