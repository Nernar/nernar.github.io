/**
 * Interface providing access to native tile entities such as chests, hoppers, furnaces,
 * smelters, etc.
 * See full list of supported native tile entities in the {@link ETileEntityType} enum.
 */
declare interface NativeTileEntity {
    /**
     * @returns NativeTileEntity type constant, one of the {@link ETileEntityType}
     * constants.
     */
    getType(): number;

    /**
     * @returns Slots count for the specified NativeTileEntity.
     */
    getSize(): number;

    /**
     * @param slot slot number
     * @returns Item instance in the specified slot of item TE.
     */
    getSlot(slot: number): ItemInstance;

    /**
     * Sets the contents of a native tile entity's slot.
     * @param slot slot number
     * @param id item ID
     * @param count item count
     * @param data item data
     * @param extra item extra data
     */
    setSlot(slot: number, id: number, count: number, data: number, extra?: ItemExtraData): void;

    /**
     * Sets the contents of a native tile entity's slot.
     * @param slot slot number
     * @param item item information
     */
    setSlot(slot: number, item: ItemInstance): void;

    /**
     * @returns CompoundTag associated with specified native tile entity.
     * @since 2.0.5b44
     */
    getCompoundTag(): NBT.CompoundTag;

    /**
     * Sets compound tag for the specified tile entity.
     * @since 2.0.5b44
     */
    setCompoundTag(tag: NBT.CompoundTag): void;
}
