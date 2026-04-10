# Food, Armor and Snowballs

Let's superficially look at the basics of each type of items. The syntax of their implementation in most cases coincides with the [standard item creation](first-item#lets-register-an-item), however additional arguments appear for each of them. Examine their description again if necessary. The only difference in registering third-party item types from regular ones is the last argument with parameters. And of course, other types have properties and events unique to them.

:::danger Don't forget about good manners

We will not use localization to make the size of this article smaller, but that doesn't mean you shouldn't use it either.

:::

## Creating throwable items

One of the simplest types, throws an item when used. Imagine a snowball to quickly understand what we mean.

```js
IDRegistry.genItemID("diamond_bullet");
Item.createThrowableItem("diamond_bullet", "Diamond Projectile", {
    name: "diamond", data: 0
}, { stack: 64 });
```

As you can see, the syntax for creating a throwable item is no different from a regular one. However, we can use exclusive events for this type, let's take a closer look at them.

### Beginning and end of a throw

The throw triggers an item use event, it is described in detail in the [example of the previous article](first-item#lets-bind-an-event). However, in the case of this type of item there are a few differences. The event is not triggered by clicking on a block, but only by holding the item as it happens with food.

As soon as our projectile reaches its target, regardless of whether it hit a block or an entity, the __ProjectileHit__ event will be triggered. The only exception is the deletion of the item by the void under the world.

To register the event, we will use a common method:

<Tabs groupId="scripting-language">
<TabItem value="js" label="JavaScript">

```js
Item.registerThrowableFunction("diamond_bullet", function(projectile, item, target) {
    if (target.entity != -1) {
        Entity.damageEntity(target.entity, Entity.getHealth(target.entity), 2);
    }
});
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts
Item.registerThrowableFunction("diamond_bullet", (projectile, item, target) =>
    target.entity != -1 && Entity.damageEntity(target.entity, Entity.getHealth(target.entity), 2));
```

</TabItem>
</Tabs>

If we hit an entity, damage is dealt to it using the [Entity.damageEntity](/api/namespace/Entity#damageEntity) method with as much damage as the entity has health left. That is, a diamond projectile is guaranteed to kill the entity it hits, or nothing will happen and the projectile will simply disappear.

The `projectile` property is the identifier of the entity that was created as a result of throwing the item. Yes, a thrown item becomes an entity, and yes, we will definitely analyze this later.

The `item` property represents our item, it contains its numeric indicator and some data.

The `target` property contains the coordinates of the place where the item hit and the entity identifier if the item hit an entity and not a block.

Like the [Item.registerUseFunction](/api/namespace/Item#registerUseFunction) method, there is a method for this one to process numeric identifiers. Its operation is identical, you can look at [Item.registerThrowableFunctionForID](/api/namespace/Item#registerThrowableFunctionForID) yourself if necessary.

As for the __ProjectileHit__ callback, an identical implementation of the method above would be:

<Tabs groupId="scripting-language">
<TabItem value="js" label="JavaScript">

```js
Callback.addCallback("ProjectileHit", function(projectile, item, target) {
    if (item && item.id == ItemID.diamond_bullet && target.entity != -1) {
        Entity.damageEntity(target.entity, Entity.getHealth(target.entity), 2);
    }
});
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts
Callback.addCallback("ProjectileHit", (projectile, item, target) =>
    item?.id == ItemID.diamond_bullet && target.entity != -1 &&
        Entity.damageEntity(target.entity, Entity.getHealth(target.entity), 2));
```

</TabItem>
</Tabs>

:::info However

We recommend using common functions, they do not require processing a large number of events and will surely satisfy your requirements.

:::

## Creating food

This type of items can be eaten, and as a result, for example, apply an effect.

```js
IDRegistry.genItemID("chicken_nuggets");
Item.createFoodItem("chicken_nuggets", "Chicken Nuggets", {
    name: "chicken_nuggets", data: 0
}, {
    stack: 64,
    food: 1 // amount of hunger restored, in halves
});
```

The only new property `food` is responsible for the amount of hunger restored, and halves are considered the value of the bar. The hunger bar takes values from 0 to 20, where each pair is taken as one unit of the bar. For example, if this property is set to 5, the food will restore 2.5 hunger units. It can also be zero, in which case eating the food will not restore hunger.

But in any case, optional events will be executed.

### When food is eaten

Let's use a callback to detect this event:

<Tabs groupId="scripting-language">
<TabItem value="js" label="JavaScript">

```js
Callback.addCallback("FoodEaten", function(food, saturation, playerUid) {
    let item = Entity.getCarriedItem(playerUid);
    if (item.id == ItemID.chicken_nuggets) {
        Entity.addEffect(playerUid, EPotionEffect.HEALTH_BOOST, 0, 40, false, true);
        Entity.addEffect(playerUid, EPotionEffect.MOVEMENT_SLOWDOWN, 0, 100, false, true);
    }
});
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts
Callback.addCallback("FoodEaten", (food, saturation, playerUid) =>
    Entity.getCarriedItem(playerUid).id == ItemID.chicken_nuggets && (
        Entity.addEffect(playerUid, EPotionEffect.HEALTH_BOOST, 0, 40, false, true),
        Entity.addEffect(playerUid, EPotionEffect.MOVEMENT_SLOWDOWN, 2, 100, false, true)
    ));
```

</TabItem>
</Tabs>

The event provides arguments for the amount of hunger restored, saturation, and the player identifier respectively.

As soon as we eat the newly created item, we will be given a saturation effect for 2 seconds and a level 3 slowness effect for 5 seconds. The effect particles will not be visible to the player, and the time here is given in the number of ticks. Examine the [Entity.addEffect](/api/namespace/Entity#addEffect) function for details.

The item eating event occurs regardless of what item was eaten, new or in-game; so you can bind this event to any food.

## Creating armor

Will require us to get acquainted with another type of resources. Armor textures are unique only to it, it will require knowledge and ability to work with texture unwrapping. First, let's analyze the registration method.

```js
IDRegistry.genItemID("emerald_armor");
Item.createArmorItem("emerald_armor", "Emerald Armor", {
    name: "emerald_armor", data: 0
}, {
    type: "helmet | chestplate | leggings | boots",
    armor: 0, // armor protection coefficient, in halves
    durability: 1, // number of item durability units
    knockbackResist: 0, // knockback resistance, a number between 0 and 1
    // path to the armor texture when it is equipped on a player or entity
    texture: "textures/logo.png"
});
```

This is truly a complex method, but the only necessary options of the last argument are `type` and `texture`. The rest are presented here only as default values. Let's consider each case.

<Tabs>
<TabItem value="helmet" label="Helmet">

```js
IDRegistry.genItemID("emerald_helmet");
Item.createArmorItem("emerald_helmet", "Emerald Helmet", {
    name: "emerald_helmet", data: 0
}, {
    type: "helmet",
    texture: "textures/models/armor/emerald_1.png"
});
```

</TabItem>
<TabItem value="chestplate" label="Chestplate">

```js
IDRegistry.genItemID("emerald_chestplate");
Item.createArmorItem("emerald_chestplate", "Emerald Chestplate", {
    name: "emerald_chestplate", data: 0
}, {
    type: "chestplate",
    texture: "textures/models/armor/emerald_1.png"
});
```

</TabItem>
<TabItem value="leggings" label="Leggings">

```js
IDRegistry.genItemID("emerald_leggings");
Item.createArmorItem("emerald_leggings", "Emerald Leggings", {
    name: "emerald_leggings", data: 0
}, {
    type: "leggings",
    texture: "textures/models/armor/emerald_2.png"
});
```

</TabItem>
<TabItem value="boots" label="Boots">

```js
IDRegistry.genItemID("emerald_boots");
Item.createArmorItem("emerald_boots", "Emerald Boots", {
    name: "emerald_boots", data: 0
}, {
    type: "boots",
    texture: "textures/models/armor/emerald_2.png"
});
```

</TabItem>
</Tabs>

Just like for other items, put armor textures in the __items-opaque__ folder.

<div className="resource-atlas-align-box">

![emerald_helmet_0.png](/images/items/emerald_helmet_0.png)
![emerald_chestplate_0.png](/images/items/emerald_chestplate_0.png)
![emerald_leggings_0.png](/images/items/emerald_leggings_0.png)
![emerald_boots_0.png](/images/items/emerald_boots_0.png)

</div>

It is advisable to place armor textures in the world in the *textures/models/armor* folder, for example in *assets/resources/textures/models/armor*. But since the path can be anything, you can shorten it to *armor* by removing *textures/models*.

### Two textures, four elements

As you may have noticed, the examples above use two textures. These are *emerald_1.png* for the helmet and chestplate, and *emerald_2.png* for the leggings and boots. They use full-fledged unwrappings, and not those clean item textures that you might be used to.

<div className="resource-atlas-align-box">

![emerald_1.png](/images/items/emerald_1.png)
![emerald_2.png](/images/items/emerald_2.png)

</div>

We will not go into detail on creating unwrappings in this tutorial, however no one forbids creating your own based on these same textures. If you are seriously interested in this topic, read a [third-party article](https://www.blockbench.net/wiki/guides/minecraft-style-guide#uv-mapping).

### Is the armor equipped

Depending on this, we can define additional conditions, for example, its protection. Or perhaps you would like to reward the player for acquiring a full set of all armor elements.

To determine if armor is equipped on any entity, the function `Entity.getArmorSlot(entity, slot)` is used, where the slot is defined by one of the values:

```js
EArmorType.HELMET // helmet
EArmorType.CHESTPLATE // chestplate
EArmorType.LEGGINGS // leggings
EArmorType.BOOTS // boots
```

If you need to determine when someone equipped or unequipped armor, it becomes much simpler:

<Tabs groupId="scripting-language">
<TabItem value="js" label="JavaScript">

```js
Armor.registerOnTakeOnListener(ItemID.emerald_boots, function(item, slotId, entityUid) {
   Entity.setMaxHealth(entityUid, Entity.getMaxHealth(entityUid) * 2);
});
Armor.registerOnTakeOffListener(ItemID.emerald_boots, function(item, slotId, entityUid) {
   Entity.setMaxHealth(entityUid, Entity.getMaxHealth(entityUid) / 2);
});
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts
Armor.registerOnTakeOnListener(ItemID.emerald_boots, (item, slotId, entityUid) =>
   Entity.setMaxHealth(entityUid, Entity.getMaxHealth(entityUid) * 2));
Armor.registerOnTakeOffListener(ItemID.emerald_boots, (item, slotId, entityUid) =>
   Entity.setMaxHealth(entityUid, Entity.getMaxHealth(entityUid) / 2));
```

</TabItem>
</Tabs>

In this small example, the maximum health of the entity (including the player) that equipped the boots is doubled, returning to its place if the boots were unequipped. The event in the [Armor.registerOnTakeOnListener](/api/namespace/Armor#registerOnTakeOnListener) method is also called in the case if the entity spawned immediately with this armor.

But what if we really have a dependency on adding health only if the entity equipped a full armor set? In this case, we need to rewrite the code, this is common practice for modding.

### No, we need a set

First of all, let's figure out what we need to understand when an entity equipped the necessary armor attributes. Checks. A lot of checks. But why repeat them in every event, if we can "move" everything into one place? Let's add the checks described earlier:

<Tabs groupId="scripting-language">
<TabItem value="js" label="JavaScript">

```js
function determineThatSetEquipped(entityUid) {
    if (Entity.getArmorSlot(entityUid, EArmorType.HELMET).id == ItemID.emerald_helmet) {
        if (Entity.getArmorSlot(entityUid, EArmorType.CHESTPLATE).id == ItemID.emerald_chestplate) {
            if (Entity.getArmorSlot(entityUid, EArmorType.LEGGINGS).id == ItemID.emerald_leggings) {
                if (Entity.getArmorSlot(entityUid, EArmorType.BOOTS).id == ItemID.emerald_boots) {
                    Entity.setMaxHealth(entityUid, Entity.getMaxHealth(entityUid) * 2));
                }
            }
        }
    }
}

function determineThatSetDequipped(entityUid) {
    if ((Entity.getArmorSlot(entityUid, EArmorType.HELMET).id == ItemID.emerald_helmet) +
        (Entity.getArmorSlot(entityUid, EArmorType.CHESTPLATE).id == ItemID.emerald_chestplate) +
        (Entity.getArmorSlot(entityUid, EArmorType.LEGGINGS).id == ItemID.emerald_leggings) +
        (Entity.getArmorSlot(entityUid, EArmorType.BOOTS).id == ItemID.emerald_boots) == 3) {
            Entity.setMaxHealth(entityUid, Entity.getMaxHealth(entityUid) / 2);
        }
}
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts
const determineThatSetEquipped = (entityUid) =>
    Entity.getArmorSlot(entityUid, EArmorType.HELMET).id == ItemID.emerald_helmet &&
    Entity.getArmorSlot(entityUid, EArmorType.CHESTPLATE).id == ItemID.emerald_chestplate &&
    Entity.getArmorSlot(entityUid, EArmorType.LEGGINGS).id == ItemID.emerald_leggings &&
    Entity.getArmorSlot(entityUid, EArmorType.BOOTS).id == ItemID.emerald_boots &&
    Entity.setMaxHealth(entityUid, Entity.getMaxHealth(entityUid) * 2);

const determineThatSetDequipped = (entityUid) =>
    ((Entity.getArmorSlot(entityUid, EArmorType.HELMET).id == ItemID.emerald_helmet) +
    (Entity.getArmorSlot(entityUid, EArmorType.CHESTPLATE).id == ItemID.emerald_chestplate) +
    (Entity.getArmorSlot(entityUid, EArmorType.LEGGINGS).id == ItemID.emerald_leggings) +
    (Entity.getArmorSlot(entityUid, EArmorType.BOOTS).id == ItemID.emerald_boots) == 3) &&
    Entity.setMaxHealth(entityUid, Entity.getMaxHealth(entityUid) / 2);
```

</TabItem>
</Tabs>

Looks more like hell, doesn't it? However, sequential checks here are one of the best options. After all, if one of the armor elements is not equipped, the function will not be executed at all.

If an entity equips armor, each of its elements is checked sequentially. Only if all armor elements are equipped, health will be increased. To remove health, it is necessary to make sure that exactly three elements are left on the entity. In this case, we can know for sure that the health was increased before.

Well, and let's expand the number of events by adding conditions:

<Tabs groupId="scripting-language">
<TabItem value="js" label="JavaScript">

```js
["emerald_helmet", "emerald_chestplate", "emerald_leggings", "emerald_boots"].forEach(function(which) {
    Armor.registerOnTakeOnListener(ItemID[which], function(item, slotId, entityUid) {
// highlight-next-line
        determineThatSetEquipped(entityUid);
    });
    Armor.registerOnTakeOffListener(ItemID[which], function(item, slotId, entityUid) {
// highlight-next-line
        determineThatSetDequipped(entityUid);
    });
});
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts
["emerald_helmet", "emerald_chestplate", "emerald_leggings", "emerald_boots"].forEach(which => {
    Armor.registerOnTakeOnListener(ItemID[which], (item, slotId, entityUid) =>
// highlight-next-line
        determineThatSetEquipped(entityUid));
    Armor.registerOnTakeOffListener(ItemID[which], (item, slotId, entityUid) =>
// highlight-next-line
        determineThatSetDequipped(entityUid));
});
```

</TabItem>
</Tabs>

We added an enumeration to add checks to each type of armor, think why they should be added specifically to each of them. Otherwise, nothing supernatural is required to determine whether a full set is equipped or not.
