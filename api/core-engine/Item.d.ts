/**
 * Module used to define items and their properties.
 */
declare namespace Item {
    /**
     * @param id string ID of the item
     * @returns Item numeric ID by it's string ID or just returns it's numeric ID 
     * if input was a numeric ID.
     */
    function getNumericId(id: string | number): number;

    /**
     * Gets NativeItem instance that can be used to apply some properties to the
     * item.
     * @param id string ID of the item
     * @returns NativeItem instance associated with this item.
     */
    function getItemById(id: string): NativeItem;

    /**
     * Object used in {@link Item.createItem} and {@link Item.createThrowableItem}
     * methods to specify general item parameters.
     */
    interface ItemParams {
        /**
         * Maximum item in stack size.
         * @default 64
         */
        stack?: number;
        /**
         * If true, the item will not be added to creative.
         * @default false
         */
        isTech?: boolean;
        /**
         * @since 2.2.0b76
         */
        category?: number;
    }

    /**
     * Creates new item using specified parameters.
     * @param nameID string ID of the item; you should register it via 
     * {@link IDRegistry.genItemID} call first
     * @param name item name in English; add translations to the name using
     * {@link Translation} module, all translation to the item and block names are
     * applied automatically
     * @param texture texture data used to create item
     * @param params additional item parameters
     */
    function createItem(nameID: string, name: string, texture: TextureData, params?: ItemParams): NativeItem;

    /**
     * Object used in {@link Item.createFoodItem} method
     * to specify general food item parameters.
     */
    interface FoodParams extends ItemParams {
        /**
         * Amount of hunger restored by this food in halfs.
         * @default 1 // 0.5 hunger unit
         */
        food?: number;
    }

    /**
     * Creates eatable item using specified parameters.
     * @param nameID string ID of the item. You should register it via 
     * {@link IDRegistry.genItemID} call first
     * @param name item name in English; add translations to the name using
     * {@link Translation} module, all translation to the item and block names are
     * applied automatically
     * @param texture texture data used to create item
     * @param params additional item parameters
     */
    function createFoodItem(nameID: string, name: string, texture: TextureData, params?: FoodParams): NativeItem;

    /**
     * @deprecated Use {@link Item.createItem} and
     * {@link Recipes.addFurnaceFuel} instead.
     * @throws Unsupported usage.
     */
    function createFuelItem(nameID: string, name: string, texture: TextureData, params?: ItemParams): void;

    /**
     * Object used in {@link Item.createArmorItem} method
     * to specify general armor item parameters.
     */
    interface ArmorParams {
        /**
         * If `true`, the item will not be added to creative.
         * @default false
         */
        isTech?: boolean,
        /**
         * Armor durability, the more it is, the more hits the armor will resist.
         * @default 1
         */
        durability?: number,
        /**
         * Armor protection.
         * @default 0
         */
        armor?: number,
        /**
         * Relative path to the armor model texture from the mod assets directory.
         * @default "textures/logo.png"
         */
        texture?: string,
        /**
         * Armor type, should be one of the `helmet`, `chestplate`, `leggings` or `boots`.
         */
        type: ArmorType,
        /**
         * Knockback resistance, that the player will have when wearing the following armor.
         * It must be value from 0 (no knockback resistance) to 1 (full knockback resistance).
         * @default 0
         */
        knockbackResist?: number;
    }

    /**
     * Creates armor item using specified parameters.
     * @param nameID string ID of the item; you should register it via 
     * {@link IDRegistry.genItemID} call first
     * @param name item name in English; add translations to the name using
     * {@link Translation} module, all translation to the item and block names are
     * applied automatically
     * @param texture texture data used to create item
     * @param params general armor item parameters object, the armor type there is required
     */
    function createArmorItem(nameID: string, name: string, texture: TextureData, params: ArmorParams): NativeItem;

    /**
     * Creates throwable item using specified parameters.
     * @param nameID string ID of the item; you should register it via 
     * {@link IDRegistry.genItemID} call first
     * @param name item name in English; add translations to the name using
     * {@link Translation} module, all translation to the item and block names are
     * applied automatically
     * @param texture texture data used to create item
     * @param params additional item parameters
     */
    function createThrowableItem(nameID: string, name: string, texture: TextureData, params?: ItemParams): NativeItem;

    /**
     * @param id numeric item ID
     * @returns `true` if given item is vanilla item, `false` otherwise.
     */
    function isNativeItem(id: number): boolean;

    /**
     * @param id numeric item ID
     * @returns Maximum damage value for the specified item.
     */
    function getMaxDamage(id: number): number;

    /**
     * @param id numeric item ID
     * @returns Maximum stack size for the specified item.
     * @deprecated Use same function with data parameter.
     */
    function getMaxStack(id: number): number;

    /**
     * @param id numeric item ID
     * @returns Maximum stack size for the specified item.
     * @since 2.2.0b1 pre-alpha
     */
    function getMaxStack(id: number, data: number): number;

    /**
     * @param id numeric item ID
     * @param data item data
     * @returns Current item name.
     */
    function getName(id: number, data: number): string;

    /**
     * @param id numeric item ID
     * @param data item data
     * @param encode no longer supported, do not use this parameter
     * @returns Current item name.
     * @deprecated Use same method without last parameter.
     */
    function getName(id: number, data: number, encode: any): string;

    /**
     * Natural armor points, that also is displayed above hotbar.
     * @param id numeric item ID
     * @returns Natural armor half points.
     * @since 2.4.0b119
     */
    function getArmorValue(id: number): number;

    /**
     * @param id numeric item ID
     * @returns `true`, if an item with such ID exists, `false` otherwise.
     * @since 2.2.1b94 (not worked before)
     */
    function isValid(id: number): boolean;

    /**
     * @param id numeric item ID
     * @param data no longer supported, do not use this parameter
     * @returns `true`, if an item with such ID exists, `false` otherwise.
     * @deprecated Use same method without last parameter.
     */
    function isValid(id: number, data: number): boolean;

    /**
     * Adds item to creative inventory.
     * @param id string or numeric item ID
     * @param count amount of the item to be added, generally should be 1
     * @param data item data
     */
    function addToCreative(id: number | string, count: number, data: number, extra?: ItemExtraData): void;

    /**
     * Creates group of creative items.
     * @param name name of group
     * @param displayedName name of group in game
     * @param ids array of items in group
     */
    function addCreativeGroup(name: string, displayedName: string, ids: number[]): void

    /**
     * Applies several properties via one method call.
     * @param numericID numeric item ID
     * @deprecated Consider using appropriate setters instead.
     */
    function describeItem(numericID: number, description: object): void;

    /**
     * Sets item creative category.
     * @param id string or numeric item ID
     * @param category item category, should be one of the 
     * {@link EItemCategory} values
     */
    function setCategory(id: number | string, category: number): void;

    /**
     * Specifies how the item can be enchanted.
     * @param id string or numeric item ID
     * @param enchant enchant type defining when enchants can or cannot be
     * applied to this item, one of the {@link EEnchantType}
     * @param value quality of the enchants that are applied, the higher this 
     * value is, the better enchants you get with the same level
     */
    function setEnchantType(id: number | string, enchant: number, value: number): void;

    /**
     * Specifies what items can be used to repair this item in the anvil.
     * @param id string or numeric item ID
     * @param items array of numeric item IDs to be used as repair items
     */
    function addRepairItemIds(id: number | string, items: number[]): void;

    /**
     * Specifies how the player should hold the item.
     * @param id string or numeric item ID
     * @param enabled if true, player holds the item as a tool, not as a simple
     * item
     */
    function setToolRender(id: number | string, enabled: boolean): void;

    /**
     * Sets item maximum data value.
     * @param id string or numeric item ID
     * @param maxdamage maximum data value for the item
     */
    function setMaxDamage(id: number | string, maxdamage: number): void;

    /**
     * Sets item as glint (like enchanted tools or golden apple).
     * @param id string or numeric item ID
     * @param enabled if true, the item will be displayed as glint item
     */
    function setGlint(id: number | string, enabled: boolean): void;

    /**
     * Allows to click with item on liquid blocks.
     * @param id string or numeric item ID
     * @param enabled if true, liquid blocks can be selected on click
     */
    function setLiquidClip(id: number | string, enabled: boolean): void;

    function setArmorDamageable(damageable: boolean): void;

    /**
     * @deprecated No longer supported.
     */
    function setStackedByData(id: number | string, enabled: boolean): void;

    /**
     * Allows item to be put in offhand slot.
     * @param id string or numeric item ID
     * @since 2.0.4b35
     */
    function setAllowedInOffhand(id: number | string, allowed: boolean): void;

    /**
     * 
     * @param id 
     * @param should 
     * @since 2.4.0b119
     */
    function setShouldDespawn(id: number | string, should: boolean): void;

    /**
     * 
     * @param id 
     * @param resistant 
     * @since 2.4.0b119
     */
    function setFireResistant(id: number | string, resistant: boolean): void;

    /**
     * 
     * @param id 
     * @param explodable 
     * @since 2.4.0b119
     */
    function setExplodable(id: number | string, explodable: boolean): void;

    /**
     * Sets additional properties for the item, uses Minecraft mechanisms to
     * set them. Full list of properties is currently unavailable.
     * @param id string or numeric item ID
     * @param props JSON string containing some of the properties
     */
    function setProperties(id: number | string, props: string): void;

    /**
     * Sets animation type for the item.
     * @param id string or numeric item ID
     * @param animType use animation type, one of the {@link EItemAnimation} 
     * values
     */
    function setUseAnimation(id: number | string, animType: number): void;

    /**
     * Limits maximum use duration. This is useful to create such items as bows.
     * @param id string or numeric item ID
     * @param duration maximum use duration in ticks
     */
    function setMaxUseDuration(id: number | string, duration: number): void;

    /**
     * Same as {@link Item.registerUseFunction}, but supports numeric IDs only.
     */
    function registerUseFunctionForID(numericID: number, useFunc: Callback.ItemUseFunction): void;

    /**
     * Registers function that is called when user touches some block in the
     * world with specified item.
     * @param nameID string or numeric ID of the item
     * @param useFunc function that is called when such an event occurs
     */
    function registerUseFunction(nameID: string | number, useFunc: Callback.ItemUseFunction): void;

    /**
     * Same as {@link Item.registerThrowableFunction}, but supports numeric IDs only.
     */
    function registerThrowableFunctionForID(numericID: number, useFunc: Callback.ProjectileHitFunction): void;

    /**
     * Registers function that is called when throwable item with specified ID
     * hits block or entity.
     * @param nameID string or numeric ID of the item
     * @param useFunc function that is called when such an event occurs
     */
    function registerThrowableFunction(nameID: string | number, useFunc: Callback.ProjectileHitFunction): void;

    /**
     * Registers item ID as requiring item icon override and registers function
     * to perform such an override.
     * @param nameID string or numeric ID of the item
     * @param func function that is called to override item icon. Should return 
     * {@link Item.TextureData} object to be used for the item. See 
     * {@link Callback.ItemIconOverrideFunction} documentation for details
     */
    function registerIconOverrideFunction(nameID: string | number, func: Callback.ItemIconOverrideFunction): void;

    /**
     * Registers function to perform item name override.
     * @param nameID string or numeric ID of the item
     * @param func function that is called to override item name. Should return 
     * string to be used as new item name
     */
    function registerNameOverrideFunction(nameID: string | number, func: Callback.ItemNameOverrideFunction): void;

    /**
     * Registers function to be called when player uses item in the air (not on
     * the block).
     * @param nameID string or numeric ID of the item
     * @param func function that is called when such an event occurs
     */
    function registerNoTargetUseFunction(nameID: string | number, func: Callback.ItemUseNoTargetFunction): void;

    /**
     * Registers function to be called when player doesn't complete using item
     * that has maximum use time set with {@link Item.setMaxUseDuration} function.
     * Vanilla bow uses this function with max use duration of 72000 ticks.
     * @param nameID string or numeric ID of the item
     * @param func function that is called when such an event occurs
     */
    function registerUsingReleasedFunction(nameID: string | number, func: Callback.ItemUsingReleasedFunction): void;

    /**
     * Registers function to be called when player completes using item
     * that has maximum use time set with {@link Item.setMaxUseDuration} function.
     * @param nameID string or numeric ID of the item
     * @param func function that is called when such an event occurs
     */
    function registerUsingCompleteFunction(nameID: string | number, func: Callback.ItemUsingCompleteFunction): void;

    /**
     * Registers function to be called when item is dispensed from dispenser.
     * @param nameID string or numeric ID of the item
     * @param func function that is called when such an event occurs
     */
    function registerDispenseFunction(nameID: string | number, func: Callback.ItemDispensedFunction): void;

    /**
     * Invoke click on the block in world.
     * @param coords coords of click on the block
     * @param item item which used on the block
     * @param noModCallback if `true`, mod ItemUse callback will be not executed
     * @param entity player which clicked on the block
     * @internal
     */
    function invokeItemUseOn(coords: Callback.ItemUseCoordinates, item: ItemInstance, noModCallback: boolean, entity: number): void;

    /**
     * Invoke click on the block in world without target.
     * @param item item which used on the block
     * @param noModCallback if `true`, mod ItemUse callback will be not executed
     * @internal
     */
    function invokeItemUseNoTarget(item: ItemInstance, noModCallback: boolean): void;

    /**
     * Class representing item used to set it's properties.
     */
    interface NativeItem {
        addRepairItem(id: number): void;
        addRepairItems(id: number[]): void;
        setAllowedInOffhand(allowed: boolean): void;
        setArmorDamageable(damageable: boolean): void;
        setCreativeCategory(category: number): void;
        setEnchantType(type: number): void;
        setEnchantType(enchant: number, value: number): void;
        setEnchantability(enchant: number, value: number): void;
        setGlint(glint: boolean): void;
        setHandEquipped(equipped: boolean): void;
        setLiquidClip(clip: boolean): void;
        setMaxDamage(maxDamage: number): void;
        setMaxStackSize(maxStack: number): void;
        setMaxUseDuration(duration: number): void;
        setProperties(props: string): void;
        setStackedByData(stacked: boolean): void;
        setUseAnimation(animation: number): void;
    }

    /**
     * Represents item texture data. For example, if *\/items-opaque* folder 
     * contains file *nugget_iron_0.png*, you should pass `"nugget_iron"` as 
     * texture name and `0` as texture index. *_N* suffix can be omitted, but it is
     * generally not recommended.
     */
    interface TextureData {
        /**
         * Texture name, name of the file stored in the *\/items-opaque* asset
         * folder without extension and *_N* suffixes.
         */
        name: string,

        /**
         * Texture index defined by *_N* texture suffix.
         * @default 0
         */
        data?: number,

        /**
         * @deprecated Same as data, so data is preferred in all cases.
         */
        meta?: number
    }
    
    /**
     * All items name override functions object.
     * @internal
     */
    const nameOverrideFunctions: {
        [key: number]: Callback.ItemNameOverrideFunction
    };

    /**
     * All items icon override functions object.
     * @internal
     */
    const iconOverrideFunctions: {
        [key: number]: Callback.ItemIconOverrideFunction
    };

	/**
	 * Once upon a time, a new way of registering items, however,
	 * in current state, either does not work or is undesirable to use.
     * @deprecated
	 */
	interface ItemLegacyPrototype {
        type: "createItem" | "createFoodItem" | "createArmorItem" | "createThrowableItem",
		init?: () => void,
		getName: (item: null) => Nullable<string>,
		getTexture: (item: null) => Nullable<TextureData>,
		getDefineParams?: (item: null) => Nullable<Item.ItemParams | Item.ArmorParams | Item.FoodParams>,
		getMaxDamage?: (item: null) => Nullable<number>,
		getCategory?: (item: null) => Nullable<number>,
		getEnchant?: (item: null) => Nullable<number>,
		getUseAnimation?: (item: null) => Nullable<EItemAnimation | number>,
		getMaxUseDuration?: (item: null) => Nullable<number>,
        /**
         * Cannot be used, because of properties should be passed as string,
         * but properties here internally depends on object.
         */
		getProperties?: (item: null) => Nullable<object>,
		isToolRender?: (item: null) => Nullable<boolean>,
		isStackedByData?: (item: null) => Nullable<boolean>,
		isEnchanted?: (item: null) => Nullable<boolean>,
		getToolMaterial?: (item: null) => Nullable<string | ToolAPI.ToolMaterial>,
		getToolTarget?: (item: null) => Nullable<string[]>,
		getToolPrototype?: (item: null) => Nullable<ToolAPI.ToolParams>,
		getArmorFuncs?: (item: null) => Nullable<Armor.IArmorJSCallback>,
		onUsed?: (coords: Vector, item: ItemInstance, block: Tile) => void,
        /**
         * Unused at all.
         */
		onTick?: (item: null) => void,
		onThrowableImpact?: (projectile: number, item: ItemInstance, target: Callback.ProjectileHitTarget) => void
	}

    /**
     * @deprecated Should not be used in new mods, consider using {@link Item} 
     * properties setters instead.
     */
    function setPrototype(nameID: any, prototype: ItemLegacyPrototype): void;
}
