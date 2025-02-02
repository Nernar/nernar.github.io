declare module com {
    namespace zhekasmirnov {
        namespace innercore {
            namespace api {
                namespace unlimited {
                    class BlockShape extends java.lang.Object {
                        static class: java.lang.Class<BlockShape>;
                        x1: number;
                        x2: number;
                        y1: number;
                        y2: number;
                        z1: number;
                        z2: number;
                        constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number);
                        constructor();
                        set(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
                        setToBlock(id: number, data: number): void;
                    }
                }
            }
        }
    }
}
