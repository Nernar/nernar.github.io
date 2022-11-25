/**
 * @remarks
 * Availabled in preloader scripts only!
 */
declare namespace Resources {

	/**
	 * Creatings runtime pack, that will be removed on next
	 * launching game stage. Useful for both: client and server.
	 * @param typeStr one of: **resource** or **behavior**
	 * @param name generated pack name that additionaly hashes
	 * @returns Complete path to generated pack, it might be used
	 * to working with files and directories.
	 */
	function addRuntimePack(typeStr: string, name: string): string;

	/**
	 * @remarks
	 * Availabled in preloader scripts only!
	 */
	function getAllResourceDirectories(): string[];

	/**
	 * @remarks
	 * Availabled in preloader scripts only!
	 * @since 2.0.2b24
	 */
	function getAllResourceDirectoriesPaths(): string[];

	/**
	 * @remarks
	 * Availabled in preloader scripts only!
	 */
	function searchFilesInDir(result: Array<string>, baseDir: java.io.File, file: java.io.File, regex: string): void;

	/**
	 * @remarks
	 * Availabled in preloader scripts only!
	 */
	function getAllMatchingResourcesInDir(directory: Object, regex: string): string[];

	/**
	 * @remarks
	 * Availabled in preloader scripts only!
	 */
	function getAllMatchingResourcesInPath(directory: Object, regex: string): string[];

	/**
	 * @remarks
	 * Availabled in preloader scripts only!
	 * @since 2.0.2b24
	 */
	function getAllMatchingResources(regex: string): string[];

	/**
	 * @remarks
	 * Availabled in preloader scripts only!
	 */
	function getResourcePathNoVariants(path: string): Nullable<java.io.File>;

	/**
	 * @remarks
	 * Availabled in preloader scripts only!
	 * @since 2.0.2b24
	 */
	function getResourcePath(path: string): Nullable<string>;

}
