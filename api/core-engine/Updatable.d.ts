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
 * Common interface for all updatables, includes common function
 * @since 3.1.1b127 arm64
 */
interface IUpdatableCommon {
    update(...args: unknown[]): void;
}

/**
 * Updatable is an object that is notified every tick via it's. New type
 * {@link Updatable.update} method call.
 * @since 3.1.1b127 arm64
 */
interface IUpdatable extends IUpdatableCommon {
    /**
     * Called every tick
     * @param deltaTime delta time as current tick in updatable
     */
    update(deltaTime: number): void;
}

/**
 * Updatable is an object that is notified every tick via it's. Legacy type
 * {@link Updatable.update} method call.
 */
interface Updatable extends IUpdatableCommon {
    /**
     * Once `true`, the object will be removed from updatables list and will no
     * longer receive update calls.
     */
    remove?: boolean;
    /**
     * Called every tick.
     */
    update(): void;
}

/**
 * @deprecated Use {@link Updatable} instead.
 */
declare const UpdatableAPI: typeof Updatable;

/**
 * Experimental module for smart work with some updatable behavior.
 * @since 3.1.1b127 arm64
 */
declare namespace UpdatableScheduler {
    function createNewScope(name: string): UpdatableSchedulerScope;
    function getMainServerScope(): UpdatableSchedulerScope;
    function getMainLocalScope(): UpdatableSchedulerScope;
    function createServer(obj: IUpdatable, func: () => void): UpdatableHandle;
    function destroyRawHandle(handle: number): boolean;
    function getByRawHandle(): IUpdatable;
    function getScopeByRawHandle(): UpdatableSchedulerScope;
    /**
     * @param tickAt 
     * @param tickUntil default `-1`
     */
    function setRecurringScheduleByRawHandle(handle: number, tickAt: number, tickUntil: number): void;
    /**
     * @param tickAt 
     * @param tickUntil default `-1`
     */
    function scheduleByRawHandle(handle: number, tickAt: number, tickUntil: number): void;
    function isHandleAlive(handle: number): boolean;
}

/**
 * @since 3.1.1b127 arm64
 */
declare class UpdatableSchedulerScope {
    public setCurrentTick(tickNo: number): void;
    public getCurrentTick(): number;
    public createRawHandle(object: Scriptable, func: () => void): number;
    public create(object: Scriptable, func: () => void): UpdatableHandle;
    public create(object: Scriptable): UpdatableHandle;
    public clearAll(): void;
    public executeTickForScope(tickNo: number, timeLimitUs: number): void;
}

/**
 * @since 3.1.1b127 arm64
 */
declare class UpdatableHandle {
    public constructor(handle: number);
    public getHandle(): number;
    /**
     * @param handle handle number to replace in current object
     * @internal
     */
    public replaceUpdatableHandle(handle: number): number;
    public isAlive(): boolean;
    /**
     * @param tickIn 
     * @param tickUntil default `-1`
     */
    public schedule(tickIn: number, tickUntil: number): this;
    /**
     * @param tickIn 
     * @param tickUntil default `-1`
     */
    public setRecurringSchedule(tickIn: number, tickUntil: number): this;
    public getObject(): IUpdatable;
    public getScope(): UpdatableSchedulerScope;
    public destroy(): boolean;
}