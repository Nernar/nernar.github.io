/**
 * Module used to manage item and block IDs. Items and blocks have the same
 * underlying nature, so their IDs are interchangeable. Though, the blocks are
 * defined "twice", as an item (in player's hand or inventory) and as a tile
 * (a block placed in the world).
 */
declare namespace IDRegistry {
    /**
     * Defines the numeric ID of the first user-defined item.
     */
    const ITEM_ID_OFFSET: number;

    /**
     * Defines the numeric ID of the first user-defined block.
     */
    const BLOCK_ID_OFFSET: number;

    /**
     * Defines maximum item/block ID.
     */
    const MAX_ID: number;

    /**
     * Generates a new numeric block ID. Used in {@link Block} module functions
     * and  in some other block-related functions.
     * @param name string block ID; Inner Core converts it to 
     * block_<name> as minecraft vanilla block ID to avoid string ID clashes
     * @returns Numeric block ID.
     */
    function genBlockID(name: string): number;

    /**
     * Generates a new numeric item ID. Used in {@link Item} module functions
     * and in some other item-related functions.
     * @param name string item ID; Inner Core converts it to 
     * item_<name> as minecraft vanilla item ID to avoid string ID clashes
     * @returns Numeric item ID.
     */
    function genItemID(name: string): number;

    interface Namespace {
        [key: string]: number
    }

    /**
     * Returns identifier namespace, which consist of both
     * item and block name IDs to numeric conversion.
     */
    function useNamespace(namespace: string): Namespace;
 
    /**
     * Gets known modded item or block string ID by it's numeric ID.
     * @param id numeric item or block ID
     */
    function getNameByID(id: number): string;

    /**
     * Gets unique identifier of item or block string ID by it's numeric ID.
     * IDs represented in format `type:identifier#extra`, e.g.
     * `item:ruby_shovel` or `block:ancient_debris#negative`,
     * @param id numeric item or block ID
     * @since 2.2.1b94
     */
    function getStringIdAndTypeForItemId(id: number): Nullable<string>;

    /**
     * Gets ID type by specific numeric ID.
     * @param id numeric item or block ID
     * @since 2.2.1b94
     */
    function getTypeForItemId(id: number): Nullable<"block" | "item">;

    /**
     * Gets item or block string ID by it's numeric ID.
     * @param id numeric item or block ID
     * @since 2.2.1b94
     */
    function getStringIdForItemId(id: number): Nullable<string>;

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
     * @since 2.2.1b102
     */
    function isVanilla(id: number): boolean;

    /**
     * Gets type of item ("block" or "item") and it's string ID in Minecraft.
     * @param id numeric item or block ID
     * @returns String in format `"type:string_id"` or
     * `"type:string_id#extra_information"`.
     * @deprecated Use {@link IDRegistry.getStringIdAndTypeForItemId} instead.
     */
    function getIdInfo(id: number): string;

}
