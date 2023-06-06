declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module types {
                            /**
                             * Object containing font parameters. If no color, size and shadow are
                             * specified, default values are ignored and white font with text size 20,
                             * white color and 0.45 shadow is created.
                             */
                            export interface FontDescription {
                                /**
                                 * Font color, android integer color value (produced by
                                 * {@link android.graphics.Color}).
                                 * @default 0x000 // black
                                 */
                                color?: number,
                                /**
                                 * Font size.
                                 * @default 20
                                 */
                                size?: number,
                                /**
                                 * Font shadow offset.
                                 * @default 0 // no shadow
                                 */
                                shadow?: number,
                                /**
                                 * Font alignment, one of the
                                 * {@link com.zhekasmirnov.innercore.api.mod.ui.types.Font.ALIGN_DEFAULT Font.ALIGN_DEFAULT},
                                 * {@link com.zhekasmirnov.innercore.api.mod.ui.types.Font.ALIGN_CENTER Font.ALIGN_CENTER},
                                 * {@link com.zhekasmirnov.innercore.api.mod.ui.types.Font.ALIGN_END Font.ALIGN_END} constants.
                                 */
                                alignment?: number,
                                /**
                                 * Same as {@link com.zhekasmirnov.innercore.api.mod.ui.types.FontDescription.alignment FontDescription.alignment}.
                                 */
                                align?: number,
                                /**
                                 * If `true`, the font is bold, `false` otherwise.
                                 * @default false
                                 */
                                bold?: boolean,
                                /**
                                 * If `true`, the font is italic, `false` otherwise.
                                 * @default false
                                 */
                                cursive?: boolean,
                                /**
                                 * If `true`, the font is underlined, `false` otherwise.
                                 * @default false
                                 */
                                underline?: boolean
                            }
                            export class Font extends java.lang.Object {
                                static class: java.lang.Class<Font>;
                                /**
                                 * Aligns text to the start of the element (left for English locale).
                                 */
                                static readonly ALIGN_CENTER: number;
                                /**
                                 * Aligns text to the center of the element.
                                 */
                                static readonly ALIGN_DEFAULT: number;
                                /**
                                 * Aligns text to the end of the element (right for English locale).
                                 */
                                static readonly ALIGN_END: number;
                                /**
                                 * Aligns text to the center of the element horizontally.
                                 * @since 2.2.1b96
                                 */
                                static readonly ALIGN_CENTER_HORIZONTAL: number;
                                alignment: number;
                                color: number;
                                isBold: boolean;
                                isCursive: boolean;
                                isUnderlined: boolean;
                                shadow: number;
                                size: number;
                                /**
                                 * Constructs new instance of the font with specified parameters.
                                 * @param color font color, android integer color value (produced by
                                 * android.graphics.Color)
                                 * @param size font size
                                 * @param shadow shadow offset
                                 */
                                constructor(color: number, size: number, shadow: number);
                                /**
                                 * Constructs new instance of the font with specified parameters.
                                 * @param params parameters of the font
                                 */
                                constructor(params: FontDescription);
                                /**
                                 * Draws text on the canvas using created font.
                                 * @param canvas {@link android.graphics.Canvas} instance to draw the text on
                                 * @param x x coordinate of the text in pixels
                                 * @param y x coordinate of the text in pixels
                                 * @param text text string to draw
                                 * @param scale additional scale to apply to the text
                                 */
                                drawText(canvas: android.graphics.Canvas, x: number, y: number, text: string, scale: number): void;
                                /**
                                 * Calculates bounds of the text given text position, text string and
                                 * additional scale.
                                 * @returns rect object containing calculated bounds of 
                                 * the text
                                 */
                                getBounds(text: string, x: number, y: number, scale: number): android.graphics.Rect;
                                /**
                                 * Calculates text width given text string and additional scale.
                                 * @returns width of the specified string when painted with specified 
                                 * scale
                                 */
                                getTextWidth(text: string, scale: number): number;
                                /**
                                 * Calculates text height given text string and additional scale.
                                 * @returns height of the specified string when painted with specified 
                                 * scale
                                 */
                                getTextHeight(text: string, x: number, y: number, scale: number): number;
                                /**
                                 * Converts current {@link com.zhekasmirnov.innercore.api.mod.ui.types.Font Font} object to scriptable font description.
                                 */
                                asScriptable(): FontDescription;

                                /* <DMHYT>: "Not sure about these two methods, that I saw in previous docs.
                                I can't see them in sources 0_0" */

                                /**
                                 * Sets listener to be notified about window opening/closing events.
                                 */
                                setEventListener(listener: window.IWindowEventListener | UI.WindowEventListener): void;
                                /**
                                 * Sets listener to be notified about tab with specified index opening/closing events.
                                 * @param tab tab index
                                 * @param listener object to be notified about the events
                                 */
                                setTabEventListener(tab: number, listener: window.IWindowEventListener | UI.WindowEventListener): void;
                            }
                        }
                    }
                }
            }
        }
    }
}