/**
 * Json configuration file reading/writing utility
 */
declare class Config extends com.zhekasmirnov.innercore.mod.build.Config {
    static class: java.lang.Class<Config>;
}

declare namespace Config {
    /**
     * Class representing config value with it's path withing Config object
     */
    class ConfigValue extends com.zhekasmirnov.innercore.mod.build.Config.ConfigValue {
        static class: java.lang.Class<ConfigValue>;
    }
}