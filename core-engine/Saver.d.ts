/**
 * Module used to save data between world sessions,
 * different worlds have their own saves.
 */
declare namespace Saver {
    /**
     * Function that loads data from saves scope.
     */
    interface ScopeLoadFunction {
        /**
         * @param scope object data from saves
         */
        (scope: object): void
    }

    /**
     * Function used to save data.
     */
    interface ScopeSaveFunction {
        /**
         * @returns Object data to be serialized in saves scope.
         */
        (): Nullable<object>
    }

    /**
     * Creates saves scope, a universal data storage container. This storage
     * container should be used whenever you need to save some data between
     * world sessions. If you want to store primitives, use an object to wrap
     * them.
     * @param name saves scope name
     * @param load function used to load saved data
     * @param save function used to save data
     * 
     * @example
     * ```js
     * let thirst = 20;
     * Saver.addSavesScope("thirst_library.thirst", 
     *     function read(scope) {
     *         thirst = scope ? scope.thirst : 20;
     *     },
     *     function save() {
     *         return { thirst: thirst };
     *     }
     * );
     * ```
     */
    function addSavesScope(name: string, load: ScopeLoadFunction, save: ScopeSaveFunction): void;

    /**
     * Function that returns default data to be passed
     * to {@link ScopeLoadFunction} if there is no previous data.
     * @since 2.3.1b116-3
     */
    interface DefaultSavesFunction {
        (): Nullable<object>
    }

    /**
     * Interface that should be implemented to pass object as 
     * {@link Saver.registerScopeSaver} parameter.
     */
    interface IScopeSaver {
        /**
         * Function that loads data from saves scope.
         */
        read: ScopeLoadFunction,
        /**
         * Function used to save data.
         */
        save: ScopeSaveFunction,
        /**
         * Function that returns default data to be passed
         * to {@link read} if there is no previous data.
         * @since 2.3.1b116-3
         */
        getDefaultSaves?: DefaultSavesFunction
    }

    /**
     * Registers object as scope saver.
     * @param name saves scope name
     * @param saver object that implements {@link Saver.IScopeSaver}
     * interface and can be loaded and saved via it's functions calls
     */
    function registerScopeSaver(name: string, saver: IScopeSaver): void;

    interface IHashSaver {
        getId(): number;
        setId(id: number): void;
    }

    type SaveableObjectType = object | org.json.JSONObject | IHashSaver;

    /**
     * Function that converts serialized data
     * from saves scope to your object instance.
     */
    interface ObjectLoadFunction {
        /**
         * @param obj object data from saves
         * @returns Instance of newly instantiated object.
         */
        (obj: object): SaveableObjectType
    }

    /**
     * Function used to save serialized data of your object instance.
     */
    interface ObjectSaveFunction {
        /**
         * @param instance instance of your object to be saved
         * @returns Object data to be serialized in saves scope.
         */
        (instance: SaveableObjectType): object
    }

    /**
     * Interface that should be implemented to pass object as 
     * {@link Saver.registerObjectSaver} parameter.
     */
    interface IObjectSaver {
        /**
         * Function that converts serialized data
         * from saves scope to your object instance.
         */
        read: ObjectLoadFunction,
        /**
         * Function used to save serialized data of your object instance.
         */
        save: ObjectSaveFunction
    }

    /**
     * Registers object as object instance saver.
     * @param name saves scope name
     * @param saver object that implements {@link Saver.IObjectSaver}
     * interface and can be loaded and saved via it's functions calls
     * @returns Saver identifier of your object instance.
     * 
     * @example
     * ```js
     * function PedestalTile(type) {
     *     this.type = type;
     *     Saver.registerObject(this, PedestalTile.saverId);
     * }
     * PedestalTile.saverId = Saver.registerObjectSaver("mystical_agriculture.pedestal", {
     *     read(obj) {
     *         return new PedestalTile(obj.type);
     *     },
     *     save(instance) {
     *         return { type: instance.type };
     *     }
     * });
     * ```
     */
    function registerObjectSaver(name: string, saver: IObjectSaver): number;

    /**
     * Registers object to be saved with a given saver
     * by identifier received from {@link Saver.registerObjectSaver}.
     * @param obj target object instance
     * @param saverId to be used on saving
     */
    function registerObject(obj: SaveableObjectType, saverId: number): void;

    /**
     * Changes registered via {@link Saver.registerObject} instance
     * behavior to object be skippable or not.
     * @param obj target object instance
     * @param ignore should be skipped on saving
     */
    function setObjectIgnored(obj: object, ignore: boolean): void;

    /**
     * Converts present object hieracly via registered
     * {@link Saver.registerScopeSaver} and {@link Saver.registerObjectSaver}
     * instances recursively to serialized data.
     * @returns Serialized object hieracly transformed to string.
     */
    function serializeToString(obj: any): string;

    /**
     * Converts present object hieracly via registered
     * {@link Saver.registerScopeSaver} and {@link Saver.registerObjectSaver}
     * instances recursively to serialized data.
     * @returns Serialized object hieracly.
     */
    function serialize(obj: any): object;

    /**
     * Converts present transformed to string serialized object
     * via registered {@link Saver.registerScopeSaver} and
     * {@link Saver.registerObjectSaver} recursively to instance hieracly.
     * @returns Deserialized object instance hieracly.
     */
    function deserializeFromString(str: string): any;

    /**
     * Converts present serialized object via registered {@link Saver.registerScopeSaver}
     * and {@link Saver.registerObjectSaver} recursively to instance hieracly.
     * @returns Deserialized object instance hieracly.
     */
    function deserialize(obj: object): any;
}
