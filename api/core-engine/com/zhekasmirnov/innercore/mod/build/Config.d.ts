declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module mod {
                export module build {
                    /**
                     * Json configuration file reading/writing utility.
                     */
                    export class Config extends java.lang.Object {
                        static class: java.lang.Class<Config>;
                        /**
                         * Creates new {@link com.zhekasmirnov.innercore.mod.build.Config Config} instance using specified file.
                         * @param file {@link java.io.File} instance of the file to use
                         */
                        constructor(file: java.io.File);
                        /**
                         * Creates new {@link com.zhekasmirnov.innercore.mod.build.Config Config} instance using specified file.
                         * @param path path to configuration file
                         */
                        constructor(path: string);
                        /**
                         * Writes configuration JSON to the file.
                         */
                        save(): void;
                        /**
                         * @returns Read-only ArrayList instance containing
                         * all the names in the current config file.
                         */
                        getNames(): java.util.ArrayList<string>;
                        /**
                         * Gets property from the config.
                         * @param name option name, supports multi-layer calls, separated by **'.'**
                         * @returns Config instance with current config as parent if the
                         * property is object, {@link org.json.JSONArray} instance if the property is an
                         * array, raw type if the property is of that raw type, `null` otherwise.
                         * @example
                         * ```ts
                         * config.get("generation.ore_copper.max_height");
                         * ```
                         */
                        get<T=Nullable<Config | org.json.JSONArray | boolean | number | string>>(name: string): T;
                        /**
                         * Same as {@link com.zhekasmirnov.innercore.mod.build.Config.get Config.get}.
                         */
                        access<T=Nullable<Config | org.json.JSONArray | boolean | number | string>>(name: string): T;
                        /**
                         * @param name option name, supports multi-layer calls, separated by **'.'**
                         * @returns Boolean config value specified in config or false if no value was
                         * specified.
                         */
                        getBool(name: string): boolean;
                        /**
                         * @param name option name, supports multi-layer calls, separated by **'.'**
                         * @returns Number object instance, containing numeric value by given name
                         * from the config, or `0` if no value was specified.
                         */
                        getNumber(name: string): java.lang.Number;
                        /**
                         * @param name option name, supports multi-layer calls, separated by **'.'**
                         * @returns Integer of value by given name from the config, or `0` if no value was specified.
                         */
                        getInteger(name: string): number;
                        /**
                         * @param name option name, supports multi-layer calls, separated by **'.'**
                         * @returns Floating-point number of value by given name from the config, or `0.0` if no value was specified.
                         */
                        getFloat(name: string): number;
                        /**
                         * @param name option name, supports multi-layer calls, separated by **'.'**
                         * @returns Double number of value by given name from the config, or `0.0` if no value was specified.
                         */
                        getDouble(name: string): number;
                        /**
                         * @param name option name, supports multi-layer calls, separated by **'.'**
                         * @returns String by given name from the config, or `null` if no value was specified.
                         */
                        getString(name: string): Nullable<string>;
                        /**
                         * Sets config value. Do not use {@link org.json.JSONObject} instances to create
                         * nested objects, consider using dot-separated names instead.
                         * @param name option name, supports multi-layer calls, separated by **'.'**
                         * @param val value, may be {@link org.json.JSONArray} instance, 
                         * {@link org.json.JSONObject} instance or raw data type
                         */
                        set<T = org.json.JSONObject | org.json.JSONArray | boolean | number | string>(name: string, val: T): boolean;
                        /**
                         * @param path option name, supports multi-layer calls, separated by **'.'**
                         * @returns Editable {@link com.zhekasmirnov.innercore.mod.build.Config.ConfigValue Config.ConfigValue}
                         * instance that can be used to manipulate this config option separately.
                         */
                        getValue(path: string): Nullable<Config.ConfigValue>;
                        /**
                         * Ensures that config has all the properties the data pattern contains, if
                         * not, puts default values to match the pattern.
                         * @param jsonstr string representation of JSON object representing the data pattern
                         */
                        checkAndRestore(jsonstr: string): void;
                        /**
                         * Ensures that config has all the properties the data pattern contains, if
                         * not, puts default values to match the pattern.
                         * @param jsonobj javascript object representing the data pattern checkAndRestore
                         */
                        checkAndRestore(jsonobj: Scriptable): void;
                        /**
                         * Ensures that config has all the properties the data pattern contains, if
                         * not, puts default values to match the pattern.
                         * @param json {@link org.json.JSONObject} instance to be used as data pattern
                         */
                        checkAndRestore(json: org.json.JSONObject): void;
                    }
                    export module Config {
                        /**
                         * Class representing config value with it's path withing
                         * {@link com.zhekasmirnov.innercore.mod.build.Config Config} object.
                         */
                        export class ConfigValue extends java.lang.Object {
                            static class: java.lang.Class<ConfigValue>;
                            /**
                             * Sets config value and saves configuration file.
                             * @param value value, may be {@link org.json.JSONArray} instance,
                             * {@link org.json.JSONObject} instance or raw data type.
                             */
                            set<T = org.json.JSONArray | org.json.JSONObject | boolean | number | string>(value: T): void;
                            /**
                             * @returns Config value, result is the same as the result of
                             * {@link com.zhekasmirnov.innercore.mod.build.Config.get Config.get} call.
                             */
                            get<T=Nullable<Config | org.json.JSONArray | boolean | number | string>>(): T;
                            /**
                             * @returns Readable config value name
                             * representation along with class name.
                             */
                            toString(): string;
                        }
                    }
                }
            }
        }
    }
}