/**
 * Module used to create and manipulate blocks. The difference between terms 
 * "block" and "tile" is in it's usage: blocks are used in the inventory, 
 * tiles are placed in the world and have different IDs for some vanilla blocks. 
 * Use {@link Block.convertBlockToItemId} and {@link Block.convertItemToBlockId}
 * to perform conversion between block and it item variation.
 */
declare namespace Block {
	/**
	 * @param id string ID of the block
	 * @returns Block numeric ID by it's string ID or just returns it's numeric ID 
	 * if input was a numeric ID.
	 */
	function getNumericId(id: string | number): number;

	/**
	 * Creates new block using specified params.
	 * @param nameID string ID of the block. You should register it via 
	 * {@link IDRegistry.genBlockID} call first
	 * @param defineData array containing all variations of the block. Each 
	 * variation corresponds to block data value, data values are assigned 
	 * according to variations order
	 * @param blockType {@link Block.SpecialType|SpecialType} object, either java-object returned by
	 * {@link Block.createSpecialType} or js-object with the required properties, 
	 * you can also pass special type name, if the type was previously 
	 * registered
	 */
	function createBlock(nameID: string, defineData: BlockVariation[], blockType?: SpecialType | string): void;

	/**
	 * Creates new block using specified params, creating four variations for 
	 * each of the specified variations to be able to place it facing flayer 
	 * with the front side and defines the appropriate behavior. Useful for 
	 * different machines and mechanisms.
	 * @param nameID string ID of the block. You should register it via 
	 * {@link IDRegistry.genBlockID} call first
	 * @param defineData array containing all variations of the block. Each 
	 * variation corresponds to four block data values, data values are assigned 
	 * according to variations order
	 * @param blockType {@link Block.SpecialType|SpecialType} object, either java-object returned by
	 * {@link Block.createSpecialType} or js-object with the required properties, 
	 * you can also pass special type name, if the type was previously 
	 * registered
	 */
	function createBlockWithRotation(nameID: string, defineData: BlockVariation[], blockType?: SpecialType | string): void;

	/**
	 * Creates new liquid block using specified params.
	 * @param nameID string ID of the block. You should register it via
	 * {@link IDRegistry.genBlockID} call first
	 * @param defineData object containing all needed params to describe your custom liquid block.
	 * There you can specify custom name IDs for static and dynamic liquid blocks separately,
	 * and if you do this, you have to register those name IDs
	 * via {@link IDRegistry.genBlockID} before using them
	 * @param blockType {@link Block.SpecialType|SpecialType} object, either java-object returned by
	 * {@link Block.createSpecialType} or js-object with the required properties,
	 * you can also pass special type name, if the type was previously registered
	 * @since 2.2.1b102
	 */
	function createLiquidBlock(nameID: string, defineData: LiquidDescriptor, blockType?: SpecialType | string): void;

	/**
	 * @param id numeric block ID
	 * @returns `true`, if the specified block ID is a vanilla block.
	 */
	function isNativeTile(id: number): boolean;

	/**
	 * Converts tile ID to the block ID.
	 * @param id numeric tile ID
	 * @returns Numeric block ID corresponding to the given tile ID.
	 */
	function convertBlockToItemId(id: number): number;

	/**
	 * Converts block ID to the tile ID.
	 * @param id numeric tile ID
	 * @returns Numeric tile ID corresponding to the given block ID.
	 */
	function convertItemToBlockId(id: number): number;

	/**
	 * Same as {@link Block.registerDropFunction} but accepts only numeric 
	 * tile ID as the first param.
	 */
	function registerDropFunctionForID(numericID: number, dropFunc: DropFunction, level?: number): boolean;

	/**
	 * Registers function used by Core Engine to determine block drop for the 
	 * specified block ID.
	 * @param nameID tile string or numeric ID
	 * @param dropFunc function to be called to determine what will be dropped 
	 * when the block is broken
	 * @param level if level is specified and is not 0, digging level of the
	 * block is additionally set
	 * @returns `true`, if specified string or numeric ID exists and the function
	 * was registered correctly, `false` otherwise.
	 */
	function registerDropFunction(nameID: string | number, dropFunc: DropFunction, level?: number): boolean;

	/**
	 * Same as {@link Block.registerPopResourcesFunction} but accepts only numeric 
	 * tile ID as the first param.
	 */
	function registerPopResourcesFunctionForID(numericID: number, func: PopResourcesFunction): boolean;

	/**
	 * Registered function used by Core Engine to determine block drop for the
	 * specified block ID.
	 * @param nameID tile string or numeric ID
	 * @param func function to be called when a block in the world is broken by
	 * environment (explosions, pistons, etc.)
	 * @returns `true`, if specified string or numeric ID exists and the function
	 * was registered correctly, `false` otherwise.
	 */
	function registerPopResourcesFunction(nameID: string | number, func: PopResourcesFunction): boolean;

	/**
	 * Same as {@link Block.setDestroyLevel} but accepts only numeric 
	 * tile ID as the first param.
	 */
	function setDestroyLevelForID(id: number, level: number, resetData?: boolean): void;

	/**
	 * Registers a default destroy function for the specified block, considering
	 * it's digging level.
	 * @param nameID tile string ID
	 * @param level digging level of the block
	 * @param resetData if true, the block is dropped with data equals to 0
	 */
	function setDestroyLevel(nameID: string | number, level: number, resetData?: boolean): void;

	/**
	 * Sets destroy time for the block with specified ID.
	 * @param nameID string or numeric block ID
	 * @param time destroy time for the block, in ticks
	 */
	function setDestroyTime(nameID: string | number, time: number): void;

	/**
	 * @param numericID numeric block ID
	 * @returns `true`, if block is solid, `false` otherwise.
	 */
	function isSolid(numericID: number): boolean;

	/**
	 * @param numericID numeric block ID
	 * @returns Destroy time of the block, in ticks.
	 */
	function getDestroyTime(numericID: number): number;

	/**
	 * @param numericID numeric block ID
	 * @returns Explosion resistance of the block.
	 */
	function getExplosionResistance(numericID: number): number;

	/**
	 * @param numericID numeric block ID
	 * @returns Friction of the block.
	 */
	function getFriction(numericID: number): number;

	/**
	 * @param numericID numeric block ID
	 * @returns Translucency of the block.
	 */
	function getTranslucency(numericID: number): number;

	/**
	 * @param numericID numeric block ID
	 * @returns Light level, emitted by block, from 0 to 15.
	 */
	function getLightLevel(numericID: number): number;

	/**
	 * @param numericID numeric block ID
	 * @returns Light opacity of the block, from 0 to 15.
	 */
	function getLightOpacity(numericID: number): number;

	/**
	 * @param numericID numeric block ID
	 * @returns Render layer of the block.
	 */
	function getRenderLayer(numericID: number): number;

	/**
	 * @param numericID numeric block ID
	 * @returns Render type of the block.
	 */
	function getRenderType(numericID: number): number;

	/**
	 * Temporarily sets destroy time for block, saving the old value for the 
	 * further usage.
	 * @param numericID numeric block ID
	 * @param time new destroy time in ticks
	 */
	function setTempDestroyTime(numericID: number, time: number): void;

	/**
	 * Registers material and digging level for the specified block.
	 * @param nameID block numeric or string ID
	 * @param material material name
	 * @param level block's digging level
	 * @returns `true` if specified string or numeric ID exists, `false` otherwise.
	 */
	function setBlockMaterial(nameID: string | number, material: string, level: number): boolean;

	/**
	 * Makes block accept redstone signal.
	 * @param nameID block numeric or string ID
	 * @param data block data, currently not used
	 * @param isRedstone if true, the redstone changes at the block will notify
	 * the "RedstoneSignal" callback
	 * @deprecated Use {@link Block.setupAsRedstoneReceiver} and 
	 * {@link Block.setupAsRedstoneEmitter} instead.
	 */
	function setRedstoneTile(nameID: string | number, data: number, isRedstone: boolean): void;

	/**
	 * Gets drop for the specified block. Used mostly by Core Engine's 
	 * {@link ToolAPI}, though, can be useful in the mods, too.
	 * @param block block info
	 * @param item item that was (or is going to be) used to break the block
	 * @param coords coordinates where the block was (or is going to be) broken 
	 * @returns Block drop, the array of arrays, each containing three values: 
	 * ID, count and data respectively.
	 */
	function getBlockDropViaItem(block: Tile, item: ItemInstance, coords: Vector, region: BlockSource): ItemInstanceArray[];

	/**
	 * Same as {@link Block.registerPlaceFunction} but accepts only numeric 
	 * tile ID as the first param.
	 */
	function registerPlaceFunctionForID(block: number, func: PlaceFunction): void;

	/**
	 * Registers function to be called when the block is placed in the world.
	 * @param nameID block numeric or string ID
	 * @param func function to be called when the block is placed in the world
	 */
	function registerPlaceFunction(nameID: string | number, func: PlaceFunction): void;

	/**
	 * Sets block box shape.
	 * @param id block numeric ID
	 * @param pos1 block lower corner position, in voxels (1/16 of the block)
	 * @param pos2 block upper conner position, in voxels (1/16 of the block)
	 * @param data block optional data
	 */
	function setBlockShape(id: number, pos1: Vector, pos2: Vector, data?: number): void;

	/**
	 * Same as {@link Block.setBlockShape}, but accepts coordinates as scalar 
	 * params, not objects.
	 * @param id block numeric ID
	 * @param data block data
	 */
	function setShape(id: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, data?: number): void;

	/**
	 * Creates a new special type using specified params and registers it by 
	 * name.
	 * @param description special type properties
	 * @param nameKey string name to register the special type
	 * @returns Special type name.
	 */
	function createSpecialType(description: SpecialType, nameKey?: string): string;

	/**
	 * @deprecated Better performance should be inherited by manually
	 * manipulation with properties and {@link Block.SpecialType|SpecialType}.
	 */
	function setPrototype(nameID: string | number, Prototype: any): number;

	/**
	 * @param id numeric block ID
	 * @returns Color specified block is displayed on the vanilla maps.
	 */
	function getMapColor(id: number): number;

	/**
	 * Makes block invoke callback randomly depending on game speed.
	 * @param id block ID to register for random ticks
	 * @param callback function to be called on random block tick
	 */
	function setRandomTickCallback(id: number, callback: RandomTickFunction): void;

	/**
	 * Makes block invoke callback randomly depending on game speed. Occurs more 
	 * often then {@link Block.setRandomTickCallback} and only if the block is not
	 * far away from player.
	 * @param id block ID to register
	 * @param callback function to be called 
	 */
	function setAnimateTickCallback(id: number, callback: AnimateTickFunction): void;

	/**
	 * Makes block receive redstone signals via "RedstoneSignal" callback.
	 * @param nameID block numeric or string ID
	 * @param connectToRedstone if true, redstone wires will connect to the block
	 * @since 2.0.2b23
	 */
	function setupAsRedstoneReceiver(nameID: number | string, connectToRedstone: boolean): void;

	/**
	 * Makes block emit redstone signal.
	 * @param nameID block numeric or string ID
	 * @param connectToRedstone if true, redstone wires will connect to the block
	 * @since 2.0.2b23
	 */
	function setupAsRedstoneEmitter(nameID: number | string, connectToRedstone: boolean): void;

	/**
	 * Removes all the redstone functionality from the block.
	 * @param nameID block numeric or string ID
	 * @since 2.0.2b23
	 */
	function setupAsNonRedstoneTile(nameID: number | string): void;

	/**
	 * Registers function on neighbour blocks updates.
	 * @param nameID tile string or numeric ID
	 * @param func function to be called when neighbour block updates
	 * @returns `true`, if the function was registered correctly, `false` otherwise.
	 * @since 2.0.2b26
	 */
	function registerNeighbourChangeFunction(nameID: string | number, func: NeighbourChangeFunction): boolean;

	/**
	 * Same as {@link Block.registerNeighbourChangeFunction} but accepts only numeric
	 * tile ID as the first param.
	 * @since 2.0.2b26
	 */
	function registerNeighbourChangeFunctionForID(id: number, func: NeighbourChangeFunction): boolean;

	/**
	 * Registers function on entity being inside the block. Can be used to create portals.
	 * @param nameID tile string or numeric ID
	 * @param func function to be called when entity is inside the block
	 * @returns `true`, if the function was registered correctly, `false` otherwise.
	 * @since 2.0.2b26
	 */
	function registerEntityInsideFunction(nameID: string | number, func: EntityInsideFunction): boolean

	/**
	 * Same as {@link Block.registerEntityInsideFunction} but accepts only numeric
	 * tile ID as the first param.
	 * @since 2.0.2b26
	 */
	function registerEntityInsideFunctionForID(numericID: number, func: EntityInsideFunction): boolean

	/**
	 * Registers function on entity step on the block.
	 * @param numericID tile string or numeric ID
	 * @param func function to be called when entity step on the block
	 * @returns `true`, if the function was registered correctly, `false` otherwise.
	 * @since 2.0.2b26
	 */
	function registerEntityStepOnFunction(numericID: string | number, func: EntityStepOnFunction): boolean;

	/**
	 * Same as {@link Block.registerEntityStepOnFunction} but accepts only numeric
	 * tile ID as the first param.
	 * @since 2.0.2b26
	 */
	function registerEntityStepOnFunctionForID(id: number, func: EntityStepOnFunction): boolean;

	/**
	 * Defines custom behavior when the player clicks on the block with definite ID.
	 * @param nameId block's numeric or string ID
	 * @param func function that will be called when the player clicks the block with given ID
	 * @since 2.2.1b104
	 */
	function registerClickFunction(nameId: string | number, func: ClickFunction): void;

	/**
	 * Same as {@link Block.registerClickFunction}, but only numeric block ID can be passed.
	 * @since 2.2.1b104
	 */
	function registerClickFunctionForID(id: number, func: ClickFunction): void;

	/**
	 * @returns Whether the block of given ID can contain liquid inside.
	 */
	function canContainLiquid(id: number): boolean;

	/**
	 * @returns Whether the block of given ID can be an extra block 
	 * (it's the block that can be set inside of another blocks, for ex. water and other liquids).
	 */
	function canBeExtraBlock(id: number): boolean;

	type ColorSource = "grass" | "leaves" | "water";

	type Sound = "normal"
		| "gravel"
		| "wood"
		| "grass"
		| "metal"
		| "stone"
		| "cloth"
		| "glass"
		| "sand"
		| "snow"
		| "ladder"
		| "anvil"
		| "slime"
		| "silent"
		| "itemframe"
		| "turtle_egg"
		| "bamboo"
		| "bamboo_sapling"
		| "lantern"
		| "scaffolding"
		| "sweet_berry_bush"
		| "default";

	/**
	 * Special types are used to set properties to the block. Unlike items, 
	 * blocks properties are defined using special types, due to old Inner 
	 * Core's block IDs limitations.
	 */
	interface SpecialType {
		/**
		 * Unique string identifier of the SpecialType.
		 */
		name?: string,
		/**
		 * Vanilla block ID to inherit some of the properties.
		 * @default 0
		 */
		base?: number,
		/**
		 * Block material constant to be inherited.
		 * @default 3
		 */
		material?: number,
		/**
		 * If `true`, the block is not transparent.
		 * @default false
		 */
		solid?: boolean,
		/**
		 * If `true`, all block faces are rendered, otherwise back faces are not
		 * rendered, like for glass.
		 * @default false
		 */
		renderallfaces?: boolean,
		/**
		 * Sets render type of the block. Default is full block, use other 
		 * values to change block's shape.
		 * @default 0
		 */
		rendertype?: number,
		/**
		 * Specifies the layer that is used to render the block.
		 * @default 4
		 */
		renderlayer?: number,
		/**
		 * If non-zero value is used, the block emits light of that value. 
		 * Default is no lighting, use values from 1 to 15 to set light level.
		 * @default 0
		 */
		lightlevel?: number,
		/**
		 * Specifies how opaque the block is. Default is transparent, use values 
		 * from 1 to 15 to make the block opaque.
		 * @default 0
		 */
		lightopacity?: number,
		/**
		 * Specifies how block resists to the explosions.
		 * @default 3
		 */
		explosionres?: number,
		/**
		 * Specifies how player walks on this block. The higher the friction is,
		 * the more difficult it is to change speed and direction.
		 * @default 0.6000000238418579
		 */
		friction?: number,
		/**
		 * Specifies the time required to destroy the block, in ticks.
		 */
		destroytime?: number,
		/**
		 * If non-zero value is used, the shadows will be rendered on the block.
		 * Default is zero, allows float values from 0 to 1.
		 * @default 0
		 */
		translucency?: number,
		/**
		 * Block color when displayed on the vanilla maps.
		 * @since 2.0.2b23
		 */
		mapcolor?: number,
		/**
		 * Makes block use biome color source when displayed on the vanilla maps.
		 * @since 2.1.0b56
		 */
		color_source?: ColorSource,
		/**
		 * Specifies sounds of the block, one of {@link Sound}.
		 * @since 2.0.2b25
		 */
		sound?: Sound,
		/**
		 * Whether or not block may filled by water bucket or
		 * other custom fillable liquids.
		 * @default false
		 * @since 2.2.1b95
		 */
		can_contain_liquid?: boolean,
		/**
		 * Whether or not block may overlay different block,
		 * like water overlapping fillable blocks.
		 * @default false
		 * @since 2.2.1b95
		 */
		can_be_extra_block?: boolean
	}

	/**
	 * Object used to represent single block variation.
	 */
	interface BlockVariation {
		/**
		 * Variation name, displayed as item name everywhere.
		 * @default "Unknown Block"
		 */
		name?: string,
		/**
		 * Variation textures, array containing pairs of texture name and data.
		 * Texture file should be located in items-opaque folder and it's name
		 * should be in the format: `"name_data"`, e.g. if the file name is 
		 * `"ingot_copper_0"`, you should specify an array `["ingot_copper", 0]`.
		 * @remarks
		 * There should be from one to six texture pairs in the array,
		 * if less then six variations are specified, the last texture is used
		 * for missing textures. The sides go in the following order:
		 * ```js 
		 * texture: [
		 * 	["name1", index1], // bottom (Y: -1)
		 * 	["name2", index2], // top (Y: +1)
		 * 	["name3", index3], // back (X: -1)
		 * 	["name4", index4], // front (X: +1)
		 * 	["name5", index5], // left (Z: -1)
		 * 	["name6", index6]  // right (Z: +1)
		 * ]
		 * ```
		 */
		texture: [string, number][],
		/**
		 * If `true`, block variation will be added to creative inventory.
		 * @default false
		 */
		inCreative?: boolean
	}

	/**
	 * Object to specify needed params for custom liquid block.
	 */
	interface LiquidDescriptor {
		/**
		 * Name of the block to be displayed.
		 */
		name: string,
		/**
		 * Delay between liquid spreading steps in ticks.
		 * @default 10
		 */
		tickDelay?: number,
		/**
		 * True if the liquid will be renewable, as water.
		 * @default false
		 * @since 2.2.1b103
		 */
		isRenewable?: boolean,
		/**
		 * Object to describe static liquid block
		 * texture, and name ID additionally.
		 */
		still: {
			/**
			 * Optional, name ID for static liquid block.
			 * @default "nameId_still"
			 */
			id?: string,
			/**
			 * For static liquid block,
			 * textures must be of standard block texture format.
			 */
			texture: [string, number]
		},
		/**
		 * Object to describe dynamic liquid block
		 * texture, and name ID additionally.
		 */
		flowing: {
			/**
			 * Optional, name ID for dynamic liquid block.
			 * @default "nameId"
			 */
			id?: string,
			/**
			 * Unlike static liquid blocks,
			 * for dynamic ones, texture must look like
			 * `"texture.liquid.png"` (with no index).
			 */
			texture: [string, number]
		},
		/**
		 * Optional section, if added, this will create fully
		 * functional (including dispensers) bucket items.
		 * @since 2.2.1b103
		 */
		bucket?: {
			/**
			 * Optional, name ID for bucket item.
			 * @default "nameId_bucket"
			 */
			id?: string,
			texture: { name: string, meta?: number }
		},
		/**
		 * Whether to add liquid block to creative inventory.
		 * @default false
		 */
		inCreative?: boolean,
		uiTextures?: string,
		modelTextures?: string
	}

	/**
	 * Function used to determine block drop.
	 * @param blockCoords coordinates where the block is destroyed and side from
	 * where it is destroyed
	 * @param blockID numeric tile ID
	 * @param blockData block data value
	 * @param diggingLevel level of the tool the block was dug with
	 * @param enchant enchant data of the tool held in player's hand
	 * @param item item stack held in player's hand
	 * @param region BlockSource object
	 * @returns Block drop, the array of arrays, each containing three or four values: 
	 * ID, count, data and extra respectively.
	 */
	interface DropFunction {
		(blockCoords: Callback.ItemUseCoordinates, blockID: number, blockData: number, diggingLevel: number, enchant: ToolAPI.EnchantData, item: ItemInstance, region: BlockSource): ItemInstanceArray[]
	}

	interface EntityInsideFunction {
		(blockCoords: Vector, block: Tile, entity: number): void
	}

	interface EntityStepOnFunction {
		(coords: Vector, block: Tile, entity: number): void
	}

	/**
	 * Function used to determine when block is broken by
	 * environment (explosions, pistons, etc.).
	 * @param blockCoords coordinates where the block is destroyed and side from
	 * where it is destroyed
	 * @param block information about block that is broken
	 * @param region BlockSource object
	 * @param i unknown parameter, supposed to always be zero
	 */
	interface PopResourcesFunction {
		(blockCoords: Vector, block: Tile, region: BlockSource, explosionRadius: number, i: number): void
	}

	/**
	 * Function used to determine when block is placed in the world.
	 * @param coords set of all coordinate values that can be useful to write 
	 * custom use logics
	 * @param item item that was in the player's hand when he touched the block
	 * @param block block that was touched
	 * @param player Player unique ID
	 * @param region BlockSource object
	 * @returns Coordinates where to actually place the block, or void for 
	 * default placement.
	 */
	interface PlaceFunction {
		(coords: Callback.ItemUseCoordinates, item: ItemInstance, block: Tile, player: number, region: BlockSource): Vector | void
	}

	/**
	 * Function used to track random block ticks.
	 * @param x x coordinate of the block that ticked
	 * @param y y coordinate of the block that ticked
	 * @param z z coordinate of the block that ticked
	 * @param id block ID
	 * @param data block data
	 * @param region BlockSource object
	 */
	interface RandomTickFunction {
		(x: number, y: number, z: number, id: number, data: number, region: BlockSource): void
	}

	/**
	 * Function used to track random block animation ticks.
	 * @param x x coordinate of the block that should be updated
	 * @param y y coordinate of the block that should be updated
	 * @param z z coordinate of the block that should be updated
	 * @param id block ID
	 * @param data block data
	 */
	interface AnimateTickFunction {
		(x: number, y: number, z: number, id: number, data: number): void
	}

	/**
	 * Function used to check block's neighbours changes.
	 * @param coords coords vector of the block
	 * @param block Tile object of the block
	 * @param changedCoords coords vector of the neighbour block that was changed
	 * @param region BlockSource object
	 */
	interface NeighbourChangeFunction {
		(coords: Vector, block: Tile, changedCoords: Vector, region: BlockSource): void
	}

	/**
	 * Function used to define how the block will behave when the player clicks on it.
	 * @param coords set of all coordinate values that can be useful to write 
	 * custom logics on click
	 * @param item item that was in the player's hand when he touched the block
	 * @param block block that was touched
	 * @param player unique ID of the player entity
	 */
	interface ClickFunction {
		(coords: Callback.ItemUseCoordinates, item: ItemInstance, block: Tile, player: number): void;
	}

	/**
	 * @returns Drop function of the block with given numeric ID.
	 */
	function getDropFunction(id: number): Block.DropFunction;

	/**
	 * @returns Place function of the block with given numeric ID,
	 * or undefined if it was not specified.
	 */
	function getPlaceFunc(id: number): Block.PlaceFunction;

	/**
	 * @returns Given block's material numeric ID.
	 * @since 2.2.1b100
	 */
	function getMaterial(id: number): number;

	function setBlockChangeCallbackEnabled(id: number, enabled: boolean): void;

	function setEntityInsideCallbackEnabled(id: number, enabled: boolean): void;

	function setEntityStepOnCallbackEnabled(id: number, enabled: boolean): void;

	function setNeighbourChangeCallbackEnabled(id: number, enabled: boolean): void;

	function setRedstoneConnector(id: number, data: number, redstone: boolean): void;

	function setRedstoneEmitter(id: number, data: number, redstone: boolean): void;

	interface BlockAtlasTextureCoords {
		u1: number, v1: number, u2: number, v2: number;
	}

	function getBlockAtlasTextureCoords(str: string, int: number): BlockAtlasTextureCoords;

}
