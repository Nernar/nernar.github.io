# Mod Lifecycle

Usually begins before launching the game, at this moment the mod announces its existence to the launcher and performs a list of necessary procedures for the user. Now we will look at the complete cycle from this moment to closing the game, what happens in the mod during various events and how it can affect the gameplay.

## Let's start with launch

And no, not launching the mod. The entire cycle begins with launching the launcher. As soon as we click the __Play__ button, Inner Core searches for mods, collects their scripts and determines the list of resources to load. At this moment, the game does not yet know that it will be launched, and the mods do not interact with the user in any way at all.

But then, what is interesting about this stage? We can determine the list of resources that will be loaded. It is desirable to do this exactly before launching the game so that everything loads correctly during its launch. And the coolest thing is that this process is completely under our control.

### Is it necessary to launch the mod?

The engine is capable of ignoring the launch of mods if necessary, this happens if the `enabled` property of their configuration is currently `false`. Resources, however, will be loaded before launch, even though the preloader scripts will not be executed. Keep this in mind when designing mods dependent on others (they are also called addons, not to be confused with behavior packs).

### Preloader

Allows you to perform any manipulation with the resources of your mod before loading the game, executed under scripts with the __preloader__ type of the same name. The following example is based on the BetterQuesting library:

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

The image will be recolored blue using a mask; overall the example is quite complex, you shouldn't be intimidated by the code size here beforehand. Let's say that the main function of these scripts is transforming resources, for example, recoloring leaves or a large number of uniform textures, as well as resizing existing interface elements.

:::warning Cache textures once

And update them only when required, do not force users to wait for your mod to build if it is not actually required.

:::

## The game has loaded

This is the next step that we can control. Between the transition from the horizon screen to fully loading the game, only mod resources are loaded and native initialization of our engine capabilities takes place. This is quite enough. The loading screen is displayed if enabled, and the main thing happening with mods is launching __launcher__ scripts.

### Launcher

And by launcher, the script type of the same name is meant. At this point, we must decide what to do with the mod: we can either launch the main script or do nothing, for example, if a library required for the mod was not loaded. This is also where multiplayer settings are defined, mods can be both client-side and server-side.

In most cases, the following content of *launcher.js* will be quite sufficient:

```js title="launcher.js"
ConfigureMultiplayer({
    name: "Name me",
    version: "auto",
    isClientOnly: false
});

Launch();
```

Before launching the rest of the mod, we predefined information about it in multiplayer. Thus, Inner Core and other mods will be able to identify your mod. Do not change the `name` property if it has already been set once! The `version` property contains the value `"auto"`, which means that the value will be obtained directly from *mod.info*. In case `isClientOnly: true`, defining other properties is not required.

<!-- TODO -->

The launcher is also a great place to perform a number of optimizations, let's consider a few. We will use the [tick event](../events/updatables#tick--the-basis-of-updates) to ensure the stable operation of the world and its updates:

```js
Callback.addCallback("LocalTick", function() {
    while (true) {
        // perform optimization
    }
});
```

The `while (true)` construct provides RAM clearing, reducing the load on the device. A more advanced option would be to also clear the cache, but then you need to use the garbage collector:

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

:::tip We can simplify

In general, it will be fine if you do not use the `name` and `version` properties here. By default, they get their values from the information file, meaning they are in the `"auto"` value. The following code is equivalent to the code above, if `name` in *mod.info* is defined as `"Name me"`:

```js title="launcher.js"
ConfigureMultiplayer({
    isClientOnly: false
});

Launch();
```

However, if you plan to frequently update the properties in the *mod.info* file, it is recommended to still modify this script directly. This way we can separate, for example, major versions from frequent updates in repositories.

:::

Do not forget that each mod can only be launched once. Repeated calls to `Launch` will inevitably lead to an error.

### Main scripts

The launcher's `Launch()` method launches __main__ scripts, we have reached the core logic of the mod. This is where new blocks and items are defined and set, recipes and interfaces for them are registered, events await their execution, and subsequent interactions already occur directly within the game.

It is in the context of these scripts that we will work throughout the documentation. It is impossible to single out a separate example here, because the code of each mod is unique in its own way!

## We are already in the world

All lifecycle scripts have been launched; game events are processed by mods, and mods determine the subsequent cycle of actions for the game environment. And here another type of scripts can come to our aid — independent __custom__ ones. They themselves have no launch conditions, but we can call them when necessary. The `runCustomSource(scriptName[, additionalContext])` function is used for this, it is available from any script of your mod:

```js
alert(
    runCustomSource("custom.js", {
        THUNDER_MULTIPLIER: 0.4,
        RAIN_MULTIPLIER: 0.6,
        WEATHER: World.getWeather()
    })
);
```

We will look at this example in more detail later, but for now it is enough that these scripts are ready to work at any time.

## Conclusion

Perhaps imperceptibly to ourselves, but we have decided on the purpose of most of the variants of the `sourceType` property of your *build.config*. Check out the [Build and assembly](mod-structure#compile) article for more details. There are several other options for this property, they are no longer part of the engine's lifecycle, but may appear in it if necessary.
