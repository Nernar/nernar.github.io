declare module com {
    namespace zhekasmirnov {
        namespace innercore {
            namespace api {
                class NativeRenderer extends java.lang.Object {
                    static class: java.lang.Class<NativeRenderer>;
                    static createHumanoidRenderer(d: number): Render.Renderer;
                    static createItemSpriteRenderer(id: number): Render.Renderer;
                    static createRendererWithSkin(skin: string, d: number): Render.Renderer;
                    static getRendererById(id: number): Nullable<Render.Renderer>;
                }
            }
        }
    }
}
