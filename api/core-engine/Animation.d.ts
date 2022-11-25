/**
 * Animations are used to display some 3d models in the world without use of 
 * entities.
 */
declare namespace Animation {
    /**
     * Base animations are used to display arbitrary model in the world.
     */
    class Base {
        /**
         * Constructs a new Base animation on the specified coordinates.
         */
        constructor(x: number, y: number, z: number);

        /**
         * Changes the animation's position.
         */
        setPos(x: number, y: number, z: number): void;

        /**
         * @param enabled if true, animation position will be interpolated 
         * between tick calls
         */
        setInterpolationEnabled(enabled: boolean): void;

        /**
         * @deprecated Use {@link Animation.Base.setBlockLightPos|setBlockLightPos} and related methods instead.
         */
        setIgnoreBlocklight(ignore: boolean): void;

        /**
         * Sets specified coordinates as light measuring position for the 
         * animation. In other words, animation lightning will be calculated 
         * as if animation was at the specified coordinates.
         */
        setBlockLightPos(x: number, y: number, z: number): void;

        /**
         * Resets light measuring position for the animation (to it's coordinates).
         */
        resetBlockLightPos(): void;

        /**
         * Sets light measuring position to always match day/night lightning, 
         * even when the animation is not directly illuminated.
         */
        setSkylightMode(): void;

        /**
         * Sets light measuring to match the animation coordinated.
         */
        setBlocklightMode(): void;

        /**
         * Makes the animation ignore light at all.
         */
        setIgnoreLightMode(): void;

        /**
         * @returns Object for current animation's render.
         */
        transform(): Render.Transform;

        /**
         * @returns Object for current animation's render.
         * @since 2.0.2b20
         */
        getShaderUniforms(): ShaderUniformSet;

        /**
         * Creates a set of transformations for the current animation.
         * @param transformations 
         * @param noClear 
         */
        newTransform(transformations: {
            /**
             * Transformation function name, one of {@link Render["namespace"].Transform} class member 
             * functions names.
             */
            name: string,
            /**
             * Transformation function parameters, see {@link Render["namespace"].Transform} functions
             * for details.
             */
            params: any[]
        }[], noClear: boolean): void;

        /**
         * Creates render if it was not previously created and applies all the 
         * parameters from animation description.
         */
        createRenderIfNeeded(): void;

        /**
         * Refreshes the animation.
         */
        updateRender(): void;

        /**
         * Loads animation in the world.
         */
        load(): void;

        /**
         * Loads animation in the world registering it as an {@link Updatable["interface"]}.
         * @param func function to be used as {@link Updatable["interface"].update} function
         */
        loadCustom(func: () => void): void;

        /**
         * @deprecated Backwards compatibility, render doesn't have attributes.
         */
        getAge(): void;

        /**
         * Refreshes the animation.
         */
        refresh(): void;

        /**
         * Describes animation parameters for the future use. Call {@link Animation.Base.load|load} or 
         * {@link Animation.Base.loadCustom|loadCustom} to actually launch the animation.
         * @param description an object containing all the required data about 
         * animation
         */
        describe(description: {
            /**
             * {@link RenderMesh["class"]} object to be displayed with animation.
             * @since 2.0.2b20
             */
            mesh?: RenderMesh,
            /**
             * Numeric ID of the {@link Render["class"]} object to be displayed with animation.
             * Can be obtained using {@link Render["class"].getId}
             */
            render?: number,
            /**
             * Name of the texture to be used as render's skin.
             */
            skin?: string,
            /**
             * Animation scale.
             * @default 1
             */
            scale?: number,
            /**
             * Animation material, can be used to apply custom materials to the 
             * animation.
             * @since 2.0.2b20
             */
            material?: string
        }): void;

        /**
         * Destroys animation and releases all the resources.
         */
        destroy(): void;

        /**
         * @since 2.1.0b60
         */
        exists(): boolean;
    }

    /**
     * Item animations are used to display items or blocks models in the world.
     */
    class Item extends Base {
        /**
         * Constructs a new Item animation on the specified coordinates.
         */
        constructor(x: number, y: number, z: number);

        /**
         * Describes item to be used for the animation.
         * @param item item parameters object
         */
        describeItem(item: {
            /**
             * Item ID.
             */
            id: number,
            /**
             * Item count, will be transform to display an appropriate animation.
             */
            count?: number,
            /**
             * Item data.
             */
            data?: number,
            /**
             * Item extra.
             */
            extra?: ItemExtraData,
            /**
             * Whether the item should be in glint state or not.
             */
            glint?: boolean,
            /**
             * Item/block size.
             * @default 0.5
             */
            size?: number,
            /**
             * If `true`, the position of the item will not be randomized.
             */
            notRandomize?: boolean,
            /**
             * If string "x" is passed, the item is rotated 90 along x axis, if
             * "z" is passed, the item is rotated 90 along z axis, otherwise the
             * item is rotated according to the rotation array along all the three 
             * axes.
             */
            rotation?: string | [number, number, number],
            /**
             * Skin name to be used for the render. If no skin is passed, default 
             * item skin is used.
             */
            skin?: string,
            /**
             * Shader material name.
             * @since 2.0.2b20
             */
            material?: string
        }): void;

        /**
         * @deprecated Consider using {@link Animation.Item.describeItem|describeItem} instead.
         */
        describeItemDefault(item: any): void;

        /**
         * Resets all the transformations made via {@link Animation.Base.transform|transform} calls.
         */
        resetTransform(): void;

        /**
         * Specifies item rotation along the three axes.
         * @default x: 0, y: 0, z: 0
         */
        setItemRotation(x: number, y: number, z: number): void;

        /**
         * Specifies item size.
         * @default 0.5
         */
        setItemSize(size: number): void;

        /**
         * Specifies item size and rotation via single function call.
         */
        setItemSizeAndRotation(size: number, x: number, y: number, z: number): void;
    }
}
