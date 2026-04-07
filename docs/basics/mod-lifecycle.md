# Mod Lifecycle

It usually begins before the game starts; at this moment, the mod announces its existence to the launcher and performs a list of procedures necessary for the user. Now we will look at the full cycle from this moment to the closing of the game, what happens in the mod during various events, and how it can affect the gameplay.

## Let's Start with Startup

And no, not the mod startup. The entire cycle begins with the launcher startup. As soon as we click the __Play__ button, Inner Core searches for mods, collects their scripts, and determines the list of resources to load. At this moment, the game does not yet know that it will be launched, and mods do not interact with the user in any way.

But then, what is interesting about this stage? We can define the list of resources that will be loaded. It is desirable to do this exactly before the game starts so that everything loads correctly during its launch. And the coolest thing is that this process is completely under our control.

### Should the Mod be Launched?

The engine is capable of ignoring mod startup if necessary; this happens if the `enabled` property of their configuration is currently `false`. Resources, however, will be loaded before startup, although preloader scripts will not be executed. Keep this in mind when designing mods dependent on others (they are also called addons, not to be confused with behavior packs).

### Preloader

Allows performing any manipulations with your mod's resources before the game loads, executed under scripts with the eponymous type __preloader__. The following example is created based on the BetterQuesting library:

```js
const recolorBitmap = (function() {
    let canvas = new android.graphics.Canvas();
    let paint = new android.graphics.Paint();
    return function(bitmap, color) {
        let source = android.graphics.Bitmap.createBitmap(
            bitmap.getWidth(),
            bitmap.getHeight(),
            android.graphics.Bitmap.Config.ARGB_8888
        );
        canvas.setBitmap(source);
        paint.setColorFilter(new android.graphics.PorterDuffColorFilter
            (color, android.graphics.PorterDuff.Mode.SRC_ATOP)
        );
        canvas.drawBitmap(bitmap, 0, 0, paint);
        return source;
    };
})();

let bitmap = android.graphics.BitmapFactory.decodeFile(
    new java.io.File(__dir__, "template/leaves.png")
);
bitmap = recolorBitmap(bitmap, android.graphics.Color.BLUE);
bitmap.compress(android.graphics.Bitmap.CompressFormat.PNG, 100, new java.io.FileOutputStream(
    new java.io.File(__dir__, "assets/resources/leaves_blue_0.png")
));
```

The image will be recolored to blue using a mask; in general, the example is quite complex, do not be intimidated by the size of the code here in advance. Let's say that the main function of these scripts is resource transformation, for example, recoloring foliage or a large number of uniform textures, as well as changing the size of existing interface elements.

:::warning Cache Textures Once

And update them only when required, do not force users to wait for your mod to build if it is not actually needed.

:::

## The Game Has Loaded

This is the next step that we can control. Between the transition from the Horizon screen to the full game load, only mod resources are loaded and native initialization of our engine capabilities occurs. This is quite enough. A loading screen is displayed if enabled, and the main thing happening with mods is the launch of __launcher__ scripts.

### Launcher

And by launcher we mean the script type of the same name. At this moment we must decide what to do with the mod: we can either launch the main script or do nothing, for example, in case a library necessary for the mod was not loaded. Multiplayer settings are also defined here; mods can be both client-side and server-side.

In most cases, *launcher.js* of the following content will be quite sufficient:

```js title="launcher.js"
ConfigureMultiplayer({
    name: "Call me",
    version: "auto",
    isClientOnly: false
});

Launch();
```

Before launching the rest of the mod, we pre-defined information about it in multiplayer. Thus, Inner Core and other mods will be able to identify your mod. Do not change the `name` property if it has already been set once! The `version` property contains the value `"auto"`, which means that the value will be obtained directly from *mod.info*. In case `isClientOnly: true`, defining other properties is not required.

<!-- TODO -->

The launcher is also an excellent place to conduct a number of optimizations, let's look at a few. We will use the [tick event](TODO) to ensure stable operation of the world and its updates:

```js
Callback.addCallback("LocalTick", function() {
    while (true) {
        // perform optimization
    }
});
```

The `while (true)` construction ensures RAM cleaning, reducing the load on the device. A more advanced option would be to clear the cache as well, but then you need to use the garbage collector:

```js
Callback.addCallback("LevelDisplayed", function() {
    runOnClientThread(function() {
        while (true) {
            java.lang.Thread.yield();
        }
    });
})
```

<!-- TODO -->

:::tip We Can Simplify

In general, nothing terrible will happen if you do not use the `name` and `version` properties here. By default, they receive values from the information file, that is, they are in the `"auto"` value. The following code is equivalent to the code above if `name` in *mod.info* is defined as `"Call me"`:

```js title="launcher.js"
ConfigureMultiplayer({
    isClientOnly: false
});

Launch();
```

However, if you plan to frequently update properties in the *mod.info* file, it is recommended to change this script directly. This way we can separate, for example, major versions from frequent updates in repositories.

:::

Do not forget that each mod can be launched only once. Repeated calls to `Launch` will certainly lead to an error.

### Main Scripts

The `Launch()` method of the launcher starts __main__ scripts, we have reached the main logic of the mod. Here new blocks and items are defined and set, recipes and interfaces for them are registered, events await their execution, and subsequent interactions already occur directly in the game.

It is in the context of these scripts that we will work throughout the documentation. It is impossible to single out a separate example here, because the code of each mod is unique in its own way!

## We are Already in the World

All lifecycle scripts have been launched; game events are processed by mods, and mods determine the subsequent cycle of actions for the game environment. And here another type of scripts can come to our aid — independent __custom__. They themselves have no launch conditions, we can call them when necessary. For this, the function `runCustomSource(scriptName[, additionalContext])` is used, it is available from any script of your mod:

```js
alert(
    runCustomSource("custom.js", {
        THUNDER_MULTIPLIER: 0.4,
        RAIN_MULTIPLIER: 0.6,
        WEATHER: World.getWeather()
    })
);
```

We will consider this example in more detail later, but for now it suffices that these scripts are ready to work at any time.

## Conclusion

Perhaps unnoticed by ourselves, we have defined the purpose of most variants of the `sourceType` property of your *build.config*. Take a look at the article [Building and Assembly](TODO) for details. There are several other variants of this property, they are no longer part of the engine lifecycle, but may appear in it if necessary.
