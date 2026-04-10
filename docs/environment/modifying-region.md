# Modifying the Region

The game world consists of chunks — components of a region, they contain blocks and entities that form the environment. The number of regions is unlimited, they are tied to the dimension. Specifically for linking regions to each other, a block source was created, for the developer it is only important to determine which dimension they will interact with, and a special handler will take care of the processing. Let's consider the capabilities of the environment, modifying and getting properties, spawning entities and placing blocks.

## Coordinate System

The three-dimensional game world uses meters as values, where each meter is equal to one block. This system is applicable to any object in the game environment, except perhaps metrics with an absolute (relative) coordinate system and models. Measurements in blocks are made relative to the cardinal directions of the game world, where there is width (__x__, north is back and south is front), longitude (__z__, west is left and east is right), and also height (__y__).

## Choosing a source

In the documentation, the concept of a region will be considered precisely as a block source, since in fact it is this that serves as access to the game world. First of all, it is necessary to understand by what criterion the region will be used. There are several options here:

1. By dimension (main for most actions)

   These regions are common to the entire engine and projects as a whole, they are cached and are suitable almost always. Any changes will immediately be transmitted to other players (clients) and saved in the world itself.

   ```js
   BlockSource.getDefaultForDimension(EDimension.NORMAL)
   ```

   If the dimension is unknown, it can be requested for a specific entity.

   ```js
   Callback.addCallback("EntityAdded", function(entity) {
       const region = BlockSource.getDefaultForActor(entity);
       ...
   });
   ```

2. For generation and its events

   Created specifically for editing blocks and tiles during world generation, at this point these are the only available regions to use. Applicable only to generation callbacks and should not be used outside of generator events. They will be repeatedly considered in the series of articles about dimensions and structures.

   ```js
   BlockSource.getCurrentWorldGenRegion()
   ```

3. Client-side

   The client on its part cannot use server and any other regions (there simply won't be any blocks in them, and changing them will result in nothing), so client regions are created to obtain information about the environment. Environment edits will naturally affect only the client, but obtaining information is quite relevant.

   ```js
   BlockSource.getCurrentClientRegion()
   ```

Like world regions inside block sources, the sources themselves are tied to a dimension, regardless of what criterion is used to define them. In this article we will take a detailed look at the main source obtained by dimension.

## What can it do

Let's look at the available capabilities in practice, a couple of silly examples for each case will be enough. First of all, let's consider the callback of the player changing dimensions in the world as a region:

```js
Callback.addCallback("PlayerChangedDimension", function(playerUid, currentId, lastId) {
    const region = BlockSource.getDefaultForDimension(currentId);
    const position = Entity.getPosition(playerUid);
    ...
});
```

It is called immediately after connecting to the world, the dimension is determined by the event itself. Already tired of *ItemUse*? Let's do something more interesting using another callback.

### And here's the block

Any block in the world is determined based on coordinates, identifier, variation, and description of states. From a technical point of view, even air is a block, filling all empty cells of the chunk constructor. To describe identifiers in the world, use [VanillaTileID](/api/enum/VanillaTileID), they are relevant only for the world, not the inventory.

Let's start with the block placement/replacement method, the old block will be replaced with a new one:

```js
region.setBlock(x, y, z, id, data?)
```

Everything is simple here — specify coordinates, block identifier and optionally variation. But where to get the coordinates... And the identifier? You can use event coordinates (like clicking on a block), or get the coordinates of game objects or entities. In our case, the event passes the player key, whose position can be used as a reference point. Do you like little towers?

```js
region.setBlock(position.x - 1, position.y + 3, position.z - 1, VanillaTileID.dirt);
region.setBlock(position.x - 1, position.y + 3, position.z, VanillaTileID.dirt);
region.setBlock(position.x - 1, position.y + 3, position.z + 1, VanillaTileID.dirt);
region.setBlock(position.x, position.y + 3, position.z - 1, VanillaTileID.dirt);
region.setBlock(position.x, position.y + 3, position.z, VanillaTileID.dirt);
region.setBlock(position.x, position.y + 3, position.z + 1, VanillaTileID.dirt);
region.setBlock(position.x + 1, position.y + 3, position.z - 1, VanillaTileID.dirt);
region.setBlock(position.x + 1, position.y + 3, position.z, VanillaTileID.dirt);
region.setBlock(position.x + 1, position.y + 3, position.z + 1, VanillaTileID.dirt);
region.setBlock(position.x, position.y + 2, position.z, VanillaTileID.dirt);
```

This script will cause one of these to appear above your character. A small platform with a bulge at the bottom, just run and see how this code works! We shifted the structure a few blocks up, focusing on the player's position in the world. And there can be any number of block chains, the main thing is that the chunks are loaded.

<details>
    <summary>Let's simplify this!</summary>
<div>

```js
for (let x = -1; x <= 1; x++) {
    for (let z = -1; z <= 1; z++) {
        region.setBlock(position.x + x, position.y + 3, position.z + z, VanillaTileID.dirt);
    }
}
region.setBlock(position.x, position.y + 2, position.z, VanillaTileID.dirt);
```

We used a small nested loop to create repetition of blocks along two axes. Thus, the same 3x1x3 block platform appeared above the player, framed by a "dome" from below.

</div>
</details>

In addition to placing blocks, much more often we will have to check what block is already at the coordinates. It's even easier to do this by getting the identifier:

```js
region.getBlockId(x, y, z)
```

The result of executing the method will return the identifier that can be used for checks. Let's not stop at one `if` and do a cyclic replacement of blocks under the player:

```js
const radius = Math.round(4 + Math.random() * 8);
for (let x = -radius; x <= radius; x++) {
    for (let z = -radius; z <= radius; z++) {
        for (let y = -radius; y <= radius; y++) {
            if (x * x + y * y + z * z <= radius * radius) {
                if (region.getBlockId(position.x + x, position.y + y, position.z + z) != VanillaTileID.air) {
                    region.setBlock(position.x + x, position.y + y, position.z + z, VanillaTileID.green_glazed_terracotta);
                    break;
                }
            }
        }
    }
}
```

Randomizing the radius from the player, we used the formula of a circle, replacing the first found surface block (which is not air). Too sharp a transition to more complex algorithms?

:::note Let's analyze the algorithm

Let's look at this code step-by-step to clarify the action algorithm faster:

1. Calculate a whole, random radius from 4 to 12 blocks:

   ```js
   const radius = Math.round(4 + Math.random() * 8);
   ```

2. Go through all three axes, height will be last specifically for the following steps:

   ```js
   for (let x = -radius; x <= radius; x++) {
       for (let z = -radius; z <= radius; z++) {
           for (let y = -radius; y <= radius; y++) {
               ...
           }
       }
   }
   ```

3. Apply the circle formula (`x * x + y * y + z * z`) to the coordinates of the current loop step, making sure its value does not exceed the obtained diameter (doubled radius):

   ```js
   if (x * x + y * y + z * z <= radius * radius) {
       ...
   }
   ```

4. The resulting block (due to the formula) of a part of the circle must not be air, then we can place terracotta:

   ```js
   if (region.getBlockId(position.x + x, position.y + y, position.z + z) != VanillaTileID.air) {
       region.setBlock(position.x + x, position.y + y, position.z + z, VanillaTileID.green_glazed_terracotta);
       ...
   }
   ```

5. The surface block was replaced, which means the loop for this `x` and `z` (remember how we used height last, only it will end) can be finished, moving on to the next one:

   ```js
   break;
   ```

Experiment with this code, for example, by ignoring the last step. In this case, instead of one surface block, all of them in the radius of a sphere around the player will be replaced.

:::

An equally important capability of a region is the placement of extra blocks. Do not equate them with [item extra](../items/extra/what-is-extra), these two things are absolutely not connected in any way. The fact is that I have not told you everything. In addition to the regular blocks that make up the game world of the multiplatform game, there is another layer of blocks, which usually houses liquids flooding transparent blocks. Water, to be specific. This allows you to flood anything without even adding this capability to the target block:

```js
region.setExtraBlock(x, y, z, id, data?)
```

However, an extra block can be anything. How about placing a torch inside glass?

```js
region.setBlock(position.x + 2, position.y, position.z, VanillaTileID.glass);
region.setExtraBlock(position.x + 2, position.y, position.z, VanillaTileID.torch);
```

Quite an interesting feature that has a number of its own limitations. In particular, if the block is not a liquid, the extra block cannot be destroyed by normal means (player destruction, explosions). But, for example, structures will thank you for using unique combinations of this feature.

### Blockstates

In addition to the usual identifier and variation, each block describes states. States form the visual part of the block in the world based on rotation, switches, and other properties. In each case, a block can be represented as a blockstate — a bundle of identifier, and, variation or states. States are used in wood blocks (to describe rotation), doors (besides rotation, whether the door is open), respawn anchors (charge level) and many other blocks.

You can get a blockstate by coordinates using the method:

```js
region.getBlock(x, y, z)
region.getExtraBlock(x, y, z)
```

It contains an immutable identifier and a prepared variation, and also provides methods for handling states. I think a good example would be to connect [creating an axe](TODO) and using it on wood blocks. How exactly? An axe strips wood, this needs to be implemented:

```js
Callback.addCallback("ItemUse", function(coords, item, block, isExternal, playerUid) {
    const logId = (function() {
        switch (block.id) {
            case VanillaTileID.log:
                switch (block.data) {
                    case 0: return VanillaTileID.stripped_oak_log;
                    case 1: return VanillaTileID.stripped_spruce_log;
                    case 2: return VanillaTileID.stripped_birch_log;
                    case 3: return VanillaTileID.stripped_jungle_log;
                }
                break;
            case VanillaTileID.log2:
                switch (block.data) {
                    case 0: return VanillaTileID.stripped_acacia_log;
                    case 1: return VanillaTileID.stripped_dark_oak_log;
                }
                break;
            case VanillaTileID.crimson_stem:
                return VanillaTileID.stripped_crimson_stem;
            case VanillaTileID.warped_stem:
                return VanillaTileID.stripped_warped_stem;
        }
        return 0;
    })();
    if (logId != 0) {
        const region = BlockSource.getDefaultForActor(playerUid);
        const axis = region.getBlock(coords.x, coords.y, coords.z).getState(EBlockStates.PILLAR_AXIS);
        if (logId == VanillaTileID.stripped_crimson_stem || logId == VanillaTileID.stripped_warped_stem) {
            region.setBlock(coords.x, coords.y, coords.z, logId, axis);
        } else {
            const block = new BlockState(logId, { pillar_axis: axis });
            region.setBlock(coords.x, coords.y, coords.y, logId, block);
        }
        ToolLib.breakCarriedTool(1, playerUid);
        World.playSound(coords.x + 0.5, coords.y + 0.5, coords.z + 0.5, "hit.wood", 0.5, 0.8);
    }
});
```

Using blockstates is only necessary for regular wood, in the case of nether variants the variation serves as an indicator of block rotation. Here we are interested in several functions and the [BlockState](/api/class/BlockState) class. The `getBlock` function, which was mentioned earlier, returns the blockstate class we need. In particular, it contains the following methods and data:

```js
// getting a blockstate, we have all the information about this block
const block = region.getBlock(coords.x, coords.y, coords.z);
// in case this block contains a rotation state
if (block.hasState(EBlockStates.PILLAR_AXIS)) {
    // get the value of this state, returns -1 if it doesn't exist
    // (but we already made sure this state exists, so everything is fine)
    const state = block.getState(EBlockStates.PILLAR_AXIS);
    // add/replace state, in this case the block will be rotated
    // along each axis until axes run out, or it will start over
    const newBlock = block.addState(EBlockStates.PILLAR_AXIS, (state + 1) % 6);
    // set the newly created blockstate at the coordinates, the old one will not be affected
    region.setBlock(coords.x, coords.y, coords.z, newBlock);

// in case the block contains an open state (doors, trapdoors)
} else if (block.hasState(EBlockStates.open_bit)) {
    // get a list of all states, returns an object with their list
    const states = block.getNamedStatesScriptable();
    // take the direction from the list of states, it may not be there
    const direction = states.direction || 0;
    // apply several states to the new blockstate at once,
    // based on the old one, let me remind you that it won't be affected
    const newBlock = block.addStates({
        open_bit: Math.round(Math.random()),
        direction: (state + 1) % 4
    });
    // there are blockstates that are inapplicable to each other
    if (newBlock.isValidState()) {
        // great, our door or trapdoor will rotate along the next axis
        // and receive a random open state
        region.setBlock(coords.x, coords.y, coords.z, newBlock);
    }
}
```

In addition to the presented methods, there are also more basic properties such as `id` and `data`. For this reason, any blockstate can be placed at coordinates, almost always preserving all properties of the block. Do not forget that the obtained block is tied to the identifier space of one world, the `runtimeId` property is generated once and cannot be used in other worlds. Let's return to placing blocks.

```js
region.setBlock(x, y, z, state)
region.setExtraBlock(x, y, z, state)
```

As in the case of placing blocks by identifier, extra blocks have the syntax of regular ones. The blockstate class itself can accept as input `runtimeId`, a bundle of identifier and variation, or an identifier and a list of states. Each case is specific to its situation, but the most important thing is that blockstates are applicable to extra blocks:

```js
const block = new BlockState(VanillaTileID.flowing_water, 0);
// adding a state will erase the variation passed to the constructor
block.addState(EBlockStates.LIQUID_DEPTH, 1);
region.setExtraBlock(coords.x, coords.y, coords.z, block);
```

But why can't we use variation and states at once? In fact, states are still the same variation, just created based on the provided data. Manual modification of states for tiles (like furnaces, brewing stands) only confuses, nobody will be better off from a furnace lighting up (although it is inactive), just as from the sudden appearance of potion bottles. Just know that this is possible, but better consider [in-game tiles](../blocks/block-entities).

:::warning List of properties for blocks

It is currently under development, but as soon as we finish it, a link with a description of each of them will definitely appear here. In the meantime, use state retrieval using the `getNamedStatesScriptable` method. An up-to-date list of available states can be found in [EBlockStates](/api/enum/EBlockStates).

:::

### Entities

The second key component of a region are entities (or mobs) — these are creepers, chickens, pigs, and even the player themselves. Besides in-game spawning (summoning, eggs, and simply random spawning), we can spawn any entities ourselves:

```js
region.spawnEntity(x, y, z, type)
```

It is enough to determine the coordinates and... Entity type? There are several options for its description, consider this code:

```js
// use numeric identifier to spawn an entity
region.spawnEntity(position.x, position.y, position.z, EEntityType.CREEPER);
// besides numeric, behavior packs describe a named identifier
region.spawnEntity(position.x, position.y, position.z, "creeper");
// the game's namespace is used by default
region.spawnEntity(position.x, position.y, position.z, "minecraft:creeper");
```

Each method here is equivalent to each other. Using namespaces (as well as named identifiers), we can additionally specify events (states, they are specified between `<>` and separated by commas) for spawning:

```js
// the creeper will be charged (as a result of a lightning strike) as soon as it appears, check out
// behavior packs for details on using events or the /summon command
region.spawnEntity(position.x, position.y, position.z, "minecraft:creeper:<become_charged>");
```

The method returns the unique identifier of the spawned mob, used for [processing entities](../entities/actoring-entities). For now, let's continue working with the region and look at the remaining capabilities.

From the game's point of view, entities are actually much more than it might seem. What is a falling block? Or an item thrown from the inventory? Paintings, experience orbs, and much, much more are the same mobs as everything else. Considering that some entities contain unique data that cannot be simply modified, there are several helper methods to summon specific entities.

I'd like to start with experience orbs, just define their amount:

```js
region.spawnExpOrbs(x, y, z, amount)
```

Experience orbs can be dropped in any amount, for example after killing the ender dragon the player receives 12000 experience. To reduce the load, orbs merge with each other, forming denser ones with a larger amount of experience. As an example, let's implement smashing a bottle o' enchanting, but first create a [throwable item](../items/food-armor-and-throwables#creating-throwable-items):

<Tabs groupId="scripting-language">
<TabItem value="js" label="JavaScript">

```js
Item.registerThrowableFunction("diamond_bullet", function(projectile, item, target) {
    const region = BlockSource.getDefaultForActor(projectile);
    region.spawnExpOrbs(target.x, target.y, target.z, Math.floor(3 + Math.random() * 8));
});
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts
Item.registerThrowableFunction("diamond_bullet", (projectile, item, target) =>
    BlockSource.getDefaultForActor(projectile)?.spawnExpOrbs(target.x, target.y, target.z, Math.floor(3 + Math.random() * 8)));
```

</TabItem>
</Tabs>

After "smashing" the diamond against a block or entity, experience orbs will drop at the location of the throw hit. A random amount of experience from 3 to 11 is equivalent to regular bottles o' enchanting, functionality in a few lines is ready.

A much more interesting capability is spawning dropped items (drops), the list of arguments here is similar to other ways of describing an item (including events):

```js
region.spawnDroppedItem(x, y, z, id, count, data, extra?)
```

Take any item in the player's hand. Imagine that it is not in your inventory, but lies in front of you. And now, let's turn the figment of imagination into reality:

```js
const item = Entity.getCarriedItem(playerUid);
region.spawnDroppedItem(position.x, position.y, position.z, item.id, item.count, item.data, item.extra || null);
```

After summoning, the item can be modified using [Entity.setDroppedItem](/api/namespace/Entity#setDroppedItem), using the entity's unique identifier. Use the returned result of the method or events for this.

And besides the `EntityAdded` or `EntityAddedLocal` callbacks, you can always get a list of mobs between two points in the world. The result will be returned as an array and filtered by entity type:

```js
region.listEntitiesInAABB(x1, y1, z1, x2, y2, z2, entityType?, blacklist?)
```

The last property of which is responsible for whether the filter should be inverted (all mobs except the specified type will be searched for). If you do not use filter arguments, but only specify coordinates, all entities between these points will be returned. Let's delete all mobs around the player during dimension change, excluding the player themselves:

```js
const entities = region.listEntitiesInAABB(
    position.x - 16, position.y - 8, position.z - 16,
    position.x + 16, position.y + 8, position.z + 16,
    EEntityType.PLAYER, true
);
entities.forEach(function(entity) {
    Entity.remove(entity);
});
```

:::danger What happens if you delete the player

An emergency termination of the game. Why does this happen? Rendering directly uses the camera entity, if it isn't there, the world will have nothing to render either. If you use camera changes, beware of dealing damage to the entity used. The result of its killing will lead to deletion, and deletion entails a crash. Maybe it would be better to deal damage to the player to die, or request the client to disconnect from the server. At least now we have an idea of how to quickly get rid of the player.

:::

### Breaking Blocks

It is important to consider block breaking separately, since in addition to destroying a block in the world, other mods also need to know about it. What is this for? It could be anything, from achievements to modifying items dropped from blocks (drops).

In most cases, a regular block break function will be enough, its syntax is reduced to the following method:

```js
region.breakBlock(x, y, z, isDropAllowed, actor?, item?)
```

The last pair of arguments is used to invoke the event of a player breaking a block, the *DestroyBlock* callback. Besides it, this method will in any case trigger *BreakBlock*. For example, let's break blocks (possibly grass) under the player using the silk touch enchantment:

```js
const item = {
    id: VanillaItemID.diamond_pickaxe,
    count: 1,
    data: 0,
    extra: new ItemExtraData()
};
item.extra.addEnchant(EEnchantment.SILK_TOUCH, 1);
for (let dx = -8; dx < 8; dx++) {
    for (let dz = -8; dz < 8; dz++) {
        region.breakBlock(position.x + dx, position.y - 1, position.z + dz, true, item);
    }
}
```

Moreover, we did not specify the player breaking these blocks. If an entity is not specified, the breaking happens on the server's shoulders. Or at least, it can be defined as such. An equally important feature is the ability to independently determine the dropped items, for this there is `breakBlockForResult` or:

```js
region.breakBlockForJsResult(x, y, z, actor?, item?)
```

This implementation will mean the absence of default drops (you can basically not process it, look at the next method), we can process dropped items as we like after events. The syntax of the drop is presented as an array of items, in general:

```js
[
    {
        id: VanillaItem/BlockID.something,
        count: 1,
        data: 0
    },
    ...
]
```

As well as the amount of experience that should drop from the item. Imagine that blocks should double their drops if broken with a diamond pickaxe, let's double the number of items and experience:

```js
Callback.addCallback("DestroyBlock", function(coords, block, playerUid) {
    if (playerUid && playerUid != -1) {
        const item = Entity.getCarriedItem(playerUid);
        if (item.id != VanillaItemID.diamond_pickaxe) {
            return;
        }
        const region = BlockSource.getDefaultForActor(playerUid);
        if (region != null) {
            Game.prevent();
            const result = region.breakBlockForJsResult(x, y, z, playerUid, item);
            result.items.forEach(function(entry) {
                region.spawnDroppedItem(coords.x, coords.y, coords.z, entry.id, entry.count * 2, entry.data, entry.extra);
            });
            region.spawnExpOrbs(coords.x, coords.y, coords.z, result.experience * 2);
        }
    }
});
```

Perhaps your algorithm needs to destroy a colossal number of blocks. Or event handling is simply not needed, the blocks were destroyed by a black hole. These are quite real cases, a separate method was created for this:

```js
region.destroyBlock(x, y, z, drop?)
```

Minimum number of arguments and total absence of events. The last argument determines whether to process drops, otherwise no items will be thrown (default behavior). Disable particles for best results, for example let's destroy a whole chunk:

```js
const particles = region.getDestroyParticlesEnabled();
if (particles) {
    region.setDestroyParticlesEnabled(false);
}
const x = position.x - position.x % 16;
const z = position.z - position.z % 16;
for (let dx = 0; dx < 16; dx++) {
    for (let dy = 0; dy < 256; dy++) {
        for (let dz = 0; dz < 16; dz++) {
            region.destroyBlock(x + dx, dy, z + dz);
        }
    }
}
if (particles) {
    region.setDestroyParticlesEnabled(true);
}
```

By calculating the start of the chunk where the player is located, we can destroy it completely. Don't forget to bring back particle rendering — as already mentioned, many regions are common to all mods. By the way, the order of axes forms the name of the algorithm used for cyclic actions with the region. In this case it is XYZ, and for example, in-game structures use the XZY algorithm. We will look at the purpose of these principles in the following articles.

### Additional Capabilities

Here we have equally useful methods, but much more specific, and used slightly less often than others. This touches on terms not explained in the documentation, but they can be easily found on the net.

Let's start with something bright, albeit painful for players. Of course, we are talking about explosions:

```js
region.explode(x, y, z, power, fire)
```

The explosion radius (its power) is defined in blocks, like most other region metrics. Radii greater than 8 blocks are undesirable, as they will simply lose their sphericity and start turning into lines of empty blocks. The last argument determines whether to set the explosion area on fire, like a charged creeper does.

Why isn't explosion classified under [breaking blocks](#breaking-blocks)? The fact is that different principles of block destruction are used here. For an explosion, the *Explosion* callback is involved, and destruction for individual blocks is processed in a limited volume. And by itself, it's just needed much less frequently.

The following method became a discovery for me personally, although there is a whole mass of ways to use it in the game. Have you ever had the need to quickly find a surface to spawn entities, generate a structure, or simply determine a player's spawn point? Do you want to use cyclic checks of a block for air for this? There is a better option:

```js
region.clip(x1, y1, z1, x2, y2, z2, mode, output)
```

Through a quick "collision" with the game world, the function will determine the closest solid block from the first coordinate. The `output` argument is used to find the collision point with this block, providing besides coordinates the side on which the collision occurred (for the specially savvy, you can determine the normal and calculate its boundaries). This is an excellent way to find a surface among air blocks, significantly reducing processing time. How do you like the idea of making uneven terrain (especially in hilly areas) perfectly flat?

```js
const particles = region.getDestroyParticlesEnabled();
if (particles) {
    region.setDestroyParticlesEnabled(false);
}
const x1 = position.x - 16;
const z1 = position.z - 8;
const x2 = position.x + 16;
const z2 = position.z + 8;
let collision = [];
for (let y = 0; y < 12; y++) {
    region.clip(x1, position.y + y, z1, x2, position.y + y, z2, 0, collision);
    while (Math.abs(collision[0] - x2) >= 0.0001 || Math.abs(collision[2] - z2) >= 0.0001) {
        region.destroyBlock(collision[0], collision[1], collision[2]);
        region.clip(x1, position.y + y, z1, x2, position.y + y, z2, 0, collision);
    }
}
if (particles) {
    region.setDestroyParticlesEnabled(true);
}
```

The method places the coordinates of the found contact with a block into an array used to determine the next place of destruction. A small margin of error is discarded, allowing us to determine if there are still blocks in the space. An area of 16x12x8 around the player will be destroyed, and it is easy to make sure that this algorithm works faster than cyclic block checking — slightly modify the code from [breaking blocks](#breaking-blocks) and everything is ready.

:::warning Unverified information

I do not know what the `mode` argument is responsible for, here I can only assume that it affects the mode of searching for blocks relative to two coordinates. For example, by default, collision is processed starting from the first point (`mode = 0`). Then it is probable that the next mode (`mode = 1`) will set the second as the starting point, and yet the next (`mode = 2`) will start from the center between the two points. It is precisely known that one or more modes allow searching not only for blocks, but also for entities. This question will be resolved after additional tests.

:::

And I would like to dwell on ticking blocks. Briefly, these are blocks located no further than the simulation boundary (within the radius of simulation chunks, beyond this distance furnaces pause their work, and saplings stop dropping from leaves). In fact, besides this area, there are also so-called ticking areas. They are created using the `/tickingarea` command anywhere in the dimension. We, however, can configure a specific block:

```js
region.addToTickingQueue(x, y, z, block?, delay, mode?)
```

By setting the frequency of its updates in ticks, this block will always perform its work. Of course, if the dimension with it is currently loaded by at least one player. Passing also a blockstate property (it must be obtained from the block at the coordinates), the exact obtained block will be updated.

This concludes the main list of region methods, although of course, we haven't covered everything, but almost every one of the features missing here is covered in separate documentation articles.
