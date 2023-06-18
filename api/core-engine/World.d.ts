/**
 * Module that allows to work with current Minecraft world.
 * Most of the methods are client-side, use {@link BlockSource} instead.
 */
declare namespace World {
    /**
     * Setups the module to work properly with the world. Usually called by
     * Core Engine, so you generally shouldn't call it yourself.
     * @param isLoaded whether the world is loaded or not
     * @internal
     */
    function setLoaded(isLoaded: boolean): boolean;

    /**
     * @returns Whether the world is loaded or not.
     */
    function isWorldLoaded(): boolean;

    /**
     * @returns Tick number since the player joined the world.
     */
	function getThreadTime(): number;

    /**
     * Retrieves coordinates relative to the block.
     * @param side block side
     * @returns Relative coordinates.
     * @example
     * Return coordinates of the block above the specified:
     * ```js
     * World.getRelativeCoords(x, y, z, EBlockSide.UP);
     * ```
     */
    function getRelativeCoords(x: number, y: number, z: number, side: number): Vector;

    /**
     * @param side block side
     * @returns Normalized vector for this side.
     */
    function getVectorByBlockSide(side: number): Vector;

	/**
	 * @param side number from 0 to 6 (exclusive)
     * @returns Opposite side to argument.
     */
    function getInverseBlockSide(side: number): number;

    /**
     * @returns `true`, if tile can be replaced (for example, grass (not block) and
     * water can be replaced), `false` otherwise
     */
    function canTileBeReplaced(id: number, data: number): boolean;

    /**
     * @since 2.0.2b27
     */
    function doesVanillaTileHasUI(id: number): boolean;

    /**
     * @since 2.0.2b27
     * @remarks
     * Client only method!
     */
    function setBlockUpdateType(type: number): void;

    /**
     * @since 2.0.2b27
     * @remarks
     * Client only method!
     */
    function setBlockUpdateAllowed(allowed: boolean): void;

    /**
     * Enables "BlockChanged" event for the block ID. Event occurs when either
     * old block or new block is registered using this method.
     * @param id numeric tile ID
     * @param enabled if true, the block will be watched
     */
    function setBlockChangeCallbackEnabled(id: number, enabled: boolean): void;

    /**
     * Enables "BlockChanged" event for specified block IDs and registers
     * callback function for the IDs.
     * @param ids string or numeric tile ID, or an array of string and/or 
     * numeric tile IDs
     * @param callback function that will be called when "BlockChanged" callback 
     * occurs involving one of the blocks. **Warning!** If both old and new 
     * blocks are in the IDs list, callback function will be called twice.
     */
    function registerBlockChangeCallback(ids: number | string | (string | number)[], callback: Callback.BlockChangedFunction): void;

    /**
     * Adds a new generation callback using string hash to generate a unique
     * random seed for the chunk generator.
     * @param callbackName one of the generation callbacks
     * @param callback callback function
     * @param uniqueHashStr if specified, will be used as string hash for seed
     * generation, otherwise default hash string will be used
     * @since 2.0.1b11
     */
    function addGenerationCallback(callbackName: string, callback: Callback.GenerateChunkFunction, uniqueHashStr?: string): void;

    /**
     * Sets block in the world using it's tile ID and data.
     * @param id block tile ID
     * @param data block data
     * @deprecated Consider using {@link World.setBlock} instead.
     */
    function nativeSetBlock(x: number, y: number, z: number, id: number, data: number): void;

    /**
     * @returns Tile ID of the block located on the specified coordinates.
     * @deprecated Consider using {@link World.getBlockID} instead.
     */
    function nativeGetBlockID(x: number, y: number, z: number): number;

    /**
     * @returns Data of the block located on the specified coordinates.
     * @deprecated Consider using {@link World.getBlockData} instead.
     */
    function nativeGetBlockData(x: number, y: number, z: number): number;

    /**
     * Sets block in the world using it's tile ID and data.
     * @param id block tile ID
     * @param data block data
     */
    function setBlock(x: number, y: number, z: number, id: number, data: number): void;

    /**
     * Sets block in the world using specified {@link Tile} object.
     * @param fullTile object containing ID and data of the tile
     */
    function setFullBlock(x: number, y: number, z: number, fullTile: Tile): void;

    /**
     * @returns Tile object containing tile ID and data of the block located.
     * on the specified coordinates
     */
    function getBlock(x: number, y: number, z: number): Tile;

    /**
     * @returns Tile ID of the block located on the specified coordinates.
     */
    function getBlockID(x: number, y: number, z: number): number;

    /**
     * @returns Data of the block located on the specified coordinates.
     */
    function getBlockData(x: number, y: number, z: number): number;

    /**
     * Destroys block on the specified coordinates producing appropriate drop
     * and particles. Do not use for massive tasks due to particles being
     * produced.
     * @param drop whether to provide drop for the block or not
     */
    function destroyBlock(x: number, y: number, z: number, drop?: boolean): void;

    /**
     * @returns Light level on the specified coordinates, from 0 to 15.
     * @remarks
     * Client only method!
     */
    function getLightLevel(x: number, y: number, z: number): number;

    /**
     * @param x chunk coordinate
     * @param z chunk coordinate
     * @returns Whether the chunk with specified coordinates is loaded or not.
     */
    function isChunkLoaded(x: number, z: number): boolean;

    /**
     * @param x block coordinate
     * @param y block coordinate
     * @param z block coordinate
     * @returns Whether the chunk containing specified block coordinates is 
     * loaded or not.
     */
    function isChunkLoadedAt(x: number, y: number, z: number): boolean;

    /**
     * Returns chunk state on specified location, like loaded,
     * unloaded or interrupted.
     */
    function getChunkState(x: number, z: number): number;

    /**
     * Returns chunk state on specified coordinates, like loaded,
     * unloaded or interrupted.
     */
    function getChunkStateAt(x: number, y: number, z: number): number;

    /**
     * @returns Requested {@link TileEntity} located on the specified coordinates
     * or `null` if it doesn't.
     */
    function getTileEntity(x: number, y: number, z: number, region?: BlockSource): Nullable<TileEntity>;

    /**
     * If the block on the specified coordinates is a TileEntity block and is
     * not initialized, initializes it and returns created {@link TileEntity} object.
     * @returns Tile if one was created, `null` otherwise.
     */
    function addTileEntity(x: number, y: number, z: number, region?: BlockSource): Nullable<TileEntity>;

    /**
     * If the block on the specified coordinates is a {@link TileEntity}, destroys
     * it, dropping it's container.
     * @returns `true` if the tile was destroyed successfully, `false` 
     * otherwise.
     */
    function removeTileEntity(x: number, y: number, z: number, region?: BlockSource): boolean;

    /**
	 * @param region BlockSource
     * @returns If the block on the specified coordinates is a {@link TileEntity}, returns
     * it's container, if the block is a {@link NativeTileEntity}, returns it, if 
     * none of above, returns `null`.
     */
    function getContainer(x: number, y: number, z: number, region?: BlockSource): Nullable<NativeTileEntity | UI.Container | ItemContainer>;

    /**
     * @returns Current world's time in ticks.
     */
    function getWorldTime(): number;

    /**
     * Sets current world time.
     * @param time time in ticks
     */
    function setWorldTime(time: number): number;

    /**
     * Sets current time to day or night.
     * @param day if true, sets time to 10000 (day), else to 13000 (night)
     * @deprecated Consider using {@link World.setWorldTime} instead.
     */
    function setDayMode(day: boolean): void;

    /**
     * Sets current time to day or night.
     * @param night if true, sets time to 13000 (night), else to 10000 (day)
     * @deprecated Consider using {@link World.setWorldTime} instead.
     */
    function setNightMode(night: boolean): void;

    /**
     * @returns Current weather object. This value should not be edited, call 
     * {@link World.setWeather} to change current weather.
     */
    function getWeather(): Weather;

    /**
     * Sets current weather in the world.
     * @param weather {@link Weather} object to be used as current weather value
     */
    function setWeather(weather: Nullable<Weather>): void;

    /**
     * @todo
     * @param mode certain modes also working with actors
     * @since 2.0.2b27
     */
    function clip(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, mode?: number): void;

    /**
     * Drops item or block with specified ID, count, data and
     * extra on the specified coordinates. For blocks, be sure
     * to use block ID, not the tile ID.
     * @returns Spawned drop entity ID.
     */
    function drop(x: number, y: number, z: number, id: number, count: number, data: number, extra?: ItemExtraData): number;

    /**
     * Creates an explosion on the specified coordinates.
     * @param power defines how many blocks can the explosion destroy and what
     * blocks can or cannot be destroyed
     * @param fire if true, puts the crater on fire
     */
    function explode(x: number, y: number, z: number, power: number, fire: boolean): void;

    /**
     * Sets biome on the specified coordinates when generating biome map.
     * Should be called only in *GenerateBiomeMap* callback.
     * @param x block x coordinate
     * @param z block z coordinate
     * @param id biome ID to be set on the specified coordinates
     * @since 2.0.1b11
     */
    function setBiomeMap(x: number, z: number, id: number): void;

    /**
     * Gets biome on the specified coordinates when generating biome map.
     * Should be called only in *GenerateBiomeMap* callback.
     * @param x block x coordinate
     * @param z block z coordinate
     * @returns Biome's numeric ID.
     * @since 2.0.1b11
     */
    function getBiomeMap(x: number, z: number): number;

    /**
     * Overrides currently biome on specified coordinates. Consider
     * using {@link World.setBiomeMap} in *GenerateBiomeMap* callback.
     */
    function setBiome(x: number, z: number): void;

    /**
     * @returns Biome ID on the specified coordinates.
     */
    function getBiome(x: number, z: number): number;

    /**
     * @returns Biome name on the specified coordinates.
     */
    function getBiomeName(x: number, z: number): string;

    /**
     * @returns Biome name by specified identifier.
     */
    function getBiomeNameById(biome: number): string;

    /**
     * @returns Biome temperature on specified coordinates.
     * @remarks
     * Client only method!
     */
    function getTemperature(x: number, y: number, z: number): number;

    /**
     * @returns Grass color for specified coordinates, uses android integer
     * color model.
     */
    function getGrassColor(x: number, z: number): number;

    /**
     * Sets grass color on the specified coordinates, uses android-like
     * integer color model.
     * @param color grass color to be set for the specified coordinates
     */
    function setGrassColor(x: number, z: number, color: number): void;

    /**
     * @returns Grass color for specified coordinates, uses rgb color model.
     */
    function getGrassColorRGB(x: number, z: number): Color;

    /**
     * Sets grass color on the specified coordinates, uses rgb color model.
     * @param rgb grass color to be set for the specified coordinates
     */
    function setGrassColorRGB(x: number, z: number, rgb: Color): void;

    /**
     * @returns `true`, if one can see sky from the specified position, `false`
     * otherwise.
	 * @remarks
     * Client only method!
     */
    function canSeeSky(x: number, y: number, z: number): boolean;

    /**
     * Plays standart Minecraft sound on the specified coordinates.
     * @param name sound name
     * @param volume sound volume from 0 to 1
     * @param pitch sound pitch, from 0 to 1, 0.5 is default value
     */
    function playSound(x: number, y: number, z: number, name: string, volume: number, pitch?: number): void;

    /**
     * Plays standart Minecraft sound from the specified entity.
     * @param name sound name
     * @param volume sound volume from 0 to 1
     * @param pitch sound pitch, from 0 to 1, 0.5 is default value
     */
    function playSoundAtEntity(entity: number, name: string, volume: number, pitch?: number): void;

    /**
     * @returns Loaded world directory full path.
     */
    function getWorldDir(): string;

    /**
     * @returns Currently world seed, which is used, for example,
     * in generation callbacks.
     */
    function getSeed(): number;
}
