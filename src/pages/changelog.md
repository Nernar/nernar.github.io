# Changelog

## 2.4.0b122-122o1 ([@reider745](https://vk.com/id500917624))

- Added [World.addListenerChunkStateChanged(listener, statesList)](/api/modules/World.html#addListenerChunkStateChanged)/[addLocalListenerChunkStateChanged](/api/modules/World.html#addLocalListenerChunkStateChanged) methods to track chunks loading and unloading
- Added ability to get game settings via [Game.getOption(key)](/api/modules/Game.html#getOption), use [Game.getOptions](/api/modules/Game.html#getOptions) to list all available keys
- Added *OptionsChanged* callback, which is called immediately after completing game options change
- Implemented binary data packets, pass an bytes array to send them
- Fixed dispensers functionality with modded liquid buckets and also player identifier transfering to *CraftRecipePreProvided* callback
- Multiple small tweaks to internal engine operation

### Other changes ([@rislaed](https://vk.com/id268478382))

- Added [EDamageCause](/api/enum/EDamageCause) for determining entity damage type, set [ToolAPI.registerSword](/api/namespace/ToolAPI#registerSword) default damage to 4
- Added feature to apply click and long click events to inventory slots, fixed updates and slot resizing
- Added methods for client working with Updatable: [getAllLocal](/api/namespace/Updatable#getAllLocal) and [getLocalSyncTime](/api/namespace/Updatable#getLocalSyncTime)
- Fixed display of header translations in config, [ItemContainer.sealSlot](/api/class/ItemContainer#sealSlot) correctly overwrites *getTransferPolicy*, [Entity.health](/api/namespace/Entity#health) works again

## 2.4.0b120-121 ([@reider745](https://vk.com/id500917624))

- Fixed mod browser proxy
- Fixed broken saves bugs due to collision
- Fixed mod error messages localization
- Added API module [GameController](/api/modules/GameController.html), to emulate player actions from mods
- Added [Entity.getAllLocal](/api/modules/Entity.html#getAllLocal) method
- Fixed *EntityAddedLocal*/*EntityRemovedLocal* callbacks in multiplayer
- Fixed [Player.localPlayerTurn](/api/modules/Player.html#localPlayerTurn)
- Mod browser minor crash fixes
- In-game minor crash fixes

## 2.4.0b118-119 ([@reider745](https://vk.com/id500917624))

- Net protocol improvements
- Added BlockSource methods for weather control
- Added [Particles.addBreakingItemParticle](/api/modules/Particles.html#addBreakingItemParticle) method
- Added [Item.setShouldDespawn](/api/modules/Item.html#setShouldDespawn)/[setFireResistant](/api/modules/Item.html#setFireResistant)/[setExplodable](/api/modules/Item.html#setExplodable) methods
- Fixed memory leaks in mesh render

## 2.4.0b116-117

Added modded server support based on [ZoteCore](https://github.com/Reider745/ZoteCoreLoader) by [@reider745](https://vk.com/id500917624), related changes:

- Fixed server list tab, modpacks can now have their own server list
- Fixed player UUID was not stored, which broke local multiplayer inventory and servers
- Added sync for socket server port
- Added sync for biome ids
- Other server-related fixes

### Other changes ([@reider745](https://vk.com/id500917624))

- Added proxy to mod browser, which is used in case main url is not available (by [@spawnrys](https://vk.com/id549824423))
- Fixed [client TileEntity sync](/api/interfaces/TileEntity.LocalTileEntityPrototype.html), added methods [onConnectionPlayer](/api/interfaces/TileEntity.TileEntityPrototype.html#onConnectionPlayer)/[onDisconnectionPlayer](/api/interfaces/TileEntity.TileEntityPrototype.html#onDisconnectionPlayer)
- In case of saves failture, they will now default to [empty js object](/api/interfaces/Saver.IScopeSaver.html#getDefaultSaves)
- Added ICRender condition [ICRender.BlockState(x, y, z, stateId, valueState)](/api/modules/ICRender.html#BlockState)
- Fixed UI on devices with notch (Added switch to config)
- Optimized static item models (Added to config)
- Fixed [loadCustom](/api/classes/Animation.Base.html#loadCustom) in remote sessions
- Fixed [Entity.getMobile](/api/modules/Entity.html#getMobile)
- Fixed [World.getWorldTime](/api/modules/World.html#getWorldTime) on client

### Other changes ([@zheka_smirnov](https://vk.com/id24708057))

- Fixed frequent crashes when launching Inner Core
- Updated Rhino to latest version - javascript engine for mods
- Many optimization in native code of the Inner Core
- Added [Player.localPlayerTurn(x, y)](/api/modules/Player.html#localPlayerTurn)
- Added PlayerActor methods [canFly](/api/classes/PlayerActor.html#canFly)/[setCanFly](/api/classes/PlayerActor.html#setCanFly), [setPlayerBoolean](/api/classes/PlayerActor.html#setPlayerBooleanAbility)/[FloatAbility](/api/classes/PlayerActor.html#setPlayerFloatAbility), [getPlayerBoolean](/api/classes/PlayerActor.html#getPlayerBooleanAbility)/[FloatAbility](/api/classes/PlayerActor.html#getPlayerFloatAbility)
- Fixed [World](/api/modules/World.html) module was not working in remote sessions
- Added support for custom [empty buckets](/api/interfaces/Block.LiquidDescriptor.html#bucket), when registering custom liquids
- Fixed crash in [block step on event](/api/modules/Block.html#registerEntityStepOnFunction)
- Fixed [Dimensions.transfer](/api/modules/Dimensions.html#transfer) when transfering into the same dimension
- Minor fixes to custom dimension generator
- Fixed installation of some mods

## 2.3.1b115

- A lot of minor optimizations, fixes and stability improvements
- Fixed some recipes were missing in workbench (like IC2 batteries)
- Mod loading priority support
- Preview built-in [ECS](/api/modules/ECS.html)
- Added [ItemModel.setSpriteHandRender](/api/interfaces/ItemModel-1.html#setSpriteHandRender) method
- Added CustomDimensionGenerator method [CustomDimensionGenerator.setGenerateCaves(generate[, generateUnderwater])](/api/classes/Dimensions.CustomGenerator.html#setGenerateCaves), fixed underwater caves generated by default
- Added BlockSource method [listEntitiesOfTypeInAABB(x1, y1, z1, x2, y2, z2, stringType)](/api/classes/BlockSource-1.html#listEntitiesOfTypeInAABB.listEntitiesOfTypeInAABB-2), fixed [listEntitiesInAABB](/api/classes/BlockSource-1.html#listEntitiesInAABB) for exact type
- Added [Player.getLocal()](/api/modules/Player.html#getLocal) and [Player.getServer()](/api/modules/Player.html#getServer) methods
- Added [UI.getMinecraftUiScale()](/api/modules/UI.html#getMinecraftUiScale) and [UI.getRelMinecraftUiScale()](/api/modules/UI.html#getRelMinecraftUiScale) methods
- Fixed enchant custom callbacks crash
- Fixed [knockback resistance](/api/interfaces/Item.ArmorParams.html#knockbackResist) for custom armor
- Fixes for mod installation

## 2.2.1b114

This update introduces series of global optimizations, significantly increasing overall performance.

:::note

For users, who have [Kernel Extension](https://icmods.mineprogramming.org/mod?id=831) installed, it must be updated to the final version!

:::

## 2.2.1b107-108

- Fixed and improved workbench API, added full support for 2x2 recipes
- Fixed workbench was not triggering screen change callback
- Fixed bug that some blocks and items were not created properly

## 2.2.1b106

- Vanilla Crafting Table now supports modded recipes. Crafting Table UI override was disabled, but can be enabled in settings, if something will go wrong.
- Faster [access to modded tile entities](/api/modules/TileEntity.html#getTileEntity)
- Fixes and optimization for C++ to Java calls

## 2.2.1b105

- Added [experimental API](https://gist.github.com/zheka2304/188a43e9ee130c1830af6cdc308cbeff) for creating custom enchants
- Minor optimization for C++ to Java calls
- Minor fixes for icons in UI

## 2.2.1b104

- Fixed last item in hend was not spending
- Fixed animated liquid textures
- Fixed endless custom buckets in survival
- Now changing items in *ItemUse* callback are handled correctly when not prevented
- Added [Block.registerClickFunction[ForID](nameId/id, (coords, item, block, player) => void)](/api/Block/registerClickFunction)
- Fixed position, passed dispense callback, added slot parameter (4th argument)

## 2.2.1b103

- When creating liquids you can now automatically create buckets with full functionality [(see docs)](/api/interfaces/Block.LiquidDescriptor.html#bucket)
- Added [isRenewable](/api/interfaces/Block.LiquidDescriptor.html#isRenewable) parameter for custom liquids
- Fixed bucket interaction with custom liquids

## 2.2.1b102

- Added [methods](https://gist.github.com/zheka2304/a93f32f612750cbffc637a265fbf9027) for creating liquid blocks
- Fixed some mod manager issues and crashes, added ability to search mod by it's ID
- Added [Entity.hasEffect(entity, effectId)](/api/Entity/hasEffect) and [Entity.getEffect(entity, effectId)](/api/Entity/getEffect)
- Added [BlockSource.setDestroyParticlesEnabled(boolean)](/api/BlockSource/setDestroyParticlesEnabled) method
- Fixed [Item.invokeItemUseOn](/api/Item/invokeItemUseOn) not using given entity block source
- Fixed vanilla swords tool data
- Fixed destroying attachables was causing crash
- Fixed creating block states by block ID
- Fixed [BlockState.addStates](/api/BlockState/addStates) was not accepting JS object
- Other minor fixes

## 2.2.1b101

- Fixed some fence blocks were not displayed correctly in world

## 2.2.1b100

- Added [Block.getMaterial(blockId)](/api/Block/getMaterial)
- Added PlayerActor methods: [getItemUseDuration()](/api/PlayerActor/getItemUseDuration), [getItemUseIntervalProgress()](/api/PlayerActor/getItemUseIntervalProgress), [getItemUseStartupProgress()](/api/PlayerActor/getItemUseStartupProgress)
- Fixed multiplayer mod list was built with incorrect mod list
- Fixed [BlockSource.listEntitiesInAABB](/api/BlockSource/listEntitiesInAABB) was not returning player, when passed no filter parameters

## 2.2.1b99

- Fixed syncing runtime IDs in multiplayer could fail
- Fixed multiplayer mod list check was not working
- Fixed startup crash on old android versions on some devices

## 2.2.1b98

- Fixed [Commands.exec](/api/Commands/exec)
- Fixed [Entity.getNameTag](/api/Entity/getNameTag)

## 2.2.1b97

- Now when connecting to remote world, additional synchronization is done, to assure block runtime IDs will match even in case of different mods.

## 2.2.1b96

- Added methods [Recipes.getAllWorkbenchRecipes()](/api/Recipes/getAllWorkbenchRecipes) and [Recipes.getAllFurnaceRecipes()](/api/Recipes/getAllFurnaceRecipes)
- Added method [BlockSource.getBiomeDownfallAt(x, y, z)](/api/BlockSource/getBiomeDownfallAt)
- Added slot element properties: [iconScale](/api/interfaces/UI.UISlotElement.html#iconScale) and [disablePixelPerfect](/api/interfaces/UI.UISlotElement.html#disablePixelPerfect)
- Added methods for UI.Window: [updateScrollDimensions()](/api/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindow/updateScrollDimensions) and [updateWindowPositionAndSize()](/api/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindow/updateWindowPositionAndSize)
- Added new text alignment type: 3 - [ALIGN_CENTER_HORIZONTAL](/api/classes/UI.Font.html#ALIGN_CENTER_HORIZONTAL)
- Added functon [runOnClientThread(function)](/api/runOnClientThread), works as [runOnMainThread](/api/runOnMainThread), but for client ticking thread
- Fixed some item IDs compatibility and related recipes - nether start, melon, records, horse armor, fireball, fireworks
- Fixed chestplate model for modded armor

## 2.2.1b95

- Added BlockSource methods [setExtraBlock(x, y, z, BlockState/\[id, data\])](/api/BlockSource/setExtraBlock) and [getExtraBlock(x, y, z) -> BlockState](/api/BlockSource/getExtraBlock) to access and modify extra blocks, such as liquids in other blocks
- Added block description parameters [can_contain_liquid](/api/Block/SpecialType/can_contain_liquid) and [can_be_extra_block](/api/Block/SpecialType/can_be_extra_block)
- Added methods [Block.canContainLiquid(id)](/api/Block/canContainLiquid) and [Block.canBeExtraBlock(id)](/api/Block/canBeExtraBlock)
- Fixed settings changes were not applied on first launch after change
- Fixed crashes in mod config
- Fixed language settings were not loaded correctly
- Added developer option to output block state info dump

## 2.2.1b94

- Fixed new modpack selecting bug from [2.2.1b93](#221b93)
- Fixed [Item.isValid(id)](/api/Item/isValid), added [IDRegistry.getStringIdAndTypeForIntegerId(id)](/api/IDRegistry/getStringIdAndTypeForIntegerId), [IDRegistry.getTypeForIntegerId(id)](/api/IDRegistry/getTypeForIntegerId), [IDRegistry.getStringIdForIntegerId(id)](/api/IDRegistry/getStringIdForIntegerId)
- Fixed [getEnchantName](/api/com/zhekasmirnov/innercore/api/NativeItemInstanceExtra/getEnchantName) from ItemExtraData

## 2.2.1b93

- Fixed modded food
- Restored basic functionality of [PathNavigation](/api/modules/Entity.html#getPathNavigation)
- Added API to override underwater fog parameters and fixed underwater fog in custom dimensions
- Added *EntityAddedLocal* and *EntityRemovedLocal* callbacks - client side variants of *EntityAdded* and *EntityRemoved*
- Fixed [Entity.setOffhandItem](/api/Entity/setOffhandItem)
- Added [Dimensions.getAllRegisteredCustomBiomes()](/api/Dimensions/getAllRegisteredCustomBiomes) method, returning map of all custom biomes
- Various possible in-game chashes fixed
- Fixed some mod manager crashes and minor redesign
- Fixed wrong modpack can be loaded, when multiple modpacks are installed
- Improved Chinese support

## 2.2.1b92

- Errors in updatables (for example machines) now will not shutdown all mods until world reload. Instead it will disable only updatable, causing error.
- Crash fixes

## 2.2.1b90-91

- Previous version hotfix

## 2.2.1b89

- Fixed bug when block IDs were not synced in multiplayer
- Added [vanilla block states API](/api/classes/BlockState.html)
- Fixed workbench for connected players
- Fixed generation callbacks errors
- Improved saves stability
- Fixed links and guides page
- Fixed excess items were added to creative

## 2.2.1b88

- Added callback *EntityPickUpDrop(entity, dropEntity, dropStack, count)*, it is called, when entity picks up dropped item, right now works only for players
- Updated guides and links page, added links to mod and modpack development guides
- Minor fixes for ItemModel and other crashes and errors

## 2.2.1b87

- Fixed modpack system and mod manager issues
- Fixed missing or invalid workbench recipes and item icons
- Added useful links to preferences and links menu

## 2.2.1b86

- Global engine optimization will increase overall modded performance
- Fixed lags in creative inventory, when items with extra data are present
- Minor optimization for creative search

## 2.2.1b85

- Massive update to mod manager with alot of new features, fixes and improvements
- Added modpack support, including installation, modification and creating your own
- Block models are now loading faster and consume less RAM
- [BlockSource.breakBlock](/api/BlockSource/breakBlock)/[ForJsResult](/api/BlockSource/breakBlockForJsResult) methods now also invoke *DestroyBlock* callback, if actor is passed as a parameter and exists in BlockSource's dimension (and it was not prevented by *BreakBlock* callback)

## 2.2.0b84

- Added *PreProcessChunk* and *PostProcessChunk* callbacks - universal world generation callbacks. First one called before vanilla structures generation and second one after it. All others callbacks are called after vanilla generation but before *PostProcessChunk*.
- Fixed missing bed and chest recipes
- Fixed using mesh in ActorRenderer
- Fixed rare crashes when entering and leaving the world
- Fixed transparency was not working for far blocks
- Fixed *config.json* interaction with *.redirect*
- Added slot element binding selection_forced

## 2.2.0b83

- Rework for block drop system
- Added callback *BreakBlock(BlockSource, position, block, isDropAllowed, player, item)* - called when block is destroyed, unlike DestroyBlock can be called not only when block is destroyed by player, but also by new BlockSource methods. This callback is used for block drops, player destroy logic must remain in *DestroyBlock*.
- Drop functions now using *BreakBlock*
- Added methods to BlockSource: [breakBlock(x, y, z, isDropAllowed\[, actor\]\[, item\])](/api/BlockSource/breakBlock) - destroys block, calls *BreakBlock*, [breakBlockForJsResult(x, y, z\[, actor\]\[, item\])](/api/BlockSource/breakBlockForJsResult) - same as breakBlock, but instead of dropping items and exp orbs, returns: `{ experience:, items: [{ id:, count:, data:, extra: }, ... ] }`

## 2.2.0b82

- Added ItemContainer methods [setSlotSavingEnabled(name, enabled)](/api/com/zhekasmirnov/apparatus/api/container/ItemContainer/setSlotSavingEnabled), [setGlobalSlotSavingEnabled(enabled)](/api/com/zhekasmirnov/apparatus/api/container/ItemContainer/setGlobalSlotSavingEnabled), they are used to control, which slots are saved
- Added parameter to [destroy](/api/interfaces/TileEntity.TileEntityPrototype.html#destroy) method of tile entity, that indicates, if it was destroyed in *DestroyBlock* callback
- Optimized inventory editing methods for player
- Fixed editing player abilities, including flying
- Fixed server open listener in [ItemContainer](/api/classes/ItemContainer-1.html) was called before open packet is sent
- Fixed some furnace recipes
- Fixed loading bug on older Android versions
- Fixed breaking ice

## 2.2.0b79-81

- Added missing and fixed existing workbench recipes
- Fixed constant startup crashes on some devices (new bug since [1.16.201](#220b75))
- Fixed frequend startup crashes on some devices (old bug since [1.11.4](#200-beta))

## 2.2.0b78

- Continued fixing worldgen

## 2.2.0b77

- Fixed modded world generation was called multiple times per chunk. It will significantly reduce lag.
- Modded world generation now called AFTER vanilla worldgen
- Another attemt to fix loading mods on some devices
- Added log methods: [Logger.debug(tag, message)](/api/Logger/debug), [Logger.info(tag, message)](/api/Logger/info), [Logger.error(tag, message\[, error\])](/api/Logger/error)

## 2.2.0b76

- Fixed loading mods with resource packs
- Fixed saves errors
- Fixed loading mods on some devices
- Added parameter "category" in [Item.createItem](/api/Item/createItem)

## 2.2.0b75

### Updated for Minecraft 1.16.201

- Multiplayer might experience some issues with ID sync, if it happens, try swapping host and client
- Added API for armor and attachable renderer
- Major refactor for mod loader
- Major refactor for saves system and some other engine modules
- Started working on ECS and Java API

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
- Added [getLightLevel(x, y, z)](/api/BlockSource/getLightLevel) to BlockSource

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

- Added method [exists()](/api/Animation/Base/exists) to animations
- Minor fixes

## 2.1.0b59

- Added methods [BlockRenderer.setCustomRaycastShape(id, data, collisionShape)](/api/BlockRenderer/setCustomRaycastShape), [BlockRenderer.setCustomCollisionAndRaycastShape(id, data, collisionShape)](/api/BlockRenderer/setCustomCollisionAndRaycastShape)
- Added methods [BlockRenderer.mapCollisionModelAtCoords(dimensionId, x, y, z, model)](/api/BlockRenderer/mapCollisionModelAtCoords), [BlockRenderer.mapRaycastModelAtCoords(dimensionId, x, y, z, model)](/api/BlockRenderer/mapRaycastModelAtCoords), [BlockRenderer.mapCollisionAndRaycastModelAtCoords(dimensionId, x, y, z, model)](/api/BlockRenderer/mapCollisionAndRaycastModelAtCoords), for collision and raycast shape mapping, passing null model will unmap it, mapping works on any block including air
- Added BlockSource method [getBlock(x, y, z)](/api/BlockSource/getBlock), returning object, that contains both ID and data
- Clearing mapped render models (not collision ones) on local player dimension change as well as animations
- Other minor fixes

## 2.1.0b58

- Minor fixes

## 2.1.0b57

- Added method [Network.inRemoteWorld()](/api/Network/inRemoteWorld) - returns `true`, if player connected to remote world
- Added callback *ItemUseLocal(coords, item, block, player)* for client side item use
- Added callback *ConnectingToHost(host, minecraftPort, moddedPort)*
- Improvements for NetworkConnectedClientList
- Added method [BlockSource.getCurrentClientRegion()](/api/BlockSource/getCurrentClientRegion)
- Other minor fixes

## 2.1.0b56

- New item caching system, that caches every complex icon, not only custom models and allows creating of model cache groups
- Call [ItemModel.setCurrentCacheGroup("groupName", "version")](/api/ItemModel/setCurrentCacheGroup) at the start of your mod to create cache group, it will be applied to all models, created at the root of your mod (including default ones). If specified version does not match cache version, whole group will be re-created.
- Fixed ItemContainer interaction with items with extra data

## 2.1.0b55

- Fixed compatibility with Recipe Viewer
- Added block special type parameter [color_source](/api/Block/SpecialType/color_source), can be one of **"none"**, **"leaves"**, **"grass"**, **"water"**
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

- Added item model method [setModelOverrideCallback(function(item) \{ ... \})](/api/ItemModel/setModelOverrideCallback), acts like itemOverrideFunctions, but returns ItemModel instance, instead of icon
- Added method [ItemModel.newStandalone()](/api/ItemModel/newStandalone), creates empty ItemModel instance, not linked to any item, this models should be used in [setModelOverrideCallback](/api/interfaces/ItemModel-1.html#setModelOverrideCallback)
- Item override function now receives extra data
- Fixed crash, caused by calling [toScriptable()](/api/NBT/CompoundTag/toScriptable) method of NBT tags
- D8 dexer, instead of old DX is now used to build dex files from java

## 2.0.5b44

- Mods now can access and modify NBT of entities, tile entities and items
- Added functions: [Entity.getCompoundTag(entity)](/api/Entity/getCompoundTag), [Entity.setCompoundTag(entity, tag)](/api/Entity/setCompoundTag)
- Added methods to vanilla TileEntity, returned by [World.getContainer()](/api/World/getContainer): [getCompoundTag()](/api/NativeTileEntity/getCompoundTag), [setCompoundTag(tag)](/api/NativeTileEntity/setCompoundTag)
- Added methods to ItemExtraData: [getCompoundTag()](/api/com/zhekasmirnov/innercore/api/NativeItemInstanceExtra/getCompoundTag), [setCompoundTag(tag)](/api/com/zhekasmirnov/innercore/api/NativeItemInstanceExtra/setCompoundTag)
- Mod UI now supports modded animated item icons
- Icon override functions now receives second parameter - [isModUi](/api/modules/Item.html#registerIconOverrideFunction)
- Added function [Debug.big](/api/Debug/big), acts like [Debug.m](/api/Debug/m), but outputs dialog with selectable text and pretty JSON
- TileEntity function [click](/api/interfaces/TileEntity.TileEntityPrototype.html#click) now receives additional parameter - click coords
- Fixed rare addon-related crash

## 2.0.4b43

- Automatically deleting resource and behavior packs from uninstalled mods upon world load
- RenderMesh now can receive not only absolute file path, but also resource path and name of file in *models/* dir in resources.
- Deprecated slot element parameters [isTransparentBackground](/api/interfaces/UI.UISlotElement.html#isTransparentBackground) and [needClean](/api/interfaces/UI.UISlotElement.html#needClean), now slot supports transparent background by default
- Added container method [setOnOpenListener(function(container, window) \{ ... \})](/api/com/zhekasmirnov/innercore/api/mod/ui/container/Container/setOnOpenListener)
- Removed shared objects, built for x86 ABI to reduce overall weight
- Fixed error, that occurred after second [WRAP_JAVA](/api/WRAP_JAVA) call on same class

## 2.0.4b42

- [Callback.addCallback](/api/Callback/addCallback) now has third optional parameter - priority (integer, default value is 0). Callbacks with higher priority will be called earlier.
- UI slots now support animated background (texture name array must be passed instead of single name). For other textures in UI this feature was already present.
- UI slots now has text parameter, also container.setText work on them. If this parameter is not null, it value will be shown instead of count.
- [World.clip](/api/World/clip) now works on actors, but only on certain mode parameter values
- Fixed block icon generation for ICRender models

## 2.0.4b41

- Attemt to fix blurry UI on some devices

## 2.0.4b40

- Optimized mod UI, making it a bit faster and consume less RAM
- Added new mode for standard window, making all contents appear in separate window instead of background one. To use it in a new mode, use [UI.StandardWindow](/api/UI/StandardWindow) instead of misspelled [UI.StandartWindow](/api/UI/StandartWindow)
- Resource and behavior packs are now injected inside each world upon enter
- Animations (static models) are now cleaned up on dimension change
- Animations are now garbage collected after they are destroyed in world
- Added [Updatable.addAnimator(updatable_object)](/api/Updatable/addAnimator), which adds updatable, that ticks on client thread and never saves

## 2.0.4b39

- Minor fixes for previous version

## 2.0.4b38

- Added [TagRegistry](/api/modules/TagRegistry.html) module. Docs will be available after some tests and maybe rework.
- Added particle type properties [framesX](/api/interfaces/Particles.ParticleDescription.html#framesX) and [framesY](/api/interfaces/Particles.ParticleDescription.html#framesY), which define frame grid size
- Added particle type property [rebuildDelay](/api/interfaces/Particles.ParticleDescription.html#rebuildDelay), which defines time in ticks between particle mesh updates
- Added particle type properties [color2](/api/interfaces/Particles.ParticleDescription.html#color2) and [animators.color](/api/interfaces/Particles.ParticleDescription.html#animators), which allow animation of particle color
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
- Added function [Entity.getAllInsideBox(coords1, coords2\[, type, flag\])](/api/Entity/getAllInsideBox)
- Added function [Entity.getDimension(entity)](/api/Entity/getDimension)
- Added function [Item.setAllowedInOffhand(id, allowed)](/api/Item/setAllowedInOffhand)
- Added function [Game.simulateBackPressed()](/api/Game/simulateBackPressed)
- PathNavigation is majorly fixed and improved
- Fixed [Entity.setCarriedItem](/api/Entity/setCarriedItem)/[setOffhandItem](/api/Entity/setOffhandItem)/[setArmorSlot](/api/Entity/setArmorSlot) were not sending data to client on non-player entities
- Fixed some crashes, that could occur while transferring between dimensions
- Fixed rotation of animations
- Fixed error, that caused mod behavior packs to be ignored on first launch
- Fixed duplication mod behavior packs in world folder
- Fixed [Entity.spawn](/api/Entity/spawn) was working incorrectly with addon entities
- Fixed Translation module doing English to English translations
- Increased item name caching capacity
- Fixed window method setTouchable not working for game overlays
- Other minor stability-related fixes

## 2.0.3b33

- Added support for custom shader uniforms, that can be passed for individual models (more documentation will be released soon)
- Added support for controlled entity navigation via [Entity.getPathNavigation(entity)](/api/Entity/getPathNavigation)
- Added function [Entity.getAttribute(entity, name)](/api/Entity/getAttribute) to access and modify entity attributes
- Added functions: [Player.setAbility(name, value)](/api/Player/setAbility), [Player.getFloatAbility(name)](/api/Player/getFloatAbility), [Player.getBooleanAbility(name)](/api/Player/getBooleanAbility)
- Added uniform vec3 VIEW_POS to shaders on world models (animations)

## 2.0.3b32

- Fixed vanilla particles and mod models with blending drawing behing alpha-tested blocks and clouds

## 2.0.3b31

- Minor fixes, including custom dimensions and block meshes in hand render

## 2.0.3b30

- All changes applied to main version
- Fixed item icons with metadata

## 2.0.2b29

- Better TileEntity system: now unloaded tile entities, or ones without tick function will not be counted, when checking updatable limit. Added TileEntity functions [load()](/api/TileEntity/TileEntityPrototype/client), [unload()](/api/TileEntity/TileEntityPrototype/client) and [onCheckerTick(isInitialized, isLoaded, wasLoaded)](/api/TileEntity/TileEntityPrototype/client).
- Fixed crash with mob custom models
- Other minor fixes

## 2.0.2b28

- Added option **disable_loading_screen**, that disables loading screen and loads mods on main thread
- Fixed [World.clip](/api/World/clip), [RenderMesh.clone](/api/com/zhekasmirnov/innercore/api/NativeRenderMesh/clone), [Block.setupAsRedstoneReceiver](/api/Block/setupAsRedstoneReceiver)/[Emitter](/api/Block/setupAsRedstoneEmitter)
- Fixed some crashes from item models

## 2.0.2b27

- Fixed issue with spending items when tapping on block with UI
- Added functions to World module: [clip(x1, y1, z1, x2, y2, z2)](/api/World/clip), [doesVanillaTileHasUI(id)](/api/World/doesVanillaTileHasUI), [setBlockUpdateAllowed(true, false)](/api/World/setBlockUpdateAllowed), [setBlockUpdateType(type)](/api/World/setBlockUpdateType)
- Fixed functions for player experience work
- Fixed meshes after app was minimized

## 2.0.2b26

- Added server thread priority to Inner Core config
- Added [Block.registerNeighbourChangeFunction\[ForID\](id, function(coords, block, changeCoords) {})](/api/Block/registerNeighbourChangeFunction)
- Added [Block.registerEntityInsideFunction\[ForID\](id, function(coords, block, entity) {})](/api/Block/registerEntityInsideFunction)
- Added [Block.registerEntityStepOnFunction\[ForID\](id, function(coords, block, entity) {})](/api/Block/registerEntityStepOnFunction)
- Added RenderMesh methods [rotate(x, y, z, rx, ry, rz)](/api/com/zhekasmirnov/innercore/api/NativeRenderMesh/rotate), [fitIn(x1, y1, z1, x2, y2, z2\[, keepRatio\])](/api/com/zhekasmirnov/innercore/api/NativeRenderMesh/fitIn), [clone()](/api/com/zhekasmirnov/innercore/api/NativeRenderMesh/clone)
- Fixed colors and mesh position in item models

## 2.0.2b25

- Added block description property - [sound](/api/Block/SpecialType/sound), sets one of standard block sound types
- Added RenderMesh method [setLightPos(x, y, z)](/api/com/zhekasmirnov/innercore/api/NativeRenderMesh/setLightPos) - set relative position for block lighting
- Added RenderMesh method parameter [setFoliageTinted(leavesType)](/api/com/zhekasmirnov/innercore/api/NativeRenderMesh/setFoliageTinted)
- Fixed [ItemModel.occupy()](/api/ItemModel/occupy) method not preventing setting ICRender models

## 2.0.2b24

- Fixed crash from massive amount of blocks with RenderMesh
- Added methods to RenderMesh - [setNoTint()](/api/com/zhekasmirnov/innercore/api/NativeRenderMesh/setNoTint), [setGrassTinted()](/api/com/zhekasmirnov/innercore/api/NativeRenderMesh/setGrassTinted), [setFoliageTinted()](/api/com/zhekasmirnov/innercore/api/NativeRenderMesh/setFoliageTinted), [setWaterTinted()](/api/com/zhekasmirnov/innercore/api/NativeRenderMesh/setWaterTinted)
- Added preloader scipt methods - [Resources.getAllMatchingResources("regex")](/api/Resources/getAllMatchingResources), [Resources.getResourcePath("local path")](/api/Resources/getResourcePath), [Resources.getAllResourceDirectoriesPaths()](/api/Resources/getAllResourceDirectoriesPaths)

## 2.0.2b23

### UI and world item models engine was fully rewritten

- Mod UI support custom item models (non-meshes for now)
- Item animations now based on RenderMesh and support custom item models and materials
- Generating item models moved to new loading phase
- Item model caching will make their generation much faster after first launch
- [ItemModel](/api/ItemModel) API module is massively improved and allows access to all model-related stuff
- Additional materials can be passed to handle glint on item models
- Block [rendertype](/api/Block/SpecialType/rendertype) parameter is fixed and will affect block item model

### Other improvements

- Added condition [ICRender.RANDOM(value, max\[, seed\])](/api/ICRender/RANDOM) - for given block position generates random number from 0 to max - 1, and returns, if it is equal to value. Has method [setAxisEnabled(0-2, enabled)](/api/ICRender/RANDOM_CONDITION/setAxisEnabled) to ignore some axises.
- Added functions [Block.setupAsRedstoneReceiver(nameID, connectToRedstone)](/api/Block/setupAsRedstoneReceiver), [Block.setupAsRedstoneEmitter(nameID, connectToRedstone)](/api/Block/setupAsRedstoneEmitter), [Block.setupAsNonRedstoneTile(nameID)](/api/Block/setupAsNonRedstoneTile)
- RenderMesh: added method [addMesh(mesh\[, x, y, z\[, scaleX, scaleY, scaleZ\]\])](/api/com/zhekasmirnov/innercore/api/NativeRenderMesh/addMesh), alpha value now can be passed to [setColor](/api/com/zhekasmirnov/innercore/api/NativeRenderMesh/setColor)
- Added block description property - [mapcolor](/api/Block/SpecialType/mapcolor), sets 0xRRGGBB map color to block

## 2.0.2b22

- Minor fixes and improvements

## 2.0.2b21

- *(Experimental)* Global optimization, attempting to increase FPS by using dynamic thread priority
- *(Experimental)* World generation optimized
- Minor fixes for item models

## 2.0.2b20

This update adds alot and might be unstable.

- Added ability to create custom materials and shaders (more info will be provided soon)
- Added UI and in-hand item models, to access use [ItemModel.getFor(id, data)](/api/ItemModel/getFor)
- Added new animation mode - direct mesh render with material, to enter this mode call method [describe(\{ mesh: RenderMesh, skin: "texture name", material: "material name" \})](/api/com/zhekasmirnov/innercore/api/NativeRenderMesh/describe)
- Blocks with ICRender will automatically gain inventory models
- Added custom dimension methods: [setFogDistance(close, far)](/api/Dimensions/CustomDimension/setFogDistance), [resetFogDistance()](/api/Dimensions/CustomDimension/resetFogDistance)
- Other minor fixes

## 2.0.1b18

- Added directories *innercore/resource_packs*, *innercore/behavior_packs* for adding resource and behavior packs
- Local world resource and behaviour packs are now automatically forced for this world
- Added module [AddonEntityRegistry](/api/AddonEntityRegistry) and functions to work with addon-added mobs
- Minor fixes

## 2.0.1b17

- Added [GenerationUtils.generateOreCustom(x, y, z, id, data, amount, mode, listOfIds\[, seed\])](/api/GenerationUtils/generateOreCustom), also added optional **seed** parameter to [GenerationUtils.generateOre](/api/GenerationUtils/generateOre)
- Fixed drops from [World.destroyBlock](/api/World/destroyBlock)
- Fixed [Player.setHunger](/api/Player/setHunger), [Player.setSaturation](/api/Player/setSaturation), [Player.setExhaustion](/api/Player/setExhaustion)
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
- Added callback *GenerateBiomeMap*, that uses [World.get](/api/World/getBiomeMap)/[setBiomeMap](/api/World/setBiomeMap) to build chunk biome map before any generation
- Added new parameters to generation callbacks: (chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed)
- Added [GenerationUtils.getPerlinNoise(x, y, z, seed, scale, numOctaves)](/api/GenerationUtils/getPerlinNoise)
- Added [World.addGenerationCallback(callbackName, callback\[, hashString\])](/api/World/addGenerationCallback), that uniquely modifies chunk seed before calling callback

## 2.0.1b10

- Added mod loading UI
- Mods are now loading in separate thread
- Fixed UI hangs after fast-clicking on block or item with UI
- Fixed some errors with drops and tools
- Fixed fatal error tip message randomly appearing during world load

## 2.0.0b9

- Completed classic mod UI and workbench UI
- Now mod UI will close when back is pressed or app is minimized
- Fixed possible crashes from render mapping and [Item.getName](/api/Item/getName)
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

- Fixes for system versions lower than Android 9

## 2.0.0b4

- Some UI fixes, mostly for devices with cutout

## 2.0.0b2 beta

- Minor fixes before release

## 2.0.0 beta

- First version released
