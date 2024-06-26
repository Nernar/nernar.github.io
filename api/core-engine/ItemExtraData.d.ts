/**
 * Class representing item extra data. Used to store additional information
 * about item other then just item ID and data.
 */
declare class ItemExtraData extends com.zhekasmirnov.innercore.api.NativeItemInstanceExtra {
	static class: java.lang.Class<ItemExtraData>;
	/**
	 * Creates an empty {@link ItemExtraData} instance.
	 */
	constructor();
	/**
	 * Creates a copy of current {@link ItemExtraData} instance with the same contents.
	 */
	constructor(extraData?: ItemExtraData);

}
