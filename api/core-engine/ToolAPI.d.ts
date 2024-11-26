/**
 * Module used to manage block and tools material and create tools with all
 * required properties.
 */
declare namespace ToolAPI {

    /**
     * Creates new material with specified breaking speed multiplier. Some of
     * the materials are already registered:
     * 
     * *stone* - used for pickaxes
     * 
     * *wood* - used for axes
     * 
     * *dirt* - used for shovels
     * 
     * *plant* - used for all plants (no vanilla tool supports this material)
     * 
     * *fibre* - used for swords (to break web)
     * 
     * *cobweb* - currently not used
     * 
     * *unbreaking* - used for unbreaking blocks, liquids, end portal, etc.
     * 
     * @param name new (or existing) material name
     * @param breakingMultiplier multiplier used to calculate block breaking 
     * speed. 1 is a default value for dirt and 3 is a default value for stone
     */
    function addBlockMaterial(name: string, breakingMultiplier: number): void;

    /**
     * Creates new tool material with specified parameters. Some of the tool
     * materials are already registered:
     * 
     * *wood* - used for wooden instruments
     * 
     * *stone* - used for stone instruments
     * 
     * *iron* - used for iron instruments
     * 
     * *golden* - used for golden instruments
     * 
     * *diamond* - used for diamond instruments
     * 
     * @param name new (or existing) material name
     * @param material parameters describing material properties
     */
    function addToolMaterial(name: string, material: ToolMaterial): void;

    /**
     * Registers item as a tool.
     * @param id numeric item ID
     * @param toolMaterial registered tool material name or tool material object
     * used to register the tool
     * @param blockMaterials block material names that can be broken by this 
     * instrument. For example, you can use *["stone"]* for the pickaxes
     * @param params additional tool parameters
     */
    function registerTool(id: number, toolMaterial: string | ToolMaterial, blockMaterials: string[], params?: ToolParams): void;

    /**
     * Registers item as a sword.
     * @param id numeric item ID
     * @param toolMaterial registered tool material name or tool material object
     * used to register the sword
     * @param params additional tool parameters
     */
    function registerSword(id: number, toolMaterial: string | ToolMaterial, params?: ToolParams): void;

    /**
     * Registers material and digging level for the specified block.
     * @param uid numeric tile ID
     * @param materialName material name
     * @param level block's digging level
     * @param isNative used to mark vanilla blocks data. Generally used within 
     * Core Engine code and should not be used within mods until you really 
     * know what you're doing
     */
    function registerBlockMaterial(uid: number, materialName: string, level?: number, isNative?: boolean): void;

    /**
     * Sets digging level for block. If digging level of tool is higher then
     * block's one, the block is dropped.
     * @param uid numeric tile ID
     * @param level block's digging level
     */
    function registerBlockDiggingLevel(uid: number, level: number): void;

    /**
     * Registers material and digging level for the specified blocks.
     * @param materialName material name
     * @param UIDs an array of numeric tiles IDs 
     * @param isNative used to mark vanilla blocks data. Generally used within 
     * Core Engine code and should not be used within mods until you really 
     * know what you're doing
     */
    function registerBlockMaterialAsArray(materialName: string, UIDs: number[], isNative: boolean): void;

    /**
     * @deprecated Backwards compatibility.
     */
    function refresh(): void;

    /**
     * @param blockID numeric tile ID
     * @returns Object containing ToolAPI block data or undefined if no block 
     * data was specified for this block.
     */
    function getBlockData(blockID: number): BlockData | undefined;

    /**
     * @param blockID numeric tile ID
     * @returns Object containing block material information or `null`, if no 
     * block data was specified for this block.
     */
    function getBlockMaterial(blockID: number): Nullable<BlockMaterial>;

    /**
     * @param blockID numeric tile ID
     * @returns Destroy level of the block with specified ID or `0`, if no block 
     * data was specified for this block.
     */
    function getBlockDestroyLevel(blockID: number): number;

    /**
     * @param extra item extra instance, if not specified, method uses carried
     * item's extra
     * @returns Enchant data object, containing enchants used for blocks
     * destroy speed calculations.
     */
    function getEnchantExtraData(extra?: ItemExtraData): EnchantData;

    /**
     * Applies fortune drop modifier to the drop array.
     * @param drop drop array containing number of the arrays
     * @param level enchantment level
     */
    function fortuneDropModifier(drop: ItemInstanceArray[], level: number): ItemInstanceArray[];

    /**
     * Calculates destroy time for the block that is being broken with specified
     * tool at the specified coords. Used mostly by Core Engine to apply break.
     * time
     * @param ignoreNative if block and item are native items, and this 
     * parameter is set to true, all the calculations will still be performed
     */
    function getDestroyTimeViaTool(fullBlock: Tile, toolItem: ItemInstance, coords: Callback.ItemUseCoordinates, ignoreNative?: boolean): number;

    /**
     * @param itemID numeric item ID
     * @returns Tool information stored in slightly modified
     * {@link ToolAPI.ToolParams} object or null if no tool data was specified.
     */
    function getToolData(itemID: number): Nullable<ToolParams>;

    /**
     * @param itemID numeric item ID
     * @returns Tool's breaking level or 0 if no tool data was provided.
     */
    function getToolLevel(itemID: number): number;

    /**
     * @param itemID numeric item ID
     * @param blockID numeric tile ID
     * @returns Digging level if specified tool can mine specified block, `0` if
     * data for the tool or for the block was not specified or if specified tool
     * cannot mine specified block.
     */
    function getToolLevelViaBlock(itemID: number, blockID: number): number;

    /**
     * @returns Carried tool information stored in slightly modified
     * {@link ToolAPI.ToolParams} object or null if no tool data was specified.
     */
    function getCarriedToolData(): any;

    /**
     * @returns Carried tool's breaking level or `0` if no tool data was provided.
     */
    function getCarriedToolLevel(): number;

    /**
     * @internal
     */
    function resetEngine(): void;

    /**
     * Spawns experience orbs on the specified coordinate.
     * @param value amount of experience to spawn
     */
    function dropExpOrbs(x: number, y: number, z: number, value: number): void;

    /**
     * Spawns random amount of experience on the specified block coordinates.
     * @param coords block coordinates
     * @param minVal minimum amount of orbs to be spawned
     * @param maxVal maximum amount of orbs to be spawned
     * @param modifier additional experiences, usually passed from 
     * {@link ToolAPI.EnchantData.experience} field
     */
    function dropOreExp(coords: Vector, minVal: number, maxVal: number, modifier: number): void;

    /**
     * @param blockID numeric tile ID
     */
    function getBlockMaterialName(blockID: number): Nullable<string>;

    /**
     * Object used to describe tool material type.
     */
    interface ToolMaterial {
        /**
         * Divider used to calculate block breaking
         * speed. 2 is a default value for wooden instruments and 12 is a default 
         * value for golden instruments.
         */
        efficiency?: number,
        /**
         * Additional damage for the instruments, this value
         * is added to the base tool damage. If damage is not integer, it is rounded
         * to the higher integer with the chance of the fractional part, e.g. if 
         * the value is *3.3*, the damage will be 4 with the chance of 30%.
         */
        damage?: number,
        /**
         * Durability of the tool, 33 is a default value 
         * for golden tools and 1562 is a default value for diamond tools.
         */
        durability?: number,
        /**
         * Block breaking level, 1 is wooden instruments, 4 is diamond
         * instruments. If block's breaking level is less or equal to the tool's
         * level, block will be dropped when broken.
         */
        level?: number
    }

    /**
     * Object used to describe block material.
     */
    interface BlockMaterial {
        /**
         * Multiplier used to calculate block breaking speed.
         */
        multiplier: number,
        /**
         * Block material name.
         */
        name: string
    }


    /**
     * Object used to store all of the ToolAPI block data.
     */
    interface BlockData {
        /**
         * Material data used for this block.
         */
        material: BlockMaterial,
        /**
         * Digging level of the block. If digging level of tool is higher then
         * block's one, the block is dropped.
         */
        level: number,
        /**
         * Specifies whether the block was added as vanilla item or as a custom
         * block. `true`, if the block is vanilla, `false` if the block is custom.
         * Should not generally be changed.
         */
        readonly isNative: boolean
    }

    /**
     * Object containing additional parameters and functions used by Core Engine
     * to work with the tool.
     */
    interface ToolParams extends Scriptable {
        /**
         * Numeric ID of the item that replaces tool item when it's broken.
         * By default the tool disappears.
         * @default 0
         */
        brokenId?: number,
        /**
         * Base damage of the instrument, is added to the material damage to
         * calculate the tool's final damage.
         * @default 0
         */
        damage?: number,
		/**
		 * Properties of the tool material. Defined by {@link ToolAPI.registerTool},
		 */
		toolMaterial?: ToolMaterial,
		/**
		 * List of block material names that can be broken by this instrument.
		 * Defined by {@link ToolAPI.registerTool},
		 */
		blockMaterials?: { [key: string]: boolean }

        /**
         * Function used to recalculate block destroy time based on some custom 
         * logic.
         */
        calcDestroyTime?: (
            /**
             * Tool item.
             */
            tool: ItemInstance,
            /**
             * Coordinates where the block is being broken.
             */
            coords: Callback.ItemUseCoordinates,
            /**
             * Block that is being broken.
             */
            block: Tile,
            /**
             * Some time properties that can be used to calculate 
             * destroy time for the tool and block.
             */
            timeData: {
                /**
                 * Base destroy time of the block.
                 */
                base: number,
                /**
                 * Tool material devider.
                 */
                devider: number,
                /**
                 * Divider applied due to efficiency enchantment.
                 */
                modifier: number
            },
            /**
             * Default block destroy time, calculated as `base / divider / modifier`.
             */
            defaultTime: number,
            /**
             * Tool's enchant data.
             */
            enchantData?: EnchantData
        ) => number,

        /**
         * If `true`, the tool is vanilla Minecraft tool. Generally used within
         * Core Engine code and should not be used within mods until you really
         * know what you're doing.
         * @internal
         */
        isNative?: boolean,

        /**
         * Function that is called when the block is destroyed.
         * @returns `true` if default damage should not be applied to the instrument,
         * `false` otherwise.
         */
        onDestroy?: (
            /**
             * Tool item.
             */
            item: ItemInstance,
            /**
             * Coordinates where the block is destroyed.
             */
            coords: Callback.ItemUseCoordinates,
            /**
             * Block that is destroyed.
             */
            block: Tile,
            /**
             * Entity UID of the player that destroyed the block.
             */
            player: number
        ) => boolean,

        /**
         * Function that is called when players attacks some entity with the tool.
         * @returns `true` if default damage should not be applied to the instrument,
         * `false` otherwise.
         */
        onAttack?: (
            /**
             * Tool item.
             */
            item: ItemInstance,
            /**
             * Unique numeric ID of the entity that is attacked.
             */
            victim: number,
            /**
             * Entity UID of the player that attacked victim.
             */
            attacker: number
        ) => boolean,

        /**
         * If true, breaking blocks with this tool makes it break 2x faster,
         * otherwise attacking mobs breaks tool 2x faster.
         */
        isWeapon?: boolean,

        /**
         * Function that is called when the instrument is broken.
         * @returns `true` if default breaking behavior (replacing by `brokenId` item) 
         * should not be applied.
         */
        onBroke?: (
            /**
             * Tool item.
             */
            item: ItemInstance
        ) => boolean,

        /**
         * Function that is used to change enchant data object before all the
         * calculations. Can be used to add some enchantment properties, such as
         * silk touch, efficiency, unbreaking or fortune.
         */
        modifyEnchant?: (
            /**
             * Tool's enchant data.
             */
            enchantData: EnchantData,
            /**
             * Tool item.
             */
            item: ItemInstance,
            /**
             * Coordinates where the block is being broken. Passed only if
             * the block is destroyed.
             */
            coords?: Callback.ItemUseCoordinates,
            /**
             * Destroyed block data. Passed only if the block is destroyed.
             */
            block?: Tile
        ) => void,

        /**
         * Function that is called when the block that has a destroy function is 
         * destroyed.
         */
        onMineBlock?: (
            /**
             * Coordinates where the block is destroyed.
             */
            coords: Callback.ItemUseCoordinates,
            /**
             * An item in player's hand.
             */
            carried: ItemInstance,
            /**
             * Block that was destroyed.
             */
            fullTile: Tile,
            /**
             * {@link BlockSource} object of the world where the block was destroyed.
             */
            blockSource: BlockSource,
            /**
             * Entity UID of the player that destroyed the block.
             */
            player: number
        ) => void
    }

    /**
     * Object containing some of the enchants that are used to calculate block 
     * destroy time.
     */
    interface EnchantData {
        /**
         * If `true`, the item has Silk Touch enchantment.
         */
        silk: boolean,
        /**
         * Specifies the level of Fortune enchantment, or `0` if the item doesn't
         * have this enchant.
         */
        fortune: number,
        /**
         * Specifies the level of Efficiency enchantment, or `0` if the item
         * doesn't have this enchant.
         */
        efficiency: number,
        /**
         * Specifies the level of Unbreaking enchantment, or `0` if the item
         * doesn't have this enchant.
         */
        unbreaking: number,
        /**
         * Specifies the amount of additional experience that is dropped when
         * player breaks block with specified item.
         */
        experience: number,
        /**
         * @since 2.2.1b106
         */
        all: { [id: number]: number }
    }
}
