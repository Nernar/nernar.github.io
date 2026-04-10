# Supported IDEs

An environment simplifies project development by providing auto-completion, error checking, compilation of low-level languages, and a whole bunch of features. Writing code in an environment is much more convenient than using a notepad, although, however, the choice is entirely yours.

## Installing an Environment

### Visual Studio Code

An excellent option for starting and getting acquainted with environments is [Visual Studio Code](https://code.visualstudio.com/), it is chosen by the majority of modders and used throughout the entire life of the modification. Out of the box, many languages are provided, enhanced by various extensions for code analysis, auto-completion, and just comfortable use.

<!-- TODO: Image of the intended environment. -->

Starting with scripts? Congratulations, installing this environment already provides everything you need. Do you want more complex languages, then go for it, [install a few extensions](https://code.visualstudio.com/docs/editor/extension-marketplace):

- [Extension Pack for Java](vscode:extension/vscjava.vscode-java-pack) for working with Java
- [C/C++ Extension Pack](vscode:extension/ms-vscode.cpptools-extension-pack) for working with C/C++

### IntelliJ IDEA

A quality alternative can be [IntelliJ IDEA](https://www.jetbrains.com/ru-ru/idea/), it also contains all the necessary tools for working with code. It is important to remember that this is a proprietary product. Additionally, [CLion](https://www.jetbrains.com/ru-ru/clion/) from the IntelliJ developers may come in handy, in case you need C/C++.

<!-- TODO: Image of the intended environment. -->

### Spck Code Editor

Are you going to write code on the go or just on a mobile device? There are also several options, the most optimal of which would be [Spck Code Editor](https://play.google.com/store/apps/details?id=io.spck&hl=ru). You can get auto-completion for scripts, and syntax highlighting will be provided in other languages. This is enough to create new content, believe me.

<!-- TODO: Image of the intended environment. -->

We also prepared [some more useful information](https://telegra.ph/Spck-Editor-i-Inner-Core-04-08), in case difficulties arise with use.

## Inner Core Mod Toolchain

First of all, for development in TypeScript we will need the TypeScript Compiler (tsc), compiling Java requires the Java Development Kit (JDK) or at least the Eclipse compiler for Java (ECJ), building C/C++ requires the GNU Compiler Collection (GCC), and simply to send code to the device from a computer, the Android Debug Bridge (ADB). No, you only need the [Inner Core Mod Toolchain](https://github.com/zheka2304/innercore-mod-toolchain/blob/master/README.md), everything else will be installed when needed or used automatically.

<!-- TODO: Image of the intended environment. -->

The toolchain serves as an assistant in building our projects, offering the user to spend a minimum of time setting up the workspace and allocate the remaining time to code.

## Additional Applications

Besides the main environment, you need to manipulate files, these are textures, structures, and other files necessary for your project. Here is a small list of useful applications, because we, the creators of the documentation, also use them, and most importantly on all types of devices:

| Purpose | Computer | Mobile Device |
| --- | --- | --- |
| File Management | Any built-in explorer | [Installing a File Manager](installing-pack#installing-a-file-manager) |
| Creating Textures | [Adobe Photoshop (Windows)](https://www.adobe.com/ru/products/photoshop.html) <br/> [GNU Image Manipulation Program](https://www.gimp.org/) | [Pixly](https://play.google.com/store/apps/details?id=com.meltinglogic.pixly&hl=ru) |
| Adding Models | [Blockbench](https://www.blockbench.net/) | [Blockbench (browser)](https://web.blockbench.net/) |
| Editing Data | [NBT Studio](https://github.com/tryashtar/nbt-studio) | [Blocktopograph](https://github.com/oO0oO0oO0o0o00/blocktopograph) |
