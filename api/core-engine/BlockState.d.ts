declare namespace BlockState {
    interface KeyStateScriptable {
        [key: number]: number
    }
}

/**
 * A block state is a set of parameters applicable to any blocks in world,
 * created to store data permanently.
 * Each state can be requested by getting a block using {@link BlockSource.getBlock}
 * and then calling {@link BlockState.hasState}/{@link BlockState.getState},
 * states can be used in {@link ICRender.BlockState} conditions,
 * by game itself and manually by developer.
 * @remarks
 * Do not use numeric identifiers to save inside containers, convert them to
 * named identifiers before, numeric ones may change with each world entrance.
 * @since 2.2.1b89
 */
declare class BlockState implements Tile {

    /**
     * Creates a state that can be applied to any block via
     * {@link Block.addBlockState} or {@link Block.SpecialType.states SpecialType.states}.
     * Accepts any integer numeric value from 0 to capacity (exclusive).
     * When called on existing state if new capacity is larger,
     * it will be incremented for existing state.
     * @param key a unique name by which state can be retrieved from other mods,
     * must not overlap with vanilla {@link EBlockStates}; if identifier is intended
     * for your mod only, add a prefix (e.g., for "handle_type", "tcon_handle_type")
     * @param capacity number of states that may be applicable to block,
     * it is recommended to use powers of two
     * (2 for boolean values, 8 for 5-8 states inclusive, and so on)
     * @example
     * ```ts
     * // store numeric identifier in variable, as alternative BlockState.getIdByName comes handy
     * const HANDLE_TYPE_STATE = BlockState.registerBlockState("tcon_handle_type", 8);
     * 
     * IDRegistry.genBlockID("tcon_workbench");
     * Block.createBlock("tcon_workbench", [{ ... }], {
     *     // state key can be passed as alternative, vanilla EBlockStates too
     *     states: [HANDLE_TYPE_STATE]
     * });
     * 
     * Block.registerClickFunction("tcon_workbench", (coords, item, tile, playerUid) => {
     *     if (item.id !== VanillaItemID.stick) {
     *         return;
     *     }
     *     const region = BlockSource.getDefaultForActor(playerUid);
     *     const block = region.getBlock(coords.x, coords.y, coords.z);
     *     // increment to existing state, 0-5 values are applicable
     *     if (block.hasState(HANDLE_TYPE_STATE)) {
     *         const handleType = block.getState(HANDLE_TYPE_STATE) + 1;
     *         block.addState(HANDLE_TYPE_STATE, handleType < 6 ? handleType : 0);
     *     } else {
     *         // if state does not exist, assume that it has a default value of 0 and increment it
     *         block.addState(HANDLE_TYPE_STATE, 1);
     *     }
     *     region.setBlock(coords.x, coords.y, coords.z, block);
     * });
     * ```
     * @since 2.4.0b122-4 arm64
     */
    static registerBlockState(key: string, capacity: number): number;

    /**
     * @returns Numeric state identifier that can be used for most
     * block operations. Works for both new and vanilla states.
     * @since 2.4.0b122-4 arm64
     */
    static getIdByName(key: string): EBlockStates | number;

    /**
     * @returns Named state identifier, stable for saving in tiles and
     * other objects in mods. Works for both new and vanilla states.
     * @since 2.4.0b122-4 arm64
     */
    static getNameById(state: number): string;

    /**
     * @returns List of all state keys, including vanilla ones
     * from {@link EBlockStates}. Order is randomized.
     * @since 2.4.0b122-4 arm64
     */
    static getAllStates(): string[];

    /**
     * @returns Maximum capacity of state, state takes
     * values from 0 to capacity (exclusive).
     * @since 2.4.0b122-4 arm64
     */
    static getBlockStateCapacity(state: EBlockStates | number): number;

    /**
     * Data of the block.
     */
    readonly data: number;

    /**
     * Numeric ID of the block.
     */
    readonly id: number;

    /**
     * Constructs new BlockState object
     * from given ID and data.
     */
    constructor(id: number, data: number);

    /**
     * Constructs new BlockState object
     * from given ID and states object.
     */
    constructor(id: number, scriptable: BlockState.KeyStateScriptable);

    /**
     * @returns ID of the block.
     */
    getId(): number;

    /**
     * @returns Data of the block.
     */
    getData(): number;

    /**
     * @returns ID of the blockstate in runtime.
     */
    getRuntimeId(): number;

    /**
     * @returns Whether the state is valid.
     */
    isValidState(): boolean;

    /**
     * @returns State of the given number
     * if it's present in the following object.
     */
    getState(state: number): number;

    /**
     * @returns Whether the state by given number
     * is present in the following object.
     */
    hasState(state: number): boolean;

    /**
     * Adds state to the following object.
     * @returns BlockState object itself.
     */
    addState(state: number, value: number): BlockState;

    /**
     * Adds states to the following object
     * from given map instance.
     * @returns BlockState object itself.
     * @since 2.2.1b102
     */
    addStatesMap(states: java.util.Map<unknown, number>): BlockState;

    /**
     * Adds states to the following object
     * from given JS object instance.
     * @returns BlockState object itself.
     * @since 2.2.1b102
     */
    addStates(states: object): BlockState;

    /**
     * @returns All states from following object
     * in {@link java.util.Map} instance.
     */
    getStates(): java.util.Map<number, number>;

    /**
     * @returns All named states from following object
     * in {@link java.util.Map} instance.
     */
    getNamedStates(): java.util.Map<string, number>;

    /**
     * @returns All states from following object
     * in JS object instance.
     */
    getStatesScriptable(): BlockState.KeyStateScriptable;

    /**
     * @returns All named states from following object
     * in JS object instance.
     */
    getNamedStatesScriptable(): BlockState.KeyStateScriptable;

    /**
     * @returns Whether the following object is equal to given,
     * according to different parameters.
     */
    equals(object: any): boolean;

}
