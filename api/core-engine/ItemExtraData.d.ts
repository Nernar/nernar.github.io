/**
 * Class representing item extra data. Used to store additional information
 * about item other then just item ID and data.
 */
declare class ItemExtraData {
	/**
	 * Creates an empty {@link ItemExtraData} instance.
	 */
	constructor();
	/**
	 * Creates a copy of current {@link ItemExtraData} instance with the same contents.
	 */
	constructor(extraData?: ItemExtraData);
	/**
	 * Creates an {@link ItemExtraData} Java object instance
	 * from given native item extra data object pointer,
	 * represented as 64-bit integer (long).
	 */
	constructor(pointer: number);

	asJson(): org.json.JSONObject;
	/**
	 * Creates a copy of current {@link ItemExtraData} object.
	 * @returns A created copy of the data.
	 */
	copy(): ItemExtraData;
	getValue(): number;
	/**
	 * @returns `true`, if item extra exists and is not empty.
	 */
	isEmpty(): boolean;
	applyTo(item: ItemInstance): void;
	/**
	 * @returns `true` if the item is enchanted, `false` otherwise.
	 */
	isEnchanted(): boolean;
	/**
	 * Adds a new enchantment to the item.
	 * @param type enchantment ID, one of the {@link EEnchantment} constants
	 * @param level enchantment level, generally between 1 and 5
	 */
	addEnchant(type: number, level: number): void;
	/**
	 * @param type enchantment ID, one of the {@link EEnchantment} constants
	 * @returns Level of the specified enchantment.
	 */
	getEnchantLevel(type: number): number;
	/**
	 * Removes enchantments by it's ID.
	 * @param type enchantment ID, one of the {@link EEnchantment} constants
	 */
	removeEnchant(type: number): void;
	/**
	 * Removes all the enchantments of the item.
	 */
	removeAllEnchants(): void;
	/**
	 * @returns Amount of enchantments applied to the item.
	 */
	getEnchantCount(): number;
	/**
	 * @param id enchantment ID, one of the {@link EEnchantment} constants
	 * @param level enchantment level, generally between 1 and 5
	 * @returns Enchantment name by it's ID and level.
	 * @since 2.2.1b94 (not worked before)
	 */
	getEnchantName(id: number, level: number): string;
	getRawEnchants(): number[][];
	getEnchants(): { [id: number]: number };
	/**
	 * @returns All enchantments names separated by line breaks.
	 */
	getAllEnchantNames(): string;
	getAllCustomData(): string;
	setAllCustomData(data: string): void;
	/**
	 * @returns Item's custom name.
	 */
	getCustomName(): string;
	/**
	 * Sets item's custom name.
	 */
	setCustomName(name: string): void;
	/**
	 * @returns Compound tag for the specified item.
	 * @since 2.0.5b44
	 */
	getCompoundTag(): Nullable<NBT.CompoundTag>;
	/**
	 * Sets compound tag for the specified item.
	 * @since 2.0.5b44
	 */
	setCompoundTag(ent: number, tag: NBT.CompoundTag): void;
	/**
	 * @returns Reference to itself to be used in sequential calls.
	 */
	putObject(name: string, value: any): ItemExtraData;
	/**
	 * Puts some custom string parameter to the extra data of the item.
	 * @param name parameter name
	 * @param value parameter value
	 * @returns Reference to itself to be used in sequential calls.
	 */
	putString(name: string, value: string): ItemExtraData;
	/**
	 * Puts some custom integer parameter to the extra data of the item.
	 * @param name parameter name
	 * @param int parameter value
	 * @returns Reference to itself to be used in sequential calls.
	 */
	putInt(name: string, int: number): ItemExtraData;
	/**
	 * Puts some custom long integer parameter to the extra data of the item.
	 * @param name parameter name
	 * @param long parameter value
	 * @returns Reference to itself to be used in sequential calls.
	 */
	putLong(name: string, long: number): ItemExtraData;
	/**
	 * Puts some custom floating point number parameter to the extra data of the item.
	 * @param name parameter name
	 * @param float parameter value
	 * @returns Reference to itself to be used in sequential calls.
	 */
	putFloat(name: string, float: number): ItemExtraData;
	/**
	 * Puts some custom boolean parameter to the extra data of the item.
	 * @param name parameter name
	 * @param bool parameter value
	 * @returns Reference to itself to be used in sequential calls.
	 */
	putBoolean(name: string, bool: boolean): ItemExtraData;
	/**
	 * @param name parameter name
	 * @param fallback default value to be returned if item extra data doesn't
	 * contain a parameter with specified name
	 * @returns Custom string parameter value if extra data of the item contains
	 * one, fallback value otherwise. If fallback was not specified, `null` is returned.
	 */
	getString(name: string, fallback?: string): Nullable<string>;
	/**
	 * @param name parameter name
	 * @param fallback default value to be returned if item extra data doesn't 
	 * contain a parameter with specified name
	 * @returns Custom integer parameter value if extra data of the item contains
	 * one, fallback value otherwise. If fallback was not specified, `null` is returned.
	 */
	getInt(name: string, fallback?: number): Nullable<number>;
	/**
	 * @param name parameter name
	 * @param fallback default value to be returned if item extra data doesn't
	 * contain a parameter with specified name
	 * @returns Custom long integer parameter value if extra data of the item contains
	 * one, fallback value otherwise. If fallback was not specified, `null` is returned.
	 */
	getLong(name: string, fallback?: number): Nullable<number>;
	/**
	 * @param name parameter name
	 * @param fallback default value to be returned if item extra data doesn't
	 * contain a parameter with specified name
	 * @returns Custom float parameter value if extra data of the item contains
	 * one, fallback value otherwise. If fallback was not specified, `null` is returned.
	 */
	getFloat(name: string, fallback?: number): Nullable<number>;
	/**
	 * @param name parameter name
	 * @param fallback default value to be returned if item extra data doesn't
	 * contain a parameter with specified name
	 * @returns Custom boolean parameter value if extra data of the item contains
	 * one, fallback value otherwise. If fallback was not specified, `null` is returned.
	 */
	getBoolean(name: string, fallback?: boolean): Nullable<boolean>;
	/**
	 * @returns Reference to itself to be used in sequential calls.
	 */
	putSerializable(name: string, serializableObject: any): ItemExtraData;
	getSerializable(name: string): any;
	/**
	 * Removes all custom parameters from item extra data.
	 */
	removeCustomData(): void;
	isFinalizableInstance(): boolean;

	static unwrapObject(extra: any): Nullable<ItemExtraData>;
	static unwrapValue(extra: any): number;
	static getValueOrNullPtr(extra: ItemExtraData): number;
	static getExtraOrNull(pointer: number): Nullable<ItemExtraData>;
	static cloneExtra(extra: Nullable<ItemExtraData>): Nullable<ItemExtraData>;
	static fromJson(json: org.json.JSONObject): Nullable<ItemExtraData>;
}
