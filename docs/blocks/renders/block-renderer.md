# Block Models

If we try to describe the purpose of [ICRender](/api/namespace/ICRender) in two words, it turns out that block shapes or models perfectly fit it. This technology will allow you to link newly created models to a specific block, place the desired model at coordinates, dynamically update renders, physical and visual shapes of blocks, and perhaps even replace models of regular items altogether. Let's start by reviewing [BlockRenderer](/api/namespace/BlockRenderer#Model) models and end with a few shapes for a variety of purposes.

:::note How simple shapes differ from models

As already mentioned in previous articles, the game provides a certain number of built-in shapes and allows you to set your own shape using a parallelepiped. Models, unlike simple shapes, consist of many boxes (parallelepipeds), which are later converted into vertices, polygons, and edges. In fact, the shape can be whatever you want, and the only limitation is your imagination.

:::

## Model — the foundation of the render

Let's start with what a so-called full-block block represents. Usually, this is a 16x16 texture and a 1x1x1 box. Usually, all shapes are divided into as many segments as there are pixels involved in the texture. In our case, the block occupies 16/16 of its available pixels on each side of the three-dimensional space. A half here would be 8/16, a quarter 4/16, and so on. Think of blocks exactly in pixels, you can start with a basic sketch of the model even on graph paper.

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

But we are trying to create a model, aren't we? Why should we use a block already created by the game itself, for this we could limit ourselves to simple shapes. Well, usually each model is empty by default:

```js
const STONE_BLOCK_MODEL = BlockRenderer.createModel();
STONE_BLOCK_MODEL.addBox(0/16, 0/16, 0/16, 16/16, 16/16, 16/16, "stone", 0);
```

And then you can perform various manipulations with it before attaching it to anything.

:::info Do I need to model everything myself?

In fact, you can sketch a model in any voxel editor, like [Goxel](https://goxel.xyz/), or a three-dimensional one, like [Blender](https://www.blender.org/). Some prefer to use [Blockbench](https://www.blockbench.net/), although it is much more tailored for rendering entities.

Especially for this purpose, the project authors have implemented in-game modeling tools, they allow you to understand the intricacies even faster without leaving the gameplay; not only modeling, but also converting models of different formats, installing add-ons to expand functionality. Try the [modding tools](https://icmods.mineprogramming.org/mod?id=614) yourself and share your impressions to make the project even better!

:::

## Binding a model to a render

A render consists of models, and there can be any number of models. The render is needed to connect them together and describe the display conditions. Yes, there are external factors due to which shapes can be changed, and yes, we will look at them in the next article. But first, let's apply the newly created shape to the block:

```js
const STONE_BLOCK_MODEL = BlockRenderer.createModel();
STONE_BLOCK_MODEL.addBox(0/16, 0/16, 0/16, 16/16, 16/16, 16/16, "stone", 0);
const STONE_BLOCK_RENDER = new ICRender.Model(STONE_BLOCK_MODEL);
BlockRenderer.setStaticICRender(1, 0, STONE_BLOCK_RENDER);
```

The last function actually means: set the stone render permanently for identifier 1 with meta 0 (stone block, excluding diorite and other types of this block). The unconditional render will be set for all stone blocks in the world. The constructor `new ICRender.Model(model)` can be replaced with its equivalent `new ICRender.Model()` with the addition of `render.addEntry(model)`.

But suppose we created a block and want to set a render to it. The implementation will hardly differ:

```js
const WOODEN_TANK_MODEL = BlockRenderer.createTexturedBlock(
    [["wood", 1], ["glass", 0]]
);
const WOODEN_TANK_RENDER = new ICRender.Model(WOODEN_TANK_MODEL);
BlockRenderer.setStaticICRender(BlockID.wooden_tank, -1, WOODEN_TANK_RENDER);
```

Where `-1` means setting the render to each variation of the block. And as you can see, block unwrappings do not differ from their models. Accordingly, the liquid tank will receive the texture of a log from below and glass from all other sides. Read [How many sides does a cube have](../first-block#how-many-sides-does-a-cube-have) for details.

## Physical and outline renders

They practically do not differ from visual ones, except that they have no textures and have their own model constructors. Physical models represent a collision, a support for entities to come into contact with the block surface. The outline appears when the player hovers the cursor over a block or holds it on a touch screen. If the purpose of these renders still remains unclear, we will break them down in more detail now.

```js
const WOODEN_TANK_COLLISION = new ICRender.CollisionShape();
const WOODEN_TANK_COLLISION_ENTRY = WOODEN_TANK_COLLISION.addEntry();
WOODEN_TANK_COLLISION_ENTRY.addBox(2/16, 0/16, 2/16, 14/16, 16/16, 14/16);
```

This is what a simple standard shape will look like. The physical shape creates a description for both itself and the outline. Undoubtedly, we can create exactly the same render for the outline, but then they will be identical. Instead, it is better to set the resulting render to the block:

```js
BlockRenderer.setCustomCollisionShape(BlockID.wooden_tank, -1, WOODEN_TANK_COLLISION);
BlockRenderer.setCustomRaycastShape(BlockID.wooden_tank, -1, WOODEN_TANK_COLLISION);
```

Or by an equivalent to these two function:

```js
BlockRenderer.setCustomCollisionAndRaycastShape(BlockID.wooden_tank, -1, WOODEN_TANK_COLLISION);
```

Usually, physical and outline models are greatly simplified compared to visual ones; which is understandable, in most cases complex models up to every pixel are simply not needed and it allows saving computational resources.

## Mapping and updates

Any block render can be rendered at coordinates if the block at those coordinates allows modifying its model. But usually, render updates (mapping) are required only for new blocks, so in most cases, this rule won't cause any problems.

First, let's enable mapping for the required block, for example, for `wooden_tank`:

```js
BlockRenderer.enableCoordMapping(BlockID.wooden_tank, -1, WOODEN_TANK_RENDER);
```

The last argument of enabling mapping requires a standard model, it will be set for each variation. Keep in mind that after mapping is enabled, the so-called static renders will no longer be available for the affected variations. To disable, use the `BlockRenderer.disableCustomRender(id, data)` method.

But again, why do we need only a standard model, let's add a few more to indicate the fullness of the liquid tank:

```js
const WOODEN_TANK_RENDERERS = new Array(7).map(function(nope, index) {
    const model = BlockRenderer.createModel();
    model.addBox(1/16, 1/16, 1/16, 15/16, 1/16 + (index + 1) / 8, 15/16, "flowing_lava", 0);
    const render = new ICRender.Model(WOODEN_TANK_MODEL);
    render.addEntry(model);
    return render;
});
```

We took the previously created model as a basis and added a "new layer" to it with a model of one lava box. Now 7 variations can be used to fill the tank with lava, 2 pixels for each bucket. Actually, let's implement some simple logic for this action:

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

And let's also add sending a packet with the tanks when the dimension changes, this will also cover the first connection of the client:

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

To avoid complicating the article, we didn't use saving or tile entities. They will be considered more than once, and here is definitely not the place for them. Just keep in mind that the tank data will be reset after exiting the world.

Only visual shapes require enabled mapping, for any other this is not required. That is, you can replace the physical and outline shape without problems:

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

- Any installed renders are cleared when moving between dimensions (for visual mapping) or disconnecting from the world
- Breaking a block will not destroy the mapping, any block newly placed in this position subject to mapping will receive the render of the broken block
- Mapping changes occur for each client separately, which again means that changing mapping in server events is useless

Need to clear some mapping manually to return the standard model? Consider the methods:

```js
BlockRenderer.unmapAtCoords(x, y, z);
BlockRenderer.unmapCollisionModelAtCoords(dimension, x, y, z);
BlockRenderer.unmapRaycastModelAtCoords(dimension, x, y, z);
BlockRenderer.unmapCollisionAndRaycastModelAtCoords(dimension, x, y, z);
```

The main practical purposes of mapping remain unique placement options that cannot be created using conditions or variations, and animations.

:::warning Do not use mapping to create rotations

Better create multiple variations for such a case, mapping remains purely client-side, while variations work a little more stably. Most simple states, like activating a furnace, are also created by variations. This is not a whim of the author, this is how most blocks in the game work.

:::
