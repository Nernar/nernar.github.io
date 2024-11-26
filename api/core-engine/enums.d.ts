/**
 * Defines armor type and armor slot index in player's inventory.
 * @since 2.2.0b75
 */
declare enum EArmorType {
    HELMET = 0,
    CHESTPLATE = 1,
    LEGGINGS = 2,
    BOOTS = 3
}

/**
 * Defines possible render layers (display methods) for blocks.
 * @since 2.2.0b75
 */
declare enum EBlockRenderLayer {
    DOUBLE_SIDE = 0,
    BLEND = 1,
    OPAQUE = 2,
    ALPHA = 3,
    /**
     * @since 2.3.0b112
     */
    ALPHA_TEST = 4,
    OPAQUE_SEASONS = 5,
    ALPHA_SEASONS = 6,
    ALPHA_SINGLE_SIDE = 7,
    END_PORTAL = 8,
    BARRIER = 9,
    STRUCTURE_VOID = 10
}

/**
 * Defines numeric representation for each block side.
 * @since 2.2.0b75
 */
declare enum EBlockSide {
    DOWN = 0,
    UP = 1,
    NORTH = 2,
    SOUTH = 3,
    WEST = 4,
    EAST = 5
}

/**
 * Defines numeric representation for each vanilla block state.
 * @since 2.2.1b89
 */
declare enum EBlockStates {
    HEIGHT = 0,
    COVERED_BIT = 1,
    TORCH_FACING_DIRECTION = 2,
    OPEN_BIT = 3,
    DIRECTION = 4,
    UPSIDE_DOWN_BIT = 5,
    ATTACHED_BIT = 6,
    SUSPENDED_BIT = 7,
    POWERED_BIT = 8,
    DISARMED_BIT = 9,
    CRACKED_STATE = 10,
    TURTLE_EGG_COUNT = 11,
    TWISTING_VINES_AGE = 12,
    TOP_SLOT_BIT = 13,
    PORTAL_AXIS = 14,
    FACING_DIRECTION = 15,
    RAIL_DIRECTION = 16,
    STANDING_ROTATION = 17,
    WEIRDO_DIRECTION = 18,
    CORAL_DIRECTION = 19,
    LEVER_DIRECTION = 20,
    PILLAR_AXIS = 21,
    VINE_DIRECTION_BITS = 22,
    AGE_BIT = 23,
    AGE = 24,
    BITE_COUNTER = 25,
    BREWING_STAND_SLOT_A_BIT = 26,
    BREWING_STAND_SLOT_B_BIT = 27,
    BREWING_STAND_SLOT_C_BIT = 28,
    BUTTON_PRESSED_BIT = 29,
    CONDITIONAL_BIT = 30,
    DAMAGE = 31,
    DOOR_HINGE_BIT = 32,
    UPPER_BLOCK_BIT = 33,
    END_PORTAL_EYE_BIT = 34,
    EXPLODE_BIT = 35,
    FILL_LEVEL = 36,
    GROWTH = 37,
    HEAD_PIECE_BIT = 38,
    INFINIBURN_BIT = 39,
    IN_WALL_BIT = 40,
    LIQUID_DEPTH = 41,
    MOISTURIZED_AMOUNT = 42,
    NO_DROP_BIT = 43,
    KELP_AGE = 44,
    OCCUPIED_BIT = 45,
    OUTPUT_SUBTRACT_BIT = 46,
    OUTPUT_LIT_BIT = 47,
    PERSISTENT_BIT = 48,
    RAIL_DATA_BIT = 49,
    REDSTONE_SIGNAL = 50,
    REPEATER_DELAY = 51,
    TOGGLE_BIT = 52,
    TRIGGERED_BIT = 53,
    UPDATE_BIT = 54,
    ALLOW_UNDERWATER_BIT = 55,
    COLOR_BIT = 56,
    DEAD_BIT = 57,
    CLUSTER_COUNT = 58,
    ITEM_FRAME_MAP_BIT = 59,
    SAPLING_TYPE = 60,
    DRAG_DOWN = 61,
    COLOR = 62,
    BAMBOO_THICKNESS = 63,
    BAMBOO_LEAF_SIZE = 64,
    STABILITY = 65,
    STABILITY_CHECK_BIT = 66,
    WOOD_TYPE = 67,
    STONE_TYPE = 68,
    DIRT_TYPE = 69,
    SAND_TYPE = 70,
    OLD_LOG_TYPE = 71,
    NEW_LOG_TYPE = 72,
    CHISEL_TYPE = 73,
    DEPRECATED = 74,
    OLD_LEAF_TYPE = 75,
    NEW_LEAF_TYPE = 76,
    SPONGE_TYPE = 77,
    SAND_STONE_TYPE = 78,
    TALL_GRASS_TYPE = 79,
    FLOWER_TYPE = 80,
    STONE_SLAB_TYPE = 81,
    STONE_SLAB_TYPE2 = 82,
    STONE_SLAB_TYPE3 = 83,
    STONE_SLAB_TYPE4 = 84,
    MONSTER_EGG_STONE_TYPE = 85,
    STONE_BRICK_TYPE = 86,
    HUGE_MUSHROOM_BITS = 87,
    WALL_BLOCK_TYPE = 88,
    PRISMARINE_BLOCK_TYPE = 89,
    DOUBLE_PLANT_TYPE = 90,
    CHEMISTRY_TABLE_TYPE = 91,
    SEA_GRASS_TYPE = 92,
    CORAL_COLOR = 93,
    CAULDRON_LIQUID = 94,
    HANGING_BIT = 95,
    STRIPPED_BIT = 96,
    CORAL_HANG_TYPE_BIT = 97,
    ATTACHMENT = 98,
    STRUCTURE_VOID_TYPE = 99,
    STRUCTURE_BLOCK_TYPE = 100,
    EXTINGUISHED = 101,
    COMPOSTER_FILL_LEVEL = 102,
    CORAL_FAN_DIRECTION = 103,
    BLOCK_LIGHT_LEVEL = 104,
    BEEHIVE_HONEY_LEVEL = 105,
    WEEPING_VINES_AGE = 106,
    WALL_POST_BIT = 107,
    WALL_CONNECTION_TYPE_NORTH = 108,
    WALL_CONNECTION_TYPE_EAST = 109,
    WALL_CONNECTION_TYPE_SOUTH = 110,
    WALL_CONNECTION_TYPE_WEST = 111,
    ROTATION = 112,
    RESPAWN_ANCHOR_CHARGE = 113
}

/**
 * Defines text colors and font styles for chat and tip messages.
 * @since 2.2.0b75
 * @deprecated Use {@link Native.Color}, because enum is mistyped.
 */
declare enum EColor {
    BEGIN = "в§",
    BLACK = "в§0",
    DARK_BLUE = "в§1",
    DARK_GREEN = "в§2",
    DARK_AQUA = "в§3",
    DARK_RED = "в§4",
    DARK_PURPLE = "в§5",
    GOLD = "в§6",
    GRAY = "в§7",
    DARK_GRAY = "в§8",
    BLUE = "в§9",
    GREEN = "в§a",
    AQUA = "в§b",
    RED = "в§c",
    LIGHT_PURPLE = "в§d",
    YELLOW = "в§e",
    WHITE = "в§f",
    OBFUSCATED = "в§k",
    BOLD = "в§l",
    STRIKETHROUGH = "в§m",
    UNDERLINE = "в§n",
    ITALIC = "в§o",
    RESET = "в§r"
}

/**
 * Defines numeric representation for three vanilla dimensions.
 * @since 2.2.0b75
 */
declare enum EDimension {
    NORMAL = 0,
    /**
     * @since 2.3.0b112
     */
    OVERWORLD = 0,
    NETHER = 1,
    END = 2
}

/**
 * Defines what enchantments can or cannot be applied to every instrument type.
 * @since 2.2.0b75
 */
declare enum EEnchantType {
    HELMET = 1,
    LEGGINGS = 2,
    BOOTS = 4,
    CHESTPLATE = 8,
    WEAPON = 16,
    BOW = 32,
    HOE = 64,
    SHEARS = 128,
    FLINT_AND_STEEL = 256,
    AXE = 512,
    PICKAXE = 1024,
    SHOVEL = 2048,
    FISHING_ROD = 4096,
    ALL = 16383,
    BOOK = 16383
}

/**
 * Defines numeric IDs of all vanilla enchantments.
 * @since 2.2.0b75
 */
declare enum EEnchantment {
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
 * Defines all vanilla entity type numeric IDs.
 * @since 2.2.0b75
 */
declare enum EEntityType {
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
 * Defines possible game difficulties.
 * @since 2.2.0b75
 */
declare enum EGameDifficulty {
    PEACEFUL = 0,
    EASY = 1,
    NORMAL = 2,
    HARD = 3
}

/**
 * Defines possible game modes.
 * @since 2.2.0b75
 */
declare enum EGameMode {
    SURVIVAL = 0,
    CREATIVE = 1,
    ADVENTURE = 2,
    SPECTATOR = 3
}

/**
 * Defines item animation types.
 * @since 2.2.0b75
 */
declare enum EItemAnimation {
    NORMAL = 0,
    /**
     * @since 2.3.1b115
     */
    NONE = 0,
    /**
     * @since 2.3.1b115
     */
    EAT = 1,
    /**
     * @since 2.3.1b115
     */
    DRINK = 2,
    /**
     * @since 2.3.1b115
     */
    BLOCK = 3,
    BOW = 4,
    /**
     * @since 2.3.1b115
     */
    CAMERA = 5,
    /**
     * @since 2.3.1b115
     */
    SPEAR = 6,
    /**
     * @since 2.3.1b115
     */
    CROSSBOW = 9
}

/**
 * Defines vanilla item categories in creative inventory.
 * @since 2.2.0b75
 */
declare enum EItemCategory {
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
 * Defines vanilla mob render types.
 * @since 2.2.0b75
 */
declare enum EMobRenderType {
    TNT = 2,
    HUMAN = 3,
    ITEM = 4,
    CHICKEN = 5,
    COW = 6,
    MUSHROOM_COW = 7,
    PIG = 8,
    SHEEP = 9,
    BAT = 10,
    WOLF = 11,
    VILLAGER = 12,
    ZOMBIE = 14,
    ZOMBIE_PIGMAN = 15,
    LAVA_SLIME = 16,
    GHAST = 17,
    BLAZE = 18,
    SKELETON = 19,
    SPIDER = 20,
    SILVERFISH = 21,
    CREEPER = 22,
    SLIME = 23,
    ENDERMAN = 24,
    ARROW = 25,
    FISH_HOOK = 26,
    PLAYER = 27,
    EGG = 28,
    SNOWBALL = 29,
    UNKNOWN_ITEM = 30,
    THROWN_POTION = 31,
    PAINTING = 32,
    FALLING_TILE = 33,
    MINECART = 34,
    BOAT = 35,
    SQUID = 36,
    FIREBALL = 37,
    SMALL_FIREBALL = 38,
    VILLAGER_ZOMBIE = 39,
    EXPERIENCE_ORB = 40,
    LIGHTNING_BOLT = 41,
    IRON_GOLEM = 42,
    OCELOT = 43,
    SNOW_GOLEM = 44,
    EXP_POTION = 45,
    RABBIT = 46,
    WITCH = 47,
    CAMERA = 48,
    MAP = 50
}

/**
 * Defines numeric representation for each NBT data type.
 * @since 2.2.0b75
 */
declare enum ENbtDataType {
    TYPE_END_TAG = 0,
    TYPE_BYTE = 1,
    TYPE_SHORT = 2,
    TYPE_INT = 3,
    TYPE_INT64 = 4,
    TYPE_FLOAT = 5,
    TYPE_DOUBLE = 6,
    TYPE_BYTE_ARRAY = 7,
    TYPE_STRING = 8,
    TYPE_LIST = 9,
    TYPE_COMPOUND = 10,
    TYPE_INT_ARRAY = 11
}

/**
 * Defines all existing vanilla particles.
 * @since 2.2.0b75
 */
declare enum EParticleType {
    BUBBLE = 1,
    CLOUD = 5,
    SMOKE = 6,
    FLAME = 8,
    LAVA = 9,
    SMOKE2 = 10,
    REDSTONE = 11,
    SNOWBALLPOOF = 14,
    HUGEEXPLOSION = 15,
    HUGEEXPLOSION_SEED = 16,
    MOB_FLAME = 17,
    HEART = 18,
    TERRAIN = 19,
    SUSPENDED_TOWN = 20,
    PORTAL = 21,
    RAIN_SPLASH = 23,
    DRIP_WATER = 24,
    SPLASH = 25,
    DRIP_LAVA = 27,
    INK = 28,
    FALLING_DUST = 29,
    SPELL3 = 30,
    SPELL2 = 31,
    SPELL = 32,
    SLIME = 34,
    WATER_WAKE = 35,
    ANGRY_VILLAGER = 36,
    HAPPY_VILLAGER = 37,
    ENCHANTMENTTABLE = 38,
    NOTE = 40,
    CRIT = 41,
    ITEM_BREAK = 42,
    /**
     * @since 2.3.0b112
     */
    SOUL_FLAME = 53,
    LARGEEXPLODE = 61
}

/**
 * Defines player's abilities.
 * @since 2.2.0b75
 */
declare enum EPlayerAbility {
    ATTACK_MOBS = "attackmobs",
    ATTACK_PLAYERS = "attackplayers",
    BUILD = "build",
    DOORS_AND_SWITCHES = "doorsandswitches",
    FLYSPEED = "flyspeed",
    FLYING = "flying",
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
    WALKSPEED = "walkspeed",
    WORLDBUILDER = "worldbuilder"
}

/**
 * Defines vanilla potion effects.
 * @since 2.2.0b75
 */
declare enum EPotionEffect {
    MOVEMENT_SPEED = 1,
    MOVEMENT_SLOWDOWN = 2,
    DIG_SPEED = 3,
    DIG_SLOWDOWN = 4,
    DAMAGE_BOOST = 5,
    HEAL = 6,
    HARM = 7,
    JUMP = 8,
    CONFUSION = 9,
    REGENERATION = 10,
    DAMAGE_RESISTANCE = 11,
    FIRE_RESISTANCE = 12,
    WATER_BREATHING = 13,
    INVISIBILITY = 14,
    BLINDNESS = 15,
    NIGHT_VISION = 16,
    HUNGER = 17,
    WEAKNESS = 18,
    POISON = 19,
    WITHER = 20,
    HEALTH_BOOST = 21,
    ABSORPTION = 22,
    SATURATION = 23,
    LEVITATION = 24,
    FATAL_POISON = 25,
    CONDUIT_POWER = 26,
    SLOW_FALLING = 27,
    BAD_OMEN = 28,
    VILLAGE_HERO = 29
}

/**
 * Defines numeric representation for vanilla TileEntity types.
 * Use {@link NativeTileEntity} class to work with them.
 * @since 2.2.0b75
 */
declare enum ETileEntityType {
    NONE = -1,
    CHEST = 0,
    FURNACE = 1,
    HOPPER = 2,
    /**
     * @since 2.3.1b115
     */
    NETHER_REACTOR = 3,
    /**
     * @since 2.3.1b115
     */
    SIGN = 4,
    /**
     * @since 2.3.1b115
     */
    MOB_SPAWNER = 5,
    /**
     * @since 2.3.1b115
     */
    SKULL = 6,
    /**
     * @since 2.3.1b115
     */
    FLOWER_POT = 7,
    BREWING_STAND = 8,
    /**
     * @since 2.3.1b115
     */
    ENCHANTING_TABLE = 9,
    /**
     * @since 2.3.1b115
     */
    DAYLIGHT_DETECTOR = 10,
    /**
     * @since 2.3.1b115
     */
    MUSIC_BLOCK = 11,
    /**
     * @since 2.3.1b115
     */
    COMPARATOR = 12,
    DISPENSER = 13,
    /**
     * @since 2.3.1b115
     */
    DROPPER = 14,
    /**
     * @since 2.3.1b115
     */
    HOPPER2 = 15,
    CAULDRON = 16,
    /**
     * @since 2.3.1b115
     */
    ITEM_FRAME = 17,
    /**
     * @since 2.3.1b115
     */
    PISTON = 18,
    /**
     * @since 2.3.1b115
     */
    CHALKBOARD = 20,
    BEACON = 21,
    /**
     * @since 2.3.1b115
     */
    END_PORTAL = 22,
    /**
     * @since 2.3.1b115
     */
    END_GATEWAY = 24,
    /**
     * @since 2.3.1b115
     */
    COMMAND_BLOCK = 26,
    /**
     * @since 2.3.1b115
     */
    BED = 27,
    /**
     * @since 2.3.1b115
     */
    STRUCTURE_BLOCK = 32,
    JUKEBOX = 33,
    /**
     * @since 2.3.1b115
     */
    CHEMISTRY_TABLE = 34,
    /**
     * @since 2.3.1b115
     */
    CONDUIT_BLOCK = 35,
    /**
     * @since 2.3.1b115
     */
    JIGSAW = 36,
    LECTERN = 37,
    /**
     * @since 2.3.1b115
     */
    BLAST_FURNACE = 38,
    /**
     * @since 2.3.1b115
     */
    SMOKER = 39,
    /**
     * @since 2.3.1b115
     */
    BELL = 40,
    /**
     * @since 2.3.1b115
     */
    CAMPFIRE = 41,
    /**
     * @since 2.3.1b115
     */
    BARREL = 42,
    /**
     * @since 2.3.1b115
     */
    BEEHIVE = 43,
    /**
     * @since 2.3.1b115
     */
    LODESTONE = 44
}
