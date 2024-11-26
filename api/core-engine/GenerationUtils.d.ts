/**
 * Module used to simplify generation tasks in mods logic.
 */
declare namespace GenerationUtils {
    /**
     * @param id numeric tile ID
     * @returns `true` if block is solid and light blocking block, `false` otherwise.
     */
    function isTerrainBlock(id: number): boolean;

    /**
     * @param id numeric tile ID
     * @returns `true` if block is transparent, `false` otherwise.
     */
    function isTransparentBlock(id: number): boolean;

    /**
     * @returns `true`, if one can see sky from the specified position, `false`
     * otherwise.
     */
    function canSeeSky(x: number, y: number, z: number): boolean;

    /**
     * Generates random x and z coordinates inside specified chunk.
     * @param cx chunk x coordinate
     * @param cz chunk z coordinate
     */
    function randomXZ(cx: number, cz: number): { x: number, z: number };

    /**
     * Generates random coordinates inside specified chunk.
     * @param cx chunk x coordinate
     * @param cz chunk z coordinate
     * @param lowest lowest possible y coordinate; default is `0`
     * @param highest highest possible y coordinate; default is `128`
     */
    function randomCoords(cx: number, cz: number, lowest?: number, highest?: number): Vector;

    /**
     * Finds limited to the specified y coordinate empty space on the specified
     * x and z coordinates.
     */
    function findSurface(x: number, y: number, z: number): Vector;

    /**
     * Finds limited to `y=128` coordinate empty space on the specified x and z
     * coordinates.
     */
    function findHighSurface(x: number, z: number): Vector;

    /**
     * Finds limited to `y=64` coordinate empty space on the specified x and z
     * coordinates.
     */
    function findLowSurface(x: number, z: number): Vector;

    // /**
    //  * Locked via {@link GenerationUtils.lockInBlock} block, air by default.
    //  */
    // const __lockedReal: Tile;
    // /**
    //  * Changes block to be locked when generating new chunk, unused
    //  * since upgrading to new Inner Core generation.
    //  */
    // function lockInBlock(id: number, data: number, checkerBlock?: number, inverse?: boolean): void;
    // /**
    //  * Locks block at specified location, which are changed via
    //  * {@link GenerationUtils.lockInBlock} call.
    //  */
    // function setLockedBlock(x: number, y: number, z: number): void;

    interface IMinableParams {
        /**
         * Ore block numeric identifier.
         */
        id: number,
        /**
         * Ore block data.
         */
        data: number,
        /**
         * If `true`, no check for stone is performed so the ore may be
         * generated in the air. Use this to debug ore generation in
         * the superflat worlds.
         */
        noStoneCheck?: number
    }

    interface MinableAmountParams extends IMinableParams {
        /**
         * Amount of the ore to be generated, minimum allowed value is `1`.
         * Use at least `6` to be able to find generated ore vein.
         * Note that amount doesn't mean blocks count, it is just an 
         * input value for generation algorithm.
         */
        amount: number
    }

    interface MinableSizeParams extends IMinableParams {
        /**
         * Amount ratio of ore vein per generation chunk.
         * @default 1
         */
        ratio?: number,
        /**
         * Used to calculate amount, using simple formula `size * ratio * 3`.
         * Minimum allowed value of amount is `1`.
         */
        size: number
    }

    type MinableParams = MinableAmountParams | MinableSizeParams;

    /**
     * Generates ore vein on the specified coordinates using specified params.
     * @param params vein generation params
     */
    function genMinable(x: number, y: number, z: number, params: MinableParams): void;

    /**
     * Generates ore vein on the specified coordinates.
     * @param id ore block ID
     * @param data ore block data
     * @param amount ore amount, use at least `6` to be able to find generated
     * ore vein; note that amount doesn't mean blocks count, it is just an 
     * input value for generation algorithm
     * @param noStoneCheck if `true`, no check for stone is performed so the ore 
     * may be generated in the air; use this to debug ore generation in the 
     * superflat worlds
     */
    function generateOre(x: number, y: number, z: number, id: number, data: number, amount: number, noStoneCheck: boolean): void;

    /**
     * Generates ore vein on the specified coordinates with custom whitelist/blacklist.
     * @param id ore block ID
     * @param data ore block data
     * @param amount ore amount, use at least `6` to be able to find generated
     * ore vein; note that amount doesn't mean blocks count, it is just an 
     * input value for generation algorithm
     * @param whitelist if `true`, specified block IDs are used as whitelist for generation
     * (only the IDs from the list can be replaced with ores); if `false`, specified 
     * block IDs are used as a blacklist (only the IDs from the list canNOT be 
     * replaced with ores)
     * @param listOfIds array of block IDs to be used as whitelist or blacklist
     * @since 2.0.1b17
     */
    function generateOreCustom(x: number, y: number, z: number, id: number, data: number, amount: number, whitelist: boolean, listOfIds: number[]): void;

    /**
     * Retrieves perlin noise value at the specified coordinates.
     * @param seed integer random generator seed. If not specified or set to 0, the default
     * constant value is used
     * @param scale noise size, to set the main octave size, use *1 / octave size*
     * @param numOctaves number of octaves, the more octaves you use, the more 
     * detailed is the generated noise. The next octave is two times smaller then 
     * the previous one
     * @since 2.0.1b11
     */
    function getPerlinNoise(x: number, y: number, z: number, seed?: number, scale?: number, numOctaves?: number): number;
}
