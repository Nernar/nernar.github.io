# Saving Data

Usually certain data is attributed to the world, while others must be unique for each player. This determines which saves and by whom they should be processed. The methods of saving are different, the types of data too, so let's look at the main ones.

## Config

Perhaps the simplest way to process data is a config, or [\_\_config\_\_](/api#__config__). It stores purely client settings and can be changed through the mod browser interface. Earlier, in the [Property configuration](../basics/mod-structure#property-configuration) article, the formats of the *config.json* and *config.info.json* files were considered, now the reading and changing of this data will be considered.

```js
__config__.getBool("change_quantum_suit_recipe"); // true
__config__.getDouble("energy_text.scale"); // 135.0
__config__.getFloat("energy_text.y"); // 30.0
__config__.getInteger("energy_text.scale"); // 135
__config__.getString("energy_text.pos"); // "right"
```

These basic methods allow you to get a specific data type: boolean values, floating or fixed-point numbers, integers, and string values respectively. If the value in the config is missing or does not match the requested type, `false`, `0.0`, `0.0`, `0`, and `null` will be returned in the same order.

Create a separate file or class and load this data once, usually they are updated only at the mod loading stage. Don't know what type of data should be obtained from the config or just want to check if the required value is present? Request a value using the universal method:

```js
__config__.get("energy_text");
```

Regardless of the obtained value, it will be returned in the correct type; if the value contains several others, that is, it is an object, an instance of the config at the specified path will be returned. If there is no value, `null` will be returned as in the case of the absence of a string one.

But after all, we want to not only read, but also change the data:

```js
const ENERGY_OFFSET_Y = Math.min(Math.max(
    __config__.getInteger("energy_text.y"),
    UI.getScreenHeight() - __config__.getInteger("energy_text.scale")
), 0);
__config__.set("energy_text.y", ENERGY_OFFSET_Y);
__config__.save();
```

In this case, we read the integer value `energy_text.y`, and check that it is in the range from 0 to the screen size minus the element size. And right here, we save the value in case it was changed. Consider [config.info.json](../basics/mod-structure#configinfojson) to limit these values in the interface as well.

There can be any number of value setting chains before saving:

```js
__config__.set("energy_text.y", 60);
__config__.set("energy_text.pos", "left");
__config__.set("change_quantum_suit_recipe", false);
__config__.save();
```

Setting a value with a different data type (different from the one existing in the config) is not a problem. And in case the project needs the value anyway, and simply to restore the data, there is:

```js
__config__.checkAndRestore({
    change_quantum_suit_recipe: true,
    energy_text: {
        pos: "right",
        scale: 135,
        y: 30
    }
});
```

This is a good practice to add such an implementation to the code — missing values will be added to the config, and inappropriate data types will be replaced. Saving will be performed automatically.

:::info For each client — their own config

Server settings must be obtained by a packet (if necessary), but sometimes most of the config consists of client settings, such as interface size preferences and so on.

:::

### Additional configs

In most cases, the standard config will be quite enough. But perhaps you need to separate the existing data, create a prototype with standard values, or add unique variations. For this case, the constructor of the [Config](/api/class/Config) class comes in, such a config will not differ from the standard one:

```js
const PROTO_CONFIG = new Config(__dir__ + "config.proto.json");
const GLOBAL_CONFIG = new Config(new java.io.File(__dir__, "config.json"));
```

For example, we can restore a config based on a pre-created prototype:

```js
__config__.checkAndRestore(FileTools.ReadText(
    PROTO_CONFIG.getPath()
));
```

There can be any number of configs, save changes using `config.save()` and update them using `config.reload()`.

## Saves

Saves are used to store a large amount of data or any other in the form of objects. Although the saving of data itself can be registered anywhere, they will be used only on the server side. Data storage happens using [Saver](/api/namespace/Saver) and several methods in it.

```js
Saver.addSavesScope("Mod.Context", function read(data) {
    // actions with data obtained as a result of loading
}, function save() {
    return {
        // some data to save
    };
});
```

Individual data streams are perfectly saved here. The first function is executed during world load to get read data, and the second one is executed repeatedly during the game itself to save them. The returned object to save can contain an unlimited number of nested primitives and arrays, the main thing is that they are inside the object. For this reason, this function saves the "context".

:::warning Refrain from the built-in callback

Earlier, saves on the Core Engine were implemented using the __ReadSaves__ and __WriteSaves__ callbacks respectively, the principles are similar to the [Saver](/api/namespace/Saver) module:

```js
Translation.addTranslation("<Client> Your saves are outdated, it will be rewritten!", {
    ru: "<Клиент> Ваши сохранения устарели, они будут перезаписаны!"
});

Callback.addCallback("ReadSaves", function(data) {
    for (let i = data.notify_legacy_saves; i >= 0; i--) {
        Debug.error(Translation.translate("<Client> Your saves are outdated, it will be rewritten!"));
    }
});

Callback.addCallback("WriteSaves", function(data) {
    data.notify_legacy_saves = Math.floor(Math.random() * 10);
});
```

But, since specifying the saves context allows you to avoid a whole range of problems, such as space already occupied by another mod, or an error in one of the callbacks, do not use this capability in new projects.

:::

Let's return to a small example of fluid storage created in the [Mapping and updates](../blocks/renders/block-renderer#mapping-and-updates) article. We already have a ready `placedTanksByDimension` object containing all the necessary data for saving. In this case, the ready saving variant will look like this:

```js
Saver.addSavesScope("AbstractMod.Tanks", function(data) {
    placedTanksByDimension = data || {};
}, function() {
    return placedTanksByDimension;
});
```

Again, we can check the incoming data, construct the returned object, and turn in any direction of each handler function. Let's add more different data types:

```js
let despawnRange = 64;
let style = "transparent";
let energyExtension = true;

Saver.addSavesScope("AbstractMod", function(data) {
    despawnRange = data.despawn_range || despawnRange;
    style = data.style || style;
    if (data.extensions) {
        energyExtension = data.extensions.energy;
    }
}, function() {
    return {
        despawn_range: despawnRange,
        style: style,
        extensions: {
            energy: energyExtension
        }
    };
});
```

It is advisable to check whether the necessary data exists inside the object before using it.

:::danger The object cannot be missing

In any case, if the save is missing or not set, an empty object will be passed as input data to the reading function. It is not tied to the script, and also does not have any data in it to use. Be careful, as the `data != null` check will not work.

:::

### Instances and classes

When the number of objects exceeds a few pieces, simply storing data in a separately allocated array becomes somewhat chaotic. It is much better to save separate instances of your classes.

Any handler consists of already considered reading, saving functions, and an identifier of the handler itself. The latter is used exactly for registering new instances and ignoring them. Suppose there is a certain `LevitatingAspectItem` class containing information about the current location of a levitating item and an altar tied to it:

```ts
class AspectableAltar extends Altar {
    id: number;
    ...
}

class LevitatingAspectItem {
    altarId: number;
    position: Vector;

    constructor(altar: AspectableAltar) {
        const { id } = altar;
        this.altarId = id;
        this.position = new Vector(0, 0, 0);
        ...
    }

    update() {
        ...
    }
}
```

We can use the previously studied `Saver.addSavesScope`, so maybe register it every time? As soon as the object is no longer relevant, the ritual will be completed, the saving handler will remain. This is obviously not what is necessary here, and there is a better variant:

```ts
class LevitatingAspectItem {
    static saverId = Saver.registerObjectSaver("AbstractMod.LevitatingAspectItem", {
        save: function(instance) {
            const { altarId, position } = instance;
            return { altarId, position };
        },
        read: function(data) {
            const altar = AspectableAltar.resolve(data.altarId);
            if (!altar) return null;
            const aspect = new LevitatingAspectItem(altar);
            aspect.position = data.position;
            return aspect;
        }
    });

    constructor(altar: AspectableAltar) {
        ...
        Saver.registerObject(this, LevitatingAspectItem.saverId);
    }

    ...
}
```

Using the identifier of the created handler, classes will be recreated after the save is loaded. Do not forget to take care of the binding of created objects to the handler, for example, binding to the altar. For the instance to be saved, you need to either do it directly or place it inside another object subject to saving:

```ts
class LevitatingAspectItem {
    static aspects = [];

    constructor(altar: AspectableAltar) {
        if (aspects.indexOf(this) == -1) {
            aspects.push(this);
        }
        ...
    }

    destroy() {
        ...
        let index = aspects.indexOf(this);
        if (index != -1) {
            aspects.splice(index, 1);
        }
        Saver.setObjectIgnored(this, true);
    }

    ...
}
```

It remains only to add saving of the *aspects* array by analogy with the previous part. It is no less important to "unload" objects from the save list, using, for example, *destroy*. Call this method when the class is no longer required, for example, after completing a ritual. This will eliminate future saves of the created instance, it will simply be skipped and its content will not be saved. The property is also preserved during serialization, which will be discussed now.

### Serialization

Serialization allows you to convert structures of varying complexity to a single form, for example, for saving to a file or sending to another client. In fact, any save methods used in this article are serialized upon modification and deserialized for the developer to read data into a language-readable form.

Let's take one of the previous examples, this is how it will look at different stages:

<Tabs lazy>
<TabItem value="code" label="Object in code">

```js
{
    despawn_range: 64,
    style: "transparent" + Math.round(Math.E),
    // The comment will not be serialized
    extensions: {
        energy: true
    }
}
```

</TabItem>
<TabItem value="serialized" label="Serialized">

```js
"{\"despawn_range\":64,\"style\":\"transparent3\",\"extensions\":{\"energy\":true}}"
```

</TabItem>
<TabItem value="deserialized" label="Deserialized">

```js
{
    "despawn_range": 64,
    "style": "transparent3",
    "extensions": {
        "energy": true
    }
}
```

</TabItem>
</Tabs>

Such data is much easier to transfer, save, and load again. The simplest example of such a process could be `JSON.stringify(obj)` as a serializer, just pass an object into it and load it back using the `JSON.parse(str)` deserializer. But this method is suitable only if the object contains primitives like booleans, numbers, and strings.

Let's recall [saving instances of classes](#instances-and-classes), so why did we do this? First of all, `registerObjectSaver` creates a serializer and a deserializer of our data, it processes their receipt and loading. Let's save and load them back, for example to cache objects in a compressed form, manually:

```js
const ASPECTS_FILE = new java.io.File(__dir__, "aspects.bin");

function deflateAspectItems() {
    // The main stage of serialization, pass objects for processing
    let serialized = Saver.serializeToString(LevitatingAspectItem.aspects);
    // For compression and many operations, bytes are needed, not the string itself
    serialized = new java.lang.String(serialized).getBytes();
    // Create a file or clear an existing one by opening it
    ASPECTS_FILE.createNewFile();
    let output = new java.io.FileOutputStream(ASPECTS_FILE);
    // Now let's compress the serialized bytes, this is the deflation process
    output = new java.util.zip.DeflaterOutputStream(output);
    output.write(serialized, 0, serialized.length);
    // Let's close the file and complete the deflation process, data is saved
    try {
        output.close();
    } catch (e) {}
}

Callback.addCallback("WriteSaves", function(data) {
    deflateAspectItems();
});
```

Excellent, aspects are saved to the *aspects.bin* file of the mod folder. Implement their storage in the world folders if necessary, using *\_\_modpack\_\_*. All that remains is to load the aspects, let's use the required callback, processing instances and their creation has already been implemented in the class itself:

```js
function inflateAspectItems() {
    // Let's create an expandable buffer for writing, since data needs to be obtained
    let buffer = new java.io.ByteArrayOutputStream();
    // Let's open the file and create an inflation, or decompression, based on it
    let input = new java.io.FileInputStream(ASPECTS_FILE);
    input = new java.util.zip.InflaterInputStream(input);
    // Prepare a buffer for loading data in parts, you can read everything at once,
    // not using a buffer in principle, but this can cause high memory costs
    let bytes = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
    let offset;
    // Read the file to the end respectively, writing the decompressed data
    while (true) {
        if ((offset = input.read(bytes)) < 0) {
            break;
        }
        buffer.write(bytes, 0, offset);
    }
    try {
        input.close();
    } catch (e) {}
    // Let's restore, or deserialize, the loaded data
    let deserialized = new java.lang.String(buffer.toByteArray());
    LevitatingAspectItem.aspects = Saver.deserializeFromString(deserialized);
}

Callback.addCallback("ReadSaves", function(data) {
    if (ASPECTS_FILE.isFile()) {
        inflateAspectItems();
    }
})
```

If the example seemed complicated, do not worry. Built-in serialization is sufficient in most cases and there is no need to compress a small amount of data, the task of the documentation is only to consider how it works and is supplemented with code.

<details>
<summary>Let's take advantage of compression using the created object.</summary>
<div>

Using a dictionary of 36 characters, consisting of lowercase Latin and numbers, let's perform compression via deflation. Let's generate an object with random values using the dictionary, where the key consists of 8 characters, and the value of 24. Do the task yourself. Let's start by creating a deflation function, everything is simple here:

```js
function deflateBytes(bytes, level) {
    let buffer = new java.io.ByteArrayOutputStream();
    let compressor = new java.util.zip.Deflater(level || -1);
    let deflator = new java.util.zip.DeflaterOutputStream(buffer, compressor);
    deflator.write(bytes, 0, bytes.length);
    deflator.close();
    compressor.end();
    return buffer.toByteArray();
}
```

The *level* argument takes a value from 1 to 9, or -1. The use of a compressor can be omitted, then the default compression level of the device (-1) will be used. Let's load the received data back, let's create a function:

```js
function inflateBytes(bytes) {
    let buffer = new java.io.ByteArrayOutputStream();
    let inflator = new java.util.zip.InflaterOutputStream(buffer);
    inflator.write(bytes, 0, bytes.length);
    inflator.close();
    return buffer.toByteArray();
}
```

On average, we get a compression of 32-36 percent, here is one of the results, the total number of bytes should match your code:

```text
--- Deflation of values {"2fhlxd6l":"54fjkqp4... ---
Default   * 244544/380001 bytes * 35.65 percent
Level 1   * 257828/380001 bytes * 32.15 percent
Level 2   * 256761/380001 bytes * 32.43 percent
Level 3   * 255575/380001 bytes * 32.74 percent
Level 4   * 245735/380001 bytes * 35.33 percent
Level 5   * 245130/380001 bytes * 35.49 percent
Level 6   * 244544/380001 bytes * 35.65 percent <--
Level 7   * 244283/380001 bytes * 35.72 percent
Level 8   * 243486/380001 bytes * 35.92 percent
Level 9   * 243486/380001 bytes * 35.92 percent
```

</div>
</details>

## Other implementations

Some classes intentionally include data saving — such as containers, game objects, tile entities, and others. Data doesn't necessarily have to consist of objects, direct processing of files in a large number of cases is not a problem, the engine provides interfaces for working with them as well. We will consider some of the possibilities in the following articles.
