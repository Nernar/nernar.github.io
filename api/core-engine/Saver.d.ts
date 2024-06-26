/**
 * Module used to save data between world sessions.
 */
declare namespace Saver {
    /**
     * Creates saves scope, a universal data storage container. This storage
     * container should be used whenever you need to save some data between
     * world sessions. If you want to store primitives, use an object to wrap
     * them.
     * @param name saves scope name
     * @param loadFunc function used to load saved data
     * @param saveFunc function used to save data
     * 
     * @example
     * ```js
     * let thirst = 20;
     * Saver.addSavesScope("thirst", 
     *     function read(scope) {
     *         thirst = scope ? scope.thirst : 20;
     *     },
     *     function save() {
     *         return { "thirst": thirst };
     *     }
     * );
     * ```
     */
    function addSavesScope(name: string, loadFunc: LoadScopeFunc, saveFunc: SaveScopeFunc): void;

    /**
     * Registers object as scope saver.
     * @param name saves scope name
     * @param saver object that implements {@link Saver.ScopeSaver} interface and 
     * can be loaded and saved via it's functions calls
     */
    function registerScopeSaver(name: string, saver: any): ScopeSaver;

    function registerObjectSaver(name: string, saver: any): void;

    function registerObject(obj: any, saverId: any): void;

    function setObjectIgnored(obj: any, ignore: any): void;

    function serializeToString(obj: any): string;

    function serialize<T>(obj: T): T;

    function deserializeFromString(str: string): any;

    function deserialize<T>(obj: T): T;

    /**
     * Function that returns object representing created scope. No
     * primitives are allowed as return value.
     */
    type SaveScopeFunc =
        /**
         * @returns Data to be saved.
         */
        () => object;

    /**
     * Function that loads data from scope.
     */
    type LoadScopeFunc = (
        /**
         * @param scope data 
         */
        scope: Nullable<object>
    ) => void;

    /**
     * Interface that should be implemented to pass the object as 
     * {@link Saver.registerScopeSaver} parameter.
     */
    interface ScopeSaver {
        /**
         * Function used to load saved data.
         */
        read: LoadScopeFunc,
        /**
         * Function used to save data.
         */
        save: SaveScopeFunc
    }
}