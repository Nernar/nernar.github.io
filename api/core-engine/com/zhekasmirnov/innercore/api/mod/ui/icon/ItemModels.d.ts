declare module com {
    namespace zhekasmirnov {
        namespace innercore {
            namespace api {
                namespace mod {
                    namespace ui {
                        namespace icon {
                            class ItemModels extends java.lang.Object {
                                static class: java.lang.Class<ItemModels>;
                                static readonly ATLAS_NAME = "textures/entity/camera_tripod";
                                static readonly ATLAS_PATH: string;
                                static readonly CACHE_DIR: string;
                                static prepareModelInfo(idKey: string): ItemModels.ModelInfo;
                                static prepareModelInfo(idKey: string, spritePath: string): ItemModels.ModelInfo;
                                static prepareModelInfo(idKey: string, model: GuiBlockModel): ItemModels.ModelInfo;
                                static createAtlasLink(formattedName: string, bmp: android.graphics.Bitmap): number;
                                static createAtlasLink(path: string): number;
                                static createAtlas(): void;
                                static getAtlasUnit(iconName: string): Nullable<ItemModels.AltasUnit>;
                                static init(): void;
                                static getAtlasWidth(): number;
                                static getAtlasHeight(): number;
                                static getModelInfo(idKey: string): ItemModels.ModelInfo;
                                static getModelInfo(id: number, data: number): ItemModels.ModelInfo;
                                static updateBlockShape(id: number, data: number, shape: unlimited.BlockShape): void;
                                static setCustomUiModel(id: number, data: number, model: GuiBlockModel): void;
                                static getItemOrBlockModel(id: number, count: number, data: number, scale: number, rX: number, rY: number, rZ: number, randomize: boolean): Render.Renderer;
                            }
                            namespace ItemModels {
                                class ModelInfo extends java.lang.Object {
                                    static class: java.lang.Class<ModelInfo>;
                                    private constructor(idKey: string);
                                    getModel(): GuiBlockModel;
                                    isSprite(): boolean;
                                    isCustomized(): boolean;
                                    getSkinName(): string;
                                    getCache(): android.graphics.Bitmap;
                                    writeToCache(bmp: android.graphics.Bitmap): void;
                                    setShape(shape: unlimited.BlockShape): void;
                                }
                                class AltasUnit extends java.lang.Object {
                                    static class: java.lang.Class<AltasUnit>;
                                    readonly bitmap: android.graphics.Bitmap;
                                    readonly pos: number;
                                    readonly size: number;
                                    constructor(bmp: android.graphics.Bitmap, pos: number, size: number);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
