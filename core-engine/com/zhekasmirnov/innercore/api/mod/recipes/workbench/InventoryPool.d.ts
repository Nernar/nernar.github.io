declare module com {
    namespace zhekasmirnov {
        namespace innercore {
            namespace api {
                namespace mod {
                    namespace recipes {
                        namespace workbench {
                            class InventoryPool extends java.lang.Object {
                                static class: java.lang.Class<InventoryPool>;
                                constructor(player: number);
                                addRecipeEntry(entry: Recipes.RecipeEntry): void;
                                addPoolEntry(entry: InventoryPool.PoolEntry): void;
                                getPoolEntrySet(entry: Recipes.RecipeEntry): Nullable<InventoryPool.PoolEntrySet>;
                                getPoolEntries(entry: Recipes.RecipeEntry): Nullable<java.util.ArrayList<InventoryPool.PoolEntry>>;
                                pullFromInventory(): void;
                            }
                            namespace InventoryPool {
                                interface PoolEntry {
                                    count: number,
                                    data: number,
                                    extra: ItemExtraData,
                                    id: number,
                                    slot: number,
                                    isMatchesWithExtra(other: PoolEntry): boolean;
                                    isMatches(other: PoolEntry): boolean;
                                    hasExtra(): boolean;
                                    getAmountOfItem(amount: number): number;
                                }
                                class PoolEntrySet extends java.lang.Object {
                                    static class: java.lang.Class<PoolEntrySet>;
                                    constructor();
                                    constructor(entries: java.util.ArrayList<PoolEntry>);
                                    isEmpty(): boolean;
                                    getEntries(): java.util.ArrayList<PoolEntry>;
                                    getMajorEntrySet(): PoolEntrySet;
                                    removeMatchingEntries(set: PoolEntrySet): void;
                                    getFirstEntry(): PoolEntry;
                                    getTotalCount(): number;
                                    spreadItems(slots: java.util.ArrayList<UI.AbstractSlot>): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
