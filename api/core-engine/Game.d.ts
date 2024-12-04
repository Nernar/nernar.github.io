/**
 * Module that provides some general game-related functions.
 */
declare namespace Game {
    /**
     * `true` if developer mode was enabled in Inner Core config.
     * @internal
     */
    let isDeveloperMode: boolean;

    /**
     * `true` if Inner Core config allows spending items in creative.
     * @internal
     */
    let spendItemsInCreative: boolean;

    /**
     * Allows you to determine whether current instance of game has
     * a client or not (clientless game requires a server core, e.g.
     * [Zote Core (GitHub)](https://github.com/reider745/zotecoreloader)).
     * @since 2.3.1b116
     */
    function isDedicatedServer(): boolean;

    /**
     * Prevents current callback function from being called in Minecraft.
     * For most callbacks it prevents default game behavior.
     */
    function prevent(): void;

    /**
     * @returns `true` if the current callback function has already been
     * prevented from being called in Minecraft using {@link Game.prevent},
     * `false `otherwise.
     */
    function isActionPrevented(): boolean;

    /**
     * Writes message to the chat.
     * Message can be formatted using {@link EColor} values.
     * @param message message to be displayed
     */
    function message(message: any): void;

    /**
     * Writes message above the hot bar.
     * Message can be formatted using {@link EColor} values.
     * @param message message to be displayed
     */
    function tipMessage(message: any): void;

    /**
     * Displays {@link android.app.AlertDialog} with given message and dialog title.
     * Message can be mixed with {@link android.text.Html.fromHtml HTML-like} formatting,
     * for example `<b>I'm a bold</b><br/><i>I'm a italic</i>`.
     * @param message message to be displayed
     * @param title title before message
     */
    function dialogMessage(message: any, title: any): void;

    /**
     * Sets game difficulty, one of {@link EGameDifficulty} values.
     * @param difficulty game difficulty to be set
     */
    function setDifficulty(difficulty: number): void;

    /**
     * @returns Current game difficulty, one of the {@link EGameDifficulty} values.
     */
    function getDifficulty(): number;

    /**
     * Sets current level game mode.
     * @param mode new game mode, should be one of the {@link EGameMode}
     * values
     */
    function setGameMode(mode: number): void;

    /**
     * @returns Current level game mode, one of the {@link EGameMode} values.
     */
    function getGameMode(): number;

    /**
     * Option types, which can be used to determine option data:
     * 
     * Type | Name | Description
     * ---|---|---
     * 0 | None | Internal type, it cannot be used.
     * 1 | Boolean | `true` or `false` switch.
     * 2 | Float | Field with float value.
     * 3 | Float Slider | Slider with float value in specified ranges.
     * 4 | String | Field with string text value.
     * 5 | Int | Field with integer value.
     * 6 | Int Slider | Slider with integer value in specified ranges.
     * @since 2.4.0b122
     */
    type OptionType = number;

    /**
     * Option instance, which can be obtained via {@link Game.getOption}.
     * @since 2.4.0b122
     */
    interface Option {
        /**
         * @internal
         */
        getPointer(): number;
        /**
         * Gets numeric option type, which can be used to
         * determine data type and retrieve proper value.
         */
        getType(): OptionType;
        /**
         * Can option be changed in game settings.
         */
        canModify(): boolean;
        /**
         * Gets boolean value of option, suitable for
         * boolean {@link OptionType}.
         */
        getBoolean(): boolean;
        /**
         * Gets boolean value of option, suitable for
         * float and float slider {@link OptionType}s.
         */
        getFloat(): number;
        /**
         * Gets minimum value in slider range, suitable
         * for float slider {@link OptionType}.
         */
        getFloatMin(): number;
        /**
         * Gets maximum value in slider range, suitable
         * for float slider {@link OptionType}.
         */
        getFloatMax(): number;
        /**
         * Gets boolean value of option, suitable for
         * string {@link OptionType}.
         */
        getString(): string;
        /**
         * Gets boolean value of option, suitable for
         * int and int slider {@link OptionType}s.
         */
        getInt(): number;
        /**
         * Gets minimum value in slider range, suitable
         * for int slider {@link OptionType}.
         */
        getIntMin(): number;
        /**
         * Gets maximum value in slider range, suitable
         * for int slider {@link OptionType}.
         */
        getIntMax(): number;
    }

    /**
     * Retrieves option by requested name, which instance
     * could be used for getting values.
     * @param name option name, suitable names could be found
     * in your "options.txt" file or via {@link Game.getOptions}
     * @since 2.4.0b122
     */
    function getOption(name: string): Nullable<Option>;

    /**
     * Fetches available option names, which can be used to
     * obtain values via {@link Game.getOption}.
     * @since 2.4.0b122
     */
    function getOptions(): string[];

    /**
     * String containing current Minecraft version.
	 * @returns `"1.16.201"` or `"1.11.4"`
     */
    function getMinecraftVersion(): string;

    /**
     * String containing current Core Engine version.
     * @returns `"2.1"`
     */
    function getEngineVersion(): string;

    /**
     * @returns `true` if item spending allowed or player in creative.
     */
    function isItemSpendingAllowed(playerUid?: number): boolean;

    /**
	 * Emulates native pressing of the back button inside
	 * the game, for example, necessary to close current window.
     * @since 2.0.4b35
     */
    function simulateBackPressed(): void;
}
