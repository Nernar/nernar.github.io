/**
 * Class used to create custom biomes. Note that Minecraft has a limit of 256 biomes
 * and there are already more than 100 vanilla biomes, so do not overuse
 * this functionality.
 */
declare class CustomBiome {

    /**
     * @returns Object instance, with all custom
     * biomes registered by every mod.
     * @since 2.2.1b93
     */
    static getAllCustomBiomes(): java.util.Map<String, CustomBiome>;

    /**
     * Called when server detection packet received.
     * @internal
     * @since 2.3.1b116
     */
    static updateNativeId(json: org.json.JSONObject): void;

    /**
     * Called when server stopped to cleanup biome synced IDs.
     * @internal
     * @since 2.3.1b116
     */
    static reset(): void;

    /**
     * @returns Whether biome is invalid.
     */
    isInvalid(): boolean;

    /**
     * Crates a new custom biome with specified string identifier.
     * @param name string identifier of the biome
     */
    constructor(name: string);

    /**
     * custom biome numeric ID.
     */
    readonly id: number;

    /**
     * Custom biome name.
     */
    readonly name: string;

    /**
     * Pointer to biome's native object,
     * represented as long number.
     */
    readonly pointer: number;

    /**
     * Sets biome's grass color. Grass color is interpolated on the bounds of 
     * the biome.
     * @param r red color component, value from 0 to 1
     * @param g green color component, value from 0 to 1
     * @param b blue color component, value from 0 to 1
     * @returns Reference to itself to be used in sequential calls.
     */
    setGrassColor(r: number, g: number, b: number): CustomBiome;

    /**
     * Sets biome's grass color. Grass color is interpolated on the bounds of 
     * the biome.
     * @param color integer color value (you can specify it using hex value)
     * @returns Reference to itself to be used in sequential calls.
     */
    setGrassColor(color: number): CustomBiome;

    /**
     * Sets biome's sky color.
     * @param r red color component, value from 0 to 1
     * @param g green color component, value from 0 to 1
     * @param b blue color component, value from 0 to 1
     * @returns Reference to itself to be used in sequential calls.
     * @since 2.4.0b120
     */
    setSkyColor(r: number, g: number, b: number): CustomBiome;

    /**
     * Sets biome's sky color.
     * @param color integer color value (you can specify it using hex value)
     * @returns Reference to itself to be used in sequential calls.
     */
    setSkyColor(color: number): CustomBiome;

    /**
     * Sets biome's foliage color.
     * @param r red color component, value from 0 to 1
     * @param g green color component, value from 0 to 1
     * @param b blue color component, value from 0 to 1
     * @returns Reference to itself to be used in sequential calls.
     */
    setFoliageColor(r: number, g: number, b: number): CustomBiome;

    /**
     * Sets biome's foliage color.
     * @param color integer color value (you can specify it using hex value)
     * @returns Reference to itself to be used in sequential calls.
     */
    setFoliageColor(color: number): CustomBiome;

    /**
     * Sets biome's water color.
     * @param r red color component, value from 0 to 1
     * @param g green color component, value from 0 to 1
     * @param b blue color component, value from 0 to 1
     * @returns Reference to itself to be used in sequential calls.
     */
    setWaterColor(r: number, g: number, b: number): CustomBiome;

    /**
     * Sets biome's water color.
     * @param color integer color value (you can specify it using hex value)
     * @returns Reference to itself to be used in sequential calls.
     */
    setWaterColor(color: number): CustomBiome;

    /**
     * Sets biome's temperature and downfall.
     * @param temperature temperature value, from 0 to 1
     * @param downfall downfall value, from 0 to 1
     * @returns Reference to itself to be used in sequential calls.
     */
    setTemperatureAndDownfall(temperature: number, downfall: number): CustomBiome;

    /**
     * Specifies the block that will cover the biome; e.g., most of the biomes 
     * use grass as cover block, though some of the biomes use other blocks 
     * (sand, ice, etc.).
     * @param id block's tile ID
     * @param data block data
     * @returns Reference to itself to be used in sequential calls.
     */
    setCoverBlock(id: number, data: number): CustomBiome;

    /**
     * Specifies the block that will be under the covering block of the biome;
     * e.g., most of the biomes use dirt as cover block,
     * though some of the biomes use other blocks.
     * @param id block's tile ID
     * @param data block data
     * @returns Reference to itself to be used in sequential calls.
     */
    setSurfaceBlock(id: number, data: number): CustomBiome;

    /**
     * Sets the block that fills the terrain. Vanilla biomes use stone filling.
     * @param id block's tile ID
     * @param data block data
     * @returns Reference to itself to be used in sequential calls.
     */
    setFillingBlock(id: number, data: number): CustomBiome;

    /**
     * Sets the block that fills the floor at the bottom of the sea or the ocean.
     * Vanilla biomes use gravel or stone filling.
     * @param id block's tile ID
     * @param data block data
     * @returns Reference to itself to be used in sequential calls.
     * @since 2.2.0b1 pre-alpha
     */
    setSeaFloorBlock(id: number, data: number): CustomBiome;

    /**
     * Specifies the block that will cover the biome. E.g. most of the biomes
     * use grass as cover block, though some of the biomes use other blocks
     * (sand, ice, etc.).
     * @param id block's tile ID
     * @param data block data
     * @returns Reference to itself to be used in sequential calls.
     * @deprecated Use {@link CustomBiome.setSurfaceBlock} instead.
     */
    setAdditionalBlock(id: number, data: number): CustomBiome;

    /**
     * Sets the average depth of the sea floor in this biome.
     * @param depth depth of the see floor by Y-axis.
     * @returns Reference to itself to be used in sequential calls.
     * @since 2.2.0b1 pre-alpha
     */
    setSeaFloorDepth(depth: number): CustomBiome;

    /**
     * Sets the average depth of the something in this biome.
     * @param depth surface depth parameter.
     * @returns Reference to itself to be used in sequential calls.
     * @default 7
     * @deprecated Use {@link CustomBiome.setSeaFloorDepth} instead.
     * @since 2.2.0b1 pre-alpha
     */
    setSurfaceParam(depth: number): CustomBiome;

    /**
     * Defines the server-side biome params from given JSON string.
     * @returns Reference to itself to be used in sequential calls.
     * @throws Java {@link java.lang.IllegalArgumentException} if the string cannot be parsed.
     * 
     * @example
     * Many thanks to DansZbar2 for the example!
     * ```js
     * const CHERRY_BIOME = new CustomBiome("environmental_cherry");
     * CHERRY_BIOME.setServerJson(JSON.stringify({
     *     "minecraft:climate": {
     *        "downfall": 0.0,
     *        "snow_accumulation": [ 0.0, 0.0 ],
     *        "temperature": 2.0,
     *        "blue_spores": 0,
     *        "red_spores": 0,
     *        "white_ash": 0,
     *        "ash": 0
     *     },
     *     "minecraft:overworld_height": {
     *        "noise_type": "default"
     *     },
     *     "animal": {},
     *     "monster": {},
     *     "overworld": {},
     *     "environmental_cherry": {},
     *     "minecraft:surface_parameters": {
     *        "top_material": "minecraft:grass",
     *        "mid_material": "minecraft:dirt",
     *        "foundation_material": "minecraft:stone",
     *        "sea_floor_material": "minecraft:clay",
     *        "sea_material": "minecraft:water",
     *        "sea_floor_depth": 7
     *     },
     *     "minecraft:overworld_generation_rules": {
     *        "hills_transformation": "jungle_hills",
     *        "generate_for_climates": [ 
     *            [ "cold", 5 ],
     *            [ "medium", 20 ],
     *            [ "warm", 35 ]
     *        ]
     *     }
     * }));
     * ```
     * @since 2.2.0b1 pre-alpha
     */
    setServerJson(json: string): CustomBiome;

    /**
     * Defines the client-side biome params from given JSON string.
     * @returns Reference to itself to be used in sequential calls.
     * @throws Java {@link java.lang.IllegalArgumentException} if the string cannot be parsed.
     * 
     * @example
     * Many thanks to DansZbar2 for the example!
     * ```js
     * const CHERRY_BIOME = new CustomBiome("environmental_cherry");
     * CHERRY_BIOME.setClientJson(JSON.stringify({
     *     "water_surface_color": "#d176e1",
     *     "water_fog_color": "#a35dc2",
     *     "water_surface_transparency": 0.7,
     *     "water_fog_distance": 11,
     *     // custom fog defined in the addon
     *     "fog_identifier": "environmental:environmental_cherry"
     * }));
     * ```
     * @since 2.2.0b1 pre-alpha
     */
    setClientJson(json: string): CustomBiome;
}
