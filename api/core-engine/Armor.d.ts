/**
 * Module used to manage armor's behavior.
 */
declare namespace Armor {

    interface IArmorHurtParams {
        /**
         * Attacker entity or -1 if the damage was not 
         * caused by an entity.
         */
        attacker: number;
        /**
         * Damage amount that was applied to the player.
         */
        damage: number;
        /**
         * Damage type.
         */
        type: number;
        /**
         * TODO: Unknown param!
         */
        bool1: boolean;
        /**
         * TODO: Unknown param!
         */
        bool2: boolean;
    }

    interface IArmorJSCallback {
        /**
         * Called every tick if player wears the armor.
         * @param slot current armor item instance
         * @param index armor slot, one of the {@link EArmorType} values
         * @param durability maximum damage the armor 
         * @returns `true`, if changes to the item parameter should be applied, 
         * `false` otherwise.
         */
        tick(slot: ItemInstance, index: number, durability: number): boolean;

        /**
         * Called when player deals damage if player wears the armor.
         * @param params additional data about damage
         * @param slot current armor item instance
         * @param index armor slot, one of the {@link EArmorType} values
         * @param durability maximum damage the armor 
         * @returns `true`, if changes to the item parameter should be applied, 
         * `false` otherwise.
         */
        hurt(params: IArmorHurtParams, slot: ItemInstance, index: number, durability: number): boolean;
    }

    /**
     * Registers armor's hurt and tick functions.
     * @param id armor item string or numeric ID
     * @param funcs 
     * @deprecated Use multiplayer {@link Armor.registerOnHurtListener} and
     * anothers or callbacks.
     */
    function registerFuncs(id: number | string, funcs: Armor.IArmorJSCallback): void;

    /**
     * Prevents armor from being damaged.
     * @param id armor item string or numeric ID
     */
	function preventDamaging(id: number | string): void;

    interface ArmorGeneralFunction {
        (item: ItemInstance, slot: number, player: number): void
    }

	/**
     * This event is called every tick for every player that has this armor put on.
     * @returns Item object to change armor item, if nothing is returned,
     * armor will not be changed.
     */
    function registerOnTickListener(id: number, func: ArmorGeneralFunction): void;

	/**
     * This event is called every tick for local player that has this armor put on.
     * @returns Item object to change armor item, if nothing is returned,
     * armor will not be changed.
     * @since 2.2.1b106
     */
    function registerOnLocalTickListener(id: number, func: ArmorGeneralFunction): void;

    interface ArmorHurtFunction {
        (item: ItemInstance, slot: number, player: number, value: number, type: number, attacker: number, bool1: boolean, bool2: boolean): void
    }

    /**
     * This event is called when the damage is dealt to the player that has this armor put on.
     * @returns Item object to change armor item, if nothing is returned,
     * armor will not be changed.
     */
    function registerOnHurtListener(id: number, func: ArmorHurtFunction): void;

    /**
     * This event is called when player takes on this armor, or spawns with it.
     */
    function registerOnTakeOnListener(id: number, func: ArmorGeneralFunction): void;

    /**
     * This event is called when local player takes on this armor, or spawns with it.
     * @since 2.2.1b106
     */
    function registerLocalOnTakeOnListener(id: number, func: ArmorGeneralFunction): void;

    /**
     * This event is called when player takes off or changes this armor item.
     */
    function registerOnTakeOffListener(id: number, func: ArmorGeneralFunction): void;

    /**
     * This event is called when local player takes off or changes this armor item.
     * @since 2.2.1b106
     */
    function registerLocalOnTakeOffListener(id: number, func: ArmorGeneralFunction): void;

    interface IArmorCallback {
        tick(slot: ItemInstance, index: number, armorInfo: Armor.IArmorInfo): boolean;
        hurt(params: IArmorHurtParams, slot: ItemInstance, index: number, armorInfo: Armor.IArmorInfo): boolean;
    }

    interface IArmorInfo {
        callback: IArmorCallback;
        durability: number;
    }
}
