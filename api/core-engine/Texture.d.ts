/**
 * Class representing texture that can be animated.
 * @deprecated Represents deprecated render type, should
 * be performed in texture packs.
 */
declare class Texture {
    /**
     * Creates new {@link Texture} object using specified file path.
     */
    constructor(path: string);

    /**
     * Sets texture file path.
     * @returns Reference to itself to be used in sequential calls.
     */
    setTexture(path: string): Texture;

    /**
     * Specifies texture resolution. If not equal to file dimensions, the image
     * will be stretched to fit the resolution.
     * @returns Reference to itself to be used in sequential calls.
     */
    setResolution(w: number, h: number): Texture;

    /**
     * Makes texture animated.
     * @param animation array of paths to the animation frames. Each frame should
     * be stored in a separate file
     * @param delay specifies each frame delay in ticks
     * @returns Reference to itself to be used in sequential calls.
     */
    setAnimation(animation: string[], delay: number): Texture;

    /**
     * Resets animation.
     * @returns Reference to itself to be used in sequential calls.
     */
    resetAnimation(token: number): Texture;

    /**
     * @returns Current animation frame.
     */
    getTexture(token: number): string;

    /**
     * @returns Texture resolution after recalculating it with pixel scale.
     */
    getResolution(): { w: number, h: number };

    /**
     * Sets pixel scale for the texture.
     */
    setPixelScale(scale: number): Texture;
}