# What is extra?

As we know, there are many items in the game. And each of them can have its own data. Such items are items that have the same identifier, but at the same time cannot be stacked into one stack and differ in some way. One of such items is an enchanted book.

## What is it for?

Imagine this situation. You have a magic crystal with ancient runes engraved on it. Since the runes store information, we need different crystals to store different runes. To implement this, we will need item data.

Let's try to create a mechanic for assigning random runes to our magic crystal. But what do we need for this? We need a storage where our data will be placed.

## Entering data

ItemExtraData is what we will use to store our data for subsequent transfer to the extra field.
Let's create a function that adds to the text list of our runes, and a list:

```js
const runeList = [];
function addRune(text) {
    runeList.push(text);
}
```

Great, now we have a storage. Let's register a few texts for our example:

```js
addRune("magic");
addRune("twilight");
addRune("fire");
```

Let's make a function that will return an instance of the ItemExtraData class containing a random rune from the list;

```js
function giveRandomRune() {
    const index = Math.floor(Math.random() * runeList.length);
    const extraData = new ItemExtraData();
    extraData.putString("rune", runeList(index));
    return extraData;
}
```

It is worth noting that ItemExtraData takes a parameter into which you can pass previous or any other extra data to create an instance containing this data. However, you can also pass your own, this is just a way to supplement.

```js
const extraDataOld = new ItemExtraData();
extraDataOld.putString("old_rune", "castle");

const extraDataNew = new ItemExtraData(extraDataOld);
extraDataNew.putString("new_rune", "cave");
```

What is putString? The fact is that ItemExtraData implements a way to pass and get data of the CompoundTag class.
It allows you to divide data into types, and get them depending on the passed type.
The first argument is the key name, the second is the value.
Let's look at some ways to pass and get data that it has:

```js
const extraData = new ItemExtraData();
extraData.getInt("int_key", 10); // an integer will be returned by the key "int_key", or 10 if it is not there
extraData.getString("string_key", "random_rune"); // a string will be returned by the key "string_key", or "random_rune" if it is not there
extraData.getFloat("float_key", 1.1) // a number with a fraction will be returned by the key "float_key", or 1.1 if it is not there
extraData.getBoolean("boolean_key", true); // a boolean will be returned by the key "boolean_key", or true if it is not there
extraData.getObject("object_key", { fruit: "apple" }); // an object will be returned by the key "object_key", or the given object if it is not there
extraData.getLong("long_key", 2147483648); // a large number will be returned by the key "long_key", or 2147483648 if it is not there
```

## Where to pass?

Earlier we created a list where our runes are stored, and a function to get a random one from the list. But one extra storage is not enough, we need to pass them somewhere so that they gain weight. So.
As we know, items store an object of type ItemInstance:

```ts
interface ItemInstance {
    id: int;
    count: int;
    data: int;
    extra?: ItemExtraData;
}
```

As we can see, this type stores the item identifier, its quantity, durability, and item data, if any.
That is, it is a description of what data items store.
And since we can manipulate this data, we can use any method to give an item, into which we can just pass our data.

Let's implement the assignment of a random rune to our crystal after clicking it on a stone:

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

Now, when clicking a crystal on a stone, a random rune will be assigned to the crystal if a rune has not been assigned previously.

## Getting data

We assigned a rune to a crystal, but what if we need to get the contents of this rune?
In this case, the class provides methods to get data depending on the type:

```js
const extraData = new ItemExtraData();
extraData.getInt("int_key", 10); // we get a number, and if there is none, we get 10
extraData.getString("string_key", "random_rune"); // we get a string, if there is none, we get "random_rune"
extraData.getFloat("float_key", 1.1); // we get a number with a decimal part, if there is none, we get 1.1
extraData.getBoolean("boolean_key", true); // we get a boolean value, if there is none, we get true
extraData.getObject("object_key", { fruit: "apple" }); // we get a data object, if there is none, we get {fruit: "apple"}
extraData.getLong("long_key", 10000); // we get a long type number, if there is none, we get 10000
```

It is important to note that the second argument is optional, and if it is absent and the key value is too, then null will be returned.

Let's improve our function, and if extra is missing, output the value to the chat.

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
                    "Rune name: " + (item.extra ? item.extra.getString("rune") : "unknown")
                );
            }
        }
    }
);
```

## Using Tags

```mdx-code-block
import NotImplemented from "@site/src/components/NotImplemented"

<NotImplemented />
```
