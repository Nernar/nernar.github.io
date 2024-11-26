declare namespace UI {
	/**
	 * Types that can be used to create element texture.
	 * For static textures it can be string path to texture in assets directory, or {@link android.graphics.Bitmap} instance.
	 * For animated textures it can be array of string paths to texture in assets directory, or an array of {@link android.graphics.Bitmap} instances.
	 * Each element in the array represents one of animation frames.
	 */
	type BitmapTypes = string | string[] | android.graphics.Bitmap | android.graphics.Bitmap[];

    type TouchEventType = "DOWN" | "UP" | "MOVE" | "CLICK" | "LONG_CLICK" | "CANCEL";

	interface ITouchEvent {
		_x: number;
		_y: number;
		downX: number;
		downY: number;
		localX: number;
		localY: number;
		type: TouchEventType;
		x: number;
		y: number;
		hasMovedSinceLastDown(): boolean;
		update(event: android.view.MotionEvent): void;
		preparePosition(win: Window, rect: android.graphics.Rect): void;
		posAsScriptable(): { x: number, y: number };
		localPosAsScriptable(): { x: number, y: number };
	}

	interface IElementCleaner {
		element: IElement;
		rect: android.graphics.Rect;
		clone(): IElementCleaner;
		set(rect: android.graphics.Rect): void;
		clean(canvas: android.graphics.Canvas, scale: number): void;
		debug(canvas: android.graphics.Canvas, scale: number): void;
	}

	interface IScriptableWatcher {
		object: object;
		isDirty(): boolean;
		validate(): void;
		invalidate(): void;
		setTarget(obj: object): void;
		refresh(): void;
	}

	/**
	 * Object where you can specify how the UI element will behave on touch events.
	 */
	interface UIClickEvent {
		/**
		 * This function will be called when element is short touched.
		 */
		onClick?: (position: Vector, container: UiAbstractContainer | ItemContainer, tileEntity: Nullable<TileEntity> | any, window: IWindow, canvas: android.graphics.Canvas, scale: number) => void;
		/**
		 * This function will be called when element is long touched.
		 */
		onLongClick?: (position: Vector, container: UiAbstractContainer | ItemContainer, tileEntity: Nullable<TileEntity> | any, window: IWindow, canvas: android.graphics.Canvas, scale: number) => void;
	}

	/**
	 * There are 12 types of UI elements given by Inner Core, and you can also create your custom ones.
	 * Each element type has it's own specific description object.
	 * These description objects are all inherited from this BasicElementDescription.
	 * It means that each element must have coords on the GUI by X, Y, and additionally Z axis,
	 * and also you can specify how the element will behave when touched, in clicker object (optional).
	 */
	interface UIElement extends Scriptable {
		x?: number,
		y?: number,
		z?: number,
		clicker?: UIClickEvent;
	}

	/**
	 * {@inheritDoc UI.UIElement}
	 */
	type Element = UIElement;

	/**
	 * This is the base Java abstract class, which are all Inner Core element types inherited from.
	 * In Java, to create custom element types, you can inherit your element class from this one as well.
	 * Whereas in JavaScript, you should use "custom" element type in description object,
	 * where you can specify custom behavior for different events.
	 * For more information about custom element types in JavaScript,
	 * see {@link UI.UICustomElement}.
	 */
	interface IElement {
		cleaner: IElementCleaner;
		description: object;
		descriptionWatcher: IScriptableWatcher;
		elementName: string;
		elementRect: android.graphics.Rect;
		isDirty: boolean;
		isTouched: boolean;
		window: Window;                                
		x: number;
		y: number;
		z: number;
		onBindingUpdated<T>(str: string, obj: T): void;
		onDraw(canvas: android.graphics.Canvas, scale: number): void;
		onSetup<T extends UIElement>(descr?: T): void;
		/**
		 * Creates a new {@link UI.Texture} instance
		 * with specified style applied.
		 * See {@link UI.Texture.constructor} for parameters description.
		 */
		createTexture(obj: BitmapTypes): Texture;
		/**
		 * Sets element's position in the window's unit coordinates.
		 * @param x x position
		 * @param y y position
		 */
		setPosition(x: number, y: number): void;
		/**
		 * Sets element's size in the window's unit coordinates.
		 * @param width element's width
		 * @param height element's height
		 */
		setSize(width: number, height: number): void;
		getCleanerCopy(): IElementCleaner;
		/**
		 * Passes any value to the element.
		 * @param bindingName binding name, you can access the value from the
		 * element by this name
		 * @param value value to be passed to the element
		 */
		setBinding<T = any>(bindingName: string, value: T): void;
		/**
		 * Gets any value from the element.
		 * @param name binding name, you can access the value from the 
		 * element by this name; some binding names are reserved for additional
		 * element information, e.g. `"element_obj"` contains pointer to the
		 * current object and `"element_rect"` contains {@link android.graphics.Rect} 
		 * object containing drawing rectangle
		 * @returns Value that was get from the element or `null` if the element 
		 * doesn't exist.
		 */
		getBinding<T = any>(name: string): Nullable<IElement | android.graphics.Rect | T>;
		setupInitialBindings(container: UiAbstractContainer, elementName: string): void;
		onTouchEvent(event: ITouchEvent): void;
		onTouchReleased(event: ITouchEvent): void;
		isReleased(): boolean;
		onRelease(): void;
		onReset(): void;
		invalidate(): void;
		debug(canvas: android.graphics.Canvas, scale: number): void;
	}

	interface UICustomElement extends UIElement {
		type: "custom",
		custom?: {
			onSetup?: (element: ICustomElement) => void,
			onDraw?: (element: ICustomElement, cvs: android.graphics.Canvas, scale: number) => void,
			onTouchReleased?: (element: ICustomElement) => void,
			onBindingUpdated?: <T>(element: ICustomElement, name: string, val: T) => void,
			onReset?: (element: ICustomElement) => void,
			onRelease?: (element: ICustomElement) => void,
			onContainerInit?: (element: ICustomElement, container: UiAbstractContainer, elementName: string) => void;
		};
	}

	interface ICustomElement extends IElement {
		getScope(): object;
		onSetup<T = UICustomElement>(desc: T): void;
		onDraw(canvas: android.graphics.Canvas, scale: number): void;
		onTouchReleased(event: ITouchEvent): void;
		onBindingUpdated<T>(name: string, val: T): void;
		onReset(): void;
		onRelease(): void;
		setupInitialBindings(container: UiAbstractContainer, elementName: string): void;
	}

	interface UIButtonElement extends UIElement {
		type: "button" | "closeButton" | "close_button",
		scale?: number,
		bitmap?: BitmapTypes,
		bitmap2?: BitmapTypes;
	}

	interface IButtonElement extends IElement {
		onSetup<T = UIButtonElement>(desc: T): void;
		onDraw(canvas: android.graphics.Canvas, scale: number): void;
		onBindingUpdated<T>(name: string, value: T): void;
	}

    type UICloseButtonElement = UIButtonElement;

	interface ICloseButtonElement extends IButtonElement {
		onTouchEvent(event: ITouchEvent): void;
	}

	interface FrameTextureSides {
		up?: boolean,
		down?: boolean,
		left?: boolean,
		right?: boolean;
	}

	interface UIFrameElement extends UIElement {
		type: "frame",
		bitmap?: BitmapTypes,
		width?: number,
		height?: number,
		scale?: number,
		color?: number,
		sides?: FrameTextureSides;
	}

	interface IFrameElement extends IElement {
		onSetup<T = UIFrameElement>(desc: T): void;
		onDraw(canvas: android.graphics.Canvas, scale: number): void;
		onBindingUpdated<T>(name: string, val: T): void;
		onRelease(): void;
	}

	interface UIImageElement extends UIElement {
		type: "image",
		width?: number, height?: number,
		scale?: number,
		bitmap?: BitmapTypes,
		overlay?: BitmapTypes;
	}

	interface IImageElement extends IElement {
		height: number;
		overlay: Texture;
		texture: Texture;
		textureScale: number;
		width: number;
		onSetup<T = UIImageElement>(desc: T): void;
		isAnimated(): boolean;
		onDraw(canvas: android.graphics.Canvas, scale: number): void;
		onBindingUpdated<T>(name: string, val: T): void;
		onRelease(): void;
	}

	interface UIScaleElement extends UIElement {
		type: "scale",
		scale?: number,
		direction?: number,
		invert?: boolean,
		pixelate?: boolean,
		bitmap?: string,
		width?: number,
		height?: number,
		background?: string,
		backgroundOffset?: {
			x?: number,
			y?: number;
		},
		overlay?: string,
		overlayOffset?: {
			x?: number,
			y?: number;
		},
		value?: number;
	}

	interface IScaleElement extends IElement {
		/* static */ readonly DIRECTION_DOWN: number;
		/* static */ readonly DIRECTION_LEFT: number;
		/* static */ readonly DIRECTION_RIGHT: number;
		/* static */ readonly DIRECTION_UP: number;
		onSetup<T = UIScaleElement>(desc: T): void;
		onDraw(canvas: android.graphics.Canvas, scale: number): void;
		onBindingUpdated<T>(name: string, val: T): void;
		onRelease(): void;
	}

	interface UIScrollElement extends UIElement {
		type: "scroll",
		isInt?: boolean,
		width?: number,
		length?: number,
		min?: number,
		max?: number,
		divider?: number,
		bindingObject?: any,
		bindingProperty?: string,
		configValue?: Config.ConfigValue,
		bitmapHandle?: BitmapTypes,
		bitmapHandleHover?: BitmapTypes,
		bitmapBg?: string,
		bitmapBgHover?: string,
		ratio?: number,
		onNewValue?: (result: number, container: UiAbstractContainer, element: UIScrollElement) => void;
	}

	interface IScrollElement extends IElement {
		onSetup<T = UIScrollElement>(desc: T): void;
		onDraw(canvas: android.graphics.Canvas, scale: number): void;
		onBindingUpdated<T>(name: string, val: T): void;
		onRelease(): void;
		onTouchEvent(event: ITouchEvent): void;
	}

	interface UISlotElement extends UIElement {
		type: "slot",
		bitmap?: string,
		size?: number,
		maxStackSize?: number,
		visual?: boolean,
		darken?: boolean,
		isDarkenAtZero?: boolean,
		/**
		 * @since 2.0.4b42
		 */
		text?: string,
		source?: ItemInstance,
		/**
		 * @deprecated In 2.0.4b43, not needed anymore.
		 */
		isTransparentBackground?: boolean,
		/**
		 * @deprecated In 2.0.4b43, not needed anymore.
		 */
		needClean?: boolean,
		/**
		 * @default 0.82
		 * @since 2.2.1b96
		 */
		iconScale?: number,
		/**
		 * @default false
		 * @since 2.2.1b96
		 */
		disablePixelPerfect?: boolean,
		onItemChanged?: (container: UiAbstractContainer, oldId: number, oldCount: number, oldData: number) => void,
		isValid?: (id: number, count: number, data: number, container: Container, item: ItemInstance) => boolean;
	}

	interface ISlotElement extends IElement {
		background: Texture;
		curCount: number;
		curData: number;
		curExtra: Nullable<ItemExtraData>;
		curId: number;
		isDarken: boolean;
		isDarkenAtZero: boolean;
		isVisual: boolean;
		maxStackSize: number;
		size: number;
		slotName: string;
		source: UiVisualSlotImpl;
		textOverride: Nullable<string>;
		onSetup<T = UISlotElement>(desc: T): void;
		onDraw(canvas: android.graphics.Canvas, scale: number): void;
		onBindingUpdated<T>(name: string, val: T): void;
		setupInitialBindings(container: UiAbstractContainer, elementName: string): void;
		onRelease(): void;
		onReset(): void;
		getMaxStackSize(): number;
		isValidItem(id: number, count: number, data: number, extra: Nullable<ItemExtraData>): boolean;
		getMaxItemTransferAmount(slot: ISlotElement): number;
		onTouchEvent(event: ITouchEvent): void;
	}

	interface UIInvSlotElement extends Omit<UISlotElement, "type"> {
		type: "invSlot" | "invslot",
		index?: number;
	}

	interface IInvSlotElement extends ISlotElement {
		onSetup<T = UIInvSlotElement>(desc: T): void;
		onTouchEvent(event: ITouchEvent): void;
		onBindingUpdated<T>(name: string, val: T): void;
		setupInitialBindings(container: UiAbstractContainer, elementName: string): void;
	}

	interface UISwitchElement extends UIElement {
		type: "switch",
		bindingObject?: any,
		bindingProperty?: string,
		configValue?: Config.ConfigValue,
		bitmapOn?: BitmapTypes,
		bitmapOnHover?: BitmapTypes,
		bitmapOff?: BitmapTypes,
		bitmapOffHover?: BitmapTypes,
		scale?: number,
		onNewState?: (val: boolean, container: UiAbstractContainer, element: UISwitchElement) => void;
	}

	interface ISwitchElement extends IElement {
		onSetup<T = UISwitchElement>(desc: T): void;
		onDraw(canvas: android.graphics.Canvas, scale: number): void;
		onBindingUpdated<T=boolean>(name: string, val: T): void;
		onTouchEvent(event: ITouchEvent): void;
		onRelease(): void;
	}

	interface UITabElement extends UIElement {
		type: "tab",
		selectedColor?: number,
		deselectedColor?: number,
		tabIndex?: number,
		isAlwaysSelected?: boolean,
		isSelected?: boolean;
	}

	interface ITabElement extends IFrameElement {
		onSetup<T = UITabElement>(desc: T): void;
		onTouchEvent(event: ITouchEvent): void;
		onReset(): void;
	}

	interface UITextElement extends UIElement {
		type: "text",
		font?: FontDescription,
		multiline?: boolean,
		format?: boolean,
		formatMaxCharsPerLine?: number,
		text?: string;
	}

	interface ITextElement extends IElement {
		onSetup<T = UITextElement>(desc: T): void;
		onDraw(canvas: android.graphics.Canvas, scale: number): void;
		onBindingUpdated<T>(name: string, val: T): void;
	}

	interface UIFPSTextElement extends Omit<UITextElement, "type"> {
		type: "fps",
		interpolate?: boolean,
		period?: number;
	}

	interface IFPSTextElement extends ITextElement {
		onSetup<T = UIFPSTextElement>(desc: T): void;
		onDraw(canvas: android.graphics.Canvas, scale: number): void;
	}

    /**
	 * Object containing ui elements with key as the name and value as the
	 * {@link UI.UIElement} instance to be used.
	 */
	type Elements = (
		UICustomElement
		| UIButtonElement
		| UICloseButtonElement
		| UIFrameElement
		| UIImageElement
		| UIScaleElement
		| UIScrollElement
		| UISlotElement
		| UISwitchElement
		| UITabElement
		| UITextElement
		| UIFPSTextElement
		| UIInvSlotElement
	);
	interface ElementSet {
		[key: string]: Elements;
	}

	/**
	 * Class used to visualize configuration file contents in a simple way.
	 */
    class ConfigVisualizer {
		/**
		 * Constructs new {@link UI.ConfigVisualizer} instance with specified elements 
		 * names prefix.
		 * @param config configuration file to be loaded
		 * @param prefix elements names prefix used for this visualizer
		 */
        constructor(config: Config, prefix: string);
		/**
		 * Constructs new {@link UI.ConfigVisualizer} instance with default elements 
		 * names prefix (*config_vis*).
		 * @param config configuration file to be loaded
		 */
        constructor(config: Config);
		/**
		 * Removes all elements with current element name prefix. In other
		 * words, removes all elements that were created by this.
		 * {@link UI.ConfigVisualizer} instance
		 * @param elements target {@link UI.WindowContent.elements} section
		 */
		clearVisualContent(elements: UI.ElementSet): void;
		/**
		 * Creates elements in the window to visualize configuration file.
		 * @param elements target {@link UI.WindowContent.elements} section
		 * @param prefs top left position of the first element. Default position 
		 * is (0, 0, 0)
		 */
		createVisualContent(elements: UI.ElementSet, prefs?: Partial<Vector>): void;
    }
}
