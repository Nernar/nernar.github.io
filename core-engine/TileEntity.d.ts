/**
 * TileEntity is a powerful mechanism that allows for creation of interactive blocks
 * such as chests, furnaces, etc.
 */
declare namespace TileEntity {
    /**
     * @internal
     */
    const tileEntityPrototypes: {
        [blockId: number]: TileEntityPrototype
    };
    /**
     * @internal
     */
    const tileEntityList: TileEntity[];
    /**
     * @internal
     * @since 2.2.1b106
     */
    const tileEntityCacheMap: {
        [location: string]: TileEntity
    };

    /**
     * Clears active game tile list, maintaining updatable states.
     * @internal
     */
    function resetEngine(): void;

    /**
     * Registers block as a ticking tile entity.
     * @param blockID numeric block ID to be used
     * @param customPrototype a set of defining parameters
     * behavior
     */
    function registerPrototype(blockID: number, customPrototype: TileEntityPrototype): void;

    /**
     * @returns Prototype by it's numeric block ID.
     */
    function getPrototype(blockID: number): TileEntityPrototype;

    /**
     * @param blockID numeric block ID
     * @returns `true` if the specified numeric block ID is a {@link TileEntity}
     * block ID, `false` otherwise.
     */
    function isTileEntityBlock(blockID: number): boolean;

    /**
     * @internal
     */
    function createTileEntityForPrototype(prototype: TileEntityPrototype, addToUpdate?: boolean): TileEntity;

    /**
     * If the block on the specified coordinates is a TileEntity block and is
     * not initialized, initializes it and returns created {@link TileEntity} object.
     * @returns Tile if one was created, `null` otherwise.
     */
    function addTileEntity(x: number, y: number, z: number, region?: BlockSource): Nullable<TileEntity>;

    /**
     * Adding attached to block updatable, which is working like ordinary
     * tile entity, except the fact that it registers in any case.
     */
    function addUpdatableAsTileEntity(updatable: Updatable): void;

    /**
     * @returns A {@link TileEntity} on the specified coordinates or `null` if the block on the
     * coordinates is not it.
     */
    function getTileEntity(x: number, y: number, z: number, region?: BlockSource): Nullable<TileEntity>;

    /**
     * Destroys {@link TileEntity}, dropping it's container.
     * @returns `true` if the it was destroyed successfully, `false`
     * otherwise.
     */
    function destroyTileEntity(tileEntity: TileEntity): boolean;

    /**
     * Destroys {@link TileEntity}, dropping it's container.
     * @returns `true` if the it was destroyed successfully, `false`
     * otherwise.
     * @since 2.2.0b82
     */
    function destroyTileEntity(tileEntity: TileEntity, fromDestroyBlock: boolean): boolean;

    /**
     * Destroys {@link TileEntity}, dropping it's container.
     * @returns `true` if the it was destroyed successfully, `false`
     * otherwise.
     * @since 2.2.0b83
     */
    function destroyTileEntity(tileEntity: TileEntity, fromDestroyBlock: boolean, isDropAllowed: boolean): boolean;

    /**
     * If the block on the specified coordinates is a {@link TileEntity}, destroys
     * it, dropping it's container.
     * @returns `true` if the it was destroyed successfully, `false`
     * otherwise.
     */
    function destroyTileEntityAtCoords(x: number, y: number, z: number, region?: BlockSource, isDropAllowed?: boolean): boolean;

    /**
     * Checks whether the {@link TileEntity} is in the loaded chunk or not.
     * @param tileEntity to be verified
     * @returns `true` if the chunk with TileEntity and some of the surrounding
     * chunks are loaded, `false` otherwise.
     * @remarks
     * The following chunks are verified:
     * ```text
     *  + +
     *   #
     *  + +
     * ```
     * Where "#" is the chunk containing the current TileEntity and "+" are
     * the chunks that are also verified.
     */
    function isTileEntityLoaded(tileEntity: TileEntity): boolean;

    /**
     * @internal
     */
    function checkTileEntityForIndex(index: number): void;

    /**
     * Interface passed to {@link TileEntity.registerPrototype} function
     * as `client` property.
     */
    interface LocalTileEntityPrototype extends Scriptable {
        /**
         * Called when the client copy is created.
         * @since 2.0.2b29
         */
        load?: () => void,
        /**
         * Called on destroying the client copy.
         * @since 2.0.2b29
         */
        unload?: () => void,
        /**
         * Called every tick on client thread; you cannot set
         * tick later if there is no function at all.
         */
        tick?: () => void,

        /**
         * Events that receive packets on the client side.
         */
        events?: {
            /**
             * Example of the client packet event function.
             */
            [packetName: string]: (packetData: any, packetExtra: any) => void;
        },
        /**
         * Events of the container's client copy.
         */
        containerEvents?: {
            /**
             * Example of the client container event function.
             */
            [eventName: string]: (container: ItemContainer, window: UI.Window | UI.StandartWindow | UI.StandardWindow | UI.TabbedWindow | null, windowContent: UI.WindowContent | null, eventData: any) => void;
        }
    }

    /**
     * Interface passed to {@link TileEntity.registerPrototype} function.
     */
    interface TileEntityPrototype extends Scriptable {
		/**
         * Use ItemContainer that supports multiplayer.
         */
        useNetworkItemContainer?: boolean;
        /**
         * Default data values, will be initially added to {@link TileEntity.data} field.
         */
        defaultValues?: Scriptable;
		/**
         * Client tile entity prototype copy.
         */
        client?: LocalTileEntityPrototype;

        /**
         * Events that receive packets on the server side.
         */
        events?: {
            /**
             * Example of the server packet event function.
             * 'this.sendResponse' method is only available here.
             */
            [packetName: string]: (packetData: any, packetExtra: any, connectedClient: NetworkClient) => void;
        };

        /**
         * Events of the container on the server side.
         */
        containerEvents?: {
            /**
             * Example of the server container event function.
             */
            [eventName: string]: (container: ItemContainer, window: UI.Window | UI.StandartWindow | UI.StandardWindow | UI.TabbedWindow | null, windowContent: UI.WindowContent | null, eventData: any) => void;
        };

        /**
         * Called when a {@link TileEntity} is created.
         */
		created?: () => void;
        /**
         * Called when a {@link TileEntity} is initialized in the world.
         */
        init?: () => void;
        /**
         * Called when the client copy is created.
         * @since 2.0.2b29
         */
        load?: () => void;
        /**
         * Called on destroying the client copy.
         * @since 2.0.2b29
         */
        unload?: () => void;

        /**
         * Called every tick and should be used for all the updates of the {@link TileEntity}.
         */
        tick?: () => void;

        /**
         * Called before every tile ticking to remove them.
         * @since 2.0.2b29
         */
        onCheckerTick?: (isInitialized: boolean, isLoaded: boolean, wasLoaded: boolean) => void;

        /**
         * Called when player uses some item on a {@link TileEntity}.
         * @returns `true` if the event is handled and should not be propagated to
         * the next handlers. Return `true` if you don't want the user interface
         * to be opened.
         */
        click?: (id: number, count: number, data: number, coords: Callback.ItemUseCoordinates, player: number, extra: ItemExtraData) => boolean | void;

        /**
         * Occurs when a block of the {@link TileEntity} is being destroyed. See
         * {@link Callback.DestroyBlockFunction} for details.
         */
        destroyBlock?: (coords: Callback.ItemUseCoordinates, player: number) => void;

        /**
         * Occurs when the {@link TileEntity} should handle redstone signal. See
         * {@link Callback.RedstoneSignalFunction} for details.
         */
        redstone?: (params: Callback.RedstoneSignalParams) => void;

        /**
         * Occurs when a projectile entity hits the {@link TileEntity}. See
         * {@link Callback.ProjectileHitFunction} for details.
         */
        projectileHit?: (coords: Callback.ItemUseCoordinates, target: Callback.ProjectileHitTarget) => void;

        /**
         * Occurs when the {@link TileEntity} is being destroyed.
         * @returns `true` to prevent it.
         * {@link TileEntity} object from destroying (but if the block was destroyed, returning
         * true from this function doesn't replace the missing block with a new one)
         */
        destroy?: (fromDestroyBlock: boolean, isDropAllowed: boolean) => boolean | void;

        /**
         * Called to get the {@link UI.IWindow} object for the current {@link TileEntity}. The
         * window is then opened within {@link TileEntity.container} when the player clicks it.
		 * @deprecated Client-side method only.
         */
		getGuiScreen?: () => Nullable<UI.IWindow>;

		/**
         * Called on server side and returns UI name to open on click.
         */
        getScreenName?: (player: number, coords: Vector) => Nullable<string>;

        /**
         * Called on client side, returns the window to open.
         */
        getScreenByName?: (screenName?: string, container?: ItemContainer) => Nullable<UI.IWindow>;

        /**
         * Called when more liquid is required.
         */
        requireMoreLiquid?: (liquid: string, amount: number) => void;

        /**
         * Called when player connects to server.
         * @param client connected player client
         * @since 2.3.1b116-3
         */
        onConnectionPlayer?: (client: NetworkClient) => void;

        /**
         * Called when player disconnects from server.
         * @param client disconnected player client
         * @since 2.3.1b116-3
         */
        onDisconnectionPlayer?: (client: NetworkClient) => void;
    }
}

declare interface TileEntity extends TileEntity.TileEntityPrototype {
    /**
     * X coord of the tile in it's dimension.
     */
    readonly x: number;
    /**
     * Y coord of the tile in it's dimension.
     */
    readonly y: number;
    /**
     * Z coord of the tile in it's dimension.
     */
    readonly z: number;
    /**
     * Dimension where the tile is located.
     */
    readonly dimension: number;
    /**
     * Block ID of tile.
     */
    readonly blockID: number;
    /**
     * BlockSource object to manipulate tile position in world.
     */
    blockSource: BlockSource;
    /**
     * SyncedNetworkData object of the tile.
     */
    readonly networkData: SyncedNetworkData;
    /**
     * Instance of {@link TileEntity.networkEntityType} for the tile.
     */
    readonly networkEntity: NetworkEntity;
    /**
     * NetworkEntityType object of the tile.
     */
    readonly networkEntityType: NetworkEntityType;
    /**
     * @since 2.2.1b92
     */
    readonly networkEntityTypeName: string;
    /**
     * Tile data values object.
     */
    data: Scriptable;
    /**
     * Default data values, will be initially added to {@link TileEntity.data} field.
     */
    defaultValues: Scriptable;
    /**
     * Tile item container.
     */
    container: ItemContainer | UI.Container;
    /**
     * Tile liquid storage.
     */
    liquidStorage: LiquidRegistry.Storage;
    /**
     * `true` if tile is loaded in the world.
     */
    isLoaded: boolean;
    /**
     * `true` if tile has been destroyed.
     */
    remove: boolean;
    /**
     * `true` if tile cannot tick, update functions will
     * not work in that case.
     */
    noupdate: boolean;
    /**
     * Called when a {@link TileEntity} is created.
     */
    created: () => void,
    /**
     * Called when a {@link TileEntity} is initialized in the world.
     */
    init: () => void,
    /**
     * Called when the client copy is created.
     * @since 2.0.2b29
     */
    load: () => void,
    /**
     * Called on destroying the client copy.
     * @since 2.0.2b29
     */
    unload: () => void,
    /**
     * Called every tick to {@link TileEntity.TileEntityPrototype.tick} each
     * tile if {@link TileEntity.noupdate} not active.
     */
    update: () => void,
    /**
     * Called before every tile ticking to remove them.
     * @since 2.0.2b29
     */
    onCheckerTick: (isInitialized: boolean, isLoaded: boolean, wasLoaded: boolean) => void,
    /**
     * Called when player uses some item on a {@link TileEntity}.
     * @returns `true` if the event is handled and should not be propagated to
     * the next handlers. Return `true` if you don't want the user interface
     * to be opened.
     */
    click: (id: number, count: number, data: number, coords: Callback.ItemUseCoordinates, player: number, extra: ItemExtraData) => boolean | void,
    /**
     * Occurs when a block of the {@link TileEntity} is being destroyed. See
     * {@link Callback.DestroyBlockFunction} for details.
     */
    destroyBlock: (coords: Callback.ItemUseCoordinates, player: number) => void,
    /**
     * Occurs when the {@link TileEntity} should handle redstone signal. See
     * {@link Callback.RedstoneSignalFunction} for details.
     */
    redstone: (params: Callback.RedstoneSignalParams) => void,
    /**
     * Occurs when a projectile entity hits the {@link TileEntity}. See
     * {@link Callback.ProjectileHitFunction} for details.
     */
    projectileHit: (coords: Callback.ItemUseCoordinates, target: Callback.ProjectileHitTarget) => void,
    /**
     * Occurs when the {@link TileEntity} is being destroyed.
     * @returns `true` to prevent it.
     * {@link TileEntity} object from destroying (but if the block was destroyed, returning
     * true from this function doesn't replace the missing block with a new one)
     */
    destroy: (fromDestroyBlock: boolean, isDropAllowed: boolean) => boolean | void;
    /**
     * Called to get the {@link UI.IWindow} object for the current {@link TileEntity}. The
     * window is then opened within {@link TileEntity.container} when the player clicks it.
     * @deprecated Client-side method only.
     */
    getGuiScreen: () => Nullable<UI.IWindow>;
    /**
     * Called on client side, returns the window to open.
     */
    getScreenByName: (screenName?: string, container?: ItemContainer) => Nullable<UI.IWindow>;
    /**
     * Emulates click on this tile, calling {@link TileEntity.TileEntityPrototype.click}
     * or opening screen otherwise if window has present.
     * @returns `true` if clicked or screen opened success, `false` otherwise
     */
    onItemClick: (id: number, count: number, data: number, coords: Callback.ItemUseCoordinates, player: number, extra: Nullable<ItemExtraData>) => boolean | void;
    /**
     * Called when more liquid is required.
     */
    requireMoreLiquid: (liquid: string, amount: number) => void;
    /**
     * Sends the packet from server to all clients.
     */
    sendPacket: (name: string, data: object) => void;
    /**
     * Sends packet to specified client.
     * @remarks
     * Availabled only in server-side methods!
     */
    sendResponse: (packetName: string, someData: object) => void;
    /**
     * Destroys the tile prototype.
     */
    selfDestroy: () => void;
}

declare interface LocalTileEntity extends TileEntity.LocalTileEntityPrototype {
    /**
     * X coord of the tile in it's dimension.
     */
    readonly x: number;
    /**
     * Y coord of the tile in it's dimension.
     */
    readonly y: number;
    /**
     * Z coord of the tile in it's dimension.
     */
    readonly z: number;
    /**
     * Dimension where the tile is located.
     */
    readonly dimension: number;
    /**
     * SyncedNetworkData object of the tile.
     */
    readonly networkData: SyncedNetworkData;
    /**
     * Instance of {@link TileEntity.networkEntityType} for the tile.
     */
    readonly networkEntity: NetworkEntity;
    /**
     * `true` if tile has been destroyed.
     */
    remove: boolean;
    /**
     * `true` if tile cannot tick, update functions will
     * not work in that case.
     */
    noupdate: boolean;
    /**
     * Sends the packet from client to server.
     */
    sendPacket: (name: string, data: object) => void;
}
