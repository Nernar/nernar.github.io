# Кастомные нативные блок-энтити

Ссылаясь на сказанное в [статье](blocks-and-items-in-java.md) **_`Определение блоков и предметов в Java`_**, если регистрация кастомных блоков и предметов находится на первом месте в списке самых важных возможностей Inner Core, которые, к сожалению, _JavaScript-only_, второе место в этом списке несомненно занимают **тайл-энтити**.

**Система классов кастомных нативных блок-энтити**, представленная в KEX `RELEASE 4.0`, закрывает сразу два недостатка тайл-энтити Inner Core, первый из которых — это невозможность работать с ними в Java, а второй - относительно низкая производительность из-за 100%-ной JavaScript-реализации.

Java-блок-энтити регистрируются в нативном коде как новые типы ванильных тайлов (таким же образом, как штуки типа сундука, воронки, варочной стойки, печки и т.д.). Каждый экземпляр Java-блок-энтити привязан к соответствующему нативному объекту тайла. Сам Майнкрафт вызывает большинство ключевых методов, в то время как Java-объект является лишь набором этих методов, определённым разработчиком мода.

## Определение класса кастомного блок-энтити

Базовый Java-класс для кастомных нативных блок-энтити - `vsdum.kex.modules.tileentity.BlockActor`. Несмотря на отсутствие абстрактных методов, он объявлён как абстракный класс, для того, чтобы вы не устанавливали этот класс-пустышку как прототип блок-энтити для какого-то блока.

Конструктор `BlockActor` принимает три **ключевых** параметра, которые вы обязательно должны передать в вызов `super` в конструкторе класса вашего кастомного блок-энтити.

### _**Самый элементарный пример:**_

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

## Регистрация нового типа блок-энтити

Следующий шаг - регистрация авто-сгенерированного числового ID типа блок-энтити для нашего нового класса блок-энтити. Мы позже используем этот числовой ID для назначения этого блок-энтити определённому блоку, которому мы хотим.

Метод `TileEntityModule.registerTileEntityType(typeName, callback)` принимает уникальный строковой идентификатор блок-энтити (традиционно написанный в змеином регистре) и функцию, которая будет вызываться каждый раз, когда кастомный тайл собирается быть создан, и должна возвращать объект экземпляра блок-энтити. Эта функция предоставляет вам те самые три **ключевых** параметра, упомянутых ранее. Метод возвращает сгенерированный числовой ID ново-зарегистрированного типа блок-энтити. Для того, чтобы его использовать, вы должны где-то сохранить этот ID. На мой взгляд, лучшая практика это `публичное статичное константное` поле.

Базовый пример как функция калбека создания тайл-энтити должна выглядеть:

```java
new TileEntityCreationCallback() {
    @Override public BlockActor create(long ptr, int type, BlockPos pos)
    {
        return new MyBlockEntity(ptr, type, pos);
    }
}
```

Используя лямбда-синтаксис Java 8, она станет гораздо менее громоздкой:

```java
(ptr, type, pos) -> new MyBlockEntity(ptr, type, pos)
```

Более того, в нашем случае мы не должны дополнительно ничего делать, кроме как создать сам объект блок-энтити, так что мы можем просто сослаться на конструктор нашего класса блок-энтити:

```java
MyBlockEntity::new
```

Наконец, вот как мы зарегистрируем наш новый тип блок-энтити и сохраним его сгенерированный числовой ID в статичном поле:

```java
public static final int TYPE_ID = TileEntityModule.registerTileEntityType("my_tile", MyBlockEntity::new);
```

## Назначение блок-энтити блоку

Есть два способа назначения вашего кастомного типа блок-энтити определённому блоку. Первый способ - используя метод `TileEntityModule.registerForBlock(blockID, type)`.

Вы можете вызвать его либо в Java:

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

... либо в JavaScript/TypeScript:

```js
IDRegistry.genBlockID("my_block");
Block.createBlock("my_block", [{...}]);

const TYPE_ID = WRAP_JAVA("visualstudiodan.kextest.MyBlockEntity").TYPE_ID;

KEX.TileEntityModule.registerForBlock(BlockID.my_block, TYPE_ID);
```

Второй способ, являющийся эксклюзивным для блоков, зарегистрированных через Java - имплементирование компонента `IHasBlockActor`:

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

Вы можете увидеть список главных методов класса `BlockActor` [здесь](https://dmhyt.github.io/kex-docs/api/interfaces/KEX.TileEntityModule.BlockActor.html) или зайдя прямо в [файл BlockActor.java в публичном GitHub-репозитории KernelExtension](https://github.com/DMHYT/KernelExtension/blob/main/src/java/kernelex/src/vsdum/kex/modules/tileentity/BlockActor.java)

Напоследок, новый [метод](https://dmhyt.github.io/kex-docs/api/classes/KEX.BlockSource.html#getCustomBlockEntity) `getCustomBlockEntity` был добавлен в [класс](https://dmhyt.github.io/kex-docs/api/classes/KEX.BlockSource.html) `ExtendedBlockSource`, для получения Java-объекта экземпляра кастомного нативного блок-энтити на данных координатах, если оно там присутствует.
