declare namespace UI {
	/**
	 * Specifies contents and additional parameters for all types of windows.
	 */
	interface WindowContent {
		/**
		 * Specifies window's location, used for
		 * {@link UI.Window}, {@link UI.TabbedWindow}
		 * and {@link UI.StandartWindow}.
		 */
		location?: WindowLocationDescription,
		/**
		 * Specifies window's style, an object containing keys as style binding
		 * names and values as gui texture names corresponding to the binding.
		 */
		style?: BindingSet,
		/**
		 * Specifies window's style, an object containing keys as style binding
		 * names and values as gui texture names corresponding to the binding.
		 * @deprecated Use {@link style} instead.
		 */
		params?: BindingSet,
		/**
		 * Array of drawings
		 */
		drawing?: UI.DrawingSet,
		/**
		 * Object containing keys as gui elements names and {@link UI.Elements}
		 * instances as values. Gui elements are interactive components that are
		 * used to create interfaces functionality.
		 */
		elements?: UI.ElementSet;
	}

	interface IWindow {
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
		 * @returns New {@link UI.Container}
		 * that was used to open this window or null, if
		 * the window wasn't opened in container.
		 */
		getContainer(): Nullable<UiAbstractContainer>;
		/**
		 * @returns Window's content object
		 * (usually specified in the window's constructor).
		 */
		getContent(): Nullable<WindowContent>;
		/**
		 * Gets all the elements in the window.
		 * @returns HashMap containing string element name as keys and
		 * element instances as values.
		 */
		getElements(): java.util.HashMap<string, IElement>;
		/**
		 * @returns Object containing current style of the window.
		 */
		getStyle(): Style;
		/**
		 * Forces ui drawables of the window to refresh.
		 * @param onCurrentThread if `true`, the drawables will be refreshed 
		 * immediately, otherwise refresh event will be posted; ensure you are
		 * in the UI thread if you pass `true` as the parameter
		 * @default onCurrentThread: false
		 */
		invalidateDrawing(onCurrentThread: boolean): void;
		/**
		 * Forces ui elements of the window to refresh.
		 * @param onCurrentThread if `true`, the drawables will be refreshed 
		 * immediately, otherwise refresh event will be posted; ensure you are
		 * in the UI thread if you pass `true` as the parameter
		 * @default onCurrentThread: false
		 */
		invalidateElements(onCurrentThread: boolean): void;
		/**
		 * @returns `true` if the window can change it's contents position.
		 */
		isDynamic(): boolean;
		/**
		 * @returns `true` if the window has an inventory that should be updated.
		 */
		isInventoryNeeded(): boolean;
		/**
		 * @returns `true` if the window is opened, `false` otherwise.
		 */
		isOpened(): boolean;
		/**
		 * @returns Whether the window can be closed on pressing back navigation button.
		 */
		onBackPressed(): boolean;
		/**
		 * Opens window without container.
		 */
		open(): void;
		/**
		 * Sets container for the current window. Be careful when calling it
		 * manually. You should prefer opening the window via
		 * {@link UI.Container.openAs} call.
		 * @param container {@link UI.Container}
		 * to be associated with current window or null to associate no container with current window
		 */
		setContainer(container: Nullable<UiAbstractContainer>): void;
		/**
		 * Turns debug mode for the window on and off.
		 * @param debug if `true`, additional debug information will be drawn on
		 * the window canvas
		 */
		setDebugEnabled(debug: boolean): void;
	}

	/**
	 * Object used to handle windows opening and closing events.
	 */
	interface WindowEventListener {
		/**
		 * Called when the window is opened.
		 * @param window current {@link UI.Window} object
		 */
		onOpen?: (window: Window) => void;
		/**
		 * Called when the window is closed.
		 * @param window current {@link UI.Window} object
		 */
		onClose?: (window: Window) => void;
	}

	interface IWindowLocation {
		/**
		 * X coordinate of the window in units.
		 * @default 0
		 */
		x?: number;
		/**
		 * Y coordinate of the window in units.
		 * @default 0
		 */
		y?: number;
		/**
		 * Width of the window in units, by default calculated to match right
		 * screen bound.
		 */
		width?: number;
		/**
		 * Height of the window in units, by default calculated to match bottom
		 * screen bound.
		 */
		height?: number;
		/**
		 * Defines scrollable window size along the X axis.
		 */
		scrollX?: number;
		/**
		 * Defines scrollable window size along the Y axis.
		 */
		scrollY?: number;
	}

	/**
	 * Object representing window location used in window content object and
	 * {@link UI.WindowLocation} constructor.
	 */
	interface WindowLocationDescription extends IWindowLocation {
		forceScrollX?: boolean,
		forceScrollY?: boolean,
		/**
		 * Determines whether the interface needs to be resized based
		 * on its size or a global unit system should be used.
		 * @since 2.3.1b115
		 */
		globalScale?: boolean,
		/**
		 * Paddings are distances from the window bounds to the elements in the
		 * window.
		 */
		padding?: {
			top?: number,
			bottom?: number,
			left?: number,
			right?: number;
		};
	}

	/**
	 * {@inheritDoc UI.WindowLocationDescription}
	 */
    type WindowLocationParams = WindowLocationDescription;

	/**
	 * Class representing window's location. All coordinates are defined in
	 * units (given screen's width is 1000 units).
	 */
	class WindowLocation {
		/**
		 * Constructs new {@link UI.WindowLocation} instance with default position and
		 * size (fullscreen window).
		 */
		constructor();
		/**
		 * Constructs new {@link UI.WindowLocation} instance with specified parameters.
		 */
		constructor(desc: WindowLocationDescription);
		/**
		 * Constant used to represent bottom padding.
		 */
		static readonly PADDING_BOTTOM: number;
		/**
		 * Constant used to represent left padding.
		 */
		static readonly PADDING_LEFT: number;
		/**
		 * Constant used to represent right padding.
		 */
		static readonly PADDING_RIGHT: number;
		/**
		 * Constant used to represent top padding.
		 */
		static readonly PADDING_TOP: number;
		forceScrollX: boolean;
		forceScrollY: boolean;
		/**
		 * Determines whether the interface needs to be resized based
		 * on its size or a global unit system should be used.
		 * @since 2.3.1b115
		 */
		globalScale: boolean;
		/**
		 * Window height.
		 */
		height: number;
		/**
		 * Window scale.
		 */
		scale: number;
		/**
		 * Horizontal window scroll.
		 */
		scrollX: number;
		/**
		 * Vertical window scroll.
		 */
		scrollY: number;
		/**
		 * Window width.
		 */
		width: number;
		/**
		 * Window horizontal position.
		 */
		x: number;
		/**
		 * Window vertical position.
		 */
		y: number;
		/**
		 * Window position on layers.
		 */
		zIndex: number;
		/**
		 * Constructs new {@link UI.WindowLocation} instance with default position and
		 * size (fullscreen window).
		 */
		constructor();
		/**
		 * Constructs new {@link UI.WindowLocation} instance with specified parameters.
		 * @param params 
		 */
		constructor(params: WindowLocationDescription);
		/**
		 * Sets scrollable window size. Should be greater then window 
		 * width/height for the changes to take effect.
		 * @param x scrollable window size along the X axis
		 * @param y scrollable window size along the Y axis
		 */
		setScroll(x: number, y: number): void;
		/**
		 * Sets the size of the window.
		 * @param x window's width
		 * @param y window's height
		 */
		setSize(x: number, y: number): void;
		/**
		 * @returns Window location as a js object. Note that paddings are not
		 * included into the object.
		 */
		asScriptable(): IWindowLocation;
		/**
		 * Creates a copy of current {@link UI.WindowLocation} object.
		 * @returns Newly created copy of the object.
		 */
		copy(): WindowLocation;
		/**
		 * Sets window location parameters.
		 * @param x X coordinate of the window
		 * @param y Y coordinate of the window
		 * @param width width of the window
		 * @param height height of the window
		 */
		set(x: number, y: number, width: number, height: number): void;
		/**
		 * Sets window location parameters from another {@link UI.WindowLocation}.
		 * Note that paddings are not copied instance.
		 * @param location another {@link UI.WindowLocation} instance to copy 
		 * parameters from
		 */
		set(location: WindowLocation): void;
		/**
		 * Sets window's scroll size to the windows size to remove scroll.
		 */
		removeScroll(): void;
		/**
		 * Sets padding of the window.
		 * @param padding one of the {@link UI.WindowLocation.PADDING_TOP}, 
		 * {@link UI.WindowLocation.PADDING_BOTTOM}, {@link UI.WindowLocation.PADDING_LEFT},
		 * {@link UI.WindowLocation.PADDING_RIGHT} constants
		 * @param value value of the padding to be assigned to appropriate 
		 * window bound
		 */
		setPadding(padding: 0 | 1 | 2 | 3, value: number): void;
		/**
		 * Sets the four paddings of the window for the appropriate bounds.
		 */
		setPadding(top: number, bottom: number, left: number, right: number): void;
		/**
		 * @returns Unit size (in pixels) in the fullscreen context (`<screen width> / 1000`).
		 */
		getScale(): number;
		/**
		 * @returns Unit size (in pixels) in the window's bounds.
		 */
		getDrawingScale(): number;
		/**
		 * @returns Window's rectangle in the {@link android.graphics.Rect} object.
		 */
		getRect(): android.graphics.Rect;
		showPopupWindow(win: android.widget.PopupWindow): void;
		updatePopupWindow(win: android.widget.PopupWindow): void;
		getLayoutParams(a1: number, a2: number, a3: number): android.view.WindowManager.LayoutParams;
		setupAndShowPopupWindow(win: android.widget.PopupWindow): void;
		/**
		 * Sets window's Z index. Z index determines how the window will be
		 * displayed when several windows are open.
		 * @param z window Z index
		 */
		setZ(z: number): void;
		/**
		 * @returns Window's width in units
		 * (always 1000 by definition of the unit).
		 */
		getWindowWidth(): 1000;
		/**
		 * @returns Window's height in units.
		 */
		getWindowHeight(): number;
		/**
		 * Transforms dimension in fullscreen units to the dimension within
		 * window's bounds.
		 * @param val value to be transformed
		 */
		globalToWindow(val: number): number;
		/**
		 * Transforms dimension within window's bounds to the dimension in
		 * fullscreen units.
		 * @param val value to be transformed
		 */
		windowToGlobal(val: number): number;
	}

	/**
	 * Object representing window style. Window styles allows to customize the
	 * way your windows look like.
	 */
	class Style {
		/**
		 * Classic (0.16.*-like) windows style, which also used before
		 * legacy version.
		 */
		static readonly CLASSIC: Style;
		/**
		 * Default windows style.
		 */
		static readonly DEFAULT: Style;
		static readonly LEGACY: Style;
		/**
		 * Adds gui texture name to use for the specified window part.
		 * @param key binding name
		 * @param name gui texture name
		 */
		addBinding(key: string, name: string): void;
		/**
		 * Gets texture binding bt it's name. Searches first in the additional
		 * styles, then in the current style, then in all it's parents.
		 * @param key binding name
		 * @param fallback value to return on binding failure
		 * @returns Ui texture name if current object, additional styles or one 
		 * of the parents contains such a binding name, fallback otherwise.
		 */
		getBinding(key: string, fallback: string): string;
		/**
		 * Adds an additional style object to the current style.
		 * @param style additional style object to be added
		 */
		addStyle(style: Style): void;
		/**
		 * Constructs new {@link UI.Style} object
		 * with bindings from {@link UI.Style.DEFAULT}.
		 */
		constructor();
		/**
		 * Constructs new {@link UI.Style} object
		 * from given {@link UI.BindingSet} object.
		 */
		constructor(bindings: BindingSet);
		/**
		 * @returns A copy of the current style. Only style bindings of the
		 * current style are copied, no parent/additional styles are copied.
		 */
		copy(): Style;
		/**
		 * Specifies parent style object for the current style.
		 * @param style style to be set as parent
		 */
		inherit(style: Style): void;
		/**
		 * Adds all values from given {@link UI.BindingSet} object.
		 */
		addAllBindings(bindings: BindingSet): void;
		/**
		 * @returns Collection containing all binding names
		 * from the current style object.
		 */
		getAllBindingNames(): java.util.Collection<string>;
		/**
		 * If name is a style value (starts with `"style:"`), returns
		 * corresponding gui texture name, else returns input string.
		 * @param name style value or bitmap name
		 */
		getBitmapName(name: string): string;
		getIntProperty(name: string, fallback: number): number;
		getFloatProperty(name: string, fallback: number): number;
		getDoubleProperty(name: string, fallback: number): number;
		getStringProperty(name: string, fallback: string): string;
		getBooleanProperty(name: string, fallback: boolean): boolean;
		setProperty(name: string, value: any): void;
		static getBitmapByDescription(style: Style, description: string): IBitmapWrap;
	}
}
