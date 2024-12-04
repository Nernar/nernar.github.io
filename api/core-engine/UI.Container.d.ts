declare namespace UI {
	interface AbstractSlot {
		getId(): number; getCount(): number; getData(): number;
		getExtra(): Nullable<ItemExtraData>;
		set(id: number, count: number, data: number, extra: Nullable<ItemExtraData>): void;
		validate(): void;
	}

	class Slot implements AbstractSlot {
		id: number;
		count: number;
		data: number;
		extra: Nullable<ItemExtraData>;
		getClassName(): "slot";
		constructor(id: number, count: number, data: number);
		constructor(id: number, count: number, data: number, extra: Nullable<ItemExtraData>);
		constructor(parent: ItemInstance);
		constructor();
		set(id: number, count: number, data: number): void;
		set(id: number, count: number, data: number, extra: Nullable<ItemExtraData>): void;
		put(name: string, prop: any): void;
		getInt(name: string): number;
		validate(): void;
		/**
		 * @deprecated Client only, use {@link BlockSource.spawnDroppedItem} instead.
		 */
		drop(x: number, y: number, z: number): void;
		getTarget(): ItemInstance;
		getId(): number; getCount(): number; getData(): number;
		getExtraValue(): number;
		getExtra(): Nullable<ItemExtraData>;
		save(): Slot;
	}

	interface UiVisualSlotImpl {
		getId(): number;
		getCount(): number;
		getData(): number;
		getExtra(): Nullable<ItemExtraData>;
	}

	interface UiAbstractContainer {
		addElementInstance(element: IElement, name: string): void;
		close(): void;
		getBinding<T = any>(element: string, bindingName: string): Nullable<IElement | android.graphics.Rect | T>;
		getElement(elementName: string): Nullable<IElement>;
		getParent(): any;
		getSlotVisualImpl(slotName: string): UiVisualSlotImpl;
		handleBindingDirty(element: string, bindingName: string): void;
		handleInventoryToSlotTransaction(inventorySlot: number, slot: string, amount: number): void;
		handleSlotToInventoryTransaction(slot: string, amount: number): void;
		handleSlotToSlotTransaction(slot1: string, slot2: string, amount: number): void;
		onWindowClosed(): void;
		openAs(window: IWindow): void;
		setBinding<T>(element: string, bindingName: string, obj: T): void;
	}

	interface OnOpenCloseListener {
		/**
		 * @param container {@link UI.Container} the window was opened in
		 * @param window an instance of {@link UI.IWindow} that was opened
		 */
		(container: Container, window: IWindow): void;
	}

	type OnOpenCloseListenerJS = OnOpenCloseListener;

    /**
	 * Containers are used to properly manipulate windows and save slots 
	 * contents and windows state between window opens. Every {@link TileEntity} has 
	 * a built-in container that can be accessed as {@link TileEntity.container}.
	 * 
	 * @remarks
	 * This is a legacy container that does not synchronize between clients and server.
	 * It should be used to store data on one side either server or client.
	 */
	class Container implements UiAbstractContainer, Recipes.WorkbenchField {
		static readonly isContainer: boolean;
		/**
		 * If container is a part of {@link TileEntity}, this field stores reference
		 * to it, otherwise null. You can also assign any value of any type to
		 * it using {@link UI.Container.setParent} method or using constructor 
		 * parameter. Consider using {@link UI.Container.getParent} instead of direct
		 * field access.
		 */
		parent: Nullable<TileEntity> | any;
		slots: {
			[slotName: string]: Slot
		};
		/**
		 * Same as {@link UI.Container.parent}.
		 */
		tileEntity: Nullable<TileEntity> | any;
        /**
		 * Creates a new instance of {@link UI.Container}.
		 */
        constructor();
        /**
		 * Creates a new instance of {@link UI.Container} and initializes it's parent.
		 * 
		 * See {@link UI.Container.setParent} for details.
		 */
        constructor(parent: Nullable<TileEntity> | any);
		/**
		 * Sets container's parent object, for {@link TileEntity}'s container it
		 * should be a {@link TileEntity} reference, otherwise you can pass any
		 * value to be used in your code later.
		 * @param parent an object to be set as container's parent
		 */
		setParent(parent: Nullable<TileEntity> | any): void;
		/**
		 * Getter for {@link UI.Container.parent} field.
		 */
		getParent(): Nullable<TileEntity> | any;
		/**
		 * Gets the slot by it's name. If a slot with specified name doesn't
		 * exists, creates an empty one with specified name.
		 * @param name slot name
		 * @returns Contents of the slot in a {@link UI.Slot} object.
		 * You can modify it to change the contents of the slot.
		 */
		getSlot(name: string): Slot;
		/**
		 * Gets the slot by it's name. If a slot with specified name doesn't
		 * exists, creates an empty one with specified name.
		 * @param name slot name
		 * @returns Contents of the slot in a FullSlot object containing 
		 * more useful methods for slot manipulation.
		 */
		getFullSlot(name: string): Slot;
		getSlotVisualImpl(name: string): UiVisualSlotImpl;
		handleInventoryToSlotTransaction(invSlot: number, slotName: string, amount: number): void;
		handleSlotToSlotTransaction(from: string, to: string, amount: number): void;
		handleSlotToInventoryTransaction(slotName: string, amount: number): void;
		/**
		 * Set slot's content by it's name. If a slot with specified name doesn't
		 * exists, creates an empty one with specified name and item.
		 * @param name slot name
		 */
		setSlot(name: string, id: number, count: number, data: number): void;
		/**
		 * Set slot's content by it's name. If a slot with specified name doesn't
		 * exists, creates new with specified name and item.
		 * @param name slot name
		 * @param extra item extra value; note that it should be an instance of
		 * {@link ItemExtraData} and not it's numeric ID
		 */
		setSlot(name: string, id: number, count: number, data: number, extra: Nullable<ItemExtraData>): void;
		/**
		 * Validates slot contents. If the data value is less then `0`, it becomes
		 * `0`, if ID is `0` or count is less then or equals to zero, slot is reset
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
		 * Drops slot's contents on the specified coordinates
		 * and clears the slot.
		 * @param name slot name
		 * @deprecated Client only, use {@link BlockSource.spawnDroppedItem} instead.
		 */
		dropSlot(name: string, x: number, y: number, z: number): void;
		/**
		 * Drops the contents of all the slots in the container on the specified
		 * coordinates and clears them.
		 * @deprecated Client only, use {@link BlockSource.spawnDroppedItem} instead.
		 */
		dropAt(x: number, y: number, z: number): void;
		/**
		 * Validates all the slots in the container.
		 */
		validateAll(): void;
		/**
		 * @returns Currently opened {@link UI.IWindow}
		 * or `null` if no window is currently opened in the container.
		 */
		getWindow(): IWindow;
		_addElement(element: IElement, name: string): void;
		addElementInstance(element: IElement, name: string): void;
		_removeElement(name: string): void;
		/**
		 * Opens {@link UI.IWindow} object in the container.
		 * @param win {@link UI.IWindow} object to be opened
		 */
		openAs(win: IWindow): void;
		/**
		 * Closes currently opened window.
		 */
		close(): void;
		/**
		 * Sets an object to be notified when the window is opened.
		 * @param listener object to be notified when the window is opened
		 * @since 2.0.4b43
		 */
		setOnOpenListener(listener: OnOpenCloseListener): void;
		/**
		 * Sets an object to be notified when the window is closed.
		 * @param listener object to be notified when the window is closed
		 */
		setOnCloseListener(listener: OnOpenCloseListener): void;
		onWindowClosed(): void;
		/**
		 * @returns `true`, if some window is opened in the container.
		 */
		isOpened(): boolean;
		/**
		 * Same as {@link getWindow}.
		 */
		getGuiScreen(): IWindow;
		/**
		 * @returns Window's content object (usually specified in the window's
		 * constructor) if a window was opened in the container, `null` otherwise.
		 */
		getGuiContent(): Nullable<WindowContent>;
		/**
		 * @returns Window's element by it's name.
		 * @param name element name
		 */
		getElement(name: string): Nullable<IElement>;
		/**
		 * Passes any value to the element.
		 * @param elementName element name
		 * @param bindingName binding name, you can access the value from the 
		 * element by this name
		 * @param val value to be passed to the element
		 */
		setBinding(elementName: string, bindingName: string, val: any): void;
		/**
		 * Gets any value from the element.
		 * @param elementName element name
		 * @param bindingName binding name, you can access the value from the 
		 * element by this name. Some binding names are reserved for additional
		 * element information, e.g. "element_obj" contains pointer to the
		 * current object and "element_rect" contains android.graphics.Rect 
		 * object containing drawing rectangle 
		 * @returns Value that was get from the element or `null` if the
		 * element doesn't exist.
		 */
		getBinding<T = any>(elementName: string, bindingName: string): Nullable<IElement | android.graphics.Rect | T>;
		handleBindingDirty(): void;
		sendChanges(): void;
		/**
		 * Sets "value" binding value for the element. Used to set scales values.
		 * @param name element name
		 * @param value value to be set for the element
		 */
		setScale(name: string, value: number): void;
		/**
		 * @param name element name
		 * @returns Value "value" binding, e.g. scale value, or `null` if no 
		 * element with specified name exist.
		 */
		getValue(name: string): Nullable<number>;
		/**
		 * Sets "text" binding value for the element. Used to set element's text.
		 * @param name element name
		 * @param value value to be set for the element
		 */
		setText(name: string, value: string | number): void;
		/**
		 * 
		 * @param name element name
		 * @returns Value "text" binding, usually the text displayed on the 
		 * element, or `null` if no element with specified name exist.
		 */
		getText(name: string): Nullable<string>;
		/**
		 * @param name element name
		 * @returns `true` if the element is currently hovered.
		 */
		isElementTouched(name: string): boolean;
		/**
		 * Forces ui elements of the window to refresh.
		 * @param onCurrentThread if `true`, the drawables will be refreshed 
		 * immediately, otherwise refresh event will be posted; ensure you are
		 * in the UI thread if you pass `true` as the parameter
		 * @default onCurrentThread: false
		 */
		invalidateUIElements(onCurrentThread: boolean): void;
		/**
		 * Forces ui elements of the window to refresh.
		 */
		invalidateUIElements(): void;
		/**
		 * Forces ui drawables of the window to refresh.
		 * @param onCurrentThread if `true`, the drawables will be refreshed 
		 * immediately, otherwise refresh event will be posted; ensure you are
		 * in the UI thread if you pass `true` as the parameter
		 * @default onCurrentThread: false
		 */
		invalidateUIDrawing(onCurrentThread: boolean): void;
		invalidateUIDrawing(): void;
		/**
		 * Forces ui elements and drawables of the window to refresh.
		 * @param onCurrentThread if `true`, the drawables will be refreshed 
		 * immediately, otherwise refresh event will be posted; ensure you are
		 * in the UI thread if you pass `true` as the parameter
		 * @default onCurrentThread: false
		 */
		invalidateUI(onCurrentThread: boolean): void;
		/**
		 * Forces ui elements and drawables of the window to refresh.
		 */
		invalidateUI(): void;
		/**
		 * @deprecated Backwards compatibility.
		 */
		refreshSlots(): void;
		/**
		 * @deprecated Backwards compatibility.
		 */
		applyChanges(): void;
		/**
		 * @returns `false` if container supports multiplayer, `true` otherwise.
		 */
		isLegacyContainer(): boolean;

		/**
		 * If the container is a custom workbench, you can set the slot prefix
		 * via this method call. {@link UI.Container.getFieldSlot}
		 * will get field slot by `prefix + slot` name.
		 * @param wbsnp custom workbench slot prefix
		 */
		setWbSlotNamePrefix(wbsnp: string): void;
		/**
         * @param slot slot index
         * @returns Workbench slot instance by slot index.
		 */
		getFieldSlot(slot: number): Slot;
		/**
         * @since 2.2.1b108
		 */
		getFieldSlot(x: number, y: number): AbstractSlot;
		/**
         * @returns JS array of all slots.
		 */
		asScriptableField(): Slot[];
		/**
		 * @returns `9`
         * @since 2.2.1b106
		 */
		getWorkbenchFieldSize(): number;
	}
}
