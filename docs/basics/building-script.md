# Building Scripts

Besides the ability to directly set an executable script, there is often a need to divide the source code into files. As soon as the project starts to contain the first classes, utility functions, and other things that should be separated, working in a single file becomes simply impossible. This is where build files and advanced toolchain settings come to our aid.

## Compiling files

To run files, the `compile` property is used; adding any script to it will result in its execution. We have already considered the description of its element:

```json
{
    "path": "relative path from the folder where build.config is located",
    "sourceType": "launcher, main, custom, preloader or library"
}
```

If you do not know which `sourceType` to choose, consider the [Mod Lifecycle](mod-lifecycle). As already mentioned, the `compile` property specifies the scripts that will be compiled and loaded. For example, *build.config* might look like this:

```json title="build.config"
{
    ...
    "compile": [
        {
            "path": "main.js",
            "sourceType": "main"
        }
    ]
}
```

Which means that the script will be loaded from the current folder from the *main.js* file and will run after `Launch();` is called from the project's launcher. But in this case, the file is not built, but simply loaded from an existing one. What if we want to build multiple files into one?

## There can be any number of scripts

And to build them all, you need to combine the scripts into one. This will be done for you by Inner Core or the toolchain's Type Script Compiler, depending on which platform you use.

Let's start with the fact that for the build, you need to define the `buildDirs` property of your *build.config*:

```json title="build.config"
{
    ...
    "buildDirs": [
        {
            "targetSource": "main.js",
            "dir": "dev/"
        }
    ]
}
```

Now the files located in the *dev/* folder will be built into the *main.js* file, which we have already defined earlier. But in order to determine the scripts that will be built, we also need to define the *.includes* file in the created *dev/* directory.

## .includes

The file describes the list of files that will be included in the final script. Let's look at its implementation using an example:

```gitignore title=".includes"
# comments can describe why a file is included
header.js

api/tests.js
api/globals.js

# all files in the folder will be included, in the case of a toolchain
# subfolders are also additionally included
module/.

// comments can also be used in this form
```

Empty lines and comments are ignored during file building. In this case, at least three files will be included in the script: *header.js*, as well as *tests.js* and *globals.js* in the *api/* folder. The *module/* folder may not exist at all. Non-existent files are ignored, sending a warning to the log.

These same rules apply to the toolchain, but comments in it can contain properties for configuring *tsconfig.json*.

### The power of toolchain comments

Build files in the toolchain, in addition to describing the list of files, can contain descriptions for compiler options, as well as exclusions of files already included in the build:

```gitignore title=".includes"
# removeComments
// checkJs: true

# lib: es6, es2016.array.include

header.js

# very important files
module/.

!module/tests.ts

# target: es3
```

The build will include the *header.js* file and all files from the *module/* folder and its subfolders, excluding *module/tests.ts*. Files are included and excluded only if they exist. Since the toolchain builds *tsconfig.json*, paths can also contain glob selections for files:

```gitignore title=".includes"
module/tile_*.js
```

Thus, the files *module/tile_chest.js* and *module/tile_advanced_workbench.js* will be included, but *module/bounce.js* and *module/tile_bedrock.ts* will not be included.

:::info Compiler options description breakdown

Comments will be excluded from the built script (and from declarations too), Java Script will be checked for type compliance just like Type Script, instead of the latest libraries, only ES6 (ES2015) and `Array.include` from ES2016 will be included, and the output script will be presented in ES3 instead of ES5. If you do not need any of these options or any other, just do not use them.

:::

## Building with a toolchain

Besides describing the build file, the structure above does not apply to the toolchain. The toolchain automatically determines the passed values, determining what needs to be built, a file or a folder. In addition, it supports building using Type Script. To build or compile the desired file, use:

```json title="make.json"
{
    ...
    "sources": [
        {
            "type": "main",
            "source": "dev",
            "language": "typescript",
            "target": "main.js"
        }
    ]
}
```

This will do the same as the `compile` and `buildDirs` properties described earlier; but also, files with the *.ts* extension will be built. Explore the properties of *make.json* for more details.
