/**
 * Module used to create and manage Updatables. Updatables provide the proper
 * way to manage objects that update their state every tick. Updatables may not 
 * be notified every tick, if there are too many, to avoid user interface 
 * freezes.
 */
declare namespace Updatable {
    /**
     * Adds object to updatables list.
     * @param updatable object to be added to updatables list
     */
	function addUpdatable(updatable: Updatable): void;

    /**
     * Adds object to updatables list, that ticks on client
     * thread and never saves.
     * @param updatable object to be added to updatables list
     * @since 2.0.4b40
     */
    function addAnimator(updatable: Updatable): void;

	/**
     * Adds object to updatables list, that ticks on client
     * thread and never saves.
     * @param updatable object to be added to updatables list
     * @since 2.0.4b40
     */
    function addLocalUpdatable(updatable: Updatable): void;

    /**
     * @returns ArrayList instance containing all defined 
     * server-side {@link Updatable} objects.
     */
    function getAll(): java.util.List<Updatable>;

    /**
     * @returns ArrayList instance containing all defined 
     * client-side {@link Updatable} objects.
     * @since 2.4.0b122o1
     */
    function getAllLocal(): java.util.List<Updatable>;

    /**
     * @returns Current server-side thread tick number.
     */
    function getSyncTime(): number;

    /**
     * @returns Current client-side thread tick number.
     * @since 2.4.0b122o1
     */
    function getLocalSyncTime(): number;
}

/**
 * Updatable is an object that is notified every tick via it's 
 * {@link Updatable.update} method call.
 */
interface Updatable extends Scriptable {
    /**
     * Called every tick.
     */
    update: () => void;
    /**
     * Once `true`, the object will be removed from updatables list and will no
     * longer receive update calls.
     */
    remove?: boolean;
}

/**
 * @deprecated Use {@link Updatable} instead.
 */
declare const UpdatableAPI: typeof Updatable;
