declare module UI {

    type ElementName = string | number | symbol;

	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.window.WindowContent["interface"]}
	 */
	export type WindowContent = com.zhekasmirnov.innercore.api.mod.ui.window.WindowContent;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.window.StandardWindowContent["interface"]}
	 */
	export type StandardWindowContent = com.zhekasmirnov.innercore.api.mod.ui.window.StandardWindowContent;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.types.FontDescription["interface"]}
	 */
	export type FontDescription = com.zhekasmirnov.innercore.api.mod.ui.types.FontDescription;

	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.types.FontDescription["interface"]}
	 */
    export type FontParams = com.zhekasmirnov.innercore.api.mod.ui.types.FontDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.window.WindowLocationDescription["interface"]}
	 */
    export type WindowLocationParams = com.zhekasmirnov.innercore.api.mod.ui.window.WindowLocationDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.types.BindingSet["type"]}
	 */
	export type BindingsSet = com.zhekasmirnov.innercore.api.mod.ui.types.BindingSet;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.types.UIStyle["class"]}
	 */
	export type Style = com.zhekasmirnov.innercore.api.mod.ui.types.UIStyle;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.elements.UIClickEvent["interface"]}
	 */
	export type UIClickEvent = com.zhekasmirnov.innercore.api.mod.ui.elements.UIClickEvent;

	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.background.ColorDrawingDescription["interface"]}
	 */
    export type ColorDrawing = com.zhekasmirnov.innercore.api.mod.ui.background.ColorDrawingDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.background.CustomDrawingDescription["interface"]}
	 */
    export type CustomDrawing = com.zhekasmirnov.innercore.api.mod.ui.background.CustomDrawingDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.background.FrameDrawingDescription["interface"]}
	 */
    export type FrameDrawing = com.zhekasmirnov.innercore.api.mod.ui.background.FrameDrawingDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.background.ImageDrawingDescription["interface"]}
	 */
    export type ImageDrawing = com.zhekasmirnov.innercore.api.mod.ui.background.ImageDrawingDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.background.LineDrawingDescription["interface"]}
	 */
    export type LineDrawing = com.zhekasmirnov.innercore.api.mod.ui.background.LineDrawingDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.background.TextDrawingDescription["interface"]}
	 */
    export type TextDrawing = com.zhekasmirnov.innercore.api.mod.ui.background.TextDrawingDescription;

	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.elements.BasicElementDescription["interface"]}
	 */
    export type UIElement = com.zhekasmirnov.innercore.api.mod.ui.elements.BasicElementDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.elements.CustomElementDescription["interface"]}
	 */
    export type UICustomElement = com.zhekasmirnov.innercore.api.mod.ui.elements.CustomElementDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.elements.ButtonElementDescription["interface"]}
	 */
    export type UIButtonElement = com.zhekasmirnov.innercore.api.mod.ui.elements.ButtonElementDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.elements.ButtonElementDescription["interface"]}
	 */
    export type UICloseButtonElement = com.zhekasmirnov.innercore.api.mod.ui.elements.ButtonElementDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.elements.FrameElementDescription["interface"]}
	 */
    export type UIFrameElement = com.zhekasmirnov.innercore.api.mod.ui.elements.FrameElementDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.elements.ImageElementDescription["interface"]}
	 */
    export type UIImageElement = com.zhekasmirnov.innercore.api.mod.ui.elements.ImageElementDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.elements.ScaleElementDescription["interface"]}
	 */
    export type UIScaleElement = com.zhekasmirnov.innercore.api.mod.ui.elements.ScaleElementDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.elements.ScrollElementDescription["interface"]}
	 */
    export type UIScrollElement = com.zhekasmirnov.innercore.api.mod.ui.elements.ScrollElementDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.elements.SlotElementDescription["interface"]}
	 */
    export type UISlotElement = com.zhekasmirnov.innercore.api.mod.ui.elements.SlotElementDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.elements.SwitchElementDescription["interface"]}
	 */
    export type UISwitchElement = com.zhekasmirnov.innercore.api.mod.ui.elements.SwitchElementDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.elements.TabElementDescription["interface"]}
	 */
    export type UITabElement = com.zhekasmirnov.innercore.api.mod.ui.elements.TabElementDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.elements.TextElementDescription["interface"]}
	 */
    export type UITextElement = com.zhekasmirnov.innercore.api.mod.ui.elements.TextElementDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.elements.FPSTextElementDescription["interface"]}
	 */
    export type UIFPSTextElement = com.zhekasmirnov.innercore.api.mod.ui.elements.FPSTextElementDescription;
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.elements.InvSlotElementDescription["interface"]}
	 */
    export type UIInvSlotElement = com.zhekasmirnov.innercore.api.mod.ui.elements.InvSlotElementDescription;

	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.window.IWindow["class"]}
	 */
	export interface IWindow extends com.zhekasmirnov.innercore.api.mod.ui.window.IWindow {}
	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.container.Slot["Slot"]}
	 */
	export interface Slot extends com.zhekasmirnov.innercore.api.mod.ui.container.Slot {}

	/**
	 * {@inheritDoc UI.UIElement["type"]}
	 */
	export type Element = UIElement;

    /**
	 * Object containing ui elements with key as the name and value as the
	 * {@link UI.UIElement} instance to be used.
	 */
	export type Elements = (
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

	export type DrawingElements = (
		ColorDrawing
		| CustomDrawing
		| FrameDrawing
		| ImageDrawing
		| LineDrawing
		| TextDrawing
	);
	
    export interface ElementSet {
		[key: string]: Elements;
	}

	export type DrawingSet = DrawingElements[];

    /**
	 * Object used to handle windows opening and closing events.
	 */
	export interface WindowEventListener {
		/**
		 * Called when the window is opened.
		 * @param window current {@link UI.Window} object
		 */
		onOpen: (window: Window) => void,
		/**
		 * Called when the window is closed.
		 * @param window current {@link UI.Window} object
		 */
		onClose: (window: Window) => void
	}

    /**
	 * Class representing several windows opened at the same. For example,
	 * {@link UI.StandardWindow} is a window group that consists of several separate
	 * windows.
	 */
    export class WindowGroup extends com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowGroup {
        static class: java.lang.Class<WindowGroup>;
        /**
		 * Constructs new {@link UI.WindowGroup} instance.
		 */
        constructor();
    }

    /**
	 * Containers are used to properly manipulate windows and save slots 
	 * contents and windows state between window opens. Every {@link TileEntity["interface"]} has 
	 * a built-in container that can be accessed as {@link TileEntity["interface"].container}.
	 * @deprecated Client class only.
	 */
    export class Container extends com.zhekasmirnov.innercore.api.mod.ui.container.Container {
        static class: java.lang.Class<Container>;
        /**
		 * Creates a new instance of {@link UI.Container}.
		 */
        constructor();
        /**
		 * Creates a new instance of {@link UI.Container} and initializes it's parent.
		 * 
		 * See {@link com.zhekasmirnov.innercore.api.mod.ui.container.Container["class"].setParent|UI.Container.setParent} for details.
		 */
        constructor(parent: Nullable<TileEntity> | any);
    }

    /**
	 * Represents window of required size that can be opened in container to 
	 * provide any required UI facilities.
	 */
    export class Window extends com.zhekasmirnov.innercore.api.mod.ui.window.UIWindow {
        static class: java.lang.Class<Window>;
        /**
		 * Constructs new {@link UI.Window} object with specified bounds.
		 * @param location object containing window's bounds. Note that the 
		 * bounds change the width of the window, but the full width of the 
		 * window becomes 1000 units.
		 */
        constructor(location: com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowLocation);
        /**
		 * Constructs new {@link UI.Window} object with specified content.
		 * @param content window's content
		 */
        constructor(content: WindowContent);
        /**
         * Constructs new empty {@link UI.Window} object.
         */
        constructor();
    }

    /**
	 * Legacy misspelled standard UI, which is works under classic
	 * styling, but must be used only in unsupported mods.
	 * @deprecated In 2.0.4b40, use {@link UI.StandardWindow} instead.
	 */
    export class StandartWindow extends com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowStandard {
        static class: java.lang.Class<StandartWindow>;
        constructor(content: StandardWindowContent);
        constructor();
    }

    /**
	 * Class used to create standard UI for the mod's machines.
	 * {@link UI.StandardWindow} is a {@link UI.WindowGroup} that has three windows with names
	 * `"main"`, `"inventory"` and `"header"`. They represent custom window
	 * contents, player's inventory and window's header respectively.
	 * @since 2.0.4b40
	 */
    export class StandardWindow extends com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowStandard {
        static class: java.lang.Class<StandardWindow>;
        /**
		 * Constructs new {@link UI.StandardWindow} with specified content.
		 * Content is applied to the main window, header and inventory remain
		 * the same.
		 * @param content object containing window description
		 */
        constructor(content: StandardWindowContent);
        /**
         * Constructs new empty {@link UI.StandardWindow} object.
         */
        constructor();
    }

	/**
	 * {@inheritDoc com.zhekasmirnov.innercore.api.mod.ui.window.UIAdaptiveWindow["class"]}
	 */
    export class AdaptiveWindow extends com.zhekasmirnov.innercore.api.mod.ui.window.UIAdaptiveWindow {
        static class: java.lang.Class<AdaptiveWindow>;
        /**
	     * Constructs new {@link UI.AdaptiveWindow} with specified content.
	     * @param content object containing window description
	     */
        constructor(content: WindowContent);
        /**
	     * Constructs a new empty {@link UI.AdaptiveWindow}.
	     */
        constructor();
    }

    /**
	 * Class used to create windows with multiple tabs.
	 */
    export class TabbedWindow extends com.zhekasmirnov.innercore.api.mod.ui.window.UITabbedWindow {
        static class: java.lang.Class<TabbedWindow>;
        /**
		 * Constructs new {@link UI.TabbedWindow} with specified location.
		 * @param loc location to be used for the tabbed window
		 */
        constructor(loc: com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowLocation);
        /**
		 * Constructs new {@link UI.TabbedWindow} with specified content.
		 * @param content object containing window description
		 */
        constructor(content: WindowContent);
        /**
         * Constructs new empty {@link UI.TabbedWindow} object.
         */
        constructor();
    }

    /**
	 * Class representing window's location. All coordinates are defined in
	 * units (given screen's width is 1000 units).
	 */
    export class WindowLocation extends com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowLocation {
        static class: java.lang.Class<WindowLocation>;
        /**
		 * Constructs new {@link UI.WindowLocation} instance with default position and
		 * size (fullscreen window).
		 */
        constructor();
        /**
		 * Constructs new {@link UI.WindowLocation} instance with specified parameters.
		 */
        constructor(desc: com.zhekasmirnov.innercore.api.mod.ui.window.WindowLocationDescription);
    }

    /**
	 * Class representing static or animated texture.
	 */
    export class Texture extends com.zhekasmirnov.innercore.api.mod.ui.types.Texture {
		static class: java.lang.Class<Texture>;
	}

    /**
	 * Class representing font used in the UI.
	 */
    export class Font extends com.zhekasmirnov.innercore.api.mod.ui.types.Font {
        static class: java.lang.Class<Font>;
        constructor(color: number, size: number, shadow: number);
        constructor(desc: FontDescription);
    }

	/**
	 * Class used to visualize configuration file contents in a simple way.
	 */
    export class ConfigVisualizer extends com.zhekasmirnov.innercore.api.mod.util.ConfigVisualizer {
        static class: java.lang.Class<ConfigVisualizer>;
		/**
		 * Constructs new {@link UI.ConfigVisualizer} instance with specified elements 
		 * names prefix.
		 * @param config configuration file to be loaded
		 * @param prefix elements names prefix used for this visualizer
		 */
        constructor(config: com.zhekasmirnov.innercore.mod.build.Config, prefix: string);
		/**
		 * Constructs new {@link UI.ConfigVisualizer} instance with default elements 
		 * names prefix (*config_vis*).
		 * @param config configuration file to be loaded
		 */
        constructor(config: com.zhekasmirnov.innercore.mod.build.Config);
    }

    /**
	 * Namespace containing method to get {@link com.zhekasmirnov.innercore.api.mod.ui.types.FrameTexture|FrameTexture} instances.
	 */
    export class FrameTextureSource extends java.lang.Object {
        static class: java.lang.Class<FrameTextureSource>;
        /**
		 * @param name gui texture name of the frame
		 */
        static get(name: string): com.zhekasmirnov.innercore.api.mod.ui.types.FrameTexture;
    }

    /**
	 * Namespace containing methods used to get and add gui textures.
	 */
    export class TextureSource extends java.lang.Object {
        static class: java.lang.Class<TextureSource>;
        /**
		 * @param name gui texture name
		 * @returns Bitmap instance with the ui texture, if it
		 * was loaded, with `"missing_texture"` texture otherwise.
		 */
        static get(name: string): android.graphics.Bitmap;
        /**
		 * 
		 * @param name gui texture name
		 * @returns Bitmap instance with the ui texture, if it
		 * was loaded, `null` otherwise.
		 */
        static getNullable(name: string): Nullable<android.graphics.Bitmap>;
        /**
		 * Adds any bitmap as a gui texture with specified name.
		 * @param name gui texture name
		 * @param bitmap {@link android.graphics.Bitmap} instance to be used as
		 * gui texture
		 */
        static put(name: string, bitmap: android.graphics.Bitmap): void;
    }

    /**
	 * Same as {@link UI.getScreenHeight}.
	 */
    export function getScreenRelativeHeight(): number;

    /**
	 * @returns Screen height in units.
	 */
    export function getScreenHeight(): number;
    
    /**
	 * @returns Current {@link android.app.Activity} instance that can be used as 
	 * {@link android.content.Context} wherever required.
	 */
    export function getContext(): android.app.Activity;

}