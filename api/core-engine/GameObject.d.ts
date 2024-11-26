interface GameObjectPrototype extends Updatable {
    /**
     * Function that is called when a new instance of {@link GameObject} is created,
     * the engine passes all the arguments of {@link GameObject.deploy} function to
     * this function.
     */
    init?: (...args: any) => void,
    /**
     * Function that is called when a {@link GameObject} is loaded.
     */
    loaded?: () => void
}

/**
 * Class used to create and manipulate game objects. Game objects are {@link Updatable Updatables}
 * that are being saved between game launches.
 */
declare class GameObject<T extends GameObjectPrototype> {
    /**
     * Constructs a new {@link GameObject} with given params.
     * @param type unique name for the game object type. Use package-like names to 
     * ensure your game object name is unique
     * @param prototype 
     */
    constructor(type: string, prototype: T);

    /**
     * Original value passed to {@link GameObject.constructor} as type.
     */
    readonly originalName: string;
    /**
     * Same as {@link GameObject.originalName}, but with suffix
     * which are used for object saving to be unique.
     */
    readonly gameobjectName: string;
    /**
     * Used when {@link Saver.registerObject} calling inside.
     * @internal
     */
    readonly saverId: number;
    /**
     * `true` if current object is instance, prototype otherwise.
     */
    readonly isInstance: boolean;
    /**
     * `true` if current object was deployed or added directly.
     */
    readonly isDeployed: boolean;
    /**
     * Prototype from which instantiated objects are created.
     * @internal
     */
    readonly Prototype: T;

    /**
     * Creates a new game object without deploying it; you are shouldn't
     * do it normally, it was called by {@link GameObject.deploy}.
     * @returns Instantiated game object.
     * @internal
     */
    instantiate(): GameObject<T>;

    /**
     * Creates a new game object with specified params and registers
     * it for saving and as an {@link Updatable}.
     * @param args any arguments that are passed to {@link GameObjectPrototype.init} function
     * @returns Instantiated game object.
     */
    deploy(...args: any): GameObject<T>;

    /**
     * Destroys current game object.
     */
    destroy(): void;
}

declare namespace GameObjectRegistry {
    /**
     * Game objects which are registered via {@link GameObject.constructor}
     * or internally via {@link GameObjectRegistry.registerClass}.
     * @internal
     */
    const gameObjectTypes: {
        [gameobjectName: string]: GameObject<any>
    };
    /**
     * Game objects which are deployed via {@link GameObject.deploy}
     * or internally via {@link GameObjectRegistry.deployGameObject}
     * and {@link GameObjectRegistry.addGameObject}.
     * @internal
     */
    const activeGameObjects: {
        [type: string]: GameObject<any>
    };

    /**
     * Suffixes game object type if it already registered.
     * @internal
     */
    function genUniqueName(name: string): string;

    /**
     * Registers game object to be saveable, called from {@link GameObject.constructor}.
     * @internal
     */
    function registerClass(gameObject: GameObject<any>): void;

    /**
     * Puts game object to an updatable queue, calling {@link GameObjectPrototype.loaded}.
     * Should be called by {@link GameObject.deploy}.
     * @internal
     */
    function deployGameObject(gameObject: GameObject<any>): void;

    /**
     * Puts game object as active, but without adding as updatable, which
     * has been achieved by calling {@link GameObject.deploy}.
     * @internal
     */
    function addGameObject(gameObject: GameObject<any>): void;

    /**
     * Destroys game object, but without removing updatable as
     * it is done via {@link GameObject.destroy}.
     * @internal
     */
    function removeGameObject(gameObject: GameObject<any>): void;

    /**
     * Clears active game object list, maintaining updatable states.
     * @internal
     */
    function resetEngine(): void;

    /**
     * Gets an array of deployed {@link GameObject game objects} of specified type.
     * @param type unique {@link GameObject} type to get all the instances of
     * @param clone if `true`, a new array is created to be changeable,
     * recommended by default
     */
    function getAllByType<T extends GameObjectPrototype>(type: string, clone: boolean): GameObject<T>[];

    /**
     * Calls function of the {@link GameObject} of specified type
     * with specified parameters.
     * @param type unique {@link GameObject} type to get all the instances of
     * @param what function name as defined in {@link GameObjectPrototype}
     * passed to {@link GameObject.constructor}
     * @param params parameters to be passed to the function
     */
    function callForType(type: string, what: string, ...params: any): any;

    /**
     * Same as {@link GameObjectRegistry.callForType} but for async operations.
     */
    function callForTypeSafe(type: string, what: string, ...params: any): any;
}
