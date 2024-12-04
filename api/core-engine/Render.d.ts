/**
 * Class that is used to give mobs, animations and blocks custom shape.
 */
declare class Render {
    readonly isEmpty: boolean;
    readonly isChangeable: boolean;
    readonly renderer: Nullable<Render.Renderer>;
    readonly model: Nullable<Render.Model>;
    /**
     * @internal
     */
    readonly parts: { [key: string]: Render.ModelPart };
    readonly renderId: number;

    /**
     * Creates a new Render instance with specified parameters.
     * @param parameters specifies all the 
     * properties of the object. If it is a number, vanilla render ID is used,
     * if it is a string, used as {@link Render.RenderParameters.name RenderParameters.name} name property
     */
    constructor(parameters?: Render.RenderParameters | string | number);

    /**
     * @returns Render identifier that can be used to set render to the mob,
     * animation or block.
     */
    getID(): number;
    /**
     * @returns Render identifier that can be used to set render to the mob,
     * animation or block.
     */
    getRenderType(): number;
    /**
     * @returns Render identifier that can be used to set render to the mob,
     * animation or block.
     */
    getId(): number;

    /**
     * Specifies additional params for the following {@link Render}.
     * @param params specifies all the 
     * properties of the object. If it is a number, vanilla render ID is used,
     * if it is a string, used as {@link Render.RenderParameters.name RenderParameters.name} name property
     */
    init(params?: Render.RenderParameters | string | number): void

    initModel(): void;

    checkChangeable(): void;

    rebuild(): void;

    /**
     * @returns Render's model that defines it's visual shape. 
     */
    getModel(): Render.Model;

    /**
     * @returns Transform object used to manipulate current render.
     */
    transform(): Render.Transform;

    /**
     * @param partName full name of the part separated by "."
     * @returns A part of the render by it's full name. By default, there are six 
     * parts available to the user. However, you can create your own parts that 
     * suit your needs and get them by their names.
     */
    getPart(partName: string): Render.ModelPart;

    /**
     * Adds a part to the render by it's full name. The part should be descendent 
     * of one of the six default parts, see {@link Render.ModelPart ModelPart} for details.
     * @param partName full name of the part separated by "."
     * @param partParams specifies all the parameters of the part
     * @returns Newly created part.
     */
    addPart(partName: string, partParams?: Render.PartParameters): Render.ModelPart;

    /**
     * Sets all the properties of the part by it's full name.
     * @param partName full name of the part separated by "."
     * @param partParams specifies all the parameters of the part
     */
    setPartParams(partName: string, partParams?: Render.PartParameters): void;

    /**
     * Sets the content and all properties of the part by it's full name.
     * @param name full name of the part separated by "."
     * @param data array of part data objects to be applied to the part
     * @param params specifies all the parameters of the part
     */
    setPart(name: string, data: Render.PartElement[], params: Render.PartParameters): void;

    /**
     * @internal
     */
    _setPartRecursive(part: Render.ModelPart, data: Render.PartElement[], coords: Vector): void;

    /**
     * @deprecated Unavailable feature, renderers must be saved independently.
     */
    fromCache(data: Render.Cache): void;
    /**
     * @deprecated Unavailable feature, renderers must be saved independently.
     */
    toCache(): Render.Cache;
    /**
     * @deprecated Unavailable feature, renderers must be saved independently.
     */
    saveState(name: string, isLocal: boolean): void;
    /**
     * @deprecated Unavailable feature, renderers must be saved independently.
     */
    loadState(name: string, isLocal: boolean): void;
    /**
     * @deprecated Unavailable feature, renderers must be saved independently.
     */
    loadInitialState(name: string): void;
    /**
     * @deprecated Unavailable feature, renderers must be saved independently.
     */
    saveToNext(name: string, isLocal: boolean): void;
    /**
     * @deprecated Does nothing, not required anymore.
     */
    setTextureResolution(...params: any): void;
}

/**
 * We're meant native renderer, it's not connected with
 * same class here.
 */
declare namespace Render {
    /**
     * An interface of the object that is used as {@link Render.constructor} parameter.
     * */
    interface RenderParameters {
        /**
         * Name of the cached Render object to be used.
         * @deprecated Unavailable feature, renderers must be saved independently.
         */
        name?: string;
        /**
         * Item ID for Item Sprite render type.
         */
        item?: number;
        /**
         * Relative path to the texture used by render,
         * e.g. `"textures/entity/zombie.png"`.
         */
        skin?: string;
        /**
         * Render scale multiplier.
         */
        scale?: number;
        /**
         * If set to true, a humanoid render is constructed, empty otherwise.
         */
        raw?: boolean;
    }

    /**
     * Part's box description specified in {@link Render.setPart} method.
     */
    interface PartElement {
        /**
         * Box coordinates, relative to part's coordinates.
         */
        coords: Vector,
        /**
         * Box texture offset.
         */
        uv?: { x: number, y: number },
        /**
         * Box size.
         * @param w additional size to be added from all the
         * six sizes of the box
         */
        size: { x: number, y: number, z: number, w?: number },
        /**
         * Specifies child elements, using current box coordinates
         * as base for the child boxes.
         */
        children?: PartElement[]
    }

    /**
     * @deprecated Unavailable feature, renderers must be saved independently.
     */
    interface Cache {
        renderer: Nullable<Renderer>,
        renderId: number,
        model: Nullable<Model>,
        isChangeable: boolean,
        parts: { [key: string]: ModelPart }
    }

    /**
     * Interface used to perform transformation on the specified render object.
     */
    interface Transform {
        /**
         * Clears all the transformations applied to the render.
         * @returns Reference to itself to be used in sequential calls.
         */
        clear(): Transform;
        /**
         * @returns Reference to itself to be used in sequential calls.
         */
        lock(): Transform;
        /**
         * Performs arbitrary matrix transformations on the render.
         * @returns Reference to itself to be used in sequential calls.
         */
        matrix(m00: number, m01: number, m02: number, m03: number,
                m10: number, m11: number, m12: number, m13: number,
                m20: number, m21: number, m22: number, m23: number,
                m30: number, m31: number, m32: number, m33: number): Transform;
        /**
         * Rotates render along three axes.
         * @returns Reference to itself to be used in sequential calls.
         */
        rotate(rotX: number, rotY: number, rotZ: number): Transform;
        /**
         * Scales render along the three axes.
         * @returns Reference to itself to be used in sequential calls.
         */
        scale(scaleX: number, scaleY: number, scaleZ: number): Transform;
        /**
         * Scales the render along all the three axes. Applicable only to the
         * {@link Animation}'s transformations.
         * @returns Reference to itself to be used in sequential calls.
         * @deprecated Consider using {@link Render.Transform.scale} instead.
         */
        scaleLegacy(scale: number): Transform;
        /**
         * Translates render along three axes.
         * @returns Reference to itself to be used in sequential calls.
         */
        translate(x: number, y: number, z: number): Transform;
        /**
         * @returns Reference to itself to be used in sequential calls.
         */
        unlock(): Transform;
    }

    /**
     * An interface of the object that is used as {@link Render.addPart} parameter.
     */
    interface PartParameters {
        /**
         * If false or not specified in {@link Render.setPart} call, the part is
         * cleared, otherwise new parts and params are applied to the existing parts.
         */
        add?: boolean,
        /**
         * Texture width, use the real texture file width or change it to stretch
         * texture.
         */
        width?: number,
        /**
         * Texture height, use the real texture file height or change it to stretch
         * texture.
         */
        height?: number,
        /**
         * Texture horizontal offset from left up corner.
         */
        u?: number,
        /**
         * Texture vertical offset from left up corner.
         */
        v?: number,
        /**
         * Part center position.
         */
        pos?: Vector | [number, number, number];
        /**
         * Part rotation.
         */
        rotation?: Vector | [number, number, number];
    }

    interface Model {
        /**
         * Clears all parts of the model.
         */
        clearAllParts(): void;
        /**
         * @param partName part name
         * @returns Part by it's name or null if part doesn't exist.
         */
        getPart(partName: string): Nullable<ModelPart>;
        /**
         * @param partName part name
         * @returns `true` if part with specified name exists in the model, 
         * `false` otherwise.
         */
        hasPart(partName: string): boolean;
        /**
         * Resets the model
         */
        reset(): void;
    }

    interface ModelPart {
        /**
         * Adds a new box to the part on the specified coordinates (relative to
         * the part's coordinates) of the specified size (width, height, length).
         */
        addBox(x: number, y: number, z: number, w: number, h: number, l: number): void;
        /**
         * Adds a new box to the part on the specified coordinates (relative to
         * the part's coordinates) of the specified size (width, height, length).
         * @param add additional size to be added from all the six sizes of the 
         * box
         */
        addBox(x: number, y: number, z: number, w: number, h: number, l: number, add: number): void;
        /**
         * Creates a new part with specified name. If a part with specified name
         * already exists, returns the existing part.
         * @param name name of the part to create or return
         */
        addPart(name: string): ModelPart;
        /**
         * Clears the contents of the part.
         */
        clear(): void;
        /**
         * @returns Mesh specified via {@link Render.ModelPart.setMesh} call or `null`,
         * if this part doesn't contain mesh.
         */
        getMesh(): Nullable<RenderMesh>;
        /**
         * Specifies {@link RenderMesh} to be used as a part.
         */
        setMesh(mesh: Nullable<RenderMesh>): void;
        /**
         * Specifies part default offset.
         */
        setOffset(offsetX: number, offsetY: number, offsetZ: number): void;
        /**
         * Specifies part rotation.
         */
        setRotation(rotationX: number, rotationY: number, rotationZ: number): void;
        /**
         * Specifies texture UV offset.
         */
        setTextureOffset(u: number, v: number): void;
        /**
         * Specifies texture UV offset.
         */
        setTextureOffset(u: number, v: number): void;
        /**
         * Specifies texture UV offset.
         * @param placeholder deprecated boolean parameter
         * @deprecated Use same method without last parameter.
         */
        setTextureOffset(u: number, v: number, placeholder: boolean): void;
        /**
         * Specifies texture size size, use the real texture file size or change
         * it to stretch texture.
         */
        setTextureSize(w: number, h: number): void;
        /**
         * Specifies texture size size, use the real texture file size or change
         * it to stretch texture.
         */
        setTextureSize(w: number, h: number): void;
        /**
         * Specifies texture size size, use the real texture file size or change
         * it to stretch texture.
         * @param placeholder deprecated boolean parameter
         * @deprecated Use same method without last parameter.
         */
        setTextureSize(w: number, h: number, placeholder: boolean): void;
    }

    interface FinalizeCallback {
        onFinalized(renderer: Renderer): void;
    }
    interface FinalizeCallbackJS {
        (renderer: Renderer): void;
    }

    interface Renderer {
        isHumanoid: boolean;
        transform: Transform;
        addFinalizeCallback(callback: FinalizeCallback | FinalizeCallbackJS): void;
        getModel(): Model;
        getPointer(): number;
        getRenderType(): number;
        getScale(): number;
        release(): void;
        setFinalizeable(finalizeable: boolean): void;
        setScale(scale: number): void;
        setSkin(skin: string): void;
    }

    namespace Renderer {
        type Transform = Render.Transform;
    }
}
