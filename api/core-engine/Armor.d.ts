/**
 * Module used to manage armor's behavior
 */
declare namespace Armor {
    /**
     * Registers armor's hurt and tick functions
     * @param id armor item string or numeric id
     * @param funcs 
     * @deprecated, does not work in multiplayer
     */
    function registerFuncs(id: number | string, funcs: {
        /**
         * Called every tick if player wears the armor
         * @param item current armor item instance
         * @param index armor slot, one of the {@link EArmorType} values
         * @param maxDamage maximum damage the armor 
         * @returns true, if changes to the item parameter should be applied, 
         * false otherwise
         */
        tick: (item: ItemInstance, index: number, maxDamage: number) => boolean,

        /**
         * Called when player deals damage if player wears the armor
         * @param params additional data about damage
         * @param item current armor item instance
         * @param index armor slot, one of the {@link EArmorType} values
         * @param maxDamage maximum damage the armor 
         * @returns true, if changes to the item parameter should be applied, 
         * false otherwise
         */
        hurt: (params: {
            /**
             * attacker entity or -1 if the damage was not 
             * caused by an entity
             */
            attacker: number,
            /**
             * damage amount that was applied to the player
             */
            damage: number,
            /**
             * damage type
             */
            type: number,
            /**
             * TODO: unknown param
             */
            b1: boolean,
            /**
             * TODO: unknown param
             */
            b2: boolean
        }, item: ItemInstance, index: number, maxDamage: number) => boolean
    }): void;

    /**
     * Prevents armor from being damaged
     * @param id armor item string or numeric id
     */
	function preventDamaging(id: number | string): void;

    interface ArmorGeneralFunction {
        (item: ItemInstance, slot: number, player: number): void
    }

    interface ArmorHurtFunction {
        (item: ItemInstance, slot: number, player: number, value: number, type: number, attacker: number, bool1: boolean, bool2: boolean): void
    }

	/**
     * This event is called every tick for every player that has this armor put on.
     * @returns the {id: , count: , data: , extra: } object to change armor item,
     * if nothing is returned, armor will not be changed.
     */
    function registerOnTickListener(id: number, func: ArmorGeneralFunction): ItemInstance | void;

    /**
     * This event is called when the damage is dealt to the player that has this armor put on.
     * @returns the {id: , count: , data: , extra: } object to change armor item,
     * if nothing is returned, armor will be damaged by default.
     */
    function registerOnHurtListener(id: number, func: ArmorHurtFunction): ItemInstance | void;

    /**
     * This event is called when player takes on this armor, or spawns with it.
     */
    function registerOnTakeOnListener(id: number, func: ArmorGeneralFunction): void;

    /**
     * This event is called when player takes off or changes this armor item.
     */
    function registerOnTakeOffListener(id: number, func: ArmorGeneralFunction): void;
}
