/**
 * Class that is used to give mobs, animations and blocks custom shape.
 */
declare class Render {
    isEmpty: boolean;
    isChangeable: boolean;
    renderer: Nullable<Render.Renderer>;
    model: Nullable<Render.Model>;
    parts: { [key: string]: Render.ModelPart };
    renderId: number;

    /**
     * Creates a new Render instance with specified parameters.
     * @param parameters specifies all the 
     * properties of the object. If it is a number, vanilla render ID is used,
     * if it is a string, used as {@link Render.RenderParameters.name RenderParameters.name} name property
     */
    constructor(parameters?: Render.RenderParameters | string | number);

    /**
     * @deprecated Use {@link Render.getId getId} instead.
     */
    getID(): number;

    /**
     * @deprecated Use {@link Render.getId getId} instead.
     */
    getRenderType(): number;

    /**
     * @returns Render identifier that can be used to set render to the mob, animation 
     * or block.
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
    fromCache(data: Render.Cache): void;
    toCache(): Render.Cache;
    saveState(name: string, isLocal: boolean): void;
    loadState(name: string, isLocal: boolean): void;
    loadInitialState(name: string): void;
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
     * Interface used to perform transformation on the specified render object.
     */
    interface Transform extends com.zhekasmirnov.innercore.api.NativeRenderer.Transform {
        /**
         * Scales the render along all the three axes. Applicable only to the
         * {@link Animation}'s transformations.
         * @returns Reference to itself to be used in sequential calls.
         * @deprecated Consider using {@link Render.Transform.scale Transform.scale} instead.
         */
        scaleLegacy(scale: number): Transform;
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

    interface Model extends com.zhekasmirnov.innercore.api.NativeRenderer.Model {}
    interface ModelPart extends com.zhekasmirnov.innercore.api.NativeRenderer.ModelPart {}
    interface Renderer extends com.zhekasmirnov.innercore.api.NativeRenderer.Renderer {}

    interface Cache {
        renderer: Nullable<Renderer>,
        renderId: number,
        model: Nullable<Model>,
        isChangeable: boolean,
        parts: { [key: string]: ModelPart }
    }
}
