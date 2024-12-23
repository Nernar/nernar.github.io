# Defining blocks and items in Java

The main target of KernelExtension update `RELEASE 4.0` was to create an opportunity for the mod developers to write their mod's code only on Java (and C++ optionally), without JavaScript/TypeScript.

Using the [innercore_mod_toolchain](https://github.com/DMHYT/innercore-mod-toolchain), you can easily develop your mod partially on Java. _**Partially**_ is the keyword. A lot of Inner Core's main features are made purely for JavaScript development, some of them are even implemented directly in JS code.

One of those _JavaScript-only_ features in Inner Core is the registration of custom blocks and items. KernelExtension starting from `RELEASE 4.0` solves that problem, now you can easily and conveniently register new blocks and items without needing to write any JavaScript/TypeScript code.

## Creating elementary blocks and items

The base Java class for the custom block is `vsdum.kex.japi.blocks.Block`.
The base Java class for the custom item is `vsdum.kex.japi.items.Item`.

They are both non-abstract, so you can create a new primitive block or item without declaring your own class inherited from the base one. For example:

```java
package visualstudiodan.kextest;

import vsdum.kex.japi.blocks.Block;
import vsdum.kex.japi.items.Item;

public class TestKEXDependentMod {

    public static void main(String[] args)
    {
        int testBlockID = new Block("my_block").getId();
        int testItemID = new Item("my_item").getId();
    }

}
```

## The registry

Apart from the initialization of the object of a block or an item, you must **register** it using the corresponding registry module (`vsdum.kex.japi.blocks.BlockRegistry` for blocks and `vsdum.kex.japi.items.ItemRegistry` for items).

So to already have one new block and one new item in the game, the code above must look like this:

```java
package visualstudiodan.kextest;

import vsdum.kex.japi.blocks.Block;
import vsdum.kex.japi.blocks.BlockRegistry;
import vsdum.kex.japi.items.Item;
import vsdum.kex.japi.items.ItemRegistry;

public class TestKEXDependentMod {

    public static void main(String[] args)
    {
        int testBlockID = BlockRegistry.register(new Block("my_block")).getId();
        int testItemID = ItemRegistry.register(new Item("my_item")).getId();
    }

}
```

## Setting essential properties

### _**Blocks**_

The `Block` class has `addVariation(variationJson)` method to set texture, displayed name and visibility of a single block variation (one block can have up to 16 variations), and `setDefineData(variationsJsonArr)` to set the whole description array for all of the block's variations. The variation JSON object must have the same format as the [BlockVariation](/api/namespace/Block#BlockVariation) interface used in Inner Core's JS method [Block.createBlock](/api/namespace/Block#createBlock).

```java
new Block("my_block")
    .addVariation(new JSONObject()
        .put("name", "My Block")
        .put("texture", new JSONArray()
            .add(new JSONArray()
                .put("my_block")
                .put(0)))
        .put("inCreative", true));

new Block("my_other_block")
    .setDefineData(new JSONArray()
        .put(new JSONObject()
            .put("name", "My Block 2")
            .put("texture", new JSONArray()
                .add(new JSONArray()
                    .put("my_other_block")
                    .put(0))
                .add(new JSONArray()
                    .put("my_other_block")
                    .put(1))
                .add(new JSONArray()
                    .put("my_other_block")
                    .put(2)))
            .put("inCreative", true)));
```

Without exaggeration, this solution is extremely bulky and not recommended to use. A much more easy, human-readable and lightweight method to set block's define data is shown [here](json-models.md).

### _**Items**_

Setting textures for items is much less bulkier, there are just `setIcon(iconName[, iconIndex])` and `setDisplayedName(name)` methods in `Item` class.

By the way, calling `setDisplayedName` is optional, as it defaults to `"item.yourItemNameID.name"`. So let's say, you created an item with name ID `"my_item"`, then you just add translation for the key `"item.my_item.name"`.

```java
new Item("my_item")
    .setIcon("my_item"); // icon index is optional and defaults to 0

new Item("my_other_item")
    .setIcon("my_item", 1)
    .setDisplayedName("MOY DRUGOY PREDMET");
```

## Static additional properties

Both `Block` and `Item` classes have a public final field `properties`, which is an object to customize a wide set of additional properties for a block or an item, those properties which are defined as constant values.

You can see all the methods for `BlockProperties` and `ItemProperties` [here](https://github.com/DMHYT/KernelExtension/blob/main/src/java/kernelex/src/vsdum/kex/japi/blocks/BlockProperties.java) and [here](https://github.com/DMHYT/KernelExtension/blob/main/src/java/kernelex/src/vsdum/kex/japi/items/ItemProperties.java) correspondingly. All of these methods return the properties object itself, to write sequential calls.

### _**Example:**_

```java
new Block("my_block")
    .addVariation(new JSONObject()
        .put("name", "My Block")
        .put("texture", new JSONArray()
            .add(new JSONArray()
                .put("my_block")
                .put(0)))
        .put("inCreative", true));
    .properties
        .setDestroyLevel(3)
        .setDestroyTime(5)
        .setLightLevel(15)
        .setSound("metal")

new Item("my_item")
    .setIcon("my_item")
    .properties
        .setAllowedInOffhand(true)
        .setExplodable(false)
        .setFireResistant(true)
        .setGlint(true)
```

`BlockProperties` and `ItemProperties` objects can also be initialized separately from blocks and items, with an empty constructor, or using another properties object as a parent.
To use this separately created object on a block or an item, you need to pass it to the constructor as the second parameter.

```java
BlockProperties TOUGH = new BlockProperties()
    .setDestroyLevel(4)
    .setDestroyTime(10)
    .setExplosionResistance(20);
BlockProperties TOUGH_METAL = new BlockProperties(TOUGH)
    .setSound("metal");

new Block("armatura", TOUGH_METAL);

ItemProperties UNDESTROYABLE = new ItemProperties()
    .setExplodable(false)
    .setFireResistant(true)
    .setShouldDespawn(false);
ItemProperties UNDESTROYABLE_SHINY = new ItemProperties(UNDESTROYABLE)
    .setGlint(true);

new Item("magic_stone", UNDESTROYABLE_SHINY);
```

## Dynamic properties (components)

Blocks and items also have a lot of properties which are defined as functions that can return different results depending on the certain conditions and circumstances.

In order not to poke all of those methods in the base `Block` and `Item` classes, and for you to conveniently choose what dynamic properties you want to use for your block or item, _**the components**_ were made.

The components are interfaces which you will implement in the class of your block or item (therefore you have to create a new class extending the base `Block` or `Item`). All the supported components for blocks and items are located in [vsdum.kex.japi.blocks.components](https://github.com/DMHYT/KernelExtension/tree/main/src/java/kernelex/src/vsdum/kex/japi/blocks/components) and [vsdum.kex.japi.items.components](https://github.com/DMHYT/KernelExtension/tree/main/src/java/kernelex/src/vsdum/kex/japi/items/components) packages correspondingly. Remember that you should implement only the components that are present in these packages, if you implement any other interface in the class of your block or item, it will not have any effect.

### _**Example for a block:**_

```java
package visualstudiodan.kextest;

import vsdum.kex.japi.blocks.Block;
import vsdum.kex.japi.blocks.BlockRegistry;
import vsdum.kex.japi.blocks.components.*;

// ... other imports

public class MyBlock extends Block implements IComparatorSignalEmitter, IRandomTickListener {

    public MyBlock()
    {
        super("my_block");
        // this.addVariation(...), properties, ...
    }

    @Override public int getComparatorSignal(BlockState block, ExtendedBlockSource world, BlockPos pos, Direction side)
    {
        return pos.x % 16;
    }

    private Random rand = new Random();

    @Override public void randomTick(BlockState state, BlockPos pos, ExtendedBlockSource world)
    {
        if(this.rand.nextFloat() <= .2f)
        {
            NativeAPI.clientMessage("My block has random-ticked!");
        }
    }

    static {
        BlockRegistry.register(new MyBlock());
    }

}
```

### _**Example for an item:**_

```java
package visualstudiodan.kextest;

import vsdum.kex.japi.items.Item;
import vsdum.kex.japi.items.ItemRegistry;
import vsdum.kex.japi.items.components.*;

// ... other imports

public class MyItem extends Item implements IHasTooltip, IUsable {

    public MyItem()
    {
        super("my_item");
        this.setIcon("my_item");
    }

    @Override public void onTooltip(ItemStack item, List<String> tooltip, Level level)
    {
        // add something to the tooltip by calling tooltip.add(...)
    }

    @Override public void onUse(BlockPos pos, Direction side, Vec3d vecCoords, ItemStack item, BlockState touchedState, Player player)
    {
        // do something on item use
    }

    static {
        ItemRegistry.register(new MyItem());
    }

}
```

## Conclusion

Basically everything you should know about Inner Core block and item registration in Java using `KEX JAPI`, has already been mentioned above in this article. This system will improve in future KEX updates, new features will be added and the developer experience will get better thanks to your reviews, feature requests and bug reports.
