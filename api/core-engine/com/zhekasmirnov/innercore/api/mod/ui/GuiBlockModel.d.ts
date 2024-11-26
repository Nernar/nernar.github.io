declare module com {
    namespace zhekasmirnov {
        namespace innercore {
            namespace api {
                namespace mod {
                    namespace ui {
                        class GuiBlockModel extends java.lang.Object {
                            static class: java.lang.Class<GuiBlockModel>;
                            setShadow(shadow: boolean): void;
                            constructor(resolution: number);
                            constructor();
                            addBox(box: GuiBlockModel.Box): void;
                            /**
                             * @since 2.2.1b96
                             */
                            clear(): void;
                            constructor(textures: string[], ids: number[], shape: unlimited.BlockShape);
                            constructor(textures: string[], ids: number[]);
                            updateShape(shape: unlimited.BlockShape): void;
                            genTexture(): android.graphics.Bitmap;
                            addToMesh(mesh: RenderMesh, x: number, y: number, z: number): void;
                            /**
                             * @since 2.2.0b75
                             */
                            addToRenderModelPart(modelPart: Render.ModelPart, x: number, y: number, z: number): void;
                            static createModelForBlockVariant(variant: any): GuiBlockModel;
                        }
                        namespace GuiBlockModel {
                            class Box extends java.lang.Object {
                                static class: java.lang.Class<Box>;
                                readonly enabledSides: [boolean, boolean, boolean, boolean, boolean, boolean];
                                textureNames: java.util.ArrayList<android.util.Pair<string, number>>;
                                readonly x1: number;
                                readonly x2: number;
                                readonly y1: number;
                                readonly y2: number;
                                readonly z1: number;
                                readonly z2: number;
                                setShadow(shadow: boolean): void;
                                setRenderAllSides(renderAllSides: boolean): void;
                                constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number);
                                getShape(): unlimited.BlockShape;
                                constructor(shape: unlimited.BlockShape);
                                constructor();
                                constructor(name: string, id: number);
                                constructor(box: Box, shape: unlimited.BlockShape);
                                addTexturePath(tex: string): void;
                                addTexture(name: string, id: number): void;
                                addTexture(name: android.util.Pair<string, number>): void;
                                genTexture(resolution: number): android.graphics.Bitmap;
                                public addToMesh(mesh: RenderMesh, x: number, y: number, z: number): void;
                            }
                            class Builder extends java.lang.Object {
                                static class: java.lang.Class<Builder>;
                                build(resolveCollisionsAndSort: boolean): GuiBlockModel;
                                add(box: Builder.PrecompiledBox): void;
                                add(builder: Builder): void;
                            }
                            namespace Builder {
                                class PrecompiledBox extends java.lang.Object {
                                    static class: java.lang.Class<PrecompiledBox>;
                                    blockData: number;
                                    blockId: number;
                                    readonly enabledSides: [boolean, boolean, boolean, boolean, boolean, boolean];
                                    textureNames: java.util.ArrayList<android.util.Pair<string, number>>;
                                    x1: number;
                                    x2: number;
                                    y1: number;
                                    y2: number;
                                    z1: number;
                                    z2: number;
                                    constructor(inherit: PrecompiledBox, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number);
                                    disableSide(side: number): PrecompiledBox;
                                    addTexture(name: string, id: number): PrecompiledBox;
                                    setBlock(id: number, data: number): PrecompiledBox;
                                    inside(b: PrecompiledBox): boolean;
                                    intersects(b: PrecompiledBox): boolean;
                                    inFrontOf(b: PrecompiledBox): boolean;
                                    compile(): Box;
                                }
                            }
                            class VanillaRenderType extends java.lang.Object {
                                static class: java.lang.Class<VanillaRenderType>;
                                static getFor(id: number): VanillaRenderType;
                                buildModelFor(textures: string[], textureIds: number[]): GuiBlockModel;
                                buildModelFor(textures: java.util.List<android.util.Pair<string, number>>): GuiBlockModel;
                            }
                        }
                    }
                }
            }
        }
    }
}
