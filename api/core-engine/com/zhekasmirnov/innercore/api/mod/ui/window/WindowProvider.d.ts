declare module com {
    namespace zhekasmirnov {
        namespace innercore {
            namespace api {
                namespace mod {
                    namespace ui {
                        namespace window {
                            class WindowProvider extends java.lang.Object {
                                static class: java.lang.Class<WindowProvider>;
                                static readonly instance: WindowProvider;
                                static getFrame(): number;
                                onWindowOpened(window: UI.IWindow): void;
                                onWindowClosed(window: UI.IWindow): void;
                                onBackPressed(): boolean;
                                onActivityStopped(): void;
                            }
                        }
                    }
                }
            }
        }
    }
}
