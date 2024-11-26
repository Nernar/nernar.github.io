/**
 * Module used to manipulate crafting recipes for vanilla and custom workbenches.
 */
declare namespace Recipes {
    /**
     * Adds new shaped crafting recipe.
     * @param result recipe result item
     * @param mask recipe shape, up to three string corresponding to the three 
     * crafting field rows; each character means one item in the field 
     * @param data an array explaining the meaning of each character within 
     * mask. The array should contain three values for each symbol: the symbol
     * itself, item ID and item data. 
     * @param func function to be called when the craft is processed
     * @param prefix recipe prefix. Use a non-empty values to register recipes
     * for custom workbenches
     * 
     * @example
     * ```js
     * Recipes.addShaped({ id: 264, count: 1, data: 0 }, [
     *     "ax", 
     *     "xa", 
     *     "ax"
     * ], ['x', 265, 0, 'a', 266, 0]);
     * ```
     * 
     * @remarks
     * Pickaxe recipe should look like this:
     * ```text
     * "+++"
     * " | "
     * " | "
     * ```
     * Do not use empty lines or line endings, if the recipe can be placed 
     * within less then three rows or cols; e.g., to craft plates, you can
     * use a shape like this:   
     * ```text
     * "--"
     * ```
     */
    function addShaped(result: ItemInstance, mask: string[], data: (string | number)[], func?: CraftingFunction, prefix?: string): WorkbenchShapedRecipe;

    /**
     * @see {@link Recipes.addShaped} for details.
     * @param vanilla should be recipe considered as vanilla,
     * custom logic callback will be ignored in that case
     * @since 2.2.1b110
     */
    function addShapedGeneric(result: ItemInstance, mask: string[], data: (string | number)[], func?: CraftingFunction, prefix?: string, vanilla?: boolean): WorkbenchShapedRecipe;

    /**
     * Recipes considered as vanilla completely ignores
     * custom logic callbacks.
     * @see {@link Recipes.addShaped} for details.
     * @since 2.2.1b108
     */
    function addShapedVanilla(result: ItemInstance, mask: string[], data: (string | number)[], func?: CraftingFunction, prefix?: string): WorkbenchShapedRecipe;

    /**
     * Same as {@link Recipes.addShaped}, but you can specify result as three
     * separate values corresponding to ID, count and data.
     */
    function addShaped2(id: number, count: number, aux: number, mask: string[], data: (string | number)[], func?: CraftingFunction, prefix?: string): WorkbenchShapedRecipe;

    /**
     * Adds new shapeless crafting recipe.
     * @param result recipe result item
     * @param data crafting ingredients, an array of objects representing item
     * ID and data
     * @param func function to be called when the craft is processed
     * @param prefix recipe prefix; use a non-empty values to register recipes
     * for custom workbenches
     * 
     * @example
     * ```js
     * Recipes.addShapeless({ id: 264, count: 1, data: 0 }, [
     *     { id: 265, data: 0 }, { id: 265, data: 0 }, { id: 265, data: 0 },
     *     { id: 266, data: 0 }, { id: 266, data: 0 }, { id: 266, data: 0 }
     * ]);
     * ```
     */
    function addShapeless(result: ItemInstance, data: { id: number, data: number }[], func?: CraftingFunction, prefix?: string): WorkbenchShapelessRecipe;

    /**
     * @see {@link Recipes.addShapeless} for details.
     * @param vanilla should be recipe considered as vanilla,
     * custom logic callback will be ignored in that case
     * @since 2.2.1b110
     */
    function addShapelessGeneric(result: ItemInstance, data: { id: number, data: number }[], func?: CraftingFunction, prefix?: string, vanilla?: boolean): WorkbenchShapelessRecipe;

    /**
     * Recipes considered as vanilla completely ignores
     * custom logic callbacks.
     * @see {@link Recipes.addShapeless} for details.
     * @since 2.2.1b108
     */
    function addShapelessVanilla(result: ItemInstance, data: { id: number, data: number }[], func?: CraftingFunction, prefix?: string): WorkbenchShapelessRecipe;

    /**
     * Deletes recipe by it's result.
     * @param result recipe result
     */
    function deleteRecipe(result: ItemInstance): void;

    /**
     * Removes recipe by result ID, count and data.
     */
    function removeWorkbenchRecipe(id: number, count: number, data: number): void;

    /**
     * Gets all available recipes for the recipe result.
     * @returns Collection object containing {@link Recipes.WorkbenchRecipe}.
     */
    function getWorkbenchRecipesByResult(id: number, count: number, data: number): java.util.Collection<WorkbenchRecipe>;

    /**
     * Gets all available recipes containing an ingredient.
     * @returns Collection object containing {@link Recipes.WorkbenchRecipe}.
     */
    function getWorkbenchRecipesByIngredient(id: number, data: number): java.util.Collection<WorkbenchRecipe>;

    /**
     * Gets recipe by the field and prefix.
     * @param field {@link Recipes.WorkbenchField WorkbenchField} object containing crafting field 
     * information
     * @param prefix recipe prefix, defaults to empty string (vanilla workbench)
     * @returns Recipe {@link Recipes.WorkbenchRecipe WorkbenchRecipe} instance, containing useful methods and 
     * recipe information.
     */
    function getRecipeByField(field: WorkbenchField, prefix?: string): Nullable<WorkbenchRecipe>;

    /**
     * Gets recipe result item by the field and recipe prefix.
     * @param field {@link Recipes.WorkbenchField WorkbenchField} object containing crafting field 
     * information
     * @param prefix recipe prefix, defaults to empty string (vanilla workbench)
     */
    function getRecipeResult(field: WorkbenchField, prefix?: string): Nullable<ItemInstance>;

    /**
     * Performs crafting by the field contents and recipe prefix.
     * @param field {@link Recipes.WorkbenchField WorkbenchField} object containing crafting field 
     * information
     * @param prefix recipe prefix, defaults to empty string (vanilla workbench)
     */
    function provideRecipe(field: WorkbenchField, prefix?: string): Nullable<ItemInstance>;

    /**
     * Adds new furnace recipe.
     * @param sourceId source item ID
     * @param sourceData source item data
     * @param resultId resulting item ID
     * @param resultData resulting item data
     * @param prefix prefix, used to create recipes for non-vanilla furnaces
     */
    function addFurnace(sourceId: number, sourceData: number, resultId: number, resultData: number, prefix?: string): void;

    /**
     * Adds new furnace recipe with no need to manually specify input item data
     * (it defaults to -1).
     * @param sourceId source item ID
     * @param resultId result item ID
     * @param resultData resulting item data
     * @param prefix prefix, used to create recipes for non-vanilla furnaces; if
     * the prefix is not empty and some recipes for this source exist for 
     * vanilla furnace, they are removed
     */
    function addFurnace(sourceId: number, resultId: number, resultData: number, prefix?: string): void

    /**
     * Removes furnace recipes by source item.
     * @param sourceId source item ID
     * @param sourceData source item data
     */
    function removeFurnaceRecipe(sourceId: number, sourceData: number): void;

    /**
     * Adds fuel that can be used in the furnace.
     * @param id fuel item ID
     * @param data fuel item data
     * @param time burning time in ticks
     */
    function addFurnaceFuel(id: number, data: number, time: number): void;

    /**
     * Removes furnace fuel by fuel item ID and data.
     */
    function removeFurnaceFuel(id: number, data: number): void;

    /**
     * @param prefix recipe prefix used for non-vanilla furnaces
     * @returns Furnace recipe resulting item.
     */
    function getFurnaceRecipeResult(id: number, data: number, prefix?: string): ItemInstance;

    /**
     * @returns Fuel burn duration by fuel item ID and data.
     */
    function getFuelBurnDuration(id: number, data: number): number;

    /**
     * Gets furnace recipes by result and custom prefix.
     * @param resultId result item ID
     * @param resultData result item data
     * @param prefix recipe prefix used for non-vanilla furnaces
     * @returns Collection object with all furnace recipes found by given params.
     */
    function getFurnaceRecipesByResult(resultId: number, resultData: number, prefix: string): java.util.Collection<FurnaceRecipe>;

    /**
     * @returns Collection object with all registered workbench recipes.
     * @since 2.2.1b96
     */
    function getAllWorkbenchRecipes(): java.util.Collection<WorkbenchRecipe>;

    /**
     * @returns Collection object with all registered furnace recipes.
     * @since 2.2.1b96
     */
    function getAllFurnaceRecipes(): java.util.Collection<FurnaceRecipe>;

    /**
     * Class used to simplify creation of custom workbenches.
     */
    class WorkbenchUIHandler {

        /**
         * Constructs a new Workbench UI handler.
         * @param target target {@link UI.WindowContent.elements} section
         * @param targetCon target container
         * @param field workbench field
         */
        constructor(target: UI.ElementSet, targetCon: UI.Container, field: WorkbenchField);

        /**
         * Sets custom workbench prefix.
         * @param prefix custom workbench prefix
         */
        setPrefix(prefix: string): void;

        /**
         * Refreshes all the recipes in the workbench.
         * @returns Amount of recipes displayed.
         */
        refresh(): number;

        /**
         * Runs recipes refresh in the ticking thread delaying refresh process
         * for a tick. To get recipes count use {@link Recipes.WorkbenchUIHandler.setOnRefreshListener WorkbenchUIHandler.setOnRefreshListener}.
         */
        refreshAsync(): void;

        /**
         * Registers listener to be notified when some recipe is selected.
         * @param listener recipe selection listener
         */
        setOnSelectionListener(listener: { onRecipeSelected: (recipe: WorkbenchRecipe) => void }): void;

        /**
         * Registers listener to be notified when the workbench starts and
         * completes refreshing.
         * @param listener workbench refresh listener
         */
        setOnRefreshListener(listener: { onRefreshCompleted: (count: number) => void, onRefreshStarted: () => void }): void;

        /**
         * Deselects current recipe (asynchronously).
         */
        deselectCurrentRecipe(): void;

        /**
         * Sets workbench recipes displaying limit.
         * @param count count of the recipes to show
         * @default 250
         */
        setMaximumRecipesToShow(count: number): void;
    }

    /**
     * Object representing workbench recipe.
     */
    interface WorkbenchRecipe extends java.lang.Object {
        /**
         * @returns `true`, if the recipe is valid, `false` otherwise.
         */
        isValid(): boolean;

        /**
         * @param c recipe entry character
         * @returns Recipe entry by entry character.
         */
        getEntry(c: string): RecipeEntry;

        /**
         * @returns Resulting item instance.
         */
        getResult(): ItemInstance;

        /**
         * @returns `true` if specified item is recipe's result, `false` otherwise.
         */
        isMatchingResult(id: number, count: number, data: number): boolean;

        /**
         * @returns Recipe unique mask identifier.
         */
        getRecipeMask(): string;

        /**
         * @param field workbench field to compare with
         * @returns `true` if the field contains this recipe, false` otherwise.
         */
        isMatchingField(field: WorkbenchField): boolean;

        /**
         * @returns All recipe's entries in a java array.
         */
        getSortedEntries(): native.Array<RecipeEntry>;

        /**
         * Tries to fill workbench field with current recipe.
         * @param field workbench field to fill
         */
        putIntoTheField(field: WorkbenchField): void;

        /**
         * @returns Recipe prefix.
         * @default ""
         */
        getPrefix(): string;

        /**
         * Sets prefix value for the recipe.
         * @param prefix new prefix value
         */
        setPrefix(prefix: string): void;

        /**
         * Compares current recipe's prefix with given one.
         * @param prefix prefix value to compare with
         * @returns `true`, if current recipe's prefix is the same as given one,
         * `false` otherwise.
         */
        isMatchingPrefix(prefix: string): boolean;

        /**
         * Sets craft function for the recipe.
         * @param callback function to be called on item craft
         */
        setCallback(callback: CraftingFunction): void;

        /**
         * @returns Current crafting function or null if no one was specified.
         */
        getCallback(): Nullable<CraftingFunction>;

        addToVanillaWorkbench(): void;

        getEntryCodes(): java.util.ArrayList<java.lang.Long>;

        getEntryCollection(): java.util.Collection<RecipeEntry>;

        getRecipeUid(): number;

        isPossibleForInventory(inv: java.util.HashMap<java.lang.Long, java.lang.Integer>): boolean;

        isVanilla(): boolean;

        provideRecipe(field: WorkbenchField): Nullable<ItemInstance>;

        provideRecipeForPlayer(field: WorkbenchField, player: number): Nullable<ItemInstance>;

        putIntoTheField(field: WorkbenchField, player: number): void;

        setEntries(entries: java.util.HashMap<java.lang.Character, RecipeEntry>): void;

        /**
         * @returns Reference to itself to be used in sequential calls.
         */
        setVanilla(isVanilla: boolean): WorkbenchRecipe;

    }

    /**
     * Object representing workbench shaped recipe.
     */
    interface WorkbenchShapedRecipe extends WorkbenchRecipe {

        addVariants(variants: java.util.ArrayList<WorkbenchRecipe>): void;

        setPattern(pattern: string[]): void;

        setPattern(pattern: RecipeEntry[][]): void;

    }

    /**
     * Object representing workbench shapeless recipe.
     */
    interface WorkbenchShapelessRecipe extends WorkbenchRecipe {

        addVariants(variants: java.util.ArrayList<WorkbenchRecipe>): void;

    }


    /**
     * Object representing furnace recipe.
     */
    interface FurnaceRecipe extends java.lang.Object {

        readonly inData: number;
        readonly inId: number;
        readonly resData: number;
        readonly resId: number;

        /**
         * @returns `true`, if the recipe is valid, `false` otherwise.
         */
        isValid(): boolean;

        /**
         * @returns Resulting item instance.
         */
        getResult(): ItemInstance;

        /**
         * @returns Recipe prefix.
         * @default ""
         */
        getPrefix(): string;

        /**
         * Sets prefix value for the recipe.
         * @param prefix new prefix value
         */
        setPrefix(prefix: string): void;

        /**
         * Compares current recipe's prefix with given one.
         * @param prefix prefix value to compare with
         * @returns `true`, if current recipe's prefix is the same as given one,
         * `false` otherwise.
         */
        isMatchingPrefix(prefix: string): boolean;

        getInputKey(): number;

    }


    /**
     * Function called when the craft is in progress.
     * @param api object used to perform simple recipe manipulations and to prevent 
     * crafting
     * @param field array containing all slots of the crafting field
     * @param result recipe result item instance
     */
    interface CraftingFunction {
        (api: WorkbenchFieldAPI, field: UI.Slot[], result: ItemInstance, player: number): void
    }

    /**
     * Object representing workbench field.
     */
    interface WorkbenchField {
        /**
         * @param slot slot index
         * @returns Workbench slot instance by slot index.
         */
        getFieldSlot(slot: number): UI.AbstractSlot;

        /**
         * @since 2.2.1b108
         */
        getFieldSlot(x: number, y: number): UI.AbstractSlot;

        /**
         * @returns JS array of all slots.
         */
        asScriptableField(): UI.AbstractSlot[];

        /**
         * @since 2.2.1b106
         */
        getWorkbenchFieldSize(): number;
    }

    /**
     * Object used to work with workbench field in the craft function.
     */
    interface WorkbenchFieldAPI {

        /**
         * @param slot slot index
         * @returns Workbench slot instance by slot index.
         */
        getFieldSlot(slot: number): UI.Slot;

        /**
         * Decreases item count in the specified slot, if possible.
         * @param slot slot index
         */
        decreaseFieldSlot(slot: number): void;

        /**
         * Prevents crafting event.
         */
        prevent(): void;

        /**
         * @returns `true`, if crafting event was prevented, `false` otherwise.
         */
        isPrevented(): boolean;

        /**
         * @since 2.2.1b106
         */
        getFieldSize(): number;
    }

    /**
     * Crafting recipe entry.
     */
    interface RecipeEntry {
        readonly data: number;
        readonly id: number;

        getMask(): string;
        getCodeByItem(id: number, data: number): number;
        getCode(): number;

        /**
         * @param slot slot to compare with
         * @returns `true` if recipe entry matches the slot.
         */
        isMatching(slot: UI.AbstractSlot): boolean;

        /**
         * @param slot slot to compare with
         * @returns `true` if recipe entry matches the slot.
         * @since 2.2.1b108
         */
        isMatching(slot: Nullable<UI.AbstractSlot>): boolean;

        /**
         * @param entry entry to compare with
         * @returns `true` if recipe entry matches another entry.
         */
        isMatching(entry: RecipeEntry): boolean;
    }

}
