declare namespace UI {
	interface TabbedWindowContent extends WindowContent {
		isButtonHidden?: boolean,
	}

    /**
	 * Class used to create windows with multiple tabs.
	 */
	class TabbedWindow implements IWindow {
		closeOnBackPressed: boolean;
		currentTab: number;
		/**
		 * Sets window location (bounds) to draw window within.
		 * @param location location to be used for the tabbed window
		 */
		setLocation(location: WindowLocation): void;
		/**
		 * @returns Tab content window width in units.
		 */
		getInnerWindowWidth(): number;
		/**
		 * @returns Tab content window height in units.
		 */
		getInnerWindowHeight(): number;
		/**
		 * @returns Tab selector window width in units.
		 */
		getWindowTabSize(): number;
		/**
		 * @returns Tab selector window width in global units.
		 */
		getGlobalTabSize(): number;
        /**
		 * Constructs new {@link UI.TabbedWindow} with specified location.
		 * @param loc location to be used for the tabbed window
		 */
        constructor(loc: WindowLocation);
        /**
		 * Constructs new {@link UI.TabbedWindow} with specified content.
		 * @param content object containing window description
		 */
        constructor(content: WindowContent);
        /**
         * Constructs new empty {@link UI.TabbedWindow} object.
         */
        constructor();
		/**
		 * Sets content of the tab.
		 * @param index index of the tab; there are 12 tabs available, from 0 to
		 * 11
		 * @param tabOverlay content of the tab selector
		 * @param tabContent content of the window to be created for the tab
		 * @param isAlwaysSelected if `true`, tab is always displayed as selected;
		 * default value is `false`
		 * @remarks
		 * The location of the tabs is as follows:
		 * ```text
		 * 0    6
		 * 1    7
		 * 2    8
		 * 3    9
		 * 4    10
		 * 5    11
		 * ```
		 */
		setTab(index: number, tabOverlay: UI.ElementSet, tabContent: WindowContent, isAlwaysSelected: boolean): void;
		/**
		 * Sets content of the tab.
		 * @param index index of the tab; there are 12 tabs available, from 0 to
		 * 11
		 * @param tabOverlay content of the tab selector
		 * @param tabContent content of the window to be created for the tab
		 * @remarks
		 * The location of the tabs is as follows:
		 * ```text
		 * 0    6
		 * 1    7
		 * 2    8
		 * 3    9
		 * 4    10
		 * 5    11
		 * ```
		 */
		setTab(index: number, tabOverlay: UI.ElementSet, tabContent: WindowContent): void;
		/**
		 * Creates fake tab with no content.
		 * @param index index of the tab, see {@link UI.TabbedWindow.setTab}
		 * for details
		 * @param tabOverlay content of the tab selector
		 */
		setFakeTab(index: number, tabOverlay: UI.ElementSet): void;
		/**
		 * @param index index of the tab
		 * @returns New {@link UI.Window} instance
		 * created for the specified tab or null if
		 * no window was created for specified window.
		 */
		getWindowForTab(index: number): Nullable<Window>;
		open(): void;
		close(): void;
		frame(time: number): void;
		invalidateElements(onCurrentThread: boolean): void;
		invalidateDrawing(onCurrentThread: boolean): void;
		isOpened(): boolean;
		isInventoryNeeded(): boolean;
		isDynamic(): boolean;
		getElements(): java.util.HashMap<string, IElement>;
		getContent(): Nullable<TabbedWindowContent>;
		getContainer(): Nullable<UiAbstractContainer>;
		setContainer(container: UiAbstractContainer): void;
		setDebugEnabled(debug: boolean): void;
		/**
		 * Sets listener to be notified about window opening/closing events.
		 */
		setEventListener(listener: WindowEventListener): void;
		/**
		 * Sets listener to be notified about tab with specified index opening/closing events.
		 * @param index tab index
		 * @param listener object to be notified about the events
		 */
		setTabEventListener(index: number, listener: WindowEventListener): void;
		onTabSelected(index: number): void;
		/**
		 * Specifies whether the window should darken and block background.
		 * @param enabled pass `true` if you want the window to block 
		 * background
		 * @default false
		 */
		setBlockingBackground(enabled: boolean): void;
		/**
		 * @returns Current default tab index. If no default tab was specified
		 * via {@link UI.TabbedWindow.setDefaultTab}, the first tab added becomes default.
		 */
		getDefaultTab(): number;
		/**
		 * Sets default tab index.
		 * @param tab index of the tab to be opened by default
		 */
		setDefaultTab(tab: number): void;
		/**
		 * Sets new style object as current window's style. If the new style is
		 * a different object then an old one, forces window invalidation.
		 * @param style {@link UI.Style} object to be used as style for the window
		 */
		setStyle(style: Style): void;
		/**
		 * Overrides style properties of the current style by the values
		 * specified in the style parameter.
		 * @param style js object where keys represent binding names and values
		 * represent texture gui names
		 */
		setStyle(style: BindingSet): void;
		getStyle(): Style;
		/**
		 * @deprecated Same as {@link getStyle}, meant to override
		 * fallback default style, but never properly used.
		 */
		getStyleSafe(): Style;
		setCloseOnBackPressed(cobp: boolean): void;
		onBackPressed(): boolean;
	}
}
