# TODO

The described methods concern structure generation on the server.

## Without patching

1. Get the current instance of `Level` (`Actor::getLevel`, `BlockSource::getLevel`, etc.).
2. Get the `StructureManager` (`Level::getStructureManager`) and optionally the `JigsawStructureRegistry` (`Level::getJigsawStructureRegistry`).
3. Load a structure in NBT format (in general, you can load directly from the Java edition of the game, although it's not guaranteed that all data will be saved; however, all in-game structures are loaded this way) using `StructureManager::getOrCreateLegacy(structurePath)` or use the built-in MCStructure format using `StructureManager::getOrCreate(structurePath)`, to which data can be exported using the `/structure save` command or a structure block.
4. Prepare predefined settings for placing the structure using `LegacyStructureSettings::LegacyStructureSettings()` or `StructureSettings::StructureSettings()`.
5. Place the resulting `LegacyStructureTemplate` instance in any generation event using `LegacyStructureTemplate::placeInWorldChunk(BlockSource&, BlockPos const&, LegacyStructureSettings&)` or `StructureTemplate` using `StructureTemplate::placeInWorld(BlockSource&, BlockPalette const&, BlockPos const&, StructureSettings const&, StructureTelemetryServerData*, bool)`.

:::tip Careful, in-game structures!

Unlike NBT, the MCStructure format supports placement animations, block palettes, and a second layer of additional blocks. But for example, animations require advance configuration using `StructureAnimationData` and setup using `StructureManager::queueLoad(StructureAnimationData*)`.

:::

:::info Configured, loaded, and placed

In general, describing the basic conditions can be done using behavior packs. Return to the first step and get the `FeatureRegistry` (`Level::getFeatureRegistry`), now you can register a single structure in the description of a regular *definitions/features* file. Don't forget to load it using `FeatureRegistry::registerFeature<StructureTemplateFeature>(featureIdentifier)` and place it using `StructureTemplateFeature::place(IBlockWorldGenAPI&, BlockPos const&, Random&, RenderParams&)`.

:::

## Embedding into the generator

Let's create our own structure, but besides that, many methods need to be extended using any injector available to us. Let's consider the change using the example of a regular overworld generator; generation principles in all dimensions are similar.

1. Inherit from `StructureFeature::StructureFeature(unsigned int)`, where the only argument is a random seed:

    1. Implement the `bool isFeatureChunk(BiomeSource const&, Random&, ChunkPos const&, unsigned int)` method, using arguments to determine if the structure will be generated in this chunk.
    2. Create an empty `StructureStart* createStructureStart(Dimension&, BiomeSource&, Random&, ChunkPos const&)` method, we will define it later.
    3. Optionally, add the `getNearestGeneratedFeature(Dimension&, BiomeSource&, BlockPos const&, BlockPos&)` method to the class, which will find the structure by the nearest coordinates (primarily for the `/locate` command).

2. Let's extend the overworld generator:

    1. Extend the `OverworldGenerator::OverworldGenerator(Dimension&, unsigned int, bool, Biome const*)` symbol (post-patching), where the second argument defines the random world seed, and the next one defines whether structures need to be generated; create an instance of your structure, saving its memory address in the generator's table.
    2. Add structures to generated chunks, for this `OverworldGenerator::_prepareStructureBlueprints(ChunkPos const&, BiomeSource&)` is called during the generation of each chunk; add the `StructureFeature::createBlueprints(<your structure address>, Dimension&, ChunkPos const&, BiomeSource&)` extension to it.
    3. Extend `OverworldGenerator::postProcess(ChunkViewSource&)` to `StructureFeature::postProcess(<your structure address>, BlockSource&, Random&, int, int)`, which will complete the generator setup (placing doors, map generation, etc.).
    4. Don't forget to clear the structure generator buffers by extending the `OverworldGenerator::garbageCollectBlueprints(buffer_span<ChunkPos>)` method using `StructureFeature::garbageCollectBlueprints(<your structure address>, buffer_span<ChunkPos>, unsigned int)`.
    5. Let's add a structure definition at a specific block, for this we will extend `OverworldGenerator::getFeatureTypeAt(BlockPos const&)` to `StructureFeature::isInsideBoundingFeature(int, int, int)` with coordinates; do not forget about already occupied [structure types](#in-game-structures).
    6. Extend the `OverworldGenerator::findNearestFeature(StructureFeatureType, BlockPos const&, BlockPos&)` method for the `/locate` command to work using a check for the requested structure type (modify the `StructureFeatureType` table), as well as a search function. Create it, or use an existing one to find a structure by offset between two of them `StructureFeature::findNearestFeaturePositionBySpacing(Dimension&, StructureFeature&, BiomeSource&, BlockPos const&, BlockPos&, int, int, int, bool, int)`.
    7. Optionally extend `OverworldGenerator::addHardcodedSpawnAreas(LevelChunk&)` using `StructureFeature::generateHardcodedMobSpawns(<your structure address>, LevelChunk&)`; extend `OverworldGenerator::postProcessMobsAt(BlockSource&, int, int, Random&)` to `StructureFeature::postProcessMobsAt(BlockSource&, int, int, Random&)`; optionally add the method of the same name to `OverworldGenerator::debugRender()` for debugging.

3. Let's create the start of our structure, everything else is counted from it:

    1. Inherit from `StructureStart::~StructureStart()`, dimensions must be determined using `StructureStart::calculateBoundingBox()`.
    2. Change the method of the first part of the second step by adding the implementation of the created `StructureStart`, it is enough to call the constructor. You can inherit parts from each other; for example, by implementing `StructurePiece`, inherit it in your `StructureStart`.
    3. Place structures by overriding `StructureStart::postProcess(BlockSource&, Random&, BoundingBox const&)`, for example as in step 5 of the previous paragraph.

## Markers, pools, and pieces

```mdx-code-block
import NotImplemented from "@site/src/components/NotImplemented"

<NotImplemented />
```

## In-game structures

```js
{
    END_CITY = 1,
    NETHER_FORTRESS = 2,
    MINESHAFT = 3,
    OCEAN_MONUMENT = 4,
    STRONGHOLD = 5,
    /**
    * **Jungle Pyramid** (Jungle, Jungle Hills),
    * **Swampland Hut** (Swampland, Swampland Mutated),
    * **Desert Pyramid** (Desert, Desert Hills) and
    * **Igloo** (Ice Flats, Taiga Cold).
    */
    SCATTERED_FEATURE = 6,
    VILLAGE = 7,
    WOODLAND_MANSION = 8,
    SHIPWRECK = 9,
    BURIED_TREASURE = 10,
    OCEAN_RUIN = 11,
    PILLAGER_OUTPOST = 12,
    RUINED_PORTAL = 13,
    BASTION = 14
}
```

You can visually look at their location by offsets on the [Seed Map](https://www.chunkbase.com/apps/seed-map) website, select the Bedrock 1.16 version and select the necessary parts of the generator. Use the same seed in the game, including for experiments with generating your own structures.
