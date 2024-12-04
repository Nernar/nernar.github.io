/**
 * Class representing a set of vertices with some other parameters required to
 * display them correctly. Used as block, entity and item models, in animations 
 * and actually anywhere you need some physical shape.
 */
declare class RenderMesh {
    /**
     * Creates a new {@link RenderMesh} and initializes it from file.
     * See {@link RenderMesh.importFromFile} method description for
     * parameters details.
     */
    constructor(path: string, type: string, params: Nullable<RenderMesh.ImportParams>);
    /**
     * Creates a new empty {@link RenderMesh}.
     */
    constructor();

    /**
     * Adds new mesh to the current one on the specified coordinates.
     * @param mesh {@link RenderMesh} object to be added to current mesh
     * @since 2.0.2b23
     */
    addMesh(mesh: RenderMesh): void;
    /**
     * Adds new mesh to the current one on the specified coordinates
     * with specified offset.
     * @param mesh {@link RenderMesh} object to be added to current mesh
     * @since 2.0.2b23
     */
    addMesh(mesh: RenderMesh, addX: number, addY: number, addZ: number): void;
    /**
     * Adds new mesh to the current one on the specified coordinates
     * with specified offset and scale.
     * @param mesh {@link RenderMesh} object to be added to current mesh
     * @since 2.0.2b23
     */
    addMesh(mesh: RenderMesh, addX: number, addY: number, addZ: number, scaleX: number, scaleY: number, scaleZ: number): void;
    /**
     * Adds a new vertex on the specified coordinates.
     */
    addVertex(x: number, y: number, z: number): void;
    /**
     * Adds a new vertex on the specified coordinates.
     * @param u x texture offset of the vertex
     * @param v y texture offset of the vertex
     */
    addVertex(x: number, y: number, z: number, u: number, v: number): void;
    /**
     * Removes all vertices of the mesh.
     */
    clear(): void;
    /**
     * Creates a copy of current {@link RenderMesh}.
     * @since 2.0.2b26
     */
    clone(): RenderMesh;
    /**
     * Scales the mesh to fit into the specified box.
     * @since 2.0.2b26
     */
    fitIn(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
    /**
     * Scales the mesh to fit into the specified box.
     * @param keepRatio if `true`, the ratio of the dimensions are preserved
     * @since 2.0.2b26
     */
    fitIn(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, keepRatio: boolean): void;
    /**
     * @returns Pointer to the native object instance of the
     * following {@link RenderMesh}, represented as long number.
     */
    getPtr(): number;
    getReadOnlyVertexData(): RenderMesh.ReadOnlyVertexData;
    /**
     * Imports mesh file using specified path.
     * @param path path to the mesh file. Path should be absolute path or
     * be relative to the resources folder or to the "models/" folder
     * @param type file type to read mesh from. The only currently supported mesh file 
     * type is "obj"
     * @param importParams additional import parameters or null, if not needed
     */
    importFromFile(path: string, type: "obj", importParams: Nullable<RenderMesh.ImportParams>): void;
    invalidate(): void;
    newGuiRenderMesh(): RenderMesh.GuiRenderMesh;
    /**
     * Forces Minecraft to rebuild specified {@link RenderMesh} object.
     */
    rebuild(): void;
    /**
     * Resets color applied to the mesh.
     * @default 0xfff // white
     */
    resetColor(): void;
    /**
     * Resets texture of the mesh.
     */
    resetTexture(): void;
    /**
     * Rotates the mesh around the specified coordinates.
     * @param rotX rotation angle along X axis, in radians
     * @param rotY rotation angle along Y axis, in radians
     * @param rotZ rotation angle along Z axis, in radians
     * @since 2.0.2b26
     */
    rotate(x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number): void;
    /**
     * Rotates the mesh around the (0, 0, 0) coordinates.
     * @param rotX rotation angle along X axis, in radians
     * @param rotY rotation angle along Y axis, in radians
     * @param rotZ rotation angle along Z axis, in radians
     */
    rotate(rotX: number, rotY: number, rotZ: number): void;
    /**
     * Scales the whole mesh along the three axis.
     */
    scale(x: number, y: number, z: number): void;
    /**
     * Specifies block texture to be used by mesh.
     */
    setBlockTexture(textureName: string, textureMeta: number): void;
    /**
     * Specifies color to be applied to the next vertices. If the color is not white and
     * the texture is applied to mesh, texture's colors will be affected.
     */
    setColor(r: number, g: number, b: number): void;
    /**
     * Specifies color to be applied to the next vertices. If the color is not white and
     * the texture is applied to mesh, texture's colors will be affected.
     */
    setColor(r: number, g: number, b: number, a: number): void;
    /**
     * Makes specified {@link RenderMesh} foliage tinted.
     * @since 2.0.2b24
     */
    setFoliageTinted(): void;
    /**
     * Makes specified {@link RenderMesh} foliage tinted.
     * @since 2.0.2b25
     */
    setFoliageTinted(leavesType: number): void;
    /**
     * Makes specified {@link RenderMesh} grass tinted.
     * @since 2.0.2b24
     */
    setGrassTinted(): void;
    /**
     * Sets following {@link RenderMesh} light direction.
     */
    setLightDir(x: number, y: number, z: number): void;
    setLightIgnore(ignore: boolean, bool2: boolean): void;
    setLightParams(float1: number, float2: number, float3: number): void;
    /**
     * Sets following {@link RenderMesh} light position.
     * @since 2.0.2b25
     */
    setLightPos(x: number, y: number, z: number): void;
    /**
     * Removes any tint from specified {@link RenderMesh}.
     * @since 2.0.2b24
     */
    setNoTint(): void;
    /**
     * Specifies the normal vector for the next vertices.
     */
    setNormal(x: number, y: number, z: number): void;
    /**
     * Makes specified {@link RenderMesh} water tinted.
     * @since 2.0.2b24
     */
    setWaterTinted(): void;
    /**
     * Translates the whole mesh along three axis.
     */
    translate(x: number, y: number, z: number): void;
}

declare namespace RenderMesh {
    interface ReadOnlyVertexData {
        readonly colors: native.Array<number>;
        readonly dataSize: number;
        readonly indices: native.Array<number>;
        readonly uvs: native.Array<number>;
        readonly vertices: native.Array<number>;
    }

    /**
     * Object used in {@link RenderMesh.importFromFile} and
     * one of {@link RenderMesh} constructors. Here you can put
     * some additional parameters, that will be applied to the mesh,
     * when the file is being imported.
     */
    interface ImportParams {
        /**
         * If `true`, all existing vertices of the mesh are deleted
         * before the file is imported.
         */
        clear?: boolean,
        /**
         * If `true`, vertex of the texture is inverted.
         */
        invertV?: boolean,
        /**
         * Additional translation along x, y and z axis.
         */
        translate?: [number, number, number],
        /**
         * Additional scale along x, y and z axis.
         */
        scale?: [number, number, number],
        /**
         * If `true`, Minecraft won't be forced to rebuild the following
         * {@link RenderMesh} before the file is imported.
         */
        noRebuild?: boolean
    }

    interface GuiRenderMesh {
        rx: number;
        ry: number;
        rz: number;
        x: number;
        y: number;
        z: number;
        draw(gl: javax.microedition.khronos.opengles.GL10): void;
        setVertices(vertices: number[]): void;
        setIndices(indices: number[]): void;
        setTextureCoordinates(textureCoords: number[]): void;
        setColors(colors: number[]): void;
        loadBitmap(bitmap: android.graphics.Bitmap): void;
    }
}
