/**
 * Minecraft version code, for now, always `16`.
 * @since 2.2.0b75
 */
declare var __version__: number;

/**
 * Mostly internal variable determined to be useful for control
 * mod lifecycle, configuration and executables.
 */
declare var __mod__: Mod.ModJsAdapter;

/**
 * Name property, generally loaded from *mod.info*.
 */
declare var __name__: string;

/**
 * Full path to the mod's directory, ends with "/".
 */
declare var __dir__: string;

/**
 * Main mod configuration manager, settings are stored in *config.json* file.
 */
declare var __config__: Config;

/**
 * Full path to current selected pack (like Inner Core) directory.
 */
declare var __packdir__: string;

/**
 * Full path to current modpack (like *innercore*) directory.
 * @since 2.2.1b85
 */
declare var __modpack__: ModPack.ModPackJsAdapter;
