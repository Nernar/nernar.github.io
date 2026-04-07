# Script Building

In addition to the ability to directly specify an executable script, there is often a need to split the source code into files. As soon as the project starts to contain the first classes, utility functions, and other things that should be separated, working in one file becomes simply impossible. This is where build files come to our aid, as well as advanced toolchain settings.

## Compiling Files

The `compile` property is used to run files; adding any script to it will lead to its execution. We have already considered the description of its element:

```json
{
    "path": "relative path from the folder where build.config is located",
    "sourceType": "launcher, main, custom, preloader or library"
}
```

If you do not know which `sourceType` to choose, consider [Mod Lifecycle](TODO). As already mentioned, the `compile` property defines scripts that will be compiled and loaded. For example, *build.config* might look like this:

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

Which means that the script will be loaded from the current folder from the file *main.js* and will start after calling `Launch();` from the project launcher. But in this case, the file is not built, but simply loaded from an existing one. And what if we want to assemble several files into one?

## There Can Be Any Number of Scripts

And to assemble them all, you need to combine the scripts into one. Inner Core or the Toolchain's TypeScript Compiler will do this for you, depending on which platform you are using.

Let's start with defining the `buildDirs` property of your *build.config* for assembly:

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

Now files located in the *dev/* folder will be assembled into the *main.js* file, which we defined earlier. But to determine which scripts will be assembled, in addition to this, we need to define an *.includes* file in the created *dev/* directory.

## .includes

The file describes the list of files that will be included in the final script. Let's consider its implementation with an example:

```gitignore title=".includes"
# comments can describe why a particular file is included
header.js

api/tests.js
api/globals.js

# all files in the folder will be included, in the case of toolchain
# subfolders are also included additionally
module/.

// comments can also be used in this form
```

Empty lines and comments are ignored when building files. In this case, at least three files will be included in the script: *header.js*, as well as *tests.js* and *globals.js* in the *api/* folder. The *module/* folder may not exist at all. Non-existent files are ignored, sending a warning about this to the log.

These same rules apply to the toolchain, however comments in it can contain properties for configuring *tsconfig.json*.

### The Power of Toolchain Comments

Build files in the toolchain, in addition to describing the list of files, can contain a description for compiler options, as well as exceptions for files already included in the build:

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

The *header.js* file and all files from the *module/* folder and subfolders will be included in the build, excluding *module/tests.ts*. Files are included as well as excluded only if they exist. Since the toolchain builds *tsconfig.json*, paths can also contain glob selections for files:

```gitignore title=".includes"
module/tile_*.js
```

Thus, the files *module/tile_chest.js* and *module/tile_advanced_workbench.js* will be included, but *module/bounce.js* and *module/tile_bedrock.ts* will not be included.

:::info Analysis of compiler option description

Comments will be excluded from the assembled script (and from declarations too), JavaScript will be type-checked just like TypeScript, instead of the latest libraries only ES6 (ES2015) and `Array.include` from ES2016 will be included, and the output script will be presented in ES3 instead of ES5. If you do not need any of these options or any other, just do not use them.

:::

## Building with Toolchain

Apart from the build file description, the structure above does not apply to the toolchain. The toolchain automatically determines the passed values, defining what needs to be assembled, a file or a folder. In addition, it supports building using TypeScript. To assemble or compile the desired file, use:

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

This will do the same as the `compile` and `buildDirs` properties described earlier; but also, files that have the *.ts* extension will be assembled. Study the *make.json* properties for more details.
