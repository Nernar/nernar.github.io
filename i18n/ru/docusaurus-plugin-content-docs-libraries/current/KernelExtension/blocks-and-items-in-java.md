# Определение блоков и предметов в Java

Главной целью обновления KernelExtension `RELEASE 4.0` было создание возможности для разработчиков модов писать код своего мода только на Java (и на C++ дополнительно), без JavaScript/Typescript.

Используя [innercore_mod_toolchain](https://github.com/DMHYT/innercore-mod-toolchain), вы можете легко частично разрабатывать свой мод на Java. Ключевое слово - _**частично**_. Множество основных возможностей Inner Core заточены чисто под разработку на JavaScript, некоторые из них имплементированы прямо в JS-коде.

Одна из таких _JavaScript-only_ возможностей в Inner Core — это регистрация кастомных блоков и предметов. KernelExtension начиная с `RELEASE 4.0` решает эту проблему, теперь вы можете легко и удобно регистрировать новые блоки и предметы без необходимости писать какой-либо код на JavaScript/TypeScript.

## Создание элементарных блоков и предметов

Базовый Java-класс для кастомного блока - `vsdum.kex.japi.blocks.Block`.
Базовый Java-класс для кастомного предмета - `vsdum.kex.japi.items.Item`.

Они оба не абстрактные, так что вы можете создать примитивный блок или предмет без объявления своего собственного класса, наследованного от базового. Например:

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

## Регистрация

Помимо инициализации объекта блока или предмета, вы должны **зарегистрировать** его, используя соответствующий модуль регистрации (`vsdum.kex.japi.blocks.BlockRegistry` для блоков и `vsdum.kex.japi.items.ItemRegistry` для предметов).

Итак, для того чтобы уже иметь один новый блок и один новый предмет в игре, код выше должен выглядеть так:

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

## Установка основных свойств

### _**Блоки**_

У класса `Block` есть метод `addVariation(variationJson)` для установки текстуры, отображаемого имени и видимости единственной вариации блока (один блок может иметь до 16 вариаций), и `setDefineData(variationsJsonArr)` для установки всего массива описания всех вариаций блока. JSON-объект вариации должен иметь такой же формат, как интерфейс [BlockVariation](/api/namespace/Block#BlockVariation), используемый в JS-методе Inner Core [Block.createBlock](/api/namespace/Block#createBlock).

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

Без преувеличения, это решение невероятно громоздкое и не рекомендуется к использованию. Гораздо более простой, читабельный и легковесный метод установки данных определения блока показан [здесь](json-models.md).

### _**Предметы**_

Установка текстур для предметов гораздо менее громоздкая, в классе `Item` есть просто методы `setIcon(iconName[, iconIndex])` и `setDisplayedName(name)`.

Кстати, вызов `setDisplayedName` необязателен, так как отображаемое имя по умолчанию устанавливается `"item.yourItemNameID.name"`. Поэтому, скажем, вы создали предмет со строковым ID `"my_item"`, тогда вам просто нужно добавить перевод ключа `"item.my_item.name"`.

```java
new Item("my_item")
    .setIcon("my_item"); // индекс иконки необязателен, по умолчанию 0

new Item("my_other_item")
    .setIcon("my_item", 1)
    .setDisplayedName("MOY DRUGOY PREDMET");
```

## Статические дополнительные свойства

И класс `Block`, и класс `Item` имеют публичное константное поле `properties` - объект для кастомизации широкого набора дополнительных свойств блока или предмета, тех свойств которые устанавливаются как постоянные значения.

Вы можете увидеть все методы `BlockProperties` и `ItemProperties` [здесь](https://github.com/DMHYT/KernelExtension/blob/main/src/java/kernelex/src/vsdum/kex/japi/blocks/BlockProperties.java) и [здесь](https://github.com/DMHYT/KernelExtension/blob/main/src/java/kernelex/src/vsdum/kex/japi/items/ItemProperties.java) соответственно. Все эти методы возвращают сам объект свойств, для написания последовательных вызовов.

### _**Пример:**_

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

Объекты `BlockProperties` и `ItemProperties` также могут быть инициализированы отдельно от блоков и предметов, с помощью пустого конструктора, или используя другой объект свойств как родительский. Чтобы использовать этот отдельно созданный объект на блоке или предмете, нужно передать его в конструктор вторым параметром.

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

## Динамические свойства (компоненты)

Блоки и предметы также имеют множество свойств, которые определяются как функции, возвращающие разные результаты в зависимости от определённых условий и обстоятельств.

Для того, чтобы не совать все те методы в базовые классы `Block` и `Item`, и для того, чтобы вы могли удобнее выбрать, какие динамические свойства вы хотите использовать в своём блоке или предмете, были сделаны _**компоненты**_.

Компоненты — это интерфейсы, которые вы будете имплементировать в классе своего блока или предмета (следовательно, вы должны будете создать новый класс, расширяющий базовый `Block` или `Item`). Все поддерживаемые компоненты блоков и предметов находятся в пакетах [vsdum.kex.japi.blocks.components](https://github.com/DMHYT/KernelExtension/tree/main/src/java/kernelex/src/vsdum/kex/japi/blocks/components) и [vsdum.kex.japi.items.components](https://github.com/DMHYT/KernelExtension/tree/main/src/java/kernelex/src/vsdum/kex/japi/items/components) соответственно. Помните, что вы должны имплементировать только компоненты, которые присутствуют в этих пакетах, если вы имплементируете какой-либо другой интерфейс в классе вашего блока или предмета, это не даст никакого эффекта.

### _**Пример для блока:**_

```java
package visualstudiodan.kextest;

import vsdum.kex.japi.blocks.Block;
import vsdum.kex.japi.blocks.BlockRegistry;
import vsdum.kex.japi.blocks.components.*;

// ... другие импорты

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

### _**Пример для предмета:**_

```java
package visualstudiodan.kextest;

import vsdum.kex.japi.items.Item;
import vsdum.kex.japi.items.ItemRegistry;
import vsdum.kex.japi.items.components.*;

// ... другие импорты

public class MyItem extends Item implements IHasTooltip, IUsable {

    public MyItem()
    {
        super("my_item");
        this.setIcon("my_item");
    }

    @Override public void onTooltip(ItemStack item, List<String> tooltip, Level level)
    {
        // добавьте что-то в тултип, вызвав tooltip.add(...)
    }

    @Override public void onUse(BlockPos pos, Direction side, Vec3d vecCoords, ItemStack item, BlockState touchedState, Player player)
    {
        // сделайте что-то в момент использования предмета
    }

    static {
        ItemRegistry.register(new MyItem());
    }

}
```

## Вывод

По сути всё, что вы должны знать о регистрации блоков и предметов Inner Core в Java, используя `KEX JAPI`, уже было упомянуто выше в этой статье. Эта система будет улучшаться в будущих обновлениях KEX, новые возможности будут добавляться, и опыт разработчиков будет становиться лучше благодаря вашим отзывам, запросам на добавление возможностей и отчётам о багах.
