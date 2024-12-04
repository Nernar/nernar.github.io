declare namespace UI {
	interface IContentProvider {
		content: WindowContent;
		drawing: object;
		drawingWatcher: IScriptableWatcher;
		elementMap: java.util.HashMap<string, IElement>;
		elements: object;
		window: Window;
		setContentObject(content: WindowContent): void;
		setupElements(): void;
		refreshElements(): void;
		setupDrawing(): void;
		refreshDrawing(): void;
		invalidateAllContent(): void;
	}

	interface IElementProvider {
		addOrRefreshElement(element: IElement): void;
		getStyleFor(element: IElement): Style;
		invalidateAll(): void;
		releaseAll(): void;
		removeElement(element: IElement): void;
		resetAll(): void;
		runCachePreparation(): void;
		setBackgroundProvider(bgprovider: IBackgroundProvider): void;
		setWindowStyle(style: Style): void;
	}

	interface IBackgroundProvider {
		addDrawing(idrawing: IDrawing): void;
		clearAll(): void;
		prepareCache(): void;
		releaseCache(): void;
		setBackgroundColor(color: number): void;
	}

    /**
	 * Represents window of required size that can be opened in container to 
	 * provide any required UI facilities.
	 */
	class Window implements IWindow {
		closeOnBackPressed: boolean;
		content: WindowContent;
		elementProvider: IElementProvider;
		elementView: android.widget.ImageView;
		isBackgroundDirty: boolean;
		isForegroundDirty: boolean;
		layout: android.view.ViewGroup;
		location: WindowLocation;
        /**
		 * Constructs new {@link UI.Window} object with specified bounds.
		 * @param location object containing window's bounds. Note that the 
		 * bounds change the width of the window, but the full width of the 
		 * window becomes 1000 units.
		 */
        constructor(location: WindowLocation);
        /**
		 * Constructs new {@link UI.Window} object with specified content.
		 * @param content window's content
		 */
        constructor(content: WindowContent);
        /**
         * Constructs new empty {@link UI.Window} object.
         */
        constructor();
		/**
		 * Opens window without container.
		 */
		open(): void;
		/**
		 * Adds another window as adjacent window, so that several windows open
		 * at the same time. This allows to divide window into separate parts
		 * and treat them separately.
		 * @param window another window to be added as adjacent
		 */
		addAdjacentWindow(window: Window): void;
		/**
		 * Removes adjacent window from the adjacent windows list.
		 * @param window another window that was added as adjacent
		 */
		removeAdjacentWindow(window: Window): void;
		preOpen(): void;
		postOpen(): void;
		/**
		 * Closes window without container. Use only if the window was opened
		 * without container.
		 */
		close(): void;
		/**
		 * Called up to 66 times a second to update window's content.
		 * @param time current time in milliseconds
		 */
		frame(time: number): void;
		/**
		 * Forces ui elements of the window to refresh.
		 * @param onCurrentThread if `true`, the drawables will be refreshed 
		 * immediately, otherwise refresh event will be posted; ensure you are
		 * in the UI thread if you pass `true` as the parameter
		 * @default onCurrentThread: false
		 */
		invalidateElements(onCurrentThread: boolean): void;
		/**
		 * Forces ui drawables of the window to refresh.
		 * @param onCurrentThread if `true`, the drawables will be refreshed 
		 * immediately, otherwise refresh event will be posted; ensure you are
		 * in the UI thread if you pass `true` as the parameter
		 * @default onCurrentThread: false
		 */
		invalidateDrawing(onCurrentThread: boolean): void;
		/**
		 * @returns `true` if the window is opened, `false` otherwise.
		 */
		isOpened(): boolean;
		postElementRefresh(): void;
		postBackgroundRefresh(): void;
		forceRefresh(): void;
		/**
		 * Specifies whether touch events should be handled by this window or
		 * passed to underlying windows (to the game). By default all windows
		 * are touchable.
		 * @param touchable pass `true` if the window should handle touch events, 
		 * `false` otherwise
		 */
		setTouchable(touchable: boolean): void;
		/**
		 * @returns `true` if the window is touchable, `false` otherwise.
		 */
		isTouchable(): boolean;
		/**
		 * @returns `true` if window blocks background.
		 */
		isBlockingBackground(): boolean;
		/**
		 * Specifies whether the window should darken and block background.
		 * @param blockingBackground pass `true` if you want the window to block 
		 * background
		 * @default false
		 */
		setBlockingBackground(blockingBackground: boolean): void;
		/**
		 * @returns `true` if the window is game overlay, `false` otherwise.
		 */
		isNotFocusable(): boolean;
		/**
		 * Allows window to be displayed as game overlay without blocking
		 * Minecraft sounds. Note that this drops window's FPS.
		 * @param inGameOverlay if `true`, the window is opened in PopupWindow 
		 * to avoid blocking Minecraft sounds
		 * @default false
		 */
		setAsGameOverlay(inGameOverlay: boolean): void;
		/**
		 * Set background color of window.
		 * @param color integer color value (you can specify it using hex value)
		 */
		setBackgroundColor(color: number): void;
		/**
		 * @returns `true` if the window has an inventory that should be updated.
		 */
		isInventoryNeeded(): boolean;
		/**
		 * @returns `true` if the window can change it's contents position.
		 */
		isDynamic(): boolean;
		/**
		 * Gets all the elements in the window.
		 * @returns Hashes containing string element names
		 * as keys and element instances as values.
		 */
		getElements(): java.util.HashMap<String, IElement>;
		/**
		 * @returns Window's content object (usually specified in the window's 
		 * constructor).
		 */
		getContent(): Nullable<WindowContent>;
		/**
		 * Specifies the content of the window.
		 * @param content content object to be applied to the window
		 */
		setContent(content: WindowContent): void;
		/**
		 * @param dynamic specify `true`, if the window contains dynamic 
		 * (animated) elements, `false` otherwise. By default all windows are 
		 * dynamic. Make them static for better performance
		 */
		setDynamic(dynamic: boolean): void;
		/**
		 * @param inventoryNeeded specify `true` if the window requires player's 
		 * inventory
		 * @default false
		 */
		setInventoryNeeded(inventoryNeeded: boolean): void;
		invalidateBackground(): void;
		invalidateForeground(): void;
		/**
		 * @returns Window's current location object.
		 */
		getLocation(): WindowLocation;
		getElementProvider<T extends IElementProvider = IElementProvider>(): T;
		getBackgroundProvider<T extends IBackgroundProvider = IBackgroundProvider>(): T;
		getContentProvider(): IContentProvider;
		/**
		 * @returns Unit size (in pixel) in the window's bounds.
		 */
		getScale(): number;
		/**
		 * @returns Object containing current style of the window.
		 */
		getStyle(): Style;
		/**
		 * Overrides style properties of the current style by the values
		 * specified in the style parameter.
		 * @param style js object where keys represent binding names and values
		 * represent texture gui names
		 */
		setStyle(style: BindingSet): void;
		/**
		 * Sets new style object as current window's style. If the new style is
		 * a different object then an old one, forces window invalidation.
		 * @param style {@link UI.Style} object to be used as style for the window
		 */
		setStyle(style: Style): void;
		invalidateAllContent(): void;
		/**
		 * Gets custom property by it's name. Custom properties can be used to
		 * store some values containing window's current state. Note that these
		 * properties are not saved between Inner Core launches.
		 * @param name custom property name
		 * @returns Value set by {@link UI.Window.putProperty}
		 * or null if no value was specified for this name.
		 */
		getProperty<T>(name: string): T;
		/**
		 * Sets custom property value.
		 * @param name custom property name
		 * @param value custom property value
		 */
		putProperty<T>(name: string, value: T): void;
		/**
		 * @returns Currently {@link UI.Container}
		 * that was used to open this window or null, if
		 * the window wasn't opened in container.
		 */
		getContainer(): Nullable<UiAbstractContainer>;
		/**
		 * Sets container for the current window. Be careful when calling it
		 * manually. You should prefer opening the window via it.
		 * {@link UI.Container.openAs} call @param container {@link UI.Container}
		 * to be associated with current window or `null` to associate
		 * no container with current window.
		 */
		setContainer(container: Nullable<UiAbstractContainer>): void;
		/**
		 * Turns debug mode for the window on and off.
		 * @param enabled if `true`, additional debug information will be drawn on
		 * the window canvas
		 */
		setDebugEnabled(enabled: boolean): void;
		/**
		 * Sets any window as current window's parent. If current window closes,
		 * parent window closes too.
		 * @param parent window to be used as parent window for the current 
		 * window.
		 */
		setParentWindow(parent: IWindow): void;
		/**
		 * @returns Current window's parent window.
		 */
		getParentWindow(): Nullable<IWindow>;
		/**
		 * Sets listener to be notified about window opening/closing events.
		 */
		setEventListener(listener: UI.WindowEventListener): void;
		/**
		 * Gets listener to be notified about window opening/closing events.
		 * @since 2.3.1b116
		 */
		getEventListener(): UI.WindowEventListener;

		runCachePreparation(async: boolean): void;
		/**
		 * Writes debug information about current window to the log.
		 */
		debug(): void;
		/**
		 * Gives the property to be closed on pressing back navigation button to the given window.
		 */
		setCloseOnBackPressed(val: boolean): void;
		/**
		 * @returns Whether the window can be closed on pressing back navigation button.
		 */
		onBackPressed(): boolean;
		/**
		 * @since 2.2.1b96
		 */
		updateScrollDimensions(): void;
		updateWindowLocation(): void;
		/**
		 * @since 2.2.1b96
		 */
		updateWindowPositionAndSize(): void;
	}
}
