/**
 * Module containing enums that can make user code more readable.
 * @remarks
 * Consider specified sub-enum to determine which version
 * specific rellocation must be used.
 */
declare namespace Native {
    /**
     * Defines armor type and armor slot index in player's inventory.
     * @deprecated Use {@link EArmorType} instead.
     */
    enum ArmorType {
        helmet = 0,
        chestplate = 1,
        leggings = 2,
        boots = 3
    }

    /**
     * Defines item category in creative inventory.
     * @deprecated Use {@link EItemCategory} instead.
     */
    enum ItemCategory {
        /**
         * @since 2.3.0b112
         */
        CONSTRUCTION = 1,
        /**
         * @since 2.3.0b112
         */
        NATURE = 2,
        DECORATION = 2,
        /**
         * @since 2.3.0b112
         */
        EQUIPMENT = 3,
        TOOL = 3,
        MATERIAL = 4,
        /**
         * @since 2.3.0b112
         */
        ITEMS = 4,
        FOOD = 4,
        INTERNAL = 5,
        /**
         * @since 2.3.0b112
         */
        COMMAND_ONLY = 5
    }

    /**
     * Defines all existing vanilla particles.
     * @deprecated Use {@link EParticleType} instead.
     */
    enum ParticleType {
        bubble = 1,
        cloud = 5,
        smoke = 6,
        flame = 8,
        lava = 9,
        smoke2 = 10,
        redstone = 11,
        snowballpoof = 14,
        hugeexplosion = 15,
        hugeexplosionSeed = 16,
        mobFlame = 17,
        heart = 18,
        terrain = 19,
        suspendedTown = 20,
        portal = 21,
        rainSplash = 23,
        dripWater = 24,
        splash = 25,
        dripLava = 27,
        ink = 28,
        fallingDust = 29,
        spell3 = 30,
        spell2 = 31,
        spell = 32,
        slime = 34,
        waterWake = 35,
        angryVillager = 36,
        happyVillager = 37,
        enchantmenttable = 38,
        note = 40,
        crit = 41,
        itemBreak = 42,
        largeexplode = 61
    }

    /**
     * Defines text colors and font styles for chat and tip messages.
     */
    enum Color {
        BEGIN = "§",
        BLACK = "§0",
        DARK_BLUE = "§1",
        DARK_GREEN = "§2",
        DARK_AQUA = "§3",
        DARK_RED = "§4",
        DARK_PURPLE = "§5",
        GOLD = "§6",
        GRAY = "§7",
        DARK_GRAY = "§8",
        BLUE = "§9",
        GREEN = "§a",
        AQUA = "§b",
        RED = "§c",
        LIGHT_PURPLE = "§d",
        YELLOW = "§e",
        WHITE = "§f",
        OBFUSCATED = "§k",
        BOLD = "§l",
        STRIKETHROUGH = "§m",
        UNDERLINE = "§n",
        ITALIC = "§o",
        RESET = "§r"
    }

    /**
     * Defines all vanilla entity type IDs.
     * @deprecated Use {@link EEntityType} instead.
     */
    enum EntityType {
        CHICKEN = 10,
        COW = 11,
        PIG = 12,
        SHEEP = 13,
        WOLF = 14,
        VILLAGER = 15,
        MUSHROOM_COW = 16,
        SQUID = 17,
        RABBIT = 18,
        BAT = 19,
        IRON_GOLEM = 20,
        SNOW_GOLEM = 21,
        OCELOT = 22,
        HORSE = 23,
        DONKEY = 24,
        MULE = 25,
        SKELETON_HORSE = 26,
        ZOMBIE_HORSE = 27,
        POLAR_BEAR = 28,
        LLAMA = 29,
        PARROT = 30,
        DOLPHIN = 31,
        ZOMBIE = 32,
        CREEPER = 33,
        SKELETON = 34,
        SPIDER = 35,
        PIG_ZOMBIE = 36,
        SLIME = 37,
        ENDERMAN = 38,
        SILVERFISH = 39,
        CAVE_SPIDER = 40,
        GHAST = 41,
        LAVA_SLIME = 42,
        BLAZE = 43,
        ZOMBIE_VILLAGER = 44,
        /**
         * @since 2.3.0b112
         */
        WITCH = 45,
        /**
         * @deprecated Mistypo.
         */
        WHITCH = 45,
        STRAY = 46,
        HUSK = 47,
        /**
         * @since 2.3.0b112
         */
        WITHER_SKELETON = 48,
        /**
         * @deprecated Mistypo.
         */
        WHITHER_SKELETON = 48,
        GUARDIAN = 49,
        /**
         * @since 2.3.0b112
         */
        ELDER_GUARDIAN = 50,
        /**
         * @deprecated Mistypo.
         */
        ENDER_GUARDIAN = 50,
        /**
         * @since 2.3.0b112
         */
        WITHER = 52,
        /**
         * @deprecated Mistypo.
         */
        WHITHER = 52,
        ENDER_DRAGON = 53,
        SHULKER = 54,
        ENDERMITE = 55,
        VINDICATOR = 57,
        PHANTOM = 58,
        RAVAGER = 59,
        ARMOR_STAND = 61,
        PLAYER = 63,
        ITEM = 64,
        PRIMED_TNT = 65,
        FALLING_BLOCK = 66,
        MOVING_BLOCK = 67,
        EXPERIENCE_POTION = 68,
        EXPERIENCE_ORB = 69,
        EYE_OF_ENDER_SIGNAL = 70,
        ENDER_CRYSTAL = 71,
        FIREWORKS_ROCKET = 72,
        THROWN_TRIDENT = 73,
        TURTLE = 74,
        CAT = 75,
        SHULKER_BULLET = 76,
        FISHING_HOOK = 77,
        /**
         * @since 2.3.0b112
         */
        DRAGON_FIREBALL = 79,
        /**
         * @deprecated Mistypo.
         */
        DRAGON_FIREBOLL = 79,
        ARROW = 80,
        SNOWBALL = 81,
        EGG = 82,
        PAINTING = 83,
        MINECART = 84,
        FIREBALL = 85,
        THROWN_POTION = 86,
        ENDER_PEARL = 87,
        LEASH_KNOT = 88,
        /**
         * @since 2.3.0b112
         */
        WITHER_SKULL = 89,
        /**
         * @deprecated Mistypo.
         */
        WHITHER_SKULL = 89,
        BOAT = 90,
        /**
         * @since 2.3.0b112
         */
        WITHER_SKULL_DANGEROUS = 91,
        /**
         * @deprecated Mistypo.
         */
        WHITHER_SKULL_DANGEROUS = 91,
        LIGHTNING_BOLT = 93,
        SMALL_FIREBALL = 94,
        AREA_EFFECT_CLOUD = 95,
        HOPPER_MINECART = 96,
        TNT_COMMAND = 97,
        CHEST_MINECART = 98,
        COMMAND_BLOCK_MINECART = 100,
        LINGERING_POTION = 101,
        LLAMA_SPLIT = 102,
        EVOCATION_FANG = 103,
        EVOCATION_ILLAGER = 104,
        VEX = 105,
        PUFFERFISH = 108,
        SALMON = 109,
        DROWNED = 110,
        TROPICALFISH = 111,
        COD = 112,
        PANDA = 113,
        PILLAGER = 114,
        VILLAGER_V2 = 115,
        /**
         * @since 2.3.0b112
         */
        ZOMBIE_VILLAGER_V2 = 116,
        /**
         * @deprecated Mistypo.
         */
        ZOMBIE_VILLAGE_V2 = 116,
        SHIELD = 117,
        WANDERING_TRADER = 118,
        /**
         * @since 2.3.0b112
         */
        ELDER_GUARDIAN_GHOST = 120,
        /**
         * @deprecated Mistypo.
         */
        ENDER_GUARDIAN_GHOST = 120
    }

    /**
     * Defines vanilla mob render types.
     * @deprecated Use {@link EMobRenderType} instead.
     */
    enum MobRenderType {
        tnt = 2,
        human = 3,
        item = 4,
        chicken = 5,
        cow = 6,
        mushroomCow = 7,
        pig = 8,
        sheep = 9,
        bat = 10,
        wolf = 11,
        villager = 12,
        zombie = 14,
        zombiePigman = 15,
        lavaSlime = 16,
        ghast = 17,
        blaze = 18,
        skeleton = 19,
        spider = 20,
        silverfish = 21,
        creeper = 22,
        slime = 23,
        enderman = 24,
        arrow = 25,
        fishHook = 26,
        player = 27,
        egg = 28,
        snowball = 29,
        unknownItem = 30,
        thrownPotion = 31,
        painting = 32,
        fallingTile = 33,
        minecart = 34,
        boat = 35,
        squid = 36,
        fireball = 37,
        smallFireball = 38,
        villagerZombie = 39,
        experienceOrb = 40,
        lightningBolt = 41,
        ironGolem = 42,
        ocelot = 43,
        snowGolem = 44,
        expPotion = 45,
        rabbit = 46,
        witch = 47,
        camera = 48,
        map = 50
    }

    /**
     * Defines vanilla potion effects.
     * @deprecated Use {@link EPotionEffect} instead.
     */
    enum PotionEffect {
        movementSpeed = 1,
        movementSlowdown = 2,
        digSpeed = 3,
        digSlowdown = 4,
        damageBoost = 5,
        heal = 6,
        harm = 7,
        jump = 8,
        confusion = 9,
        regeneration = 10,
        damageResistance = 11,
        fireResistance = 12,
        waterBreathing = 13,
        invisibility = 14,
        blindness = 15,
        nightVision = 16,
        hunger = 17,
        weakness = 18,
        poison = 19,
        wither = 20,
        healthBoost = 21,
        absorption = 22,
        saturation = 23,
        levitation = 24,
        fatal_poison = 25,
        conduit_power = 26,
        slow_falling = 27,
        bad_omen = 28,
        village_hero = 29
    }

    /**
     * Defines the three dimensions currently available for player.
     * @deprecated Use {@link EDimension} instead.
     */
    enum Dimension {
        NORMAL = 0,
        /**
         * @since 2.3.0b112
         */
        OVERWORLD = 0,
        NETHER = 1,
        END = 2
    }

    /**
     * Defines item animation types.
     * @deprecated Use {@link EItemAnimation} instead.
     */
    enum ItemAnimation {
        normal = 0,
        bow = 4
    }

    /**
     * Defines numeric representation for each block side.
     * @deprecated Use {@link EBlockSide} instead.
     */
    enum BlockSide {
        DOWN = 0,
        UP = 1,
        NORTH = 2,
        SOUTH = 3,
        WEST = 4,
        EAST = 5
    }

    /**
     * Defines numeric IDs of all vanilla enchantments.
     * @deprecated Use {@link EEnchantment} instead.
     */
    enum Enchantment {
        PROTECTION = 0,
        FIRE_PROTECTION = 1,
        FEATHER_FALLING = 2,
        BLAST_PROTECTION = 3,
        PROJECTILE_PROTECTION = 4,
        THORNS = 5,
        RESPIRATION = 6,
        AQUA_AFFINITY = 7,
        DEPTH_STRIDER = 8,
        SHARPNESS = 9,
        SMITE = 10,
        BANE_OF_ARTHROPODS = 11,
        KNOCKBACK = 12,
        FIRE_ASPECT = 13,
        LOOTING = 14,
        EFFICIENCY = 15,
        SILK_TOUCH = 16,
        UNBREAKING = 17,
        FORTUNE = 18,
        POWER = 19,
        PUNCH = 20,
        FLAME = 21,
        INFINITY = 22,
        LUCK_OF_THE_SEA = 23,
        LURE = 24,
        FROST_WALKER = 25,
        MENDING = 26,
        BINDING_CURSE = 27,
        VANISHING_CURSE = 28,
        IMPALING = 29,
        RIPTIDE = 30,
        LOYALTY = 31,
        CHANNELING = 32
    }

    /**
     * Defines what enchantments can or cannot be applied to every
     * instrument type.
     * @deprecated Use {@link EEnchantType} instead.
     */
    enum EnchantType {
        helmet = 1,
        leggings = 2,
        boots = 4,
        chestplate = 8,
        weapon = 16,
        bow = 32,
        hoe = 64,
        shears = 128,
        flintAndSteel = 256,
        axe = 512,
        pickaxe = 1024,
        shovel = 2048,
        fishingRod = 4096,
        all = 16383,
        book = 16383
    }

    /**
     * Defines possible render layers (display methods) for blocks.
     * @deprecated Use {@link EBlockRenderLayer} instead.
     */
    enum BlockRenderLayer {
        doubleside = 0,
        water = 1,
        blend = 2,
        opaque = 3,
        far = opaque,
        alpha = 4,
        opaque_seasons = 6,
        seasons_far = opaque_seasons,
        alpha_seasons = 7,
        seasons_far_alpha = alpha_seasons,
        alpha_single_side = 8
    }

    /**
     * Defines possible game difficulty.
     * @deprecated Use {@link EGameDifficulty} instead.
     */
    enum GameDifficulty {
        PEACEFUL = 0,
        EASY = 1,
        NORMAL = 2,
        HARD = 3
    }

    /**
     * Defines possible game modes.
     * @deprecated Use {@link EGameMode} instead.
     */
    enum GameMode {
        SURVIVAL = 0,
        CREATIVE = 1,
        ADVENTURE = 2,
        SPECTATOR = 3
    }

    /**
     * Defines player's abilities.
     * @deprecated Use {@link EPlayerAbility} instead.
     */
    enum PlayerAbility {
        ATTACK_MOBS = "attackmobs",
        ATTACK_PLAYERS = "attackplayers",
        BUILD = "build",
        DOORS_AND_SWITCHES = "doorsandswitches",
        FLYING = "flying",
        FLYSPEED = "flySpeed",
        INSTABUILD = "instabuild",
        INVULNERABLE = "invulnerable",
        LIGHTNING = "lightning",
        MAYFLY = "mayfly",
        MINE = "mine",
        MUTED = "mute",
        NOCLIP = "noclip",
        OPERATOR_COMMANDS = "op",
        OPEN_CONTAINERS = "opencontainers",
        TELEPORT = "teleport",
        WALKSPEED = "walkSpeed",
        WORLDBUILDER = "worldbuilder"
    }

    /**
     * @deprecated Use {@link ETileEntityType} instead.
     */
    enum TileEntityType {
        NONE = -1,
        CHEST = 0,
        FURNACE = 1,
        HOPPER = 2,
        BREWING_STAND = 8,
        DISPENSER = 13,
        CAULDRON = 16,
        BEACON = 21,
        JUKEBOX = 33,
        LECTERN = 37
    }

    /**
     * @deprecated Use {@link ENbtDataType} instead.
     */
    enum NbtDataType {
        END_TAG = 0,
        BYTE = 1,
        SHORT = 2,
        INT = 3,
        INT64 = 4,
        FLOAT = 5,
        DOUBLE = 6,
        BYTE_ARRAY = 7,
        STRING = 8,
        LIST = 9,
        COMPOUND = 10,
        INT_ARRAY = 11
    }
}
