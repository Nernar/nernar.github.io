/**
 * Module used to manage custom entities added via add-ons.
 * @since 2.0.1b18
 * @remarks
 * Depends on local player dimension, highly recommended to replace it
 * with {@link BlockSource.spawnEntity} and {@link Entity.getTypeName}.
 */
declare namespace AddonEntityRegistry {
    /**
     * Spawns an entity defined via add-on on the specified coordinates.
     * @param nameID entity name ID, as defined from add-on
     * @deprecated Client-side method, use {@link BlockSource.spawnEntity} instead.
     */
    function spawn(x: number, y: number, z: number, nameID: string): number;

    /**
     * Added entities stores in registry, so already spawned entity
     * data may resolved again by requesting information by UID.
     * @returns Add-on entity information by entity ID.
     */
    function getEntityData(entity: number): AddonEntity;

    interface AddonEntity {
        /**
         * Entity unique ID.
         */
        readonly id: number,

        /**
         * Add-on defined entity name ID.
         */
        readonly type: string,

        /**
         * Executes command with the entity.
         * @param command command to be executed
         * @returns Error message or null if the command was run successfully.
         */
        exec(command: string): Nullable<string>;

        /**
         * Executes command with the entity on the specified coordinates.
         * @param command command to be executed
         * @returns Error message or null if the command was run successfully.
         */
        execAt(command: string, x: number, y: number, z: number): Nullable<string>;
    }
}
