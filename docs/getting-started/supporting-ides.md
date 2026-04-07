# Supporting IDEs

The environment simplifies project development by providing auto-completion, error checking, low-level language compilation, and a whole bunch of features. Writing code in an IDE is much more convenient than using Notepad, although the choice is yours.

## Installing an Environment

### Visual Studio Code

A great option for starting out and getting familiar with environments is [Visual Studio Code](https://code.visualstudio.com/), chosen by most modders and used throughout the life of a modification. Out of the box, we are provided with many languages, improved by various extensions for code analysis, auto-completion, and just comfortable use.

<!-- TODO: Image of the intended environment. -->

Starting with scripts? Congratulations, installing this environment already provides everything you need. Want more complex languages? Then go ahead, [install a few extensions](https://code.visualstudio.com/docs/editor/extension-marketplace):

- [Extension Pack for Java](vscode:extension/vscjava.vscode-java-pack) for working with Java
- [C/C++ Extension Pack](vscode:extension/ms-vscode.cpptools-extension-pack) for working with C/C++

### IntelliJ IDEA

A high-quality alternative can be [IntelliJ IDEA](https://www.jetbrains.com/ru-ru/idea/), which also contains all the necessary tools for working with code. It is important to remember that this is a proprietary product. Additionally, [CLion](https://www.jetbrains.com/ru-ru/clion/) from the IntelliJ developers may come in handy if you need C/C++.

<!-- TODO: Image of the intended environment. -->

### Spck Code Editor

Will you be writing code on the go or just on a mobile device? There are also several options, the most optimal of which is [Spck Code Editor](https://play.google.com/store/apps/details?id=io.spck&hl=ru). You can get auto-completion for scripts, and syntax highlighting will be available in other languages. This is enough to create new content, believe me.

<!-- TODO: Image of the intended environment. -->

We have also prepared [some useful information](https://telegra.ph/Spck-Editor-i-Inner-Core-04-08) in case you encounter difficulties with usage.

## Inner Core Mod Toolchain

First of all, for TypeScript development we will need the TypeScript Compiler (tsc), for Java compilation we need the Java Development Kit (JDK) or at least the Eclipse compiler for Java (ECJ), for C/C++ assembly we need the GNU Compiler Collection (GCC), and simply for sending code to the device from a computer - Android Debug Bridge (ADB). No, you only need [Inner Core Mod Toolchain](https://github.com/zheka2304/innercore-mod-toolchain/blob/master/README-ru.md), everything else will be installed when needed or used automatically.

<!-- TODO: Image of the intended environment. -->

The toolchain serves as an assistant in assembling our projects, offering the user to spend a minimum of time setting up the workspace and devote the remaining time to code.

## Additional Applications

In addition to the main environment, you need to manipulate files, be it textures, structures, and other files necessary for your project. Here is a small list of useful applications, because we, the creators of the documentation, use them too, and most importantly on all types of devices:

| Purpose | Computer | Mobile Device |
| --- | --- | --- |
| File Management | Any built-in explorer | [Installing a File Manager](installing-pack#installing-a-file-manager) |
| Creating Textures | [Adobe Photoshop (Windows)](https://www.adobe.com/ru/products/photoshop.html) <br/> [GNU Image Manipulation Program](https://www.gimp.org/) | [Pixly](https://play.google.com/store/apps/details?id=com.meltinglogic.pixly&hl=ru) |
| Adding Models | [Blockbench](https://www.blockbench.net/) | [Blockbench (browser)](https://web.blockbench.net/) |
| Data Editing | [NBT Studio](https://github.com/tryashtar/nbt-studio) | [Blocktopograph](https://github.com/oO0oO0oO0o0o00/blocktopograph) |
