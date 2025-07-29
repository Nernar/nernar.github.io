/**
 * Interface for registering and customizing custom scales,
 * including getting and modifying them from other mods.
 * Vanilla scales cannot be obtained in this way.
 * @since 3.1.0b125
 */
declare class CustomScale {
	/**
	 * Returns scale by unique named identifier,
	 * or `null` if it does not exist, vanilla
	 * in-game scales is not counted.
	 */
	static getScaleByName(id: string): Nullable<CustomScale>;

	/**
	 * Returns all custom scales ever registered,
	 * vanilla in-game scales are not counted.
	 */
	static getAllScales(): CustomScale[];

	/**
	 * Registers a new scale according to given identifier
	 * (also quantifies as name) and textures for hotbar.
	 * @param id unique identifier, should include project
	 * definition, such as `insomnia.thirst`
	 * @param fullTexture relative texture path
	 * to single part filled state (2, full part)
	 * @param halfTexture relative texture path
	 * to single part half state (1, half part)
	 * @param emptyTexture relative texture path
	 * to single part empty state (0, empty part)
	 */
	constructor(id: string, fullTexture: string, halfTexture: string, emptyTexture: string);

	getPointer(): number;

	/**
	 * Returns unique named identifier used when registering scale.
	 */
	getScaleId(): string;

	/**
	 * Gets a maximum value that scale can reach,
	 * scale cannot get a value above maximum
	 * or below zero, default is `20`.
	 */
	getMaxValue(): number;

	/**
	 * Sets a maximum value that scale can reach,
	 * scale cannot get a value above maximum
	 * or below zero, default is `20`.
	 * @remarks
	 * Remember to change {@link CustomScale.setDefaultValue}.
	 */
	setMaxValue(value: number): void;

	/**
	 * Gets a default value that scale will get after
	 * first entry to world, or death if such options are
	 * enabled. Cannot be less than zero or greater than
	 * {@link CustomScale.getMaxValue}, default value is `20`.
	 */
	getDefaultValue(): number;

	/**
	 * Sets a default value that scale will get after
	 * first entry to world, or death if such options are
	 * enabled. Cannot be less than zero or greater than
	 * {@link CustomScale.getMaxValue}, default value is `20`.
	 */
	setDefaultValue(value: number): void;

	/**
	 * Gets whether scale is inverted, minimum value will
	 * visually become maximum and maximum value will
	 * become minimum, disabled by default.
	 */
	hasLeft(): boolean;

	/**
	 * If scale is inverted, minimum value will visually
	 * become maximum and maximum value will visually
	 * become minimum, disabled by default.
	 */
	setLeft(inverse: boolean): void;

	/**
	 * Whether scale is reset after player
	 * death, enabled by default.
	 */
	hasResetAfterDeath(): boolean;

	/**
	 * Enables or disables resetting scale after player
	 * death, enabled by default.
	 */
	setResetAfterDeath(reset: boolean): void;

	/**
	 * Whether scale display is enabled on local
	 * player's screen, enabled by default.
	 */
	hasDisplay(): boolean;

	/**
	 * Enables or disables displaying scale on local
	 * player's screen, enabled by default.
	 */
	setDisplay(displayed: boolean): void;

	/**
	 * Gets relative texture path to single part
	 * filled state for local player (2, full part).
	 */
	getTextureFull(): string;

	/**
	 * Sets relative texture path to single part
	 * filled state for local player (2, full part).
	 */
	setTextureFull(texture: string): void;

	/**
	 * Gets relative texture path to single part
	 * half state for local player (1, half part).
	 */
	getTextureHalf(): string;

	/**
	 * Sets relative texture path to single part
	 * half state for local player (1, half part).
	 */
	setTextureHalf(texture: string): void;

	/**
	 * Gets relative texture path to single part
	 * empty state for local player (0, empty part).
	 */
	getTextureEmpty(): string;

	/**
	 * Sets relative texture path to single part
	 * empty state for local player (0, empty part).
	 */
	setTextureEmpty(texture: string): void;
}
