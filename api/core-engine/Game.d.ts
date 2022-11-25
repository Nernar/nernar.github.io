/**
 * Module that provides some general game-related functions
 */
declare namespace Game {
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
     * Writes message to the chat. Message can be formatted using
     * {@link EColor} values.
     * @param msg message to be displayed
     */
    function message(msg: string): void;

    /**
     * Writes message above the hot bar. Message can be formatted using
     * {@link EColor} values.
     * @param msg message to be displayed
     */
    function tipMessage(msg: string): void;

    /**
     * Displays android AlertDialog with given message and dialog title.
     * @param message message to be displayed
     * @param title title of the AlertDialog
     */
    function dialogMessage(message: string, title: string): void;

    /**
     * Sets game difficulty, one of {@link EGameDifficulty} values.
     * @param difficulty game difficulty to be set
     */
    function setDifficulty(difficulty: number): void;

    /**
     * @returns Current game difficulty, one of the {@link EGameDifficulty} 
     * values.
     */
    function getDifficulty(): number;

    /**
     * Sets current level game mode.
     * @param gameMode new game mode, should be one of the {@link EGameMode}
     * values
     */
    function setGameMode(gameMode: number): void;

    /**
     * @returns Current level game mode, one of the {@link EGameMode} values.
     */
    function getGameMode(): number;

    /**
     * @returns String containing current Minecraft version.
     */
    function getMinecraftVersion(): string;

    /**
     * @returns String containing current Core Engine version (2.1).
     */
    function getEngineVersion(): string;

    /**
     * `true` if developer mode was enabled in Inner Core config.
     */
    const isDeveloperMode: boolean;

    /**
     * `true` if Inner Core config allows spending items in creative.
     */
    const spendItemsInCreative: boolean;

    /**
     * @returns `true` if item spending allowed.
     */
    function isItemSpendingAllowed(player?: number): boolean;

    /**
     * @since 2.0.4b35
     */
    function simulateBackPressed(): void;

}
