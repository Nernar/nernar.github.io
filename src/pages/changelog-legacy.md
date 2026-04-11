# Changelog for Legacy Versions

## Inner Core Legacy

:::note What is Inner Core for Horizon?

Horizon represents a universal platform for running mobile games with mods and includes an updated Inner Core, whose predecessor has long been the best modding kernel for Minecraft PE, with a massive mod library accumulated over recent years. However, the new Inner Core has a number of significant improvements and supports a newer version of Minecraft PE 1.11.4, which also gives mod developers many new possibilities.

- The new version of Minecraft PE 1.11.4 and all related innovations — primarily, mods can add much more blocks and items with real string identifiers, as well as include resource and behavior packs of Minecraft itself, and interact with them.
- The new Inner Core guarantees improved stability during the game, reducing the chance of a crash to a minimum, which was tested by staying in the world for up to an hour with several mods (provided that all mods are optimized and do not contain errors that directly lead to crashes, for example, memory leaks).
- Horizon also adds the ability to create multiple builds based on Inner Core with separate mods and worlds.
- The new Inner Core allows creating fully-fledged new dimensions, which are separate worlds, not just regions of the regular world with altered generation. An improved dimension generator will also be added soon, allowing the creation of multiple different biomes.
- Mods can contain additional modules and libraries written in C++ that interact directly with Minecraft and the internal Inner Core API, as well as expose the interface to JavaScript, which allows expanding possibilities in case they are insufficient. In addition, a new ability to write mods in TypeScript instead of JS appears. Furthermore, a mod can contain Java code.

:::

## 2.1.0b72

- Now, when connecting to host with some blocks or items, missing on client, placeholders will be created to prevent crash
- Native protocol tested on extremely high load, possible lags and crashes fixed

## 2.1.0b71

- *(Experimental)* Saving previously logged in Xbox account
- Minor fixes

## 2.1.0b70

- Added multiplayer FAQ in Xbox login window
- Increased initialization packet timeout up to 90 seconds
- Fixes for network entities
- Other minor fixes

## 2.1.0b69

- Fixed items with extra data were sometimes invisible in vanilla UI
- Added [getLightLevel(x, y, z)](/api/class/BlockSource#getLightLevel) to BlockSource

## 2.1.0b68

- Minor improvements to native protocol (Xbox multiplayer)

## 2.1.0b65-67

- Made Xbox login functional on most devices

## 2.1.0b64

Added experimental custom Xbox login feature.

:::tip

You can connect to your friends from Xbox account with same mods as yours (with multiplayer support). Xbox connection will use only native protocol, that was added in [2.1.0b63](#210b63).

:::

## 2.1.0b63

- Added ability to use multiplayer with native Minecraft protocol. This option can be turned on in engine config. Native protocol might reduce ping, but could be less stable.
- Minor fixes

## 2.1.0b61-62

- Fixes for ItemContainer and BlockSource
- Other fixes

## 2.1.0b60

- Added method [exists()](/api/namespace/Animation#Base.exists) to animations
- Minor fixes

## 2.1.0b59

- Added methods [BlockRenderer.setCustomRaycastShape(id, data, collisionShape)](/api/namespace/BlockRenderer#setCustomRaycastShape), [BlockRenderer.setCustomCollisionAndRaycastShape(id, data, collisionShape)](/api/namespace/BlockRenderer#setCustomCollisionAndRaycastShape)
- Added methods [BlockRenderer.mapCollisionModelAtCoords(dimensionId, x, y, z, model)](/api/namespace/BlockRenderer#mapCollisionModelAtCoords), [BlockRenderer.mapRaycastModelAtCoords(dimensionId, x, y, z, model)](/api/namespace/BlockRenderer#mapRaycastModelAtCoords), [BlockRenderer.mapCollisionAndRaycastModelAtCoords(dimensionId, x, y, z, model)](/api/namespace/BlockRenderer#mapCollisionAndRaycastModelAtCoords), for collision and raycast shape mapping, passing null model will unmap it, mapping works on any block including air
- Added BlockSource method [getBlock(x, y, z)](/api/class/BlockSource#getBlock), returning object, that contains both ID and data
- Clearing mapped render models (not collision ones) on local player dimension change as well as animations
- Other minor fixes

## 2.1.0b58

- Minor fixes

## 2.1.0b57

- Added method [Network.inRemoteWorld()](/api/namespace/Network#inRemoteWorld) - returns `true`, if player connected to remote world
- Added callback *ItemUseLocal(coords, item, block, player)* for client side item use
- Added callback *ConnectingToHost(host, minecraftPort, moddedPort)*
- Improvements for NetworkConnectedClientList
- Added method [BlockSource.getCurrentClientRegion()](/api/class/BlockSource#getCurrentClientRegion)
- Other minor fixes

## 2.1.0b56

- New item caching system, that caches every complex icon, not only custom models and allows creating of model cache groups
- Call [ItemModel.setCurrentCacheGroup("groupName", "version")](/api/namespace/ItemModel#setCurrentCacheGroup) at the start of your mod to create cache group, it will be applied to all models, created at the root of your mod (including default ones). If specified version does not match cache version, whole group will be re-created.
- Fixed ItemContainer interaction with items with extra data

## 2.1.0b55

- Fixed compatibility with Recipe Viewer
- Added block special type parameter [color_source](/api/namespace/Block#SpecialType.color_source), can be one of **"none"**, **"leaves"**, **"grass"**, **"water"**
- Sped up loading of item models and made it less RAM consuming
- Minor improvements

## 2.1.0b48-54

Following updates contain fixes for multiplayer update.

## 2.1.0b47

This update adds experimental LAN multiplayer support, allowing players on same Wi-Fi and same set of mods play together.

:::warning All mods need to be updated to support multiplayer

Playing with mods without multiplayer support (warning will appear) might cause undefined behaviour or even crash, so do it at your own risk.

:::

Alot of new API modules, callbacks and functions were introduced in this update, but backwards compatibility remains. There will be a migration guide for mod developers.

## 2.0.5b46

- Fixed [2.0.5b45](#205b45) bug, which caused icon problems of items with extra data
- Fixed mod manager didn't show redirected mods

## 2.0.5b45

- Added item model method [setModelOverrideCallback(function(item) \{ ... \})](/api/interface/ItemModel#setModelOverrideCallback), acts like itemOverrideFunctions, but returns ItemModel instance, instead of icon
- Added method [ItemModel.newStandalone()](/api/namespace/ItemModel#newStandalone), creates empty ItemModel instance, not linked to any item, this models should be used in [setModelOverrideCallback](/api/interface/ItemModel#setModelOverrideCallback)
- Item override function now receives extra data
- Fixed crash, caused by calling [toScriptable()](/api/namespace/NBT#ListTag.toScriptable) method of NBT tags
- D8 dexer, instead of old DX is now used to build dex files from java

## 2.0.5b44

- Mods now can access and modify NBT of entities, tile entities and items
- Added functions: [Entity.getCompoundTag(entity)](/api/namespace/Entity#getCompoundTag), [Entity.setCompoundTag(entity, tag)](/api/namespace/Entity#setCompoundTag)
- Added methods to vanilla TileEntity, returned by [World.getContainer()](/api/namespace/World#getContainer): [getCompoundTag()](/api/interface/NativeTileEntity#getCompoundTag), [setCompoundTag(tag)](/api/interface/NativeTileEntity#setCompoundTag)
- Added methods to ItemExtraData: [getCompoundTag()](/api/class/ItemExtraData#getCompoundTag), [setCompoundTag(tag)](/api/class/ItemExtraData#setCompoundTag)
- Mod UI now supports modded animated item icons
- Icon override functions now receives second parameter - [isModUi](/api/namespace/Item#registerIconOverrideFunction)
- Added function [Debug.big](/api/namespace/Debug#big), acts like [Debug.m](/api/namespace/Debug#m), but outputs dialog with selectable text and pretty JSON
- TileEntity function [click](/api/namespace/TileEntity#TileEntityPrototype.click) now receives additional parameter - click coords
- Fixed rare addon-related crash

## 2.0.4b43

- Automatically deleting resource and behavior packs from uninstalled mods upon world load
- RenderMesh now can receive not only absolute file path, but also resource path and name of file in *models/* dir in resources.
- Deprecated slot element parameters [isTransparentBackground](/api/namespace/UI#UISlotElementProps.isTransparentBackground) and [needClean](/api/namespace/UI#UISlotElementProps.needClean), now slot supports transparent background by default
- Added container method [setOnOpenListener(function(container, window) \{ ... \})](/api/namespace/UI#Container.setOnOpenListener)
- Removed shared objects, built for x86 ABI to reduce overall weight
- Fixed error, that occurred after second [WRAP_JAVA](/api/function/WRAP_JAVA) call on same class

## 2.0.4b42

- [Callback.addCallback](/api/namespace/Callback#addCallback) now has third optional parameter - priority (integer, default value is 0). Callbacks with higher priority will be called earlier.
- UI slots now support animated background (texture name array must be passed instead of single name). For other textures in UI this feature was already present.
- UI slots now has text parameter, also container.setText work on them. If this parameter is not null, it value will be shown instead of count.
- [World.clip](/api/namespace/World#clip) now works on actors, but only on certain mode parameter values
- Fixed block icon generation for ICRender models

## 2.0.4b41

- Attemt to fix blurry UI on some devices

## 2.0.4b40

- Optimized mod UI, making it a bit faster and consume less RAM
- Added new mode for standard window, making all contents appear in separate window instead of background one. To use it in a new mode, use [UI.StandardWindow](/api/namespace/UI#StandardWindow) instead of misspelled [UI.StandartWindow](/api/namespace/UI#StandartWindow)
- Resource and behavior packs are now injected inside each world upon enter
- Animations (static models) are now cleaned up on dimension change
- Animations are now garbage collected after they are destroyed in world
- Added [Updatable.addAnimator(updatable_object)](/api/namespace/Updatable#addAnimator), which adds updatable, that ticks on client thread and never saves

## 2.0.4b39

- Minor fixes for previous version

## 2.0.4b38

- Added [TagRegistry](/api/namespace/TagRegistry) module. Docs will be available after some tests and maybe rework.
- Added particle type properties [framesX](/api/namespace/Particles#ParticleDescription.framesX) and [framesY](/api/namespace/Particles#ParticleDescription.framesY), which define frame grid size
- Added particle type property [rebuildDelay](/api/namespace/Particles#ParticleDescription.rebuildDelay), which defines time in ticks between particle mesh updates
- Added particle type properties [color2](/api/namespace/Particles#ParticleDescription.color2) and [animators.color](/api/namespace/Particles#ParticleDescription.animators), which allow animation of particle color
- Fixed slabs drop
- Fixed some textures in UI

## 2.0.4b37

- Custom dimension generator got heavy optimizations by decreasing noise level of detail. However, custom level of detail now can be set to individual noise generators.
- ItemModel got new methods, that can set custom bitmap as icon in mod UI
- Added *DimensionLoaded(currentId, lastId)* and *DimensionUnloaded(unloadedId)* callbacks

## 2.0.4b36

- More minor fixes

## 2.0.4b34-35

- Inner Core preferences menu was majorly improved and new settings were added
- Fixed critical error, that could cause server thread to stop
- Fixed OutOfMemory crashes, that could occur during startup
- Alot of minor fixes from GP statistics
- After installing mod you can now install all it's dependencies
- Saving system improved: overall stability increased, saves backup is created and all saves errors, if occured, are now displayed in one window instead of one window per error
- Main menu is slightly redesigned
- Added function [Entity.getAllInsideBox(coords1, coords2\[, type, flag\])](/api/namespace/Entity#getAllInsideBox)
- Added function [Entity.getDimension(entity)](/api/namespace/Entity#getDimension)
- Added function [Item.setAllowedInOffhand(id, allowed)](/api/namespace/Item#setAllowedInOffhand)
- Added function [Game.simulateBackPressed()](/api/namespace/Game#simulateBackPressed)
- PathNavigation is majorly fixed and improved
- Fixed [Entity.setCarriedItem](/api/namespace/Entity#setCarriedItem)/[setOffhandItem](/api/namespace/Entity#setOffhandItem)/[setArmorSlot](/api/namespace/Entity#setArmorSlot) were not sending data to client on non-player entities
- Fixed some crashes, that could occur while transferring between dimensions
- Fixed rotation of animations
- Fixed error, that caused mod behavior packs to be ignored on first launch
- Fixed duplication mod behavior packs in world folder
- Fixed [Entity.spawn](/api/namespace/Entity#spawn) was working incorrectly with addon entities
- Fixed Translation module doing English to English translations
- Increased item name caching capacity
- Fixed window method setTouchable not working for game overlays
- Other minor stability-related fixes

## 2.0.3b33

- Added support for custom shader uniforms, that can be passed for individual models (more documentation will be released soon)
- Added support for controlled entity navigation via [Entity.getPathNavigation(entity)](/api/namespace/Entity#getPathNavigation)
- Added function [Entity.getAttribute(entity, name)](/api/namespace/Entity#getAttribute) to access and modify entity attributes
- Added functions: [Player.setAbility(name, value)](/api/namespace/Player#setAbility), [Player.getFloatAbility(name)](/api/namespace/Player#getFloatAbility), [Player.getBooleanAbility(name)](/api/namespace/Player#getBooleanAbility)
- Added uniform vec3 VIEW_POS to shaders on world models (animations)

## 2.0.3b32

- Fixed vanilla particles and mod models with blending drawing behing alpha-tested blocks and clouds

## 2.0.3b31

- Minor fixes, including custom dimensions and block meshes in hand render

## 2.0.3b30

- All changes applied to main version
- Fixed item icons with metadata

## 2.0.2b29

- Better TileEntity system: now unloaded tile entities, or ones without tick function will not be counted, when checking updatable limit. Added TileEntity functions [load()](/api/namespace/TileEntity#TileEntityPrototype.load), [unload()](/api/namespace/TileEntity#TileEntityPrototype.unload) and [onCheckerTick(isInitialized, isLoaded, wasLoaded)](/api/namespace/TileEntity#TileEntityPrototype.onCheckerTick).
- Fixed crash with mob custom models
- Other minor fixes

## 2.0.2b28

- Added option **disable_loading_screen**, that disables loading screen and loads mods on main thread
- Fixed [World.clip](/api/namespace/World#clip), [RenderMesh.clone](/api/class/RenderMesh#clone), [Block.setupAsRedstoneReceiver](/api/namespace/Block#setupAsRedstoneReceiver)/[Emitter](/api/namespace/Block#setupAsRedstoneEmitter)
- Fixed some crashes from item models

## 2.0.2b27

- Fixed issue with spending items when tapping on block with UI
- Added functions to World module: [clip(x1, y1, z1, x2, y2, z2)](/api/namespace/World#clip), [doesVanillaTileHasUI(id)](/api/namespace/World#doesVanillaTileHasUI), [setBlockUpdateAllowed(true, false)](/api/namespace/World#setBlockUpdateAllowed), [setBlockUpdateType(type)](/api/namespace/World#setBlockUpdateType)
- Fixed functions for player experience work
- Fixed meshes after app was minimized

## 2.0.2b26

- Added server thread priority to Inner Core config
- Added [Block.registerNeighbourChangeFunction\[ForID\](id, function(coords, block, changeCoords) {})](/api/namespace/Block#registerNeighbourChangeFunction)
- Added [Block.registerEntityInsideFunction\[ForID\](id, function(coords, block, entity) {})](/api/namespace/Block#registerEntityInsideFunction)
- Added [Block.registerEntityStepOnFunction\[ForID\](id, function(coords, block, entity) {})](/api/namespace/Block#registerEntityStepOnFunction)
- Added RenderMesh methods [rotate(x, y, z, rx, ry, rz)](/api/class/RenderMesh#rotate), [fitIn(x1, y1, z1, x2, y2, z2\[, keepRatio\])](/api/class/RenderMesh#fitIn), [clone()](/api/class/RenderMesh#clone)
- Fixed colors and mesh position in item models

## 2.0.2b25

- Added block description property - [sound](/api/namespace/Block#SpecialType.sound), sets one of standard block sound types
- Added RenderMesh method [setLightPos(x, y, z)](/api/class/RenderMesh#setLightPos) - set relative position for block lighting
- Added RenderMesh method parameter [setFoliageTinted(leavesType)](/api/class/RenderMesh#setFoliageTinted)
- Fixed [ItemModel.occupy()](/api/interface/ItemModel#occupy) method not preventing setting ICRender models

## 2.0.2b24

- Fixed crash from massive amount of blocks with RenderMesh
- Added methods to RenderMesh - [setNoTint()](/api/class/RenderMesh#setNoTint), [setGrassTinted()](/api/class/RenderMesh#setGrassTinted), [setFoliageTinted()](/api/class/RenderMesh#setFoliageTinted), [setWaterTinted()](/api/class/RenderMesh#setWaterTinted)
- Added preloader scipt methods - [Resources.getAllMatchingResources("regex")](/api/namespace/Resources#getAllMatchingResources), [Resources.getResourcePath("local path")](/api/namespace/Resources#getResourcePath), [Resources.getAllResourceDirectoriesPaths()](/api/namespace/Resources#getAllResourceDirectoriesPaths)

## 2.0.2b23

### UI and world item models engine was fully rewritten

- Mod UI support custom item models (non-meshes for now)
- Item animations now based on RenderMesh and support custom item models and materials
- Generating item models moved to new loading phase
- Item model caching will make their generation much faster after first launch
- [ItemModel](/api/namespace/ItemModel) API module is massively improved and allows access to all model-related stuff
- Additional materials can be passed to handle glint on item models
- Block [rendertype](/api/namespace/Block#SpecialType.rendertype) parameter is fixed and will affect block item model

### Other improvements

- Added condition [ICRender.RANDOM(value, max\[, seed\])](/api/namespace/ICRender#RANDOM) - for given block position generates random number from 0 to max - 1, and returns, if it is equal to value. Has method [setAxisEnabled(0-2, enabled)](/api/namespace/ICRender#RANDOM_CONDITION.setAxisEnabled) to ignore some axises.
- Added functions [Block.setupAsRedstoneReceiver(nameID, connectToRedstone)](/api/namespace/Block#setupAsRedstoneReceiver), [Block.setupAsRedstoneEmitter(nameID, connectToRedstone)](/api/namespace/Block#setupAsRedstoneEmitter), [Block.setupAsNonRedstoneTile(nameID)](/api/namespace/Block#setupAsNonRedstoneTile)
- RenderMesh: added method [addMesh(mesh\[, x, y, z\[, scaleX, scaleY, scaleZ\]\])](/api/class/RenderMesh#addMesh), alpha value now can be passed to [setColor](/api/class/RenderMesh#setColor)
- Added block description property - [mapcolor](/api/namespace/Block#SpecialType.mapcolor), sets 0xRRGGBB map color to block

## 2.0.2b22

- Minor fixes and improvements

## 2.0.2b21

- *(Experimental)* Global optimization, attempting to increase FPS by using dynamic thread priority
- *(Experimental)* World generation optimized
- Minor fixes for item models

## 2.0.2b20

This update adds alot and might be unstable.

- Added ability to create custom materials and shaders (more info will be provided soon)
- Added UI and in-hand item models, to access use [ItemModel.getFor(id, data)](/api/namespace/ItemModel#getFor)
- Added new animation mode - direct mesh render with material, to enter this mode call method [describe(\{ mesh: RenderMesh, skin: "texture name", material: "material name" \})](/api/namespace/Animation#Base.describe)
- Blocks with ICRender will automatically gain inventory models
- Added custom dimension methods: [setFogDistance(close, far)](/api/namespace/Dimensions#CustomDimension.setFogDistance), [resetFogDistance()](/api/namespace/Dimensions#CustomDimension.resetFogDistance)
- Other minor fixes

## 2.0.1b18

- Added directories *innercore/resource_packs*, *innercore/behavior_packs* for adding resource and behavior packs
- Local world resource and behaviour packs are now automatically forced for this world
- Added module [AddonEntityRegistry](/api/namespace/AddonEntityRegistry) and functions to work with addon-added mobs
- Minor fixes

## 2.0.1b17

- Added [GenerationUtils.generateOreCustom(x, y, z, id, data, amount, mode, listOfIds\[, seed\])](/api/namespace/GenerationUtils#generateOreCustom), also added optional **seed** parameter to [GenerationUtils.generateOre](/api/namespace/GenerationUtils#generateOre)
- Fixed drops from [World.destroyBlock](/api/namespace/World#destroyBlock)
- Fixed [Player.setHunger](/api/namespace/Player#setHunger), [Player.setSaturation](/api/namespace/Player#setSaturation), [Player.setExhaustion](/api/namespace/Player#setExhaustion) methods
- Fixed some block drops

## 2.0.1b16

- Added machine place sound
- Fixed some block drops
- Minor fixes for custom dimensions

## 2.0.1b15

- Attempt to optimize biome map

## 2.0.1b14

- Temporary disabled biome maps

## 2.0.1b13

- Minor fixed and optimizations

## 2.0.1b12

- Added better API for new custom dimensions
- Fixed empty and non ASCII base item name crash (mods like Divine RPG)

## 2.0.1b11

- Added API for custom biomes
- Added callback *GenerateBiomeMap*, that uses [World.get](/api/namespace/World#getBiomeMap)/[setBiomeMap](/api/namespace/World#setBiomeMap) to build chunk biome map before any generation
- Added new parameters to generation callbacks: (chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed)
- Added [GenerationUtils.getPerlinNoise(x, y, z, seed, scale, numOctaves)](/api/namespace/GenerationUtils#getPerlinNoise)
- Added [World.addGenerationCallback(callbackName, callback\[, hashString\])](/api/namespace/World#addGenerationCallback), that uniquely modifies chunk seed before calling callback

## 2.0.1b10

- Added mod loading UI
- Mods are now loading in separate thread
- Fixed UI hangs after fast-clicking on block or item with UI
- Fixed some errors with drops and tools
- Fixed fatal error tip message randomly appearing during world load

## 2.0.0b9

- Completed classic mod UI and workbench UI
- Now mod UI will close when back is pressed or app is minimized
- Fixed possible crashes from render mapping and [Item.getName](/api/namespace/Item#getName)
- Now when all mods are stopped in case of an fatal error it is displayed as tip message
- Applied stability fixes from build 8

## 2.0.0b8

- Another attempt to fix stability, eliminate lags and crashes upon minecraft loading (checks for crashes are required), after all this attempts best solution from builds 6-8 will be selected.
- Fixed new workbench

## 2.0.0b7

- Another attempt to fix stability, eliminate lags and crashes upon minecraft loading (checks for crashes are required)

## 2.0.0b6

- More stability fixes (report any new or more frequent crashes)
- Classic-styled workbench
- Started migrating mod UI to classic style

## 2.0.0b5

- Fixes [2.0.0b4](#200b4) for system versions lower than Android 9

## 2.0.0b4

- Some UI fixes, mostly for devices with cutout

## 2.0.0b2 beta

- Minor fixes before release

## 2.0.0 beta

- Migrating to Minecraft 1.11.4 as Horizon pack

## Inner Core Launcher

:::note What is Inner Core?

Inner Core is a completely independent application from MCPE, containing its own MCPE, which allows you to not only install no additional software but also keep the version of MCPE you play with. Even worlds with mods are stored separately from vanilla worlds. This is a complete replacement for BlockLauncher, which for a long time existed as the only modding option and was extremely poorly implemented and had a terribly inconvenient API, which entailed many unpleasant consequences. Now this is put to an end.

- Mods under Inner Core are completely compatible and will not conflict; the API is built in such a way that establishing interaction of mods with each other is very simple. This allows creating complex modpacks from dozens of mods.
- Porting mods from the old Core Engine is extremely simple because CE was kept as the main type of mod API under Inner Core, which will entail a rapid porting of developing mods.
- An API core written in C++ and Java, multithreading, adaptation of the API to the frequent needs of mods, as well as the ability to compile mods into Java bytecode allows reaching new heights in performance.
- New features in all areas, especially in the graphic component of mods, which now allows creating any desired appearance of in-game objects. Also, old API modules have been greatly improved and new ones introduced, and due to a stable version, the API will develop much faster.
- The GUI API makes it incredibly easy to create any required interface, including its main feature: the simple creation of a dynamic interface that runs at a stable 40-60 fps.
- A complex and variable structure of mods, an assembly file, several types of APIs and executable file types will allow creating the most convenient structure for mods, which plays an important role. A proprietary development environment adapted for Inner Core allows developing mods from a PC, downloading and running them via USB.

:::

### 1.1.2.42 beta

- Various fixes

### 1.1.1.40 beta

This update contains a massive amount of new features, which mostly include [new possibilities for mods](https://vk.com/wall-129680450_10421).

Gameplay changes:

- Automatic world saving now occurs together with mod data saving, which is set in the settings. This means that in case of crashes and other emergency shutdowns, progress loss will be minimal.
- The mod browser has been reworked and improved, now allowing to sort and search mods by different categories, as well as monitor their updates.
- Fixed a massive number of crashes, minor bugs, and flaws.

New mod features:

- A new particle creation system allows creating visual effects on a level indistinguishable even from PC mods like Thaumcraft.
- Blocks and mobs can now have any appearance thanks to the ability to use polygonal 3D models.
- The ability to create custom mobs has been returned.
- Added the ability to create arbitrary physical models of blocks depending on external conditions.
- New ICRender features allow creating logical expressions.
- Added support for item extra data (NBT), allowing work with enchantments and custom extra data.
- Introduced a new library system that, when mods transition to it, will remove conflicts associated with the use of an incorrect library version by other mods.
- Added the ability to set random tick events for specific blocks.

### 1.1.0.27-29 beta

This update introduces a new system that registers and automatically sends native crashes for analytics. After a crash, this system will save data about it and, upon the next application launch, will show and send them.

- New native crash registration system and its fixes relative to version 1.1.0.27
- Bug fixes causing items to sometimes not stack
- Minor bug fixes with dimensions
- Added methods that quickly filter all existing recipes, which will allow creating NEI without major problems

### 1.1.0.25 beta

- Custom dimensions fixes, library and documentation will be released soon.
- Improvements and fixes to the dimension API and more.
- Fixes for some GUI icons.

:::warning IMPORTANT!

Support for the x86 architecture has been completely removed, because it didn't allow playing anyway, but on devices supporting both armeabi-v7a and x86, the latter could launch.

:::

### 1.1.0.24 beta

This update added a huge number of new features and greatly changed the application. The main ones are listed below with links providing detailed descriptions.

- [Dimensions](https://vk.com/wall-129680450_8680): mods can now add custom dimensions with completely new unique world generation, opening new possibilities for creativity and gameplay.
- [Mod Browser](https://vk.com/wall-129680450_8679): a website and in-game menu allowing to search, [install and update any mods in one click](https://vk.com/wall-129680450_8678), and anyone can upload their mod to the public library.
- [Google Play Publishing](https://vk.com/wall-129680450_9024): something that has been requested for so long and has finally happened; this will increase popularity and open up many new possibilities for debugging the application, which have already been used by the release of this version.
- Optimization through [fixes of new and old bugs](https://vk.com/wall-129680450_8681), as well as working with process priorities, removes the main problem preventing survival gameplay.
- A huge number of fixes and [API improvements](https://vk.com/wall-129680450_8676), opening up possibilities that were previously closed due to errors.
- Fixes to memory management, interface, and loading screen, including crash fixes based on data obtained through Google Play, will reduce the number of crashes at all stages of the game.

### 1.0.2.7-9 beta

- Altered the resource system. Initialization is faster, many bugs are fixed.
- Altered the mod compilation system. Now it allows compiling mods of any size and shows the compilation process. Mods compiled on the old version will work.
- Changed error display; now they show not only the file but also the mod it belongs to, and in compiled form also the build file with the line.
- Fixed crashes during massive world modification from a thread.
- Altered the world generation system. Generation is moved to a thread due to the previous change; ores generate together with surface structures. This completely removes freezes from it, making the exploration of new chunks much smoother.
- The workbench dynamically adjusts the window size to show possible crafts, removing the issue with crafts not displaying due to a constant size.
- Fixed crashes from lack of RAM (when installing a large number of mods and interface crashes).
- Fixed the operation of Entity module methods with non-existent mobs. This should bring the MobRegistry module back to life, but it has not been tested.
- Added overlay mode to UI.Window, allowing it to work normally along with the game (does not block button presses, sounds, etc.), though it reduces fps. Ideal for, say, armor buttons in IC2.
- Fixed the appearance of phantom duplicates of blocks compatible in 2 mods (for example, Forestry and IC2 ores). This will not affect your worlds and will not cause ID changes.
- Fixed the operation of the **BlockDestroyStarted** and **BlockDestroyContinued** events.
- Fixed a bug from version 1.0.2.7 with the inability to create a super-flat world.
- Less significant fixes.

### 1.0.1.2-3 beta

- Fixed some recipes and icons in the workbench, fixed a bug where sometimes a specific recipe could not be selected.
- Fixed a bug where vanilla tools didn't break.
- Fixed the lack of damage and effects from tools and weapons added by mods.
- Fixed the ArmorRegistry API module.
- The MobRegistry module is currently poorly debugged and its use is highly not recommended.
- Fixed many non-working API methods, added those that were forgotten but existed, introduced new ones.
- Optimized particle spawn, fixed a crash when spawning a large number of particles from a thread. Added a method allowing the creation of particles at any distance from the player.
- Fixed a bug causing random crashes in the world, though it's not certain that this specific one caused your crashes and they will disappear. This fix should also remove freezes and slightly stabilize operation.
- Fixed a bug sometimes causing a crash when creating animations (models).
- Fixed a bug that probably could cause a crash immediately after launch.
- Now, when crashing due to unsuccessful native code loading, the error will be written to the log.
- Forced the pocket interface style, as the classic one caused crashes for many.
- Fixed a crash when breaking a custom block without a drop function in survival.

### 1.0.0 beta

- Ported to version 1.0.3 in a standalone launcher.
- The changelog may be incomplete.

## Core Engine for BlockLauncher

:::note What is Core Engine?

Core Engine is a unique mod loader for Minecraft PE and BlockLauncher, opening immense possibilities for playing with mods and their development. It combines a loader and a massive API, making it much easier and higher-quality to create large and complex mods.

1. Full compatibility and interaction of mods loaded by Core Engine.
2. A powerful API containing 30 modules and about 1000 methods.
3. Optimization and flexible configuration of Core Engine itself and the mods on it.
4. Unlimited API technology, allowing mods to create much more blocks than in ModPE.

:::

### 1.2 beta

In this version, the mob creation API is completely reworked, making it much faster, more convenient, and more rational to create new mobs.

Added 6 new API modules for working with mobs, allowing them to be registered, and describing their appearance, behavior, drops, and spawning.

You can read more in the [documentation](https://vk.com/wall-129680450_2785).

- Fixed critical crashes and many minor errors.
- Optimized underground generation (ores).
- Expanded config, now it has more settings.
- Added commands: `/c log` (show log), `/c save debug` (save and output saved data) to help in development.
- Fixed the appearance of item models.
- Relevant Minecraft PE versions: 0.16-1.0.3.

### 1.17 beta

- Fixed a critical duping issue introduced in [1.16](#116-beta).
- Fixed even more minor interface flaws after updates [1.15](#115-beta) and [1.16](#116-beta).
- Version and compatibility fixes in the log.
- Relevant Minecraft PE versions: 0.14-1.0.3.

### 1.16 beta

- Fixed many errors of the new interface, optimized it, and cleaned up code.
- Fixed a bug where items disappeared when the player's inventory was full; now excess items drop on the ground.
- Fixed a bug where items stacked beyond 64 after opening the workbench.
- Fixed the snow-covered dirt texture.
- Fixed a bug where items with a damage (charge) bar broke when digging blocks and attacking.
- Fixed bugs with tool breaking.
- Fixed attack delay of custom tools.
- Fixed and optimized the main thread.
- Returned support for 0.14.x versions.

### 1.15 beta

- Optimized and improved the interface; fixes include:
  - Removed piece-by-piece interface opening and long element rendering.
  - Removed gaps in the fullscreen interface.
  - Optimized the rendering of interface slots.
- Optimized and improved the interface; improvements include:
  - Title text is reduced and moved to the center.
  - Close button is reduced and moved to the corner.
  - Added a shadow to the title.
  - Items in slots are reduced and rendered without pixel distortion.
  - Increased slot highlight thickness.
  - Altered standard interface frame, added a dark border around the edges.
- Fixed animations on versions 0.16 and 1.0:
  - Fixed random resizing.
  - Fixed the ability to attack an animation.
  - Added a click event on an animation.
  - Item animations can now be offset from the center.
- Fixed block transparency, however, mods like Industrial Craft will still require refinement in this regard.
- Fixed breaking of some blocks with custom tools.

### 1.14 beta

- Interface elements now have `isTouched` values (whether the element is pressed), `touchPosition` (touch position), and an `onTouchEvent(position, eventId)` event, allowing much better touch control.
- Added a new standard interface element: `textField`, a text input field.
- Containers got methods: `isElementTouched("name")` (check if element is pressed), `getElementTouchPosition("name")` (position of element touch), `getText("name")` (for getting text from text fields and regular text elements).
- Added the ability to make the interface background transparent.
- Minor fixes.
- Relevant Minecraft PE versions: 0.14-1.0.2.

### 1.13 beta

- The `GameObject` module allows registering prototypes of any game objects described as a set of events, functions, and data, and then creating their instances in the world. Besides initialization and tick functions, such objects can have any custom events. The module allows getting all instances of objects of a given type, as well as calling their events. In addition, these objects are saved upon re-entering the world.
- Programmatically controlled resource packs: a new file `resources.json` is added to the mod directory, describing resource packs that should and shouldn't be imported at load time. The contents of this file can be edited not only manually but also via methods inside the mod, which allows adding or removing part of the resources (e.g., specific shaders) based on config settings.
- More detailed and understandable log, reduced output of GUI loading and mod compilation.

### 1.12 beta

- Full support for MCPE version 1.0.x.
- Libraries, their creation, and importing API objects, read more [here](https://vk.com/wall-129680450_1631).
- Animation and interface fixes:
  - Fixed incorrect display of the created item amount in the workbench.
  - Alternative rendering mode for item models, activated on version 1.0 and configurable in the settings file if you have problems rendering models.

### 1.11 beta

- Rewritten, optimized, and redesigned the workbench interface, making it much more convenient to use and closer to the original:
  - The result slot is replaced by a button, moved below the grid.
  - The crafting grid is now smaller and centered.
  - Page turning arrows are now larger.
  - Added animation and sound to all buttons.
  - Calculation of available recipes when working in the workbench occurs less often and is moved to a separate thread.
- New API features - block and item prototypes as an alternative way to create them:
  - An item or block can be described by a single function that takes a string ID and a prototype object with a set of data and event methods fully describing the item or block.
- Minor fixes and API expansion:
  - Added new features for standard GUI elements.
  - Fixed the `addLiquid` method for liquid storages.
  - Fixed some GUI flaws, increased its performance.

### 1.10 beta

- Support for new MCPE versions 0.16.x and 0.14.x in addition to 0.15.x, the most stable version for work currently is 0.16.2.
- ModPE Loader system (alpha), which will allow Core Engine to load and run ModPE scripts from a special directory and fix their ID conflicts with each other and Core Engine mods:
  - Mods are loaded from the `games/com.mojang/modpe` folder.
  - The system only loads `*.js` (scripts) and `*.zip` (textures) files; there's no modpkg support yet.
  - The system is currently in alpha version, meaning it may have bugs and not load all scripts.
- Improved and fixed Unlimited API:
  - Support for versions from 0.14 to 0.16.
  - Special types can now contain more than 16 variations.
  - Special types can now have a name; special types with the same name will be merged into 1 to reduce ID consumption.
  - Added a system that fixes block conflicts when transitioning to a new version, and ensures blocks remain on their special types.
  - Faster operation.
  - Fixed errors when overflowing block IDs.
- ToolAPI activated:
  - A universal method for creating tools will allow creating tools with any parameters and any set of mined block materials.
  - Creation of new tool materials and blocks in addition to standard ones.
  - Binding events to a tool or weapon, dynamically changing the item in hand via an object.
  - Support for all possible tool enchantments.
  - Modifier events for enchantments and mining speed will make it very simple to add extra properties to tools, like modes.
  - Tools won't change block mining speed if you play on 0.15.x.
- Animation fix on 0.16.x.
- ID saving system fix.
- Minor fixes.

### 1.07 beta

- The static ID system will now change block IDs along with their special type changes, removing the issue of some blocks missing properties (material, energy conductivity).
- Fixed item animations missing in [1.06](#106-beta).
- Added a method to the API for running on the main thread, as well as exception handling on the main thread.
- Minor fixes.

### 1.06 beta

- Added an API module for saving and typing updatable objects.
- Fixed texture overlay in custom mob models added by mods, added new methods.
- Added new features in creating animations.

### 1.05 beta

- Fixed a bug where special type block IDs were not saved, due to which some mods (e.g., energy in IC PE) did not always work. CE will restart on the first launch with the new version.
- Fixed block names, show name option enabled by default. The addon needed prior to 1.05 is no longer required and can be disabled.
- Fixed some GUI errors.
- Minor optimization.

P.S. I apologize that with the previous and this version, block IDs in old worlds may change and become unplayable in survival. In new worlds, when updating Core Engine or some mods to new versions, this will not repeat.

### 1.04 beta

- Added a system that saves block and item IDs and prevents them from changing when installing new mods and updating old ones. If a mod was removed/disabled and then added back, its IDs won't be saved. The system will restart CE on the first launch with the new version.
- Opening an interface with an item having a use function no longer triggers that function (placing wires when opening a machine GUI, thaumonomicon, etc.).
- If the player is sneaking, tapping a block with an interface will not open it.
- Automatic block generation in the interface now supports textures of resolutions other than 16x16, improved icon quality, added shadow.
- Minor fixes.
- Relevant Minecraft PE version: 0.15.9/10, BlockLauncher 1.13.3.

:::warning ATTENTION!

It's not guaranteed that the new system will work perfectly; during debugging, no bugs were found, but it is complex enough that there's a chance they exist.

:::

### 1.03 beta

- Optimization for Industrial Craft, as well as general performance optimization.
- Fixed a GUI bug where elements did not overlay the background entirely.
- Optimized world generation.
- Fixed animation errors.
- Fixed shapeless recipes in the workbench.
- Minor fixes.

### 1.02 beta

- Optimized the interface, including the workbench, which caused crashes for some (can't guarantee it's fixed for everyone who had them).
- Added a third workbench mode, enabled by default, similar to the MCPE style, but it uses page turning instead of scrolling to reduce load. To enable, set `pocket_workbench_style` and `split_pocket_workbench_to_pages` to `true` in the config.
- Changed default settings; thread optimization is enabled by default, which can cause crashes; to disable it, set `run_on_main_thread` to `true` in the config.
- Fixed many API methods.

### 1.01 beta

- Ability to disable thread optimization, which causes crashes for many.
- The ability to configure priorities for all threads controlled by Core Engine will help sort out performance.
- Updated config file with more optimal default settings.
- Upon entering the pause menu, all mods are paused to avoid crashes.
- Fixed some API methods.
- Fixed the behavior of custom recipes in the MCPE-style workbench.
- Fixed a bug where mod textures were not loaded.
- Added texture cleanup for deleted mods.
- Fixed many GUI icons.
- Core API Level changed to 2.

### 1.0 beta

- Relevant Minecraft PE version: 0.15.9, BlockLauncher 1.13.3.
