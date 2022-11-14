/**
 * @deprecated Use behavior packs to creating entities.
 */
declare namespace MobRegistry {
    namespace customEntities { }
    namespace loadedEntities { }

    function registerEntity(name: any): any;

    function registerUpdatableAsEntity(updatable: any): any;

    function spawnEntityAsPrototype(typeName: any, coords: any, extraData: any): any;

    function getEntityUpdatable(entity: number): any;

    function registerNativeEntity(entity: number): any;

    function registerEntityRemove(entity: number): any;

    function resetEngine(): any;
}

/**
 * @deprecated Use behavior packs to register spawning
 * entities in server or use callbacks.
 */
declare namespace MobSpawnRegistry {
    namespace spawnData { }

    function registerSpawn(entityType: any, rarity: number, condition: any, denyNaturalDespawn: any): any;

    function getRandomSpawn(rarityMultiplier: any): any;

    function getRandPosition(): any;

    function executeSpawn(spawn: any, position: any): any;
    var counter: number;

    function tick(): any;

    function onChunkGenerated(x: number, z: number): any;
}

/**
 * @deprecated Use resource packs to customize entities
 * appereance nor {@link Render["class"]} with {@link AttachableRender}.
 */
declare function EntityModelWatcher(entity: number, model: any): any;

/**
 * @deprecated Use behavior packs to customize entities
 * intellect nor consider to use {@link Entity.getPathNavigation}.
 */
declare function EntityAIWatcher(customPrototype: any): any;
