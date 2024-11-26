/**
 * Module used to create blocks with any custom model.
 */
declare namespace BlockRenderer {
    /**
     * Class representing model used by {@link BlockRenderer}.
     */
    class Model {
        /**
         * Creates a new empty model.
         */
        constructor();

        /**
         * Constructs new model using specified {@link RenderMesh}.
         */
        constructor(mesh: RenderMesh);

        constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, descr: ModelTextureSet);

        constructor(descr: ModelTextureSet);

        /**
         * Constructs new block model with single box inside specified block shape. 
         * The width of the full block is 1x1x1 units.
         * @param texName block texture name to be used with the model
         * @param texId block texture meta to be used with the model
         */
        constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, texName: string, texId: number);

        /**
         * Constructs new block model with single box of the normal block size.
         * @param texName block texture name to be used with the model
         * @param texId block texture meta to be used with the model
         */
        constructor(texName: string, texId: number);

        /**
         * Constructs new block model with single box inside specified block shape. 
         * The width of the full block is 1x1x1 units. Uses block ID and data to
         * determine texture.
         * @param id sample block ID
         * @param data sample block data
         */
        constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, id: number, data: number);

        /**
         * Constructs new block model with single box of the normal block size.
         * The width of the full block is 1x1x1 units. Uses block ID and data to
         * determine texture.
         * @param id 
         * @param data 
         */
        constructor(id: number, data: number);

        /**
         * Adds new box to the model using specified block's textures.
         */
        addBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, id: number, data: number): void;

        /**
         * Adds new box to the model using specified textures for the six sides
         * of the box.
         */
        addBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, descr: ModelTextureSet): void;

        /**
         * Adds new box to the model using specified block texture name and ID.
         */
        addBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, texName: string, texId: number): void;

        /**
         * Adds new block with specified block's textures.
         */
        addBox(id: number, data?: number): void;

        /**
         * Adds new {@link RenderMesh} to the model.
         */
        addMesh(mesh: RenderMesh): void;
    }

    /**
     * Type used to describe a new model for {@link BlockRenderer}.
     */
    type ModelTextureSet =
        [string, number][];

    /**
     * Creates a new empty block model.
     * @returns Empty block model.
     */
    function createModel(): BlockRenderer.Model;

    /**
     * Constructs new block model of specified simple block shape with specified
     * textures.
     * @param descr texture set used for the box
     */
    function createTexturedBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, descr: ModelTextureSet): BlockRenderer.Model;

    /**
     * Constructs new block model of specified simple block of the normal block
     * size shape with specified textures.
     * @param descr texture set used for the box
     */
    function createTexturedBlock(descr: ModelTextureSet): BlockRenderer.Model;

    /**
     * Adds "CustomBlockTessellation" callback function for specified block ID.
     * @param id block ID
     * @param callback function to be called when the event occurs
     */
    function addRenderCallback(id: number, callback: Callback.CustomBlockTessellationFunction): void;

    /**
     * Forces block renders to be rebuilt immediately.
     * @param mode if 0 is passed, only the specified block gets rebuilt, if 
     * 1 is passed, all the blocks along y axes are rebuilt
     */
    function forceRenderRebuild(x: number, y: number, z: number, mode: number): void;

    /**
     * Specifies custom collision shape for the block.
     * @param id block ID
     * @param data block data
     * @param shape {@link ICRender.CollisionShape} object to be used as 
     * default collision shape for the specified block
     * @since 2.1.0b59
     */
    function setCustomCollisionShape(id: number, data: number, shape: ICRender.CollisionShape): void;

    /**
     * Specifies custom raycast shape for the block.
     * @param id block ID
     * @param data block data or -1 to map all the data values
     * @param shape {@link ICRender.CollisionShape} object to be used as
     * default raycast shape for the specified block
     * @since 2.1.0b59
     */
    function setCustomRaycastShape(id: number, data: number, shape: ICRender.CollisionShape): void;

    /**
     * Specifies custom collision and raycast shape for the block.
     * @param id block ID
     * @param data block data or -1 to map all the data values
     * @param shape {@link ICRender.CollisionShape} object to be used as
     * default collision and raycast shape for the specified block
     * @since 2.1.0b59
     */
    function setCustomCollisionAndRaycastShape(id: number, data: number, shape: ICRender.CollisionShape): void;

    /**
     * Enables custom rendering for the specified block.
     * @param id block ID
     * @param data block data or -1 to map all the data values
     */
    function enableCustomRender(id: number, data: number): void;

    /**
     * Disables custom rendering for the specified block.
     * @param id block ID
     * @param data block data or -1 to map all the data values
     */
    function disableCustomRender(id: number, data: number): void;

    /**
     * Sets static ICRender model as block render shape.
     * @param id block ID
     * @param data block data or -1 to map all the data values
     * @param icRender {@link ICRender.Model} object to be used as static block shape
     */
    function setStaticICRender(id: number, data: number, icRender: ICRender.Model): void;

    /**
     * Enables block mapping for the specified block.
     * @param id block ID
     * @param data block data or -1 to map all the data values
     * @param icRender default model for the block
     */
    function enableCoordMapping(id: number, data: number, icRender: ICRender.Model): void;

    /**
     * Changes shape of the block on the specified coordinates.
     * @param icRender {@link ICRender.Model} object to be displayed at the coordinates
     * @param preventRebuild if false or not specified, rebuild is performed immediately 
     */
    function mapAtCoords(x: number, y: number, z: number, icRender: ICRender.Model, preventRebuild?: boolean): void;

    /**
     * Resets shape of the block to default on the specified coordinates.
     * @param preventRebuild if false or not specified, rebuild is performed immediately 
     */
    function unmapAtCoords(x: number, y: number, z: number, preventRebuild?: boolean): void;

    /**
     * Changes collision shape of the block on given coords in given dimension.
     * @param shape {@link ICRender.CollisionShape} object to be used as new collision shape
     * @since 2.1.0b59
     */
    function mapCollisionModelAtCoords(dimension: number, x: number, y: number, z: number, shape: ICRender.CollisionShape): void;

    /**
     * Changes raycast shape of the block on given coords in given dimension.
     * @param shape {@link ICRender.CollisionShape} object to be used as new raycast shape
     * @since 2.1.0b59
     */
    function mapRaycastModelAtCoords(dimension: number, x: number, y: number, z: number, shape: ICRender.CollisionShape): void;

    /**
     * Changes both collision and raycast shape of the block on given coords in given dimension.
     * @param shape {@link ICRender.CollisionShape} object to be used as new collision and raycast shape
     * @since 2.1.0b59
     */
    function mapCollisionAndRaycastModelAtCoords(dimension: number, x: number, y: number, z: number, shape: ICRender.CollisionShape): void;

    /**
     * Resets collision shape of the block to default on given coords in given dimension.
     * @since 2.1.0b59
     */
    function unmapCollisionModelAtCoords(dimension: number, x: number, y: number, z: number): void;

    /**
     * Resets raycast shape of the block to default on given coords in given dimension.
     * @since 2.1.0b59
     */
    function unmapRaycastModelAtCoords(dimension: number, x: number, y: number, z: number): void;

    /**
     * Resets both collision and raycast shape of the block to default on given coords in given dimension.
     * @since 2.1.0b59
     */
    function unmapCollisionAndRaycastModelAtCoords(dimension: number, x: number, y: number, z: number): void;

    /**
     * Object used to manipulate rendered block during
     * {@link Callback.CustomBlockTessellationFunction} calls.
     */

    interface RenderAPI {
        /**
         * @returns Pointer to native object instance of the following object,
         * to be used in custom native code, etc.
         */
        getAddr(): number;
        /**
         * Renders box at the specified coordinates of the specified size.
         * @param id ID of the block to be used as texture source
         * @param data data of the block to be used as texture source
         */
        renderBoxId(x: number, y: number, z: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, id: number, data: number): void;

        /**
         * Renders box at current block coordinates of the specified size.
         * @param id ID of the block to be used as texture source
         * @param data data of the block to be used as texture source
         */
        renderBoxIdHere(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, id: number, data: number): void;

        /**
         * Renders box at the specified coordinates of the specified size.
         * @param texName block texture name
         * @param texId block texture ID
         */
        renderBoxTexture(x: number, y: number, z: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, texName: string, texId: number): void;

        /**
         * Renders box at current block coordinates of the specified size.
         * @param id ID of the block to be used as texture source
         * @param data data of the block to be used as texture source
         */
        renderBoxTextureHere(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, id: number, data: number): void;

        /**
         * Renders full block at specified coordinates.
         * @param blockId ID of the block to be used as texture source
         * @param blockData data of the block to be used as texture source
         */
        renderBlock(x: number, y: number, z: number, blockId: number, blockData: number): void;

        /**
         * Renders full block at current block coordinates.
         * @param blockId ID of the block to be used as texture source
         * @param blockData data of the block to be used as texture source
         */
        renderBlockHere(blockId: number, blockData: number): void;

        /**
         * Renders block model at the specified coordinates.
         * @param model block model to be rendered at the specified coordinates
         */
        renderModel(x: number, y: number, z: number, model: BlockRenderer.Model): void;

        /**
         * Renders block model at current block coordinates.
         * @param model block model to be rendered at current block coordinates
         */
        renderModelHere(model: BlockRenderer.Model): void;
    }
}
