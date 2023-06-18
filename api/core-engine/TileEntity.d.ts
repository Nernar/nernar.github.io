/**
 * TileEntity is a powerful mechanism that allows for creation of interactive blocks
 * such as chests, furnaces, etc.
 */
declare namespace TileEntity {
    /**
     * @internal
     */
    function resetEngine(): void;

    /**
     * Registers block as a TileEntity
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
    function destroyTileEntity(tileEntity: TileEntity, fromDestroyBlock?: boolean, isDropAllowed?: boolean): boolean;

    /**
     * If the block on the specified coordinates is a {@link TileEntity}, destroys
     * it, dropping it's container.
     * @returns `true` if the it was destroyed successfully, `false`
     * otherwise.
     */
    function destroyTileEntityAtCoords(x: number, y: number, z: number, region?: BlockSource): boolean;

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
     * Interface passed to {@link TileEntity.registerPrototype} function.
     */
    interface TileEntityPrototype {
		/**
         * Use ItemContainer that supports multiplayer.
         */
        useNetworkItemContainer?: boolean;
        /**
         * Default data values, will be initially added to {@link TileEntity.data} field.
         */
        defaultValues?: Scriptable,
        /**
         * Called when a {@link TileEntity} is created.
         */
		created?: () => void,

		/**
         * Client TileEntity prototype copy.
         */
        client?: {
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
             * Called when every client ticking.
             * @since 2.0.2b29
             */
            onCheckerTick?: (isInitialized: boolean, isLoaded: boolean, wasLoaded: boolean) => void,
            /**
             * Called every tick on client thread.
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
            /**
              * Any other user-defined methods and properties.
              */
            [key: string]: any
        },

        /**
         * Events that receive packets on the server side.
         */
        events?: {
            /**
             * Example of the server packet event function.
             * 'this.sendResponse' method is only available here.
             */
            [packetName: string]: (packetData: any, packetExtra: any, connectedClient: NetworkClient) => void;
        },

        /**
         * Events of the container on the server side.
         */
        containerEvents?: {
            /**
             * Example of the server container event function.
             */
            [eventName: string]: (container: ItemContainer, window: UI.Window | UI.StandartWindow | UI.StandardWindow | UI.TabbedWindow | null, windowContent: UI.WindowContent | null, eventData: any) => void;
        }

        /**
         * Called when a {@link TileEntity} is initialised in the world.
         */
        init?: () => void,

        /**
         * Called every tick and should be used for all the updates of the {@link TileEntity}.
         */
        tick?: () => void,

        /**
         * Called when player uses some item on a {@link TileEntity}.
         * @returns `true` if the event is handled and should not be propagated to
         * the next handlers. Return `true` if you don't want the user interface
         * to be opened.
         */
        click?: (id: number, count: number, data: number, coords: Callback.ItemUseCoordinates, player: number, extra: ItemExtraData) => boolean | void,

        /**
         * Occurs when a block of the {@link TileEntity} is being destroyed. See
         * {@link Callback.DestroyBlockFunction} for details.
         */
        destroyBlock?: (coords: Callback.ItemUseCoordinates, player: number) => void,

        /**
         * Occurs when the {@link TileEntity} should handle redstone signal. See
         * {@link Callback.RedstoneSignalFunction} for details.
         */
        redstone?: (params: { power: number, signal: number, onLoad: boolean }) => void,

        /**
         * Occurs when a projectile entity hits the {@link TileEntity}. See
         * {@link Callback.ProjectileHitFunction} for details.
         */
        projectileHit?: (coords: Callback.ItemUseCoordinates, target: Callback.ProjectileHitTarget) => void,

        /**
         * Occurs when the {@link TileEntity} is being destroyed.
         * @returns `true` to prevent it.
         * {@link TileEntity} object from destroying (but if the block was destroyed, returning
         * true from this function doesn't replace the missing block with a new one)
         */
        destroy?: () => boolean | void;

        /**
         * Called to get the {@link UI.IWindow} object for the current {@link TileEntity}. The
         * window is then opened within {@link TileEntity.container} when the player clicks it.
		 * @deprecated Client method only.
         */
		getGuiScreen?: () => com.zhekasmirnov.innercore.api.mod.ui.window.IWindow;

		/**
         * Called on server side and returns UI name to open on click.
         */
        getScreenName?: (player: number, coords: Vector) => string;

        /**
         * Called on client side, returns the window to open.
         */
        getScreenByName?: (screenName?: string) => com.zhekasmirnov.innercore.api.mod.ui.window.IWindow;

        /**
         * Called when more liquid is required.
         */
        requireMoreLiquid?: (liquid: string, amount: number) => void;

        /**
         * Any other user-defined methods and properties.
         */
        [key: string]: any;
    }
}

declare interface TileEntity extends TileEntity.TileEntityPrototype {
    /**
     * X coord of the TileEntity in it's dimension.
     */
    readonly x: number,
    /**
     * Y coord of the TileEntity in it's dimension.
     */
    readonly y: number,
    /**
     * Z coord of the TileEntity in it's dimension.
     */
    readonly z: number,
    /**
     * Dimension where the TileEntity is located.
     */
    readonly dimension: number,
    /**
     * Block ID of TileEntity.
     */
    readonly blockID: number,
    /**
     * TileEntity data values object.
     */
    data: Scriptable,
    /**
     * TileEntity's item container.
     */
    container: ItemContainer | UI.Container,
    /**
     * TileEntity's liquid storage.
     */
    liquidStorage: LiquidRegistry.Storage,
    /**
     * `true` if TileEntity is loaded in the world.
     */
    isLoaded: boolean;
    /**
     * `true` if TileEntity was destroyed.
     */
    remove: boolean;
    /**
     * Destroys the TileEntity prototype.
     */
    selfDestroy: () => void;
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
     * BlockSource object to manipulate TileEntity's position in world.
     */
    blockSource: BlockSource;
    /**
     * SyncedNetworkData object of the TileEntity.
     */
    networkData: SyncedNetworkData;
    /**
     * NetworkEntity object of the TileEntity.
     */
    networkEntity: NetworkEntity;
}
