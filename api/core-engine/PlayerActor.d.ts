
/**
 * Class to manipulate with separate players.
 * @remarks
 * It is temporary! It exists only 1 server tick!
 */
declare class PlayerActor {
    constructor(playerUid: number);

    /**
     * @returns Player's unique numeric entity ID.
     */
    getUid(): number;

    /**
     * @returns ID of dimension where player is.
     */
    getDimension(): number;

    /**
     * @returns Player's gamemode.
     */
    getGameMode(): number;

    /**
     * Adds item to player's inventory.
     * @param dropRemaining if true, surplus will be dropped near player
     */
    addItemToInventory(id: number, count: number, data: number, extra: ItemExtraData | null, dropRemaining: boolean): void;

    /**
     * @returns Inventory slot's contents.
     */
    getInventorySlot(slot: number): ItemInstance;

    /**
     * Sets inventory slot's contents.
     */
    setInventorySlot(slot: number, id: number, count: number, data: number, extra: ItemExtraData | null): void;

    /**
     * @returns Armor slot's contents.
     */
    getArmor(slot: number): ItemInstance;

    /**
     * Sets armor slot's contents.
     */
    setArmor(slot: number, id: number, count: number, data: number, extra: ItemExtraData | null): void;

    /**
     * Sets respawn coords for the player.
     */
    setRespawnCoords(x: number, y: number, z: number): void;

    /**
     * Spawns exp on coords.
     * @param value experience points value
     */
    spawnExpOrbs(x: number, y: number, z: number, value: number): void;

    /**
     * @returns Whether the player is a valid entity.
     */
    isValid(): boolean;

    /**
     * @returns Player's selected slot.
     */
    getSelectedSlot(): number;

    /**
     * Sets player's selected slot.
     */
    setSelectedSlot(slot: number): void;

    /**
     * @returns Player's experience.
     */
    getExperience(): number;

    /**
     * Sets player's experience.
     */
    setExperience(value: number): void;

    /**
     * Add experience to player.
     */
    addExperience(amount: number): void;

    /**
     * @returns Player's xp level.
     */
    getLevel(): number;

    /**
     * Sets player's xp level.
     */
    setLevel(level: number): void;

    /**
     * @returns Player's exhaustion.
     */
    getExhaustion(): number;

    /**
     * Sets player's exhaustion.
     */
    setExhaustion(value: number): void;

    /**
     * @returns Player's hunger.
     */
    getHunger(): number;

    /**
     * Sets player's hunger.
     */
    setHunger(value: number): void;

    /**
     * @returns Player's saturation.
     */
    getSaturation(): number;

    /**
     * Sets player's saturation.
     */
    setSaturation(value: number): void;

    /**
     * @returns Player's score.
     */
    getScore(): number;

    /**
     * Sets player's score.
     */
    setScore(value: number): void;

    /**
     * @since 2.2.1b100
     */
    getItemUseDuration(): number;

    /**
     * @since 2.2.1b100
     */
    getItemUseIntervalProgress(): number;

    /**
     * @since 2.2.1b100
     */
    getItemUseStartupProgress(): number;

}
