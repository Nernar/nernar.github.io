declare namespace LiquidRegistry {
    /**
     * @internal
     */
    const liquids: { [key: string]: LiquidData };
    function registerLiquid(key: string, name?: string, uiTextures?: string[], modelTextures?: string[]): void;
    function getLiquidData(key: string): LiquidData;
    function isExists(key: string): boolean;
    function getLiquidName(key: string): string;
    function getLiquidUITexture(key: string, width: number, height: number): string;
    function getLiquidUIBitmap(key: string, width: number, height: number): android.graphics.Bitmap;
    /**
     * @since 2.2.1b102
     */
    function registerBlock(liquid: string, blockId: number, isDynamic: boolean): void;
    function registerItem(liquid: string, empty: { id: number, data: number }, full: { id: number, data: number }): void;
    function getEmptyItem(id: number, data: number): { id: number, data: number, liquid: string };
    function getItemLiquid(id: number, data: number): string;
    function getFullItem(id: number, data: number, liquid: string): { id: number, data: number };

    interface LiquidData {
        key: string,
        name: string,
        uiTextures: string[],
        addUITexture(name: string): void,
        modelTextures: string[],
        addModelTexture(name: string): void,
        blockId: number,
        /**
         * @since 2.2.1b103
         */
        staticBlockId: number,
        uiCache: object
    }

    class Storage {
        /**
         * @internal
         */
        readonly liquidAmounts: { [key: string]: number };
        /**
         * @internal
         */
        readonly liquidLimits: { [key: string]: number };
        readonly tileEntity: TileEntity;
        constructor(tileEntity: TileEntity);
        setParent(tileEntity: TileEntity): void;
        getParent(): TileEntity;
        hasDataFor(liquid: string): boolean;
        setLimit(liquid: Nullable<string>, limit: number): void;
        getLimit(liquid: string): number;
        getAmount(liquid: string): number;
        getRelativeAmount(liquid: string): number;
        /**
         * @internal
         */
        _setContainerScale(container: UI.Container, scale: string, liquid: string, val: number): void;
        updateUiScale(scale: string, liquid: string, container?: UI.Container): void;
        setAmount(liquid: string, amount: number): void;
        getLiquidStored(): Nullable<string>;
        isFull(liquid?: string): boolean;
        isEmpty(liquid?: string): boolean;
        addLiquid(liquid: string, amount: number, onlyFullAmount?: boolean): number;
        getLiquid(liquid: string, amount: number, onlyFullAmount?: boolean): number;
    }

    /**
     * @since 2.2.1b102
     * @internal
     */
    const LiquidByBlock: { [blockId: number]: string };

    /**
     * @returns String ID of a liquid for given block,
     * or `null`, if a block with given ID is not a liquid.
     * @since 2.2.1b102
     */
    function getLiquidByBlock(id: number): Nullable<string>;

    /**
     * @returns Numeric ID of the liquid block by given {@link LiquidRegistry} string ID.
     * @remarks
     * This function will return `0` if no liquid with given string ID exists.
     * @since 2.2.1b102
     */
    function getBlockByLiquid(liquidId: string): number;

    /**
     * @param isStatic static liquid block ID will be returned, otherwise
     * the dynamic block ID will be returned
     * @returns Numeric ID of the liquid block by given {@link LiquidRegistry} string ID.
     * @remarks
     * This function will return `0` if no liquid with given string ID exists.
     * @since 2.2.1b103
     */
    function getBlockByLiquid(liquidId: string, isStatic: boolean): number;
}
