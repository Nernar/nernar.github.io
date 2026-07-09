---
toc_max_heading_level: 2
---

# Changelog

## 3.1.1b128 (@rislaed)

Hotfix after previous update and a few useful improvements

### Fixes {#3.1.1b128-fixes}

- Fixed error catching in some compiled libraries, which also fixed stack traces
- Fixed duplication of TileEntity savers caused by mod errors, which could lead to partial data loss
- Fixed [TileEntity registration](/api/namespace/TileEntity#registerPrototype) in case of re-registration or with incorrect identifiers
- Limited number of messages on error screens (excluding loading stage), which also fixed some crashes due to out-of-memory issues
- Fixed opening of certain pages in mod browser

## 3.1.1b127

### New Features {#3.1.1b127-new-features}

- Added [UpdatableScheduler](/api/namespace/UpdatableScheduler) module, adding new capabilities for configuring the tick of updatables and their optimization; old updatables and tile entities also received these capabilities via [_handle](/api/interface/Updatable#_handle) (@zheka2304)
- Added methods to [BlockSource](/api/class/BlockSource#playSound) (work in multiplayer), [World](/api/namespace/World#playSound), and [UI](/api/namespace/UI#playSound) (work on the client) for playing and stopping sounds (@rislaed)
- Added methods to Player for getting the player's [input vector](/api/namespace/Player#getMoveInputVector) and [changing perspective](/api/namespace/Player#setViewPerspective) (@rislaed)
- Implemented [Entity.getAge](/api/namespace/Entity#getAge)/[Entity.setAge](/api/namespace/Entity#setAge) (@rislaed)
- Added [Game.getPackVersion](/api/namespace/Game#getPackVersion)/[getPackVersionCode](/api/namespace/Game#getPackVersionCode) methods (@rislaed)

### API Improvements and Refinements {#3.1.1b127-api-improvements-and-refinements}

- [Item](/api/namespace/Item) module has been rewritten using codegen; new methods added for getting properties and managing items (@rislaed)
- [ItemExtraData](/api/class/ItemExtraData) and [ItemInstance](/api/interface/ItemInstance) ported to codegen and exposed them to the Java API (@zheka2304)
- [BlockState](/api/class/BlockState) ported to codegen and exposed to the Java API; callbacks that previously received a block object `{ id, data }` ([Tile](/api/interface/Tile)) now receive BlockState (@zheka2304)
- All exceptions from Java, including errors from methods in codegen, can now be caught in scripts; improved display of Java stack traces for such errors (@zheka2304)
- Added [compact stack traces](/api/namespace/Logger#captureRhinoStackTrace) to errors about missing item and recipe identifiers; stack traces are now automatically added when logging errors (@rislaed)
- New and generated API methods can now automatically convert string parameters to numeric values (@zheka2304)

### Fixes {#3.1.1b127-fixes}

- Fixed crash when attempting to [create a throwable item](/api/namespace/Item#createThrowableItem) (@rislaed, @zheka2304)
- Fixed random crashes when attempting to travel between dimensions (@zheka2304)
- Disabled guaranteed tile entity initialization when obtained via [getTileEntity](/api/namespace/TileEntity#getTileEntity), which was breaking voltage in IC2 (@zheka2304)
- Fixed a possible error when connecting over the network (@reider745)
- Event [redstone](/api/interface/TileEntity#redstone) is now deferred until tile entity initialization (@zheka2304)
- Fixed errors when sending NaN value changes via bindings in containers (@zheka2304)
- Fixed [Entity.getAllInsideBox](/api/namespace/Entity#getAllInsideBox) method (@zheka2304)
- Fixed resource pack loading for certain versions when a mod is disabled, and prevented their possible duplication (@rislaed)
- Fixed the behavior of .redirect in mods; the browser now displays information about it (@rislaed)
- Fixed content import methods and in-game file loading (@rislaed)

## 3.1.0b126

### New Features {#3.1.0b126-new-features}

- Added methods for manipulating weather, atmosphere, and other [dimension properties](/api/class/Dimensions.CustomDimension) (@rislaed)
- Added support for custom [block sounds](/api/interface/Block.SpecialType#sound) (@rislaed)
- Added support for blocks and items namespaces and methods for working with them (@zheka2304, @rislaed)
- Added support for parsing HTML colors in [UI elements](/api/namespace/UI#FontColor) (@rislaed)
- Added a method to get the list of custom dimensions (@rislaed)

### API Improvements and Refinements {#3.1.0b126-api-improvements-and-refinements}

:::tip Implemented API code generation

Which will significantly improve performance and simplify the introduction of new API methods, including support for Java mods (@zheka2304, @rislaed). The legacy API will be gradually migrated to the new system.

:::

- Restored functionality and migrated the PathNavigation module to code generation (@zheka2304)
- Migrated the [BlockSource](/api/class/BlockSource) module to code generation (@reider745)
- Added methods for API module manipulation: [injectBindingsIntoScope](/api#injectBindingsIntoScope), [injectModule(s)IntoScope](/api#injectModuleIntoScope) (@rislaed)

### Fixes {#3.1.0b126-fixes}

- Fixed the entity hurt event (@zheka2304)
- Fixed the [BlockSource.fetchEntitiesOfTypeInAABB](/api/class/BlockSource#fetchEntitiesOfTypeInAABB) method (@zheka2304)
- Fixed using items from mods on certain vanilla blocks (@rislaed)
- [getTileEntity](/api/namespace/TileEntity#getTileEntity) now guaranteed to return an already loaded TileEntity (@reider745)
- Fixed the display of certain items in containers (@reider745)
- Fixed player saturation changes (@reider745)
- Fixed emerald ore drops (@mineexplorer)
- Fixed nether fence models in interfaces (@mineexplorer)
- Fixed custom sky, sunset, and fog colors (@zheka2304)
- Disabled Realms support (@rislaed)

## 3.1.0b125 (@reider745, @rislaed)

### New Features {#3.1.0b125-new-features}

- Added [Entity.playAnimation](/api/namespace/Entity#playAnimation) function
- Added [BlockSource.setRedstoneSignal](/api/class/BlockSource#setRedstoneSignal) and [BlockSource.getRedstoneSignal](/api/class/BlockSource#getRedstoneSignal) methods
- Added [CustomScale](/api/class/CustomScale) module
- Added functions [Game.addWorldToCache](/api/namespace/Game#addWorldToCache)/[updateWorlds](/api/namespace/Game#updateWorlds)/[getWorldsCount](/api/namespace/Game#getWorldsCount)
- Added method [BlockSource.randomTick](/api/class/BlockSource#randomTick)
- Added method [NativeTileEntity.tick](/api/interface/NativeTileEntity#tick)
- Added new block properties [burnOdds](/api/interface/Block.SpecialType#burn_odds)/[flameOdds](/api/interface/Block.SpecialType#flame_odds)

### Fixes {#3.1.0b125-fixes}

- Fixed saves were sometimes broken
- Fixed custom colors for fog/water/sky
- Fixed [PathNavigation](/api/interface/Entity.PathNavigation) module
- In dev mode compilation errors now are displayed earlier
- Fixed block pallete generation for net sync
- Fixed some vanilla block icons in UI

## 3.0.0b124

### Migrating to Minecraft 1.16.201 ARM64

This version received support for 64-bit architectures (arm64-v8a), which also eliminated a number of crashes and increased overall stability. Some bugs are expected to be fixed with upcoming updates.

## 2.4.0b123 (@rislaed)

Most likely, this is the latest version for ARM32 architectures (armeabi-v7a). All subsequent updates are released for 64-bit devices and this packs will receive only critical bug fixes.

:::note Mod Manager features & fixes

- Added dependencies and add-ons sections for mod pages, displays mods and modpacks
- Improvements for switching to proxy. On failure display a message, suggesting using VPN
- \[Adapted\] mod label was removed, now non-adapted mods are displayed as \[Obsolete\]
- Added a switch to enable/disable mods, appears only in the installed mods tab
- Added section with screenshots to modpacks (not displayed if modpack has one screenshot), included dependencies and comments
- Mods popular category has been replaced by default redaction category, this is to move outdated mods to bottom of list
- Searching with icmods: prefix can search for multiple mods at once and opens modpacks correctly

:::

- Rollback [b122o1](#240b122o1) changes for Inner Core Test
- Added [EDamageCause](/api/enum/EDamageCause) for determining entity damage type, set [ToolAPI.registerSword](/api/namespace/ToolAPI#registerSword) default damage to 4
- Fixed implementing Java abstract classes in JavaScript
- Added methods for client working with Updatable: [getAllLocal](/api/namespace/Updatable#getAllLocal) and [getLocalSyncTime](/api/namespace/Updatable#getLocalSyncTime)
- Added feature to apply click and long click events to inventory slots, fixed updates and slot resizing
- Fixed display of header translations in config, [ItemContainer.sealSlot](/api/class/ItemContainer#sealSlot) correctly overwrites *getTransferPolicy*, [Entity.health](/api/namespace/Entity#health) works again

## 2.4.0b122o1

- Minor tweaks & internal refactor

## 2.4.0b122 (@reider745)

- Added [World.addListenerChunkStateChanged(listener, statesList)](/api/namespace/World#addListenerChunkStateChanged)/[addLocalListenerChunkStateChanged](/api/namespace/World#addLocalListenerChunkStateChanged) methods to track chunks loading and unloading
- Added ability to get game settings via [Game.getOption(key)](/api/namespace/Game#getOption), use [Game.getOptions](/api/namespace/Game#getOptions) to list all available keys
- Added *OptionsChanged* callback, which is called immediately after completing game options change
- Implemented binary data packets, pass an bytes array to send them
- Fixed dispensers functionality with modded liquid buckets and also player identifier transfering to *CraftRecipePreProvided* callback

## 2.4.0b120-121 (@reider745)

- Fixed mod browser proxy
- Fixed broken saves bugs due to collision
- Fixed mod error messages localization
- Added API module [GameController](/api/namespace/GameController), to emulate player actions from mods
- Added [Entity.getAllLocal](/api/namespace/Entity#getAllLocal) method
- Fixed *EntityAddedLocal*/*EntityRemovedLocal* callbacks in multiplayer
- Fixed [Player.localPlayerTurn](/api/namespace/Player#localPlayerTurn)
- Mod browser minor crash fixes
- In-game minor crash fixes

## 2.4.0b118-119 (@reider745)

- Net protocol improvements
- Added BlockSource methods for weather control
- Added [Particles.addBreakingItemParticle](/api/namespace/Particles#addBreakingItemParticle) method
- Added [Item.setShouldDespawn](/api/namespace/Item#setShouldDespawn)/[setFireResistant](/api/namespace/Item#setFireResistant)/[setExplodable](/api/namespace/Item#setExplodable) methods
- Fixed memory leaks in mesh render

## 2.4.0b116-117

Added modded server support based on [ZoteCore](https://github.com/Reider745/ZoteCoreLoader), related changes:

- Fixed server list tab, modpacks can now have their own server list
- Fixed player UUID was not stored, which broke local multiplayer inventory and servers
- Added sync for socket server port
- Added sync for biome ids
- Other server-related fixes

:::note Other changes (@reider745)

- Added proxy to mod browser, which is used in case main url is not available (@spawnrys)
- Fixed [client TileEntity sync](/api/interface/TileEntity.LocalTileEntityPrototype), added methods [onConnectionPlayer](/api/interface/TileEntity.TileEntityPrototype#onConnectionPlayer)/[onDisconnectionPlayer](/api/interface/TileEntity.TileEntityPrototype#onDisconnectionPlayer)
- In case of saves failture, they will now default to [empty js object](/api/interface/Saver.IScopeSaver#getDefaultSaves)
- Added ICRender condition [ICRender.BlockState(x, y, z, stateId, valueState)](/api/namespace/ICRender#BlockState)
- Fixed UI on devices with notch (Added switch to config)
- Optimized static item models (Added to config)
- Fixed [loadCustom](/api/class/Animation.Base#loadCustom) in remote sessions
- Fixed [Entity.getMobile](/api/namespace/Entity#getMobile)
- Fixed [World.getWorldTime](/api/namespace/World#getWorldTime) on client

:::

:::note Other changes (@zheka2304)

- Fixed frequent crashes when launching Inner Core
- Updated Rhino to latest version - javascript engine for mods
- Many optimization in native code of the Inner Core
- Added [Player.localPlayerTurn(x, y)](/api/namespace/Player#localPlayerTurn)
- Added PlayerActor methods [canFly](/api/class/PlayerActor#canFly)/[setCanFly](/api/class/PlayerActor#setCanFly), [setPlayerBoolean](/api/class/PlayerActor#setPlayerBooleanAbility)/[FloatAbility](/api/class/PlayerActor#setPlayerFloatAbility), [getPlayerBoolean](/api/class/PlayerActor#getPlayerBooleanAbility)/[FloatAbility](/api/class/PlayerActor#getPlayerFloatAbility)
- Fixed [World](/api/namespace/World) module was not working in remote sessions
- Added support for custom [empty buckets](/api/interface/Block.LiquidDescriptor#bucket), when registering custom liquids
- Fixed crash in [block step on event](/api/namespace/Block#registerEntityStepOnFunction)
- Fixed [Dimensions.transfer](/api/namespace/Dimensions#transfer) when transfering into the same dimension
- Minor fixes to custom dimension generator
- Fixed installation of some mods

:::

## 2.3.1b115

- A lot of minor optimizations, fixes and stability improvements
- Fixed some recipes were missing in workbench (like IC2 batteries)
- Mod loading priority support
- Preview built-in [ECS](/api/namespace/ECS)
- Added [ItemModel.setSpriteHandRender](/api/interface/ItemModel#setSpriteHandRender) method
- Added CustomDimensionGenerator method [CustomDimensionGenerator.setGenerateCaves(generate[, generateUnderwater])](/api/class/Dimensions.CustomGenerator#setGenerateCaves), fixed underwater caves generated by default
- Added BlockSource method [listEntitiesOfTypeInAABB(x1, y1, z1, x2, y2, z2, stringType)](/api/class/BlockSource#listEntitiesOfTypeInAABB), fixed [listEntitiesInAABB](/api/class/BlockSource#listEntitiesInAABB) for exact type
- Added [Player.getLocal()](/api/namespace/Player#getLocal) and [Player.getServer()](/api/namespace/Player#getServer) methods
- Added [UI.getMinecraftUiScale()](/api/namespace/UI#getMinecraftUiScale) and [UI.getRelMinecraftUiScale()](/api/namespace/UI#getRelMinecraftUiScale) methods
- Fixed enchant custom callbacks crash
- Fixed [knockback resistance](/api/interface/Item.ArmorParams#knockbackResist) for custom armor
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
- Faster [access to modded tile entities via coordinates](/api/namespace/TileEntity#getTileEntity)
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
- Added [Block.registerClickFunction[ForID](nameId/id, (coords, item, block, player) => void)](/api/namespace/Block#registerClickFunction)
- Fixed position, passed dispense callback, added slot parameter (4th argument)

## 2.2.1b103

- When creating liquids you can now automatically create buckets with full functionality [(see docs)](/api/interface/Block.LiquidDescriptor#bucket)
- Added [isRenewable](/api/interface/Block.LiquidDescriptor#isRenewable) parameter for custom liquids
- Fixed bucket interaction with custom liquids

## 2.2.1b102

- Added [methods](https://gist.github.com/zheka2304/a93f32f612750cbffc637a265fbf9027) for creating liquid blocks
- Fixed some mod manager issues and crashes, added ability to search mod by it's ID
- Added [Entity.hasEffect(entity, effectId)](/api/namespace/Entity#hasEffect) and [Entity.getEffect(entity, effectId)](/api/namespace/Entity#getEffect)
- Added [BlockSource.setDestroyParticlesEnabled(boolean)](/api/class/BlockSource#setDestroyParticlesEnabled) method
- Fixed [Item.invokeItemUseOn](/api/namespace/Item#invokeItemUseOn) not using given entity block source
- Fixed vanilla swords tool data
- Fixed destroying attachables was causing crash
- Fixed creating block states by block ID
- Fixed [BlockState.addStates](/api/class/BlockState#addStates) was not accepting JS object
- Other minor fixes

## 2.2.1b101

- Fixed some fence blocks were not displayed correctly in world

## 2.2.1b100

- Added [Block.getMaterial(blockId)](/api/namespace/Block#getMaterial)
- Added PlayerActor methods: [getItemUseDuration()](/api/class/PlayerActor#getItemUseDuration), [getItemUseIntervalProgress()](/api/class/PlayerActor#getItemUseIntervalProgress), [getItemUseStartupProgress()](/api/class/PlayerActor#getItemUseStartupProgress)
- Fixed multiplayer mod list was built with incorrect mod list
- Fixed [BlockSource.listEntitiesInAABB](/api/class/BlockSource#listEntitiesInAABB) was not returning player, when passed no filter parameters

## 2.2.1b99

- Fixed syncing runtime IDs in multiplayer could fail
- Fixed multiplayer mod list check was not working
- Fixed startup crash on old android versions on some devices

## 2.2.1b98

- Fixed [Commands.exec](/api/namespace/Commands#exec)
- Fixed [Entity.getNameTag](/api/namespace/Entity#getNameTag)

## 2.2.1b97

- Now when connecting to remote world, additional synchronization is done, to assure block runtime IDs will match even in case of different mods.

## 2.2.1b96

- Added methods [Recipes.getAllWorkbenchRecipes()](/api/namespace/Recipes#getAllWorkbenchRecipes) and [Recipes.getAllFurnaceRecipes()](/api/namespace/Recipes#getAllFurnaceRecipes)
- Added method [BlockSource.getBiomeDownfallAt(x, y, z)](/api/class/BlockSource#getBiomeDownfallAt)
- Added slot element properties: [iconScale](/api/interface/UI.UISlotElementProps#iconScale) and [disablePixelPerfect](/api/interface/UI.UISlotElementProps#disablePixelPerfect)
- Added methods for UI.Window: [updateScrollDimensions()](/api/class/UI.Window#updateScrollDimensions) and [updateWindowPositionAndSize()](/api/class/UI.Window#updateWindowPositionAndSize)
- Added new text alignment type: 3 - [ALIGN_CENTER_HORIZONTAL](/api/class/UI.Font#ALIGN_CENTER_HORIZONTAL)
- Added functon [runOnClientThread(function)](/api#runOnClientThread), works as [runOnMainThread](/api#runOnMainThread), but for client ticking thread
- Fixed some item IDs compatibility and related recipes - nether start, melon, records, horse armor, fireball, fireworks
- Fixed chestplate model for modded armor

## 2.2.1b95

- Added BlockSource methods [setExtraBlock(x, y, z, BlockState/\[id, data\])](/api/class/BlockSource#setExtraBlock) and [getExtraBlock(x, y, z) -> BlockState](/api/class/BlockSource#getExtraBlock) to access and modify extra blocks, such as liquids in other blocks
- Added block description parameters [can_contain_liquid](/api/interface/Block.SpecialType#can_contain_liquid) and [can_be_extra_block](/api/interface/Block.SpecialType#can_be_extra_block)
- Added methods [Block.canContainLiquid(id)](/api/namespace/Block#canContainLiquid) and [Block.canBeExtraBlock(id)](/api/namespace/Block#canBeExtraBlock)
- Fixed settings changes were not applied on first launch after change
- Fixed crashes in mod config
- Fixed language settings were not loaded correctly
- Added developer option to output block state info dump

## 2.2.1b94

- Fixed new modpack selecting bug from [2.2.1b93](#221b93)
- Fixed [Item.isValid(id)](/api/namespace/Item#isValid), added [IDRegistry.getStringIdAndTypeForItemId(id)](/api/namespace/IDRegistry#getStringIdAndTypeForItemId), [IDRegistry.getTypeForItemId(id)](/api/namespace/IDRegistry#getTypeForItemId), [IDRegistry.getStringIdForItemId(id)](/api/namespace/IDRegistry#getStringIdForItemId) methods
- Fixed [getEnchantName](/api/class/ItemExtraData#getEnchantName) from ItemExtraData

## 2.2.1b93

- Fixed modded food
- Restored basic functionality of [PathNavigation](/api/namespace/Entity#getPathNavigation)
- Added API to override underwater fog parameters and fixed underwater fog in custom dimensions
- Added *EntityAddedLocal* and *EntityRemovedLocal* callbacks - client side variants of *EntityAdded* and *EntityRemoved*
- Fixed [Entity.setOffhandItem](/api/namespace/Entity#setOffhandItem)
- Added [Dimensions.getAllRegisteredCustomBiomes()](/api/namespace/Dimensions#getAllRegisteredCustomBiomes) method, returning map of all custom biomes
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
- Added [vanilla block states API](/api/class/BlockState)
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
- [BlockSource.breakBlock](/api/class/BlockSource#breakBlock)/[ForJsResult](/api/class/BlockSource#breakBlockForJsResult) methods now also invoke *DestroyBlock* callback, if actor is passed as a parameter and exists in BlockSource's dimension (and it was not prevented by *BreakBlock* callback)

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
- Added methods to BlockSource: [breakBlock(x, y, z, isDropAllowed\[, actor\]\[, item\])](/api/class/BlockSource#breakBlock) - destroys block, calls *BreakBlock*, [breakBlockForJsResult(x, y, z\[, actor\]\[, item\])](/api/class/BlockSource#breakBlockForJsResult) - same as breakBlock, but instead of dropping items and exp orbs, returns: `{ experience:, items: [{ id:, count:, data:, extra: }, ... ] }`

## 2.2.0b82

- Added ItemContainer methods [setSlotSavingEnabled(name, enabled)](/api/class/ItemContainer#setSlotSavingEnabled), [setGlobalSlotSavingEnabled(enabled)](/api/class/ItemContainer#setGlobalSlotSavingEnabled), they are used to control, which slots are saved
- Added parameter to [destroy](/api/interface/TileEntity.TileEntityPrototype#destroy) method of tile entity, that indicates, if it was destroyed in *DestroyBlock* callback
- Optimized inventory editing methods for player
- Fixed editing player abilities, including flying
- Fixed server open listener in [ItemContainer](/api/class/ItemContainer) was called before open packet is sent
- Fixed some furnace recipes
- Fixed loading bug on older Android versions
- Fixed breaking ice

## 2.2.0b79-81

- Added missing and fixed existing workbench recipes
- Fixed constant startup crashes on some devices (new bug since [1.16.201](#220b75))
- Fixed frequend startup crashes on some devices (old bug since [1.11.4](changelog-legacy#200-beta))

## 2.2.0b78

- Continued fixing worldgen

## 2.2.0b77

- Fixed modded world generation was called multiple times per chunk. It will significantly reduce lag.
- Modded world generation now called AFTER vanilla worldgen
- Another attemt to fix loading mods on some devices
- Added log methods: [Logger.debug(tag, message)](/api/namespace/Logger#debug), [Logger.info(tag, message)](/api/namespace/Logger#info), [Logger.error(tag, message\[, error\])](/api/namespace/Logger#error)

## 2.2.0b76

- Fixed loading mods with resource packs
- Fixed saves errors
- Fixed loading mods on some devices
- Added parameter "category" in [Item.createItem](/api/interface/Item.ItemParams#category)

## 2.2.0b75

### Updated for Minecraft 1.16.201

- Multiplayer might experience some issues with ID sync, if it happens, try swapping host and client
- Added API for armor and attachable renderer
- Major refactor for mod loader
- Major refactor for saves system and some other engine modules
- Started working on ECS and Java API

## Legacy Versions

Since we cannot fit the entire list on a single page to avoid overwhelming browsers with unnecessary content loading, you can find the changelog for older versions [on this page](./changelog-legacy).
