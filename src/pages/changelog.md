# Changelog

## 2.2.1b112

- Vanilla crafting table now supports modded recipes. Crafting table UI override was disabled, but can be enabled in settings, if something will go wrong.
- Fixed and improved workbench API, added full support for 2x2 recipes
- Added experimental API for creating custom enchants: <https://gist.github.com/zheka2304/188a43e9ee130c1830af6cdc308cbeff>
- Fixes and optimization for C++ to Java calls
- Faster access to modded tile entities
- *LevelLeft* callback now called at the better moment, no server ticks will be called after it. Added *ServerLevelLeft* and *LocalLevelLeft*.
- Minor fixes for icons in UI
- Updated *EParticleType* enum

## 2.2.1b104

- Fixed last item in hend was not spending
- Fixed animated liquid textures
- Fixed endless custom buckets in survival
- Now changing items in *ItemUse* callback are handled correctly when not prevented
- Added `Block.registerClickFunction[ForID](nameId/id, (coords, item, block, player) => void)`
- Fixed position, passed dispense callback, added slot parameter (4th argument)

## 2.2.1b103

- When creating liquids you can now automatically create buckets with full functionality *(see docs)*
- Added *isRenewable* parameter for custom liquids
- Fixed bucket interaction with custom liquids

## 2.2.1b102

- Added methods for creating liquid blocks, docs: <https://gist.github.com/zheka2304/a93f32f612750cbffc637a265fbf9027>
- Fixed some mod manager issues and crashes, added ability to search mod by its id
- Added `Entity.hasEffect(entity, effectId)` and `Entity.getEffect(entity, effectId)`
- Added `BlockSource.setDestroyParticlesEnabled(boolean)` method
- Fixed *Item.invokeItemUseOn* not using given entity block source
- Fixed vanilla swords tool data
- Fixed destroying attachables was causing crash
- Fixed creating block states by block id
- Fixed *BlockState.addStates* was not accepting JS object
- Other minor fixes

## 2.2.1b101

- Fixed some fence blocks were not displayed correctly in world

## 2.2.1b100

- Added `Block.getMaterial(blockId)`
- Added *PlayerActor* methods: `getItemUseDuration()`, `getItemUseIntervalProgress()`, `getItemUseStartupProgress()`
- Fixed multiplayer mod list was built with incorrect mod info
- Fixed *BlockSource.listAllEntitiesInAABB* was not returning player, when passed no filter parameters

## 2.2.1b99

- Fixed syncing runtime ids in multiplayer could fail
- Fixed multiplayer mod list check was not working
- Fixed startup crash on old android versions on some devices

## 2.2.1b98

- Fixed *Commands.exec*
- Fixed *Entity.getNameTag*

## 2.2.1b97

- Now when connecting to remote world, additional synchronization is done, to assure block runtime ids will match even in case of different mods.

## 2.2.1b96

- Added methods `Recipes.getAllWorkbenchRecipes()` and `Recipes.getAllFurnaceRecipes()`
- Added method `BlockSource.getBiomeDownfallAt(x, y, z)`
- Added slot element properties: *iconScale* and *disablePixelPerfect*
- Added methods for *UI.Window*: `updateScrollDimensions()` and `updateWindowPositionAndSize()`
- Added new text alignment type: 3 - *ALIGN_CENTER_HORIZONTAL*
- Added functon `runOnClientThread(function)`, works as *runOnMainThread*, but for client ticking thread
- Fixed some item ids compatibility and related recipes - nether start, melon, records, horse armor, fireball, fireworks
- Fixed chestplate model for modded armor

## 2.2.1b95

- Added *BlockSource* methods `setExtraBlock(x, y, z, BlockState/[id, data])` and `getExtraBlock(x, y, z) -> BlockState` to access and modify extra blocks, such as liquids in other blocks
- Added block description parameters *can_contain_liquid* and *can_be_extra_block*
- Added methods `Block.canContainLiquid(id)` and `Block.canBeExtraBlock(id)`
- Fixed settings changes were not applied on first launch after change
- Fixed crashes in mod config
- Fixed language settings were not loaded correctly
- Added developer option to output block state info dump

## 2.2.1b94

- Fixed new modpack selecting bug from [2.2.1b93](#221b93)
- Fixed `Item.isValid(id)`, added `IDRegistry.getStringIdAndTypeForIntegerId(id)`, `IDRegistry.getTypeForIntegerId(id)`, `IDRegistry.getStringIdForIntegerId(id)`
- Fixed *getEnchantName* from *ItemExtraData*

## 2.2.1b93

- Fixed modded food
- Restored basic functionality of *PathNavigation*
- Added API to override underwater fog parameters and fixed underwater fog in custom dimensions
- Added *EntityAddedLocal* and *EntityRemovedLocal* callbacks - client side variants of *EntityAdded* and *EntityRemoved*
- Fixed *Entity.setOffhandItem*
- Added `Dimensions.getAllRegisteredCustomBiomes()` method, returning map of all custom biomes
- Various possible in-game chashes fixed
- Fixed some mod manager crashes & minor redesign
- Fixed wrong modpack can be loaded, when multiple modpacks are installed
- Improved Chinese support

## 2.2.1b92

- Errors in updatables (for example machines) now will not shutdown all mods until world reload. Instead it will disable only updatable, causing error.
- Crash fixes

## 2.2.1b91

__Update to Minecraft 1.16.201, most mods, optimized for 1.11.4 will work fine on 1.16.201 without migration.__

- Massive update to saves system
- Added attachable renderer API
- Added vanilla block states API
- Major mod loader refactor, added new mod structure features
- Many fixes for old bugs and probably many new ones

## 2.1.0b71

__Added experimental modded multiplayer.__

Players with same mods are now allowed to connect to each other via LAN or through Xbox. This feature is experimental, may contain bugs and could be unstable, but it is already tested and debugged to be playable.

> Please notice, that all mods must be same (and same versions) to play with each other, otherwise it will kick you and may cause crash, while connecting.

__All mods need to be rewritten and adapted for multiplayer by their developers__, mods, with multiplayer support will be marked in mod browser as *[Multiplayer]*. You can play in multiplayer with not adapted mods, but it will show warning and most likely will cause mod malfunction and maybe even crash.

You are now able to login into Xbox to play not only on same WiFi, but via Xbox friends from any place.

> If you have encountered some problems with logging in or playing online, you can always open FAQ in login dialog.

### Massive API updates

- *Network* module and some other network-related classes
- Added classes *BlockSource* to access certain dimension and *PlayerActor* for certain player
- Added class *ItemContainer* - container via multiplayer support
- Added ability to access and modify NBT of mods, vanilla *TileEntity* and items
- New *ItemModel* caching system with grouping and better caching algorithm
- Added collision block model mapping, same as render model
- Added item model override function, same as icon override
- Model and icon override functions now receiving *ItemExtraData*
- Many callbacks got new parameters (mostly *BlockSource* and player)
- Alot of other changes.

## 2.0.5b43

- Optimized mod UI, making it a bit faster and consume less RAM
- Added new mode for standard window, making all contents appear in separate window instead of background one. To use it in a new mode, use *UI.StandardWindow* instead of misspelled *UI.StandartWindow*
- Custom dimension generator got heavy optimizations by decreasing noise level of detail. However, custom level of detail now can be set to individual noise generators.
- Resource and behavior packs are now injected inside each world upon enter
- Added *TagRegistry* module. Docs will be available after some tests and maybe rework.
- *Callback.addCallback* now has third optional parameter - priority (integer, default value is 0). Callbacks with higher priority will be called earlier
- UI slots now support animated background (texture name array must be passed instead of single name). For other textures in UI this feature was already present.
- UI slots now has text parameter, also *container.setText* work on them. If this parameter is not null, it value will be shown instead of count
- Deprecated slot element parameters *isTransparentBackground* and *needClean*, now slot supports transparent background by default
- *ItemModel* got new methods, that can set custom bitmap as icon in mod ui
- Added particle type properties *framesX* and *framesY*, which define frame grid size.
- Added particle type property *rebuildDelay*, which defines time in ticks between particle mesh updates
- Added particle type properties *color2* and *animators.color*, which allow animation of particle color
- Added `Updatable.addAnimator(updatable_object)`, which adds updatable, that ticks on client thread and never saves
- Animations (static models) are now cleaned up on dimension change
- Animations are now garbage collected after they are destroyed in world
- Added *DimensionLoaded(currentId, lastId)* and *DimensionUnloaded(unloadedId)* callbacks
- *RenderMesh* now can receive not only absolute file path, but also resource path and name of file in *models/* dir in resources.
- Added container method *setOnOpenListener(function(container, window) {...})*
- Removed shared objects, built for x86 ABI to reduce overall weight
- *World.clip* now works on actors, but only on certain mode parameter values.
- Fixed block icon generation for *ICRender* models.
- Fixed error, that occurred after second *WRAP_JAVA* call on same class
- Fixed slabs drop
- Fixed some textures in ui

## 2.0.4b36

- Inner Core preferences menu was majorly improved and new settings were added
- Fixed critical error, that could cause server thread to stop
- Fixed OutOfMemory crashes, that could occur during startup
- Alot of minor fixes from GP statistics
- After installing mod you can now install all its dependencies
- Saving system improved: overall stability increased, saves backup is created and all saves errors, if occured, are now displayed in one window instead of one window per error
- Main menu is slightly redesigned
- Added function `Entity.getAllInsideBox(coords1, coords2[, type, flag])`
- Added function `Entity.getDimension(entity)`
- Added function `Item.setAllowedInOffhand(id, allowed)`
- Added function `Game.simulateBackPressed()`
- *PathNavigation* is majorly fixed and improved
- Fixed *Entity.setCarriedItem*/*setOffhandItem*/*setArmor* were not sending data to client on non-player entities
- Fixed some crashes, that could occur while transferring between dimensions
- Fixed rotation of animations
- Fixed error, that caused mod behavior packs to be ignored on first launch
- Fixed duplication mod behavior packs in world folder
- Fixed *Entity.spawn* was working incorrectly with addon entities
- Fixed *Translation* module doing English to English translations
- Increased item name caching capacity
- Fixed window method *setTouchable* not working for game overlays
- Other minor stability-related fixes

## 2.0.3b32

- Fixed vanilla particles and mod models with blending drawing behing alpha-tested blocks and clouds

## 2.0.3b31

- Minor fixes, including custom dimensions and block meshes in hand render

## 2.0.3b30 beta

### Main changes

- Added ability to create custom item and models in UI and hand via module *ItemModel*
- Added ability to add custom materials and shaders
- Added new animation mode - direct mesh render with material, to enter this mode call method `describe({mesh: RenderMesh, skin: "texture name", material: "material name"})`
- Blocks with *ICRender* will automatically gain inventory models
- Item animations now based on *RenderMesh* and support custom item models and materials
- Block rendertypes in UI support
- Massive refactor for all item model related code
- Added new loading stage - item model generation, it is now happening separately from mod loading
- Added options *disable_loading_screen* and *performace.server_thread_priority* to Inner Core config
- Global optimizations

### Other changes

- Better *TileEntity* system: now unloaded TileEntities, or ones without tick function will not be counted, when checking updatable limit. Added *TileEntity* functions `load()`, `unload()` and `onCheckerTick(isInitialized, isLoaded, wasLoaded)`
- Added functions to *World* module: `clip(x1, y1, z1, x2, y2, z2, mode)`, `doesVanillaTileHasUI(id)`, `setBlockUpdateAllowed(true, false)`, `setBlockUpdateType(type)`, `getRelativeCoords(x, y, z, side)`, `getVectorByBlockSide(side)`, `getInverseBlockSide(side)`
- Added `Block.registerNeighbourChangeFunction[ForID](id, function(coords, block, changeCoords) {})`
- Added `Block.registerEntityInsideFunction[ForID](id, function(coords, block, entity) {})`
- Added `Block.registerEntityStepOnFunction[ForID](id, function(coords, block, entity) {})`
- Added functions `Block.setupAsRedstoneReceiver(nameID, connectToRedstone)`, `Block.setupAsRedstoneEmitter(nameID, connectToRedstone)`, `Block.setupAsNonRedstoneTile(nameID)`
- Added block description property - *mapcolor*, sets 0xRRGGBB map color to block
- Added block description property - *sound*, sets one of standard block sound types
- Added *RenderMesh* methods `rotate(x, y, z, rx, ry, rz)`, `fitIn(x1, y1, z1, x2, y2, z2[, keepRatio])`, `clone()`
- Added *RenderMesh* method `setLightPos(x, y, z)` - set relative position for block lighting
- Added methods to *RenderMesh* - `setNoTint()`, `setGrassTinted()`, `setFoliageTinted(leavesData)`, `setWaterTinted()`
- Added *RenderMesh* method `addMesh(mesh[, x, y, z[, scaleX, scaleY, scaleZ]])`, alpha value now can be passed to *setColor*
- Added condition `ICRender.RANDOM(value, max[, seed])` - for given block position generates random number from 0 to max - 1, and returns, if it is equal to value. Has method `setAxisEnabled(0-2, enabled)` to ignore some axises.
- Added preloader scipt methods - `Resources.getAllMatchingResources("regex")`, `Resources.getResourcePath("local path")`, `Resources.getAllResourceDirectoriesPaths()`

### Fixes

- Fixed issue with spending items when tapping on block with UI
- Fixed crash with mob custom models
- Fixed some crashes from item models
- Fixed crash from massive amount of blocks with *RenderMesh*
- Fixed functions for player experience work
- Fixed meshes after app was minimized

## 2.0.2b19 beta

- Hotfix for launch crash in [2.0.1b18](#201b18-beta) on some devices (glGetString)

## 2.0.1b18 beta

- Added mod loading UI
- Added directories *innercore/resource_packs*, *innercore/behavior_packs* for adding resource and behaviour packs
- Local world resource and behaviour packs are now automatically forced for this world
- Added complete API for custom biomes
- Added API to generate custom biome maps for any dimension
- Added module *AddonEntityRegistry* and functions to work with addon-added mobs
- Added better API for new custom dimensions
- Added machine place sound
- Fixed UI hangs after fast-clicking on block or item with UI
- Fixed drops from *World.destroyBlock*
- Fixed *Player.setHunger*, *Player.setSaturation*, *Player.setExhaustion*
- Fixed empty and non ASCII base item name crash (Mods like Divine RPG)
- Now when all mods are stopped in case of an fatal error it is displayed as tip message
- Other minor fixes

## 2.0.1b9 beta

- Performance and stability improvements
- Fixed and updated mods and workbench UI to classic style (for standard windows)
- Mod UI will close, if back button is pressed or app is minimized
- Fixes for various crashes, caused by API methods
- When fatal error occurres because of some mod, appropriate tip message will be shown

## 2.0.0b2 beta

- Minor fixes before release

## 2.0.0 beta

- First version released
