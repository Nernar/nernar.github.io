# First Item

We call items things that are in the inventory or a container. This broad category includes crafting materials, food, tools, armor, and the like. There are even useless items, like poisonous potatoes. The player can interact with them, equip them, throw them, or eat them; these are the main game objects for the world and the beginning of learning.

## Let's create a texture

This is the first and most important step towards creating an item, a visually pleasing texture depends on a lot, and perhaps even the overall impression of the innovation. In-game item textures are raster images (*.png* or *.tga*) measuring 16x16 pixels. And while the size can be whatever is needed, file extensions are limited only to these two.

Create a new texture or use an existing one, in the latter case make sure it is provided in a supported format. For an example, we recolored the standard stick texture, this is a quite common practice — for example, textures of ores and tools in some mods are created exactly like this.

<div className="resource-atlas-align-box">

![stick_0.png](/images/items/stick_0.png)
->
![oxidized_stick_0.png](/images/items/oxidized_stick_0.png)

</div>

### Put it in resources

Item textures are located in the *items-opaque* subfolder within one or multiple resource folders. First of all, make sure that *build.config* contains at least one resource with the type `resource`:

```json title="build.config"
{
  ...
  "resources": [
    ...
// highlight-start
    {
      "path": "assets/resources/",
      "resourceType": "resource"
    }
// highlight-end
  ]
}
```

This is what part of the contents of the item textures folder in the game looks like:

```text
/assets/resource_packs/vanilla/textures/items
├─ apple.png
├─ apple_golden.png
├─ armor_stand.png
└─ ...
```

The item texture file naming format in Inner Core is slightly different from it: `some_texture_<meta>.png`, where meta is an integer determining the texture variation. Let's leave it at zero.

Created the __items-opaque__ folder in one of the resource folders? Now put the texture with the correct name into it. In the example, the full path would be something like *assets/resources/items-opaque/oxidized_stick_0.png*. Everything is ready!

## Let's register an item

Before doing so, create a file in your mod's working directory (for example, the *dev/* folder) or open an existing script. Do not forget to include it in *.includes* if necessary. We will be working in the *oxidized_stick.js* file.

First, we need to reserve an identifier for ourselves:

```js
IDRegistry.genItemID("oxidized_stick");
```

And now we can create the item itself:

```js
Item.createItem("oxidized_stick", "item.oxidized_stick.name", {
    name: "oxidized_stick", data: 0
}, { stack: 64 });
```

Let's complete the resulting code with a translation, the final version will look like this:

```js title="oxidized_stick.js"
Translation.addTranslation("item.oxidized_stick.name", {
    en: "Oxidized Stick",
    ru: "Окислившаяся палка"
});
IDRegistry.genItemID("oxidized_stick");
Item.createItem("oxidized_stick", "item.oxidized_stick.name", {
    name: "oxidized_stick", data: 0
}, { stack: 64 });
```

### Let's analyze what is happening

Everything starts with creating a translation. This is one of the good practices.

Before creating the item, we generate a numerical identifier for the string one. In the game, it will be represented as `minecraft:item_<identifier>`, in our case `minecraft:item_oxidized_stick`.

And finally, the complex method [Item.createItem](/api/namespace/Item#createItem) is called, here are its parameters:

1. Registered string identifier.
2. Item name; we are not obliged to use the format `item.<identifier>[.<state>].name` here, and could just name the item `"Oxidized Stick"` or `"Окислившаяся палка"`, but then the point of localization is lost.
3. An object representing the texture; the texture is exclusively the file name without extension, subfolders like `assets/resources/category` are not included in it. The meta is our number after the slash at the end.
4. Additional item properties, in this case, we set the standard stack size (the maximum number of items in one inventory or container slot).

:::tip Compose correct identifiers

Game identifiers can describe the material, item type, and property or color in one place. To implement new identifiers, exactly such a sequence should be used, for example `diamond_pickaxe` or `minecart_command_block`. Separate description elements with `_`.

However, there are exceptions like `appleEnchanted`, `muttonCooked`, `muttonRaw`. Item states should be appended at the end of the main identifier with a capital letter.

:::

### Technical Items

By default, any items you create are added to the creative mode inventory. If we need to change the logic of this behavior, for each type of item you can supplement the last registration parameter:

```js
Item.createItem("oxidized_stick", "item.oxidized_stick.name", {
    name: "oxidized_stick", data: 0
}, {
    stack: 64,
// highlight-next-line
    isTech: true
});
```

An example of such a technical item is the dragon egg. It is not in the creative inventory, but it can still be obtained using the `/give` command.

## Let's bind an event

So far we have only created an item, it has no functionality, and is that very useless item from the beginning of the article. Let's turn to callbacks, based on them you can implement most, if not all interaction logic.

The following function will bind the __ItemUse__ callback to the item:

<Tabs groupId="scripting-language">
<TabItem value="js" label="JavaScript">

```js
Item.registerUseFunction("oxidized_stick", function(coords, item, block, playerUid) {
    Entity.addVelocity(playerUid, 0, 0.5 * Math.random(), 0);
});
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts
Item.registerUseFunction("oxidized_stick", (coords, item, block, playerUid) =>
    Entity.addVelocity(playerUid, 0, 0.5 * Math.random(), 0));
```

</TabItem>
</Tabs>

Using an item means clicking it on any block or holding it in the air, such as when eating food. In our case, the stick will supposedly push the player with a random velocity if they use it.

Acceleration is defined in blocks per tick, where there are 20 ticks in one second. That is, the maximum acceleration per second can reach 10 blocks per second (0.5 blocks/sec. * 20 ticks). We will look at acceleration in more detail in the future.

The method is equivalent to calling another method, which registers the event already by numerical identifier:

<Tabs groupId="scripting-language">
<TabItem value="js" label="JavaScript">

```js
Item.registerUseFunctionForID(ItemID.oxidized_stick, function(coords, item, block, playerUid) {
    Entity.addVelocity(playerUid, 0, 0.5 * Math.random(), 0);
});
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts
Item.registerUseFunctionForID(ItemID.oxidized_stick, (coords, item, block, playerUid) =>
    Entity.addVelocity(playerUid, 0, 0.5 * Math.random(), 0));
```

</TabItem>
</Tabs>

The [ItemID](/api#ItemID) object provides numeric identifiers for item identifiers that were created as a result of calling the [IDRegistry.genItemID](/api/namespace/IDRegistry#genItemID) method. For the game, numeric identifiers are exactly the main ones, while string identifiers are displayed in various interfaces and are used by us for convenience.

<details>
    <summary>Why not just use a callback?</summary>
<div>

An option with similar functionality looks like this:

<Tabs groupId="scripting-language">
<TabItem value="js" label="JavaScript">

```js
Callback.addCallback("ItemUse", function(coords, item, block, isExternal, playerUid) {
    if (item.id == ItemID.oxidized_stick) {
        Entity.addVelocity(playerUid, 0, 0.5 * Math.random(), 0);
    }
});
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts
Callback.addCallback("ItemUse", (coords, item, block, isExternal, playerUid) =>
    item.id == ItemID.oxidized_stick && Entity.addVelocity(playerUid, 0, 0.5 * Math.random(), 0));
```

</TabItem>
</Tabs>

Here is a list of additional checks that the [Item.registerUseFunction](/api/namespace/Item#registerUseFunction) function performs before invoking your event:

1. It checks whether the block is a tile entity, we will look at them later, the main thing here is just to know that they can interrupt the further invocation of the event.
2. If the block has an interface (for example, a crafting table or chest was opened), the event will be stopped.
3. If the interface didn't open or the player is sneaking (in this case the interface doesn't open) the event will be called.

If registering a callback, these checks will have to be implemented independently, so we did not use direct registration of this callback in the example. And do not forget to check the identifier, the callback is called when any item is used.

</div>
</details>
