/**
 * NBT (Named Binary Tag) is a tag based binary format designed to carry large
 * amounts of binary data with smaller amounts of additional data.
 * You can get or set nbt tags of {@link Entity entities},
 * {@link NativeTileEntity native tile entities (such as chests or beacons)} and
 * {@link ItemExtraData items}. To get more information about these data structures,
 * see {@link http://web.archive.org/web/20110723210920/http://www.minecraft.net/docs/NBT.txt this page}.
 */
declare namespace NBT {
    /**
     * List tags represent NBT map-like data structure (key-value pairs). it's values may
     * be of any type, so check the type before calling the appropriate getter.
     */
    class CompoundTag {
        /**
         * Creates a new compound tag.
         */
        constructor();

        /**
         * Creates a copy of specified compound tag.
         */
        constructor(tag: CompoundTag);

        /**
         * Converts compound tag to JavaScript object for easier reading.
         * @returns Valid JavaScript representation of compound tag.
         */
        toScriptable(): Scriptable;

        /**
         * @returns Java-array containing all the keys of the compound tag.
         */
        getAllKeys(): native.Array<string>;

        /**
         * @returns `true` if specified key exists in compound tag.
         */
        contains(key: string): boolean;

        /**
         * @param key key to verify for the type
         * @param type tag type to verify for, one of the {@link ENbtDataType} constants
         * @returns `true` if specified key exists in compound tag and it's value is
         * of specified type.
         */
        containsValueOfType(key: string, type: number): boolean;

        /**
         * @returns Value type for the specified key. One of the {@link ENbtDataType} 
         * constants.
         */
        getValueType(key: string): number;

        /**
         * @returns NBT tag of byte type by it's key.
         */
        getByte(key: string): number;

        /**
         * @returns NBT tag of short type by it's key.
         */
        getShort(key: string): number;

        /**
         * @returns NBT tag of 32-bit integer type by it's key.
         */
        getInt(key: string): number;

        /**
         * @returns NBT tag of 64-bit integer type by it's key.
         */
        getInt64(key: string): number;

        /**
         * @returns NBT tag of float type by it's key.
         */
        getFloat(key: string): number;

        /**
         * @returns NBT tag of double type by it's key.
         */
        getDouble(key: string): number;

        /**
         * @returns NBT tag of string type by it's key.
         */
        getString(key: string): string;

        /**
         * @returns NBT tag of compound type by it's key. Note that a copy of 
         * existing compound tag is created so you cannot edit it directly. Use 
         * setCompoundTag method to apply changes or use 
         * {@link NBT.CompoundTag.getCompoundTagNoClone getCompoundTagNoClone} to edit it directly.
         */
        getCompoundTag(key: string): NBT.CompoundTag;

        /**
         * @returns Directly editable NBT tag of byte type by it's key. Don't save
         * reference for future usage since they get destroyed when the parent 
         * object is destroyed.
         */
        getCompoundTagNoClone(key: string): NBT.CompoundTag;

        /**
         * @returns NBT tag of list type by it's key. Note that a copy of 
         * existing list tag is created so you cannot edit it directly. Use 
         * setCompoundTag method to apply changes or use 
         * {@link NBT.CompoundTag.getListTagNoClone getListTagNoClone} to edit it directly.
         */
        getListTag(key: string): NBT.ListTag;

        /**
         * @returns Directly editable NBT tag of byte type by it's key. Don't save
         * reference for future usage since they get destroyed when the parent 
         * object is destroyed.
         */
        getListTagNoClone(key: string): NBT.ListTag;

        /**
         * Puts value of byte type into compound tag.
         */
        putByte(key: string, value: number): void;

        /**
         * Puts value of short type into compound tag.
         */
        putShort(key: string, value: number): void;

        /**
         * Puts value of 32-bit integer type into compound tag.
         */
        putInt(key: string, value: number): void;

        /**
         * Puts value of 64-bit integer type into compound tag.
         */
        putInt64(key: string, value: number): void;

        /**
         * Puts value of float type into compound tag.
         */
        putFloat(key: string, value: number): void;

        /**
         * Puts value of double type into compound tag.
         */
        putDouble(key: string, value: number): void;

        /**
         * Puts value of string type into compound tag.
         */
        putString(key: string, value: string): void;

        /**
         * Puts value of compound type into compound tag.
         */
        putCompoundTag(key: string, value: CompoundTag): void;

        /**
         * Puts value of list type into compound tag.
         */
        putListTag(key: string, value: ListTag): void;

        /**
         * Removes tag by it's key.
         */
        remove(key: string): void;

        /**
         * Removes all the tags from the compound tags.
         */
        clear(): void;
    }


    /**
     * List tags represent NBT array-like indexed data structure. it's values may
     * be of any type, so check the type before calling the appropriate getter.
     */
    class ListTag {
        /**
         * Creates a new list tag.
         */
        constructor();

        /**
         * Creates a copy of specified list tag.
         */
        constructor(tag: CompoundTag);

        /**
         * Converts list tag to JavaScript object for easier reading.
         * @returns Valid JavaScript representation of list tag.
         * @since 2.0.5b45
         */
        toScriptable(): any[];

        /**
         * @returns Count of the tags in the list tag.
         */
        length(): number;

        /**
         * @returns Value type for the specified index.
         * One of the {@link ENbtDataType} constants.
         */
        getValueType(index: number): number;

        /**
         * @returns NBT tag of byte type by it's index.
         */
        getByte(index: number): number;

        /**
         * @returns NBT tag of short type by it's index.
         */
        getShort(index: number): number;

        /**
         * @returns NBT tag of 32-bit integer type by it's index.
         */
        getInt(index: number): number;

        /**
         * @returns NBT tag of 64-bit integer type by it's index.
         */
        getInt64(index: number): number;

        /**
         * @returns NBT tag of float type by it's index.
         */
        getFloat(index: number): number;

        /**
         * @returns NBT tag of double type by it's index.
         */
        getDouble(index: number): number;

        /**
         * @returns NBT tag of string type by it's index.
         */
        getString(index: number): string;

        /**
         * @returns NBT tag of compound type by it's index. Note that a copy of 
         * existing compound tag is created so you cannot edit it directly.
         * Use setCompoundTag method to apply changes or use 
         * {@link NBT.CompoundTag.getCompoundTagNoClone getCompoundTagNoClone} to edit it directly.
         */
        getCompoundTag(index: number): NBT.CompoundTag;

        /**
         * @returns Directly editable NBT tag of byte type by it's index. Don't save
         * reference for future usage since they get destroyed when the parent 
         * object is destroyed.
         */
        getCompoundTagNoClone(index: number): NBT.CompoundTag;

        /**
         * @returns NBT tag of list type by it's index. Note that a copy of 
         * existing list tag is created so you cannot edit it directly. Use 
         * setCompoundTag method to apply changes or use 
         * {@link NBT.CompoundTag.getListTagNoClone getListTagNoClone} to edit it directly.
         */
        getListTag(index: number): NBT.ListTag;

        /**
         * @returns Directly editable NBT tag of byte type by it's index. Don't save
         * reference for future usage since they get destroyed when the parent 
         * object is destroyed.
         */
        getListTagNoClone(index: number): NBT.ListTag;

        /**
         * Puts value of byte type into list tag.
         */
        putByte(index: number, value: number): void;

        /**
         * Puts value of short type into list tag.
         */
        putShort(index: number, value: number): void;

        /**
         * Puts value of 32-bit integer type into list tag.
         */
        putInt(index: number, value: number): void;

        /**
         * Puts value of 64-bit integer type into list tag.
         */
        putInt64(index: number, value: number): void;

        /**
         * Puts value of float type into list tag.
         */
        putFloat(index: number, value: number): void;

        /**
         * Puts value of double type into list tag.
         */
        putDouble(index: number, value: number): void;

        /**
         * Puts value of string type into list tag.
         */
        putString(index: number, value: string): void;

        /**
         * Puts value of compound type into list tag.
         */
        putCompoundTag(index: number, value: CompoundTag): void;

        /**
         * Puts value of list type into list tag.
         */
        putListTag(index: number, value: ListTag): void;

        /**
         * Removes all the tags from the compound tags.
         */
        clear(): void;
    }

    /**
     * Templates to typofication of resulted {@link CompoundTag.toScriptable},
     * which is used to determine containment of tags.
     * Not includes structure `.nbt`, only in-game definitions.
     * @remarks
     * Booleans still "bytes", which means it just omitted when
     * comparing `<obj>.property == false` nor `<obj>.property === false`.
     */
    namespace Templates {
        interface Block extends Scriptable {
            name: string;
            states: BlockState[];
            /**
             * Database tracking identifier (in 1.16 equals `17825808`).
             */
            version: number;
        }

        interface BlockState extends Scriptable {
        }

        interface Item<T extends Nullable<ItemTag> = ItemTag> extends Scriptable {
            Block?: Block;
            /**
             * Amount of item in slot.
             */
            Count: number;
            /**
             * Dealed damage, when it comes to {@link Item.getMaxDamage} item will be broken.
             * @default 0 // not damaged at all
             */
            Damage: number;
            /**
             * Typed identifier, such as `"minecraft:stick"`.
             */
            Name: string;
            /**
             * Indexed slot, required in containers with more than one slots.
             */
            Slot?: number;
            /**
             * Picked up by entity, denies despawn it naturally.
             */
            WasPickedUp: boolean;
            /**
             * Additional data, such as nametags, enchantments, etc.
             */
            tag?: T;
        }

        interface ItemWritableBookTagPage extends Scriptable {
            /**
             * Screenshot shotted on server (appears in pause menu), specially based on Education Edition.
             * @default ""
             */
            photoname: string;
            /**
             * Text placed on page as-is (with new lines `\n`).
             */
            text: string;
        }

        interface ItemTag extends Scriptable {
            /**
             * List of applied enchantments in index-numeral sorting.
             */
            ench?: ItemTagEnchantment[];
        }

        interface ItemFilledMapTag extends ItemTag {
            /**
             * Whether map should display compasses for players or not.
             */
            map_display_players: boolean;
            /**
             * Displayed for players map number, starts with `1`.
             */
            map_name_index: number;
            /**
             * UID to be taken from world NBT.
             */
            map_uuid: number;
        }

        interface ItemWritableBookTag extends ItemTag {
            /**
             * Written book author, assigned when signing book.
             * @default "Author Unknown"
             */
            author?: string;
            /**
             * Number of written copy, `0` means original.
             * @default 0
             */
            generation?: number;
            /**
             * List of created pages in index-numeral sorting.
             */
            pages: ItemWritableBookTagPage[];
            /**
             * Written book title, assigned when signing book.
             */
            title?: string;
            /**
             * Linked teacher book, especially for Education Edition.
             * @default 0
             */
            xuid?: string;
        }

        interface ItemTagEnchantment extends Scriptable {
            /**
             * One of {@link EEnchantment} enum values.
             */
            id: number;
            /**
             * Level of strength, value between `0` and `255` (more buggy up to `32768`).
             */
            lvl: number;
        }

        interface Entity extends Scriptable {
            /**
             * Countdown before entity become adult.
             */
            Age?: number;
            Air: number;
            /**
             * Helmet, Chestplate, Leggings, Boots. Accessible by index, not marked with `Slot` property.
             */
            Armor: Item[];
            /**
             * Last attack tick, determines time between attacks.
             */
            AttackTime: number;
            /**
             * Entity attributes, such as `"minecraft:health"`, `"minecraft:follow_range"`, etc.
             */
            Attributes: EntityAttribute[];
            /**
             * Entity body yaw rotation in degrees, with offset of {@link Rotation}.
             */
            BodyRot: number;
            /**
             * Llama or mule equipped chests.
             */
            Chested: boolean;
            Color: number;
            Color2: number;
            /**
             * Entity is dead, which is required to visualize animation of dying.
             */
            Dead: boolean;
            /**
             * Tick when entity become dead (health <= 0).
             */
            DeathTime: number;
            /**
             * Last synchronized distance between ground and entity.
             */
            FallDistance: number;
            /**
             * Fire ticks before burning stopped, alternative of {@link Entity.setFire}.
             */
            Fire: number;
            HasExecuted: false;
            HomeDimensionId: number;
            /**
             * @default [-2147483648, -2147483648, -2147483648] // when not set
             */
            HomePos: number[];
            /**
             * Last hurt tick, determines entity panic/attack state.
             */
            HurtTime: number;
            Invulnerable: boolean;
            /**
             * Normally, entity become angry when it attacked.
             */
            IsAngry: boolean;
            /**
             * Entity can move, alternative of {@link Entity.setMobile}.
             */
            IsAutonomous: boolean;
            /**
             * Entity is not adult, so when {@link Age} reaches `0` it is not baby.
             */
            IsBaby: boolean;
            /**
             * Entity is eating {@link Mainhand} item, displays particles around.
             */
            IsEating: boolean;
            /**
             * Entity is using elytra (to glide).
             */
            IsGliding: boolean;
            IsGlobal: boolean;
            /**
             * Patrols of pillagers following their leader.
             */
            IsIllagerCaptain: boolean;
            IsOrphaned: boolean;
            IsOutOfControl: boolean;
            /**
             * Entity breeded and prepared to duplicate itself, such as turtles.
             */
            IsPregnant: boolean;
            IsRoaring: boolean;
            /**
             * Entity sees dangerous thing around, such as villagers flee.
             */
            IsScared: boolean;
            IsStunned: boolean;
            /**
             * Entity is standing on water.
             */
            IsSwimming: boolean;
            /**
             * Entity is tamed, such as cats or dogs.
             */
            IsTamed: boolean;
            /**
             * Entity is trusting player (do not panic when it came),
             * such as foxes childs breeded by someone.
             */
            IsTrusting: boolean;
            /**
             * Dimension from entity transfered when is going to portal,
             * last saved state when loaded into dimension.
             */
            LastDimensionId: number;
            /**
             * Leashed with knot entity (normally, player).
             * @default -1
             */
            LeasherID: number;
            /**
             * Required on first death tick, drops loot again if set to `false`.
             */
            LootDropped: boolean;
            /**
             * @default 0 // when is not breeded
             */
            LoveCause: number;
            /**
             * Item set by {@link Entity.setCarriedItem}, entities uses it for attack and other AI-related things.
             */
            Mainhand: Item;
            MarkVariant: number;
            /**
             * Velocity of physics in-world, vector of moving target.
             */
            Motion: number[];
            /**
             * Entity is naturally spawned, not breeded or summoned.
             */
            NaturalSpawn: boolean;
            /**
             * Item set by {@link Entity.setOffhandItem}, in common cases entities ignores it, but players or extra-powered items (Totem of Undying fully restores non-player entities health) are useful.
             */
            Offhand: Item;
            /**
             * Entity is standing on landing.
             */
            OnGround: boolean;
            /**
             * @default -1
             */
            OwnerNew: number;
            /**
             * Entity can not be despawned.
             */
            Persistent: boolean;
            /**
             * Ticks before entity can move through portal again.
             */
            PortalCooldown: number;
            /**
             * XYZ absolute coordinates, alternative of {@link Entity.setPosition}.
             */
            Pos: number[];
            /**
             * Yaw (horizontal rotation angle) and pitch (vertical rotation angle) respectively in degrees, alternative of {@link Entity.setLookAngle}.
             */
            Rotation: number[];
            /**
             * When pig or strider is saddled (excludes horses or not?).
             */
            Saddled: boolean;
            /**
             * When sheep or snow golem is sheared.
             */
            Sheared: boolean;
            ShowBottom: boolean;
            /**
             * Entity is sitting, such as players or foxes.
             */
            Sitting: boolean;
            SkinID: number;
            Strength: number;
            StrengthMax: number;
            Surface: number;
            Tags: string[];
            /**
             * Following, attacking or anything else targeted entity.
             * @default -1
             */
            TargetID: number;
            /**
             * Tick when entity is born, used to {@link limitedLife} property.
             */
            TimeStamp: number;
            TradeExperience: number;
            TradeTier: number;
            /**
             * Entity UID, which is passed to Inner Core callbacks.
             */
            UniqueID: number;
            Variant: number;
            boundX: number;
            boundY: number;
            boundZ: number;
            /**
             * Entity may equip, take or replace containing item from drop.
             */
            canPickupItems: boolean;
            /**
             * Set of rules applied (starts with `+`) or excluded (starts with `-`)
             * from entity; it includes properties, tasks, etc.
             */
            definitions: string[];
            hasBoundOrigin: boolean;
            hasSetCanPickupItems: boolean;
            /**
             * Typed entity identifier without tags, such as `"minecraft:cow"`.
             */
            identifier: string;
            /**
             * Ticks after {@link TimeStamp} when entity become {@link Dead}.
             */
            limitedLife: number;
        }

        interface EntityAttribute extends Scriptable {
            Base: number;
            Current: number;
            DefaultMax: number;
            DefaultMin: number;
            Max: number;
            Min: number;
            /**
             * One of {@link Entity.Attributes} or your custom one.
             */
            Name: Entity.Attributes | string;
        }

        interface IBlockEntity extends Scriptable {
            /**
             * Typed identifier, such as `"Chest"`, `"Beacon"`, etc.
             */
            id: string;
            /**
             * Block Entity will be saved without instantiating new one when transporting (via pistons, commands, etc.).
             */
            isMovable: boolean;
            x: number, y: number, z: number;
        }

        interface IContainerBlockEntity extends IBlockEntity {
            /**
             * Contained slots, which is stored in numeral-index sorting starting with zero.
             * @remarks
             * Normally, slot information removes when item became "air" (disappears), so please
             * be careful when calling via `<tag>.Items[<index>]` convention!
             */
            Items: Item[];
        }

        interface ILootableBlockEntity extends IContainerBlockEntity {
            /**
             * Exploration map can be pointed here, tract as treasure.
             * @default false
             */
            Findable: boolean;
            /**
             * Definition to behavior pack path with extension, such as `"loot_tables/chests/end_city_treasure.json"`.
             */
            LootTable?: string;
            /**
             * Randomly generated seed to determine containment.
             */
            LootTableSeed?: number;
        }

        /**
         * **Chest** (Chest / Trapped Chest) with `ID = 0`.
         */
        interface ChestBlockEntity extends ILootableBlockEntity {
            id: "Chest";
            /**
             * If there's sometime created connection with double-chest.
             */
            pairlead?: boolean;
            pairx?: number;
            pairz?: number;
        }

        interface IFurnaceBlockEntity extends IContainerBlockEntity {
            /**
             * Currently burning fuel (appears in slot `1`) total time in ticks (e.g. coal burns in `1600` ticks) before burning completed.
             * @default 0
             */
            BurnDuration: number;
            /**
             * Counter to {@link BurnDuration}, when them equals furnace unlit.
             * @default 0
             */
            BurnTime: number;
            /**
             * Currently smelting item (appears in slot `0`) progress, result will be presented in slot with index `2`.
             */
            CookTime: number;
            /**
             * Accumulated experience, it will be dropped when result taken or furnace digged.
             * @default 0
             */
            StoredXPInt: number;
        }

        /**
         * **Furnace** with `ID = 1`.
         */
        interface FurnaceBlockEntity extends IFurnaceBlockEntity {
            id: "Furnace";
        }

        /**
         * **Hopper** with `ID = 2`.
         */
        interface HopperBlockEntity extends IContainerBlockEntity {
            id: "Hopper";
            /**
             * Ticks counter before transfering to watching side or down if hoppers unlocked.
             * @default 0
             */
            TransferCooldown: number;
        }

        /**
         * **NetherReactor** (Nether Reactor Core) with `ID = 3`.
         */
        interface NetherReactorBlockEntity extends IBlockEntity {
            id: "NetherReactor";
            /**
             * @default false
             */
            HasFinished: boolean;
            /**
             * @default false
             */
            IsInitialized: boolean;
            /**
             * @default 0
             */
            Progress: number;
        }

        /**
         * **Sign** with `ID = 4`.
         */
        interface SignBlockEntity extends IBlockEntity {
            id: "Sign";
            /**
             * Written text, delimited with newlines (`\n`, it may be more than 4 lines, but not rendered in-world).
             */
            Text: string;
            /**
             * No. Owners. Constant.
             * @default ""
             */
            TextOwner: string;
            /**
             * Basic text color, {@link EColor.RESET} restores it.
             */
            Color?: string;
        }

        /**
         * **MobSpawner** (Spawner) with `ID = 5`.
         */
        interface MobSpawnerBlockEntity extends IBlockEntity {
            id: "MobSpawner";
            /**
             * Ticks before spawning next entity.
             */
            Delay: number;
            /**
             * Placeholder animation in spawner height, constant.
             * @default 1.7999999523162842
             */
            DisplayEntityHeight: number;
            /**
             * Placeholder animation in spawner size relative to block itself.
             */
            DisplayEntityScale: number;
            /**
             * Placeholder animation in spawner width, constant.
             * @default 0.6000000238418579
             */
            DisplayEntityWidth: number;
            /**
             * Typed entity identifier, such as `"minecraft:enderman"`.
             * @default ""
             */
            EntityIdentifier: string;
            /**
             * Maximum containment mobs in {@link SpawnRange}, if here are more
             * spawner just emitting particles.
             * @default 6
             */
            MaxNearbyEntities: number;
            /**
             * Maximum time in ticks between mob spawing.
             * @default 800
             */
            MaxSpawnDelay: number;
            /**
             * Minimum time in ticks between mob spawing.
             * @default 800
             */
            MinSpawnDelay: number;
            /**
             * Anyone (of players) must be near to spawner, otherwise spawner
             * hides placeholder animation and stops.
             * @default 16
             */
            RequiredPlayerRange: number;
            /**
             * Maximum spawning limit, not everyone may spawned with each other
             * when place above comes to zero.
             * @default 4
             */
            SpawnCount: number;
            /**
             * Ranged AABB box where entities became.
             * @default 4
             */
            SpawnRange: number;
        }

        /**
         * **Skull** (Mob Head) with `ID = 6`.
         */
        interface SkullBlockEntity extends IBlockEntity {
            id: "Skull";
            /**
             * Whether dragon mouth powered by redstone.
             * @default 0
             */
            MouthMoving: boolean;
            /**
             * Cycling time in ticks, between full-cycled move down and up.
             * @default 0
             */
            MouthTickCount: number;
            /**
             * Rotation angle in degrees, value between `22.5` and `180` (with in-game step `22.5`).
             */
            Rotation: number;
            /**
             * `0` means skeleton, `1` wither skeleton, `2` zombie, `3` player, `4` creeper and `5` ender dragon.
             */
            SkullType: number;
        }

        /**
         * **FlowerPot** (Flower Pot) with `ID = 7`.
         */
        interface FlowerPotBlockEntity extends IBlockEntity {
            id: "FlowerPot";
            /**
             * Anything in particular, my cat preferr `"minecraft:brown_mushroom"` (`name` property).
             */
            PlantBlock?: Block;
        }

        /**
         * **BrewingStand** (Brewing Stand) with `ID = 8`.
         */
        interface BrewingStandBlockEntity extends IContainerBlockEntity {
            id: "BrewingStand";
            /**
             * Every potion cooks on same time ticks, counter.
             * When next ingredient is done, every potion in slots `1`-`3`
             * obtains tag `"wasJustBrewed" = true`.
             * @default 0
             */
            CookTime: number;
            /**
             * Fuel left of {@link FuelTotal} property, when it comes to zero
             * next charge from slot `4` was used.
             * @default 0
             */
            FuelAmount: number;
            /**
             * When fuel was taken from slot changes to it capacity, now availabled
             * only `"minecraft:blaze_powder"` (`name` property), which sets fuel to `20`.
             * @default 0
             */
            FuelTotal: number;
        }

        /**
         * **EnchantTable** (Enchanting Table) with `ID = 9`.
         */
        interface EnchantTableBlockEntity extends IBlockEntity {
            id: "EnchantTable";
            /**
             * Rotation angle in radians between `-Math.PI` and `Math.PI`.
             */
            rott: number;
        }

        /**
         * **DaylightDetector** (Daylight Sensor) with `ID = 10`.
         */
        interface DaylightDetectorBlockEntity extends IBlockEntity {
            id: "DaylightDetector";
        }        

        /**
         * **Music** (Note Block) with `ID = 11`.
         */
        interface MusicBlockEntity extends IBlockEntity {
            id: "Music";
            /**
             * Number between `0` and `24`, which changes note tone.
             */
            note: number;
        }

        /**
         * **Comparator** (Redstone Comparator) with `ID = 12`.
         */
        interface ComparatorBlockEntity extends IBlockEntity {
            id: "Comparator";
            /**
             * Redstone power, value between `0` and `15`.
             */
            OutputSignal: number;
        }

        /**
         * **Dispenser** with `ID = 13`.
         */
        interface DispenserBlockEntity extends IContainerBlockEntity {
            id: "Dispenser";
        }

        /**
         * **Dropper** with `ID = 14`.
         */
        interface DropperBlockEntity extends IContainerBlockEntity {
            id: "Dropper";
        }

        /**
         * **Cauldron** with `ID = 16`.
         * @remarks
         * Contains {@link Items}, but it intentionally not used.
         */
        interface CauldronBlockEntity extends IContainerBlockEntity {
            id: "Cauldron";
            /**
             * One of {@link EPotionEffect} enum values.
             * But... Maybe try `<enum value> - 1`?
             */
            PotionId: number;
            /**
             * Level of strength, value between `0` and `255` (more buggy to `32768`).
             * @default -1
             */
            PotionType: number;
            /**
             * Packed RGB color, one of my favorites is `-75715`.
             */
            CustomColor?: number;
        }

        /**
         * **ItemFrame** (Item Frame) with `ID = 17`.
         */
        interface ItemFrameBlockEntity extends IBlockEntity {
            id: "ItemFrame";
            /**
             * Item to be displayed in frame, tag doesn't exist by default.
             */
            Item?: Item;
            /**
             * Percent value between `0` and `1`; everything just cool when elytra
             * drops with chance `0.01`.
             * @default 1
             */
            ItemDropChance?: number;
            /**
             * Rotation angle in degress between `0` and `315` (with in-game step `45`).
             * Also changes comparator strength, triggers observers.
             */
            ItemRotation?: number;
        }

        /**
         * **PistonArm** (Piston) with `ID = 18`.
         */
        interface PistonArmBlockEntity extends IBlockEntity {
            id: "PistonArm";
            /**
             * Blocks attached to piston (excluding head) with slime and honey blocks.
             */
            AttachedBlocks: Block[];
            /**
             * Blocks prevents piston from moving, such as obsidian.
             */
            BreakBlocks: Block[];
            /**
             * Latest successfully changed state progress, which determine piston movement.
             */
            LastProgress: number;
            /**
             * Required by redstone state, if nothing blocking way, piston moves.
             */
            NewState: number;
            /**
             * Percent between `0` and `1` (with in-game step `0.5`), where `1` means activated.
             */
            Progress: number;
            /**
             * Currently state, `0` means pulled, `1` moving and `2` pushed.
             */
            State: number;
            /**
             * Whether piston crafted with slime and can transfer blocks back.
             */
            Sticky: boolean;
        }

        /**
         * **MovingBlock** (Moving Block) with `ID = 19`.
         */
        interface MovingBlockEntity extends IBlockEntity {
            id: "MovingBlock";
            /**
             * Block to be rendered as moving, let give a try with a `"minecraft:cake"` (`name` property).
             */
            movingBlock: Block;
            /**
             * Block to be rendered as moving above {@link movingBlock}, let give a try with a `"minecraft:flowing_lava"` (`name` property).
             */
            movingBlockExtra: Block;
            /**
             * If block connected with a sticky piston, it will appears here.
             * @default 0
             */
            pistonPosX: number;
            /**
             * If block connected with a sticky piston, it will appears here.
             * @default 1
             */
            pistonPosY: number;
            /**
             * If block connected with a sticky piston, it will appears here.
             * @default 0
             */
            pistonPosZ: number;
        }


        /**
         * **Beacon** with `ID = 21`.
         * @remarks
         * Primary effect requires just one-level platform, meanwhile secondary
         * works only when four-level built, otherwise fallbacks to primary.
         */
        interface BeaconBlockEntity extends IBlockEntity {
            id: "Beacon";
            /**
             * `0` means none, `1` speed, `2` haste, `3` resistance, `4` jump boost and `5` strength.
             * @default 0
             */
            primary: number;
            /**
             * `0` means none, `1` regeneration and `2` boost {@link primary} effect.
             * @default 0
             */
            secondary: number;
        }

        /**
         * **EndPortal** (End Portal) with `ID = 22`.
         */
        interface EndPortalBlockEntity extends IBlockEntity {
            id: "EndPortal";
        }

        /**
         * **EnderChest** (Ender Chest) with `ID = 23`.
         */
        interface EnderChestBlockEntity extends ILootableBlockEntity {
            id: "EnderChest";
        }

        /**
         * **EndGateway** (End Gateway) with `ID = 24`.
         */
        interface EndGatewayBlockEntity extends IBlockEntity {
            id: "EndGateway";
            /**
             * Counter, that drops when entity moves through portal.
             * Used to display purple beacon in portal for few hundred ticks.
             */
            Age: number;
            /**
             * XYZ coordinates of place portal transfers to.
             * @default [0, 0, 0] // so, under world
             */
            ExitPortal: number[];
        }

        /**
         * **ShulkerBox** (Shulker Box) with `ID = 25`.
         */
        interface ShulkerBoxBlockEntity extends ILootableBlockEntity {
            id: "ShulkerBox";
            /**
             * One of {@link EBlockSide} enum values.
             */
            facing: number;
        }

        /**
         * **CommandBlock** (Command Block) with `ID = 26`.
         */
        interface CommandBlockEntity extends IBlockEntity {
            id: "CommandBlock";
            /**
             * Command to be executed here, such as `/playanimation \@e[type=!minecraft:player] animation.humanoid.celebrating null 20`.
             */
            Command: string;
            /**
             * Like nametag, but above command block; hovering text.
             */
            CustomName: string;
            /**
             * When {@link LPCommandMode} is set to cycled and conditions are done,
             * first command executes without {@link TickDelay}.
             */
            ExecuteOnFirstTick: boolean;
            /**
             * `0` means impulse (single activation), `1` chain (activation when pointed to chain command block executed) and `2` cycled (forever execution between delay with condition checking).
             */
            LPCommandMode: number;
            /**
             * `0` means statement, `1` doesn't care about result.
             */
            LPConditionalMode: number;
            /**
             * `0` means always active, `1` requires redstone.
             */
            LPRedstoneMode: number;
            /**
             * When last execution has been performed.
             */
            LastExecution: number;
            /**
             * Message recorded with last execution, requires {@link TrackOutput} to be set to `true`.
             */
            LastOutput: string;
            /**
             * Splitted to command parts without first slash (or symbol if slash is not provided), requires {@link TrackOutput} to be set to `true`.
             */
            LastOutputParams: string[];
            SuccessCount: number;
            /**
             * Delay in ticks between executions (cycled blocks) or before starting it.
             */
            TickDelay: number;
            /**
             * Save last execution command results.
             */
            TrackOutput: boolean;
            /**
             * Database tracking identifier (in 1.16 equals `13`).
             */
            Version: number;
            auto: number;
            /**
             * Condition right now is `true`?
             */
            conditionMet: boolean;
            /**
             * Redstone signal found?
             */
            powered: boolean;
        }

        /**
         * **Bed** with `ID = 27`.
         */
        interface BedBlockEntity extends IBlockEntity {
            id: "Bed";
            /**
             * Index of bed color, where `0` is white; block palettes are same.
             * @default 0
             */
            color: number;
        }

        interface BannerPatternEntry extends Scriptable {
            /**
             * Index of pattern color, where `0` is white; block palettes are same.
             * @default 0
             */
            Color: number;
            /**
             * Pattern shortcut name, such as `"gra"`, `"mc"`, etc.
             */
            Pattern: string;
        }

        /**
         * **Banner** with `ID = 28`.
         */
        interface BannerBlockEntity extends IBlockEntity {
            id: "Banner";
            /**
             * Index of banner color, where `0` is white; block palettes are same.
             * @default 0
             */
            Base: number;
            /**
             * @default 0
             */
            Type: number;
            /**
             * Patterns to be applied on {@link Base} color.
             */
            Patterns?: BannerPatternEntry[];
        }

        /**
         * **StructureBlock** (Structure Block) with `ID = 32`.
         */
        interface StructureBlockEntity extends IBlockEntity {
            id: "StructureBlock";
            /**
             * Mode of structure block; `0` means load, `1` data (consumed by pools), `2` save.
             */
            data: number;
            /**
             * Metadata to be passed when {@link data} is set to data mode.
             */
            dataField: string;
            /**
             * Load or save NBT data of entities contained in bounds, existing data will be omitted.
             */
            ignoreEntities: boolean;
            /**
             * Load or save NBT data of players contained in bounds.
             */
            includePlayers: boolean;
            /**
             * Lower values destructs more random selected blocks.
             */
            integrity: number;
            /**
             * Powered by redstone signal?
             */
            isPowered: boolean;
            /**
             * `0` means no mirroring, `1` mirror above x, `2` mirror above y, `3` mirror above z
             */
            mirror: number;
            /**
             * `0` means save signal power (lit lamps, redstone itself, etc.), `1` forget (unlit sources will be updated when structure is placed).
             */
            redstoneSaveMode: number;
            /**
             * Blocks will be merged (with structure air as real air) or pasted as-is.
             */
            removeBlocks: boolean;
            /**
             * `0` means no rotation, `1` 90 degress, `2` 180 degress, `3` 270 degress.
             */
            rotation: number;
            /**
             * Seed to be passed when configuring {@link integrity}
             */
            seed: number;
            /**
             * Display bounds of structure in-world, includes vertex frame above.
             */
            showBoundingBox: boolean;
            /**
             * Vanilla or behavior pack namespaced (first directory determines namespace, subfolders joined with `.`) relative path to structure, try something like `"minecraft:endcity.ship"`.
             */
            structureName: string;
            xStructureOffset: number, yStructureOffset: number, zStructureOffset: number;
            xStructureSize: number, yStructureSize: number, zStructureSize: number;
        }

        /**
         * **Jukebox** with `ID = 33`.
         */
        interface JukeboxBlockEntity extends IBlockEntity {
            id: "JukeboxBlock";
            /**
             * Record disc that will be played, what about `"minecraft:music_disc_strad"` (`name` property).
             */
            RecordItem?: Item;
        }

        /**
         * **ChemistryTable** (Chemistry Equipment) with `ID = 34`.
         */
        interface ChemistryTableBlockEntity extends IBlockEntity {
            id: "ChemistryTable";
            /**
             * Brewing item data, that will be transpiled into materials, such as `17`, etc.
             */
            itemAux?: number;
            /**
             * Brewing item numeric ID, that will be transpiled into materials, such as `583`, etc.
             */
            itemId?: number;
            /**
             * Brewing item count, that will be transpiled into materials, such as `1`, etc.
             */
            itemStack?: number;
        }

        /**
         * **Conduit** with `ID = 35`.
         */
        interface ConduitBlockEntity extends IBlockEntity {
            id: "Conduit";
            /**
             * Whether conduit constructed or not, underwater monument blocks come out to help.
             * @default false
             */
            Active: boolean;
            /**
             * Entity UID to protect players in water nearest, attacks monsters when fully constructed.
             */
            Target: number;
        }

        /**
         * **JigsawBlock** (Jigsaw Block) with `ID = 36`.
         */
        interface JigsawBlockEntity extends IBlockEntity {
            id: "JigsawBlock";
            /**
             * Typed block identifier (includes state support such as `[facing=east]`) to be replaced when jigsaw activated.
             * @default "minecraft:air"
             */
            final_state: string;
            /**
             * Connection between jigsaw nodes, as-is.
             * @default "rollable"
             */
            joint: "rollable" | "aligned";
            /**
             * Associated structure name, jigsaw identifier, such as `"template:bundle"`.
             * @default "minecraft:empty"
             */
            name: string;
            /**
             * Required structure subset to be aligned with, such as, such as `"template:pipe"`.
             * @default "minecraft:empty"
             */
            target: string;
            /**
             * Pool in which jigsaws will be connected with each others, such as `"template:bundle/pipe"`.
             * @default "minecraft:empty"
             */
            target_pool: string;
        }

        /**
         * **Lectern** with `ID = 37`.
         */
        interface LecternBlockEntity extends IBlockEntity {
            id: "Lectern";
            /**
             * Standing book item, tag determines book placement.
             */
            book?: Item<ItemWritableBookTag>;
            /**
             * If book is placed, observer detects changed block.
             */
            hasBook?: boolean;
            /**
             * Index of page opened on lectern, redstone comparator obtains power `page / totalPages * 15`.
             */
            page?: number;
            /**
             * Total pages counted in {@link book}.
             */
            totalPages?: number;
        }

        /**
         * **BlastFurnace** (Blast Furnace) with `ID = 38`.
         */
        interface BlastFurnaceBlockEntity extends IFurnaceBlockEntity {
            id: "BlastFurnace";
        }

        /**
         * **Smoker** with `ID = 39`.
         */
        interface SmokerBlockEntity extends IFurnaceBlockEntity {
            id: "Smoker";
        }

        /**
         * **Bell** with `ID = 40`.
         */
        interface BellBlockEntity extends IBlockEntity {
            id: "Bell";
            /**
             * There is 2 surface (such as `1`), 4 on side and 1 at top (`255`) locations.
             */
            Direction: number;
            /**
             * Whether sound is playing.
             */
            Ringing: boolean;
            /**
             * Ringing counter, determines animation of bell.
             */
            Ticks: number;
        }

        /**
         * **Campfire** (Campfire / Soul Campfire) with `ID = 41`.
         */
        interface CampfireBlockEntity extends IBlockEntity {
            id: "Campfire";
            /**
             * Ticks counter of smelting item.
             * @default 0
             */
            ItemTime1: number;
            /**
             * Item that will be smelted on campfire.
             */
            Item1?: Item;
            /**
             * {@inheritDoc NBT.Templates.CampfireBlockEntity.ItemTime1}
             */
            ItemTime2: number;
            /**
             * {@inheritDoc NBT.Templates.CampfireBlockEntity.Item1}
             */
            Item2?: Item;
            /**
             * {@inheritDoc NBT.Templates.CampfireBlockEntity.ItemTime1}
             */
            ItemTime3: number;
            /**
             * {@inheritDoc NBT.Templates.CampfireBlockEntity.Item1}
             */
            Item3?: Item;
            /**
             * {@inheritDoc NBT.Templates.CampfireBlockEntity.ItemTime1}
             */
            ItemTime4: number;
            /**
             * {@inheritDoc NBT.Templates.CampfireBlockEntity.Item1}
             */
            Item4?: Item;
        }

        /**
         * **Barrel** with `ID = 42`.
         */
        interface BarrelBlockEntity extends ILootableBlockEntity {
            id: "Barrel";
        }

        /**
         * **Beehive** (Beehive / Bee Nest) with `ID = 43`.
         */
        interface BeehiveBlockEntity extends IBlockEntity {
            id: "Beehive";
            /**
             * Naturally generated beehives summon bees inside, before player encounters them.
             * @default false
             */
            ShouldSpawnBees: boolean;
            /**
             * Bees. Theoretically, any entity may enter and leave onto beehive.
             */
            Occupants?: BeehiveBlockEntityOccupant[];
        }

        interface BeehiveBlockEntityOccupant extends Scriptable {
            /**
             * Typed entity identifier with tags, such as `"minecraft:bee<>"`.
             */
            ActorIdentifier: string;
            /**
             * Entity NBTs; properties, attributes, definitions, etc.
             */
            SaveData: Entity;
            /**
             * Countdown before entity left beehive in ticks.
             */
            TicksLeftToStay: number;
        }
        /**
         * **Lodestone** with `ID = 44`.
         */
        interface LodestoneBlockEntity extends IBlockEntity {
            id: "Lodestone";
            /**
             * Compass points to this lodestone.
             */
            trackingHandle: boolean;
        }
    }
}
