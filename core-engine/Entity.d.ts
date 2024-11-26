/**
 * Module used to manipulate entities (mobs, drop, arrows, etc.) in the world.
 * Every entity has it's unique numeric ID which is often used across this module
 * as the first function parameter.
 */
declare namespace Entity {
    /**
     * @returns An array of all server entities UIDs.
     */
    function getAll(): number[];

    /**
     * @returns An array of all server entities UIDs.
     * @deprecated Consider using {@link Entity.getAll} instead.
     */
    function getAllJS(): number[];

    /**
     * @returns An array of all client entities UIDs.
     * @since 2.4.0b120
     */
    function getAllLocal(): number[];

    /**
     * @deprecated Use attributes instead, or {@link Saver}.
     */
    function getExtra(entityUid: number, name: string): null;

    /**
     * @deprecated Use attributes instead, or {@link Saver}.
     */
    function putExtra(entityUid: number, name: string, extra?: object): void;

    /**
     * @deprecated Use attributes instead, or {@link Saver}.
     */
    function getExtraJson(entityUid: number, name: string): object;

    /**
     * @deprecated Use attributes instead, or {@link Saver}.
     */
    function putExtraJson(entityUid: number, name: string, obj: object): void;

    /**
     * Adds an effect to entity.
     * @param effectId effect ID, should be one one of {@link EPotionEffect} values
     * @param effectData effect amplifier
     * @param effectTime effect time in ticks
     * @param ambience if true, particles are ambient
     * @param particles if true, particles are not displayed
     */
    function addEffect(entityUid: number, effectId: number, effectData: number, effectTime: number, ambience?: boolean, particles?: boolean): void;

    /**
     * Adds an effect to entity.
     * @param effectId effect ID, should be one one of {@link EPotionEffect} values
     * @param effectData effect amplifier
     * @param effectTime effect time in ticks
     * @param ambience if true, particles are ambient
     * @param particles if true, particles are not displayed
     * @param effectAnimation if true, flashing are displayed
     * @since 2.3.1b116
     */
    function addEffect(entityUid: number, effectId: number, effectData: number, effectTime: number, ambience: boolean, particles: boolean, effectAnimation: boolean): void;

    /**
     * @param effectId numeric ID of the potion effect,
     * one of {@link EPotionEffect} values
     * @returns Whether the given entity is affected by the potion effect with given numeric ID.
     * @since 2.2.1b102
     */
    function hasEffect(entity: number, effectId: number): boolean;

    /**
     * @returns Object with duration and level of the potion effect with given numeric ID
     * on the given entity. These fields are set to 0, if the given effect doesn't affect
     * the given entity at the moment.
     * @since 2.2.1b102
     */
    function getEffect(entity: number, effectId: number): EffectInstance;

    interface EffectInstance {
        level: number;
        duration: number;
    }

    /**
     * Clears effect, applied to the mob.
     * @param id effect ID, should be one of the {@link EPotionEffect}
     */
    function clearEffect(entityUid: number, id: number): void;

    /**
     * Clears all effects of the mob.
     */
    function clearEffects(entityUid: number): void;

    /**
     * Damage sources, which are used to determine entity damage type:
     * 
     * Type | Name | Message | Translation
     * ---|---|---|---
     * 0 | Generic | "death.attack.generic" (fallback damage source) | * died
     * 1 | Cactus | "death.attack.cactus" (only when standing on cactus) | * was pricked to death
     * 2 | Mob | "death.attack.mob" | * was slain by *
     * 3 | Impact | n/a
     * 4 | In Wall | "death.attack.inWall" | * suffocated in a wall
     * 5 | Fall | "death.attack.fall" OR "death.fell.accident.generic" | * hit the ground too hard OR * fell from a high place
     * 6 | In Fire | "death.attack.inFire" | * went up in flames
     * 7 | On Fire | "death.attack.onFire" | * burned to death
     * 8 | Lava | "death.attack.lava" | * tried to swim in lava
     * 9 | Drown | "death.attack.drown" | * drowned
     * 10 | Explosion | "death.attack.explosion" | * blew up
     * 11 | Explosion (Player) | "death.attack.explosion" | * was blown up by *
     * 12 | Out Of World | "death.attack.outOfWorld" | * fell out of the world
     * 13 | Command | n/a
     * 14 | Magic | "death.attack.magic" | * was killed by magic
     * 15 | Wither | "death.attack.wither" | * withered away
     * 16 | Starve | "death.attack.starve" | * starved to death
     * 17 | Anvil | "death.attack.anvil" | * was squashed by a falling anvil
     * 18 | Thorns | "death.attack.thorns" | * was killed trying to hurt *
     * 19 | Projectile | n/a
     * 20 | Falling Block | "death.attack.fallingBlock" | * was squashed by a falling block
     * 21 | Fly Into Wall | "death.attack.flyIntoWall" | * experienced kinetic energy
     * 22 | Magma | "death.attack.magma" | * discovered floor was lava
     * 23 | Fireworks | "death.attack.fireworks" | * went off with a bang
     * 24 | Lightning Bolt | "death.attack.lightningBolt" | * was struck by lightning
     */
    type DamageSource = number;

    /**
     * Damages entity.
     * @param damage damage value in half-hearts
     * @param cause existing {@link DamageSource} or any inclusive value between 25 and 32
     * @param properties additional damage source properties
     */
    function damageEntity(entityUid: number, damage: number, cause?: DamageSource, properties?: {
        /**
         * Entity that caused damage, determines actor of damage source.
         */
        attacker?: number,
        /**
         * If `true`, damage can be reduced by armor.
         */
        bool1?: boolean
    }): void;

    /**
     * Adds specified health amount to the entity.
     * @param heal health to be added to entity, in half-hearts
     */
    function healEntity(entityUid: number, heal: number): void;

    /**
     * @returns Numeric entity type, one of the {@link EEntityType}.
     */
    function getType(entityUid: number): number;

    /**
     * @returns String entity type, like `minecraft:chicken<>` (`<namespace>:<identifier>[<attributes>]`).
     */
    function getTypeName(entityUid: number): string;

    /**
     * @returns String type for entities defined via add-ons or numeric type for
     * all the other entities.
     */
    function getTypeUniversal(entityUid: number): number | string;

    /**
     * @returns String type for entities defined via add-ons, otherwise `null`.
     * @remarks
     * Includes only entities spawned locally (with {@link Entity.spawnAddon}),
     * test entities manually with {@link Entity.getTypeName} or use {@link BlockSource.listEntitiesInAABB}
     * with appropriate arguments.
     */
    function getTypeAddon(entityUid: number): Nullable<string>;

    /**
     * @returns Compound tag for the specified entity.
     * @since 2.0.5b44
     */
    function getCompoundTag(entityUid: number): Nullable<NBT.CompoundTag>;

    /**
     * Sets compound tag for the specified entity.
     * @since 2.0.5b44
     */
    function setCompoundTag(entityUid: number, tag: NBT.CompoundTag): void;

    /**
     * Sets hitbox to the entity. Hitboxes defines entity collisions
     * between terrain and themselves (e.g. physics).
     * @param w hitbox width and length
     * @param h hitbox height
     */
    function setHitbox(entityUid: number, w: number, h: number): void;

    /**
     * @returns `true` if specified entity is loaded within any player chunks
     * (not despawned or unloaded) and identifier is valid.
     */
    function isExist(entityUid: number): boolean;

    /**
     * @returns Current dimension numeric ID, one of the {@link EDimension} 
     * values or custom dimension ID.
     * @since 2.0.4b35
     */
    function getDimension(entityUid: number): number;

    /**
     * Spawns vanilla entity on the specified coordinates.
     * @param type numeric entity type, one of the {@link EEntityType}
     * @param skin skin to set for the entity. Leave empty or null to use 
     * default skin of the mob
     * @returns Numeric ID of spawn entity or -1 if entity was not created.
     * @deprecated Client-side method, use {@link BlockSource.spawnEntity} instead.
     */
    function spawn(x: number, y: number, z: number, type: number, skin?: Nullable<string>): number;

    /**
     * Same as {@link Entity.spawn}, but uses {@link Vector} object to represent
     * coordinates.
     * @deprecated Client-side method, use {@link BlockSource.spawnEntity} instead.
     */
    function spawnAtCoords(coords: Vector, type: number, skin?: string): void;

    /**
     * Spawns custom entity on the specified coords. Allows to pass some values
     * to controllers via extra param.
     * @param name custom entity string ID
     * @param extra object that contains some data for the controllers
     * @deprecated You are should implement addon entity and spawn it with
     * {@link BlockSource.spawnEntity} instead.
     */
    function spawnCustom(name: string, x: number, y: number, z: number, extra?: object): CustomEntity;

    /**
     * Same as {@link Entity.spawnCustom}, but uses {@link Vector} object to represent
     * coordinates.
     * @deprecated You are should implement addon entity and spawn it with
     * {@link BlockSource.spawnEntity} instead.
     */
    function spawnCustomAtCoords(name: string, coords: Vector, extra?: any): CustomEntity;

    /**
     * Spawns custom entity defined in behavior packs or game itself.
     * @returns Instance to performing commands on entity.
     * @deprecated Client-side method, use {@link BlockSource.spawnEntity} instead.
     */
    function spawnAddon(x: number, y: number, z: number, name: string): AddonEntityRegistry.AddonEntity;

    /**
     * Same as {@link Entity.spawnAddon}, but uses {@link Vector} object to represent
     * coordinates.
     * @returns Instance to performing commands on entity.
     * @deprecated Client-side method, use {@link BlockSource.spawnEntity} instead.
     */
    function spawnAddonAtCoords(coords: Vector, name: string): AddonEntityRegistry.AddonEntity;

    /**
     * @returns Instance to performing commands on requested addon
     * entity if it spawned by Inner Core or `null` instead.
     * @remarks
     * Includes only entities spawned locally (with {@link Entity.spawnAddon}).
     */
    function getAddonEntity(entity: number): Nullable<AddonEntityRegistry.AddonEntity>;

    /**
     * Removes entity from the world.
     */
    function remove(entityUid: number): void;

    /**
     * @returns Custom entity object by it's numeric entity UID.
     * @deprecated Not supported anymore, use behavior packs.
     */
    function getCustom(entityUid: number): CustomEntity;

    /**
     * @deprecated Use attributes instead.
     */
    function getAge(entityUid: number): number;

    /**
     * @deprecated Use attributes instead.
     */
    function setAge(entityUid: number, age: number): void;

    /**
     * @deprecated Use NBT instead.
     */
    function getSkin(entityUid: number): string;

    /**
     * Sets mob skin.
     * @param skin skin name, full path in the resourcepack (mod assets)
     * @deprecated Use NBT or resource packs instead.
     */
    function setSkin(entityUid: number, skin: string): void;

    /**
     * Sets mob skin, uses {@link Texture} object.
     * @deprecated Use NBT or resource packs instead.
     */
    function setTexture(entityUid: number, texture: Texture): void;

    /**
     * @returns Entity render type, should be one of the 
     * {@link EMobRenderType} values.
     * @deprecated Use resource packs instead.
     */
    function getRender(entityUid: number): number;

    /**
     * Sets entity render type.
     * @param render entity render type, should be one of the 
     * {@link EMobRenderType} values
     * @deprecated Use resource packs instead.
     */
    function setRender(entityUid: number, render: number): void;

    /**
     * Makes rider ride entity.
     * @param entityUid ridden entity
     * @param riderUid rider entity
     */
    function rideAnimal(entityUid: number, riderUid: number): void;

    /**
     * @returns Entity name tag or player name.
     * @since 2.2.1b97 (not working before)
     */
    function getNameTag(entityUid: number): string;

    /**
     * Sets custom entity name tag. Custom entity tags are
     * displayed above the entities and can be set by player
     * using label.
     * @param tag name tag to be set to the entity
     */
    function setNameTag(entityUid: number, tag: string): void;

    /**
     * Gets the attack target of current entity.
     * @returns Target entity's unique ID.
     */
    function getTarget(entityUid: number): number;

    /**
     * Sets the attack target for current entity. Works only for mobs that
     * actually can attack.
     * @param targetUid target entity's unique ID
     */
    function setTarget(entityUid: number, targetUid: number): void;

    /**
     * @returns `true`, if entity was immobilized.
     * @since 2.3.1b116-3
     */
    function getMobile(entityUid: number): boolean;

    /**
     * Sets entity's immobile state.
     * @param mobile if `true`, entity can move, otherwise it is immobilized
     */
    function setMobile(entityUid: number, mobile: boolean): void;

    /**
     * @returns `true` if entity is sneaking, `false` otherwise.
     */
    function getSneaking(entityUid: number): boolean;

    /**
     * Sets entity's sneaking state, supported slightly
     * entities, resource pack render controlling it.
     * @param sneak if `true`, entity becomes sneaking, else not
     */
    function setSneaking(entityUid: number, sneak: boolean): void;

    /**
     * @returns Entity that is riding the specified entity.
     */
    function getRider(entityUid: number): number;

    /**
     * @returns Entity that is ridden by specified entity.
     */
    function getRiding(entityUid: number): number;

    /**
     * Puts entity on fire.
     * @param fire duration (in ticks) of the fire
     * @param force should always be true
     */
    function setFire(entityUid: number, fire: number, force: boolean): void;

    /**
     * @returns An object that allows to manipulate entity health.
     * @deprecated Consider using {@link Entity.getHealth}, {@link Entity.setHealth},
     * {@link Entity.getMaxHealth} and {@link Entity.setMaxHealth} instead.
     */
    function health(entityUid: number): EntityHealth;

    /**
     * Class used to manipulate entity's health.
     * @deprecated Consider using {@link Entity.getHealth}, {@link Entity.setHealth},
     * {@link Entity.getMaxHealth} and {@link Entity.setMaxHealth} instead.
     */
    class EntityHealth {
        /**
         * @returns Entity's current health value.
         * @throws No such method.
         */
        get(): number;

        /**
         * Sets entity's current health value.
         * @param health health value to be set
         * @throws No such method.
         */
        set(health: number): void;

        /**
         * @returns Entity's maximum health value.
         * @throws No such method.
         */
        getMax(): number;

        /**
         * Sets entity's maximum health value.
         * @throws No such method.
         */
        setMax(maxHealth: number): void;
    }

    /**
     * @returns Entity's current health value.
     */
    function getHealth(entityUid: number): number;

    /**
     * Sets entity's current health value.
     * @param health health value to be set
     */
    function setHealth(entityUid: number, health: number): void;

    /**
     * @returns Entity's maximum health value.
     */
    function getMaxHealth(entityUid: number): number;

    /**
     * Sets entity's maximum health value.
     */
    function setMaxHealth(entityUid: number, health: number): void;

    /**
     * Sets the specified coordinates as a new position for the entity.
     * No checks are performed.
     */
    function setPosition(entityUid: number, x: number, y: number, z: number): void;

    /**
     * @returns Entity position.
     */
    function getPosition(entityUid: number): Vector;

    /**
     * Updates current entity position by specified coordinates.
     */
    function addPosition(entityUid: number, x: number, y: number, z: number): void;

    /**
     * Set current entity's velocity using velocity vector.
     */
    function setVelocity(entityUid: number, x: number, y: number, z: number): void;

    /**
     * Get current entity's velocity using velocity vector.
     * @returns Containing current entity's velocity.
     */
    function getVelocity(entityUid: number): Vector;

    /**
     * Updates current entity's velocity by specified value.
     */
    function addVelocity(entityUid: number, x: number, y: number, z: number): void;

    /**
     * @returns Distance in blocks between the two coordinate sets.
     */
    function getDistanceBetweenCoords(coords1: Vector, coords2: Vector): number;

    /**
     * @returns Distance between specified entity and a fixed coordinate set.
     */
    function getDistanceToCoords(entityUid: number, coords: Vector): number;

    /**
     * @returns Distance in blocks between two entities.
     */
    function getDistanceToEntity(ent1: number, ent2: number): number;

    /**
     * @returns Distance between player and entity, counting only x and z values
     * (y value is ignored).
     */
    function getXZPlayerDis(entityUid: number): number;

    /**
     * @returns Entity's look angle in radians.
     */
    function getLookAngle(entityUid: number): LookAngle;

    /**
     * Sets specified pitch and yaw as look angle for the entity.
     * @param yaw look angle yaw in radians
     * @param pitch look angle pitch in radians
     */
    function setLookAngle(entityUid: number, yaw: number, pitch: number): void;

    /**
     * Transforms look angle into look vector.
     * @param angle look angle to transform into {@link Vector}
     * @returns Transformation result.
     */
    function getLookVectorByAngle(angle: LookAngle): Vector;

    /**
     * @returns Look vector for the entity.
     */
    function getLookVector(entityUid: number): Vector;

    /**
     * @returns Look angle between entity and static coordinates.
     */
    function getLookAt(entityUid: number, x: number, y: number, z: number): LookAngle;

    /**
     * Sets entity look angle to look at specified coordinates.
     */
    function lookAt(entityUid: number, x: number, y: number, z: number): void;

    /**
     * Same as {@link Entity.lookAt} but uses Vector as param type.
     * @param coords 
     */
    function lookAtCoords(entityUid: number, coords: Vector): void;

    /**
     * Makes entity move to the target coordinates.
     * @param params additional move parameters
     */
    function moveToTarget(entityUid: number, target: Vector, params: MoveParams): void;

    /**
     * Makes entity move using pitch/yaw angle to determine direction.
     * @param angle angle to define entity's direction
     * @param params additional move parameters
     */
    function moveToAngle(entityUid: number, angle: LookAngle, params: MoveParams): void;

    /**
     * Makes entity move towards it's current look angle.
     * @param params additional move parameters
     */
    function moveToLook(entityUid: number, params: MoveParams): void;

    /**
     * Interface used to specify how entity should move.
     */
     interface MoveParams {
        /**
         * Movement speed.
         */
        speed?: number,

        /**
         * If `true`, entity won't change it's Y velocity.
         */
        denyY?: boolean,

        /**
         * Y velocity (jump speed).
         */
        jumpVel?: number
    }

    /**
     * Retrieves entity's current movement information.
     * @returns Object that contains normalized moving vector, moving speed and
     * moving xz speed (with no Y coordinate).
     */
    function getMovingVector(entityUid: number): MovingVector;

    /**
     * Interface used to return entity's current moving vector and some
     * additional data.
     */
     interface MovingVector {
        /**
         * Normalized vector X coordinate.
         */
        x: number,

        /**
         * Normalized vector Y coordinate.
         */
        y: number,

        /**
         * Normalized vector Z coordinate.
         */
        z: number,

        /**
         * Vector real length.
         */
        size: number,

        /**
         * Vector real length excluding Y coordinate.
         */
        xzsize: number
    }

    /**
     * Retrieves entity look angle in the form of pitch/yaw angle. No other
     * information included to the resulting object.
     */
    function getMovingAngle(entityUid: number): LookAngle;

    /**
     * @deprecated Nothing to perform here anymore.
     */
    function getMovingAngleByPositions(pos1: any, pos2: any): undefined;

    /**
     * Retrieves nearest to the coordinates entity of the specified entity type.
     * @param coords search range center coordinates
     * @param type entity type ID. Parameter is no longer supported and should 
     * be 0 in all cases
     * @param maxRange if specified, determines search radius
     * @remarks
     * Overheating method, capture entities by {@link BlockSource.fetchEntitiesInAABB} \
     * and pass over them by checking radius between coords and entity.
     */
    function findNearest(coords: Vector, type?: number, maxRange?: number): Nullable<number>;

    /**
     * Returns array of all entities numeric IDs in given range in blocks.
     * @param coords search range center coordinates
     * @param maxRange determines search radius
     * @param type entity type ID
     * @remarks
     * Overheating method, capture entities by {@link BlockSource.fetchEntitiesInAABB} \
     * and pass over them by checking radius between coords and entity.
     */
    function getAllInRange(coords: Vector, maxRange: number, type?: number): number[];

    /**
     * @deprecated Consider use {@link Entity.getCarriedItem} instead.
     */
    function getInventory(entityUid: number, handleNames?: boolean, handleEnchant?: boolean): void;

    /**
     * @param slot armor slot index, should be one of the {@link EArmorType} 
     * values
     * @returns Armor slot contents for entity.
     */
    function getArmorSlot(entityUid: number, slot: number): ItemInstance;

    /**
     * Sets armor slot contents for the entity.
     * @param slot armor slot index, should be one of the {@link EArmorType} 
     * values
     * @param id item ID
     * @param count item count
     * @param data item data
     * @param extra item extra
     */
    function setArmorSlot(entityUid: number, slot: number, id: number, count: number, data: number, extra?: ItemExtraData): void;

    /**
     * @returns Entity's current carried item information.
     */
    function getCarriedItem(entityUid: number): ItemInstance;

    /**
     * Sets current carried item for the entity.
     * @param id item ID
     * @param count item count
     * @param data item data
     * @param extra item extra
     */
    function setCarriedItem(entityUid: number, id: number, count: number, data: number, extra?: ItemExtraData): void;

    /**
     * @returns Entity's current offhand item information.
     */
    function getOffhandItem(entityUid: number): ItemInstance;

    /**
     * Sets current offhand item for the entity.
     * @param id item ID
     * @param count item count
     * @param data item data
     * @param extra item extra
     * @since 2.2.1b93 (not working before)
     */
    function setOffhandItem(entityUid: number, id: number, count: number, data: number, extra?: ItemExtraData): void;

    /**
     * Gets item from specified drop entity
     * @returns Instance that is in the dropped item.
     */
    function getDroppedItem(entityUid: number): ItemInstance;

    /**
     * Sets item to the specified drop entity
     * @param id item ID
     * @param count item count
     * @param data item data
     * @param extra item extra
     */
    function setDroppedItem(entityUid: number, id: number, count: number, data: number, extra?: ItemExtraData): void;

    /**
     * @deprecated Use callbacks and {@link Entity.getAll} instead.
     */
    function getProjectileItem(projectile: number): ItemInstance;

    type Attribute = "minecraft:follow_range" | "minecraft:luck" | "minecraft:lava_movement" | "minecraft:underwater_movement" | "minecraft:movement" | "minecraft:knockback_resistance" | "minecraft:absorption" | "minecraft:health" | "minecraft:attack_damage" | "minecraft:jump_strength";

    /**
     * Creates an object used to change entity's attributes.
     * @param entityUid entity uid
     * @param attribute one of {@link Attribute} or your custom one
     * @returns Object used to manipulate entity's attributes.
     * @since 2.0.3b33
     */
    function getAttribute(entityUid: number, attribute: Attribute | string): AttributeInstance;

    /**
     * Interface used to modify attribute values.
     * @since 2.0.3b33
     */
    interface AttributeInstance {

        /**
         * @returns Current attribute's value.
         */
        getValue(): number;

        /**
         * @returns Attribute's maximum value.
         */
        getMaxValue(): number;

        /**
         * @returns Attribute's minimum value.
         */
        getMinValue(): number;

        /**
         * @returns Attribute's default value
         */
        getDefaultValue(): number;

        /**
         * Sets current attribute's value.
         */
        setValue(value: number): void;

        /**
         * Sets attribute's maximum value.
         */
        setMaxValue(value: number): void;

        /**
         * Sets attribute's minimum value.
         */
        setMinValue(value: number): void;

        /**
         * Sets attribute's default value.
         */
        setDefaultValue(value: number): void;
    }

    /**
     * Creates or gets an existing {@link Entity.PathNavigation} instance for the specified mob
     * @returns Navigation used to control entity's target position and
     * the way to get there.
     * @since 2.0.3b33
     */
    function getPathNavigation(entityUid: number): PathNavigation;

    /**
     * Object used to build path and move mobs to the required coordinates using
     * specified parameters. All the setters return current {@link Entity.PathNavigation} 
     * instance to be able to produce chained calls.
     * @since 2.0.3b33
     */
    interface PathNavigation {
        /**
         * Builds path to the specified coordinates.
         * @param speed entity movement speed
         */
        moveToCoords(x: number, y: number, z: number, speed: number): PathNavigation;

        /**
         * Builds path to the specified entity. Note that current coordinates of
         * entity are used, and are not updated.
         * @param speed entity movement speed
         */
        moveToEntity(entity: number, speed: number): PathNavigation;

        /**
         * Sets function to be notified when path navigation is finished or aborted.
         * @param callback function to be called when navigation is finished or aborted
         */
        setResultFunction(callback: PathNavigationResultFunction): PathNavigation;

        /**
         * @returns Whether the entity can pass doors.
         */
        canPassDoors(): boolean;
        /**
         * Sets entity's door passing ability.
         */
        setCanPassDoors(can: boolean): PathNavigation;

        isRiverFollowing(): boolean;
        setIsRiverFollowing(follow: boolean): PathNavigation;

        /**
         * @returns Whether the entity can open doors.
         */
        canOpenDoors(): boolean;
        /**
         * Sets entity's door opening ability.
         */
        setCanOpenDoors(can: boolean): PathNavigation;

        /**
         * @since 2.2.1b93
         */
        getAvoidSun(): boolean;
        /**
         * Sets entity's sun avoiding.
         */
        setAvoidSun(avoid: boolean): PathNavigation;

        /**
         * @returns Whether the entity avoids water.
         */
        getAvoidWater(): boolean;
        /**
         * Sets entity's water avoiding.
         */
        setAvoidWater(avoid: boolean): PathNavigation;

        setEndPathRadius(radius: number): PathNavigation;

        getCanSink(): boolean;
        setCanSink(can: boolean): PathNavigation;

        getAvoidDamageBlocks(): boolean;
        setAvoidDamageBlocks(avoid: boolean): PathNavigation;

        getCanFloat(): boolean;
        setCanFloat(can: boolean): PathNavigation;

        isAmphibious(): boolean;
        setIsAmphibious(amphibious: boolean): PathNavigation;

        getAvoidPortals(): boolean;
        setAvoidPortals(avoid: boolean): PathNavigation;

        getCanBreach(): boolean;
        setCanBreach(can: boolean): PathNavigation;

        /**
         * @returns Whether entity can jump.
         */
        getCanJump(): boolean;

        /**
         * Enables or disables entity's jumping ability.
         */
        setCanJump(can: boolean): PathNavigation;

        /**
         * @returns Entity's speed value.
         */
        getSpeed(): number;

        /**
         * Sets entity's speed value.
         */
        setSpeed(speed: number): PathNavigation;

        /**
         * @since 2.2.1b93
         */
        getCanPathOverLava(): boolean;
        /**
         * @since 2.2.1b93
         */
        setCanPathOverLava(can: boolean): PathNavigation;

        /**
         * @since 2.2.1b93
         */
        getCanWalkInLava(): boolean;
        /**
         * @since 2.2.1b93
         */
        setCanWalkInLava(can: boolean): PathNavigation;

        /**
         * @since 2.2.1b93
         */
        getCanOpenIronDoors(): boolean;
        /**
         * @since 2.2.1b93
         */
        setCanOpenIronDoors(can: boolean): PathNavigation;

        /**
         * @since 2.2.1b93
         */
        getHasEndPathRadius(): boolean;
        /**
         * @since 2.2.1b93
         */
        setHasEndPathRadius(has: boolean): PathNavigation;

        /**
         * @since 2.2.1b93
         */
        getTerminationThreshold(): number;
        /**
         * @since 2.2.1b93
         */
        getTerminationThreshold(threshold: number): PathNavigation;

        /**
         * @since 2.2.1b93
         */
        getTickTimeout(): number;
        /**
         * @since 2.2.1b93
         */
        setTickTimeout(ticks: number): PathNavigation;

        /**
         * @since 2.2.1b93
         */
        isStuck(ticks: number): boolean;
    }

    /**
     * Path navigation result, which is used in result callback:
     * 
     * Result code | Meaning
     * ---|---
     * 0 | Path successfully completed
     * 1 | Cannot reach target, no available path
     * 2 | Cannot reach target, out of range
     * 3 | Entity has been unloaded or removed
     * 4 | Cancelled by `stop()` or similar method
     * 5 | Player left level or server closed
     * 6 | Result function will be replaced
     */
    type PathNavigationResultCode = 0 | 1 | 2 | 3 | 4 | 5 | 6;

    /**
     * Occurs when path navigation is finished or aborted.
     * @param navigation {@link Entity.PathNavigation} that the handler is attached to
     * @param result result code, see {@link PathNavigationResultCode} for details
     */
    interface PathNavigationResultFunction {
        (navigation: PathNavigation, result: PathNavigationResultCode): void
    }

    /**
     * Returns array of all entities numeric IDs in given range in blocks.
     * @param coords1 start search range coordinates
     * @param coords2 end search range coordinates
     * @param type entity type ID
     * @default type: 255, flag: true
     * @since 2.0.4b35
     * @remarks
     * Local method, use {@link BlockSource.listEntitiesInAABB} instead.
     */
    function getAllInsideBox(coords1: Vector, coords2: Vector, type?: number, flag?: boolean): number[];

}
