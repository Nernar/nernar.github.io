/**
 * Method provided to log inherited Rhino class type and
 * determine which instance is used.
 * @returns Something like {@link java.lang.Class.getName}().
 * @internal
 */
declare function __debug_typecheck__(obj: any): string;

/**
 * Runs custom source in the specified context by it's name. Define custom 
 * sources using *"sourceType": "custom"* for the source in your *build.config*.
 * @param name path to the executable; can be built the way built-in source 
 * types are built
 * @param scope additional scope to be added to the current context
 */
declare function runCustomSource(name: string, scope?: object): void;

/**
 * Object containing custom block string IDs  as keys and their numeric
 * IDs as values.
 */
declare const BlockID: { [key: string]: number };

/**
 * Object containing custom item string IDs as keys and their numeric
 * IDs as values.
 */
declare const ItemID: { [key: string]: number };

/**
 * Module containing {@link ItemID} and {@link BlockID} values.
 * @internal
 */
declare namespace IDData {
	/**
	 * Object containing custom item string IDs as keys and their numeric
	 * IDs as values.
	 */
	const item: { [key: string]: number };

	/**
	 * Object containing custom block string IDs as keys and their numeric
	 * IDs as values.
	 */
	const block: { [key: string]: number };
}

/**
 * Same as {@link IMPORT}, consider using {@link IMPORT} instead.
 */
declare function importLib(name: string, value?: string): void;

/**
 * Imports library dependency. Libraries should be stored in the *"libraryDir"* 
 * directory, specified in your *build.config*. You can either import the whole
 * library or single function/value using value parameter.
 * @param name library name specified in the library's EXPORT declaration
 * @param value name of the function or value you wish to import, or "*" to 
 * import the whole library. Defaults to importing the whole library
 */
declare function IMPORT(name: string, value?: string): void;

/**
 * Injects methods from C++ into the target object to use in the mod.
 * @param name name of the module, as registered from native code
 * @param target target object, where all the methods from native module will be 
 * injected
 */
declare function IMPORT_NATIVE(name: string, target: object): any;

/**
 * Allows to create new JS modules imported from C++ code and use it in the mod.
 * @param name name of the module, as registered from native code
 * @returns JS module, implemented in native (C++) code.
 */
declare function WRAP_NATIVE<T = any>(name: string): T;

/**
 * Allows to create new JS modules imported from Java code and use it in the mod.
 * @param name name of the module, as registered from Java code
 * @returns JS module, implemented in Java code.
 */
declare function WRAP_JAVA<T = any>(name: string): T;

/**
 * @returns Current Core Engine API level (12).
 */
declare function getCoreAPILevel(): number;

/**
 * Runs specified function in the main thread.
 * @param func function to be run in the main thread
 */
declare function runOnMainThread(func: () => void): void;

/**
 * Runs specified function in the client thread.
 * Same as {@link runOnMainThread}, but for the client side.
 * @param func function to be run in the client thread
 * @since 2.2.1b96
 */
declare function runOnClientThread(func: () => void): void;

/**
 * @returns Minecraft version information in several variants.
 */
declare function getMCPEVersion(): {
	/**
	 * String version representation, three dot-separated numbers.
	 * @default "1.16.201" or "1.11.4"
	 */
	str: string,
	/**
	 * Array containing three version numbers.
	 * @default [1, 16, 201] or [1, 11, 4]
	 */
	array: number[],
	/**
	 * Version number.
	 * @default 16 or 11
	 */
	main: number
};

/**
 * Displays android.widget.Toast with specified message. If this function is called
 * more then once, messages are stacked and displayed together.
 * @param arg 
 */
declare function alert(arg: any): any;

/**
 * Library declaration, specifies all the information about library it is called from.
 * Cannot be called from user code.
 * @param description object containing all the required information
 * about the library
 */
declare function LIBRARY(description: {
	/**
	 * Library name, used to avoid conflicts when several
	 * mods have the same library installed.
	 */
	name: string,

	/**
	 * Library version, used to load the latest library version
	 * if different mods have different library version installed.
	 */
	version: number,

	/**
	 * API name.
	 */
	api: "CoreEngine" | "AdaptedScript" | "PrefsWinAPI" | "Preloader",

	/**
	 * If set to `true`, the context of the library is shared between mods to
	 * allow for better integration.
	 */
	shared: boolean,

	/**
	 * List of names of libraries that should be loaded before the current library is loaded.
	 * Every entry should be either just a library name or library name and version
	 * separated by a column (":").
	 */
	dependencies?: string[]
}): void;


/**
 * Exports object from library using specified name.
 * @param name object name to be used when calling {@link IMPORT}. 
 * If the name contains a column (":"), the number after column 
 * is used to specify version of the library this export corresponds to.
 * To provide backward compatibility, library authors can use multiple 
 * exports for different library versions inside a single file. This mechanism 
 * currently works only for library dependencies
 * @param lib object to be exported with specified name, 
 * can be of any valid js/java type
 */
declare function EXPORT(name: string, lib: any): void;

/**
 * Function that must be written in launcher.js to enable multiplayer configuration.
 * Client mods must not affect on the world.
 * They will not be taken into account in mod synchronization during the connection.
 */
declare function ConfigureMultiplayer(args: {
	/**
	 * Unique readable network name of the mod.
	 * @remarks
	 * Value `"auto"` here means determine *mod.info*
	 * property, which is preferred in most cases.
	 * @default "auto"
	 */
	name?: string,
	/**
	 * Mod version.
	 * @remarks
	 * Value `"auto"` here means determine *mod.info*
	 * property, which is preferred in most cases.
	 * @default "auto"
	 */
	version?: string,
	/**
	 * If `true`, mod is only client.
	 */
	isClientOnly: boolean
}): void;

/**
 * String types of armor to be specified when calling {@link Item.createArmorItem}.
 */
declare type ArmorType = "helmet" | "chestplate" | "leggings" | "boots";

/**
 * Default render templates used inside of Inner Core,
 * currently there are only default armor models.
 */
declare type DefaultRenderTemplate = ArmorType;
