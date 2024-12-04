/**
 * Defines some useful methods for debugging.
 */
declare namespace Debug {

    /**
     * @returns Current system time in milliseconds.
     */
    function sysTime(): number;

    /**
     * Spawns vanilla debug particle on the specified coordinates.
     * @param id particle type ID, should be one of the {@link EParticleType}
     * @param vx x velocity
     * @param vy y velocity
     * @param vz y velocity
     * @param data additional particles data
     */
    function addParticle(id: number, x: number, y: number, z: number, vx: number, vy: number, vz: number, data: number): void;

    /**
     * Writes general debug message (in green) to local player in chat.
     * @param message message to be displayed
     */
    function message(message: any): void;

    /**
     * Writes warning debug message (in gold) to local player in chat.
     * @param message message to be displayed
     */
    function warning(message: any): void;

    /**
     * Writes error debug message (in red) to local player in chat.
     * @param message message to be displayed
     */
    function error(message: any): void;

    /**
     * Writes several comma-separated values to local player in chat as
     * a general debug message, serializing javascript objects if possible.
     * @param args messages to be displayed
     * @since 2.0.5b44
     */
    function m(...args: any[]): void;

    /**
     * Displays an {@link android.app.AlertDialog} with given title and bitmap.
     * @param bitmap android.graphics.Bitmap object of the bitmap to be 
     * displayed
     * @param title title of the AlertDialog
     */
    function bitmap(bitmap: android.graphics.Bitmap, title?: any): void;

    /**
     * Writes several values in JSON format to the selectable
     * alert window text view, serializing javascript objects if possible.
     * @param args messages to be displayed
     * @since 2.0.5b44
     */
    function big(...args: any[]): void;

}
