declare module com {
    namespace zhekasmirnov {
        namespace innercore {
            namespace api {
                namespace mod {
                    namespace ui {
                        class ItemModelCacheManager extends java.lang.Object {
                            static class: java.lang.Class<ItemModelCacheManager>;
                            static getSingleton(): ItemModelCacheManager;
                            getCacheGroupDirectory(group: string): java.io.File;
                            getCachePath(group: string, name: string): java.io.File;
                            getCurrentCacheGroup(): string;
                            setCurrentCacheGroup(groupName: string, lock: string): void;
                        }
                    }
                }
            }
        }
    }
}
