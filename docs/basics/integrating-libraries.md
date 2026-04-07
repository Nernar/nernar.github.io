# Integrating Libraries

Can be done from any mod script. Libraries extend the capabilities of the game or simplify the creation of existing ones. In addition, you can even isolate part of your code to use it as a library; these are regular scripts whose context will be considered now.

## Including in Compilation

Before a library can be used, it must be included in *build.config*. If the `defaultConfig.libraryDir` property points to an existing folder, all libraries from that folder will be automatically compiled.

Let's look at this using the BlockEngine library as an example. Suppose `defaultConfig.libraryDir = "library/"`, then we must place *BlockEngine.js* in the *library/* folder. In this case, the library will be loaded, which is also equivalent to adding an object to the `compile` property:

```json title="build.config"
{
  "compile": [
    ...
// highlight-start
    {
      "path": "library/BlockEngine.js",
      "sourceType": "library"
    }
// highlight-end
  ],
  ...
}
```

:::warning Libraries in preloader

The `defaultConfig.libraryDir` property is not yet loaded, so simply use the `compile` property to manually include libraries in this loading stage. For example, the Files and Environment libraries together allow you to assemble maps for different versions of the game using simple configuration descriptions.

:::

## Let's Dive into the Script

And consider the context of the BlockEngine library. Any library must begin with the `LIBRARY` method; further code will be executed only when the library is accessed from another script. Consider this function an interrupt, it declares the library metadata and terminates code execution:

```js
LIBRARY({
    name: "Call me",
    version: 1,
    author: "ICDocs",
    api: "CoreEngine",
    shared: false,
    dependencies: []
});
```

We are already familiar with name, version, authorship, and API. However, the version here (unlike *mod.info* and the launcher) is a number. Moreover, strictly an integer. Starting from 1, it must increase with each library update. Thus, after three versions, the property should be defined as `version: 3`. And under no circumstances `version: 1.2`.

The `shared` property determines whether the library is global. Global libraries are loaded once for all mods, while local ones contain only unique data for one specific mod. Use global libraries to create, for example, types of energy.

The `dependencies` array is used to define libraries that must be loaded before this library. Let's first look at the compatibility and export system.

### Exporting

The `EXPORT` method implements functionality for declaring library capabilities. Any values exported by this method can be injected into the script from which the `IMPORT` function is called. Let's analyze the basic functionality of this method:

```js
EXPORT("property", value);
EXPORT("property:version", value);
```

We can declare a property for independent access to it, or add a maximum version restriction to separate outdated methods from the code. For example, here:

```js
let someProperty = "Some value";
EXPORT("someProperty", someProperty);

let somePropertyToBeRenamed = true;
EXPORT("renamedProperty", somePropertyToBeRenamed);

let Language = {
    en: "English",
    ru: "Russian"
};
EXPORT("Language:2", Language);

EXPORT("SOME_CONSTANT", Math.PI * 2);
```

Properties are not required to refer to existing values in the context or have the same names as values, as is done in `EXPORT("someProperty", someProperty)`. However, this is good practice; it will be easier for those who use your library to understand your code.

The `Language` object here will be available only when using the library up to version 2 inclusive. Specifying the version is primarily created to add backward compatibility; the next block reveals its details.

:::danger Using constants

It is not possible in the library body. If you need a constant, export your value immediately or include it in a new local context. Read the article [Execution Context](TODO) for details.

:::

### Backward Compatibility System

Based on separating imported and exported library contexts by versions. Let's consider this using the example of a certain Library:

<Tabs lazy>
<TabItem value="v1" label="Library:1">

```js title="Library.js"
LIBRARY({
    name: "Library",
    version: 1,
    api: CoreEngine,
    shared: true
});

EXPORT("doSomething", function() {
    Logger.Log("Something happened");
});
```

</TabItem>
<TabItem value="v2" label="Library:2">

```js title="Library.js"
LIBRARY({
    name: "Library",
    version: 2,
    api: CoreEngine,
    shared: true
});

EXPORT("doSomething", function() {
    Logger.Log("Something happened");
});
EXPORT("deprecatedMethod", function() {
    Logger.Log("Something else happened");
});
```

</TabItem>
<TabItem value="v3" label="Library:3">

```js title="Library.js"
LIBRARY({
    name: "Library",
    version: 3,
    api: CoreEngine,
    shared: true
});

EXPORT("doSomething", function() {
    Logger.Log("Something new happened");
    Logger.Log("Something else happened");
});
EXPORT("doSomething:1", function() {
    Logger.Log("Something happened, but in the old version");
});
EXPORT("deprecatedMethod:2", function() {
    Logger.Log("deprecatedMethod() is deprecated, use doSomething() instead");
});
```

</TabItem>
</Tabs>

Initially, we only had one method `doSomething`, later we decided to expand capabilities with a new method `deprecatedMethod`. However, with the update to version 3, we realized that the `doSomething` method needs to be globally rethought, and the `deprecatedMethod` added in the previous version is no longer needed at all.

This system allows us to update library capabilities without losing support for old functionality. Please remember this and never delete or globally change methods that have already been implemented once. The only acceptable case is local libraries, as they are unique to each mod.

### Dependencies on Other Libraries

The `dependencies` property in your library header, as mentioned, launches the library only if the necessary libraries are loaded. They are given in the format `"name:version"` or simply `"name"` for the current library version. For example, ModBrowser.Query requires Connectivity to implement its methods:

```js title="ModBrowser.Query.js"
LIBRARY({
    name: "ModBrowser.Query",
    ...
    dependencies: ["Connectivity:1"]
});
IMPORT("Connectivity:1");

ModBrowser = {};
ModBrowser.Query = function () {
    this.query = {};
};
ModBrowser.Query.prototype = new Connectivity.Reader;
...
```

And as you might have noticed, the Connectivity library needs to be imported. Dependencies only determine which libraries must be loaded, but do not import them.

## Moving on to Integration

For this, the `IMPORT` method exists in the context of mod scripts. It searches for libraries in the current mod's repository and accesses the global one only if nothing was found in the local one. For example, let's import ToolType from the BlockEngine library version 8:

```js
IMPORT("BlockEngine:8", "ToolType");
```

Or the entire BlockEngine library namespace of the latest version:

```js
IMPORT("BlockEngine");
```

The last code is actually equivalent to `IMPORT("BlockEngine", "*")`, i.e., import everything. Special object selections for this method are not provided.

Now we can directly access values from the code:

```js
Logger.Log("PICKAXE: " + JSON.stringify(
    ToolType.PICKAXE
), "ToolType");
```

### How Versions Affect Import

First of all, let's determine which library we need. Local or global. Depending on this, the methods for searching for available libraries may differ.

If we do not specify a specific version for importing the library, the latest available one will be used. The latest locally available will be the library in the current mod, while the global one can be located absolutely anywhere.

For global libraries, it is better to always specify the version for import. Not everyone follows backward compatibility conditions and most features may simply not work with old integrations.

If you are creating an addon based on another mod and its libraries respectively, the question arises about including these libraries in the addon. Do not include libraries that you do not actually need. Do not use different versions and make sure that the mod does not have an exported API from the library, otherwise use exactly that.
