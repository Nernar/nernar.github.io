# Что такое экстра?

Как мы знаем, в игре существует множество предметов. И каждый из них может иметь свои данные. Такими предметами являются предметы, которые имеют один и тот же идентификатор, но при этом не могут быть сложены в один стак и чем-то отличаются. Одним из таких предметов является зачарованная книга.

## Для чего нужна?

Представим такую ситуацию. У вас есть магический кристалл, на котором вычерчены древние руны. Поскольку руны хранят информацию, нам нужно, чтобы разные кристаллы хранили в себе разные руны. Чтобы это реализовать, нам и понадобятся данные предметов.

Давайте попробуем создать механику присвоения случайных рун нашему магическому кристаллу. Но что нам для этого нужно? Нам нужно хранилище, куда будут помещены наши данные.

## Внесение данных

ItemExtraData это то, в чём мы и будем хранить наши данные для последующей передачи в поле экстры.
Создадим функцию, добавляющую в список текста наших рун, и список:

```js
const runeList = [];
function addRune(text) {
    runeList.push(text);
}
```

Отлично, теперь мы имеем хранилище. Давайте зарегистрируем для нашего примера несколько текстов

```js
addRune("magic");
addRune("twilight");
addRune("fire");
```

Сделаем функцию, которая будет возвращать экземпляр класса ItemExtraData, содержащий случайную руну из списка;

```js
function giveRandomRune() {
    const index = Math.floor(Math.random() * runeList.length);
    const extraData = new ItemExtraData();
    extraData.putString("rune", runeList(index));
    return extraData;
}
```

Стоит заметить, что ItemExtraData принимает в себя параметр, в который можно передать предыдущие или любые другие данные экстры, чтобы создать экземпляр содержащий эти данные. Однако свои так же можно будет передать, это лишь способ дополнения.

```js
const extraDataOld = new ItemExtraData();
extraDataOld.putString("old_rune", "castle");

const extraDataNew = new ItemExtraData(extraDataOld);
extraDataNew.putString("new_rune", "cave");
```

Что такое putString? Дело в том, что ItemExtraData реализует способ передачи и получения данных класса CompoundTag.
Он позволяет разделять данные на типы, и получать их в зависимости от переданного типа.
Первым аргументом идёт название ключа, вторым значение.
Рассмотрим некоторые способы передачи и получения данных, которые в нём есть:

```js
const extraData = new ItemExtraData();
extraData.getInt("int_key", 10); // вернется целочисленное число по ключу "int_key", либо же 10 если его нет
extraData.getString("string_key", "random_rune"); // вернется строка по ключу "string_key", либо же "random_rune" если ее нет
extraData.getFloat("float_key", 1.1) // вернется число с дробью по ключу "float_key", либо же 1.1 если его нет
extraData.getBoolean("boolean_key", true); // вернется буль по ключу "boolean_key", либо же true если его нет
extraData.getObject("object_key", { fruit: "apple" }); // вернется объект по ключу "object_key", либо же приведенный объект если его нет
extraData.getLong("long_key", 2147483648); // вернется большое число по ключу "long_key", либо же  2147483648 если его нет
```

## Куда передавать?

Ранее мы создали список, где хранятся наши руны, и функцию для получения случайной из списка. Но одного хранилища экстры недостаточно, нам нужно их куда-то передать, чтобы они приобрели вес. Так вот.
Как мы знаем, предметы хранят в себе объект типа ItemInstance:

```ts
interface ItemInstance {
    id: int;
    count: int;
    data: int;
    extra?: ItemExtraData;
}
```

Как мы видим, этот тип хранит в себе идентификатор предмета, его количество, прочность, и данные предмета, если они есть.
Тоесть это описание того, какие данные хранят в себе предметы.
А поскольку мы можем манипулировать этими данными, мы можем использовать любой метод для выдачи предмета, в который можно будет как раз таки передать наши данные.

Давайте реализуем присвоение случайной руны нашему кристаллу после клика им о камень:

```js
Item.registerUseFunctionForID(
    ItemID.magic_crystal,
    function (coords, item, block, player) {
        if (
            block.id == VanillaBlockID.stone &&
            (!item.extra || (item.extra && !item.extra.getString("rune")))
        ) {
            Entity.setCarriedItem(player, item.id, item.count, item.data, giveRandomRune());
        }
    }
);
```

Теперь, при клике кристаллом по камню, кристаллу присвоится случайная руна, если руна не была присвоена ранее.

## Получение данных

Мы присвоили кристаллу руну, но что, если нам понадобится получить содержимое этой руны?
В таком случае, в классе предусмотрены методы по получению данных в зависимости от типа:

```js
const extraData = new ItemExtraData();
extraData.getInt("int_key", 10); //мы получаем число, и если его нет, то получим 10
extraData.getString("string_key", "random_rune"); //мы получаем строку, если её нет, то получим "random_rune"
extraData.getFloat("float_key", 1.1); //мы получаем число с десятичной частью, если его нет, то получим 1.1
extraData.getBoolean("boolean_key", true); //мы получаем булевое значение, если его нет, то получим true
extraData.getObject("object_key", { fruit: "apple" }); //мы получаем объект с данными, если его нет, то получим {fruit: "apple"}
extraData.getLong("long_key", 10000); //мы получаем число вида long, если его нет, то получим 10000
```

Важно заметить, что второй аргумент необязателен, и если его не будет и значения ключа тоже, то вернётся null.

Давайте улучшим нашу функцию, и если экстра будет отсутствовать, выведем значение в чат.

```js
Item.registerUseFunctionForID(
    ItemID.magic_crystal,
    function (coords, item, block, player) {
        if (block.id == VanillaBlockID.stone) {
            if (
                !item.extra ||
                (item.extra && !item.extra.getString("rune"))
            ) {
                Entity.setCarriedItem(player, item.id, item.count, item.data, giveRandomRune());
            } else {
                Game.message(
                    "Название руны: " + (item.extra ? item.extra.getString("rune") : "неизвестно")
                );
            }
        }
    }
);
```

## Использование тегов

```mdx-code-block
import NotImplemented from "@site/src/components/NotImplemented"

<NotImplemented />
```
