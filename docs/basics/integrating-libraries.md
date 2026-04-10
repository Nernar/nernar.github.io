# Integrating Libraries

Implemented from any mod script. Libraries expand the capabilities of the game, or simplify the creation of existing ones. In addition, you can even allocate part of your code to use it as a library; these are regular scripts, the context of which will now be considered.

## Inclusion in compilation

Before a library can be used, it must be included in *build.config*. If the `defaultConfig.libraryDir` property points to an existing folder, all libraries from this folder will be automatically compiled.

Let's look at this with the example of the BlockEngine library. Let the property `defaultConfig.libraryDir = "library/"`, then we must place *BlockEngine.js* in the *library/* folder. In this case, the library will be loaded, which is also equivalent to adding the object to the `compile` property:

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

The `defaultConfig.libraryDir` property has not yet been loaded, so just use the `compile` property to manually include libraries in this loading stage. For example, the Files and Environment libraries combined allow you to build maps for different versions of the game using simple description configurations.

:::

## Digging into the script

And let's look at the BlockEngine library context. Any library must begin with the `LIBRARY` method, further code will be executed only when the library is accessed from another script. Consider this function an interrupt, it declares the library metadata and terminates the code execution:

```js
LIBRARY({
    name: "Name me",
    version: 1,
    author: "ICDocs",
    api: "CoreEngine",
    shared: false,
    dependencies: []
});
```

We have already met with the name, version, authorship and API. However, the version here (unlike *mod.info* and the launcher) is a number. Moreover, exclusively an integer. Starting from 1, it should increase with each library update. Thus, after three versions, the property should be defined as `version: 3`. And under no circumstances `version: 1.2`.

The `shared` property determines whether the library is global. Global libraries are loaded for all mods once, while local ones contain only unique data for one specific mod. Use global libraries to create, for example, types of electricity.

The `dependencies` array is used to determine the libraries that must be loaded before this library. Let's first look at the compatibility and export system.

### Exporting

The `EXPORT` method implements the functionality to declare the library's capabilities. Any values exported by this method can be integrated into the script from which the `IMPORT` function is called. Let's break down the basic functionality of this method:

```js
EXPORT("property", value);
EXPORT("property:version", value);
```

We can declare a property for independent access to it, or add a maximum version restriction to separate legacy methods from the code. For example, here:

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

Properties are not required to refer to existing values in the context or have the same names as the values, as is done in `EXPORT("someProperty", someProperty)`. However, this is good practice, it will be easier for those who use your library to understand your code.

The `Language` object here will only be available when using the library up to version 2 inclusive. Version specification is designed primarily to add backward compatibility, the next block details it.

:::danger Using constants

It is not possible to provide in the library body. If you need a constant, immediately export your value or include it in a new local context. Read the [Evaluate Context](evaluate-context) article for details.

:::

### Backward compatibility system

Based on dividing the imported and exported contexts of the library by versions. Let's look at this with the example of a certain Library:

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

Initially, we only had one method `doSomething`, then we decided to expand the capabilities with a new method `deprecatedMethod`. However, with the update to version 3, we realized that the `doSomething` method needs to be globally rethought, and the `deprecatedMethod` added in the previous version is no longer required at all.

This system allows us to update the library's capabilities without losing support for older functionality. Please keep this in mind and never delete or globally alter methods that have already been implemented once. The only valid case is local libraries, as they are unique to each mod.

### Dependencies on other libraries

The `dependencies` property in your library's header, as mentioned, launches the library only if the required libraries are loaded. They are provided in the format `"name:version"` or simply `"name"` for the current library version. For example, ModBrowser.Query requires Connectivity to implement its methods:

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

And as you may have noticed, the Connectivity library needs to be imported. Dependencies only determine the libraries that must be loaded, but do not import them.

## Let's move on to integration

For this, the `IMPORT` method exists in the context of mod scripts. It searches for libraries in the repository of the current mod and accesses the global one only if nothing is found in the local one. For example, we import ToolType from the BlockEngine library version 8:

```js
IMPORT("BlockEngine:8", "ToolType");
```

Or the entire space of the BlockEngine library of the latest version:

```js
IMPORT("BlockEngine");
```

The latter code is practically equivalent to `IMPORT("BlockEngine", "*")`, that is, import everything. There are no special object selections provided for this method.

Now we can directly access the values from the code:

```js
Logger.Log("PICKAXE: " + JSON.stringify(
    ToolType.PICKAXE
), "ToolType");
```

### How versions affect imports

First of all, let's decide which library we need. Local or global. Depending on this, the methods for finding available libraries may differ.

If we do not specify a specific version for importing a library, the latest available one will be used. The latest locally available one will be the library in the current mod, while the global one can be located absolutely anywhere.

It is always better to specify the version to import for global libraries. Not everyone adheres to the conditions of backward compatibility, and most features may simply not work with old integrations.

If you are creating precisely an addon based on another mod and its libraries, respectively, the question arises about including these libraries in the addon. Do not include libraries that you do not actually need. Do not use different versions and make sure the mod does not have an exported API from the library, otherwise use exactly it.
