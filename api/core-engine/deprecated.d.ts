/**
 * @deprecated Use behavior packs to creating entities.
 */
declare namespace MobRegistry {
    function registerEntity(name: any): CustomEntity;

    function registerUpdatableAsEntity(updatable: any): void;

    function spawnEntityAsPrototype(typeName: any, coords: any, extraData: any): CustomEntity;

    function getEntityUpdatable(entity: number): CustomEntity;

    /**
     * @deprecated Not implemented yet.
     */
    function registerNativeEntity(entity: number): undefined;

    function registerEntityRemove(entity: number): void;

    function resetEngine(): void;
}

/**
 * @deprecated Use behavior packs to register spawning
 * entities in server or use callbacks.
 */
declare namespace MobSpawnRegistry {
    function registerSpawn(entityType: number, rarity: number, condition?: () => boolean, denyNaturalDespawn?: boolean): void;

    interface SpawnInterface {
        type: number, rarity: number, condition: Nullable<() => boolean>, denyNaturalDespawn: boolean;
    }

    function getRandomSpawn(rarityMultiplier: number): any;

    function getRandPosition(): { x: number, z: number };

    function executeSpawn(spawn: SpawnInterface, position: { x: number, z: number }): void;
}

/**
 * @deprecated Use behavior packs instead.
 */
declare class CustomEntity {
    readonly nameId: string;
    readonly isInstance: boolean;
    readonly entity: Nullable<number>;
    addController(name: string, basicPrototype: any): CustomEntity;
    customizeController(name: string, customPrototype: object): void;
    /**
     * Customizes controller "event".
     */
    customizeEvents(custom: object): void;
    /**
     * Customizes controller "description".
     */
    customizeDescription(custom: object): void;
    /**
     * Customizes controller "visual".
     */
    customizeVisual(custom: object): void;
    /**
     * Customizes controller "AI".
     */
    customizeAI(custom: object): void;
    setBaseType(type: number): void;
    callControllerEvent(event: string, ...params: any[]): void;
    setNativeEntity(entity: number): void;
    recreateEntity(): void;
    getPlayerDistance(): number;
    denyDespawn(): void;
    allowNaturalDespawn(): void;
    destroy(): void;
}

/**
 * @deprecated Use resource packs or {@link Render} instead.
 */
declare class EntityModel {
    constructor(parentModel?: EntityModel);
    readonly isAnimated: boolean;
    readonly animator: any;
    /**
     * @internal
     */
    applyTextureResolution(): void;
    setTexture(texture: Texture): EntityModel;
    getTextureObj(): Texture;
    getTexture(): string;
    getTextureResolution(): number;
    setRender(render: Render): void;
    createAnimation(ticks: number, func: (tick: number, self: EntityModel) => Nullable<Render>, delay: number): EntityModel;
    resetAnimation(token: number): void;
    getTextureAndRender(token: number): { texture: Texture, render: number };
}

/**
 * @deprecated Use resource packs to customize entities
 * appearance or {@link Render} with {@link AttachableRender}.
 */
declare class EntityModelWatcher {
    constructor(entity: number, model: EntityModel);
    readonly model: EntityModel;
    readonly entity: number;
    readonly token: number;
    update(): void;
    resetAnimation(): void;
    destroy(): void;
}
