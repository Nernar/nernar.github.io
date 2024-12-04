declare namespace Agriculture {
    let NutrientBiomeBonus: {
        21: number;
        22: number;
        23: number;
        149: number;
        151: number;
        6: number;
        134: number;
        14: number;
        15: number;
        4: number;
        132: number;
        18: number;
        27: number;
        155: number;
        157: number;
        29: number;
        28: number;
        7: number;
        11: number;
        1: number;
        128: number;
        129: number;
        12: number;
        35: number;
        163: number;
        36: number;
        3: number;
        13: number;
        162: number;
        165: number;
        166: number;
        34: number;
        158: number;
        131: number;
        37: number;
        38: number;
        39: number;
        17: number;
        19: number;
        20: number;
        161: number;
        156: number;
        33: number;
        31: number;
    };
}
declare namespace Agriculture {
    class BiomeBonusesManager {
        static getHumidityBiomeBonus(x: number, z: number): number;
        static getNutrientBiomeBonus(x: number, z: number): any;
    }
}
declare namespace Agriculture {
    class CropCardManager {
        private static cropCards;
        /**
         * Register new card
         * @param {CropCard} cropCard
         * @returns {number} registred card ID
         */
        static registerCropCard(cropCard: CropCard): void;
        static getALLCropCards(): CropCard[];
        static getCropCardByIndex(index: number): CropCard;
        static getIndexByCropCardID(id: string): number;
        static getCardFromSeed(item: ItemStack): CropCard;
        static getCardFromID(id: string): CropCard;
    }
}
declare namespace Agriculture {
    type CropTileData = {
        crop: number;
        crossingBase: boolean;
        dirty: boolean;
        currentSize: number;
        statGain: number;
        statGrowth: number;
        scanLevel: number;
        statResistance: number;
        terrainAirQuality: number;
        terrainHumidity: number;
        terrainNutrients: number;
        storageWater: number;
        storageNutrients: number;
        storageWeedEX: number;
        growthPoints: number;
    };
}
declare namespace Agriculture {
    class SeedExtraCreator {
        static generateExtraFromValues(data: CropTileData): ItemExtraData;
        static getDefaultExtra(cardIndex: number): ItemExtraData;
    }
}
declare namespace Agriculture {
    type BaseSeed = {
        id?: number | string;
        data?: number;
        size: number;
        growth: number;
        gain: number;
        resistance: number;
        addToCreative: boolean;
    };
}
declare namespace Agriculture {
    abstract class CropCard {
        abstract getID(): string;
        abstract getAttributes(): string[];
        initialize(cardID: number): void;
        getTexture(): string;
        getBaseSeed(): BaseSeed;
        getProperties(): CropCardProperties;
        getMaxSize(): number;
        getOptimalHarvestSize(te: ICropTileEntity): number;
        getDiscoveredBy(): string;
        isWeed(te: ICropTileEntity): boolean;
        tick(te: ICropTileEntity): void;
        getDropGainChance(te: ICropTileEntity): number;
        abstract getGain(te: ICropTileEntity): ItemInstance;
        canGrow(te: ICropTileEntity): boolean;
        canCross(te: ICropTileEntity): boolean;
        canBeHarvested(te: ICropTileEntity): boolean;
        getGrowthDuration(te: ICropTileEntity): number;
        getSeeds(te: ICropTileEntity): SeedBagStackData | ItemInstance;
        getProduct(): ItemInstance;
        getSeedDropChance(te: ICropTileEntity): number;
        onLeftClick(te: ICropTileEntity, player: number): boolean;
        onRightClick(te: ICropTileEntity, player: number): boolean;
        onEntityCollision(te: ICropTileEntity, entity: number): boolean;
        getSizeAfterHarvest(te: ICropTileEntity): number;
        getRootsLength(te: ICropTileEntity): number;
    }
}
declare namespace Agriculture {
    type CropCardProperties = {
        tier: number;
        chemistry: number;
        consumable: number;
        defensive: number;
        colorful: number;
        weed: number;
    };
}
declare namespace Agriculture {
    type SeedBagStackData = {
        id: number;
        data: CropTileData;
        extra: ItemExtraData;
    };
}
declare namespace Agriculture {
    class CropWeed extends CropCard {
        getID(): string;
        getAttributes(): string[];
        getProperties(): CropCardProperties;
        getBaseSeed(): BaseSeed;
        getGain(te: ICropTileEntity): ItemInstance;
        onLeftClick(te: ICropTileEntity, player: number): boolean;
        canBeHarvested(te: ICropTileEntity): boolean;
        onEntityCollision(te: ICropTileEntity, entity: number): boolean;
    }
}
declare namespace Agriculture {
    class CropVenomilia extends CropCard {
        getID(): string;
        getAttributes(): string[];
        getProperties(): CropCardProperties;
        getBaseSeed(): BaseSeed;
        getMaxSize(): number;
        getOptimalHarvestSize(): number;
        getDiscoveredBy(): string;
        canGrow(te: ICropTileEntity): boolean;
        canBeHarvested(te: ICropTileEntity): boolean;
        getGain(te: ICropTileEntity): ItemInstance;
        getSizeAfterHarvest(tileentity: ICropTileEntity): number;
        getGrowthDuration(te: ICropTileEntity): number;
        onRightClick(te: ICropTileEntity, entity: number): boolean;
        onLeftClick(te: ICropTileEntity, entity: number): boolean;
        onEntityCollision(te: ICropTileEntity, entity: number): boolean;
        isWeed(te: ICropTileEntity): boolean;
    }
}
declare namespace Agriculture {
    class CropTerraWart extends CropCard {
        getID(): string;
        getAttributes(): string[];
        getProperties(): CropCardProperties;
        getBaseSeed(): BaseSeed;
        getMaxSize(): number;
        getDropGainChance(te: ICropTileEntity): number;
        getGain(te: ICropTileEntity): ItemInstance;
        tick(te: ICropTileEntity): void;
    }
}
declare namespace Agriculture {
    interface ICropTileEntity extends TileEntity {
        region: WorldRegion;
        crop: CropCard;
        data: CropTileData;
        generateSeeds(tileData: CropTileData): ItemInstance;
        pick(): boolean;
        isBlockBelow(reqBlockID: number): boolean;
        performManualHarvest(): boolean;
        onLongClick(player: number): boolean;
        updateRender(): void;
    }
}
declare namespace Agriculture {
    abstract class CropVanilla extends CropCard {
        getDiscoveredBy(): string;
        getProduct(): ItemInstance;
        canGrow(tileentity: ICropTileEntity): boolean;
        getGain(te: ICropTileEntity): ItemInstance;
        getSeeds(te: ICropTileEntity): SeedBagStackData | ItemInstance;
        abstract getSeed(te: ICropTileEntity): ItemInstance;
    }
}
declare namespace Agriculture {
    class CropRedWheat extends CropCard {
        getID(): string;
        getAttributes(): string[];
        getDiscoveredBy(): string;
        getProperties(): CropCardProperties;
        getMaxSize(): number;
        getOptimalHarvestSize(te: ICropTileEntity): number;
        canGrow(te: ICropTileEntity): boolean;
        getDropGainChance(te: ICropTileEntity): number;
        getGain(te: ICropTileEntity): ItemInstance;
        getGrowthDuration(te: ICropTileEntity): number;
        getSizeAfterHarvest(te: ICropTileEntity): number;
    }
}
declare namespace Agriculture {
    class CropStickreed extends CropCard {
        getID(): string;
        getAttributes(): string[];
        getDiscoveredBy(): string;
        getProperties(): CropCardProperties;
        getMaxSize(): number;
        getOptimalHarvestSize(te: ICropTileEntity): number;
        canGrow(te: ICropTileEntity): boolean;
        canBeHarvested(te: ICropTileEntity): boolean;
        getGain(te: ICropTileEntity): ItemInstance;
        getSizeAfterHarvest(te: ICropTileEntity): number;
        onEntityCollision(te: ICropTileEntity, entity: number): boolean;
        getGrowthDuration(te: ICropTileEntity): number;
    }
}
declare namespace Agriculture {
    class CropCoffee extends CropCard {
        getID(): string;
        getAttributes(): string[];
        getDiscoveredBy(): string;
        getProperties(): CropCardProperties;
        getBaseSeed(): BaseSeed;
        getMaxSize(): number;
        canGrow(te: ICropTileEntity): boolean;
        getGrowthDuration(te: ICropTileEntity): number;
        canBeHarvested(te: ICropTileEntity): boolean;
        getGain(te: ICropTileEntity): ItemInstance;
        getSizeAfterHarvest(te: ICropTileEntity): number;
    }
}
declare namespace Agriculture {
    class CropHops extends CropCard {
        getID(): string;
        getAttributes(): string[];
        getDiscoveredBy(): string;
        getProperties(): CropCardProperties;
        getMaxSize(): number;
        canGrow(te: ICropTileEntity): boolean;
        getGrowthDuration(te: ICropTileEntity): number;
        canBeHarvested(te: ICropTileEntity): boolean;
        getGain(te: ICropTileEntity): ItemInstance;
        getSizeAfterHarvest(te: ICropTileEntity): number;
    }
}
declare namespace Agriculture {
    class CropEatingplant extends CropCard {
        getID(): string;
        getAttributes(): string[];
        getDiscoveredBy(): string;
        getProperties(): CropCardProperties;
        getMaxSize(): number;
        getOptimalHarvestSize(te: ICropTileEntity): number;
        canGrow(te: ICropTileEntity): boolean;
        canBeHarvested(te: ICropTileEntity): boolean;
        getGain(te: ICropTileEntity): ItemInstance;
        tick(te: ICropTileEntity): void;
        hasMetalArmor(player: number): boolean;
        getGrowthDuration(te: ICropTileEntity): number;
        getSizeAfterHarvest(te: ICropTileEntity): number;
        getRootsLength(te: ICropTileEntity): number;
    }
}
declare namespace Agriculture {
    class CropWheat extends CropVanilla {
        getID(): string;
        getTexture(): string;
        getAttributes(): string[];
        getProperties(): CropCardProperties;
        getBaseSeed(): BaseSeed;
        getMaxSize(): number;
        getSizeAfterHarvest(tileentity: ICropTileEntity): number;
        getProduct(): ItemInstance;
        getSeed(te: ICropTileEntity): ItemInstance;
    }
}
declare namespace Agriculture {
    class CropPumpkin extends CropVanilla {
        getID(): string;
        getAttributes(): string[];
        getProperties(): CropCardProperties;
        getBaseSeed(): BaseSeed;
        getMaxSize(): number;
        getSizeAfterHarvest(tileentity: ICropTileEntity): number;
        getProduct(): ItemInstance;
        getSeed(te: ICropTileEntity): ItemInstance;
        getGrowthDuration(te: ICropTileEntity): number;
    }
}
declare namespace Agriculture {
    class CropCocoa extends CropCard {
        getID(): string;
        getTexture(): string;
        getAttributes(): string[];
        getProperties(): CropCardProperties;
        getBaseSeed(): BaseSeed;
        getMaxSize(): number;
        getOptimalHarvestSize(te: ICropTileEntity): number;
        canGrow(te: ICropTileEntity): boolean;
        canBeHarvested(te: ICropTileEntity): boolean;
        getGain(te: ICropTileEntity): ItemInstance;
        getGrowthDuration(te: ICropTileEntity): number;
        getSizeAfterHarvest(tileentity: ICropTileEntity): number;
    }
}
declare namespace Agriculture {
    class CropPotato extends CropVanilla {
        getID(): string;
        getAttributes(): string[];
        getProperties(): CropCardProperties;
        getBaseSeed(): BaseSeed;
        getMaxSize(): number;
        canGrow(te: ICropTileEntity): boolean;
        getOptimalHarvestSize(te: ICropTileEntity): number;
        canBeHarvested(te: ICropTileEntity): boolean;
        getGain(te: ICropTileEntity): ItemInstance;
        getSeed(te: ICropTileEntity): ItemInstance;
        getSizeAfterHarvest(tileentity: ICropTileEntity): number;
    }
}
declare namespace Agriculture {
    class CropMelon extends CropVanilla {
        getID(): string;
        getAttributes(): string[];
        getProperties(): CropCardProperties;
        getBaseSeed(): BaseSeed;
        getMaxSize(): number;
        getSizeAfterHarvest(tileentity: ICropTileEntity): number;
        getProduct(): ItemInstance;
        getSeed(te: ICropTileEntity): ItemInstance;
        getGrowthDuration(te: ICropTileEntity): number;
    }
}
declare namespace Agriculture {
    class CropReed extends CropCard {
        getID(): string;
        getAttributes(): string[];
        getDiscoveredBy(): string;
        getProperties(): CropCardProperties;
        getBaseSeed(): BaseSeed;
        getMaxSize(): number;
        canBeHarvested(te: ICropTileEntity): boolean;
        getGain(te: ICropTileEntity): ItemInstance;
        onEntityCollision(te: ICropTileEntity, entity: number): boolean;
        getGrowthDuration(te: ICropTileEntity): number;
    }
}
declare namespace Agriculture {
    class CropCarrots extends CropVanilla {
        getID(): string;
        getTexture(): string;
        getAttributes(): string[];
        getProperties(): CropCardProperties;
        getBaseSeed(): BaseSeed;
        getMaxSize(): number;
        getProduct(): ItemInstance;
        getSeed(te: ICropTileEntity): ItemInstance;
    }
}
declare namespace Agriculture {
    class CropBeetroots extends CropVanilla {
        getID(): string;
        getAttributes(): string[];
        getProperties(): CropCardProperties;
        getBaseSeed(): BaseSeed;
        getMaxSize(): number;
        getSeed(te: ICropTileEntity): ItemInstance;
        getProduct(): ItemInstance;
    }
}
declare namespace Agriculture {
    class CropNetherWart extends CropCard {
        getID(): string;
        getTexture(): string;
        getDiscoveredBy(): string;
        getAttributes(): string[];
        getProperties(): CropCardProperties;
        getBaseSeed(): BaseSeed;
        getMaxSize(): number;
        getDropGainChance(te: ICropTileEntity): number;
        getGain(te: ICropTileEntity): ItemInstance;
        tick(te: ICropTileEntity): void;
    }
}
declare namespace Agriculture {
    abstract class CropBaseMushroom extends CropCard {
        getProperties(): CropCardProperties;
        getMaxSize(): number;
        canGrow(tileentity: ICropTileEntity): boolean;
        getGrowthDuration(tileentity: ICropTileEntity): number;
    }
}
declare namespace Agriculture {
    class CropRedMushroom extends CropBaseMushroom {
        getID(): string;
        getAttributes(): string[];
        getBaseSeed(): BaseSeed;
        getGain(te: ICropTileEntity): ItemInstance;
    }
}
declare namespace Agriculture {
    class CropBrownMushroom extends CropBaseMushroom {
        getID(): string;
        getAttributes(): string[];
        getBaseSeed(): BaseSeed;
        getGain(te: ICropTileEntity): ItemInstance;
    }
}
declare namespace Agriculture {
    class CropColorFlowerCard extends CropCard {
        protected id: string;
        protected attributes: string[];
        protected dye: ItemInstance;
        protected baseSeed?: BaseSeed;
        constructor(id: string, attributes: string[], dye: ItemInstance, baseSeed?: BaseSeed);
        getID(): string;
        getAttributes(): string[];
        getDiscoveredBy(): string;
        getProperties(): CropCardProperties;
        getBaseSeed(): BaseSeed;
        getMaxSize(): number;
        getOptimalHarvestSize(): number;
        canGrow(tileentity: ICropTileEntity): boolean;
        getGain(te: ICropTileEntity): ItemInstance;
        getSizeAfterHarvest(te: ICropTileEntity): number;
        getGrowthDuration(te: ICropTileEntity): number;
    }
}
declare namespace Agriculture {
    class CropBaseMetalCommon extends CropCard {
        protected id: string;
        protected attributes: string[];
        protected requirements: number[];
        protected gain: ItemInstance;
        constructor(id: string, attributes: string[], requirements: number[], gain: ItemInstance);
        getID(): string;
        getAttributes(): string[];
        getProperties(): CropCardProperties;
        getMaxSize(): number;
        getOptimalHarvestSize(): number;
        getRootsLength(te: ICropTileEntity): number;
        getCropRootsRequirement(): number[];
        canGrow(tileentity: ICropTileEntity): boolean;
        getDropGainChance(te: ICropTileEntity): number;
        getGrowthDuration(tileentity: ICropTileEntity): number;
        getSizeAfterHarvest(tileentity: ICropTileEntity): number;
        getGain(tileentity: ICropTileEntity): ItemInstance;
    }
}
declare namespace Agriculture {
    class CropBaseMetalUncommon extends CropBaseMetalCommon {
        getProperties(): CropCardProperties;
        getMaxSize(): number;
        canGrow(tileentity: ICropTileEntity): boolean;
        getDropGainChance(): number;
        getGrowthDuration(tileentity: ICropTileEntity): number;
    }
}
declare namespace Agriculture {
}
declare namespace IC2Config {
    let soundEnabled: boolean;
    let machineSoundEnabled: boolean;
    let voltageEnabled: boolean;
    let hardRecipes: boolean;
    function getBool(name: string): boolean;
    function getInt(name: string): number;
    function getFloat(name: string): number;
}
declare let isLevelDisplayed: boolean;
declare let lasttime: number;
declare let frame: number;
declare class EUCableGrid extends EnergyGrid {
    maxSafetyVoltage?: number;
    constructor(energyType: EnergyType, maxValue: number, blockID: number, region: BlockSource);
    onOverload(voltage: number): void;
    addBurnParticles(x: number, y: number, z: number): void;
    canConductEnergy(coord1: Vector, coord2: Vector, side: number): boolean;
    dealElectrocuteDamage(damage: number): void;
    tick(): void;
    getCoordsFromString(coordKey: string): Vector;
}
declare namespace CableRegistry {
    type CableData = {
        name: string;
        insulation: number;
        maxInsulation: number;
    };
    export const maxSafetyVoltage: {
        0: number;
        1: number;
        2: number;
    };
    export function getCableData(id: number): CableData;
    export function canBePainted(id: number): boolean;
    export function getBlockID(stringID: string, insulation: number): number;
    export function createBlock(stringID: string, properties: {
        name: string;
        texture: string;
    }, blockType?: string | Block.SpecialType): void;
    export function registerCable(stringID: string, maxVoltage: number, maxInsulationLevel?: number): void;
    export function setupDrop(blockID: string): void;
    export function setupModel(id: number, width: number): void;
    export {};
}
declare enum DamageSource {
    electricity = 0,
    radiation = 1
}
declare namespace EntityHelper {
    function isFriendlyMobType(type: number): boolean;
    function isHostileMobType(type: number): boolean;
    function isMob(entity: number): boolean;
    function isPlayer(entity: number): boolean;
    function canTakeDamage(entity: number, damageSource: number): boolean;
    function isOnGround(entity: number): boolean;
    function resetFallHeight(entity: number): void;
    function getEntitiesInRadius(region: WorldRegion, pos: Vector, rad: number): number[];
}
declare class LaserShot {
    entity: number;
    region: WorldRegion;
    player: number;
    startPos: Vector;
    velocity: Vector;
    power: number;
    range: number;
    blockBreaks: number;
    smelt: boolean;
    dropChance: number;
    hitBlock: boolean;
    constructor(player: number, pos: Vector, vel: Vector, params: {
        power: number;
        range?: number;
        blockBreaks?: number;
        smelt?: boolean;
        dropChance?: number;
    });
    destroyBlock(x: number, y: number, z: number, block: Tile): void;
    checkBlock(x: number, y: number, z: number): void;
    onProjectileHit(target: any): void;
}
declare namespace LaserShotProvider {
    function shootLaser(player: number, pos: Vector, vel: Vector, params: {
        power: number;
        range?: number;
        blockBreaks?: number;
        smelt?: boolean;
        dropChance?: number;
    }): void;
    function removeShot(laser: LaserShot): void;
    function updateAll(): void;
    function onProjectileHit(projectile: number, target: any): void;
}
declare namespace IntegrationAPI {
    function addToRecyclerBlacklist(id: number): void;
    function addToolBooxValidItem(id: number): void;
}
declare namespace ItemName {
    /**@deprecated */
    function setRarity(id: number, rarity: number): void;
    /**@deprecated */
    function getRarity(id: number): number;
    function addTooltip(id: number, tooltip: string): void;
    function addTierTooltip(blockID: string | number, tier: number): void;
    function addStorageBlockTooltip(blockID: string | number, tier: number, capacity: string): void;
    function getBlockStorageText(item: ItemInstance, tier: number, capacity: string): string;
    function getPowerTierText(tier: number): string;
    function getItemStorageText(item: ItemInstance): string;
    function displayEnergy(energy: number, debug?: boolean): string;
}
declare namespace Machine {
    interface IWrenchable extends TileEntity {
        canRotate(side: number): boolean;
        getFacing(): number;
        setFacing(side: number): void;
        getDefaultDrop(): number;
        adjustDrop(item: ItemInstance): ItemInstance;
    }
}
declare namespace Machine {
    let ClientSide: typeof BlockEngine.Decorators.ClientSide, NetworkEvent: typeof BlockEngine.Decorators.NetworkEvent, ContainerEvent: typeof BlockEngine.Decorators.ContainerEvent;
    abstract class MachineBase extends TileEntityBase implements IWrenchable {
        upgrades?: string[];
        defaultDrop?: number;
        onInit(): void;
        setupContainer(): void;
        addLiquidTank(name: string, limit: number, liquids?: string[]): BlockEngine.LiquidTank;
        canRotate(side: number): boolean;
        onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, player: number): boolean;
        setActive(isActive: boolean): void;
        renderModel(): void;
        clientLoad(): void;
        clientUnload(): void;
        getFacing(): number;
        setFacing(side: number): boolean;
        decreaseSlot(slot: ItemContainerSlot, count: number): void;
        getDefaultDrop(): number;
        adjustDrop(item: ItemInstance): ItemInstance;
        audioSource: AudioSource;
        finishingSound: number;
        getOperationSound(): string;
        getStartingSound(): string;
        getInterruptSound(): string;
        startPlaySound(): void;
        stopPlaySound(): void;
    }
}
declare namespace Machine {
    abstract class ElectricMachine extends MachineBase implements EnergyTile {
        energyNode: EnergyTileNode;
        energyTypes: object;
        defaultValues: {
            energy: number;
        };
        data: this["defaultValues"];
        getTier(): number;
        getEnergyStorage(): number;
        getRelativeEnergy(): number;
        getMaxPacketSize(): number;
        onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, player: number): boolean;
        chargeSlot(slotName: string): void;
        dischargeSlot(slotName: string): void;
        energyTick(type: string, src: EnergyTileNode): void;
        energyReceive(type: string, amount: number, voltage: number): number;
        getExplosionPower(): number;
        isConductor(type: string): boolean;
        canReceiveEnergy(side: number, type: string): boolean;
        canExtractEnergy(side: number, type: string): boolean;
        rebuildGrid(): void;
    }
}
declare namespace Machine {
    abstract class Generator extends ElectricMachine {
        defaultDrop: number;
        canReceiveEnergy(): boolean;
        canExtractEnergy(): boolean;
        energyTick(type: string, src: EnergyTileNode): void;
    }
}
declare namespace MachineRegistry {
    function isMachine(id: number): any;
    function registerPrototype(id: number, Prototype: TileEntity.TileEntityPrototype): void;
    function registerElectricMachine(id: number, Prototype: TileEntity.TileEntityPrototype): void;
    function registerGenerator(id: number, Prototype: TileEntity.TileEntityPrototype): void;
    function createStorageInterface(blockID: number, descriptor: StorageDescriptor): void;
    function setStoragePlaceFunction(blockID: string | number, hasVerticalRotation?: boolean): void;
    /**@deprecated */
    function getMachineDrop(blockID: number, level: number): ItemInstanceArray[];
    function setMachineDrop(blockID: string | number, dropID?: number): void;
    function fillTankOnClick(tank: BlockEngine.LiquidTank, item: ItemInstance, playerUid: number): boolean;
    /** @deprecated */
    function isValidEUItem(id: number, count: number, data: number, container: UI.Container): boolean;
    /** @deprecated */
    function isValidEUStorage(id: number, count: number, data: number, container: UI.Container): boolean;
    function updateGuiHeader(gui: any, text: string): void;
    function createInventoryWindow(header: string, uiDescriptor: {
        drawing?: UI.DrawingSet;
        elements: UI.ElementSet;
    }): UI.StandartWindow;
}
declare const transferByTier: {
    1: number;
    2: number;
    3: number;
    4: number;
};
declare namespace MachineRecipeRegistry {
    const recipeData: {};
    const fluidRecipeData: {};
    function registerRecipesFor(name: string, data: any, validateKeys?: boolean): void;
    function addRecipeFor(name: string, input: any, result: any): void;
    function requireRecipesFor(name: string, createIfNotFound?: boolean): any;
    function getRecipeResult(name: string, key1: string | number, key2?: string | number): any;
    function hasRecipeFor(name: string, key1: string | number, key2?: string | number): boolean;
    function registerFluidRecipes(name: string, data: any): void;
    function requireFluidRecipes(name: string): any;
    function addFluidRecipe(name: string, liquid: string, data: any): void;
    function getFluidRecipe(name: string, liquid: string): any;
    type RecipeData = {
        id: number;
        count: number;
        data?: number;
        sourceCount?: number;
    };
}
declare namespace MathUtil {
    function randomInt(min: number, max: number): number;
    function setInRange(value: number, minValue: number, maxValue: number): number;
}
/** @deprecated */
declare const randomInt: typeof MathUtil.randomInt;
declare namespace RadiationAPI {
    type RadiationSource = {
        x: number;
        y: number;
        z: number;
        dimension: number;
        radius: number;
        timer: number;
    };
    export const radioactiveItems: {};
    export const hazmatArmor: {};
    export let sources: RadiationSource[];
    export let effectDuration: {};
    export function setRadioactivity(itemID: number, duration: number, stack?: boolean): void;
    export function getRadioactivity(itemID: number): {
        duration: number;
        stack: number;
    };
    export function isRadioactiveItem(itemID: number): boolean;
    export function emitItemRadiation(entity: number, itemID: number): boolean;
    export function registerHazmatArmor(itemID: number): void;
    export function isHazmatArmor(itemID: number): boolean;
    export function hasHazmatSuit(playerUid: number): boolean;
    export function getRadiation(playerUid: number): number;
    export function setRadiation(playerUid: number, duration: number): void;
    export function addRadiation(playerUid: number, duration: number): void;
    export function addEffect(ent: number, duration: number): void;
    export function addEffectInRange(region: WorldRegion, x: number, y: number, z: number, radius: number, duration: number): void;
    export function addRadiationSource(x: number, y: number, z: number, dimension: number, radius: number, duration: number): void;
    export {};
}
interface IWrech {
    isUseable(item: ItemInstance, damage: number): boolean;
    useItem(item: ItemStack, damage: number, player: number): void;
}
declare namespace ICTool {
    function registerWrench(id: number, properties: IWrech): void;
    function getWrenchData(id: number): IWrech;
    function isWrench(id: number): boolean;
    function isUseableWrench(item: ItemInstance, damage?: number): boolean;
    function useWrench(item: ItemStack, damage: number, player: number): void;
    function rotateMachine(tileEntity: TileEntity, side: number, item: ItemStack, player: number): void;
    function addRecipe(result: ItemInstance, data: {
        id: number;
        data: number;
    }[], tool: number): void;
    function dischargeItem(item: ItemInstance, consume: number, player: number): boolean;
    function useElectricItem(item: ItemInstance, consume: number, player: number): boolean;
    /** @deprecated */
    function registerElectricHoe(stringID: string): void;
    /** @deprecated */
    function registerElectricTreetap(stringID: string): void;
    function setOnHandSound(itemID: number, idleSound: string, stopSound?: string): void;
}
declare namespace ToolHUD {
    let currentUIscreen: string;
    let container: any;
    const Window: UI.Window;
    const buttons: {
        [key: string]: IHUDButton;
    };
    function registerButton(button: IHUDButton): void;
    function getButton(name: string): IHUDButton;
    function setButtonFor(id: number, name: string): void;
    /** @deprecated */
    function setArmorButton(id: number, name: string): void;
    function onClick(name: string): void;
}
declare namespace ToolHUD {
    type ButtonUIData = {
        position: number;
        bitmap: string;
        bitmap2?: string;
        scale: number;
        clicker?: UI.UIClickEvent;
    };
    export abstract class AbstractButton implements IHUDButton {
        name: string;
        type: "armor" | "tool";
        uiData: ButtonUIData;
        uiElement: UI.UIButtonElement;
        bindedItems: any[];
        constructor(name: string, type: "armor" | "tool", uiData: ButtonUIData);
        bindItem(id: number): void;
        isBindedItem(id: number): boolean;
        onClick(player: number): void;
        onUpdate(element: UI.UIButtonElement): void;
    }
    export {};
}
declare namespace ToolHUD {
    class ButtonFly extends AbstractButton {
        isTouched: boolean;
        constructor();
        onUpdate(): void;
    }
}
declare namespace ToolHUD {
    class ButtonHover extends AbstractButton {
        constructor();
        onUpdate(element: UI.UIButtonElement): void;
        onClick(player: number): void;
    }
}
declare namespace ToolHUD {
    class ButtonJump extends AbstractButton {
        constructor();
        onClick(player: number): void;
    }
}
declare namespace ToolHUD {
    class ButtonNightvision extends AbstractButton {
        constructor();
        onClick(player: number): void;
    }
}
declare namespace ToolHUD {
    class ButtonToolMode extends AbstractButton {
        constructor();
        onClick(player: number): void;
    }
}
declare namespace ToolHUD {
}
interface IModeSwitchable extends ItemBase {
    onModeSwitch(item: ItemInstance, player: number): void;
}
interface IHUDButton {
    name: string;
    type: "armor" | "tool";
    uiElement: UI.UIButtonElement;
    bindItem(id: number): void;
    isBindedItem(id: number): boolean;
    onClick(player: number): void;
    onUpdate(element: UI.UIButtonElement): void;
}
interface IUpgrade {
    type: string;
    getSpeedModifier?(item: ItemInstance, machine: TileEntity): number;
    getEnergyDemandMultiplier?(item: ItemInstance, machine: TileEntity): number;
    getProcessTimeMultiplier?(item: ItemInstance, machine: TileEntity): number;
    getExtraTier?(item: ItemInstance, machine: TileEntity): number;
    getExtraEnergyStorage?(item: ItemInstance, machine: TileEntity): number;
    onTick?(item: ItemInstance, machine: TileEntity): void;
}
declare namespace UpgradeAPI {
    function getUpgrade(id: number): IUpgrade;
    function isUpgrade(id: number): boolean;
    function isValidUpgrade(id: number, machine: TileEntity): boolean;
    function registerUpgrade(id: number, upgrade: IUpgrade): void;
    function useUpgrades(machine: TileEntity): UpgradeSet;
    /** @deprecated */
    function executeUpgrades(machine: TileEntity): UpgradeSet;
    class UpgradeSet {
        protected tileEntity: TileEntity;
        speedModifier: number;
        processTimeMultiplier: number;
        energyDemandMultiplier: number;
        extraEnergyStorage: number;
        extraTier: number;
        invertRedstone: boolean;
        constructor(tileEntity: TileEntity);
        resetRates(): void;
        useUpgrades(): void;
        isValidUpgrade(upgrade: IUpgrade): boolean;
        executeUprade(upgrade: IUpgrade, stack: ItemInstance): void;
        getProcessTime(defaultLength: number): number;
        getEnergyDemand(defaultEnergy: number): number;
        getEnergyStorage(defaultEnergyStorage: number): number;
        getTier(defaultTier: number): number;
        getRedstoneInput(powered: boolean): boolean;
    }
}
declare namespace WindSim {
    let windStrength: number;
    function getWindAt(height: number): number;
}
declare namespace OreGenerator {
    type OreProperties = {
        enabled: boolean;
        count: number;
        size: number;
        minHeight?: number;
        maxHeight?: number;
    };
    export let copper: OreProperties;
    export let tin: OreProperties;
    export let lead: OreProperties;
    export let uranium: OreProperties;
    export let iridium: {
        chance: number;
        minHeight: number;
        maxHeight: number;
    };
    export function addFlag(oreName: string, flagName: string, disableOre?: boolean): void;
    export function randomCoords(random: java.util.Random, chunkX: number, chunkZ: number, minHeight?: number, maxHeight?: number): Vector;
    export function generateOre(chunkX: number, chunkZ: number, blockID: number, properties: OreProperties, random: java.util.Random): void;
    export {};
}
declare namespace RubberTreeGenerator {
    let biomeData: {};
    function getBiomeChance(biomeID: number): number;
    function growRubberTree(region: BlockSource, x: number, y: number, z: number): void;
    function generateRubberTree(region: BlockSource, x: number, y: number, z: number, random: java.util.Random, replacePlants?: boolean): void;
    function getGrowHeight(region: BlockSource, x: number, y: number, z: number, max: number, replacePlants: boolean): number;
    function setLeaves(region: BlockSource, x: number, y: number, z: number): void;
    function readRubberTreeConfig(): void;
}
declare class BlockRubberTreeLeaves extends BlockBase {
    constructor();
    getDrop(coords: Vector, block: Tile, level: number, enchant: ToolAPI.EnchantData, item: ItemStack): ItemInstanceArray[];
    checkLeaves(x: number, y: number, z: number, region: BlockSource, explored: {}): boolean;
    checkLeavesFor6Sides(x: number, y: number, z: number, region: BlockSource, explored: {}): boolean;
    updateLeaves(x: number, y: number, z: number, region: BlockSource): void;
    onRandomTick(x: number, y: number, z: number, block: Tile, region: BlockSource): void;
    onDestroy(coords: Vector, block: Tile, region: BlockSource, player: number): void;
    onBreak(coords: Vector, block: Tile, region: BlockSource): void;
}
declare class BlockRubberTreeLog extends BlockBase {
    constructor();
    getDrop(coords: Vector, block: Tile, level: number): ItemInstanceArray[];
    onPlace(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number, region: BlockSource): void;
}
declare class BlockRubberTreeSapling extends BlockBase implements BlockItemBehavior {
    PLACEABLE_TILES: {
        2: boolean;
        3: boolean;
        60: boolean;
    };
    constructor();
    getDrop(): ItemInstanceArray[];
    onNeighbourChange(coords: Vector, block: Tile, changeCoords: Vector, region: BlockSource): void;
    onRandomTick(x: number, y: number, z: number, block: Tile, region: BlockSource): void;
    onClick(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, playerUid: number): void;
    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number): void;
}
declare class BlockOre extends BlockBase {
    constructor(id: string, oreName: string, miningLevel: number);
}
declare class BlockResource extends BlockBase {
    constructor(id: string, resourceName: string, miningLevel: number);
}
declare class BlockStone extends BlockBase {
    constructor(id: string, name: string, texture: [string, number][], miningLevel?: number);
}
declare namespace Agriculture {
    class CropTile extends TileEntityBase {
        defaultValues: {
            crop: any;
            dirty: boolean;
            statGrowth: number;
            statGain: number;
            statResistance: number;
            storageNutrients: number;
            storageWater: number;
            storageWeedEX: number;
            terrainAirQuality: number;
            terrainHumidity: number;
            terrainNutrients: number;
            currentSize: number;
            growthPoints: number;
            scanLevel: number;
            crossingBase: boolean;
        };
        data: Agriculture.CropTileData;
        crop: CropCard;
        renderModel(): void;
        clientLoad(): void;
        clientUnload(): void;
        onInit(): void;
        onTick(): void;
        onLongClick(playerUid: number): boolean;
        onItemClick(id: number, count: number, data: number, coords: Callback.ItemUseCoordinates, playerUid: number, extra: ItemExtraData): boolean;
        destroyBlock(coords: Callback.ItemUseCoordinates, playerUid: number): void;
        updateRender(): void;
        checkPlayerRunning(playerUid: number): void;
        checkGround(): void;
        performTick(): void;
        updateTerrainHumidity(): void;
        updateTerrainNutrients(): void;
        updateTerrainAirQuality(): void;
        performGrowthTick(): void;
        performWeedWork(): void;
        reset(): void;
        hasWeedEX(): boolean;
        attemptCrossing(): boolean;
        lim(value: number, min: number, max: number): number;
        getRelativeCoords(): [number[], number[], number[], number[]];
        askCropJoinCross(coordsArray: [number[], number[], number[], number[]]): any[];
        calculateRatioFor(newCrop: CropCard, oldCrop: CropCard): number;
        applyFertilizer(manual: boolean): boolean;
        applyWeedEx(stack: ItemStack, manual: boolean): boolean;
        applyHydration(amount: number): number;
        tryPlantIn(cropCardID: number, size: number, statGr: number, statGa: number, statRe: number, scan: number): boolean;
        performHarvest(): ItemInstance[];
        performManualHarvest(): boolean;
        nextGaussian(): number;
        pick(): boolean;
        generateSeeds(data: any): ItemInstance;
        isBlockBelow(reqBlockID: number): boolean;
    }
}
declare const guiGenerator: UI.StandartWindow;
declare namespace Machine {
    class FuelGenerator extends Generator {
        defaultValues: {
            energy: number;
            burn: number;
            burnMax: number;
        };
        getScreenByName(): UI.IWindow;
        setupContainer(): void;
        consumeFuel(slotName: string): number;
        onTick(): void;
        getOperationSound(): string;
        getEnergyStorage(): number;
        canRotate(side: number): boolean;
    }
}
declare const guiGeothermalGenerator: UI.StandartWindow;
declare namespace Machine {
    class GeothermalGenerator extends Generator {
        liquidTank: BlockEngine.LiquidTank;
        getScreenByName(): UI.IWindow;
        setupContainer(): void;
        onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, player: number): boolean;
        onTick(): void;
        getOperationSound(): string;
        getEnergyStorage(): number;
        canRotate(side: number): boolean;
    }
}
declare const guiSemifluidGenerator: UI.StandartWindow;
declare namespace Machine {
    class FluidGenerator extends Generator {
        liquidTank: BlockEngine.LiquidTank;
        defaultValues: {
            energy: number;
            fuel: number;
            liquid: any;
        };
        getScreenByName(): UI.IWindow;
        setupContainer(): void;
        onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, player: number): boolean;
        getFuel(liquid: string): {
            power: number;
            amount: number;
        };
        onTick(): void;
        getOperationSound(): string;
        getEnergyStorage(): number;
        canRotate(side: number): boolean;
    }
}
declare const guiSolarPanel: UI.StandartWindow;
declare namespace Machine {
    class SolarGenerator extends Generator {
        defaultValues: {
            energy: number;
            canSeeSky: boolean;
        };
        defaultDrop: number;
        getScreenByName(): UI.IWindow;
        onInit(): void;
        setupContainer(): void;
        onTick(): void;
        getEnergyStorage(): number;
        setSolarElement(container: ItemContainer, window: any, content: any, data: string): void;
    }
}
declare namespace Machine {
    class WindGenerator extends Generator {
        defaultValues: {
            energy: number;
            output: number;
            ticker: number;
            blockCount: number;
        };
        updateBlockCount(): void;
        onInit(): void;
        energyTick(type: string, src: EnergyTileNode): void;
        canRotate(side: number): boolean;
    }
}
declare namespace Machine {
    class WaterGenerator extends Generator {
        defaultValues: {
            energy: number;
            output: number;
            biome: any;
            ticker: number;
            blockCount: number;
        };
        BASE_POWER: number;
        isOcean(biome: number): boolean;
        isRiver(biome: number): boolean;
        getBiome(x: number, z: number): number;
        onInit(): void;
        updateBlockCount(): void;
        energyTick(type: string, src: EnergyTileNode): void;
        canRotate(side: number): boolean;
    }
}
declare const guiRTGenerator: UI.StandartWindow;
declare namespace Machine {
    class RTGenerator extends Generator {
        setupContainer(): void;
        getScreenByName(): UI.IWindow;
        onTick(): void;
        getEnergyStorage(): number;
    }
}
declare namespace Machine {
    interface IHeatConsumer extends TileEntity {
        canReceiveHeat(side: number): boolean;
        receiveHeat(amount: number): number;
    }
}
declare namespace Machine {
    class StirlingGenerator extends Generator implements IHeatConsumer {
        defaultValues: {
            energy: number;
            heat: number;
        };
        getScreenName(): string;
        getTier(): number;
        canRotate(): boolean;
        canReceiveHeat(side: number): boolean;
        receiveHeat(amount: number): number;
        energyTick(type: string, src: EnergyTileNode): void;
    }
}
declare const guiElectricHeatGenerator: UI.StandartWindow;
declare namespace Machine {
    class ElectricHeatGenerator extends ElectricMachine {
        getTier(): number;
        getScreenByName(): UI.IWindow;
        setupContainer(): void;
        calcOutput(): number;
        onTick(): void;
        getEnergyStorage(): number;
        canRotate(): boolean;
    }
}
declare const guiFluidHeatGenerator: UI.StandartWindow;
declare namespace Machine {
    class FluidHeatGenerator extends MachineBase {
        liquidTank: BlockEngine.LiquidTank;
        defaultValues: {
            heat: number;
            fuel: number;
            liquid: any;
        };
        getScreenByName(): UI.IWindow;
        setupContainer(): void;
        canRotate(): boolean;
        onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, player: number): boolean;
        getFuel(liquid: string): {
            power: number;
            amount: number;
        };
        onTick(): void;
        getOperationSound(): string;
        spreadHeat(heat: number): number;
    }
}
declare const guiRTHeatGenerator: UI.StandartWindow;
declare namespace Machine {
    class RTHeatGenerator extends MachineBase {
        getScreenByName(): UI.IWindow;
        setupContainer(): void;
        calculateOutput(): number;
        getOutputText(output: number): string;
        onTick(): void;
        spreadHeat(heat: number): number;
        canRotate(): boolean;
    }
}
declare const guiSolidHeatGenerator: UI.StandartWindow;
declare namespace Machine {
    class SolidHeatGenerator extends MachineBase {
        defaultValues: {
            burn: number;
            burnMax: number;
            output: number;
        };
        getScreenByName(): UI.IWindow;
        setupContainer(): void;
        getFuel(fuelSlot: ItemInstance): number;
        spreadHeat(): number;
        onTick(): void;
        canRotate(): boolean;
    }
}
interface IReactor {
    getHeat(): number;
    setHeat(value: number): void;
    addHeat(amount: number): number;
    getMaxHeat(): number;
    setMaxHeat(value: number): void;
    addEmitHeat(amount: number): void;
    getHeatEffectModifier(): number;
    setHeatEffectModifier(value: number): void;
    getOutput(): number;
    getEnergyOutput(): number;
    addOutput(amount: number): number;
    getItemAt(x: number, y: number): ItemContainerSlot;
    setItemAt(x: number, y: number, id: number, count: number, data: number, extra?: ItemExtraData): void;
    explode(): void;
    isFluidCooled(): boolean;
}
declare const reactorElements: UI.ElementSet;
declare const guiNuclearReactor: UI.StandartWindow;
declare let EUReactorModifier: number;
declare namespace Machine {
    class NuclearReactor extends Generator implements IReactor {
        audioSourceGeiger: AudioSource;
        defaultValues: {
            energy: number;
            isEnabled: boolean;
            signal: number;
            heat: number;
            maxHeat: number;
            hem: number;
            output: number;
        };
        chambers: ReactorChamber[];
        getScreenByName(): UI.IWindow;
        onInit(): void;
        setupContainer(): void;
        addChamber(chamber: ReactorChamber): void;
        removeChamber(chamber: ReactorChamber): void;
        getReactorSize(): number;
        processChambers(): void;
        onTick(): void;
        energyTick(type: string, src: EnergyTileNode): void;
        updateSignal(): void;
        onRedstoneUpdate(signal: number): void;
        getEnergyOutput(): number;
        startPlaySound(): void;
        stopPlaySound(): void;
        getHeat(): number;
        setHeat(heat: number): void;
        addHeat(amount: number): number;
        addEmitHeat(heat: number): void;
        getMaxHeat(): number;
        setMaxHeat(newMaxHeat: number): void;
        getHeatEffectModifier(): number;
        setHeatEffectModifier(value: number): void;
        getSlotName(x: number, y: number): string;
        getItemAt(x: number, y: number): ItemContainerSlot;
        setItemAt(x: number, y: number, id: number, count: number, data: number, extra?: ItemExtraData): void;
        getOutput(): number;
        addOutput(energy: number): number;
        isFluidCooled(): boolean;
        destroyBlock(coords: Callback.ItemUseCoordinates, player: number): void;
        explode(): void;
        calculateHeatEffects(): boolean;
        getRandCoord(rad: number): Vector;
        setFieldSize(container: ItemContainer, window: any, content: any, data: {
            size: number;
        }): void;
    }
}
declare namespace Machine {
    class ReactorChamber extends Generator {
        data: {
            energy: number;
            corePos: Vector;
            signal: number;
        };
        defaultValues: {
            energy: number;
            corePos: any;
            signal: number;
        };
        core: NuclearReactor;
        getTier(): number;
        onItemClick(id: number, count: number, data: number, coords: Callback.ItemUseCoordinates, player: number, extra: ItemExtraData): boolean;
        onInit(): void;
        onRedstoneUpdate(signal: number): void;
        destroy(): boolean;
        isConductor(): boolean;
    }
}
declare namespace Machine {
    class BatteryBlock extends ElectricMachine {
        readonly isTeleporterCompatible: boolean;
        readonly tier: number;
        readonly capacity: number;
        readonly guiScreen: UI.StandartWindow;
        constructor(tier: number, capacity: number, defaultDrop: number, guiScreen: UI.StandartWindow);
        getScreenByName(): UI.StandartWindow;
        getTier(): number;
        setupContainer(): void;
        canRotate(): boolean;
        setFacing(side: number): boolean;
        onTick(): void;
        energyTick(type: string, src: EnergyTileNode): void;
        getEnergyStorage(): number;
        canReceiveEnergy(side: number): boolean;
        canExtractEnergy(side: number): boolean;
        adjustDrop(item: ItemInstance): ItemInstance;
    }
}
declare function BatteryBlockWindow(header: string): UI.StandartWindow;
declare const BatteryBlockInterface: {
    slots: {
        slot1: {
            input: boolean;
            output: boolean;
            isValid: (item: ItemStack, side: number, tileEntity: Machine.BatteryBlock) => boolean;
            canOutput: (item: ItemStack) => boolean;
        };
        slot2: {
            input: boolean;
            output: boolean;
            isValid: (item: ItemStack, side: number, tileEntity: Machine.BatteryBlock) => boolean;
            canOutput: (item: ItemStack) => boolean;
        };
    };
};
declare const guiBatBox: UI.StandartWindow;
declare namespace Machine {
}
declare const guiCESU: UI.StandartWindow;
declare namespace Machine {
}
declare const guiMFE: UI.StandartWindow;
declare namespace Machine {
}
declare const guiMFSU: UI.StandartWindow;
declare namespace Machine {
}
declare namespace Machine {
    class Transformer extends ElectricMachine {
        readonly tier: number;
        constructor(tier: number, defaultDrop?: number);
        defaultValues: {
            energy: number;
            increaseMode: boolean;
        };
        getScreenName(): string;
        getTier(): number;
        getEnergyStorage(): number;
        energyTick(type: string, src: EnergyTileNode): void;
        onRedstoneUpdate(signal: number): void;
        canReceiveEnergy(side: number): boolean;
        canExtractEnergy(side: number): boolean;
        canRotate(): boolean;
        setFacing(side: number): boolean;
    }
}
declare const guiIronFurnace: UI.StandartWindow;
declare namespace Machine {
    class IronFurnace extends MachineBase {
        defaultValues: {
            progress: number;
            burn: number;
            burnMax: number;
        };
        getScreenByName(): UI.IWindow;
        setupContainer(): void;
        consumeFuel(): number;
        getRecipeResult(id: number, data: number): ItemInstance;
        onTick(): void;
        getOperationSound(): string;
        canRotate(side: number): boolean;
    }
}
declare namespace Machine {
    abstract class ProcessingMachine extends ElectricMachine {
        defaultValues: {
            energy: number;
            progress: number;
        };
        defaultDrop: number;
        defaultTier: number;
        defaultEnergyStorage: number;
        defaultEnergyDemand?: number;
        defaultProcessTime?: number;
        tier: number;
        energyStorage: number;
        energyDemand?: number;
        processTime?: number;
        getTier(): number;
        getEnergyStorage(): number;
        setupContainer(): void;
        getRecipeResult(id: number, data: number): any;
        useUpgrades(): UpgradeAPI.UpgradeSet;
        onTick(): void;
        canRotate(side: number): boolean;
    }
}
declare const guiElectricFurnace: UI.StandartWindow;
declare namespace Machine {
    class ElectricFurnace extends ProcessingMachine {
        defaultEnergyDemand: number;
        defaultProcessTime: number;
        defaultDrop: number;
        upgrades: string[];
        getScreenByName(): UI.IWindow;
        getRecipeResult(id: number, data: number): ItemInstance;
        getStartingSound(): string;
        getOperationSound(): string;
        getInterruptSound(): string;
    }
}
declare const guiInductionFurnace: UI.StandartWindow;
declare namespace Machine {
    class InductionFurnace extends ProcessingMachine {
        defaultValues: {
            energy: number;
            progress: number;
            heat: number;
        };
        energyDemand: number;
        defaultTier: number;
        defaultEnergyStorage: number;
        defaultDrop: number;
        upgrades: string[];
        isHeating: boolean;
        isPowered: boolean;
        getScreenByName(): UI.IWindow;
        getRecipeResult(id: number, data: number): ItemInstance;
        checkResult(result: MachineRecipeRegistry.RecipeData, slot: ItemContainerSlot): boolean;
        putResult(result: MachineRecipeRegistry.RecipeData, sourceSlot: ItemContainerSlot, resultSlot: ItemContainerSlot): void;
        useUpgrades(): UpgradeAPI.UpgradeSet;
        onTick(): void;
        onRedstoneUpdate(signal: number): void;
        getStartingSound(): string;
        getOperationSound(): string;
        getInterruptSound(): string;
    }
}
declare const guiMacerator: UI.StandartWindow;
declare namespace Machine {
    class Macerator extends ProcessingMachine {
        defaultEnergyDemand: number;
        defaultProcessTime: number;
        upgrades: string[];
        getScreenByName(): UI.IWindow;
        getRecipeResult(id: number, data: number): MachineRecipeRegistry.RecipeData;
        getOperationSound(): string;
        getInterruptSound(): string;
    }
}
declare const guiCompressor: UI.StandartWindow;
declare namespace Machine {
    class Compressor extends ProcessingMachine {
        defaultEnergyDemand: number;
        defaultProcessTime: number;
        upgrades: string[];
        getScreenByName(): UI.IWindow;
        getRecipeResult(id: number, data: number): MachineRecipeRegistry.RecipeData;
        getOperationSound(): string;
        getInterruptSound(): string;
    }
}
declare const guiExtractor: UI.StandartWindow;
declare namespace Machine {
    class Extractor extends ProcessingMachine {
        defaultEnergyDemand: number;
        defaultProcessTime: number;
        upgrades: string[];
        getScreenByName(): UI.IWindow;
        getRecipeResult(id: number): MachineRecipeRegistry.RecipeData;
        getOperationSound(): string;
        getInterruptSound(): string;
    }
}
declare const guiSolidCanner: UI.StandartWindow;
declare namespace Machine {
    class SolidCanner extends ProcessingMachine {
        defaultEnergyStorage: number;
        defaultEnergyDemand: number;
        defaultProcessTime: number;
        upgrades: string[];
        getScreenByName(): UI.IWindow;
        setupContainer(): void;
        getRecipeResult(id: number): {
            can: number;
            result: ItemInstance;
        };
        onTick(): void;
    }
}
declare const guiCanner: UI.StandartWindow;
declare namespace Machine {
    class Canner extends ProcessingMachine {
        inputTank: BlockEngine.LiquidTank;
        outputTank: BlockEngine.LiquidTank;
        defaultValues: {
            energy: number;
            progress: number;
            mode: number;
        };
        defaultEnergyStorage: number;
        defaultEnergyDemand: number;
        defaultProcessTime: number;
        upgrades: string[];
        getScreenByName(): UI.IWindow;
        isValidSourceItem(id: number, data: number): boolean;
        isValidCan(id: number, data: number): boolean;
        setupContainer(): void;
        onTick(): void;
        switchMode(): void;
        switchTanks(): void;
        updateUI(container: ItemContainer, window: any, content: any, data: {
            mode: number;
        }): void;
        canRotate(side: number): boolean;
    }
}
declare const recyclerBlacklist: number[];
declare const guiRecycler: UI.StandartWindow;
declare namespace Machine {
    class Recycler extends ProcessingMachine {
        defaultEnergyStorage: number;
        defaultEnergyDemand: number;
        defaultProcessTime: number;
        upgrades: string[];
        getScreenByName(): UI.IWindow;
        setupContainer(): void;
        onTick(): void;
        getOperationSound(): string;
        getInterruptSound(): string;
    }
}
declare const guiMetalFormer: UI.StandartWindow;
declare namespace Machine {
    class MetalFormer extends ProcessingMachine {
        defaultValues: {
            energy: number;
            progress: number;
            mode: number;
        };
        defaultEnergyStorage: number;
        defaultEnergyDemand: number;
        defaultProcessTime: number;
        upgrades: ["overclocker", "transformer", "energyStorage", "itemEjector", "itemPulling"];
        getScreenByName(): UI.IWindow;
        getRecipeResult(id: number): MachineRecipeRegistry.RecipeData;
        onTick(): void;
        switchMode(): void;
        setModeIcon(container: ItemContainer, window: any, content: any, data: {
            mode: number;
        }): void;
    }
}
declare const guiOreWasher: UI.StandartWindow;
declare namespace Machine {
    class OreWasher extends ProcessingMachine {
        liquidTank: BlockEngine.LiquidTank;
        defaultEnergyStorage: number;
        defaultEnergyDemand: number;
        defaultProcessTime: number;
        upgrades: string[];
        getScreenByName(): UI.IWindow;
        setupContainer(): void;
        checkResult(result: number[]): boolean;
        putResult(result: number[]): void;
        getRecipeResult(id: number): number[];
        onTick(): void;
        onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, player: number): boolean;
    }
}
declare const guiCentrifuge: UI.StandartWindow;
declare namespace Machine {
    class ThermalCentrifuge extends ProcessingMachine {
        defaultValues: {
            energy: number;
            progress: number;
            heat: number;
            maxHeat: number;
        };
        defaultTier: number;
        defaultEnergyStorage: number;
        defaultEnergyDemand: number;
        defaultProcessTime: number;
        defaultDrop: number;
        upgrades: string[];
        isHeating: boolean;
        isPowered: boolean;
        getScreenByName(): UI.IWindow;
        useUpgrades(): UpgradeAPI.UpgradeSet;
        getRecipeResult(id: number): {
            result: number[];
            heat: number;
        };
        checkResult(result: number[]): boolean;
        putResult(result: number[]): void;
        onTick(): void;
        onRedstoneUpdate(signal: number): void;
        setIndicator(container: ItemContainer, window: any, content: any, data: string): void;
    }
}
declare const guiBlastFurnace: UI.StandartWindow;
declare namespace Machine {
    class BlastFurnace extends MachineBase implements IHeatConsumer {
        defaultValues: {
            progress: number;
            air: number;
            sourceID: number;
            heat: number;
        };
        defaultDrop: number;
        upgrades: string[];
        isHeating: boolean;
        isPowered: boolean;
        getScreenByName(): UI.IWindow;
        setupContainer(): void;
        canRotate(): boolean;
        getRecipeResult(id: number): {
            result: number[];
            duration: number;
        };
        checkResult(result: number[]): boolean;
        putResult(result: number[]): void;
        controlAir(): boolean;
        useUpgrades(): void;
        onTick(): void;
        getMaxHeat(): number;
        onRedstoneUpdate(signal: number): void;
        canReceiveHeat(side: number): boolean;
        receiveHeat(amount: number): number;
        showAirImage(container: ItemContainer, window: any, content: any, data: {
            show: boolean;
        }): void;
        setIndicator(container: ItemContainer, window: any, content: any, data: string): void;
    }
}
declare const guiFermenter: UI.StandartWindow;
declare namespace Machine {
    class Fermenter extends MachineBase implements IHeatConsumer {
        inputTank: BlockEngine.LiquidTank;
        outputTank: BlockEngine.LiquidTank;
        defaultValues: {
            heat: number;
            progress: number;
            fertilizer: number;
        };
        upgrades: string[];
        getScreenByName(): UI.IWindow;
        setupContainer(): void;
        onTick(): void;
        canReceiveHeat(side: number): boolean;
        receiveHeat(amount: number): number;
        canRotate(): boolean;
        onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, player: number): boolean;
    }
}
declare let ENERGY_PER_MATTER: number;
declare const guiMassFabricator: UI.StandartWindow;
declare namespace Machine {
    class MassFabricator extends ElectricMachine {
        defaultValues: {
            energy: number;
            progress: number;
            catalyser: number;
            isEnabled: boolean;
        };
        defaultDrop: number;
        getTier(): number;
        getScreenByName(): UI.IWindow;
        setupContainer(): void;
        onTick(): void;
        onRedstoneUpdate(signal: number): void;
        getOperationSound(): string;
        getEnergyStorage(): number;
        getExplosionPower(): number;
        canRotate(side: number): boolean;
    }
}
declare const guiPump: UI.StandartWindow;
declare namespace Machine {
    class Pump extends ElectricMachine {
        liquidTank: BlockEngine.LiquidTank;
        defaultValues: {
            energy: number;
            progress: number;
            coords: any;
        };
        defaultTier: number;
        defaultEnergyStorage: number;
        defaultEnergyDemand: number;
        defaultProcessTime: number;
        defaultDrop: number;
        upgrades: string[];
        tier: number;
        energyStorage: number;
        energyDemand: number;
        processTime: number;
        getScreenByName(): UI.IWindow;
        getTier(): number;
        getEnergyStorage(): number;
        setupContainer(): void;
        useUpgrades(): void;
        onTick(): void;
        extractLiquid(): void;
        recursiveSearch(liquid: string, x: number, y: number, z: number, map: {}): Vector;
        getLiquidType(liquid: string, block: Tile): string;
        getOperationSound(): string;
        canRotate(side: number): boolean;
    }
}
declare const guiFluidDistributor: UI.StandartWindow;
declare namespace Machine {
    class FluidDistributor extends MachineBase {
        liquidTank: BlockEngine.LiquidTank;
        defaultValues: {
            inverted: boolean;
        };
        defaultDrop: number;
        getScreenByName(): UI.IWindow;
        canRotate(): boolean;
        onInit(): void;
        setupContainer(): void;
        onTick(): void;
        transportLiquid(): void;
        invertMode(): void;
    }
}
declare const guiTank: UI.StandartWindow;
declare namespace Machine {
    class FluidTank extends MachineBase {
        liquidTank: BlockEngine.LiquidTank;
        upgrades: string[];
        getScreenByName(): UI.IWindow;
        setupContainer(): void;
        onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, player: number): boolean;
        onTick(): void;
    }
}
declare const guiMiner: UI.StandartWindow;
declare namespace Machine {
    class Miner extends ElectricMachine {
        defaultValues: {
            energy: number;
            x: number;
            y: number;
            z: number;
            scanY: number;
            scanR: number;
            progress: number;
        };
        defaultDrop: number;
        getScreenByName(): UI.IWindow;
        getTier(): number;
        setupContainer(): void;
        getMiningValues(tool: number): {
            energy: number;
            time: number;
        };
        findOre(level: number): boolean;
        isEmptyBlock(block: Tile): boolean;
        canBeDestroyed(blockID: number, level: number): boolean;
        findPath(x: number, y: number, z: number, sprc: number, level: number): Vector;
        mineBlock(x: number, y: number, z: number, block: Tile, item: ItemContainerSlot): void;
        setPipe(y: number): void;
        drop(items: ItemInstance[]): void;
        onTick(): void;
        getOperationSound(): string;
        getEnergyStorage(): number;
        canRotate(side: number): boolean;
    }
}
declare const guiAdvancedMiner: UI.StandartWindow;
declare namespace Machine {
    class AdvancedMiner extends ElectricMachine {
        defaultValues: {
            energy: number;
            x: number;
            y: number;
            z: number;
            whitelist: boolean;
            silk_touch: boolean;
            isEnabled: boolean;
        };
        defaultTier: number;
        defaultDrop: number;
        upgrades: string[];
        tier: number;
        maxScanCount: number;
        getScreenByName(): UI.IWindow;
        getTier(): number;
        getEnergyStorage(): number;
        setupContainer(): void;
        getScanRadius(itemID: number): number;
        setUpgradeStats(): void;
        onTick(): void;
        updateUi(): void;
        operate(): void;
        isValidBlock(id: number, data: number): boolean;
        harvestBlock(x: number, y: number, z: number, block: Tile): boolean;
        checkDrop(drop: ItemInstanceArray[]): boolean;
        drop(items: ItemInstance[]): void;
        adjustDrop(item: ItemInstance): ItemInstance;
        onRedstoneUpdate(signal: number): void;
        switchWhitelist(): void;
        switchSilktouch(): void;
        restart(): void;
        setSilktouchIcon(container: ItemContainer, window: any, content: any, data: {
            mode: boolean;
        }): void;
        canRotate(side: number): boolean;
    }
}
declare const cropHarvesterGuiElements: UI.ElementSet;
declare const guiCropHarvester: UI.StandartWindow;
declare namespace Machine {
    class CropHarvester extends ElectricMachine {
        defaultValues: {
            energy: number;
            tier: number;
            energy_storage: number;
            scanX: number;
            scanY: number;
            scanZ: number;
        };
        defaultTier: number;
        defaultEnergyStorage: number;
        defaultDrop: number;
        upgrades: string[];
        tier: number;
        energyStorage: number;
        getScreenByName(): UI.IWindow;
        getTier(): number;
        getEnergyStorage(): number;
        useUpgrades(): void;
        setupContainer(): void;
        onTick(): void;
        scan(): void;
        putItem(item: ItemInstance): void;
        isInventoryFull(): boolean;
    }
}
declare const сropMatronGuiElements: UI.ElementSet;
declare const guiCropMatron: UI.StandartWindow;
declare namespace Machine {
    class CropMatron extends ElectricMachine {
        liquidTank: BlockEngine.LiquidTank;
        defaultValues: {
            energy: number;
            scanX: number;
            scanY: number;
            scanZ: number;
        };
        getScreenByName(): UI.IWindow;
        setupContainer(): void;
        onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, player: number): boolean;
        onTick(): void;
        scan(): void;
        getSlot(type: string): Nullable<ItemContainerSlot>;
        getEnergyStorage(): number;
        canRotate(side: number): boolean;
    }
}
declare namespace Machine {
}
declare namespace Machine {
}
declare namespace Machine {
    class Teleporter extends MachineBase {
        defaultValues: {
            isActive: boolean;
            frequency: any;
        };
        defaultDrop: number;
        getScreenName(): string;
        getNearestStorages(): TileEntity[];
        getWeight(ent: number): number;
        onTick(): void;
        onRedstoneUpdate(signal: number): void;
    }
}
declare namespace Machine {
    class TeslaCoil extends ElectricMachine {
        defaultValues: {
            energy: number;
            isEnabled: boolean;
        };
        getScreenName(): string;
        getTier(): number;
        onTick(): void;
        onRedstoneUpdate(signal: number): void;
        getEnergyStorage(): number;
    }
}
declare const SCRAP_BOX_RANDOM_DROP: {
    chance: number;
    id: number;
    data: number;
}[];
declare class ItemScrapBox extends ItemCommon implements ItemBehavior {
    constructor();
    getDropItem(): {
        id: number;
        data: number;
    };
    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number): void;
}
declare class ItemEmptyCell extends ItemCommon implements ItemBehavior {
    constructor();
    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, playerUid: number): void;
}
declare class ItemLiquidCell extends ItemCommon implements ItemBehavior {
    constructor(stringID: string, liquid: string);
    onNameOverride(item: ItemInstance, name: string): string;
}
declare class ItemSeedBag extends ItemCommon implements ItemBehavior {
    constructor();
    onNameOverride(item: ItemInstance, name: string): string;
    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number): void;
}
declare const negativePotions: Native.PotionEffect[];
declare class ItemTerraWart extends ItemFood {
    constructor();
    onFoodEaten(item: ItemInstance, food: number, saturation: number, player: number): void;
}
declare class ItemTinCanFull extends ItemCommon implements ItemBehavior {
    constructor();
    onNameOverride(item: ItemInstance, name: string): string;
    onNoTargetUse(item: ItemStack, playerUid: number): void;
}
declare namespace IC2Coffee {
    type CofeeEffect = {
        amplifier: number;
        effectTimer: number;
    };
    function amplifyEffect(entity: number, potionId: number, maxAmplifier: number, extraDuration: number): number;
    function craftFunction(api: Recipes.WorkbenchFieldAPI, field: UI.Slot[], result: ItemInstance, player: number): void;
}
declare class ItemCable extends ItemCommon implements ItemBehavior {
    maxVoltage: number;
    constructor(stringID: string, name: string, texture: string | Item.TextureData, maxVoltage: number);
    onNameOverride(item: ItemInstance, name: string): string;
    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number): void;
    static createItem(stringID: string, name: string, texture: string | Item.TextureData, maxVoltage: number): ItemBase;
}
declare class ItemElectric extends ItemCommon implements IElectricItem, ItemBehavior {
    energy: string;
    maxCharge: number;
    transferLimit: number;
    tier: number;
    canProvideEnergy: boolean;
    constructor(stringID: string, name: string, maxCharge: number, transferLimit: number, tier: number, inCreative?: boolean);
    onNameOverride(item: ItemInstance, name: string): string;
}
declare class ItemBattery extends ItemElectric {
    canProvideEnergy: boolean;
    constructor(stringID: string, name: string, maxCharge: number, transferLimit: number, tier: number);
    onIconOverride(item: ItemInstance): Item.TextureData;
}
declare class ItemBatteryCharging extends ItemBattery {
    readMode(extra: ItemExtraData): number;
    onNoTargetUse(item: ItemStack, player: number): void;
    getModeTooltip(mode: number): string;
    onNameOverride(item: ItemInstance, name: string): string;
    chargeItems(player: PlayerEntity, index: number, item: ItemInstance): void;
    static checkCharging(playerUid: number): void;
}
declare class UpgradeModule extends ItemCommon implements IUpgrade {
    type: string;
    constructor(stringID: string, name: string, type?: string);
}
declare abstract class UpgradeTransporting extends UpgradeModule implements ItemBehavior {
    onNameOverride(item: ItemInstance, name: string): string;
    getSideName(side: number): string;
    getTooltip(): string;
    onIconOverride(item: ItemInstance): Item.TextureData;
    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number): void;
}
declare class UpgradeEjector extends UpgradeTransporting {
    type: string;
    getTooltip(): string;
    onTick(item: ItemInstance, machine: TileEntity): void;
}
declare class UpgradeEnergyStorage extends UpgradeModule implements ItemBehavior {
    type: string;
    onNameOverride(item: ItemInstance, name: string): string;
    getExtraEnergyStorage(item: ItemInstance): number;
}
declare class UpgradeFluidEjector extends UpgradeTransporting {
    type: string;
    getTooltip(): string;
    onTick(item: ItemInstance, machine: TileEntity): void;
}
declare class UpgradeFluidPulling extends UpgradeTransporting {
    type: string;
    getTooltip(): string;
    onTick(item: ItemInstance, machine: TileEntity): void;
}
declare class UpgradeOverclocker extends UpgradeModule implements ItemBehavior {
    type: string;
    onNameOverride(item: ItemInstance, name: string): string;
    getSpeedModifier(item: ItemInstance): number;
    getEnergyDemandMultiplier(item: ItemInstance): number;
    getProcessTimeMultiplier(item: ItemInstance): number;
}
declare class UpgradePulling extends UpgradeTransporting {
    type: string;
    getTooltip(): string;
    onTick(item: ItemInstance, machine: TileEntity): void;
}
declare class UpgradeTransformer extends UpgradeModule implements ItemBehavior {
    type: string;
    onNameOverride(item: ItemInstance, name: string): string;
    getExtraTier(item: ItemInstance): number;
}
declare namespace ReactorItem {
    function registerComponent(id: number, component: ReactorComponent): void;
    function getComponent(id: number): ReactorComponent;
    function isReactorItem(id: number): boolean;
    class ReactorSlotCoord {
        item: ItemContainerSlot;
        x: number;
        y: number;
        constructor(item: ItemContainerSlot, x: number, y: number);
        getComponent(): ReactorComponent;
    }
}
declare namespace ReactorItem {
    abstract class ReactorComponent {
        processChamber(item: ItemContainerSlot, reactor: IReactor, x: number, y: number, heatrun: boolean): void;
        acceptUraniumPulse(item: ItemContainerSlot, reactor: IReactor, pulsingItem: ItemContainerSlot, youX: number, youY: number, pulseX: number, pulseY: number, heatrun: boolean): boolean;
        canStoreHeat(item: ItemContainerSlot): boolean;
        getMaxHeat(item: ItemContainerSlot): number;
        getCurrentHeat(item: ItemContainerSlot): number;
        alterHeat(item: ItemContainerSlot, reactor: IReactor, x: number, y: number, heat: number): number;
        influenceExplosion(item: ItemContainerSlot, reactor: IReactor): number;
    }
}
declare namespace ReactorItem {
    abstract class DamageableReactorComponent extends ReactorComponent {
        readonly maxDamage: number;
        constructor(durability: number);
        getCustomDamage(item: ItemContainerSlot): number;
        setCustomDamage(item: ItemContainerSlot, damage: number): void;
        applyCustomDamage(item: ItemContainerSlot, damage: number): void;
    }
}
declare namespace ReactorItem {
    class FuelRod extends DamageableReactorComponent {
        readonly numberOfCells: number;
        constructor(cells: number, durability: number);
        getDepletedItem(): number;
        processChamber(item: ItemContainerSlot, reactor: IReactor, x: number, y: number, heatrun: boolean): void;
        checkPulseable(reactor: IReactor, x: number, y: number, slot: ItemContainerSlot, meX: number, meY: number, heatrun: boolean): number;
        triangularNumber(x: number): number;
        checkHeatAcceptor(reactor: IReactor, x: number, y: number, heatAcceptors: ReactorSlotCoord[]): void;
        acceptUraniumPulse(item: ItemContainerSlot, reactor: IReactor, pulsingItem: ItemContainerSlot, youX: number, youY: number, pulseX: number, pulseY: number, heatrun: boolean): boolean;
        getFinalHeat(item: ItemContainerSlot, reactor: IReactor, x: number, y: number, heat: number): number;
        influenceExplosion(item: ItemContainerSlot, reactor: IReactor): number;
    }
}
declare namespace ReactorItem {
    class FuelRodMOX extends FuelRod {
        getDepletedItem(): number;
        acceptUraniumPulse(item: ItemContainerSlot, reactor: IReactor, pulsingItem: ItemContainerSlot, youX: number, youY: number, pulseX: number, pulseY: number, heatrun: boolean): boolean;
        getFinalHeat(item: ItemContainerSlot, reactor: IReactor, x: number, y: number, heat: number): number;
    }
}
declare namespace ReactorItem {
    class Plating extends ReactorComponent {
        readonly maxHeatAdd: number;
        readonly effectModifier: number;
        constructor(maxHeatAdd: number, effectModifier: number);
        processChamber(item: ItemContainerSlot, reactor: IReactor, x: number, y: number, heatrun: boolean): void;
        influenceExplosion(item: ItemContainerSlot, reactor: IReactor): number;
    }
}
declare namespace ReactorItem {
    class Reflector extends DamageableReactorComponent {
        acceptUraniumPulse(item: ItemContainerSlot, reactor: IReactor, pulsingItem: ItemContainerSlot, youX: number, youY: number, pulseX: number, pulseY: number, heatrun: boolean): boolean;
        influenceExplosion(item: ItemContainerSlot, reactor: IReactor): number;
    }
    class ReflectorIridium extends ReactorComponent {
        acceptUraniumPulse(item: ItemContainerSlot, reactor: IReactor, pulsingItem: ItemContainerSlot, youX: number, youY: number, pulseX: number, pulseY: number, heatrun: boolean): boolean;
        influenceExplosion(item: ItemContainerSlot, reactor: IReactor): number;
    }
}
declare namespace ReactorItem {
    class HeatStorage extends DamageableReactorComponent {
        constructor(heatStorage: number);
        canStoreHeat(item: ItemContainerSlot): boolean;
        getMaxHeat(item: ItemContainerSlot): number;
        getCurrentHeat(item: ItemContainerSlot): number;
        alterHeat(item: ItemContainerSlot, reactor: IReactor, x: number, y: number, heat: number): number;
    }
}
declare namespace ReactorItem {
    class HeatExchanger extends HeatStorage {
        readonly switchSide: number;
        readonly switchReactor: number;
        constructor(heatStorage: number, switchSide: number, switchReactor: number);
        processChamber(item: ItemContainerSlot, reactor: IReactor, x: number, y: number, heatrun: boolean): void;
        checkHeatAcceptor(reactor: IReactor, x: number, y: number, heatAcceptors: ReactorSlotCoord[]): void;
    }
}
declare namespace ReactorItem {
    class HeatVent extends HeatStorage {
        readonly selfVent: number;
        readonly reactorVent: number;
        constructor(heatStorage: number, selfVent: number, reactorVent: number);
        processChamber(item: ItemContainerSlot, reactor: IReactor, x: number, y: number, heatrun: boolean): void;
    }
    class HeatVentSpread extends ReactorComponent {
        sideVent: number;
        constructor(sideVent: number);
        processChamber(item: ItemContainerSlot, reactor: IReactor, x: number, y: number, heatrun: boolean): void;
        cool(reactor: IReactor, x: number, y: number): void;
    }
}
declare namespace ReactorItem {
    class Condensator extends DamageableReactorComponent {
        canStoreHeat(item: ItemContainerSlot): boolean;
        getMaxHeat(item: ItemContainerSlot): number;
        getCurrentHeat(item: ItemContainerSlot): number;
        alterHeat(item: ItemContainerSlot, reactor: IReactor, x: number, y: number, heat: number): number;
    }
}
declare class ArmorIC2 extends ItemArmor {
    constructor(stringID: string, name: string, params: ArmorParams, inCreative?: boolean);
    setArmorTexture(name: string): void;
}
declare class ArmorHazmat extends ArmorIC2 implements ArmorListeners {
    constructor(stringID: string, name: string, params: ArmorParams);
    onHurt(params: {
        attacker: number;
        damage: number;
        type: number;
    }, item: ItemInstance, index: number, playerUid: number): ItemInstance;
    onTick(item: ItemInstance, index: number, playerUid: number): void;
}
declare abstract class ArmorElectric extends ArmorIC2 implements IElectricItem, ArmorListeners {
    energy: string;
    maxCharge: number;
    transferLimit: number;
    tier: number;
    canProvideEnergy: boolean;
    constructor(stringID: string, name: string, params: ArmorParams, maxCharge: number, transferLimit: number, tier: number, inCreative?: boolean);
    onNameOverride(item: ItemInstance, name: string): string;
    onHurt(params: {
        attacker: number;
        damage: number;
        type: number;
    }, item: ItemInstance, index: number, playerUid: number): ItemInstance;
    onTick(item: ItemInstance, index: number, playerUid: number): ItemInstance;
}
declare namespace JetpackProvider {
    function getFlying(playerUid: number): boolean;
    function setFlying(playerUid: number, fly: boolean): boolean;
    function onTick(item: ItemInstance, playerUid: number): ItemInstance;
}
declare class ArmorJetpackElectric extends ArmorElectric {
    constructor();
    onHurt(params: {
        attacker: number;
        damage: number;
        type: number;
    }, item: ItemInstance, index: number, playerUid: number): ItemInstance;
    onTick(item: ItemInstance, index: number, playerUid: number): ItemInstance;
}
declare class ArmorBatpack extends ArmorElectric {
    constructor(stringID: string, name: string, maxCharge: number, transferLimit: number, tier: number);
    onTick(item: ItemInstance, index: number, playerUid: number): ItemInstance;
    static chargeCarriedItem(itemData: IElectricItem, stack: ItemInstance, playerUid: number): ItemInstance;
}
declare class ArmorNightvisionGoggles extends ArmorElectric {
    constructor();
    onTick(item: ItemInstance, index: number, playerUid: number): ItemInstance;
}
declare class ArmorNanoSuit extends ArmorElectric {
    constructor(stringID: string, name: string, params: ArmorParams, inCreative?: boolean);
    getEnergyPerDamage(): number;
    getExtraDefence(): number;
    onHurt(params: {
        attacker: number;
        damage: number;
        type: number;
    }, item: ItemInstance, index: number, playerUid: number): ItemInstance;
}
declare class ArmorNanoHelmet extends ArmorNanoSuit {
    constructor(stringID: string, name: string, texture: string);
    onTick(item: ItemInstance, index: number, playerUid: number): ItemInstance;
}
declare class ArmorNanoChestplate extends ArmorNanoSuit {
    constructor(stringID: string, name: string, texture: string);
}
declare class ArmorNanoLeggings extends ArmorNanoSuit {
    constructor(stringID: string, name: string, texture: string);
}
declare class ArmorNanoBoots extends ArmorNanoSuit {
    constructor(stringID: string, name: string, texture: string);
    onHurt(params: {
        attacker: number;
        damage: number;
        type: number;
    }, item: ItemInstance, index: number, playerUid: number): ItemInstance;
}
/** @deprecated */
declare const NANO_ARMOR_FUNCS: {
    hurt: (params: {
        attacker: number;
        damage: number;
        type: number;
        b1: boolean;
        b2: boolean;
    }, item: ItemInstance, index: number) => boolean;
    tick: (item: ItemInstance, index: number) => boolean;
};
declare class ArmorQuantumSuit extends ArmorElectric {
    constructor(stringID: string, name: string, params: ArmorParams, inCreative?: boolean);
    getEnergyPerDamage(): number;
    getExtraDefence(): number;
    onHurt(params: {
        attacker: number;
        damage: number;
        type: number;
    }, item: ItemInstance, index: number, playerUid: number): ItemInstance;
}
declare class ArmorQuantumHelmet extends ArmorQuantumSuit {
    constructor(stringID: string, name: string, texture: string);
    onHurt(params: {
        attacker: number;
        damage: number;
        type: number;
    }, item: ItemInstance, index: number, playerUid: number): ItemInstance;
    onTick(item: ItemInstance, index: number, playerUid: number): ItemInstance;
}
declare class ArmorQuantumChestplate extends ArmorQuantumSuit {
    constructor(stringID: string, name: string, texture: string);
    onHurt(params: {
        attacker: number;
        damage: number;
        type: number;
    }, item: ItemInstance, index: number, playerUid: number): ItemInstance;
    onTick(item: ItemInstance, index: number, playerUid: number): ItemInstance;
}
declare class ArmorQuantumLeggings extends ArmorQuantumSuit {
    runTime: number;
    constructor(stringID: string, name: string, texture: string);
    onTick(item: ItemInstance, index: number, playerUid: number): ItemInstance;
}
declare class ArmorQuantumBoots extends ArmorQuantumSuit {
    constructor(stringID: string, name: string, texture: string);
    onHurt(params: {
        attacker: number;
        damage: number;
        type: number;
    }, item: ItemInstance, index: number, playerUid: number): ItemInstance;
}
/** @deprecated */
declare const QUANTUM_ARMOR_FUNCS: {
    hurt: (params: {
        attacker: number;
        damage: number;
        type: number;
        b1: boolean;
        b2: boolean;
    }, item: ItemInstance, index: number) => boolean;
    tick: (item: ItemInstance, index: number) => boolean;
};
declare class ArmorSolarHelmet extends ArmorIC2 implements ArmorListeners {
    constructor(stringID: string, name: string, params: ArmorParams);
    onTick(item: ItemInstance, index: number, playerUid: number): void;
}
declare const toolboxItems: number[];
declare const guiContainmentBox: UI.StandartWindow;
declare class DebugItem extends ItemElectric {
    canProvideEnergy: boolean;
    constructor();
    onCharge(item: ItemInstance, amount: number, tier: number, addAll: boolean): number;
    onDischarge(item: ItemInstance, amount: number, tier: number, getAll: boolean): number;
    onNameOverride(item: ItemInstance, name: string): string;
    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number): void;
}
declare class EUMeterUpdatable {
    protected node: EnergyNode;
    container: ItemContainer;
    mode: number;
    time: number;
    sum: number;
    minValue: number;
    maxValue: number;
    remove: boolean;
    update: () => void;
    constructor(node: EnergyNode);
    setupContainer(container: ItemContainer): void;
    openGuiFor(client: NetworkClient): void;
    resetValues(): void;
    tick(): void;
    getUnit(): string;
    getValue(): number;
    displayValue(value: number): string;
    destroy(): void;
}
declare class EUMeter extends ItemCommon implements ItemBehavior {
    constructor();
    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number): void;
    static gui: UI.Window;
}
declare class ItemTransmitter extends ItemCommon implements ItemBehavior {
    constructor();
    onNameOverride(item: ItemInstance, name: string): string;
    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number): void;
}
declare let ore_blocks: number[];
declare class ItemScanner extends ItemElectric {
    constructor(stringID: string, name: string, maxCharge: number, transferLimit: number, tier: number);
    getScanRadius(): number;
    getEnergyPerUse(): number;
    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number): void;
}
declare class ItemWindMeter extends ItemElectric implements ItemBehavior {
    energyPerUse: number;
    constructor();
    onNoTargetUse(item: ItemStack, player: number): void;
}
declare class ItemTreetap extends ItemCommon {
    constructor();
    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number): void;
}
declare class ToolWrench extends ItemCommon implements IWrech {
    constructor(stringID: string, name: string, icon: string);
    isUseable(item: ItemInstance, damage: number): boolean;
    useItem(item: ItemStack, damage: number, player: number): void;
}
declare class ElectricWrench extends ItemElectric implements IWrech {
    energyPerUse: number;
    constructor();
    isUseable(item: ItemInstance, damage: number): boolean;
    useItem(item: ItemStack, damage: number, player: number): void;
}
declare class ElectricTreetap extends ItemElectric {
    energyPerUse: number;
    constructor();
    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number): void;
}
declare abstract class ElectricTool extends ItemElectric implements ToolParams {
    energyPerUse: number;
    damage: number;
    toolMaterial: ToolAPI.ToolMaterial;
    constructor(stringID: string, name: string, maxCharge: number, transferLimit: number, tier: number);
    setToolParams(toolData: {
        energyPerUse: number;
        level: number;
        efficiency: number;
        damage?: number;
        blockMaterials?: string[];
    }): void;
    getEnergyPerUse(item: ItemInstance): number;
    onBroke(): boolean;
    onAttack(item: ItemInstance, victim: number, attacker: number): boolean;
    onDestroy(item: ItemInstance, coords: Callback.ItemUseCoordinates, block: Tile, player: number): boolean;
    calcDestroyTime(item: ItemInstance, coords: Callback.ItemUseCoordinates, block: Tile, params: {
        base: number;
        devider: number;
        modifier: number;
    }, destroyTime: number): number;
}
declare class ElectricHoe extends ElectricTool {
    energyPerUse: number;
    constructor();
    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number): void;
}
declare class ElectricChainsaw extends ElectricTool {
    damage: number;
    extraDamage: number;
    constructor(stringID: string, name: string, toolData: {
        energyPerUse: number;
        level: number;
        efficiency: number;
        damage: number;
        blockMaterials?: string[];
    }, maxCharge: number, transferLimit: number, tier: number);
    modifyEnchants(enchantData: ToolAPI.EnchantData, item: ItemInstance, coords?: Callback.ItemUseCoordinates, block?: Tile): void;
    onDestroy(item: ItemInstance, coords: Callback.ItemUseCoordinates, block: Tile, player: number): boolean;
    onAttack(item: ItemInstance, victim: number, attacker: number): boolean;
}
declare class ToolDrill extends ElectricTool {
    constructor(stringID: string, name: string, toolData: {
        energyPerUse: number;
        level: number;
        efficiency: number;
        damage: number;
        blockMaterials?: string[];
    }, maxCharge: number, transferLimit: number, tier: number);
    onDestroy(item: ItemInstance, coords: Callback.ItemUseCoordinates, block: Tile, player: number): boolean;
    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, playerUid: number): void;
    continueDestroyBlock(item: ItemInstance, coords: Callback.ItemUseCoordinates, block: Tile, progress: number): void;
    playDestroySound(item: ItemInstance, block: Tile, player: number): void;
}
declare class ToolDrillIridium extends ToolDrill implements IModeSwitchable {
    constructor();
    readMode(extra: ItemExtraData): number;
    getModeName(mode: number): string;
    onNameOverride(item: ItemInstance, name: string): string;
    onModeSwitch(item: ItemInstance, player: number): void;
    modifyEnchant(enchant: ToolAPI.EnchantData, item: ItemInstance): void;
    getOperationRadius(side: number): Vector;
    calcDestroyTime(item: ItemInstance, coords: Callback.ItemUseCoordinates, block: Tile, params: {
        base: number;
        devider: number;
        modifier: number;
    }, destroyTime: number): number;
    onDestroy(item: ItemInstance, coords: Callback.ItemUseCoordinates, block: Tile, player: number): boolean;
    private destroy3x3Area;
}
declare class ItemNanoSaber extends ElectricTool {
    damage: number;
    constructor();
    onIconOverride(item: ItemInstance): Item.TextureData;
    onAttack(item: ItemInstance, victim: number, attacker: number): boolean;
    onNoTargetUse(item: ItemStack, player: number): void;
    /** KEX compatibility for dynamic Nano Saber damage */
    getAttackDamageBonus(item: ItemInstance): number;
    static onTick(playerUid: number): void;
}
declare class ItemMiningLaser extends ItemElectric implements IModeSwitchable {
    modes: {
        0: {
            name: string;
            energy: number;
            power: number;
        };
        1: {
            name: string;
            energy: number;
            range: number;
            power: number;
            blockBreaks: number;
            dropChance: number;
            sound: string;
        };
        2: {
            name: string;
            energy: number;
            power: number;
            sound: string;
        };
        3: {
            name: string;
            energy: number;
            power: number;
        };
        4: {
            name: string;
            energy: number;
            power: number;
            smelt: boolean;
        };
        5: {
            name: string;
            energy: number;
            power: number;
            blockBreaks: number;
            sound: string;
        };
        6: {
            name: string;
            energy: number;
            power: number;
        };
    };
    constructor();
    readMode(extra: ItemExtraData): number;
    getModeProperties(mode: number): any;
    getModeName(mode: number): string;
    onNameOverride(item: ItemInstance, name: string): string;
    onModeSwitch(item: ItemInstance, player: number): void;
    makeShot(item: ItemInstance, player: number): void;
    onNoTargetUse(item: ItemStack, player: number): void;
    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number): void;
}
declare class CropAnalyser extends ItemCommon {
    static gui: UI.Window;
    constructor();
    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number): void;
    onNoTargetUse(item: ItemStack, player: number): void;
    showCropValues(tileEntity: Agriculture.ICropTileEntity, player: number): void;
    setupContainer(container: ItemContainer): void;
    static clearInfo(container: ItemContainer): void;
    static moveBag(slotBagIn: ItemContainerSlot, slotBagOut: ItemContainerSlot): void;
    static scanBag(slotBag: ItemInstance, slotEnergy: ItemInstance, playerUid: number): void;
    static showAllValues(container: ItemContainer, seedBagSlot: ItemInstance): void;
    static getSeedName(name: string): string;
    static energyForLevel(level: number): number;
    static getStringTier(tier: number): string;
}
declare namespace CropAnalyserGUI {
}
declare class ItemWeedingTrowel extends ItemCommon {
    constructor();
    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number): void;
}
declare class ItemPainter extends ItemCommon {
    readonly color: number;
    constructor(colorIndex: number);
    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number): void;
}
declare class UpgradeMFSU extends ItemCommon implements ItemBehavior {
    constructor();
    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number): void;
}
declare const ICore: {
    Machine: typeof MachineRegistry;
    Recipe: typeof MachineRecipeRegistry;
    Render: typeof TileRenderer;
    ChargeRegistry: typeof ChargeItemRegistry;
    Cable: typeof CableRegistry;
    Upgrade: typeof UpgradeAPI;
    ReactorItem: typeof ReactorItem;
    Radiation: typeof RadiationAPI;
    Tool: typeof ICTool;
    Sound: typeof SoundManager;
    Agriculture: typeof Agriculture;
    ItemName: typeof ItemName;
    UI: typeof ToolHUD;
    Config: typeof IC2Config;
    Ore: typeof OreGenerator;
    Integration: typeof IntegrationAPI;
    WindSim: typeof WindSim;
    requireGlobal: (command: string) => any;
};
