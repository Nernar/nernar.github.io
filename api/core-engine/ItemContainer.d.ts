/**
 * Backward compatibility.
 */
declare type TransferPolicy = com.zhekasmirnov.apparatus.api.container.ItemContainerFuncs.TransferPolicy;

/**
 * Type of TileEntity container that supports multiplayer.
 */
declare class ItemContainer extends com.zhekasmirnov.apparatus.api.container.ItemContainer {
	static class: java.lang.Class<ItemContainer>;
	/**
	 * Constructs a new {@link ItemContainer} object.
	 */
	constructor();
	/**
	 * Constructs a new {@link ItemContainer} object from given deprecated {@link UI.Container} object.
	 */
	constructor(legacyContainer: UI.Container);
}

declare class ItemContainerSlot extends com.zhekasmirnov.apparatus.api.container.ItemContainerSlot {}