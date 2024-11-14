# Kernel Extension

Kernel Extension — a mod-library for Inner Core mod launcher, adding lots of new features for the mod developers, which are not exported by the Inner Core itself to Java and JavaScript API. Latest up-to-date version of library is available for download in [mods browser](https://icmods.mineprogramming.org/mod?id=831).

## Using Kernel Extension shared mod API

You can use Kernel Extension API in two ways.

1. Create a `ModAPICallback` in your mod's main code and access the features from API object provided to you as the first and only parameter of the callback function.

    ```js
    ModAPI.addAPICallback("KernelExtension", function(api) {
        // api parameter is the KEX namespace in KEX API documentation
    });
    ```

2. Create a `ModAPICallback` in the `launcher.js` script of your mod, thus making your mod fully dependent from Kernel Extension mod, because it won't launch while the Kernel Extension mod is not loaded into the modpack. Later, when uploading your mod to [mods browser](https://icmods.mineprogramming.org), you'll have to add `831` to your mod's dependencies.

    ```js
    // launcher.js

    ConfigureMultiplayer({
        name: "KEX-Dependent mod",
        version: "1.0",
        isClientOnly: false
    });

    ModAPI.addAPICallback("KernelExtension", function(api) {
        // checking if getKEXVersionCode function exists in API object, then calling it and checking if the version is applicable for your mod
        if(
            typeof api.getKEXVersionCode === "function" &&
            // in this case checking if the version is 3.0 or higher
            api.getKEXVersionCode() >= 300
        ) {
            // launching the mod adding the API object to its scope
            Launch({ KEX: api });
        }
    });

    // then, in your mod's main code, you'll be able to access the Kernel Extension API using the KEX variable (same as in documentation, so this way is very convenient for TypeScript developers using KEX API declarations)
    ```

## For TypeScript mod developers

If you write your main code in TypeScript and want to get API members hints with all documentation for them,
you have to download the newest declarations file from [innercore-development-cloud](https://github.com/DMHYT/innercore-development-cloud/tree/kex-declarations/) repository and put it into TS declarations directory of your mod project.
