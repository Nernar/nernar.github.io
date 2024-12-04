/**
 * Class to work with vanilla blocks parameters.
 * @since 2.2.1b89
 */
declare class BlockState implements Tile {

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
    constructor(id: number, scriptable: {[key: number]: number});

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
    getStatesScriptable(): { [key: string]: number };

    /**
     * @returns All named states from following object
     * in JS object instance.
     */
    getNamedStatesScriptable(): { [key: string]: number };

    /**
     * @returns Whether the following object is equal to given,
     * according to different parameters.
     */
    equals(object: any): boolean;

}
