declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module window {
                            export class IWindow extends java.lang.Object {
                                static class: java.lang.Class<IWindow>;
                                constructor();
                                /**
                                 * Constructs new object inherited from {@link UI.IWindow}.
                                 * You need to implement all the interface methods in the object param.
                                 */
                                constructor(impl: {
                                    close(): void;
                                    frame(frm: number): void;
                                    getContainer(): container.UiAbstractContainer;
                                    getContent(): WindowContent;
                                    getElements(): java.util.HashMap<string, elements.UIElement>;
                                    getStyle(): types.UIStyle;
                                    invalidateDrawing(onCurrentThread: boolean): void;
                                    invalidateElements(onCurrentThread: boolean): void;
                                    isDynamic(): boolean;
                                    isInventoryNeeded(): boolean;
                                    isOpened(): boolean;
                                    onBackPressed(): boolean;
                                    open(): void;
                                    setContainer(container: container.UiAbstractContainer): void;
                                    setDebugEnabled(debug: boolean): void;
                                });
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
                                getContainer(): Nullable<container.UiAbstractContainer>;
                                /**
                                 * @returns Window's content object
                                 * (usually specified in the window's constructor).
                                 */
                                getContent(): WindowContent;
                                /**
                                 * Gets all the elements in the window.
                                 * @returns HashMap containing string element name as keys and
                                 * element instances as values.
                                 */
                                getElements(): java.util.HashMap<string, elements.UIElement>;
                                /**
                                 * @returns Object containing current style of the window.
                                 */
                                getStyle(): types.UIStyle;
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
                                 * {@link com.zhekasmirnov.innercore.api.mod.ui.container.Container.openAs Container.openAs} call.
                                 * @param container {@link UI.Container}
                                 * to be associated with current window or null to associate no container with current window
                                 */
                                setContainer(container: Nullable<container.UiAbstractContainer>): void;
                                /**
                                 * Turns debug mode for the window on and off.
                                 * @param debug if `true`, additional debug information will be drawn on
                                 * the window canvas
                                 */
                                setDebugEnabled(debug: boolean): void;
                            }
                        }
                    }
                }
            }
        }
    }
}