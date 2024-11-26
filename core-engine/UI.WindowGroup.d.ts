declare namespace UI {
    /**
	 * Class representing several windows opened at the same. For example,
	 * {@link UI.StandardWindow} is a window group that consists of several separate
	 * windows.
	 */
	class WindowGroup implements IWindow {
		closeOnBackPressed: boolean;
        /**
		 * Constructs new {@link UI.WindowGroup} instance.
		 */
        constructor();
		/**
		 * Removes window from group by it's name.
		 * @param name window name
		 */
		removeWindow(name: string): void;
		/**
		 * Adds window instance with specified name to the group.
		 * @param name window name
		 * @param window window to be added to the group
		 */
		addWindowInstance(name: string, window: IWindow): void;
		/**
		 * Creates a new window using provided description and adds it to the
		 * group.
		 * @param name window name
		 * @param content window description object
		 * @returns Created {@link UI.Window} object.
		 */
		addWindow(name: string, content: WindowContent): Window;
		/**
		 * @param name window name
		 * @returns Window from the group by it's name or null if no window with
		 * such a name was added.
		 */
		getWindow(name: string): Window;
		/**
		 * @param name window name
		 * @returns Window's description object if a window with specified name
		 * exists or null otherwise.
		 */
		getWindowContent(name: string): Nullable<WindowContent>;
		/**
		 * Sets content for the window by it's name.
		 * @param name window name
		 * @param content content object
		 */
		setWindowContent(name: string, content: WindowContent): void;
		/**
		 * @returns Collection object containing all the
		 * {@link UI.Window}s in the group.
		 */
		getAllWindows(): java.util.Collection<Window>;
		/**
		 * @returns Collection object containing string names of the
		 * windows in the group.
		 */
		getWindowNames(): java.util.Collection<string>;
		/**
		 * Forces window refresh by it's name.
		 * @param name name of the window to refresh
		 */
		refreshWindow(name: string): void;
		/**
		 * Forces refresh for all windows.
		 */
		refreshAll(): void;
		/**
		 * Moves window with specified name to the top of the group.
		 * @param name window name
		 */
		moveOnTop(name: string): void;
		/**
		 * Opens window without container.
		 */
		open(): void;
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
		 * @returns `true` if the window is opened, `false` otherwise.
		 */
		isOpened(): boolean;
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
		 * @returns Hashes containing string element name
		 * as keys and element instances as values.
		 */
		getElements(): java.util.HashMap<string, IElement>;
		/**
		 * @returns `null` for {@link WindowGroup}.
		 * */
		getContent(): Nullable<WindowContent>;
		/**
		 * @returns Currently {@link UI.Container}
		 * that was used to open this window or null, if the window wasn't opened in container.
		 */
		getContainer(): Nullable<UiAbstractContainer>;
		/**
		 * Sets container for the current window. Be careful when calling it
		 * manually. You should prefer opening the window via {@link UI.Container.openAs} call.
		 * @param container {@link UI.Container} to be associated with current window
		 * or `null` to associate no container with current window.
		 */
		setContainer(container: Nullable<UiAbstractContainer>): void;
		/**
		 * Turns debug mode for the window on and off.
		 * @param enabled if `true`, additional debug information will be drawn on
		 * the window canvas
		 */
		setDebugEnabled(enabled: boolean): void;
		invalidateAllContent(): void;
		setStyle(style: Style): void;
		setStyle(style: BindingSet): void;
		/**
		 * @returns Object containing current style of the window.
		 */
		getStyle(): Style;
		setBlockingBackground(bb: boolean): void;
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
		 * Gives the property to be closed on pressing back navigation button to the given window group.
		 */
		setCloseOnBackPressed(val: boolean): void;
		/**
		 * @returns Whether the window group can be closed on pressing back navigation button.
		 */
		onBackPressed(): boolean;
	}
}
