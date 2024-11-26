declare module com {
    namespace zhekasmirnov {
        namespace innercore {
            namespace api {
                namespace mod {
                    namespace ui {
                        namespace window {
                            class UIWindowElementDrawable extends android.graphics.drawable.Drawable implements UI.IElementProvider {
                                static class: java.lang.Class<UIWindowElementDrawable>;
                                isDebugEnabled: boolean;
                                window: UI.Window;
                                windowElements: java.util.ArrayList<UI.IElement>;
                                constructor(win: UI.Window);
                                setBackgroundProvider(provider: UI.IBackgroundProvider): void;
                                addOrRefreshElement(element: UI.IElement): void;
                                removeElement(element: UI.IElement): void;
                                releaseAll(): void;
                                resetAll(): void;
                                invalidateAll(): void;
                                runCachePreparation(): void;
                                getStyleFor(element: UI.IElement): UI.Style;
                                setWindowStyle(style: UI.Style): void;
                                draw(canvas: NonNullable<android.graphics.Canvas>): void;
                                drawDirty(canvas: android.graphics.Canvas, scale: number): void;
                                onTouchEvent(event: UI.ITouchEvent): void;
                                setAlpha(alpha: number): void;
                                /**
                                 * Just for TS not to be angry.
                                 */
                                setColorFilter(par1: number, par2: android.graphics.PorterDuff.Mode): void;
                                setColorFilter(filter: Nullable<android.graphics.ColorFilter>): void;
                                /**
                                 * @default -3
                                 */
                                getOpacity(): number;
                            }
                        }
                    }
                }
            }
        }
    }
}
