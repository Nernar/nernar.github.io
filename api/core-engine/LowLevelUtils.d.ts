/**
 * Specific methods, for the most part, are designed to work
 * with Inner Core internals and debug various data.
 * @since 2.2.1b110
 */
declare namespace LowLevelUtils {
	/**
	 * Same as {@link Network} namespace.
	 */
	function getNetwork(): typeof Network;
	/**
	 * Same as {@link Game.simulateBackPressed}.
	 */
	function simulateBackPressed(): void;
	/**
	 * Same as {@link UI.getContext}.
	 */
	function getContext(): android.app.Activity;
	/**
	 * Calls an action in the Android interface thread.
	 * Any unexpected errors here will lead to the closure
	 * of the game, please add `try-catch` blocks to prevent this.
	 */
	function runAsUi(func: () => void): void;
	/**
	 * Displays dialog with given message and without title.
	 */
	function debugStr(message: string): void;
	/**
	 * Displays dialog with given bitmap image and title
	 * " bitmap \<width\>x\<height\>".
	 */
	function debugBmp(bitmap: android.graphics.Bitmap): void;
	/**
	 * Same as {@link Game.getMinecraftVersion}.
	 */
	function getMinecraftVersion(): string;
	/**
	 * @returns `"2.0.0.0"`
	 */
	function getInnerCoreVersion(): string;
	/**
	 * @throws Java {@link java.lang.RuntimeException} with specified message.
	 */
	function throwException(message: string): void;
	/**
	 * Dumps AdaptedScript API hieracly to log with debug priority.
	 */
	function debugAPILookUp(): void;
	/**
	 * Same as {@link runOnMainThread}.
	 */
	function runOnMainThread(func: () => void): void;
	/**
	 * Same as {@link runOnClientThread}.
	 */
	function runOnClientThread(func: () => void): void;
	/**
	 * Changes bottom label on mod loading screen, it is recommended to use
	 * it for debugging or visualization of long work during startup.
	 */
	function setLoadingTip(tip: string): void;
	/**
	 * @deprecated
	 */
	function setNativeThreadPriority(priority: number): void;
	/**
	 * Causes a native error, which immediately leads
	 * to the forced closure of the game.
	 */
	function forceNativeCrash(): void;
	/**
	 * Same as {@link Game.isActionPrevented}.
	 */
	function isDefaultPrevented(): boolean;
	/**
	 * Gets status of server tick, e.g. is tick disabled due to error.
	 * After restarting the world/server, this state is reset.
	 */
	function isMainThreadStopped(): boolean;
	/**
	 * Executes any code in the script body of a given object,
	 * the object itself becomes a local list of variables for code execution.
	 * @param code text to evaluate in given scope
	 * @param scope object in which context code is executed
	 * @param name script name for errors, debugging, etc.
	 * @since 2.2.0b76
	 */
	function evalInScope(code: string, scope: object, name: string): object;

	/**
	 * Creates an empty resource or behavior pack with a manifest
	 * to add content during mod loading. Please use names without
	 * special characters and only with ASCII characters.
	 * @param name pack title to be used for folder and displayed in
	 * pack list; folder will receive "runtime_\<name\>" name and title
	 * in interface will be "runtime pack: \<name\>"
	 */
	function addRuntimePack(type: "resource" | "behavior" | "behaviour", name: string): string;

	interface ICustomErrorCallback {
		/**
		 * @param message html-formatted message of error, what was happened
		 * @param error throwable, that was catched by logger
		 * @param log html-formatted log of error
		 * @param stacktrace html-formatted stacktrace of error
		 * @remarks
		 * At the moment, log is persistent and it generation takes some time.
		 */
		(message: string, error: Nullable<java.lang.Throwable>, log: string, stacktrace: Nullable<string>): boolean;
	}

	/**
	 * Instead of displaying fatal error type in dialog with a log,
	 * the specified function will be called to change this behavior.
	 */
	function setCustomFatalErrorCallback(callback: ICustomErrorCallback): void;
	/**
	 * Instead of displaying non-fatal error type in dialog with a log,
	 * the specified function will be called to change this behavior.
	 */
	function setCustomNonFatalErrorCallback(callback: ICustomErrorCallback): void;
	/**
	 * Instead of displaying startup error type in dialog with a log,
	 * the specified function will be called to change this behavior.
	 * For startup errors, only message and recent log are available,
	 * all other data will be passed as `null`.
	 */
	function setCustomStartupErrorCallback(callback: ICustomErrorCallback): void;

	/**
	 * Marking for current thread, unknown thread are used by default
	 * if this thread is not indented to be server or client-side.
	 */
	type ThreadTypeMarker = "CLIENT" | "SERVER" | "UNKNOWN";

	/**
	 * It can be used to make sure that an action is performed in
	 * intended thread, e.g. sending packet to clients on server.
	 */
	function getCurrentThreadType(): ThreadTypeMarker;
}
