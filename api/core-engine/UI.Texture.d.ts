declare namespace UI {
	interface IBitmapWrap {
		/* static */ readonly MISSING_BITMAP: android.graphics.Bitmap;
		resize(x: number, y: number): IBitmapWrap;
		restore(): boolean;
		store(): boolean;
		storeIfNeeded(): void;
		restoreIfNeeded(): void;
		getWidth(): number;
		getHeight(): number;
		getConfig(): android.graphics.Bitmap.Config;
		getStackPos(): number;
		get(): android.graphics.Bitmap;
		isRecycled(): boolean;
		recycle(): void;
		removeCache(): void;
		getResizedCache(width: number, height: number): android.graphics.Bitmap;
		/* static */ wrap(bmp: android.graphics.Bitmap): IBitmapWrap;
		/* static */ wrap(name: string, width: number, height: number): IBitmapWrap;
		/* static */ wrap(name: string): IBitmapWrap;
	}

	/**
	 * Class representing static or animated texture.
	 */
	class Texture {
		animation: IBitmapWrap[];
		bitmap: IBitmapWrap;
		delay: number;
		isAnimation: boolean;
		/**
		 * Constructs new static {@link Texture} with specified bitmap.
		 * @param bitmap {@link android.graphics.Bitmap} instance
		 */
		constructor(bitmap: android.graphics.Bitmap);
		/**
		 * Constructs new animated {@link Texture} with specified frames.
		 * @param bitmaps an array of {@link android.graphics.Bitmap} instances to be 
		 * used as animation frames
		 */
		constructor(bitmaps: android.graphics.Bitmap[]);
		/**
		 * Constructs new static or animated {@link Texture} with specified frames.
		 * @param obj texture name or array of texture names for animated 
		 * textures. Accepts raw gui textures names and style bindings
		 * (formatted as "style:binding_name"). 
		 * @param style {@link Style} object to look for style bindings. If not 
		 * specified, default style is used
		 */
		constructor(obj: string | { [key: string]: string }, style?: Style);
		isAnimated(): boolean;
		/**
		 * Sets texture offsets in pixels from the upper left bound of the bitmap.
		 */
		readOffset(obj: { x?: number, y?: number }): void;
		/**
		 * @returns Frame number of the animation corresponding to current system time.
		 */
		getFrame(): number;
		/**
		 * @param frame frame number
		 * @returns Bitmap object containing animation frame 
		 * for the corresponding frame number.
		 */
		getBitmap(frame: number): android.graphics.Bitmap;
		getBitmapWrap(frame: number): IBitmapWrap;
		draw(canvas: android.graphics.Canvas, x: number, y: number, scale: number): void;
		drawCutout(canvas: android.graphics.Canvas, cutout: android.graphics.RectF, x: number, y: number, scale: number): void;
		/**
		 * @returns Width of the texture in pixels.
		 */
		getWidth(): number;
		/**
		 * @returns Height of the texture in pixels.
		 */
		getHeight(): number;
		/**
		 * Resizes all the frames of the texture to the specified size.
		 */
		resizeAll(width: number, height: number): void;
		/**
		 * Resizes all the frames by constant scale multiplier.
		 * @param scale scale to modify the frames by
		 */
		rescaleAll(scale: number): void;
		/**
		 * Resizes all the frames to match the first one.
		 */
		fitAllToOneSize(): void;
		/**
		 * Releases all allocated resources, should be called when the texture
		 * is not longer needed.
		 */
		release(): void;
	}

    /**
	 * Namespace containing methods used to get and add gui textures.
	 */
    class TextureSource {
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
		/*
		TODO:
			loadFile(file: java.io.File, namePrefix: string): void;
			loadAsset(name: string): void;
			loadDirectory(dir: java.io.File): void;
			loadDirectory(dir: java.io.File, namePrefix: string): void; 
		*/
    }

	/**
	 * Object used to manipulate frame textures.
	 */
	interface FrameTexture {
		/**
		 * Specifies bottom left corner of the frame.
		 */
		/* static */ readonly CORNER_BOTTOM_LEFT: number;
		/**
		 * Specifies bottom right corner of the frame.
		 */
		/* static */ readonly CORNER_BOTTOM_RIGHT: number;
		/**
		 * Specifies top left corner of the frame.
		 */
		/* static */ readonly CORNER_TOP_LEFT: number;
		/**
		 * Specifies top right corner of the frame.
		 */
		/* static */ readonly CORNER_TOP_RIGHT: number;
		/**
		 * Specifies bottom side of the frame.
		 */
		/* static */ readonly SIDE_BOTTOM: number;
		/**
		 * Specifies left side of the frame.
		 */
		/* static */ readonly SIDE_LEFT: number;
		/**
		 * Specifies right side of the frame.
		 */
		/* static */ readonly SIDE_RIGHT: number;
		/**
		 * Specifies top side of the frame.
		 */
		/* static */ readonly SIDE_TOP: number;
		/**
		 * Expands side of the texture by specified amount of pixels.
		 * @param sideId side of the texture, one of the 
		 * **FrameTexture.SIDE_LEFT**, **FrameTexture.SIDE_RIGHT**, 
		 * **FrameTexture.SIDE_UP**, **FrameTexture.SIDE_DOWN** constants
		 * @returns Expanded {@link android.graphics.Bitmap} instance with the frame.
		 */
		expandSide(sideId: number, pixels: number): android.graphics.Bitmap;
		/**
		 * Expands texture to the specified side, filling the middle with
		 * specified color.
		 * @param color integer color value produced by {@link android.graphics.Color} 
		 * class
		 * @param sides array of booleans marking whether the side should be
		 * expanded or not. The order of the sides is
		 * **FrameTexture.SIDE_LEFT**, **FrameTexture.SIDE_RIGHT**,
		 * **FrameTexture.SIDE_UP**, **FrameTexture.SIDE_DOWN**
		 * @returns Expanded {@link android.graphics.Bitmap} instance with the frame.
		 */
		expand(width: number, height: number, color: number, sides: [boolean, boolean, boolean, boolean]): android.graphics.Bitmap;
		/**
		 * Expands texture to the specified side, filling the middle with
		 * specified color.
		 * @param color integer color value produced by {@link android.graphics.Color} 
		 * class
		 */
		expand(width: number, height: number, color: number): android.graphics.Bitmap;
		/**
		 * Expands texture to the specified side, filling the middle with
		 * specified color.
		 * @param scale scale of the created bitmap
		 * @param color integer color value produced by {@link android.graphics.Color} 
		 * class
		 * @param sides array of booleans marking whether the side should be 
		 * expanded or not. See {@link UI.FrameTexture.expand} parameters for details. 
		 * Default behavior is to scale all sides
		 * @returns Expanded and scaled {@link android.graphics.Bitmap} instance.
		 */
		expandAndScale(width: number, height: number, scale: number, color: number, sides: [boolean, boolean, boolean, boolean]): android.graphics.Bitmap;
		/**
		 * Expands texture to the specified side, filling the middle with
		 * specified color.
		 * @param scale scale of the created bitmap
		 * @param color integer color value produced by {@link android.graphics.Color}
		 * class
		 */
		expandAndScale(width: number, height: number, scale: number, color: number): android.graphics.Bitmap;
		/**
		 * @returns Original frame texture source stored in
		 * {@link android.graphics.Bitmap} instance.
		 */
		getSource(): android.graphics.Bitmap;
		/**
		 * @param side side of the texture, one of the
		 * **FrameTexture.SIDE_LEFT**, **FrameTexture.SIDE_RIGHT**,
		 * **FrameTexture.SIDE_UP**, **FrameTexture.SIDE_DOWN** constants
		 * @returns Texture side source extracted from the original frame
		 * texture source stored in {@link android.graphics.Bitmap} instance.
		 */
		getSideSource(side: number): android.graphics.Bitmap;
		/**
		 * @returns Object packed integer color value
		 * of the central pixel of the source texture.
		 */
		getCentralColor(): number;
		draw(canvas: android.graphics.Canvas, rect: android.graphics.RectF, scale: number, color: number, sides: [boolean, boolean, boolean, boolean]): void;
	}

    /**
	 * Namespace containing method to get {@link FrameTexture} instances.
	 */
    class FrameTextureSource {
        /**
		 * @param name gui texture name of the frame
		 */
        static get(name: string): FrameTexture;
		/*
		TODO:
			static get(name: string, style: Style): FrameTexture;
		*/
    }
}
