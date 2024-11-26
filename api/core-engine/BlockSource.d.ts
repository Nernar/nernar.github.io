declare namespace BlockSource {
	interface BlockBreakResult {
		items: ItemInstance[];
		experience: number;
	}
}

/**
 * New class to work with world instead of some methods from {@link World} module.
 */
declare class BlockSource {

	/**
	 * @returns Interface to given dimension by default 
	 * (`null` if given dimension is not loaded and this interface 
	 * was not created yet).
	 */
	static getDefaultForDimension(dimension: number): Nullable<BlockSource>;

	/**
	 * @returns Interface to the dimension where the given entity is 
	 * (`null` if given entity does not exist or the dimension is not loaded 
	 * and interface was not created).
	 */
	static getDefaultForActor(entityUid: number): Nullable<BlockSource>;

	/**
	 * @returns BlockSource for world generation.
	 */
	static getCurrentWorldGenRegion(): Nullable<BlockSource>;

	/**
	 * @returns BlockSource for the current client.
	 * @since 2.1.0b57 (caching since 2.3.1b115)
	 */
	static getCurrentClientRegion(): Nullable<BlockSource>;

	/**
	 * 
	 * @param pointer 
	 */
	static getFromCallbackPointer(pointer: number): Nullable<BlockSource>;

	/**
	 * 
	 * @param pointer 
	 * @since 2.3.1b115
	 */
	static getFromServerCallbackPointer(pointer: number): Nullable<BlockSource>;

	/**
	 * 
	 */
	static resetDefaultBlockSources(): void;

	/**
	 * 
	 */
	getPointer(): number;

	/**
	 * 
	 * @param allowed 
	 */
	setBlockUpdateAllowed(allowed: boolean): void;

	/**
	 * 
	 */
	getBlockUpdateAllowed(): boolean;

	/**
	 * 
	 * @param type 
	 */
	setBlockUpdateType(type: number): void;

	/**
	 * 
	 */
	getBlockUpdateType(): number;

	/**
	 * Whether or not particles must be emitted when destroying
	 * blocks with this source.
	 * @default true
	 * @since 2.2.1b102
	 */
	setDestroyParticlesEnabled(enabled: boolean): void;

	/**
	 * @since 2.2.1b102
	 */
	getDestroyParticlesEnabled(): boolean;

	/**
	 * @returns Block's ID at coords.
	 * @param x X coord of the block
	 * @param y Y coord of the block
	 * @param z Z coord of the block
	 */
	getBlockId(x: number, y: number, z: number): number;

	/**
	 * @returns Block's ID at coords.
	 * @param x X coord of the block
	 * @param y Y coord of the block
	 * @param z Z coord of the block
	 * @since 2.2.1b96
	 */
	getBlockID(x: number, y: number, z: number): number;

	/**
	 * @returns Block's data at coords.
	 * @param x X coord of the block
	 * @param y Y coord of the block
	 * @param z Z coord of the block
	 */
	getBlockData(x: number, y: number, z: number): number;

	/**
	 * @param x X coord of the block
	 * @param y Y coord of the block
	 * @param z Z coord of the block
	 * @returns Object of the block on given coords
	 * or {@link Tile} object in Legacy pack.
	 * @since 2.1.0b59
	 */
	getBlock(x: number, y: number, z: number): BlockState | Tile;

	/**
	 * @returns Object of the extra block on given coords.
	 * @since 2.2.1b95
	 */
	getExtraBlock(x: number, y: number, z: number): BlockState;

	/**
	 * Sets block on coords.
	 * @param id ID of the block to set
	 * @param data data of the block to set
	 */
	setBlock(x: number, y: number, z: number, id: number, data: number): void;

	/**
	 * Sets block on coords.
	 * @param id ID of the block to set
	 * @since 2.2.1b95
	 */
	setBlock(x: number, y: number, z: number, id: number): void;

	/**
	 * Sets block by given {@link BlockState} on coords.
	 */
	setBlock(x: number, y: number, z: number, state: BlockState): void;

	/**
	 * Sets extra block (for example, water inside another blocks),
	 * on given coords by given ID and data.
	 * @since 2.2.1b95
	 */
	setExtraBlock(x: number, y: number, z: number, id: number, data?: number): void;

	/**
	 * Sets extra block (for example, water inside another blocks),
	 * on given coords by given {@link BlockState}.
	 * @since 2.2.1b95
	 */
	setExtraBlock(x: number, y: number, z: number, state: BlockState): void;

	/**
	 * @since 2.2.1b102
	 */
	addToTickingQueue(x: number, y: number, z: number, state: BlockState, delay: number, todo?: number): void;

	/**
	 * @since 2.2.1b102
	 */
	addToTickingQueue(x: number, y: number, z: number, delay: number, todo?: number): void;

	/**
	 * 
     * @since 2.4.0b119
	 */
	getRainLevel(): number;

	/**
	 * 
	 * @param level 
     * @since 2.4.0b119
	 */
	setRainLevel(level: number): void;

	/**
	 * 
     * @since 2.4.0b119
	 */
	getLightningLevel(): number;

	/**
	 * 
	 * @param level 
     * @since 2.4.0b119
	 */
	setLightningLevel(level: number): void;

	/**
	 * Destroys block on coords producing appropriate drop
	 * and particles. Do not use for massive tasks due to particles being 
	 * produced.
	 * @param drop whether to provide drop for the block or not
	 */
	destroyBlock(x: number, y: number, z: number, drop?: boolean): void;

	/**
	 * Destroys block on coords by entity using specified item or without it.
	 * @param allowDrop whether to provide drop for the block or not
	 * @param entityUid entity ID or -1 ID if entity is not specified
	 * @param item tool which broke block
	 * @since 2.2.0b83
	 */
	breakBlock(x: number, y: number, z: number, allowDrop: boolean, entityUid?: number, item?: ItemInstance): void;

	/**
	 * Destroys block on coords by entity using specified item.
	 * @param allowDrop whether to provide drop for the block or not
	 * @param item tool which broke block
	 * @since 2.2.0b83
	 */
	breakBlock(x: number, y: number, z: number, allowDrop: boolean, item: ItemInstance): void;

	/**
	 * Same as breakBlock, but returns object containing drop and experience.
	 * @param entityUid entity ID or -1 ID if entity is not specified
	 * @param item tool which broke block
	 * @since 2.2.0b83
	 */
	breakBlockForJsResult(x: number, y: number, z: number, entityUid?: number, item?: ItemInstance): BlockSource.BlockBreakResult;

	/**
	 * Same as breakBlock, but returns object containing drop and experience.
	 * @param item tool which broke block
	 * @since 2.2.0b83
	 */
	breakBlockForJsResult(x: number, y: number, z: number, item: ItemInstance): BlockSource.BlockBreakResult;

	 /**
	  * Creates an explosion on coords.
	  * @param power defines how many blocks can the explosion destroy and what
	  * blocks can or cannot be destroyed
	  * @param fire if true, puts the crater on fire
	  */
	explode(x: number, y: number, z: number, power: number, fire: boolean): void;

	/**
     * @param mode certain modes also working with actors
	 */
	clip(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, mode: number, output: number[]): number;

	/**
	 * @returns Dimension ID to which the following object belongs.
	 */
	getDimension(): number;

	/**
	 * @returns Interface to the vanilla TileEntity (chest, furnace, etc.) 
	 * on the coords, and null if it's not found.
	 */
	getBlockEntity(x: number, y: number, z: number): Nullable<NativeTileEntity>;

	/**
	 * @param x X coord of the block
	 * @param z Z coord of the block
	 * @returns Biome ID.
	 */
	getBiome(x: number, z: number): number;

	/**
	 * Sets biome ID by coords.
	 * @param biomeID ID of the biome to set
	 */
	setBiome(chunkX: number, chunkZ: number, biomeID: number): void;

	/**
	 * @returns Temperature of the biome on coords.
	 */
	getBiomeTemperatureAt(x: number, y: number, z: number): number;

	/**
	 * @returns Downfall of the biome on coords.
	 * @since 2.2.1b96
	 */
	getBiomeDownfallAt(x: number, y: number, z: number): number;

	/**
	 * @returns Grass color on chunk coords.
	 */
	getGrassColor(x: number, z: number): number;

	/**
	 * @param chunkX X coord of the chunk
	 * @param chunkZ Z coord of the chunk
	 * @returns `true` if chunk is loaded, `false` otherwise.
	 */
	isChunkLoaded(chunkX: number, chunkZ: number): boolean;

	/**
	 * @param x X coord of the position
	 * @param z Z coord of the position
	 * @returns `true` if chunk on the position is loaded, `false` otherwise.
	 */
	isChunkLoadedAt(x: number, z: number): boolean;

	/**
	 * @param chunkX X coord of the chunk
	 * @param chunkZ Z coord of the chunk
	 * @returns Loading state of the chunk by chunk coords.
	 */
	getChunkState(chunkX: number, chunkZ: number): number;

	/**
	 * @param x X coord of the position
	 * @param z Z coord of the position
	 * @returns Loading state of the chunk by coords.
	 */
	getChunkStateAt(x: number, z: number): number;

	/**
     * @returns Light level on the specified coordinates, from 0 to 15.
	 * @since 2.1.0b69
     */
	getLightLevel(x: number, y: number, z: number): number;

	/**
	 * @returns Whether the sky can be seen from coords.
	 */
	canSeeSky(x: number, y: number, z: number): boolean;

	/**
	 * @param type entity type, since 2.3.1b115 could be used
	 * to fetch all entities via `0` or `256`
	 * @returns Iterator of entity IDs in given box,
	 * that are equal to the given type, if blacklist value is `false`,
	 * and all except the entities of the given type, if blacklist value is `true`.
	 */
	fetchEntitiesInAABB(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type?: number, blacklist?: boolean): number[];

	/**
	 * @param namespace entity namespace, e.g. "minecraft"
	 * @param type entity type, e.g. "chicken"
	 * @returns Iterator of entity IDs in given box, that are equal to the given type.
	 * @since 2.3.1b115
	 */
	fetchEntitiesOfTypeInAABB(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, namespace: string, type: string): number[];

	/**
	 * @param type namespaced entity type, e.g. "minecraft:chicken"; if there is
	 * no namespace, default "minecraft" will be used instead, e.g. "chicken"
	 * @returns Iterator of entity IDs in given box, that are equal to the given type.
	 * @since 2.3.1b115
	 */
	fetchEntitiesOfTypeInAABB(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type: string): number[];

	/**
	 * @param type entity type, since 2.3.1b115 could be used
	 * to fetch all entities via `0` or `256`
	 * @returns List of entity IDs in given box,
	 * that are equal to the given type, if blacklist value is `false`,
	 * and all except the entities of the given type, if blacklist value is `true`.
	 */
	listEntitiesInAABB(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type?: number, blacklist?: boolean): number[];

	/**
	 * @param namespace entity namespace, e.g. "minecraft"
	 * @param type entity type, e.g. "chicken"
	 * @returns List of entity IDs in given box, that are equal to the given type.
	 * @since 2.3.1b115
	 */
	listEntitiesOfTypeInAABB(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, namespace: string, type: string): number[];

	/**
	 * @param type namespaced entity type, e.g. "minecraft:chicken"; if there is
	 * no namespace, default "minecraft" will be used instead, e.g. "chicken"
	 * @returns List of entity IDs in given box, that are equal to the given type.
	 * @since 2.3.1b115
	 */
	listEntitiesOfTypeInAABB(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type: string): number[];

	/**
	  * Spawns entity of given numeric or namespaced type on coords.
	  * @param type numeric entity type, e.g. `EEntityType.CHICKEN` or
	  * namespaced type with possible ommitions, e.g. "minecraft:chicken:",
	  * "minecraft:chicken", "chicken" does same
	  * @example
	  * ```ts
	  * Callback.addCallback("ItemUse", (coords: ItemUseCoordinates, item: ItemInstance, block: Tile, isExternal: boolean, player: number) =>
	  * 	BlockSource.getDefaultForActor(player)?.spawnEntity(coords.relative.x, coords.relative.y, coords.relative.z, EEntityType.CHICKEN));
	  * ```
	  */
	spawnEntity(x: number, y: number, z: number, type: number | string): number;

	/**
	  * Spawns entity of given namespace by string type on coords
	  * with optional spawn events data.
	  * @example
	  * ```ts
	  * Callback.addCallback("ItemUse", (coords: ItemUseCoordinates, item: ItemInstance, block: Tile, isExternal: boolean, player: number) =>
	  * 	BlockSource.getDefaultForActor(player)?.spawnEntity(coords.relative.x, coords.relative.y, coords.relative.z, "minecraft", "chicken", ""));
	  * ```
	  */
	spawnEntity(x: number, y: number, z: number, namespace: string, type: string, initData?: string): number;

	/**
	 * Creates dropped item and returns entity ID.
	 * @param id ID of the item to drop
	 * @param count count of the item to drop
	 * @param data data of the item to drop
	 * @param extra extra of the item to drop
	 * @returns Drop entity ID.
	 */
	spawnDroppedItem(x: number, y: number, z: number, id: number, count: number, data: number, extra?: ItemExtraData): number;

	/**
	  * Spawns experience orbs on coords.
	  * @param amount experience amount
	  */
	spawnExpOrbs(x: number, y: number, z: number, amount: number): void;

}
