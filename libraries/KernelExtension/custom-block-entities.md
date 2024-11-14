# Custom native block entities

Referring to what's said in **_`Defining blocks and items in Java`_** [article](blocks-and-items-in-java.md), if the registration of custom blocks and items is at the first place on the list of important Inner Core features which are unfortunately _JavaScript-only_, the second place on this list is undoubtedly occupied by **the tile entities**.

The **custom native block entities class system** introduced in KEX `RELEASE 4.0` covers two cons of Inner Core's tile entities at the same time, first being impossibility of working with them in Java, and the second being relatively poor performance because of the 100%-JavaScript implementation.

The Java block entities are registered in native code as new types of vanilla tiles (the same way as things like chest, hopper, brewing stand, furnace etc.). Each Java block entity instance is linked to a corresponding native tile object. Minecraft itself calls most of the key methods, while Java object being just a mod-developer-defined set of those methods.

## Defining a custom block entity class

The base Java class for custom native block entities is `vsdum.kex.modules.tileentity.BlockActor`. Despite not having any abstract methods, it is declared as abstract, for you not to set this dummy class as a block entity prototype for some block.

The `BlockActor` constructor takes three **crucial** parameters that you necessarily have to put in the `super` call in the constructor of your custom block entity class.

### _**The most elementary example:**_

```java
package visualstudiodan.kextest;

import vsdum.kex.modules.tileentity.BlockActor;
import vsdum.kex.util.mcmath.BlockPos;

public class MyBlockEntity extends BlockActor {

    public MyBlockEntity(long ptr, int type, BlockPos blockPos)
    {
        super(ptr, type, blockPos);
    }

}
```

## Registering a new block entity type

Next step is registering an auto-generated numeric ID of the block entity type for our new block entity class. We will later use this numeric ID to assign this block entity to a certain block that we want.

`TileEntityModule.registerTileEntityType(typeName, callback)` method takes the unique string identifier of the block entity (traditionally written in snake case) and the function that will be called every time the custom tile is about to be created, and must return the block entity instance object. This function provides you with that three **crucial** parameters mentioned before. The method returns a generated numeric ID of the newly registered block entity type. In order to use it, you have to store this ID somewhere. To my mind, the best practice is a `public static final` field.

The basic example how the tile entity creation callback function should look like:

```java
new TileEntityCreationCallback() {
    @Override public BlockActor create(long ptr, int type, BlockPos pos)
    {
        return new MyBlockEntity(ptr, type, pos);
    }
}
```

Using Java 8 lambda syntax, it will be way less bulky:

```java
(ptr, type, pos) -> new MyBlockEntity(ptr, type, pos)
```

Furthermore, in our case we don't need to do anything but to create the block entity object itself, so we can just refer to our block entity class constructor:

```java
MyBlockEntity::new
```

Finally, here's how we register our new block entity type and store its generated numeric ID in a static field:

```java
public static final int TYPE_ID = TileEntityModule.registerTileEntityType("my_tile", MyBlockEntity::new);
```

## Assigning a block entity to a block

There are two ways to assign your custom block entity type to a certain block. The first way is using `TileEntityModule.registerForBlock(blockID, type)` method.

You can call it either in Java:

```java
public class MyBlock extends Block {

    public MyBlock()
    {
        super("my_block");
        // this.addVariation(...), properties, ...
    }

    static {
        MyBlock registered = BlockRegistry.register(new MyBlock());
        TileEntityModule.registerForBlock(registered.getId(), MyBlockEntity.TYPE_ID);
    }

}
```

... or in JavaScript/TypeScript:

```js
IDRegistry.genBlockID("my_block");
Block.createBlock("my_block", [{...}]);

const TYPE_ID = WRAP_JAVA("visualstudiodan.kextest.MyBlockEntity").TYPE_ID;

KEX.TileEntityModule.registerForBlock(BlockID.my_block, TYPE_ID);
```

The second way, which is exclusive for Java-registered blocks, is implementing the `IHasBlockActor` component:

```java
public class MyBlock extends Block implements IHasBlockActor {

    public MyBlock()
    {
        super("my_block");
        // this.addVariation(...), properties, ...
    }

    @Override public int getTileEntityType()
    {
        return MyBlockEntity.TYPE_ID;
    }

    static {
        BlockRegistry.register(new MyBlock());
    }

}
```

***

You can see the list of the base `BlockActor` class methods [here](https://dmhyt.github.io/kex-docs/api/interfaces/KEX.TileEntityModule.BlockActor.html) or by going directly to [BlockActor.java file in KernelExtension public GitHub repository](https://github.com/DMHYT/KernelExtension/blob/main/src/java/kernelex/src/vsdum/kex/modules/tileentity/BlockActor.java)

Lastly, a new `getCustomBlockEntity` [method](https://dmhyt.github.io/kex-docs/api/classes/KEX.BlockSource.html#getCustomBlockEntity) was added to `ExtendedBlockSource` [class](https://dmhyt.github.io/kex-docs/api/classes/KEX.BlockSource.html), to access the Java instance object of a custom native block entity on given coords, if it's present there.
