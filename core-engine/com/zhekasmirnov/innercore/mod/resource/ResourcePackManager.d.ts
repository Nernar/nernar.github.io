declare module com {
    namespace zhekasmirnov {
        namespace innercore {
            namespace mod {
                namespace resource {
                    class ResourcePackManager extends java.lang.Object {
                        static class: java.lang.Class<ResourcePackManager>;
                        static readonly LOGGER_TAG = "INNERCORE-RESOURCES";
                        static instance: ResourcePackManager;
                        resourcePackDefinition: string;
                        resourcePackList: string;
                        constructor();
                        static getBlockTextureName(texture: string, meta: number): Nullable<string>;
                        static getItemTextureName(texture: string, meta: number): Nullable<string>;
                        static getSourcePath(): string;
                        static isValidBlockTexture(texture: string, meta: number): boolean;
                        static isValidItemTexture(texture: string, meta: number): boolean;
                    }
                }
            }
        }
    }
}
