# Block Models

If one tries to briefly describe the purpose of ICRender, it turns out that shapes or block models fit it perfectly. This technology will allow linking newly created models to a specific block, placing the desired model at coordinates, dynamically updating renders, physical and visual block shapes, and perhaps even replacing models of ordinary items. Let's start by looking at BlockRenderer models and end with several shapes for various purposes.

:::note How simple shapes differ from models

As mentioned in previous articles, the game provides a certain number of built-in shapes and allows defining a custom shape using a parallelepiped. Models, unlike simple shapes, consist of multiple boxes (parallelepipeds), which are later converted into vertices, polygons, and edges. In fact, the shape can be anything, and the only limitation remains your imagination.

:::

## Model — The Basis of Render

Let's start with what a so-called full block represents. Usually it is a 16x16 texture and a 1x1x1 size box. Usually all shapes are subdivided into as many segments as there are pixels involved in the texture. In our case, the block occupies 16/16 of the pixels available to it on each side of the 3D space. A half here will be 8/16, a quarter 4/16, and so on. Imagine blocks precisely in pixels; you can start with a basic sketch of the model even on a piece of graph paper.

A simple full-block model is created something like this:

```js
const STONE_BLOCK_MODEL = BlockRenderer.createTexturedBlock(
    [["stone", 0]]
);
```

This model will also be equivalent to creating a box for the entire block:

```js
const STONE_BLOCK_MODEL = BlockRenderer.createTexturedBox(
    0/16, 0/16, 0/16, 16/16, 16/16, 16/16,
    [["stone", 0]]
);
```

But we are trying to create a model, aren't we? Why should we use a block already created by the game itself? For this, simple shapes would suffice. Well, usually every model is empty by default:

```js
const STONE_BLOCK_MODEL = BlockRenderer.createModel();
STONE_BLOCK_MODEL.addBox(0/16, 0/16, 0/16, 16/16, 16/16, 16/16, "stone", 0);
```

And then you can perform various manipulations with it before binding it to anything.

:::info Do I need to model everything myself?

In fact, you can sketch a model in any voxel editor, like Goxel, or a 3D one, like Blender. Some prefer to use Blockbench, although it is much more tailored for entity rendering.

Especially for this purpose, the project authors implemented in-game modeling tools; they allow you to figure out the intricacies even faster without leaving the gameplay; not only to model, but also to convert models of different formats, installing addons to expand functionality. Try modding tools yourself and share your impressions to make the project even better!

:::

## Binding Model to Render

A render consists of models; there can be any number of models themselves. The render is needed to connect them together and describe display conditions. Yes, there are external factors due to which shapes can be changed, and yes, we will consider them in the next article. But first, let's apply the newly created shape to a block:

```js
const STONE_BLOCK_MODEL = BlockRenderer.createModel();
STONE_BLOCK_MODEL.addBox(0/16, 0/16, 0/16, 16/16, 16/16, 16/16, "stone", 0);
const STONE_BLOCK_RENDER = new ICRender.Model(STONE_BLOCK_MODEL);
BlockRenderer.setStaticICRender(1, 0, STONE_BLOCK_RENDER);
```

The last function actually means: set the stone render forever for identifier 1 with meta 0 (stone block, excluding diorite and other types of this block). Unconditional render will be set for all stone blocks in the world. The `new ICRender.Model(model)` constructor can be replaced with the equivalent `new ICRender.Model()` with the addition of `render.addEntry(model)`.

But suppose we created a block and want to set a render on it. The implementation will practically not differ:

```js
const WOODEN_TANK_MODEL = BlockRenderer.createTexturedBlock(
    [["wood", 1], ["glass", 0]]
);
const WOODEN_TANK_RENDER = new ICRender.Model(WOODEN_TANK_MODEL);
BlockRenderer.setStaticICRender(BlockID.wooden_tank, -1, WOODEN_TANK_RENDER);
```

Where `-1` means setting the render for every block variation. And as you can see, block layouts are no different from their models. Accordingly, the liquid tank will receive a log texture on the bottom and glass on all other sides. Read How Many Sides Does a Cube Have for details.

## Physical and Raycast Renders

They practically do not differ from visual ones, except that they do not have textures and have their own model constructors. Physical models represent collision, a support for creatures' contact with the block surface. The selection box appears when the player hovers the cursor over the block or holds it on the touch screen. If the purpose of these renders still remains unclear, we will analyze them in more detail now.

```js
const WOODEN_TANK_COLLISION = new ICRender.CollisionShape();
const WOODEN_TANK_COLLISION_ENTRY = WOODEN_TANK_COLLISION.addEntry();
WOODEN_TANK_COLLISION_ENTRY.addBox(2/16, 0/16, 2/16, 14/16, 16/16, 14/16);
```

This is how a simple standard shape will look. The physical shape creates a description for both itself and the selection box. Undoubtedly, we can create exactly the same render for the selection box, but then they will be identical. Instead, let's set the resulting render to the block:

```js
BlockRenderer.setCustomCollisionShape(BlockID.wooden_tank, -1, WOODEN_TANK_COLLISION);
BlockRenderer.setCustomRaycastShape(BlockID.wooden_tank, -1, WOODEN_TANK_COLLISION);
```

Or with a function equivalent to these two:

```js
BlockRenderer.setCustomCollisionAndRaycastShape(BlockID.wooden_tank, -1, WOODEN_TANK_COLLISION);
```

Usually physical and selection models are greatly simplified compared to visual ones; and it is understandable, in most cases complex models down to every pixel are simply not required and allow saving computational resources.

## Mapping and Updates

Any block render can be drawn at coordinates if the block at these coordinates allows changing its model. But usually render updates (mapping) are required only for new blocks, so in most cases this rule will not create any problems.

To begin with, let's enable mapping for the necessary block, for example, for `wooden_tank`:

```js
BlockRenderer.enableCoordMapping(BlockID.wooden_tank, -1, WOODEN_TANK_RENDER);
```

The last argument of enabling which requires a standard model, it will be set for each variation. Note that after enabling mapping, so-called static renders can no longer be used for the involved variations. To disable, use the method `BlockRenderer.disableCustomRender(id, data)`.

But then again, why do we need only the standard model? Let's add a few more to denote the fullness of the liquid tank:

```js
const WOODEN_TANK_RENDERERS = new Array(7).map(function(nope, index) {
    const model = BlockRenderer.createModel();
    model.addBox(1/16, 1/16, 1/16, 15/16, 1/16 + (index + 1) / 8, 15/16, "flowing_lava", 0);
    const render = new ICRender.Model(WOODEN_TANK_MODEL);
    render.addEntry(model);
    return render;
});
```

We took the model already created earlier as a basis and added a "new layer" to it with a model from one lava box. Now 7 variations can be used to fill the tank with lava, 2 pixels for each bucket. Actually, let's implement simple logic for this action:

```js
let placedTanksByDimension = {};

Callback.addCallback("ItemUse", function(coords, item, block, remote, player) {
    if (block.id == BlockID.wooden_tank && (
        item.id == VanillaItemID.bucket || item.id == VanillaItemID.lava_bucket
    )) {
        const dimension = Entity.getDimension(player);
        if (!placedTanksByDimension.hasOwnProperty(dimension)) {
            placedTanksByDimension[dimension] = {};
        }
        const location = coords.x + "," + coords.y + "," + coords.z;
        if (placedTanksByDimension[dimension].hasOwnProperty(location)) {
            if (item.id == VanillaItemID.bucket) {
                if (placedTanksByDimension[dimension][location] <= 0) {
                    return;
                }
            } else if (placedTanksByDimension[dimension][location] >= 7) {
                return;
            }
        } else if (item.id == VanillaItemID.bucket) {
            return;
        }
        const actor = new PlayerActor(player);
        if (!actor.isValid()) {
            return;
        }
        actor.setInventorySlot(actor.getSelectedSlot(), item.id, item.count - 1, item.data, item.extra);
        if (item.id == VanillaItemID.bucket) {
            placedTanksByDimension[dimension][location]--;
            actor.addItemToInventory(VanillaItemID.lava_bucket, 1, 0);
        } else {
            if (!placedTanksByDimension[dimension].hasOwnProperty(location)) {
                placedTanksByDimension[dimension][location] = 0;
            }
            placedTanksByDimension[dimension][location]++;
            actor.addItemToInventory(VanillaItemID.bucket, 1, 0);
        }
        Network.getConnectedPlayers().filter(function(uid) {
            return Entity.getDimension(uid) == dimension;
        }).forEach(function(uid) {
            const client = Network.getClientForPlayer(uid);
            if (client) {
                client.send("abstractModName.tankFill", {
                    coords: coords,
                    level: placedTanksByDimension[dimension][location]
                });
            }
        });
    }
});

Network.addClientPacket("abstractModName.tankFill", function(packetData) {
    if (packetData.coords && packetData.hasOwnProperty("level")) {
        BlockRenderer.mapAtCoords(
            packetData.coords.x, packetData.coords.y, packetData.coords.z,
            WOODEN_TANK_RENDERERS[packetData.level]
        );
    }
});
```

And also add packet sending with tanks when changing dimension, this will cover, among other things, the first client connection:

```js
Callback.addCallback("PlayerChangedDimension", function(player, currentId, lastId) {
    if (placedTanksByDimension.hasOwnProperty(currentId)) {
        const client = Network.getClientForPlayer(player);
        if (client) {
            client.send("abstractModName.tanksInDimension", placedTanksByDimension[currentId]);
        }
    }
});

Network.addClientPacket("abstractModName.tanksInDimension", function(packetData) {
    for (const location in packetData) {
        const vector = location.split(",");
        BlockRenderer.mapAtCoords(
            vector[0], vector[1], vector[2],
            packetData[location]
        );
    }
});
```

To not complicate the article, we did not use saves or tiles. They will be discussed repeatedly, but here they definitely do not belong. Just note that the tank data will be reset after exiting the world.

Only visual shapes require enabled mapping, for any others this is not required. That is, you can replace the physical and selection shape without problems:

```js
Callback.addCallback("ItemUseLocal", function(coords, item, block, player) {
    if (block.id == BlockID.wooden_tank) {
        const dimension = new PlayerActor(player).getDimension();
        BlockRenderer.mapCollisionModelAtCoords(dimension, coords.x, coords.y, coords.z, WOODEN_TANK_COLLISION);
        BlockRenderer.mapRaycastModelAtCoords(dimension, coords.x, coords.y, coords.z, WOODEN_TANK_COLLISION);
    }
});
```

This will be equivalent to calling one function:

```js
Callback.addCallback("ItemUseLocal", function(coords, item, block, player) {
    if (block.id == BlockID.wooden_tank) {
        const dimension = new PlayerActor(player).getDimension();
        // highlight-next-line
        BlockRenderer.mapCollisionAndRaycastModelAtCoords(dimension, coords.x, coords.y, coords.z, WOODEN_TANK_COLLISION);
    }
});
```

Do not forget that any mapping is client-side:

- Any set renders are cleared when switching between dimensions (for visual mapping) or disconnecting from the world
- Breaking a block will not lead to the destruction of mapping, any block placed again in this place, subject to mapping, will receive the render of the destroyed block
- Mapping changes occur for each client separately, and this again means that changing mapping in server events is useless

Need to clear any mapping manually to return the standard model? Consider the methods:

```js
BlockRenderer.unmapAtCoords(x, y, z);
BlockRenderer.unmapCollisionModelAtCoords(dimension, x, y, z);
BlockRenderer.unmapRaycastModelAtCoords(dimension, x, y, z);
BlockRenderer.unmapCollisionAndRaycastModelAtCoords(dimension, x, y, z);
```

The main practical purposes of mapping remain unique placement options that cannot be created using conditions or variations, and animations.

:::warning Do not use mapping to create rotations

Better create several variations for such a case, mapping remains purely client-side, while variations work slightly more stably. Most simple states, like furnace activation, are also created by variations. This is not the author's whim, this is how most blocks in the game work.

:::
