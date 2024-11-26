
/**
 * Class to manipulate with separate players.
 * @remarks
 * It is temporary! Most methods works only 1 server tick!
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
     * @since 2.2.1b102
     */
    getPointer(): number;

    /**
     * @returns Whether the player is a valid entity.
     * @since 2.2.0b75 (not working before)
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
     * @since 2.2.1b101 (TODO: fix in changelog)
     */
    getItemUseDuration(): number;

    /**
     * @since 2.2.1b101 (TODO: fix in changelog)
     */
    getItemUseIntervalProgress(): number;

    /**
     * @since 2.2.1b101 (TODO: fix in changelog)
     */
    getItemUseStartupProgress(): number;

    /**
     * @returns `true` if player has operator permissions
     * @since 2.3.1b116
     */
    isOperator(): boolean;

    /**
     * Sets some of the player's abilities.
     * @param ability ability name constant, should be
     * one of the {@link EPlayerAbility} constants
     * @param value the value to be set for the ability
     * @remarks
     * Server-side analogue of {@link Player.setAbility}.
     * @since 2.3.1b116
     */
    setPlayerBooleanAbility(ability: string, value: boolean): void;

    /**
     * Sets some of the player's abilities.
     * @param ability ability name constant, should be
     * one of the {@link EPlayerAbility} constants
     * @param value the value to be set for the ability
     * @remarks
     * Server-side analogue of {@link Player.setAbility}.
     * @since 2.3.1b116
     */
    setPlayerFloatAbility(ability: string, value: number): void;

    /**
     * Gets one of the player's abilities in a boolean form.
     * @param ability ability name constant, should be
     * one of the {@link EPlayerAbility} constants
     * @returns Current value of the ability in a boolean form.
     * @remarks
     * Server-side analogue of {@link Player.getBooleanAbility}.
     * @since 2.3.1b116
     */
    getPlayerBooleanAbility(ability: string): boolean;

    /**
     * Gets one of the player's abilities in a form
     * of floating-point number.
     * @param ability ability name constant, should be
     * one of the {@link EPlayerAbility} constants
     * @returns Current value of the ability in a form
     * of floating-point number.
     * @remarks
     * Server-side analogue of {@link Player.getFloatAbility}.
     * @since 2.3.1b116
     */
    getPlayerFloatAbility(ability: string): number;

    /**
     * @returns `true` if player is allowed to fly, `false` otherwise.
     * @since 2.3.1b116
     * @remarks
     * Server-side analogue of {@link Player.getFlyingEnabled}.
     */
    canFly(): boolean;
    
    /**
     * Enables or disables player's ability to fly.
     * @param enabled whether the player can fly or not
     * @since 2.3.1b116
     * @remarks
     * Server-side analogue of {@link Player.setFlyingEnabled}.
     */
    setCanFly(enabled: boolean): void;

    /**
     * @returns `true` if player is flying, `false` otherwise.
     * @since 2.3.1b116
     * @remarks
     * Server-side analogue of {@link Player.getFlying}.
     */
    isFlying(): boolean;

    /**
     * Changes player's current flying state, call {@link PlayerActor.setCanFly}
     * to be able to set this property to `true`.
     * @param enabled whether the player should fly or not
     * @since 2.3.1b116
     * @remarks
     * Server-side analogue of {@link Player.setFlying}.
     */
    setFlying(enabled: boolean): void;
}
