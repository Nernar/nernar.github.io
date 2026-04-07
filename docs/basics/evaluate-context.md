# Execution Context

Defines the space where all your code resides. Variables and constant values, functions, and converted classes are stored here, and future code interactions with the space are performed here.

Each function and object can create its own, so-called "local" space. It is not available from the outside, but values from it can be obtained through the hierarchy below. I think if most of what is written remains unclear, it is time to fix this problem.

## API — Global Context

If in browsers, and other browser-like engines, the main object is the page whose content we modify, then in the case of Inner Core, we interact directly with the game. And for this we need spaces, methods, and classes, which are in the global context.

Inner Core defines several global contexts, each with its own specific goals. For many years, the main one has been Core Engine, since the entire functionality of the launcher is located around it. This context extends the capabilities of another, Adapted Script. It provides purely native methods provided by the game itself, or auxiliary ones for the operation of Core Engine itself. There are also Preloader, used exclusively by the preloader, and Preferences Window API, which was used for the functioning of the workbench, and once for in-game mod settings. Their use is quite specific, so we will not consider them in detail.

```md
- AdaptedScript
    - CoreEngine
- PrefsWinAPI
- Preloader
```

These contexts are used in every script and are described in the `api` properties of your *build.config*.

In the case of Core Engine, it is possible to change the global context, as done, for example, in Ender IO:

```js title="dev/Base/Items/powder.js"
// highlight-malformed-start
Item.createDyeItem = function(id, name, type) {
    IDRegistry.genItemID(id);
    Item.createItem(id, name, {
        name: "item_material_organic_" + type + "_dye"
    }, { stack: 64 });
};
// highlight-malformed-end

Item.createDyeItem("greenDye", "Organic Green Dye", "green");
Item.createDyeItem("blackDye", "Organic Black Dye", "black");
Item.createDyeItem("brownDye", "Organic Brown Dye", "brown");
```

However, think about the consequences, this will change the context in all mods. That is, the `Item.createDyeItem` method can be called from any mod if Ender IO is installed. But in this case, there is also a danger of replacing existing methods or those added with updates. If you need to export something, consider [ModAPI.registerAPI](TODO), it was created specifically for these purposes.

### Global Values

Each context defines its own namespace, access to which can be used to obtain values or perform actions. However, in addition to values in the context, the engine provides built-in values exclusive to each mod individually. These values are the same regardless of which script this space touches. This includes technical values, mod information, and in-game constants.

```js
const MINECRAFT_VERSION = getMCPEVersion();
if (MINECRAFT_VERSION.main == 16) {
    alert("Minecraft " + MINECRAFT_VERSION.str + " is currently relevant!");
    // outputs: Minecraft 1.16.201 is currently relevant!
} else if (MINECRAFT_VERSION.main == 11) {
    alert("Legacy version " + MINECRAFT_VERSION.array.join("-") + " is not relevant for " + __name__);
    // outputs: Legacy version 1-11-4 is not relevant for <mod name>
}
```

The `getMCPEVersion` and `alert` methods here are part of the global API context, while `__name__` is a global value available from any part of the mod. You do not need to think about what properties are available here, they are listed in the API summary and toolchain declarations.

## Script Body

The last and most important step in the formation of your space is the code itself. JavaScript uses Rhino 1.7.7 (partially supporting ES6, however, most of the functionality remained in the ES5 implementation) as the main engine that executes all scripts. The language is interpreted, which means it is processed in real time, or with minimal processing before launch. All code is executed sequentially, and by script body we mean all the code that is contained in the files included in the build.

The script is usually executed once, and any spaces it defines (this can be variables or constants, as well as objects or functions) are activated as a result of events. The content, the logic of your mod is defined in the body, other content is integrated, and everything else that the engine is capable of in principle.

## Restartable Contexts

Considering the life cycle earlier, we superficially introduced __custom__ scripts. Unlike other scripts, this is the only type that can be run any number of times, and in addition, accepts and returns values. Probably, you could have associations with functions if acquaintance with the language once went successfully. But unlike functions, these are still spaces; they work in a new context and store values.

Consider this with an example from Solar Flux Reborn:

```js title="dev/tests.js"
alert(
    runCustomSource("custom.js", {
        THUNDER_MULTIPLIER: 0.4,
        RAIN_MULTIPLIER: 0.6,
        WEATHER: World.getWeather()
    })
);
```

Values passed to the space will be overwritten or created if they do not exist yet. Any constants created in the body of restartable scripts must be set only once. Their repeated modification will cause an error, in which case a simple option would be to place them between `try-catch`.

```js title="custom.js"
let raining = WEATHER.rain / 10;
raining = raining > 0.2 ? (raining - 0.2) / 0.8 : 0;
raining = Math.sin(raining * Math.PI / 2);
raining = 1 - raining * (1 - RAIN_MULTIPLIER);

let thundering = WEATHER.thunder / 10;
thundering = thundering > 0.75 ? (thundering - 0.75) / 0.25 : 0;
thundering = Math.sin(thundering * Math.PI / 2);
thundering = 1 - thundering * (1 - THUNDER_MULTIPLIER);

// Values must still be returned by a function, since
// the script body is not capable of returning anything
(function() {
    return raining * thundering;
})();
```

Depending on weather conditions, the efficiency of solar panels changes, values from the current space are involved. Thus, `runCustomSource("custom.js")` will not change the values and will return the previous result. The context does not change, so the values remain the same.

Modding tools use this type to execute code during the game. Since their space is easily configured and saved between different executions independently of the rest of the mod context, subdividing the main code here was a good idea. A more concrete way to use these scripts simply does not exist. Suggest your ideas where such functionality could be useful.
