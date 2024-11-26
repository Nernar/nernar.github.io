/**
 * Module used to handle callbacks. Investigate details about the 
 * callback mechanism and the list of pre-defined callbacks.
 */
declare namespace Callback {

    /**
     * Adds callback function for the specified callback name. Most of native 
     * events can be prevented using {@link Game.prevent} call.
     * @param name callback name, should be one of the pre-defined or a custom
     * name if invoked via {@link Callback.invokeCallback}
     * @param func function to be called when an event occurs
     * @param priority the more this value is, the earlier your callback handler
     * will be called when an event occurs
     */
    function addCallback(name: string, func: Function, priority?: number): void;

    /**
     * Invokes callback with any name and up to 10 additional parameters. You
     * should not generally call pre-defined callbacks until you really need to 
     * do so. If you want to trigger some event in your mod, use your own 
     * callback names.
     * @param name callback name
     */
    function invokeCallback(name: string, o1?: any, o2?: any, o3?: any, o4?: any, o5?: any, o6?: any, o7?: any, o8?: any, o9?: any, o10?: any): void;

    /**
     * Function used in "DimensionLoaded" callback.
     */
    interface DimensionLoadedFunction {
        /**
         * @param currentId vanilla dimension ID, one of the {@link EDimension}
         * values, or custom dimension ID
         * @param lastId previous unloaded dimension ID
         */
        (currentId: number, lastId: number): void
    }

    /**
     * @since 2.0.4b37
     */
    function addCallback(name: "DimensionLoaded", func: DimensionLoadedFunction, priority?: number): void;

    /**
     * Function used in "DimensionUnloaded" callback.
     */
    interface DimensionUnloadedFunction {
        (dimensionId: number): void
    }

    /**
     * @since 2.0.4b37
     */
    function addCallback(name: "DimensionUnloaded", func: DimensionUnloadedFunction, priority?: number): void;

    /**
     * Function used in "LocalPlayerChangedDimension" and "PlayerChangedDimension" callback.
     */
    interface PlayerChangedDimensionFunction {
        /**
         * @param playerUid player entity unique numeric ID
         * @param currentId vanilla dimension ID, one of the {@link EDimension}
         * values, or custom dimension ID
         * @param lastId previous unloaded dimension ID
         */
        (playerUid: number, currentId: number, lastId: number): void
    }

    /**
     * @since 2.2.1b106
     */
    function addCallback(name: "LocalPlayerChangedDimension", func: PlayerChangedDimensionFunction, priority?: number): void;

    function addCallback(name: "PlayerChangedDimension", func: PlayerChangedDimensionFunction, priority?: number): void;

    /**
     * Function used in "CustomDimensionTransfer" callback.
     */
    interface CustomDimensionTransferFunction {
        /**
         * @param entityUid entity that was transferred between dimensions
         * @param from ID of the dimension the entity was transferred from
         * @param to ID of the dimension the entity was transferred to
         */
    	(entityUid: number, from: number, to: number): void
    }

    function addCallback(name: "CustomDimensionTransfer", func: CustomDimensionTransferFunction, priority?: number): void;

    function addCallback(name: "tick", func: { (): void }, priority?: number): void;

    function addCallback(name: "LocalTick", func: { (): void }, priority?: number): void;

	/**
     * Function used in "LocalPlayerTick" and "ServerPlayerTick" callback.
     */
    interface PlayerTickFunction {
        /**
         * @param playerUid player entity unique ID
         * @param isDead is following player dead
         */
        (playerUid: number, isDead: boolean): void
    }

    /**
     * @since 2.2.1b106
     */
    function addCallback(name: "LocalPlayerTick", func: PlayerTickFunction, priority?: number): void;

    function addCallback(name: "ServerPlayerTick", func: PlayerTickFunction, priority?: number): void;

    /**
     * Object used in some callbacks for coordinate set with side information
     * and relative coordinates set.
     */
    interface ItemUseCoordinates extends BlockPosition {
        /**
         * Relative coordinates, coordinates of the block to the specified side
         * of current block.
         */
        relative: Vector,
        /**
         * Exact touch point, absolute point coordinates. Used only in "ItemUse"
         * callback.
         */
        vec?: Vector
    }

    /**
     * Function used in "ItemUse" and "ItemUseLocalServer" callbacks.
     */
    interface LegacyItemUseFunction {
        /**
         * @param coords set of all coordinate values that can be useful to write
         * custom use logics, relative and vectorized one
         * @param item item that was in the player's hand when it touched the block
         * @param block block that was touched
         * @param isExternal received from external player on server
         * @param playerUid player entity UID
         */
        (coords: ItemUseCoordinates, item: ItemInstance, block: Tile, isExternal: boolean, playerUid: number): void
    }

    function addCallback(name: "ItemUse", func: LegacyItemUseFunction, priority?: number): void;

    function addCallback(name: "ItemUseLocalServer", func: LegacyItemUseFunction, priority?: number): void;

    /**
     * Function used in "ItemUseServer" and "ItemUseLocal" callbacks.
     */
    interface ItemUseFunction {
        /**
         * @param coords set of all coordinate values that can be useful to write
         * custom use logics
         * @param item item that was in the player's hand when it touched the block
         * @param block block that was touched
         * @param playerUid player entity UID
         */
        (coords: ItemUseCoordinates, item: ItemInstance, block: Tile, playerUid: number): void
    }

    function addCallback(name: "ItemUseServer", func: ItemUseFunction, priority?: number): void;

    /**
     * @since 2.1.0b57
     */
    function addCallback(name: "ItemUseLocal", func: ItemUseFunction, priority?: number): void;

    /**
     * Function used in "ItemUseNoTarget" callback.
     */
    interface ItemUseNoTargetFunction {
        /**
         * @param item item that was in the player's hand when the event occurred
         */
        (item: ItemInstance, playerUid: number): void
    }

    function addCallback(name: "ItemUseNoTarget", func: ItemUseNoTargetFunction, priority?: number): void;

    /**
     * Function used in "ItemUsingReleased" callback.
     */
    interface ItemUsingReleasedFunction {
        /**
         * @param item item that was in the player's hand when the event occurred
         * @param ticks amount of ticks left to the specified max use duration value
         */
        (item: ItemInstance, ticks: number, playerUid: number): void
    }

    function addCallback(name: "ItemUsingReleased", func: ItemUsingReleasedFunction, priority?: number): void;

    /**
     * Function used in "ItemUsingComplete" callback.
     */
    interface ItemUsingCompleteFunction {
        /**
         * @param item item that was in the player's hand when the event occurred
         */
        (item: ItemInstance, playerUid: number): void
    }

    function addCallback(name: "ItemUsingComplete", func: ItemUsingCompleteFunction, priority?: number): void;

    /**
     * Function used in "ItemDispensed" callback.
     */
    interface ItemDispensedFunction {
        /**
         * @param coords full coords object, where the main coords are the position of the dispenser block,
         * `relative` ones are the position of the block to which the dispenser is pointed,
         * and `vec` are the coords for the item to be dropped at
         * @param item item that was dispensed
         * @param region BlockSource object
         * @param slot numeric ID of the slot from which the item was dispensed
         */
        (coords: Callback.ItemUseCoordinates, item: ItemInstance, region: BlockSource, slot: number): void
    }

    function addCallback(name: "ItemDispensed", func: ItemDispensedFunction, priority?: number): void;

    /**
     * Function used in "ItemIconOverride" callback.
     */
    interface ItemIconOverrideFunction {
        /**
         * @param item information about item that is used in override function
         * @param isModUi whether icon override is working in mod ui or in vanilla one
         * @returns Nothing if used in callback, {@link Item.TextureData} if used in item 
         * override function to return texture that will be used for the item.
         */
        (item: ItemInstance, isModUi: boolean): void | Item.TextureData
    }

    function addCallback(name: "ItemIconOverride", func: ItemIconOverrideFunction, priority?: number): void;

    /**
     * Function used in "ItemNameOverride" callback.
     */
    interface ItemNameOverrideFunction {
        /**
         * @param item information about item that is used in override function
         * @param translation translated item name
         * @param name original item name
         * @returns Nothing if used in callback, string if used in item override 
         * function to return new name that will be displayed.
         */
        (item: ItemInstance, translation: string, name: string): void | string;
    }

    function addCallback(name: "ItemNameOverride", func: ItemNameOverrideFunction, priority?: number): void;

    interface ExplosionParams {
        /**
         * Explosion power.
         */
        power: number,
        /**
         * If explosion is produced by an entity, entity unique ID, -1 otherwise.
         */
        entity: number,
        /**
         * If `true`, explosion produced the fire.
         */
        onFire: boolean,
        /**
         * Should explosion break blocks or not.
         */
        someBool: boolean,
        /**
         * Max block resistance.
         */
        someFloat: number;
    }

    /**
     * Function used in "DestroyBlock" and "DestroyBlockStart" callbacks.
     */
    interface DestroyBlockFunction {
        /**
         * @param coords coordinates where the block is destroyed and side from
         * where it is destroyed
         * @param block block that is destroyed
         * @param playerUid player entity unique numeric ID
         */
        (coords: ItemUseCoordinates, block: Tile, playerUid: number): void
    }

    function addCallback(name: "DestroyBlock", func: DestroyBlockFunction, priority?: number): void;

    function addCallback(name: "DestroyBlockStart", func: DestroyBlockFunction, priority?: number): void;

    /**
     * Function used in "DestroyBlockContinue" callback.
     */
    interface DestroyBlockContinueFunction {
        /**
         * @param coords coordinates where the block is destroyed and side from
         * where it is destroyed
         * @param block block that is destroyed
         * @param progress current fraction of breaking progress
         */
        (coords: ItemUseCoordinates, block: Tile, progress: number): void
    }

    function addCallback(name: "DestroyBlockContinue", func: DestroyBlockContinueFunction, priority?: number): void;

    /**
     * Function used in "BuildBlock" callback.
     */
    interface BuildBlockFunction {
        /**
         * @param coords coordinates where the block is placed and side from
         * where it is placed
         * @param block block that is placed
         * @param playerUid player entity unique numeric ID
         */
        (coords: ItemUseCoordinates, block: Tile, playerUid: number): void
    }

    function addCallback(name: "BuildBlock", func: BuildBlockFunction, priority?: number): void;

    /**
     * Function used in "BlockChanged" callback.
     */
    interface BlockChangedFunction {
        /**
         * @param coords coordinates where block change occurred
         * @param oldBlock the block that is being replaced
         * @param newBlock replacement block
         */
        (coords: Vector, oldBlock: Tile, newBlock: Tile, region: BlockSource): void
    }

    function addCallback(name: "BlockChanged", func: BlockChangedFunction, priority?: number): void;

    /**
     * Function used in "BreakBlock" callback.
     */
    interface BreakBlockFunction {
        /**
         * @param coords coordinates where the block is placed and side from
         * where it is placed
         * @param block block that is placed
         * @param playerUid player entity unique numeric ID
         * @param item item that was in the player's hand when it breaked the block
         */
        (region: BlockSource, coords: ItemUseCoordinates, block: Tile, dropAllowed: boolean, playerUid: number, item: ItemInstance): void
    }

    /**
     * @since 2.2.0b83
     */
    function addCallback(name: "BreakBlock", func: BreakBlockFunction, priority?: number): void;

    interface RedstoneSignalParams {
        /**
         * Redstone signal power.
         */
        power: number,
        /**
         * Same as {@link RedstoneSignalParams.power}.
         */
        signal: number,
        /**
         * `true` if it is loading change.
         */
        onLoad: boolean
    }

    /**
     * Function used in "RedstoneSignal" callback.
     */
    interface RedstoneSignalFunction {
        /**
         * @param coords coordinates where redstone signal changed
         * @param params information about redstone signal
         * @param block information about the block on the specified coordinates
         */
        (coords: Vector, params: RedstoneSignalParams, block: Tile, region: BlockSource): void
    }

    function addCallback(name: "RedstoneSignal", func: RedstoneSignalFunction, priority?: number): void;

    function addCallback(name: "BlockEventEntityInside", func: Block.EntityInsideFunction, priority?: number): void;

    function addCallback(name: "BlockEventEntityStepOn", func: Block.EntityStepOnFunction, priority?: number): void;

    function addCallback(name: "BlockEventNeighbourChange", func: Block.NeighbourChangeFunction, priority?: number): void;

    /**
     * Function used in "PopBlockResources" callback.
     */
    interface PopBlockResourcesFunction {
        /**
         * @param coords coordinates of the block that was broken
         * @param block information about the block that was broken
         * @param explosionRadius explosion power in case of exploding
         * @param cause cause information, supposed to always be zero
         */
        (coords: Vector, block: Tile, explosionRadius: number, cause: number, region: BlockSource): void
    }

    function addCallback(name: "PopBlockResources", func: PopBlockResourcesFunction, priority?: number): void;

    /**
     * Function used in "Explosion" callback.
     */
    interface ExplosionFunction {
        /**
         * @param coords coordinates of the explosion
         * @param params additional explosion data
         */
        (coords: Vector, params: ExplosionParams): void
    }

    function addCallback(name: "Explosion", func: ExplosionFunction, priority?: number): void;

    /**
     * Function used in "CustomBlockTessellation" callback.
     */
    interface CustomBlockTessellationFunction {
        /**
         * @param renderer object used to manipulate block rendering process
         * @param coords rendering block coordinates
         * @param block block information
         */
        (renderer: BlockRenderer.RenderAPI, coords: Vector, block: Tile): void
    }

    function addCallback(name: "CustomBlockTessellation", func: CustomBlockTessellationFunction, priority?: number): void;

    /**
     * Function used in the "FoodEaten" callback.
     */
    interface FoodEatenFunction {
        /**
         * You can use {@link Entity.getCarriedItem} to get info about food item.
         * @param food food amount produced by eaten food
         * @param ratio saturation ratio produced by food
         * @param playerUid player entity UID
         */
        (food: number, ratio: number, playerUid: number): void
    }

    function addCallback(name: "FoodEaten", func: FoodEatenFunction, priority?: number): void;

    /**
     * Function used in the "LocalPlayerEat" and "ServerPlayerEat" callback.
     */
    interface PlayerEatFunction {
        /**
         * You can use {@link Entity.getCarriedItem} to get info about food item.
         * @param playerUid player entity UID
         * @param food food amount produced by eaten food
         * @param ratio saturation ratio produced by food
         */
        (playerUid: number, food: number, ratio: number): void
    }

    /**
     * @since 2.2.1b106
     */
    function addCallback(name: "LocalPlayerEat", func: PlayerEatFunction, priority?: number): void;

    /**
     * @since 2.2.1b106
     */
    function addCallback(name: "ServerPlayerEat", func: PlayerEatFunction, priority?: number): void;

    /**
     * Function used in "EntityAdded" callback.
     */
    interface EntityFunction {
        /**
         * @param entityUid entity unique ID
         */
        (entityUid: number): void
    }

    function addCallback(name: "EntityAdded", func: EntityFunction, priority?: number): void;

    function addCallback(name: "EntityRemoved", func: EntityFunction, priority?: number): void;

    /**
     * @since 2.2.1b93
     */
    function addCallback(name: "EntityAddedLocal", func: EntityFunction, priority?: number): void;

    /**
     * @since 2.2.1b93
     */
    function addCallback(name: "EntityRemovedLocal", func: EntityFunction, priority?: number): void;

    /**
     * Function used in "PlayerAttack" callback.
     */
    interface PlayerAttackFunction {
        /**
         * @param attackerUid player entity unique ID
         * @param victimUid attacked entity unique ID
         */
        (attackerUid: number, victimUid: number): void
    }

    function addCallback(name: "PlayerAttack", func: PlayerAttackFunction, priority?: number): void;

    /**
     * Function used in "EntityHurt" callback.
     */
    interface EntityHurtFunction {
        /**
         * @param attackerUid entity that caused damage, determines actor of damage source, `-1` otherwise
         * @param damageValue produced damage value in half-hearts
         * @param damageType existing {@link Entity.DamageSource}  or any inclusive value between 25 and 32
         * @param armorReducesDamage if `true`, damage can be reduced by armor
         */
        (attackerUid: number, entityUid: number, damageValue: number, damageType: Entity.DamageSource, armorReducesDamage: boolean): void
    }

    function addCallback(name: "EntityHurt", func: EntityHurtFunction, priority?: number): void;

    /**
     * Function used in "EntityDeath" callback.
     */
    interface EntityDeathFunction {
        /**
         * @param attackerUid entity that caused damage, determines actor of damage source, `-1` otherwise
         * @param damageType existing {@link Entity.DamageSource} or any inclusive value between 25 and 32
         */
        (entityUid: number, attackerUid: number, damageType: Entity.DamageSource): void
    }

    function addCallback(name: "EntityDeath", func: EntityDeathFunction, priority?: number): void;

    /**
     * Function used in "EntityInteract" callback.
     */
    interface EntityInteractFunction {
        /**
         * @param entityUid entity unique ID
         * @param playerUid player entity unique ID
         * @param coords exact vector in which interaction happened
         */
        (entityUid: number, playerUid: number, coords: Vector): void
    }

    function addCallback(name: "EntityInteract", func: EntityInteractFunction, priority?: number): void;

    /**
     * Function used in "EntityPickUpDrop" callback.
     * @since 2.2.1b88
     */
    interface EntityPickUpDropFunction {
        /**
         * @param entityUid entity that picked up the item
         * (this callback is currently called only for players)
         * @param dropEntityUid dropped item's entity
         * @param item ItemInstance of the drop entity
         * @param count which count of item stack
         */
        (entityUid: number, dropEntityUid: number, item: ItemInstance, count: number)
    }

    /**
     * @since 2.2.1b88
     */
    function addCallback(name: "EntityPickUpDrop", func: EntityPickUpDropFunction, priority?: number): void;

    /**
     * Function used in "ExpAdd" callback.
     */
    interface ExpAddFunction {
        /**
         * @param exp amount of experience to be added
         * @param playerUid player's unique ID
         */
        (exp: number, playerUid: number): void
    }

    function addCallback(name: "ExpAdd", func: ExpAddFunction, priority?: number): void;

    /**
     * Function used in "ExpLevelAdd" callback.
     */
    interface ExpLevelAddFunction {
        /**
         * @param level amount of levels to be added 
         * @param playerUid player's uID
         */
        (level: number, playerUid: number): void
    }

    function addCallback(name: "ExpLevelAdd", func: ExpLevelAddFunction, priority?: number): void;

    /**
     * Function used in "ExpOrbsSpawned" callback.
     */
    interface ExpOrbsSpawnedFunction {
        /**
         * @param amount amount of experience to be added
         * @param coords dropped orbs entity coordinates
         * @param playerUid player entity unique numeric ID
         */
        (region: BlockSource, amount: number, coords: Vector, playerUid: number): void
    }

    function addCallback(name: "ExpOrbsSpawned", func: ExpOrbsSpawnedFunction, priority?: number): void;

    /**
     * Function used in "ProjectileHit" callback.
     */
    interface ProjectileHitFunction {
        /**
         * @param projectileUid projectile entity unique ID
         * @param item projectile item
         * @param target object containing hit coordinates and information about
         * hit entity/block
         */
        (projectileUid: number, item: ItemInstance, target: ProjectileHitTarget): void
    }

    /**
     * Object containing hit coordinates and information about hit entity/block.
     */
    interface ProjectileHitTarget {
        /**
         * Exact hit position x.
         */
        x: number,
        /**
         * Exact hit position y.
         */
        y: number,
        /**
         * Exact hit position z.
         */
        z: number,
        /**
         * If an entity was hit, entity unique ID, `-1` otherwise.
         */
        entity: number,
        /**
         * Coordinates and side of the hit block or null if an entity was hit.
         */
        coords: Nullable<ItemUseCoordinates>
    }

    function addCallback(name: "ProjectileHit", func: ProjectileHitFunction, priority?: number): void;

    /**
     * @since 2.4.0b122
     */
    function addCallback(name: "ChunkLoadingStateChanged", func: World.ChunkStateChangedFunction, priority?: number): void;

    /**
     * @since 2.4.0b122
     */
    function addCallback(name: "LocalChunkLoadingStateChanged", func: World.ChunkStateChangedFunction, priority?: number): void;

    /**
     * Function used in all generation callbacks.
     */
    interface GenerateChunkFunction {
        /**
         * @param chunkX chunk X coordinate; multiply by 16 to receive
         * corner block coordinates
         * @param chunkZ chunk Z coordinate; multiply by 16 to receive
         * corner block coordinates
         * @param random random object that should be used for generation
         * process; already seeded by appropriate values
         * @param dimensionId current dimension's numeric ID
         * @param chunkSeed chunk-specific seed to use in chunk random generation
         * @param worldSeed world-specific seed to use in chunk generation
         * @param dimensionSeed dimension-specific seed to use in chunk generation
         */
        (chunkX: number, chunkZ: number, random: java.util.Random,
            dimensionId: number, chunkSeed: number, worldSeed: number, dimensionSeed: number): void
    }

    function addCallback(name: "GenerateChunk", func: GenerateChunkFunction, priority?: number): void;

    /**
     * @deprecated Use "GenerateChunk" with condition instead.
     */
    function addCallback(name: "GenerateChunkUnderground", func: GenerateChunkFunction, priority?: number): void;

    function addCallback(name: "GenerateNetherChunk", func: GenerateChunkFunction, priority?: number): void;

    function addCallback(name: "GenerateEndChunk", func: GenerateChunkFunction, priority?: number): void;

    function addCallback(name: "GenerateChunkUniversal", func: GenerateChunkFunction, priority?: number): void;

    /**
     * Function used in "GenerateCustomDimensionChunk" callback.
     */
    interface GenerateCustomDimensionChunkFunction {
        /**
         * @param chunkX chunk X coordinate; multiply by 16 to receive
         * corner block coordinates
         * @param chunkZ chunk Z coordinate; multiply by 16 to receive
         * corner block coordinates
         * @param random random object that should be used for generation
         * process; already seeded by appropriate values
         * @param dimensionId current dimension's numeric ID
         */
        (chunkX: number, chunkZ: number, random: java.util.Random, dimensionId: number): void
    }

    function addCallback(name: "GenerateCustomDimensionChunk", func: GenerateCustomDimensionChunkFunction, priority?: number): void;

    /**
     * @since 2.0.1b11
     */
    function addCallback(name: "GenerateBiomeMap", func: GenerateChunkFunction, priority?: number): void;

    /**
     * @since 2.2.0b84
     */
    function addCallback(name: "PreProcessChunk", func: GenerateChunkFunction, priority?: number): void;

    /**
     * @since 2.2.0b84
     */
    function addCallback(name: "PostProcessChunk", func: GenerateChunkFunction, priority?: number): void;

    /**
     * @since 2.3.1b115 (implemented in 2.2.1b105)
     */
    function addCallback(name: "EnchantPostAttack", func: CustomEnchant.DamageCallback, priority?: number): void;

    /**
     * @since 2.3.1b115 (implemented in 2.2.1b105)
     */
    function addCallback(name: "EnchantGetProtectionBonus", func: CustomEnchant.ProtectionBonusProvider, priority?: number): void;

    /**
     * @since 2.3.1b115 (implemented in 2.2.1b105)
     */
    function addCallback(name: "EnchantGetDamageBonus", func: CustomEnchant.AttackDamageBonusProvider, priority?: number): void;

    /**
     * @since 2.3.1b115 (implemented in 2.2.1b105)
     */
    function addCallback(name: "EnchantPostHurt", func: CustomEnchant.DamageCallback, priority?: number): void;

    /**
     * Function used in "NativeCommand" callback.
     */
    interface NativeCommandFunction {
        /**
         * @param command command that was entered or `null` if
         * no command was providen
         */
        (command: Nullable<string>): void
    }

    function addCallback(name: "NativeCommand", func: NativeCommandFunction, priority?: number): void;

    /**
     * Function used in "CraftRecipePreProvided" callback.
     */
    interface CraftRecipePreProvidedFunction {
        /**
         * @param recipe object containing recipe information
         * @param field object containing crafting field information
         * @param playerUid player which caused craft, since 2.4.0b122
         */
        (recipe: Recipes.WorkbenchRecipe, field: Recipes.WorkbenchField, playerUid: number): void
    }

    function addCallback(name: "CraftRecipePreProvided", func: CraftRecipePreProvidedFunction, priority?: number): void;

    /**
     * Function used in "CraftRecipeProvided" callback.
     */
    interface CraftRecipeProvidedFunction {
        /**
         * @param recipe object containing recipe information
         * @param field object containing crafting field information
         * @param isPrevented if `true`, recipe was prevented by craft function
         * @param playerUid player which caused craft, since 2.4.0b122
         */
        (recipe: Recipes.WorkbenchRecipe, field: Recipes.WorkbenchField, isPrevented: boolean, playerUid: number): void
    }

    function addCallback(name: "CraftRecipeProvidedFunction", func: CraftRecipeProvidedFunction, priority?: number): void;

    /**
     * Function used in "VanillaWorkbenchCraft" and "VanillaWorkbenchPostCraft"
     * callbacks.
     */
    interface VanillaWorkbenchCraftFunction {
        /**
         * @param result recipe result item
         * @param workbenchContainer workbench container instance
         * @param playerUid player which caused craft
         */
        (result: ItemInstance, workbenchContainer: UI.Container, playerUid: number): void
    }

    function addCallback(name: "VanillaWorkbenchCraft", func: VanillaWorkbenchCraftFunction, priority?: number): void;

    function addCallback(name: "VanillaWorkbenchPostCraft", func: VanillaWorkbenchCraftFunction, priority?: number): void;

    /**
     * Function used in "VanillaWorkbenchRecipeSelected" callback.
     */
    interface VanillaWorkbenchRecipeSelectedFunction {
        /**
         * @param recipe object containing recipe information
         * @param result recipe result item
         * @param workbenchContainer workbench container instance
         */
        (recipe: Recipes.WorkbenchRecipe, result: ItemInstance, workbenchContainer: UI.Container)
    }

    function addCallback(name: "VanillaWorkbenchRecipeSelected", func: VanillaWorkbenchRecipeSelectedFunction, priority?: number): void;

    /**
     * Function used in "TileEntityAdded" callback.
     */
    interface TileEntityAddedFunction {
        (updatable: Updatable | TileEntity, isTileEntity: boolean): void
    }

    function addCallback(name: "TileEntityAdded", func: TileEntityAddedFunction, priority?: number): void;

    /**
     * Function used in "TileEntityRemoved" callback.
     */
    interface TileEntityRemovedFunction {
        (updatable: Updatable | TileEntity): void
    }

    function addCallback(name: "TileEntityRemoved", func: TileEntityRemovedFunction, priority?: number): void;

    /**
     * Function used in "ContainerClosed" callback.
     */
    interface ContainerClosedFunction {
        /**
         * @param container container that was closed
         * @param window window that was loaded in the container
         * @param byUser if `true`, container was closed by user,
         * from the code otherwise
         */
        (container: UI.Container, window: UI.IWindow, byUser: boolean): void
    }

    function addCallback(name: "ContainerClosed", func: ContainerClosedFunction, priority?: number): void;

    /**
     * Function used in "ContainerOpened" callback.
     */
    interface ContainerOpenedFunction {
        /**
         * @param container container that was opened
         * @param window window that was loaded in the container
         */
        (container: UI.Container, window: UI.IWindow): void
    }

    function addCallback(name: "ContainerOpened", func: ContainerOpenedFunction, priority?: number): void;

    /**
     * Function used in "NativeGuiChanged" callback.
     */
    interface NativeGuiChangedFunction {
        /**
         * @param screenName current screen name
         * @param lastScreenName previous screen name
         * @param isPushEvent if `true`, the new screen was pushed to
         * the screen stack, popped from the stack otherwise
         */
        (screenName: string, lastScreenName: string, isPushEvent: boolean): void
    }

    function addCallback(name: "NativeGuiChanged", func: NativeGuiChangedFunction, priority?: number): void;

    /**
     * Function used in "CustomWindowOpened" and "CustomWindowClosed" callbacks.
     */
    interface CustomWindowFunction {
        /**
         * @param window window that was opened
         */
        (window: UI.IWindow): void;
    }

    function addCallback(name: "CustomWindowOpened", func: CustomWindowFunction, priority?: number): void;

    function addCallback(name: "CustomWindowClosed", func: CustomWindowFunction, priority?: number): void;

    function addCallback(name: "AddRuntimePacks", func: { (): void }, priority?: number): void;

    function addCallback(name: "PreBlocksDefined", func: { (): void }, priority?: number): void;

    function addCallback(name: "BlocksDefined", func: { (): void }, priority?: number): void;

    /**
     * Function used in "CoreConfigured" callback.
     */
    interface CoreConfiguredFunction {
        /**
         * @param config Inner Core default config instance
         */
        (config: Config): void;
    }

    function addCallback(name: "CoreConfigured", func: CoreConfiguredFunction, priority?: number): void;

    function addCallback(name: "PreLoaded", func: { (): void }, priority?: number): void;

    function addCallback(name: "APILoaded", func: { (): void }, priority?: number): void;

    function addCallback(name: "ModsLoaded", func: { (): void }, priority?: number): void;

    function addCallback(name: "PostLoaded", func: { (): void }, priority?: number): void;

    /**
     * @since 2.4.0b122
     */
    function addCallback(name: "OptionsChanged", func: { (): void }, priority?: number): void;

    /**
     * Function used in "LevelSelected" callback.
     */
    interface LevelSelectedFunction {
        /**
         * @param worldName name of the selected world
         * @param worldDir name of the directory where the world is stored; worlds
         * directories are located at `games/horizon/packs/Inner_Core/worlds/`
         */
        (worldName: string, worldDir: string): void
    }

    function addCallback(name: "LevelSelected", func: LevelSelectedFunction, priority?: number): void;

    /**
     * Function used in "ConnectingToHost" callback.
     */
    interface ConnectingToHostFunction {
        (host: string, minecraftPort: number, moddedPort: number): void
    }

    /**
     * @since 2.1.0b57
     */
    function addCallback(name: "ConnectingToHost", func: ConnectingToHostFunction, priority?: number): void;

    function addCallback(name: "LevelCreated", func: { (): void }, priority?: number): void;

    /**
     * Function used in "LevelLoaded" and "LevelPreLoaded" callbacks.
     */
    interface LevelLoadedFunction {
        /**
         * @param isServer server-side or remote level is loaded
         */
        (isServer: boolean): void
    }

    function addCallback(name: "LevelPreLoaded", func: LevelLoadedFunction, priority?: number): void;

    function addCallback(name: "LevelLoaded", func: LevelLoadedFunction, priority?: number): void;

    function addCallback(name: "LocalLevelLoaded", func: { (): void }, priority?: number): void;

    /**
     * Function used in "LocalPlayerLoaded", "ServerPlayerLoaded" and "ServerPlayerLeft" callback.
     */
    interface PlayerFunction {
        /**
         * @param playerUid unique ID of the player entity, that has been connected to server
         */
        (playerUid: number): void
    }

    /**
     * @since 2.2.1b106
     */
    function addCallback(name: "LocalPlayerLoaded", func: PlayerFunction, priority?: number): void;

    function addCallback(name: "RemoteLevelLoaded", func: { (): void }, priority?: number): void;

    function addCallback(name: "RemoteLevelPreLoaded", func: { (): void }, priority?: number): void;

    function addCallback(name: "ServerLevelLoaded", func: { (): void }, priority?: number): void;

    function addCallback(name: "ServerLevelPreLoaded", func: { (): void }, priority?: number): void;

    function addCallback(name: "ServerPlayerLoaded", func: PlayerFunction, priority?: number): void;

    function addCallback(name: "LevelDisplayed", func: { (): void }, priority?: number): void;

    /**
     * Function used in "ReadSaves" and "WriteSaves" callbacks.
     * Avoid modifying values directly, consider using {@link Saver} instead.
     */
    interface SavesFunction {
        (globalScope: object): void
    }

    function addCallback(name: "ReadSaves", func: SavesFunction, priority?: number): void;

    function addCallback(name: "WriteSaves", func: SavesFunction, priority?: number): void;

    /**
     * Function used in "SystemKeyEventDispatched" callback.
     */
    interface SystemKeyEventDispatchedFunction {
        /**
         * @param code key code of pressed button
         * @param state pressing state, such as down, etc.
         */
        (code: number, state: number): void
    }

    function addCallback(name: "SystemKeyEventDispatched", func: SystemKeyEventDispatchedFunction, priority?: number): void;

    function addCallback(name: "NavigationBackPressed", func: { (): void }, priority?: number): void;

    function addCallback(name: "GameLeft", func: { (): void }, priority?: number): void;

    function addCallback(name: "LevelPreLeft", func: { (): void }, priority?: number): void;

    function addCallback(name: "LevelLeft", func: { (): void }, priority?: number): void;

    function addCallback(name: "LocalLevelPreLeft", func: { (): void }, priority?: number): void;

    function addCallback(name: "LocalLevelLeft", func: { (): void }, priority?: number): void;

    function addCallback(name: "ServerLevelPreLeft", func: { (): void }, priority?: number): void;

    function addCallback(name: "ServerLevelLeft", func: { (): void }, priority?: number): void;

    function addCallback(name: "ServerPlayerLeft", func: PlayerFunction, priority?: number): void;

    function addCallback(name: "AppSuspended", func: { (): void }, priority?: number): void;

}
