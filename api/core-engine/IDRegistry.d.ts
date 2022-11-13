/**
 * Module used to manage item and block IDs. Items and blocks have the same 
 * underlying nature, so their IDs are interchangeable. Though, the blocks are
 * defined "twice", as an item (in player's hand or inventory) and as a tile 
 * (a block placed in the world)
 */
declare namespace IDRegistry {
    /**
     * Defines the numeric ID of the first user-defined item
     */
    const ITEM_ID_OFFSET: number;

    /**
     * Defines the numeric ID of the first user-defined block
     */
    const BLOCK_ID_OFFSET: number;

    /**
     * Defines maximum item/block ID
     */
    const MAX_ID: number;

    /**
     * Generates a new numeric block ID
     * @param name string block ID. Used in {@link Block} module functions and 
     * in some other block-related functions. Inner Core converts it to 
     * block_<name> as minecraft vanilla block ID to avoid string ID clashes
     * @returns Numeric block ID.
     */
    function genBlockID(name: string): number;

    /**
     * Generates a new numeric item ID
     * @param name string item ID. Used in {@link Item} module functions and 
     * in some other item-related functions. Inner Core converts it to 
     * item_<name> as minecraft vanilla item ID to avoid string ID clashes
     * @returns Numeric item ID.
     */
    function genItemID(name: string): number;

    /**
     * Gets item or block string ID by it's numeric ID
     * @param id numeric item or block ID
     */
    function getNameByID(id: number): string;

    /**
     * Ensures given ID is a tile ID, not a block ID. It is generally recommended 
     * to use {@link Block.convertItemToBlockId} since it performs less calculations.
     * @param id block or tile ID
     * @returns Tile ID.
     */
    function ensureBlockId(id: number): number;

    /**
     * Ensures given ID is a block ID, not a tile ID. It is generally recommended 
     * to use {@link Block.convertBlockToItemId} since it performs less calculations.
     * @param id block or tile ID
     * @returns Block ID.
     */
    function ensureItemId(id: number): number;

    /**
     * @param id numeric item or block ID
     * @returns `true` if item is vanilla Minecraft item, `false` otherwise.
     */
    function isVanilla(id: number): boolean;

    /**
     * Gets type of item ("block" or "item") and it's string ID in Minecraft
     * @param id numeric item or block ID
     * @returns String in format `"type:string_id"` or
     * `"type:string_id#extra_information"`.
     */
    function getIdInfo(id: number): string;
}