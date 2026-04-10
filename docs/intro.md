---
title: Introduction
---

# :wave: Welcome! Where am I?

On the home page of the documentation for the Inner Core engine, which extends the base functionality of Minecraft on Android devices. The task of this site is to teach the capabilities of creating changes to the gameplay — modifications, bringing your own idea to the game, and just learning something new.

<!-- TODO: Carousel directly presenting the capabilities, in other words — screenshots from the game. -->

```mdx-code-block
import NotImplemented from "@site/src/components/NotImplemented"

<NotImplemented />
```

We will try everything that makes up this article, starting from creating an item and ending with technical articles on using shaders and connecting integrations.

The first few articles will help you get to know modifications — mods — better, learn about the possibilities of self-expression, and simply avoid difficulties at the beginning of your journey. We promise, no code and excessive terms — they will be needed a little later.

## Capabilities and limitations

Minecraft is a real cubic sandbox for building anything, anywhere, and anytime. The directions of development are very abstract and depend only on the player himself, perhaps this is why some players pass by the base game and immediately install [Forge](https://docs.minecraftforge.net/en/latest/gettingstarted/) or [Fabric](https://fabricmc.net/wiki/ru:start).

## What the course consists of

<!-- TODO: This information is subject only to GPT. -->

```mdx-code-block
<NotImplemented />
```

## Comparison with other engines

If you already have experience in creating modifications, packs, or even maps in the game space, be sure to study this paragraph. Otherwise, you can move on, simply not to burden yourself with excessive information.

### Behavior packs

Behavior packs are actively supported by game developers, allowing you to create new content using convenient JSON descriptions. The main problem is the very poor capabilities in adding logic to the added content. Using functions, you can create linear logic with simple conditions, but with modern mods, this will have a whole range of limitations. Use the capabilities of JavaScript, C++, and Java for a variety of purposes, modifying content in both high- and low-level languages.

:::note Structuring code

Behavior packs serve as an addition to creating content using modding, but not a replacement for it. Implement content in a minimum amount of time, using resource and behavior packs to describe new elements, while simultaneously implementing algorithms using your favorite programming language and ready-made interfaces.

:::

### BlockLauncher

Perhaps one of the best examples of platform similarity is BlockLauncher — Inner Core is based exactly on its ideas. The main difference here is that the set of capabilities of the first is incredibly scarce, for years right up to the end of the development cycle, the author was engaged in fixing existing interfaces, rather than adding new ones.

Here is some information if the transition is made directly from it:

- Besides the script, there appears [a whole folder with the mod](basics/mod-structure#whats-in-the-template), now there can be any number of scripts with different execution contexts and a common global space
- Creating native code (C++) is also carried out in the context of the mod, with simple integrations between JavaScript and Java, addon technology is obsolete but uses its hooking principles
- Game resources are not necessarily tied to the contents of the main folder, each resource is loaded depending on the specified settings in the [configuration file](basics/mod-structure#build-and-assembly)
- Additionally, you can use Java, for example, to optimize world generation or just use native Android libraries — there can be any number of libraries themselves
- You don't need to compile anything in advance in most cases, the launcher will do everything itself, or you can use [the toolchain](#already-familiar-with-modding) for deep configuration

### Forge, Fabric, and similar

The computer edition of the game is in no way related to cross-platform Bedrock, they are even written in different languages — Java and C++ respectively. Different development teams are working on the editions, and the code has a heterogeneous structure. The differences between [Java version emulation](https://pojavlauncherteam.github.io/) and the native version for the device are colossal and it makes no sense to compare different platforms.

## Already familiar with modding?

The documentation doesn't spend a lot of time on theory, the main task is to start creating content along with studying the articles. Prepare the desired environment, [install the engine](getting-started/installing-pack) and download the [Inner Core Mod Toolchain](https://github.com/zheka2304/innercore-mod-toolchain/blob/master/README-ru.md). Use the tabs with sections of this site for more information.
