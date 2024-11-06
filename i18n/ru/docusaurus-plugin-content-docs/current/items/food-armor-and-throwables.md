# Еда, броня и снежки

Давайте поверхностно рассмотрим основы каждого типа предметов. Синтаксис их реализации в большинстве случаев совпадает со [стандартным созданием предмета](first-item.md#зарегистрируем-предмет), однако появляются дополнительные аргументы для каждого из них. Изучите их описание еще раз, если это требуется. Единственное отличие в регистрации сторонних от обычного типа предметов — последний аргумент с параметрами. И конечно же, другие типы обладают уникальными для них свойствами и событиями.

:::danger Не забывайте о правилах хорошего тона

Мы не будем использовать локализацию, дабы сделать размеры этой статьи меньше, но это не значит что и вам не стоит использовать ее.

:::

## Создание бросающихся предметов

Один из простейших типов, бросает предмет при его использовании. Представьте себе снежок, чтобы быстрее разобраться что мы имеем ввиду.

```js
IDRegistry.genItemID("diamond_bullet");
Item.createThrowableItem("diamond_bullet", "Алмазный снаряд", {
    name: "diamond", data: 0
}, { stack: 64 });
```

Как можно заметить, синтаксис создания бросающегося предмета ничем не отличается от обычного. Однако, мы можем использовать экслюзивные события для этого типа, рассмотрим их поподробнее.

### Начало и конец броска

Бросок вызывает событие использования предмета, оно подробно расписано в [примере прошлой статьи](first-item.md#привяжем-событие). Однако, в случае этого типа предмета существует несколько отличий. Событие не вызывается от нажатия по блоку, а лишь от удержания предмета как это происходит с едой.

Как только наш снаряд долетит до своей цели, независимо от того ударился ли он о блок или о существо, будет вызвано событие __ProjectileHit__. Единственным исключением является удаление предмета пустотой под миром.

Для регистрации события воспользуемся общим методом:

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

Если мы попадаем существо, ему наносится урон с помощью метода [Entity.damageEntity](/api/modules/Entity.html#damageEntity) с таким количеством урона, сколько здоровья осталось у существа. То есть, алмазный снаряд гарантированно убьет существо в которое попадет, либо ничего не произойдет и снаряд просто исчезнет.

Свойство `projectile` представляет собой идентификатор существа, которое было создано вследствии броска предмета. Да, бросаемый предмет становится существом, и да, мы обязательно разберем это позже.

Свойство `item` представляет наш предмет, в нем содержится его числовой индикатор и некоторые данные.

Свойство `target` содержит координаты места куда попал предмет и идентификатор существа если предмет попал в существо, а не блок.

Как и для метода [Item.registerUseFunction](/api/modules/Item.html#registerUseFunction), для этого метода существует метод уже для обработки числовых идентификаторов. Его работа идентична, можете сами рассмотреть [Item.registerThrowableFunctionForID](/api/modules/Item.html#registerThrowableFunctionForID) при необходимости.

Что же касается калбека __ProjectileHit__, идентичная реализация метода выше будет:

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

:::info Однако

Мы рекомендуем использовать именно общие функции, они не требуют обработки большого количества событий и наверняка удовлетворят ваши требования.

:::

## Создание еды

Такой тип предметов можно съесть, и вследствии этого, например, наложить эффект.

```js
IDRegistry.genItemID("chicken_nuggets");
Item.createFoodItem("chicken_nuggets", "Куриные наггетсы", {
    name: "chicken_nuggets", data: 0
}, {
    stack: 64,
    food: 1 // количество восполняемого голода, в половинках
});
```

Единственное новое свойство `food` отвечает за количество восполняемого голода, а под половинками рассматривается значение шкалы. Шкала голода принимает значения от 0 до 20, где каждая пара принимается за одну единицу шкалы. Например, если это свойство будет задано как 5, еда будет восстанавливать 2.5 единицы голода. Оно может быть и нулем, в таком случае при съедании еды не произойдет восполнения голода.

Но в любом случае будут выполнены опциональные события.

### Когда еда съедена

Используем для обнаружения этого события калбек:

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

Событие предоставляет аргументы количества востановленного голода, насыщения и идентификатора игрока соответственно.

Как только мы съедим только что созданный предмет, нам будут выданы эффект насыщения на 2 секунды и эффект замедления третьего уровня на 5 секунд. Частицы эффекта не будут видны для игрока, а в качестве времени здесь приведено количество тиков. Изучите функцию [Entity.addEffect](/api/modules/Entity.html#addEffect) для получения подробностей.

Событие съедания предмета происходит независимо от того какой предмет был съеден, новый или внутреигровой; так что вы можете привязать это событие к любой еде.

## Создание брони

Потребует от нас познакомиться с еще одним типом ресурсов. Текстуры брони уникальны лишь для нее, она потребует знания и умения работы с разверткой текстур. Прежде, разберем метод регистрации.

```js
IDRegistry.genItemID("emerald_armor");
Item.createArmorItem("emerald_armor", "Изумрудные доспехи", {
    name: "emerald_armor", data: 0
}, {
    type: "helmet | chestplate | leggings | boots",
    armor: 0, // коэффициент защиты брони, в половинках
    durability: 1, // количество единиц прочности предмета
    knockbackResist: 0, // устойчивость к отдаче, число между 0 и 1
    // путь до текстуры брони, когда она надета на игрока или существо
    texture: "textures/logo.png"
});
```

Это действительно комплексный метод, но единственные необходимые опции последнего аргумента - это `type` и `texture`. Остальные представлены здесь лишь как значения по умолчанию. Рассмотрим каждый случай.

<Tabs>
<TabItem value="helmet" label="Шлем">

```js
IDRegistry.genItemID("emerald_helmet");
Item.createArmorItem("emerald_helmet", "Изумрудный шлем", {
    name: "emerald_helmet", data: 0
}, {
    type: "helmet",
    texture: "textures/models/armor/emerald_1.png"
});
```

</TabItem>
<TabItem value="chestplate" label="Нагрудник">

```js
IDRegistry.genItemID("emerald_chestplate");
Item.createArmorItem("emerald_chestplate", "Изумрудный нагрудник", {
    name: "emerald_chestplate", data: 0
}, {
    type: "chestplate",
    texture: "textures/models/armor/emerald_1.png"
});
```

</TabItem>
<TabItem value="leggings" label="Поножи">

```js
IDRegistry.genItemID("emerald_leggings");
Item.createArmorItem("emerald_leggings", "Изумрудные поножи", {
    name: "emerald_leggings", data: 0
}, {
    type: "leggings",
    texture: "textures/models/armor/emerald_2.png"
});
```

</TabItem>
<TabItem value="boots" label="Ботинки">

```js
IDRegistry.genItemID("emerald_boots");
Item.createArmorItem("emerald_boots", "Изумрудные ботинки", {
    name: "emerald_boots", data: 0
}, {
    type: "boots",
    texture: "textures/models/armor/emerald_2.png"
});
```

</TabItem>
</Tabs>

Также как и для остальных предметов, помещайте текстуры для брони в папке __items-opaque__.

<div className="resource-atlas-align-box">

![emerald_helmet_0.png](/images/items/emerald_helmet_0.png)
![emerald_chestplate_0.png](/images/items/emerald_chestplate_0.png)
![emerald_leggings_0.png](/images/items/emerald_leggings_0.png)
![emerald_boots_0.png](/images/items/emerald_boots_0.png)

</div>

Текстуры же брони в мире желательно располагать в папке *textures/models/armor*, например в *assets/resources/textures/models/armor*. Но так как путь может быть любым, вы можете сократить его до *armor*, убрав *textures/models*.

### Две текстуры, четыре элемента

Как вы могли заметить, в примерах выше задействовано две текстуры. Это *emerald_1.png* для шлема и нагрудника, и *emerald_2.png* для понож и ботинок. Здесь используются полноценные развертки, а не те чистые текстуры предметов, к которым вы могли привыкнуть.

<div className="resource-atlas-align-box">

![emerald_1.png](/images/items/emerald_1.png)
![emerald_2.png](/images/items/emerald_2.png)

</div>

Мы не будем подробно рассматривать создание разверток в этом уроке, однако никто не запрещал на основе этих же текстур создать свои собственные. Если же вас серьезно заинтересовала эта тема, прочитайте [сторонюю статью](TODO).

### Надета ли броня

В зависимости от этого мы можем определять дополнительные условия, например, ее защиты. А возможно вы захотите поощрить игрока за приобретение целого сета из всех элементов доспех.

Для определения надета ли броня на какое-либо существо используется функция `Entity.getArmorSlot(существо, слот)`, где слот определяется одним из значений:

```js
EArmorType.HELMET // шлем
EArmorType.CHESTPLATE // нагрудник
EArmorType.LEGGINGS // поножи
EArmorType.BOOTS // ботинки
```

Если же вам нужно определить когда кто-то надел или снял броню, все становится куда проще:

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

В этом небольшом примере максимальное здоровье существа (в том числе и игрока) который надел ботинки увеличивается вдвое, возвращаясь на место если ботинки были сняты. Событие в методе [Armor.registerOnTakeOnListener](/api/modules/Armor.html#registerOnTakeOnListener) вызывается и в том случае, если существо сразу появилось с этой броней.

Но что если у нас и вправду есть зависимость в добавлении здоровья лишь в случае, если существо надело целый сет брони? В таком случае нам нужно переписать код, это обычная практика для моддинга.

### Нет, нам нужен сет

Для начала давайте разберемся что нам нужно, чтобы понять когда существо надело нужные атрибуты брони. Проверки. Много проверок. Но зачем повторять их в каждом событии, если мы можем "вынести" все в одно место? Добавим проверки, описанные ранее:

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

Больше похоже на ад, не так ли? Однако, последовательные проверки здесь один из лучших вариантов. Ведь если один из элементов брони не надет, функция не будет выполнена вообще.

В случае если существо надевает броню, последовательно проверяется каждый из ее элементов. Лишь если все элементы брони надеты, здоровье будет увеличено. Для снятия здоровья необходимо убедится, что на существе осталось именно три элемента. В таком случае мы точно можем узнать, что до этого здоровье было увеличено.

Ну и расширим количество событий, добавив условия:

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

Мы добавили перечисление для добавления проверок к каждому типу брони, подумайте почему они должны быть добавлены именно к каждому из них. В остальном, для определения надет ли полный сет или нет не требуется чего-то сверхестественного.
