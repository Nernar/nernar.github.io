declare namespace UI {
	interface StandardWindowBackgroundDescription {
		/**
		 * If `true`, default window is created.
		 */
		standard?: boolean,
		/**
		 * If `true`, default window is created.
		 * @deprecated Use {@link standard} instead.
		 */
		standart?: boolean,
		/**
		 * Background color integer value, produced by
		 * {@link android.graphics.Color} class.
		 * @default 0xfff // white
		 */
		color?: number,
		/**
		 * Background bitmap texture name. If the bitmap size doesn't
		 * match the screen size, bitmap will be stretched to fit.
		 */
		bitmap?: string,
		/**
		 * Specifies window's frame parameters.
		 */
		frame?: {
			/**
			 * Frame bitmap scale.
			 * @default 3
			 */
			scale?: number,
			/**
			 * Frame bitmap gui texture name. Defaults to *"frame"*
			 * style binding or, if not specified, to
			 * *"default_frame_8"* gui texture
			 */
			bitmap?: string,
		};
	}

	interface StandardWindowHeaderTextDescription {
		/**
		 * Specifies header text.
		 * @default "No Title"
		 */
		text?: string,
		/**
		 * Specifies font params for the header text, only 
		 * {@link StandardWindowHeaderTextDescription.size}, {@link StandardWindowHeaderTextDescription.color}
		 * and {@link StandardWindowHeaderTextDescription.shadow} properties are used.
		 */
		font?: FontDescription,
		/**
		 * If {@link StandardWindowHeaderTextDescription.font font} is not specified, used as
		 * {@link StandardWindowHeaderTextDescription.size size} value.
		 */
		size?: number,
		/**
		 * If {@link StandardWindowHeaderTextDescription.font font} is not specified, used as
		 * {@link StandardWindowHeaderTextDescription.color color} value.
		 */
		color?: number,
		/**
		 * If {@link StandardWindowHeaderTextDescription.font font} is not specified, used as
		 * {@link StandardWindowHeaderTextDescription.shadow shadow} value.
		 */
		shadow?: number;
	}

	interface StandardWindowHeaderDescription {
		/**
		 * Specifies whether the header should have shadow or not. If
		 * `true`, the shadow is not displayed.
		 * @default false
		 */
		hideShadow?: boolean,
		/**
		 * Specifies header height in units.
		 * @default 80
		 */
		height?: number,
		/**
		 * If *height* is not specified, used to specify header height
		 * in units.
		 */
		width?: number,
		/**
		 * Frame bitmap gui texture name. Defaults to *"headerFrame"*
		 * style binding or, if not specified, to
		 * *"default_frame_7"* gui texture.
		 */
		frame?: string,
		/**
		 * Header background color integer value, produced by
		 * {@link android.graphics.Color} class. Default is
		 * *Color.rgb(0x72, 0x6a, 0x70)*.
		 */
		color?: number,
		/**
		 * Specifies header text styles and value.
		 */
		text?: StandardWindowHeaderTextDescription,
		/**
		 * If `true`, close button is not displayed.
		 * @default false
		 */
		hideButton?: boolean;
	}

	interface StandardWindowInventoryDescription {
		/**
		 * Inventory width in units. Defaults to 300 units.
		 */
		width?: number,
		/**
		 * Specifies additional padding for the inventory in units.
		 * Defaults to 20 units.
		 */
		padding?: number,
		/**
		 * If `true`, default window is created.
		 */
		standard?: boolean;
	}

	interface StandardWindowDescription {
		/**
		 * Specifies minimum contents window height. If actual height is
		 * less then desired, scrolling is used.
		 */
		minHeight?: number,
		/**
		 * Specifies background properties.
		 */
		background?: StandardWindowBackgroundDescription,
		/**
		 * Specifies additional parameters for standard window's header.
		 */
		header?: StandardWindowHeaderDescription,
		/**
		 * Specifies parameters for standard inventory window.
		 */
		inventory?: StandardWindowInventoryDescription;
	}

	/**
	 * Extended {@link WindowContent} object with additional params for
	 * {@link UI.StandartWindow} and {@link UI.StandardWindow}.
	 */                            
	interface StandardWindowContent extends WindowContent {
		/**
		 * Used for {@link UI.StandartWindow}s and {@link UI.StandardWindow}s.
		 * Specifies additional parameters for standard windows.
		 */
		standard?: StandardWindowDescription,
		/**
		 * Used for {@link UI.StandartWindow}s and {@link UI.StandardWindow}s.
		 * Specifies additional parameters for standard windows.
		 * @deprecated Use {@link standard} instead.
		 */
		standart?: StandardWindowDescription;
	}

    /**
	 * Class used to create standard UI for the mod's machines.
	 * {@link UI.StandardWindow} is a {@link UI.WindowGroup} that has three windows with names
	 * `"main"`, `"inventory"` and `"header"`. They represent custom window
	 * contents, player's inventory and window's header respectively.
	 * @since 2.0.4b40
	 */
	class StandardWindow extends WindowGroup {
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
		getContent(): StandardWindowContent;
		getStyleSafe(): Style;
		setContent(content: StandardWindowContent): void;
	}

    /**
	 * Legacy misspelled standard UI, which is works under classic
	 * styling and must be used only in unsupported mods.
	 * @deprecated In 2.0.4b40, use {@link UI.StandardWindow} instead.
	 */
    class StandartWindow extends StandardWindow {
        /**
		 * Constructs new {@link UI.StandartWindow} with specified content.
		 * Content is applied to the main window, header and inventory remain
		 * the same.
		 * @param content object containing window description
		 */
        constructor(content: StandardWindowContent);
        /**
         * Constructs new empty {@link UI.StandartWindow} object.
         */
        constructor();
	}
}
