/**
 * Namespace used to create and manipulate custom dimensions.
 */
declare namespace Dimensions {
    /**
     * Class representing custom dimension.
     */
    class CustomDimension {
        /**
         * Constructs a new dimension with specified name and preferred ID.
         * @param name dimension name, can be used to get dimension via 
         * {@link Dimensions.getDimensionByName} call
         * @param preferredId preferred dimension ID. If ID is already occupied
         * by some another dimension, constructor will look for the next empty
         * dimension ID and assign it to the current dimension
         */
        constructor(name: string, preferredId: number);

        /**
         * Custom dimension ID.
         */
        id: number;

        /**
         * Sets custom landscape generator.
         * @param generator custom landscape generator used for current 
         * dimension
         * @returns Reference to itself to be used in sequential calls.
         */
        setGenerator(generator: CustomGenerator): CustomDimension;

        /**
         * Specifies whether the sky produces light (like in overworld) or not 
         * (like in the End or Nether).
         * @param hasSkyLight if true, the sky produces light in the dimension
         * @returns Reference to itself to be used in sequential calls.
         * @default true
         */
        setHasSkyLight(hasSkyLight: boolean): CustomDimension;

        /**
         * @returns Whether the sky produces light in the current dimension.
         */
        hasSkyLight(): boolean;

        /**
         * Sets sky color for the dimension in the RGB format. Default
         * color is as in the Overworld.
         * @param r red color component, value from 0 to 1
         * @param g green color component, value from 0 to 1
         * @param b blue color component, value from 0 to 1
         * @returns Reference to itself to be used in sequential calls.
         */
        setSkyColor(r: number, g: number, b: number): CustomDimension;

        /**
         * Resets sky color to the default value.
         * @returns Reference to itself to be used in sequential calls.
         */
        resetSkyColor(): CustomDimension;

        /**
         * Sets fog color for the dimension in the RGB format. Default
         * color is as in the Overworld.
         * @param r red color component, value from 0 to 1
         * @param g green color component, value from 0 to 1
         * @param b blue color component, value from 0 to 1
         * @returns Reference to itself to be used in sequential calls.
         */
        setFogColor(r: number, g: number, b: number): CustomDimension;

        /**
         * Resets fog color to the default value.
         * @returns Reference to itself to be used in sequential calls.
         */
        resetFogColor(): CustomDimension;

        /**
         * Sets clouds color for the dimension in the RGB format. Default
         * color is as in the Overworld.
         * @param r red color component, value from 0 to 1
         * @param g green color component, value from 0 to 1
         * @param b blue color component, value from 0 to 1
         * @returns Reference to itself to be used in sequential calls.
         */
        setCloudColor(r: number, g: number, b: number): CustomDimension;

        /**
         * Resets clouds color to the default value.
         * @returns Reference to itself to be used in sequential calls.
         */
        resetCloudColor(): CustomDimension;

        /**
         * Sets sunset sky color for the dimension in the RGB format. Default
         * color is as in the Overworld.
         * @param r red color component, value from 0 to 1
         * @param g green color component, value from 0 to 1
         * @param b blue color component, value from 0 to 1
         * @returns Reference to itself to be used in sequential calls.
         */
        setSunsetColor(r: number, g: number, b: number): CustomDimension;

        /**
         * Resets sunset sky color to the default value.
         * @returns Reference to itself to be used in sequential calls.
         */
        resetSunsetColor(): CustomDimension;

        /**
         * Sets fog displaying distance.
         * @param start nearest fog distance
         * @param end farthest fog distance
         * @returns Reference to itself to be used in sequential calls.
         * @since 2.0.2b20
         */
        setFogDistance(start: number, end: number): CustomDimension;

        /**
         * Resets fog displaying distance.
         * @returns Reference to itself to be used in sequential calls.
         * @since 2.0.2b20
         */
        resetFogDistance(): CustomDimension;
    }

    /**
     * Class representing landscape generator used for the dimension.
     */
    class CustomGenerator {
        /**
         * Creates a new {@link Dimensions.CustomGenerator} instance using specified base type.
         * @param baseType base generator type constant, can be from 0 to 4. 0 
         * and 1 represent overworld generator, 2 represents flat world 
         * generator, 3 represents nether generator and 4 represents end 
         * generator
         */
        constructor(baseType: number);

        /**
         * Creates a new {@link Dimensions.CustomGenerator} instance using specified base type.
         * @param baseType base generator type constant, can be one of the 
         * following: "overworld", "overworld1", "flat", "nether", "end"
         */
        constructor(baseType: string);

        /**
         * Specifies whether to use vanilla biome surface cover blocks (grass,
         * sand, podzol, etc.).
         * @param value if `true`, vanilla surface will be generated
         * @default false
         * @returns Reference to itself to be used in sequential calls.
         */
        setBuildVanillaSurfaces(value: boolean): CustomGenerator;

        /**
         * Specifies whether to generate minecraft vanilla structures.
         * @param value if `true`, vanilla structures will be generated
         * @default false
         * @returns Reference to itself to be used in sequential calls.
         */
        setGenerateVanillaStructures(value: boolean): CustomGenerator;

        /**
         * Specifies whether to use mod's generation callbacks.
         * @param value if `true`, mod generation will be used
         * @default true
         * @returns Reference to itself to be used in sequential calls.
         */
        setGenerateModStructures(value: boolean): CustomGenerator;

        /**
         * Determines whether the generator should generate underground
         * and/or underwater caves as part of its result.
         * Wworks only with the "overworld"1" and "flat" base types.
         * @param caves generate caves (until 2.4.0b123-2 arm64 inverted)
         * @param underwaterCaves generate large caves and canyons
	     * @since 2.3.1b115
         */
        setGenerateCaves(caves: boolean, underwaterCaves?: boolean): CustomDimension;

        /**
         * Sets terrain generator object used for the landscape generation.
         * @param generator terrain generator to be used with current landscape 
         * generator or removes terrain generator, if the value is null
         * @returns Reference to itself to be used in sequential calls.
         */
        setTerrainGenerator(generator: Nullable<AbstractTerrainGenerator>): CustomGenerator;

        /**
         * Specifies which of the generation {@link Callback Callbacks} to call, `-1` to call
         * no mods generation, `0` to call overworld generation callback, `1` for nether,
         * `2` for end generation callbacks.
         * @param id generation callback to call
         * @returns Reference to itself to be used in sequential calls.
         */
        setModGenerationBaseDimension(id: number): CustomGenerator;

        /**
         * Disables mods generation in current generator.
         * @returns Reference to itself to be used in sequential calls.
         */
        removeModGenerationBaseDimension(): CustomGenerator;
    }

    /**
     * Interface representing terrain generator. All terrain generators found
     * in Inner Core API implement this interface.
     */
    interface AbstractTerrainGenerator {}

    /**
     * Class representing terrain that consists of single biome.
     */
    class MonoBiomeTerrainGenerator implements AbstractTerrainGenerator {
        /**
         * Constructs new {@link Dimensions.MonoBiomeTerrainGenerator MonoBiomeTerrainGenerator}
         * instance with no terrain layers.
         */
        constructor();

        addTerrainLayer(minY: number, maxY: number): TerrainLayer;

        /**
         * Sets base biome for the current terrain.
         * @param id ID of the biome to be used as a single biome of the terrain
         * layer
         */
        setBaseBiome(id: number): MonoBiomeTerrainGenerator;
    }

    /**
     * Class representing single terrain layer that may consist of several noise
     * layers.
     */
    interface TerrainLayer {
        addNewMaterial(generator: NoiseGenerator, priority: number): TerrainMaterial;

        setHeightmapNoise(generator: NoiseGenerator): TerrainLayer;

        setMainNoise(generator: NoiseGenerator): TerrainLayer;

        setYConversion(conversion: NoiseConversion): TerrainLayer;

        getMainMaterial(): TerrainMaterial;
    }

    /**
     * Class representing material that is used to generate terrain layer.
     */
    interface TerrainMaterial {

        setBase(id: number, data: number): TerrainMaterial;

        setCover(id: number, data: number): TerrainMaterial;

        setSurface(width: number, id: number, data: number): TerrainMaterial;

        setFilling(width: number, id: number, data: number): TerrainMaterial;

        setDiffuse(value: number): TerrainMaterial;
    }

    /**
     * Class representing noise conversion function. Used to define "density" of
     * the landscape at a given height. Values between nodes are interpolated
     * linearly.
     */
    class NoiseConversion {
        constructor();

        /**
         * Adds a new node to the noise conversion function.
         * @param x value from 0 to 1 representing the height of the block in the
         * terrain layer
         * @param y landscape density at a given height, generally can be between
         * -0.5 and 0.5. Values between nodes are interpolated linearly
         */
        addNode(x: number, y: number): NoiseConversion;
    }

    /**
     * Class representing multi-layer noise generator.
     */
    class NoiseGenerator {
        constructor();

        addLayer(layer: NoiseLayer): NoiseGenerator;

        setConversion(conversion: NoiseConversion): NoiseGenerator;
    }

    /**
     * Class representing single noise layer.
     */
    class NoiseLayer {
        constructor();

        addOctave(octave: NoiseOctave): NoiseLayer;

        setConversion(conversion: NoiseConversion): NoiseLayer;
    }

    type NoiseOctaveStringType = "perlin" | "gray" | "chess" | "sine_x" | "sine_y" | "sine_z" | "sine_xy" | "sine_yz" | "sine_xz" | "sine_xyz";
    /**
     * Class representing noise octave. Each noise layer consists of multiple
     * noise octaves of different scale and weight.
     */
    class NoiseOctave {
        /**
         * Creates a new noise octave of specified type.
         * @param type numeric type constant or one of the following strings:
         * 
         * **"perlin"** (0) is a general-purpose noise generator.
         * 
         * Used to generate noise of completely random nature
         * **"gray"** (1) 
         * **"chess"** (2)
         * 
         * The following sine noises are used to generate sinusoidal noise. 
         * Generally they should be used with some noise octaves of other types to avoid 
         * too mathematical landscapes
         * **"sine_x"** (10) 
         * **"sine_y"** (11) 
         * **"sine_z"** (12) 
         * **"sine_xy"** (13) 
         * **"sine_yz"** (14) 
         * **"sine_xz"** (15) 
         * **"sine_xyz"** (16)
         */
        constructor(type?: number | NoiseOctaveStringType);

        setTranslate(x: number, y: number, z: number): NoiseOctave;

        setScale(x: number, y: number, z: number): NoiseOctave;

        setWeight(weight: number): NoiseOctave;

        setSeed(x: number, y: number, z: number): NoiseOctave;

        setConversion(conversion: NoiseConversion): NoiseOctave;
    }

    /**
     * Overrides default generator of vanilla dimension.
     * @param id vanilla dimension ID, one of the {@link EDimension} 
     * values
     * @param generator custom landscape generator used for vanilla 
     * dimension
     */
    function overrideGeneratorForVanillaDimension(id: number, generator: CustomGenerator): void;

    /**
     * @param name dimension name
     * @returns Dimension by it's string name specified in
     * {@link Dimensions.CustomDimension CustomDimension} constructor.
     */
    function getDimensionByName(name: string): CustomDimension;

    /**
     * @param id dimension ID
     * @returns Custom dimension by it's numeric ID.
     */
    function getDimensionById(id: number): CustomDimension;

    /**
     * @param id dimension ID
     * @returns `true`, if dimension is a limbo dimension; limbo dimension is 
     * created by Horizon automatically if you try to teleport the player to
     * non-existing dimension
     */
    function isLimboId(id: number): boolean;

    /**
     * Transfers specified entity to the dimension with specified ID.
     * @param entity numeric ID of the 
     * @param dimensionId numeric ID of the dimension to transfer the entity to
     */
    function transfer(entity: number, dimensionId: number): void;

    /**
     * @returns JS object instance, containing all registered custom biomes.
     * @since 2.2.1b93
     */
    function getAllRegisteredCustomBiomes(): { [key: string]: CustomBiome };

    /**
     * Function used to simplify the creation of terrain generator by passing
     * a json-like structure as a single generator parameter.
     * @param description object containing all the required generator information
     */
    function newGenerator(description: {
        /**
         * Specifies base generator, see {@link Dimensions.CustomGenerator CustomGenerator}
         * constructor for details.
         */
        base?: number | string,

        /**
         * Specifies whether to use vanilla biome surface cover blocks
         * (grass, sand, podzol, etc.).
         * 
         * See {@link Dimensions.CustomGenerator.setBuildVanillaSurfaces setBuildVanillaSurfaces} for details.
         */
        buildVanillaSurfaces?: boolean,

        /**
         * Specifies whether to generate minecraft vanilla structures.
         * 
         * See {@link Dimensions.CustomGenerator.setGenerateVanillaStructures setGenerateVanillaStructures} for details.
         */
        generateVanillaStructures?: boolean,

        /**
         * Can be either string for an existing dimensions (**"overworld"**,
         * **"nether"**, **"end"**) or -1 to disable mods generation.
         * 
         * See {@link Dimensions.CustomGenerator.setModGenerationBaseDimension setModGenerationBaseDimension} for details.
         */
        modWorldgenDimension?: number | string,

        /**
         * Specifies what generator type to use. Default and the only currently
         * available option is "mono", that is equivalent to creating a
         * {@link MonoBiomeTerrainGenerator}.
         */
        type?: string,

        /**
         * Sets base biome for the current terrain, applicable only to **"mono"**.
         */
        biome?: number,

        /**
         * An array of terrain layers descriptions, each one representing it's
         * own terrain layer.
         * 
         * See {@link Dimensions.MonoBiomeTerrainGenerator.addTerrainLayer MonoBiomeTerrainGenerator.addTerrainLayer} for details.
         */
        layers?: TerrainLayerParams[]

    }): CustomGenerator;

    interface TerrainLayerParams {
        minY: number,
        maxY: number,
        noise?: NoiseOctaveParams | NoiseLayerParams | NoiseGeneratorParams,
        heightmap?: NoiseOctaveParams | NoiseLayerParams | NoiseGeneratorParams,
        yConversion?: NoiseConversionParams,
        material?: TerrainMaterialParams,
        materials?: TerrainMaterialParams[],
    }

    interface TerrainMaterialParams {
        noise?: NoiseOctaveParams | NoiseLayerParams | NoiseGeneratorParams,
        base?: MaterialBlockData,
        cover?: MaterialBlockData,
        surface?: MaterialBlockData,
        filling?: MaterialBlockData,
        diffuse?: number
    }

    interface NoiseGeneratorParams {
        layers: NoiseLayerParams[],
        conversion?: NoiseConversionParams,
    }

    interface NoiseLayerParams {
        octaves: NoiseOctaveParams[] | {
            count?: number,
            seed?: number,
            weight?: number,
            weight_factor?: number,
            scale_factor?: number,
            scale?: number
        },
        conversion?: NoiseConversionParams
    }

    interface NoiseOctaveParams {
        /**
         * Noise octave type, see {@link Dimensions.NoiseOctave} for details.
         * @default "perlin"
         */
        type?: number | string,
        scale?: Vec3Data,
        weight?: number,
        seed?: number,
        conversion?: NoiseConversionParams
    }

    type NoiseConversionParams = string | Vec2Data[];

    type MaterialBlockData =
        [number, number?, number?] |
        { id: number, data?: number, width?: number } |
        number;

    type Vec3Data =
        [number, number, number] |
        { x: number, y: number, z: number } |
        number;

    type Vec2Data =
        [number, number] |
        { x: number, y: number } |
        number
}
