---
title: Introduction
---

# :wave: Welcome! Where am I?

On the main page of the documentation for the Inner Core engine, which extends the basic functionality of Minecraft on Android devices. The goal of this site is to teach the possibilities in creating changes for the gameplay — modifications, bring your own idea to the game and simply learn something new.

<!-- TODO: Carousel directly presenting capabilities, simply put — screenshots from the game. -->

```mdx-code-block
import NotImplemented from "@site/src/components/NotImplemented"

<NotImplemented />
```

We will try everything this article consists of, starting from creating an item and ending with technical articles about using shaders and connecting integrations.

The first few articles will help you get to know modifications — mods — closer, learn about self-expression possibilities and simply avoid difficulties at the beginning of your journey. We promise, no code and excessive terms — they will be needed a bit later.

## Capabilities and Limitations

Minecraft is a real cubic sandbox for building anything, anywhere and anytime. Development directions are very abstract and depend only on the player himself, perhaps this is why some players pass by the main game and immediately install [Forge](https://docs.minecraftforge.net/en/latest/gettingstarted/) or [Fabric](https://fabricmc.net/wiki/ru:start).

## What the Course Consists Of

<!-- TODO: This information is subject only to GPT. -->

```mdx-code-block
<NotImplemented />
```

## Comparison with Other Engines

If you already have experience in creating modifications, packs or even maps in the game space, be sure to study this paragraph. Otherwise, you can move on, simply not to load yourself with unnecessary information.

### Behavior Packs

Behavior packs are actively supported by game developers, allowing to create new content using convenient JSON descriptions. The main problem is very scarce possibilities in adding logic to the added content. Using functions, you can create linear logic with simple conditions, but with modern mods this will have a whole range of limitations. Use the capabilities of JavaScript, C++ and Java for various purposes, modifying content in both high- and low-level languages.

:::note Code Structuring

Behavior packs serve as an addition to creating content using modding, but not as its replacement. Implement content in minimal time using resource and behavior packs to describe new elements, simultaneously implementing algorithms using your favorite programming language and ready-made interfaces.

:::

### BlockLauncher

Perhaps one of the best examples in platform similarity is BlockLauncher — it is on its ideas that Inner Core is based. The main difference here is that the set of capabilities of the former is incredibly scant, for years until the end of the development cycle the author was engaged in fixing existing interfaces, and not adding new ones.

Here is some information if the transition is carried out directly from it:

- In addition to the script, a [whole folder with the mod](basics/mod-structure#what-is-in-the-template) appears, now there can be any number of scripts with different execution contexts and a common global space
- Creation of native code (C++) is also carried out in the context of the mod, with simple integrations between JavaScript and Java, the addon technology is outdated, but uses its hooking principles
- Game resources are not necessarily related to the contents of the main folder, each resource is loaded depending on the specified settings in the [configuration file](basics/mod-structure#building-and-assembly)
- Additionally, you can use Java, for example, to optimize world generation or simply use native libraries for Android — there can be any number of libraries themselves
- Nothing needs to be compiled in advance in most cases, the launcher will do everything itself, or you can use [toolchain](#already-familiar-with-modding) for deep configuration

### Forge, Fabric and Similar

The computer edition of the game is in no way connected with the cross-platform Bedrock, they are even written in different languages — Java and C++ respectively. Different teams of developers work on editions, and the code has a heterogeneous structure. Differences between [emulation of Java version](https://pojavlauncherteam.github.io/) and native, native, for the device version are colossal and it makes no sense to compare different platforms.

## Already Familiar with Modding?

The documentation does not spend much time on theory, the main task is to start creating content together with studying articles. Prepare the desired environment, [install the engine](getting-started/installing-pack) and download [Inner Core Mod Toolchain](https://github.com/zheka2304/innercore-mod-toolchain/blob/master/README-ru.md). Use the tabs with sections of this site for more information.
