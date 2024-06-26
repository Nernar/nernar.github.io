/**
 * Module used to manipulate player. Player is also an entity in Minecraft, so 
 * you can use all the functions from {@link Entity} module as well. To get player's 
 * entity ID, call {@link Player.get} function.
 */
declare namespace Player {
    /**
     * @returns Player's entity ID that can be used with most of {@link Entity} 
     * function.
     */
    function get(): number;

    /**
     * @deprecated Use attributes and {@link Entity.getNameTag} instead.
     */
    function getNameForEnt(ent: number): string;

    /**
     * @deprecated Use attributes and {@link Entity.getNameTag} instead.
     */
    function getName(): void;

    /**
     * @returns Current dimension numeric ID, one of the {@link EDimension} 
     * values or custom dimension ID.
     */
    function getDimension(): number;

    /**
     * @returns `true` if specified entity is of player type, `false` otherwise.
     */
    function isPlayer(ent: number): boolean;

    /**
     * Fetches information about the objects player is currently pointing.
     */
    function getPointed(): {
        /**
         * Pointed block position.
         */
        pos: BlockPosition,
        /**
         * Look vector.
         */
        vec: Vector,
        /**
         * Pointed block data, if player doesn't look at the block,
         * air block is returned.
         */
        block: Tile,
        /**
         * Pointed entity, if no entity's pointed, returns -1.
         */
        entity: number
    };

    /**
     * @deprecated Consider use {@link Player.getInventorySlot} instead.
     */
    function getInventory(loadPart: any, handleEnchant: any, handleNames: any): void;

    /**
     * Adds items to player's inventory, stacking them if possible.
     * @param id item ID
     * @param count item count
     * @param data item data
     * @param extra item extra
     * @param preventDrop if set to false, function drops items that could not be 
     * added to player's inventory, destroys them otherwise
     */
    function addItemToInventory(id: number, count: number, data: number, extra?: ItemExtraData, preventDrop?: boolean): void;

    /**
     * @returns Item in player's hand.
     */
    function getCarriedItem(): ItemInstance;

    /**
     * Sets item in player's hand.
     * @param id item ID
     * @param count item count
     * @param data item data
     * @param extra item extra
     */
    function setCarriedItem(id: number, count: number, data: number, extra?: ItemExtraData): void;

    /**
     * @returns Player's current offhand item information.
     */
    function getOffhandItem(): ItemInstance;

    /**
     * Sets current offhand item for the player.
     * @param id item ID
     * @param count item count
     * @param data item data
     * @param extra item extra
     */
    function setOffhandItem(id: number, count: number, data: number, extra?: ItemExtraData): void;

    /**
     * Decreases carried item count by specified number.
     * @param count amount of items to decrease carried item by, default value 
     * is 1
     */
    function decreaseCarriedItem(count?: number): void;

    /**
     * @param slot slot ID, from 0 to 36
     * @returns Information about item in the specified inventory slot.
     */
    function getInventorySlot(slot: number): ItemInstance;

    /**
     * Sets contents of the specified inventory slot.
     * @param slot slot ID, from 0 to 36
     * @param id item ID
     * @param count item count
     * @param data item data
     * @param extra item extra
     */
    function setInventorySlot(slot: number, id: number, count: number, data: number, extra?: ItemExtraData): void;

    /**
     * @param slot armor slot ID, should be one of the {@link EArmorType} 
     * values.
     * @returns Information about item in the specified armor slot.
     */
    function getArmorSlot(slot: number): ItemInstance;

    /**
     * Sets contents of the specified armor slot.
     * @param slot armor slot ID, should be one of the {@link EArmorType} 
     * values
     * @param id item ID
     * @param count item count
     * @param data item data
     * @param extra item extra
     */
    function setArmorSlot(slot: number, id: number, count: number, data: number, extra?: ItemExtraData): void;

    /**
     * @returns Currently selected inventory slot, from 0 to 8.
     */
    function getSelectedSlotId(): number;

    /**
     * Selects currently selected inventory slot.
     * @param slot slot ID to be selected, from 0 to 8
     */
    function setSelectedSlotId(slot: number): void;

    /**
     * Sets specified coordinates as player's position.
     */
    function setPosition(x: number, y: number, z: number): void;

    /**
     * @returns Current player's position.
     */
    function getPosition(): Vector;

    /**
     * Changes current player position by specified vector.
     */
    function addPosition(x: number, y: number, z: number): void;

    /**
     * Set player's velocity using velocity vector.
     * @param x velocity
     * @param y velocity
     * @param z velocity
     */
    function setVelocity(x: number, y: number, z: number): void;

    /**
     * Get player's velocity.
     * @returns Currently {@link Vector} containing player's velocity.
     */
    function getVelocity(): Vector;

    /**
     * Updates current entity's velocity by specified values.
     */
    function addVelocity(x: number, y: number, z: number): void;

    /**
     * @returns An object that allows to manipulate player experience.
     * @deprecated Consider using {@link Player.getExperience}, 
     * {@link Player.setExperience}, {@link Player.addExperience}.
     */
    function experience(): PlayerExperience;

    /**
     * @returns Player's current experience.
     */
    function getExperience(): number;

    /**
     * Sets player's experience.
     * @param exp experience value to be set
     */
    function setExperience(exp: number): void;

    /**
     * Adds specified amount of experience to the current value.
     * @param exp amount to be added
     */
    function addExperience(exp: number): void;

    /**
     * @returns An object that allows to manipulate player level.
     * @deprecated Consider using {@link Player.getLevel}, 
     * {@link Player.setLevel}, {@link Player.addLevel}.
     */
    function level(): PlayerLevel;

    /**
     * @returns Player's current level.
     */
    function getLevel(): number;

    /**
     * Sets player's level.
     * @param level level value to be set
     */
    function setLevel(level: number): void;

    /**
     * Adds specified amount of level to the current value.
     * @param level amount to be added
     */
    function addLevel(level: number): void;

    /**
     * @returns An object that allows to manipulate player flying ability and
     * state.
     * @deprecated Consider using {@link Player.getFlyingEnabled}, 
     * {@link Player.setFlyingEnabled}, {@link Player.getFlying}, {@link Player.setFlying}.
     */
    function flying(): PlayerFlying;

    /**
     * @returns `true` if player is allowed to fly, `false` otherwise.
     */
    function getFlyingEnabled(): boolean;

    /**
     * Enables or disables player's ability to fly.
     * @param enabled whether the player can fly or not
     */
    function setFlyingEnabled(enabled: boolean): void;

    /**
     * @returns `true` if player is flying, `false` otherwise.
     */
    function getFlying(): boolean;

    /**
     * Changes player's current flying state, call {@link Player.setFlyingEnabled}
     * to be able to set this property to `true`.
     * @param enabled whether the player should fly or not
     */
    function setFlying(enabled: boolean): void;

    /**
     * @returns An object that allows to manipulate player's exhaustion.
     * @deprecated Consider using {@link Player.getExhaustion} and
     * {@link Player.setExhaustion}.
     */
    function exhaustion(): PlayerExhaustion;

    /**
     * @returns Player's current exhaustion.
     */
    function getExhaustion(): number;

    /**
     * Sets player's exhaustion.
     * @param value exhaustion value to be set
     */
    function setExhaustion(value: number): void;

    /**
     * @returns An object that allows to manipulate player's exhaustion.
     * @deprecated Consider using {@link Player.getHunger} and
     * {@link Player.setHunger}.
     */
    function hunger(): PlayerHunger;

    /**
     * @returns Player's current hunger.
     */
    function getHunger(): number;

    /**
     * Sets player's hunger.
     * @param value hunger value to be set
     */
    function setHunger(value: number): void;

    /**
     * @returns An object that allows to manipulate player's saturation.
     * @deprecated Consider using {@link Player.getSaturation} and
     * {@link Player.setSaturation}.
     */
    function saturation(): PlayerSaturation;

    /**
     * @returns Player's current saturation.
     */
    function getSaturation(): number;

    /**
     * Sets player's saturation.
     * @param value saturation value to be set
     */
    function setSaturation(value: number): void;

    /**
     * @returns An object that allows to manipulate player's health.
     * @deprecated Consider using {@link Player.getHealth} and
     * {@link Player.setHealth}.
     */
    function health(): PlayerHealth;

    /**
     * @returns Player's current health.
     */
    function getHealth(): number;

    /**
     * Sets player's health.
     * @param value Health value to be set.
     */
    function setHealth(value: number): void;

    /**
     * @returns An object that allows to manipulate player's score.
     * @deprecated Consider using {@link Player.getScore}.
     */
    function score(): PlayerScore;

    /**
     * @returns Player's current score.
     */
    function getScore(): number;

    /**
     * Sets view zoom, to reset value call {@link Player.resetFov}.
     * @param fov view zoom, default zoom is about 70
     */
    function setFov(fov: number): void;

    /**
     * Resets view zoom to the default value.
     */
    function resetFov(): void;

    /**
     * Sets player's camera to the specified entity.
     * @param ent entity ID
     */
    function setCameraEntity(ent: number): void;

    /**
     * Resets player's camera if it was previously set to another entity.
     */
    function resetCameraEntity(): void;

    /**
     * Sets some of the player's abilities. If the argument is of type
     * boolean, sets the ability as the boolean one, otherwise as numeric one.
     * @param ability ability name constant, should be one of the 
     * {@link EPlayerAbility} constants
     * @param value the value to be set for the ability. Can be either boolean
     * or number, depending on the ability
     * @since 2.0.3b33
     */
    function setAbility(ability: string, value: boolean | number): void;

    /**
     * Gets one of the player's abilities in a form of floating-point
     * number.
     * @param ability ability name constant, should be one of the 
     * {@link EPlayerAbility} constants
     * @returns Current value of the ability in a form of floating-point
     * number.
     * @since 2.0.3b33
     */
    function getFloatAbility(ability: string): number;

    /**
     * Gets one of the player's abilities in a boolean form.
     * @param ability ability name constant, should be one of the 
     * {@link EPlayerAbility} constants
     * @returns Current value of the ability in a boolean form.
     * @since 2.0.3b33
     */
    function getBooleanAbility(ability: string): number;

    /**
     * Class used to manipulate player's experience.
     * @deprecated Consider using {@link Player.getExperience}, 
     * {@link Player.setExperience}, {@link Player.addExperience}.
     */
    class PlayerExperience {
        /**
         * @returns Player's current experience.
         */
        public get(): number;

        /**
         * Sets player's experience.
         * @param exp experience value to be set
         */
        public set(exp: number): void;

        /**
         * Adds specified amount of experience to the current value.
         * @param exp amount to be added
         */
        public add(exp: number): void;
    }

    /**
     * Class used to manipulate player's level.
     * @deprecated Consider using {@link Player.getLevel}, 
     * {@link Player.setLevel}, {@link Player.addLevel}.
     */
    class PlayerLevel {
        /**
         * @returns Player's current level.
         */
        public get(): number;

        /**
         * Sets player's level.
         * @param level level value to be set
         */
        public set(level: number): void;

        /**
         * Adds specified amount of level to the current value.
         * @param level amount to be added
         */
        public add(level: number): void;
    }

    /**
     * Class used to manipulate player's flying ability and state.
     * @deprecated Consider using {@link Player.getFlyingEnabled}, 
     * {@link Player.setFlyingEnabled}, {@link Player.getFlying}
     * and {@link Player.setFlying}.
     */
    class PlayerFlying {
        /**
         * @returns `true` if player is flying, `false` otherwise.
         */
        public get(): boolean;

        /**
         * Changes player's current flying state, call {@link Player.PlayerFlying.setEnabled}
         * to be able to set this property to `true`.
         * @param enabled whether the player should fly or not
         */
        public set(enabled: boolean): void;

        /**
         * @returns `true` if player is allowed to fly, `false` otherwise.
         */
        public getEnabled(): boolean;

        /**
         * Enables or disables player's ability to fly.
         * @param enabled whether the player can fly or not
         */
        public setEnabled(enabled: boolean): void;
    }

    /**
     * Class used to manipulate player's exhaustion.
     * @deprecated Consider using {@link Player.getExhaustion} and
     * {@link Player.setExhaustion}.
     */
    class PlayerExhaustion {
        /**
         * @returns Player's current exhaustion.
         */
        public get(): number;

        /**
         * Sets player's exhaustion.
         * @param value exhaustion value to be set
         */
        public set(value: number): void;
    }

    /**
     * Class used to manipulate player's hunger.
     * @deprecated Consider using {@link Player.getHunger} and
     * {@link Player.setHunger}.
     */
    class PlayerHunger {
        /**
         * @returns Player's current hunger.
         */
        public get(): number;

        /**
         * Sets player's hunger.
         * @param value hunger value to be set
         */
        public set(value: number): void;
    }

    /**
     * Class used to manipulate player's saturation.
     * @deprecated Consider using {@link Player.getSaturation} and
     * {@link Player.setSaturation}.
     */
    class PlayerSaturation {
        /**
         * @returns Player's current saturation.
         */
        public get(): number;

        /**
         * Sets player's saturation.
         * @param value saturation value to be set
         */
        public set(value: number): void;
    }

    /**
     * Class used to manipulate player's health.
     * @deprecated Consider using {@link Player.getHealth} and
     * {@link Player.setHealth}.
     */
    class PlayerHealth {
        /**
         * @returns Player's current health.
         */
        public get(): number;

        /**
         * Sets player's health.
         * @param value health value to be set
         */
        public set(value: number): void;
    }

    /**
     * Class used to manipulate player's score.
     * @deprecated Consider using {@link Player.getScore}.
     */
    class PlayerScore {
        /**
         * @returns Player's current score.
         */
        public get(): number;
    }
}
