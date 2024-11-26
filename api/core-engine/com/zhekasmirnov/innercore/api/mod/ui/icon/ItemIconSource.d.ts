declare module com {
    namespace zhekasmirnov {
        namespace innercore {
            namespace api {
                namespace mod {
                    namespace ui {
                        namespace icon {
                            class ItemIconSource extends java.lang.Object {
                                static class: java.lang.Class<ItemIconSource>;
                                static readonly instance: ItemIconSource;
                                private constructor();
                                static init(): void;
                                static isGlintAnimationEnabled(): boolean;
                                registerIcon(id: number, name: string): void;
                                registerIcon(id: number, data: number, name: string): void;
                                registerIcon(id: number, bmp: android.graphics.Bitmap): void;
                                registerIcon(id: number, data: number, bmp: android.graphics.Bitmap): void;
                                checkoutIcon(_name: string): Nullable<android.graphics.Bitmap>;
                                getIconName(id: number, data: number): string;
                                getIconPath(id: number, data: number): string;
                                getNullableIcon(id: number, data: number): Nullable<android.graphics.Bitmap>;
                                getIcon(id: number, data: number, icon: android.graphics.Bitmap, enableCache: boolean): android.graphics.Bitmap;
                                getScaledIcon(originIcon: android.graphics.Bitmap, id: number, data: number, size: number, glint: number): android.graphics.Bitmap;
                                static generateAllModItemModels(): void;
                            }
                        }
                    }
                }
            }
        }
    }
}
