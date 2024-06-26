/**
 * Module used to share mods' APIs.
 */
declare namespace ModAPI {
    /**
     * Registers new API for the mod and invokes mod API callback.
     * @param name API name used to import it in the other mods
     * @param api object that is shared with the other mods. May contain other 
     * objects, methods, variables, etc. Sometimes it is useful to provide the 
     * ability to run third party code in your own mod, you can create a method
     * that provides such possibility: 
     * ```ts
     * requireGlobal: function(command){
     *     return eval(command);
     * }
     * ``` 
     * @param descr simple documentation for the mod API
     * @param descr.name full name of the API, if not specified, name parameter 
     * value is used
     * @param descr.props object containing descriptions of methods and 
     * properties of the API, where keys are methods and properties names and 
     * values are their descriptions
     */
    function registerAPI(name: string, api: object, descr?: { name?: string, props?: object }): void;

    /**
     * Gets API by it's name. The best approach is to call this method in the
     * function passed as the second parameter of {@link ModAPI.addAPICallback}.
     * @param name API name
     * @returns API object if an API with specified was previously registered,
     * `null` otherwise.
     * @example
     * Importing API registered by IndustrialCraft PE:
     * ```ts
     * let ICore = null;
     * ModAPI.addAPICallback("ICore", api => (ICore = api));
     * ```
     * When using ICore variable from the example, be sure to check it for `null`
     * because Industrial Craft PE may not be installed on the user's phone.
     */
    function requireAPI(name: string): Nullable<object>;

    /**
     * Executes string in Core Engine's global context. Can be used to get
     * functions and objects directly from Adapted Script.
     * @param name string to be executed in Core Engine's global context
     * @returns `null` if execution failed or appropriate variable same.
     */
    function requireGlobal(name: string): any;

    /**
     * @param name API name
     * @returns Documentation for the specified mod API.
     * @deprecated Writing documentation that way is not better.
     */
    function requireAPIdoc(name: string): ModDocumentation;

    /**
     * Fetches information about the method or property of mod API.
     * @param name API name
     * @param prop property or method name
     * @returns String description of the method or null if no description was
     * provided by API vendor.
     * @deprecated Writing documentation that way is not better.
     */
    function requireAPIPropertyDoc(name: string, prop: string): Nullable<string>;

    /**
     * @deprecated No longer supported.
     */
    function getModByName(modName: string): void;

    /**
     * @deprecated No longer supported.
     */
    function isModLoaded(modName: string): void;

    /**
     * Adds callback for the specified mod API.
     * @param apiName API name
     * @param func callback that is called when API is loaded
     */
    function addAPICallback(apiName: string, func: (
        /**
         * @param api shared mod API
         */
        api: object
    ) => void): void;

    /**
     * @deprecated No longer supported.
     */
    function addModCallback(modName: string, func: any): void;

    /**
     * @deprecated No longer supported.
     */
    function getModList(): void;

    /**
     * @deprecated No longer supported.
     */
    function getModPEList(): void;

    /**
     * @deprecated No longer supported.
     */
    function addTexturePack(path: any): void;

    /**
     * Recursively copies (duplicates) the value to the new one.
     * @param api an object to be copied
     * @param deep if `true`, copies the object recursively
     * @returns A copy of the object.
     */
    function cloneAPI<T>(api: T, deep?: boolean): T;

    /**
     * Ensures target object has all the properties the source object has, if
     * not, copies them from source to target object.
     * @param source object to copy missing values from
     * @param target object to copy missing values to
     */
    function inheritPrototypes<K extends object, T extends object>
        (source: K, target: T): K & T;

    /**
     * Recursively clones object to the new one counting call depth and
     * interrupting copying after 7th recursion call.
     * @param source an object to be cloned
     * @param deep if `true`, copies the object recursively
     * @param rec current recursion state, if > 6, recursion stops; default 
     * value is 0
     * @returns Cloned object, all the properties that are less then then 8 in
     * depth, get copied.
     */
    function cloneObject<T extends object>(source: T, deep?: boolean, rec?: number): T;

    /**
     * Same as {@link ModAPI.cloneObject}, but if call depth is more then
     * 6, inserts `"stackoverflow"` string value otherwise.
     */
    function debugCloneObject<T>(source: T, deep?: boolean, rec?: number): T | string;

    /**
     * Objects used to represent mod API documentation.
     * @deprecated Writing documentation that way is not better.
     */
    interface ModDocumentation {
        /**
         * Full name of the API.
         */
        name: string,
        /**
         * Object containing descriptions of methods and properties of the API, 
         * where keys are methods and properties names and values are their descriptions.
         */
        props: object
    }

    /**
     * Collects registered APIs objects, use {@link ModAPI.requireAPI}
     * to directly access required instance.
     * @internal
     */
    let modAPIs: { [name: string]: { api: string, descr: { name: object, props: object } } }
}