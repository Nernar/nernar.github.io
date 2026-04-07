# Mod Structure

Before using one of the template creation options, it is probably no less important to familiarize yourself with their contents. First of all, a mod is a folder with a [*build.config* configuration file](#building-and-assembly), which describes the entire process of loading, assembling and building your mod. Let's look at the contents of the entire folder, and first analyze other, but no less important aspects.

:::note What if I want to use toolchain?

Even if you use toolchain with a different build structure, studying the contents of the mod built by it will not be superfluous.

:::

## What is in the Template

```text
.
├─ .dex (used to store release build files)
├─ dev (main folder with scripts, all code will be placed here)
│  ├─ .includes (list of files for building files into main.js)
│  └─ header.js (one of the scripts, usually the header contains copyright)
├─ assets (common folder with resources, their description will be presented later)
│  ├─ resources
│  │  ├─ terrain-atlas
│  │  └─ items-opaque
│  └─ gui
├─ launcher.js (script that will be started at the loading stage, executes main.js)
├─ build.config (main build file adding files above to the mod)
├─ mod.info (description of basic information about the mod)
├─ mod_icon.png (icon for display in the browser)
├─ config.json (configuration for storing various settings)
└─ config.info.json (description for configuring settings in the interface)
```

## Visual Part

Primarily consists of your mod's representation in the browser. Two files are responsible for this at once — *mod.info* and *mod_icon.png*.

### mod.info

Contains basic information that will be used for display: name, authorship, version and description respectively. In fact, it is JSON, usually presented in the same variant:

```json title="mod.info"
{
    "name": "Call me",
    "author": "ICDocs",
    "version": "1.0",
    "description": "Short description, shown only in the mod list, otherwise full is loaded from the browser."
}
```

Any properties here are optional, however it is recommended to use them all. The only standard for a mod is its name, if it is not in this file, the folder name is used. Spend no more than 10-15 words on the description. Otherwise, it simply won't fit into the mod browser interface.

### mod_icon.png

Icon, preferred size 192x192 pixels, most mods and builds from other authors are assembled in it. However, you can use any other or change it before publication.

## Property Configuration

Based on two files. This is *config.json* itself for describing properties and optional *config.info.json* for describing the configuration display in the interface. In fact, property configuration is settings. You can use them from anywhere in your code.

### config.json

Will be created by the launcher itself if it does not exist yet. By default contains only one property:

```json title="config.json"
{
  "enabled": true
}
```

The `enabled` property determines whether the mod is enabled and whether its code needs to be executed. Even if the mod is disabled, its resources will still be loaded. You can learn more in the article [Mod Lifecycle](TODO).

<details>
<summary>But why is a file needed for one property?</summary>
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

The file describes the configuration visualization in the interface, each property can be hidden, translated into different languages, restricted or supplemented with a description. For example, you can create a file with the following content:

```json title="config.info.json"
{
    "properties": {
        "enabled": {
            "name": {
                "en": "Launch",
                "ru": "Запуск"
            },
            "description": "Should the mod be launched"
        }
    }
}
```

Using this file and configurations is presented in another article.

## Building and Assembly

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

Most available properties are described below. Each of them serves to describe building and assembly, paths to resources and code, startup and compilation. Let's consider each of them.

### resources

An array containing description objects with resource type and path to it. In fact, the description is represented by such a prototype:

```json
{
    "path": "relative path from the folder where build.config is located",
    "resourceType": "gui for interfaces or resource in other cases"
}
```

The relative path in all cases is built based on where your *build.config* is located. For example, if it lies in the folder *mods/Super Stick/build.config*, the relative path to the resource folder *mods/Super Stick/assets/resource/* will be *assets/resource/*.

### defaultConfig

The most important properties, the construction of other folders with scripts and their compilation depends on them. Also, paths to no less important folders are indicated here:

```json
{
    "buildType": "develop, changes to release in case of mod compilation; do not change manually",
    "api": "let's stop at the fact that CoreEngine remains the main one for mods",
    "libraryDir": "relative path to the folder with compiled libraries, will be considered separately",
    "resourcePacksDir": "relative path to the folder with resource packs, exactly as folders, not archives",
    "behaviorPacksDir": "relative path to the folder with behavior packs, exactly as folders, not archives"
}
```

Usually changes only when creating a mod, as it sets the main properties for the entire build.

### compile

Directly scripts that must be loaded or "compiled". What does compiled mean? Converted to a device-readable form, in bytecode. Let's stop at the fact that here you can set two main scripts: startup and the mod itself. The description tends to the following form:

```json
{
    "path": "relative path from the folder where build.config is located",
    "sourceType": "launcher for startup, main for the mod itself, or, for example, custom"
}
```

### buildDirs

Folders with scripts that need to be "assembled" from several files into one. An *.includes* file must be located in the selected folder, it describes the order and list of files for assembly. Folder description object:

```json
{
    "dir": "relative path from the folder where build.config is located",
    "targetSource": "output file of the assembled script, for example, main.js"
}
```

The output file can subsequently be used in [compile](#compile), of course, you can simply assemble the file and do nothing more with it, but does this make sense. Build files will be described in subsequent articles.

### native- and javaDirs

Exclusively paths to folders from where C++ and Java code will be loaded (optionally and compiled) respectively. The only available property is presented in this form:

```json
{
    "path": "relative path from the folder where build.config is located"
}
```

<!--
:::info Besides that

Here are presented the main properties, you may also want to familiarize yourself with the list of all properties in the API description.

:::
-->
