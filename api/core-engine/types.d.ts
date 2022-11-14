
/**
 * Type used to mark Java bytes.
 */
type jbyte = number;

/**
 * Most methods must return `null` if value is not presented.
 */
type Nullable<T> = T | null;

/**
 * Object representing the set of coordinates in the three-dimensional world.
 */
interface Vector {
    x: number,
    y: number,
    z: number
}

/**
 * Object representing coordinate set with side data.
 */
interface BlockPosition extends Vector {
    /**
     * Side of the block, one of the {@link EBlockSide} constants.
     */
    side: number
}

/**
 * Object representing RGB color.
 */
interface Color {
    r: number,
    g: number,
    b: number
}

/**
 * Object representing pitch/yaw angle set (in radians).
 */
interface LookAngle {
    pitch: number,
    yaw: number
}

/**
 * Object representing item instance in the inventory.
 */
interface ItemInstance {
    /**
     * Item ID.
     */
    id: number,
    /**
     * Amount of items of the specified ID.
     */
    count: number,
    /**
     * Item data value. Generally specifies some property of the item, e.g.
     * color, material, etc. In many cases `-1` means "any data value".
     * @default 0
     */
    data: number,
    /**
     * Item extra data. Contains some additional item data such as enchants,
     * custom item name or some additional properties.
     */
    extra?: ItemExtraData
}

/**
 * Array of three or four elements representing item ID, count, data and extra respectively.
 * Uses in block drop functions.
 */
type ItemInstanceArray = [number, number, number, ItemExtraData?];

/**
 * Object representing block in the world.
 */
interface Tile {
    id: number,
    data: number
}

/**
 * Object representing current weather in the world.
 */
interface Weather {
    /**
     * Current rain level, from 0 (no rain) to 10 (heavy rain).
     */
    rain: number,
    /**
     * Current lightning level, from 0 (no lightning) to 10.
     */
    thunder: number
}

/**
 * @deprecated Use behavior packs instead.
 */
declare class CustomEntity {}
