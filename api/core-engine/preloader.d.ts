/**
 * @remarks
 * Availabled in preloader scripts only!
 */
declare namespace Resources {

	function addRuntimePack(typeStr: string, name: string): string

	function getAllResourceDirectories(): string[]

	/**
	 * @since 2.0.2b24
	 */
	function getAllResourceDirectoriesPaths(): string[]

	function searchFilesInDir(result: Array<string>, baseDir: java.io.File, file: java.io.File, regex: string): void

	function getAllMatchingResourcesInDir(_directory: Object, regex: string): string[]

	function getAllMatchingResourcesInPath(_directory: Object, regex: string): string[]

	/**
	 * @since 2.0.2b24
	 */
	function getAllMatchingResources(regex: string): string[]

	function getResourcePathNoVariants(path: string): java.io.File | null

	/**
	 * @since 2.0.2b24
	 */
	function getResourcePath(path: string): string | null

}
