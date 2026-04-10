# Mod Structure

Before using one of the template creation options, it will probably be an equally important part to familiarize yourself with their contents. First of all, a mod is a folder with a [configuration file *build.config*](#build-and-assembly), which describes the entire process of loading, compiling and building your mod. Let's look at the contents of the entire folder, and first analyze other, but no less important aspects.

:::note What if I want to use a toolchain?

Even if you use a toolchain with a different build structure, studying the contents of a mod built by it will not be superfluous.

:::

## What's in the template

```text
.
├─ .dex (used to store release build files)
├─ dev (main folder with scripts, all code will be placed here)
│  ├─ .includes (list of files to build into main.js)
│  └─ header.js (one of the scripts, usually the header contains copyright)
├─ assets (general folder with resources, their description will be presented later)
│  ├─ resources
│  │  ├─ terrain-atlas
│  │  └─ items-opaque
│  └─ gui
├─ launcher.js (script that will be run during the load phase, executes main.js)
├─ build.config (main build file, adding the files above to the mod)
├─ mod.info (description of the main mod information)
├─ mod_icon.png (icon to display in the browser)
├─ config.json (configuration for storing various settings)
└─ config.info.json (description for settings configuration in the interface)
```

## Visual part

Primarily consists of representing your mod in the browser. Two files are responsible for this at once — *mod.info* and *mod_icon.png*.

### mod.info

Contains the main information that will be used for display: name, authorship, version and description respectively. In fact, it is JSON, usually presented in the same variant:

```json title="mod.info"
{
    "name": "Name me",
    "author": "ICDocs",
    "version": "1.0",
    "description": "Short description, shown only in the mod list, otherwise the full one is loaded from the browser."
}
```

Any properties here are optional, however it is recommended to use them all. The only standard thing for a mod is its name, if it is not in this file, the folder name is used. Spend no more than 10-15 words on the description. Otherwise, it simply will not fit into the mod browser interface.

### mod_icon.png

Icon, preferred size is 192x192 pixels, this is the size most mods and modpacks from other authors are built in. However, you can use any other or change it before publishing.

## Property configuration

Based on two files. This is *config.json* itself for describing properties and optional *config.info.json* for describing the display of configuration in the interface. In fact, property configuration is settings. You will be able to use them from anywhere in your code.

### config.json

Will be created by the launcher itself if it does not already exist. By default it contains only one property:

```json title="config.json"
{
  "enabled": true
}
```

The `enabled` property determines whether the mod is enabled and whether its code needs to be executed. Even if the mod is disabled, its resources will still be loaded. You can find out more in the [Mod Lifecycle](mod-lifecycle) article.

<details>
<summary>But why do we need a file for one property?</summary>
<div>

Well, let's look at a real example. This is what the configuration of the Gravitation Suite mod by Mine Explorer looks like:

```json title="config.json"
{
    "enabled": true,
    "change_quantum_suit_recipe": true,
    "change_iridium_drill_recipe": true,
    "energy_text": {
        "pos": "right",
        "scale": 135,
        "y": 30
    }
}
```

Each property is requested by the mod itself, and settings are made through the mod browser interface. Convenient, isn't it? We will analyze the use of configurations in more detail very soon.

</div>
</details>

### config.info.json

The file describes the visualization of configuration in the interface, each property can be hidden, translated into different languages, limited or supplemented with a description. For example, you can create a file with the following content:

```json title="config.info.json"
{
    "properties": {
        "enabled": {
            "name": {
                "en": "Launch",
                "ru": "Launch"
            },
            "description": "Should the mod be launched"
        }
    }
}
```

The use of this file and configurations is presented in another article.

## Build and assembly

The *build.config* configuration file is subdivided into a hierarchy of objects within itself. Here is a complex example from the Vampirism mod by redbad:

<Tabs lazy>
<TabItem value="structure" label="Mod Structure">

```text
Vampirism
├─ assets
│  ├─ res
│  │  ├─ ...
│  │  ├─ items-opaque
│  │  └─ terrain-atlas
│  └─ gui
├─ dev
│  ├─ ...
│  ├─ translation.js
│  └─ .includes
├─ lib
├─ minecraft_packs
│  ├─ resource
│  │  └─ vampirism
│  │     └─ ...
│  └─ behavior
├─ java
│  └─ scales
│     ├─ classes.dex
│     └─ manifest
├─ native
│  └─ scales
│     ├─ so
│     │  └─ armeabi-v7
│     │     └─ libscales.so
│     └─ manifest
├─ ...
├─ launcher.js
└─ build.config
```

</TabItem>
<TabItem value="config" label="build.config">

```json
{
    "defaultConfig": {
        "buildType": "develop",
        "api": "CoreEngine",
        "libraryDir": "lib/",
        "resourcePacksDir": "minecraft_packs/resource",
        "behaviorPacksDir": "minecraft_packs/behavior"
    },
    "resources": [
        {
            "path": "assets/res/",
            "resourceType": "resource"
        },
        {
            "path": "assets/gui/",
            "resourceType": "gui"
        }
    ],
    "buildDirs": [
        {
            "dir": "dev/",
            "targetSource": "main.js"
        }
    ],
    "compile": [
        {
            "path": "main.js",
            "sourceType": "mod"
        },
        {
            "path": "launcher.js",
            "sourceType": "launcher"
        }
    ],
    "javaDirs": [
        {
            "path": "java/scales"
        }
    ],
    "nativeDirs": [
        {
            "path": "native/scales"
        }
    ]
}
```

</TabItem>
</Tabs>

Below are most of the available properties. Each of them serves to describe the build and compilation, paths to resources and code, launching and compilation. Let's look at each of them.

### resources

An array containing description objects with the resource type and path to it. In fact, the description is represented by such a prototype:

```json
{
    "path": "relative path from the folder where build.config is located",
    "resourceType": "gui for interfaces or resource in other cases"
}
```

The relative path in all cases is built based on where your *build.config* is located. For example, if it lies in the *mods/Super Stick/build.config* folder, the relative path to the resource folder *mods/Super Stick/assets/resource/* will be *assets/resource/*.

### defaultConfig

The most important properties, the construction of other folders with scripts and their compilation depends on them. Also, the paths to equally important folders are specified here:

```json
{
    "buildType": "develop, changes to release in case of mod compilation; do not change manually",
    "api": "let's stop at the fact that CoreEngine remains the main one for mods",
    "libraryDir": "relative path to the folder with compiled libraries, will be considered separately later",
    "resourcePacksDir": "relative path to the folder with resource packs, exactly as folders, not archives",
    "behaviorPacksDir": "relative path to the folder with behavior packs, exactly as folders, not archives"
}
```

Usually changed only when creating a mod, as it sets the basic properties for the entire build.

### compile

Directly the scripts that should be loaded or "compiled". What does compiled mean? Converted into a readable form for the device, in bytecode. Let's stop at the fact that here you can define two main scripts: startup and the mod itself. The description inclines to the following form:

```json
{
    "path": "relative path from the folder where build.config is located",
    "sourceType": "launcher for launch, main for the mod itself, or, for example, custom"
}
```

### buildDirs

Folders with scripts that need to be "built" from several files into one. The chosen folder must contain the *.includes* file, it is the one that describes the order and list of files to assemble. Folder description object:

```json
{
    "dir": "relative path from the folder where build.config is located",
    "targetSource": "output file of the built script, for example, main.js"
}
```

The output file can be subsequently used in [compile](#compile), of course, you can just build a file and do nothing more with it, but does this make sense. Build files will be described in the following articles.

### native- and javaDirs

Exclusively paths to folders from where C++ and Java code will be loaded (optionally and built), respectively. The only available property is presented in this form:

```json
{
    "path": "relative path from the folder where build.config is located"
}
```

<!--
:::info Furthermore

The basic properties are presented here, perhaps you also want to familiarize yourself with the list of all properties in the [API description](TODO).

:::
-->
