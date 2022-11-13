/**
 * Module to create custom enchantments.
 * @since 2.2.1b105
 */
declare namespace CustomEnchant {

    /**
     * Object returned by {@link CustomEnchant.newEnchant} method.
     * Used to configure different custom enchantment behaviors
     */
    interface EnchantSetupInterface {

        /**
         * The numeric ID of the following enchantment
         * to be used in different operations.
         * This ID will not change after the first generation,
         * same as it works with blocks' and items' IDs.
         */
        readonly id: number;

        /**
         * Sets the following enchantment frequency, possibly used in treasures.
         * @default 3
         * @returns Reference to itself to be used in sequential calls.
         */
        setFrequency(freq: number): EnchantSetupInterface;

        /**
         * Sets whether the following enchantment will be able 
         * to be found in dungeon chests or not.
         * @default true
         * @returns Reference to itself to be used in sequential calls.
         */
        setIsLootable(lootable: boolean): EnchantSetupInterface;

        /**
         * Sets whether the following enchantment will be able
         * to be received on the enchanting table or not.
         * @default true
         * @returns Reference to itself to be used in sequential calls.
         */
        setIsDiscoverable(discoverable: boolean): EnchantSetupInterface;

        /**
         * Sets whether the following enchantment will be able
         * to be caught during fishing as a treasure, or not.
         * @default false
         * @returns Reference to itself to be used in sequential calls.
         */
        setIsTreasure(treasure: boolean): EnchantSetupInterface;

        /**
         * Sets the mask of items, that the following enchantment can be applied to, 
         * paired parameter for item is enchant slot, default is -1 = 0xFFFFFFFF - all
         * @returns Reference to itself to be used in sequential calls.
         */
        setMask(mask: number): EnchantSetupInterface;

        /**
         * Sets minimum and maximum level, that the following enchantment
         * will be able to have in legal conditions.
         * @default min: 1, max: 5
         * @returns Reference to itself to be used in sequential calls.
         */
        setMinMaxLevel(min: number, max: number): EnchantSetupInterface;

        /**
         * Sets linear dependency of enchant cost by level,
         * the formula is `level * b + c`
         * @returns Reference to itself to be used in sequential calls.
         */
        setMinMaxCost(bMin: number, cMin: number, bMax: number, cMax: number): EnchantSetupInterface;

        /**
         * Defines the function that will be called, when item with following enchantment is used for attack.
         * The function must return bonus damage dealt to the victim.
         * @returns Reference to itself to be used in sequential calls.
         * @beta This method is highly experimental right now.
         */
        setAttackDamageBonusProvider(func: AttackDamageBonusProvider): EnchantSetupInterface;

        /**
         * Defines the function that will be called after the item with following enchantment is used for attack.
         * @returns Reference to itself to be used in sequential calls.
         * @beta This method is highly experimental right now.
         */
        setPostAttackCallback(func: DamageCallback): EnchantSetupInterface;

        /**
         * Defines the function that will be called, when the entity wearing item
         * with following enchantment, is hit.
         * The function must return bonus protection value.
         * @returns Reference to itself to be used in sequential calls.
         * @beta This method is highly experimental right now.
         */
        setProtectionBonusProvider(func: ProtectionBonusProvider): EnchantSetupInterface;

        /**
         * Defines the function that will be called, when the entity wearing item
         * with following enchantment, is hit.
         * @returns Reference to itself to be used in sequential calls.
         * @beta This method is highly experimental right now.
         */
        setPostHurtCallback(func: DamageCallback): EnchantSetupInterface;

    }

    /**
     * Registers new custom enchantment from given name ID and displayed name
     * @param nameID internal string ID of the enchantment
     * @param displayedName enchantment name that will be displayed in the
     * tooltips of the items having this enchant.
     * Use {@link Translation} module to make localization of the displayed name
     * @returns Object to work with different enchantment behaviors.
     */
    function newEnchant(nameID: string, displayedName: string): EnchantSetupInterface;

    /**
     * Function interface used in {@link EnchantSetupInterface.setAttackDamageBonusProvider} method
     */
    interface AttackDamageBonusProvider {
        (damage: number, entity: number): number;
    }

    /**
     * Function interface used in
     * {@link EnchantSetupInterface.setPostAttackCallback} and
     * {@link EnchantSetupInterface.setPostHurtCallback} methods.
     */
    interface DamageCallback {
        (item: ItemInstance, damage: number, entity1: number, entity2: number): void;
    }

    /**
     * Function interface used in {@link EnchantSetupInterface.setProtectionBonusProvider} method
     */
    interface ProtectionBonusProvider {
        (damage: number, damageType: number, entity: number): number;
    }

}