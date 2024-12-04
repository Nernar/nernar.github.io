declare namespace ItemContainer {
	type PrimitiveTypes = string | number | boolean;
	type PacketData = {
		[key: string]: PrimitiveTypes;
	};

	interface BindingValidator {
		(container: ItemContainer, str: string, obj: any, time: number): any;
	}
	interface ClientEventListener {
		(container: ItemContainer, window: UI.IWindow, scriptable: any, obj: any): void;
	}
	interface ClientOnCloseListener {
		(container: ItemContainer): void;
	}
	interface ClientOnOpenListener {
		(container: ItemContainer, str: string): void;
	}
	interface DirtySlotListener {
		(container: ItemContainer, str: string, slot: ItemContainerSlot): void;
	}
	interface ServerEventListener {
		(container: ItemContainer, client: NetworkClient, obj: any): void;
	}
	interface ServerOnCloseListener {
		(container: ItemContainer, client: NetworkClient): void;
	}
	interface ServerOnOpenListener {
		(container: ItemContainer, client: NetworkClient, screenName: string): void;
	}
	interface Transaction {
		(container: ItemContainer, str: string): void;
	}
	interface TransferPolicy {
		(container: ItemContainer, str: string, id: number, count: number, data: number, extra: Nullable<ItemExtraData>, time: number): number;
	}
	interface UiScreenFactory {
		(container: ItemContainer, screen: string): UI.IWindow;
	}
}

/**
 * Backwards compatibility.
 */
declare type TransferPolicy = ItemContainer.TransferPolicy;

declare interface ItemContainerUiHandler extends UI.UiAbstractContainer {
	getWindow(): UI.IWindow;
	getParent(): ItemContainer;
	handleBindingDirty(elementName: string, bindingName: string): void;
	applyAllBindingsFromMap(): void;
	setBindingByComposedName(name: string, value: ItemContainer.PrimitiveTypes): void;
	receiveBindingsFromServer(bindings: org.json.JSONObject): void;
}

/**
 * Type of TileEntity container that supports multiplayer.
 */
declare class ItemContainer implements Recipes.WorkbenchField {
	readonly isServer: boolean;
	readonly slots: {[key: string]: ItemContainerSlot};
	readonly transactionLock: any;
	static loadClass(): void;
	static registerScreenFactory(factoryName: string, factory: ItemContainer.UiScreenFactory): void;
	static addClientEventListener(typeName: string, packetName: string, listener: ItemContainer.ClientEventListener): void;
	static addClientOpenListener(typeName: string, listener: ItemContainer.ClientOnOpenListener): void;
	static addClientCloseListener(typeName: string, listener: ItemContainer.ClientOnCloseListener): void;
	static getClientContainerInstance(name: string): Nullable<ItemContainer>;
	/**
	 * Constructs a new {@link ItemContainer} object.
	 */
	constructor();
	/**
	 * Constructs a new {@link ItemContainer} object from given
	 * deprecated {@link UI.Container} object.
	 */
	constructor(legacyContainer: UI.Container);
	getNetworkEntity(): NetworkEntity;
	getNetworkName(): string;
	getUiAdapter(): ItemContainerUiHandler;
	getWindow(): UI.IWindow;
	getWindowContent(): UI.WindowContent;
	removeEntity(): void;
	/**
	 * Sets container's parent object, for {@link TileEntity}'s
	 * container it should be it reference, otherwise you can pass any
	 * value to be used in your code later.
	 * @param parent an object to be set as container's parent
	 */
	setParent(parent: Nullable<TileEntity> | any): void;
	/**
	 * @returns Tile if the following container is part of it,
	 * and `null` otherwise.
	 */
	getParent(): Nullable<TileEntity> | any;

	setGlobalAddTransferPolicy(policy: ItemContainer.TransferPolicy): ItemContainer;
	setGlobalGetTransferPolicy(policy: ItemContainer.TransferPolicy): ItemContainer;
	setSlotAddTransferPolicy(slotName: string, policy: ItemContainer.TransferPolicy): ItemContainer;
	setSlotGetTransferPolicy(slotName: string, policy: ItemContainer.TransferPolicy): ItemContainer;
	setGlobalDirtySlotListener(listener: ItemContainer.DirtySlotListener): ItemContainer;
	setDirtySlotListener(listener: ItemContainer.DirtySlotListener): void;
	sealSlot(slotName: string): void;
	sealAllSlots(): void;
	getAddTransferPolicy(slot: string): ItemContainer.TransferPolicy;
	getGetTransferPolicy(slot: string): ItemContainer.TransferPolicy;
	setGlobalBindingValidator(validator: ItemContainer.BindingValidator): void;
	setBindingValidator(composedBindingName: string, validator: ItemContainer.BindingValidator): void;
	getBindingValidator(composedBindingName: string): ItemContainer.BindingValidator;
	runTransaction(transaction: ItemContainer.Transaction): void;
	/**
	 * Gets the slot by it's name. If a slot with specified name doesn't
	 * exists, creates an empty one with specified name.
	 * @param name slot name
	 * @returns Contents of the slot in a {@link ItemContainerSlot} object.
	 * You can modify it to change the contents of the slot.
	 */
	getSlot(name: string): ItemContainerSlot;
	/**
	 * @deprecated Use {@link ItemContainer.getSlot} instead.
	 */
	getFullSlot(name: string): ItemContainerSlot;
	markSlotDirty(name: string): void;
	markAllSlotsDirty(): void;
	/**
	 * Sets slot's content by it's name from given slot object. If a slot with specified
	 * name doesn't exist, a new slot with specified name and item will be created.
	 * @param name slot name
	 * @param slot {@link ItemContainerSlot} object to specify slot contents
	 */
	setSlot(name: string, slot: ItemContainerSlot): void;
	/**
	 * Set slot's content by it's name. If a slot with specified name doesn't
	 * exists, creates new with specified name and item.
	 * @param name slot name
	 */
	setSlot(name: string, id: number, count: number, data: number): void;
	/**
	 * Set slot's content by it's name. If a slot with specified name doesn't
	 * exists, creates new with specified name and item.
	 * @param name slot name
	 * @param extra item extra data
	 */
	setSlot(name: string, id: number, count: number, data: number, extra: Nullable<ItemExtraData>): void;
	addToSlot(name: string, id: number, count: number, data: number, extra: Nullable<ItemExtraData>, player: number): number;
	getFromSlot(name: string, id: number, count: number, data: number, extra: Nullable<ItemExtraData>, player: number): number;
	/**
	 * Sends changes in container to all clients.
	 * Needs to be used every time when something changes in container.
	 */
	sendChanges(): void;
	dropAt(region: BlockSource, x: number, y: number, z: number): void;
	/**
	 * Validates all the slots in the container.
	 */
	validateAll(): void;
	/**
	 * Validates slot contents. If the data value is less then 0, it becomes
	 * 0, if ID is 0 or count is less then or equals to zero, slot is reset
	 * to an empty one.
	 * @param name slot name
	 */
	validateSlot(name: string): void;
	/**
	 * Clears slot's contents.
	 * @param name slot name
	 */
	clearSlot(name: string): void;
	/**
	 * Drops slot's contents on the specified coordinates and clears the
	 * slot.
	 * @param name slot name
	 */
	dropSlot(region: BlockSource, name: string, x: number, y: number, z: number): void;
	/**
	 * Sends event to move specified amount of items from the player inventory slot by given index
	 * to container slot by given name. This event is sent from client to server,
	 * so you should use it only on the client side, for example, in custom slot element touch events, etc.
	 * @param inventorySlot numeric index of the inventory slot, from where to retrieve the item
	 * @param slotName string name of the container slot, where to put taken item
	 * @param amount item count to be retrieved from inventory slot
	 */
	sendInventoryToSlotTransaction(inventorySlot: number, slotName: string, amount: number): void;
	handleInventoryToSlotTransaction(player: number, inventorySlot: number, slotName: string, amount: number): void;
	/**
	 * Sends event to move specified amount of items from one container slot to another by given names.
	 * This event is sent from client to server, so you should use it only on the client side,
	 * for example, in custom slot element touch events, etc.
	 * @param slot1 string name of the container slot, from where to retrieve item
	 * @param slot2 string name of the container slot, where to put taken item
	 * @param amount item count to be retrieved from container slot
	 */
	sendSlotToSlotTransaction(slot1: string, slot2: string, amount: number): void;
	handleSlotToSlotTransaction(player: number, slot1: string, slot2: string, amount: number): void;
	/**
	 * Sends event to move specified amount of items from the container slot by given name
	 * to player's inventory. The index of the inventory slot, where to put item, can't be specified,
	 * because it's decided by {@link ItemContainer} automatically, and you just don't need to do this.
	 * This event is sent from client to server, so you should use it only on the client side,
	 * for example, in custom slot element touch events, etc.
	 * @param slot string name of the container slot, from where to retrieve item
	 * @param amount item count to be retrieved from container slot
	 */
	sendSlotToInventoryTransaction(slot: string, amount: number): void;
	handleSlotToInventoryTransaction(player: number, slotName: string, inventorySlot: number, amount: number): void;
	sendDirtyClientBinding(key: string, value: ItemContainer.PrimitiveTypes): void;
	handleDirtyBindingsPacket(client: NetworkClient, packet: org.json.JSONObject): void;
	setBinding(composedBindingName: string, value: ItemContainer.PrimitiveTypes): void;
	setClientBinding(composedBindingName: string, value: ItemContainer.PrimitiveTypes): void;
	getBinding(composedBindingName: string): ItemContainer.PrimitiveTypes;
	setBinding(elementName: string, bindingName: string, value: ItemContainer.PrimitiveTypes): void;
	setClientBinding(elementName: string, bindingName: string, value: ItemContainer.PrimitiveTypes): void;
	getBinding(elementName: string, bindingName: string): ItemContainer.PrimitiveTypes;
	/**
	 * Sets "value" binding value for the element. Used to set scales values.
	 * @param elementName element name
	 * @param value value to be set for the element
	 */
	setScale(elementName: string, value: number): void;
	setClientScale(elementName: string, value: number): void;
	/**
	 * @param elementName element name
	 * @returns Value with "value" binding, e.g. scale value, or `null` if no
	 * element with specified name exist.
	 */
	getValue(elementName: string, value: number): Nullable<number>;
	/**
	 * Sets "text" binding value for the element. Used to set element's text.
	 * @param elementName element name
	 * @param text value to be set for the element
	 */
	setText(elementName: string, text: string | number): void;
	setClientText(elementName: string, text: string): void;
	/**
	 * @param elementName element name
	 * @returns Value "text" binding, usually the text displayed on the
	 * element, or `null` if no element with specified name exist.
	 */
	getText(elementName: string): Nullable<string>;
	setClientContainerTypeName(type: string): void;
	getClientContainerTypeName(): string;
	addServerEventListener(name: string, listener: ItemContainer.ServerEventListener): void;
	addServerOpenListener(listener: ItemContainer.ServerOnOpenListener): void;
	addServerCloseListener(listener: ItemContainer.ServerOnCloseListener): void;
	/**
	 * Sends packet from client container copy to server.
	 */
	sendEvent(name: string, data: ItemContainer.PacketData | string): void;
	/**
	 * Sends packet from server container copy to client.
	 */
	sendEvent(client: NetworkClient, name: string, data: ItemContainer.PacketData | string): void;
	/**
	 * Sends packet from server container.
	 * @remarks
	 * Available only in server container events!
	 */
	sendResponseEvent(name: string, data: ItemContainer.PacketData | string): void;
	/**
	 * Opens UI for client.
	 * @param client client in which UI will be open
	 * @param screenName name of the screen to open
	 */
	openFor(client: NetworkClient, screenName: string): void;
	/**
	 * Closes UI for client.
	 * @param client client in which UI will be open
	 */
	closeFor(client: NetworkClient): void;
	/**
	 * Closes UI for all clients
	 */
	close(): void;
	sendClosed(): void;
	/**
	 * @since 2.2.0b82
	 */
	setGlobalSlotSavingEnabled(enabled: boolean): void;
	/**
	 * @since 2.2.0b82
	 */
	isGlobalSlotSavingEnabled(): boolean;
	/**
	 * @since 2.2.0b82
	 */
	setSlotSavingEnabled(name: string, enabled: boolean): void;
	/**
	 * @since 2.2.0b82
	 */
	resetSlotSavingEnabled(name: string): void;
	/**
	 * @since 2.2.0b82
	 */
	isSlotSavingEnabled(name: string): boolean;
	/**
	 * @returns `false` if container supports multiplayer, `true` otherwise.
	 */
	isLegacyContainer(): false;
	/**
	 * @since 2.2.0b82
	 */
	asLegacyContainer(allSlots: boolean): UI.Container;
	asLegacyContainer(): UI.Container;
	setWorkbenchFieldPrefix(prefix: string): void;
	/**
	 * @since 2.2.1b106
	 */
	setWorkbenchFieldSize(workbenchFieldSize: number): void;
	/**
	 * @param slot slot index
	 * @returns Workbench slot instance by slot index.
	 */
	getFieldSlot(slot: number): UI.AbstractSlot;
	/**
	 * @since 2.2.1b108
	 */
	getFieldSlot(x: number, y: number): UI.AbstractSlot;
	/**
	 * @returns JS array of all slots.
	 */
	asScriptableField(): UI.AbstractSlot[];
	/**
	 * @since 2.2.1b106
	 */
	getWorkbenchFieldSize(): number;
}

declare class ItemContainerSlot implements UI.AbstractSlot {
	count: number;
	data: number;
	extra: Nullable<ItemExtraData>;
	id: number;
	constructor(id: number, count: number, data: number);
	constructor(id: number, count: number, data: number, extra: Nullable<ItemExtraData>);
	constructor(item: ItemInstance);
	constructor(json: org.json.JSONObject, convert: boolean);
	constructor();
	/**
	 * @returns Slot name.
	 */
	getName(): string;
	/**
	 * @returns Container linked to the slot.
	 */
	getContainer(): ItemContainer;
	/**
	 * @returns Following {@link ItemContainerSlot} as {@link ItemInstance} object.
	 */
	asScriptable(): ItemInstance;
	/**
	 * @returns Following {@link ItemContainerSlot} as {@link org.json.JSONObject} instance.
	 */
	asJson(): org.json.JSONObject;
	/**
	 * @returns Whether the slot is empty or not.
	 */
	isEmpty(): boolean;
	/**
	 * Refreshes slot in UI.
	 */
	markDirty(): void;
	/**
	 * Clears slot contents.
	 */
	clear(): void;
	/**
	 * Resets slot if it's ID or count equals `0`.
	 */
	validate(): void;
	/**
	 * Drops slot contents in given world at given coords.
	 */
	dropAt(region: BlockSource, x: number, y: number, z: number): void;
	/**
	 * Sets slot contents.
	 */
	setSlot(id: number, count: number, data: number): void;
	/**
	 * Sets slot contents.
	 */
	setSlot(id: number, count: number, data: number, extra: Nullable<ItemExtraData>): void;
	/**
	 * Sets slot contents.
	 */
	set(id: number, count: number, data: number, extra: Nullable<ItemExtraData>): void;
	/**
	 * @since 2.2.0b82
	 */
	resetSavingEnabled(): void;
	/**
	 * @since 2.2.0b82
	 */
	setSavingEnabled(enabled: boolean): void;
	/**
	 * @since 2.2.0b82
	 */
	isSavingEnabled(): boolean;
	/**
	 * @returns Numeric ID of the item in slot.
	 */
	getId(): number;
	/**
	 * @returns Count of the item in slot.
	 */
	getCount(): number;
	/**
	 * @returns Data of the item in slot.
	 */
	getData(): number;
	/**
	 * @returns Extra data object of the item in slot,
	 * or `null` if it is not present in the given item.
	 */
	getExtra(): Nullable<ItemExtraData>;
}
