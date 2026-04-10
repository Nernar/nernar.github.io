# Recipes

Items in the game, in addition to being simply found in various structures, are crafted on a crafting table, smelted in a furnace, or obtained as a result of mechanisms and rituals. Everything except the last must be registered as a recipe, which will be considered now.

## Shape and its absence

Everything is simple here. Either there is a shape, or the same items can be chaotically scattered across the crafting slots and yield a result. Shapeless recipes include dyes, flint and steel, minecarts with chests, hoppers, and the like. The rest have a shape and must be arranged in a predetermined combination of slots.

Any recipe defines items that must be in the crafting grid. For shapeless recipes, an array of items will suffice. As for shaped ones, it is necessary to provide the game with a pattern. The pattern fills the crafting grid cells, forming the shape of the recipe.

Imagine that we had a need to add a recipe for a door. Why create a door from planks when you can use sticks for this?

```js
[
    [VanillaItemID.stick, VanillaItemID.stick],
    [VanillaItemID.stick, VanillaItemID.stick],
    [VanillaItemID.stick, VanillaItemID.stick]
]
```

This is what a recipe pattern looks like if we represent it as a two-dimensional array of identifiers. Seems not bad, but why duplicate the same identifier six times. The game developers probably thought the same, thanks to which, in addition to the pattern, the concept of a mask comes to us.

The mask defines key references for the pattern. Not entirely clear? Let's look at an example.

```js
// here is the mask
{
    s: VanillaItemID.stick
}
// and here is the pattern based on the mask
[
    "ss",
    "ss",
    "ss"
]
```

The mask allows you to set a list of items for its subsequent use in the pattern. Keys are a character, it should not repeat and usually highlights the beginning of the identifier. I think we can proceed to practical application.

## Crafting

The in-game crafting table represents a 3x3 crafting grid of slots, the player themselves can use their own inventory to create items and blocks in a 2x2 grid. This is the main game mechanic around which most recipes are built.

### Shapeless

So, you don't care in what sequence the items will be arranged in the slots. To add such recipes, use methods:

```js
Recipes.addShapeless({
    id: VanillaItemID.diamond, count: 1, data: 0
}, [
    { id: VanillaItemID.iron_ingot, data: 0 },
    { id: VanillaItemID.gold_ingot, data: -1 },
    { id: VanillaItemID.flint }
]);
Recipes.addShapeless2(VanillaItemID.diamond, 1, 0, [
    { id: VanillaItemID.iron_ingot, data: 0 },
    { id: VanillaItemID.gold_ingot, data: -1 },
    { id: VanillaItemID.flint }
]);
```

This will add a crafting recipe for a diamond from an iron and gold ingot crossed with flint. The methods themselves are identical, except that the first processes an object and can accept [extra data](extra/what-is-extra).

Item meta can point to either the whole identifier (-1), or mean only the main item, excluding its variations (0). By default, the latter is used, as presented in the case with flint.

### Shaped by mask

A much more common way to register recipes remains setting a specific shape. A shape is a combination of a mask describing item identifiers and a pattern representing a grid:

```js
Recipes.addShaped({
    id: VanillaItemID.sapling, count: 1, data: 0
}, ["l", "l", "o"], [
    "o", VanillaBlockID.log, 0,
    "l", VanillaBlockID.leaves, 0
]);
Recipes.addShaped2(VanillaItemID.sapling, 1, 0, ["l", "l", "o"], [
    "o", VanillaBlockID.log, 0,
    "l", VanillaBlockID.leaves, 0
]);
```

Here, a combination of a log and two leaves blocks gives us a sapling. The pattern is explicitly specified, the vertical row of these blocks is leaves, leaves, and a log. As in the case of [shapeless crafting](#shapeless), the methods are practically identical to each other.

The mask consists of an array enumerating a character key, an item identifier, and its meta. The character key can be any ASCII character, that is, any from the Latin alphabet, case-sensitive (keys `h` and `H` can be together, without conflicting with each other).

In cases where the pattern grid is smaller than the crafting table grid, the pattern grid can be placed anywhere in the crafting table to get the result. A simple example here would be a torch, no matter which part of the slots coal is placed over a stick, the result is identical.

Let's complement the sapling recipe above, adding a little more leaves to create it:

```js
Recipes.addShaped2(VanillaItemID.sapling, 1, 0, [" l ", "lll", " o "], [
    "o", VanillaBlockID.log, 0,
    "l", VanillaBlockID.leaves, 0
]);
```

Such a recipe is called full-size, that is, occupying all the slots of the crafting grid. In addition to leaves in the pattern, "empty" cells have appeared here. Spaces in crafts indicate the absence of an item, for this there is no need to add an air item to the mask.

## Smelting

Besides crafting on a crafting table, an equally important mechanic remains smelting. In addition to a regular furnace, a smoker and a blast furnace are used here. There is nothing complicated in registering recipes:

```js
Recipes.addFurnace(VanillaItemID.rotten_flesh, 0, VanillaItemID.leather, 0);
```

Which will smelt rotten flesh into leather, as implemented in the Ender Craft project. The second argument after each identifier is the meta, it can accept any variation (-1).

And an equally important aspect of smelting remains fuel. There is also nothing complicated in adding it:

```js
Recipes.addFurnaceFuel(VanillaBlockID.magma, 0, 400);
```

This will add the ability to use magma as fuel, it will "burn" for 20 seconds (400 ticks). Regarding smelting ores in a blast furnace and cooking food in a smoker, items or blocks must be defined in the corresponding creative inventory category.

## Events and Edits

Any crafting table recipes (both with your own and in-game interface) are processed by several callbacks before the craft is made. This allows you to completely modify recipes, track their completion, or cancel them entirely.

Let's start with something simple, the craft has already been made, and now an event about it arrives. The _VanillaWorkbenchPostCraft_ callback was created specifically for this:

```js
Callback.addCallback("VanillaWorkbenchPostCraft", function(result, container, playerUid, recipe) {
    if (result.id == VanillaItemID.stick) {
        new PlayerActor(playerUid).addExperience(5);
    }
});
```

It reports on any crafts in the crafting table, with the already processed result. However, in most cases, we need to find out about the use of an added recipe. For these purposes, there is an additional argument in the [crafting methods](#crafting):

```js
Recipes.addShapeless2(VanillaItemID.diamond, 1, 0, [
    { id: VanillaItemID.iron_ingot, data: 0 },
    { id: VanillaItemID.gold_ingot, data: 0 },
    { id: VanillaItemID.flint, data: 0 }
], function(action, slots, result, playerUid) {
    for (let i = 0; i < action.getFieldSize(); i++) {
        action.decreaseFieldSlot(i);
    }
});
Recipes.addShaped2(VanillaItemID.sapling, 1, 0, [" l ", "lll", " o "], [
    "o", VanillaBlockID.log, 0,
    "l", VanillaBlockID.leaves, 0
], function(action, slots, result, playerUid) {
    for (let i = 0; i < action.getFieldSize(); i++) {
        action.decreaseFieldSlot(i);
    }
});
```

Crafting functions allow you to change the expected result of a recipe, handle the removal of items from the crafting table slots (on a successful craft) and cancel the craft. In the latter case, the crafting table slots probably do not need to be cleared, but the opposite is also possible.

Let's complicate the conditions — we want the craft to not always happen, an instrument is needed to create the recipe, which needs to spend durability, and with a certain chance items from the recipe will be spent, and the result will not be obtained. All these conditions are implemented using this event:

```js
Recipes.addShaped2(VanillaItemID.sapling, 1, 0, [" l ", "lhl", " o "], [
    "o", VanillaBlockID.log, 0,
    "l", VanillaBlockID.leaves, 0,
    "h", VanillaItemID.wooden_hoe, 0
], function(action, slots, result, playerUid) {
    const chance = Math.random();
    // modify the default behavior
    for (let i = 0; i < action.getFieldSize(); i++) {
        if (slots[i].getId() != VanillaItemID.wooden_hoe) {
            action.decreaseFieldSlot(i);
        } else {
            // damage the hoe by a few points
            slots[i].set(slots[i].getId(), slots[i].getCount(), slots[i].getData() + 5, slots[i].getExtra());
        }
    }
    // I think a 5% failure rate is not critical here
    if (chance < 0.05) {
        action.prevent();
    // another 2.5% to increase the number of saplings
    } else if (chance < 0.075) {
        result.count++;
    }
});
```

Conditions are met, the hoe takes damage, and crafting doesn't always yield a result. And a small chance of getting two saplings at once. Regardless of the chosen crafting method, the crafting function in each of them is the same in terms of arguments and implementation principles.

A list of available methods can be obtained in the summary, and besides the event at the end of the recipe creation function, the craft can be changed in another callback:

```js
Callback.addCallback("VanillaWorkbenchCraft", function(result, container, playerUid, recipe) {
    if (result.id == VanillaItemID.stick) {
        result.count *= 2;
    }
});
```

Just like with other crafting callbacks, this event is triggered for any recipes in the crafting table.

:::note What are prefixes for?

If you look into the methods summary, recipe methods accept a certain `prefix` as the last argument. It was created primarily for finding recipes, creating crafting tables based on the in-game one, and so on. Any recipes with a prefix will not be displayed in a regular crafting table. Consider [Recipes](/api/namespace/Recipes) for details.

:::
