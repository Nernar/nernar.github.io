/**
 * Module that provides methods to work with file system.
 */
declare namespace FileTools {
    /**
     * Defines path to mounted devices directory (e.g. *\/mnt*).
     */
    const mntdir: string;

    /**
     * Defines external user directory path with trailing slash (e.g. *\/sdcard\/*, *\/storage\/emulated\/0\/*).
     */
    const root: string;

    /**
     * Defines in-pack directory where modders alives with trailing slash (e.g. *\/storage\/emulated\/0\/games\/horizon\/packs\/Inner_Core_Test\/innercore\/mods\/*, *\/storage\/emulated\/0\/Android\/data\/com.zheka.horizon\/files\/games\/horizon\/packs\/Inner_Core_Test\/innercore\/mods\/*).
     */
    const moddir: string;

    /**
     * Creates directory by it's home-relative or absolute path, if one of the
     * parent directories doesn't exist, creates them.
     * @param dir path to the new directory
     */
    function mkdir(dir: string): void;

    /**
     * Creates Core Engine working directories.
     * @internal
     */
    function mkworkdirs(): void;

    /**
     * Converts home-relative path to absolute.
     * @param path input path
     * @returns Same string if input string is an absolute path, an absolute 
     * path if input string is a home-relative path.
     */
    function getFullPath(path: string): string;

    /**
     * Verifies if specified home-relative or absolute path exists.
     * @param path path to be verified
     * @returns `true`, if specified path exists, `false` otherwise.
     */
    function isExists(path: string): boolean;

    /**
     * Writes text to the file.
     * @param file home-relative or absolute path to the file
     * @param text text to be written to the file
     * @param add if `true`, appends text to the file, overrides it otherwise
     * @default add: false
     */
    function WriteText(file: string, text: string, add?: boolean): void;

    /**
     * Reads text as-is from file, append `?.trim()` to drop trailing newlines.
     * @param file home-relative or absolute path to the file
     * @returns File contents or `null` if file does not exist or not accessible.
     */
    function ReadText(file: string): Nullable<string>;

    /**
     * Writes bitmap to PNG (lossless and transparent extension) file.
     * @param file home-relative or absolute path to the file
     * @param bitmap {@link android.graphics.Bitmap} to be written to the file
     */
    function WriteImage(file: string, bitmap: android.graphics.Bitmap): void;

    /**
     * Reads high-resolution (as-is) bitmap from file.
     * @param file home-relative or absolute path to the file
     * @returns object of the bitmap that was read from
     * file or null if file does not exist or is not accessible.
     */
    function ReadImage(file: string): Nullable<android.graphics.Bitmap>;

    /**
     * Reads string from asset by it's full name.
     * @param name asset name
     * @returns Asset contents or `null` if asset doesn't exist.
     */
    function ReadTextAsset(name: string): string;

    /**
     * Reads high-resolution (as-is) bitmap from asset by it's full name.
     * @param name asset name
     * @returns Object of the bitmap that was read from
     * asset or null, if asset doesn't exist.
     */
    function ReadImageAsset(name: string): Nullable<android.graphics.Bitmap>;

    /**
     * Reads bytes array from assets.
     * @param name asset name
     * @returns JArray of bytes read from assets or null if asset doesn't exist.
     */
    function ReadBytesAsset(name: string): native.Array<jbyte>;

    /**
     * Lists children directories for the specified path.
     * @param path home-relative or absolute path to the file
     * @returns JArray of {@link java.io.File} instances of listed directories.
     */
    function GetListOfDirs(path: string): java.io.File[];

    /**
     * Lists files in the specified directory.
     * @param path path to directory to look for files in
     * @param ext extension of the files to include to the output
     * @returns JArray of {@link java.io.File} instances that match specified extension.
     */
    function GetListOfFiles(path: string, ext?: string): java.io.File[];

    /**
     * Reads file as `<key>:<value>` pairs.
     * @param dir home-relative or absolute path to the file
     * @param specialSeparator separator between key and value, ":" by default
     * @returns Object containing `<key>:<value>` pairs from file.
     */
    function ReadKeyValueFile(dir: string, specialSeparator?: string): {
        [key: string]: string
    };

    /**
     * Writes `<key>:<value>` pairs to the file.
     * @param dir home-relative or absolute path to the file
     * @param data object to be written to the file as a set of key:value pairs
     * @param specialSeparator separator between key and value, ":" by default
     */
    function WriteKeyValueFile(dir: string, data: object, specialSeparator?: string): void;

    /**
     * Reads JSON file without comments as object.
     * @param dir home-relative or absolute path to the file
     * @returns Object represents JSON value read from JSON file.
     */
    function ReadJSON(dir: string): any;

    /**
     * Writes object to file as JSON.
     * @param dir home-relative or absolute path to the file
     * @param obj object to be written to the file as JSON
     * @param beautify if true, output JSON is beautified with tabs
     */
    function WriteJSON(dir: string, obj: any, beautify: boolean): void;
}