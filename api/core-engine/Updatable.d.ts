/**
 * Legacy module used to create and manage updatables.
 * Updatables provide the proper way to manage objects that update their
 * state every tick. Updatables may not  be notified every tick, if there are
 * too many, to avoid user interface freezes.
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
 * Common interface for all updatables, includes common function.
 * @since 3.1.1b127
 */
interface IUpdatableCommon {
    update(...args: unknown[]): void;
}

/**
 * Updatables provide the proper way to manage objects that update their
 * state every tick. Updatables may not be notified every tick, if there are
 * too many, to avoid user interface freezes.
 * @since 3.1.1b127
 */
interface IUpdatable extends IUpdatableCommon {
    /**
     * Passed only when instance is created with updatable overload.
     * @since 3.1.1b127
     */
    _handle?: UpdatableHandle;
    /**
     * Called every tick to execute pending updates.
     * @param deltaTicks delta time from latest schedule call
     */
    update(deltaTicks: number): void;
}

/**
 * Updatables provide the proper way to manage objects that update their
 * state every tick. Updatables may not be notified every tick, if there are
 * too many, to avoid user interface freezes. Legacy variant of {@link IUpdatable}.
 */
interface Updatable extends IUpdatableCommon {
    /**
     * By default, recurring schedule is set to 1 and performs indefinitely.
     * @since 3.1.1b127
     */
    _handle?: UpdatableHandle;
    /**
     * Once `true`, the object will be removed from updatables list and will no
     * longer receive update calls.
     */
    remove?: boolean;
    /**
     * Determines can updatable be updated by calling update, useful when
     * is needed to temporary freeze ticking logic.
     */
    noupdate?: boolean;
    /**
     * Called every tick to execute pending updates.
     */
    update(): void;
}

/**
 * @deprecated Use {@link Updatable} instead.
 */
declare const UpdatableAPI: typeof Updatable;

/**
 * Experimental module used to create and manage scoped updatables.
 * Updatables provide the proper way to manage objects that update their
 * state every tick. Updatables may not  be notified every tick, if there are
 * too many, to avoid user interface freezes.
 * @since 3.1.1b127
 */
declare namespace UpdatableScheduler {
    function createNewScope(name: string): UpdatableSchedulerScope;
    function getMainServerScope(): UpdatableSchedulerScope;
    function getMainClientScope(): UpdatableSchedulerScope;
    /**
     * Creates updatable of given object on server, which will update every tick.
     */
    function createOnServer(updatable: IUpdatable): UpdatableHandle;
    /**
     * Provides a way to directly create server ticking function without linking to
     * any object. See {@link Callback} if you want to call method every tick instead.
     */
    function createOnServer(func: () => void, thisObj?: Scriptable): UpdatableHandle;
    /**
     * Creates updatable of given object on client, which will update every local tick.
     */
    function createOnClient(updatable: IUpdatable): UpdatableHandle;
    /**
     * Provides a way to directly create server ticking function without linking to
     * any object. See {@link Callback} if you want to call method every tick instead.
     */
    function createOnClient(func: () => void, thisObj?: Scriptable): UpdatableHandle;
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
 * Allows to create scoped updatables, which should be updated manually by developer,
 * e.g. when specific conditions met.
 * @since 3.1.1b127
 */
declare class UpdatableSchedulerScope {
    public setCurrentTick(tickNo: number): void;
    /**
     * Set to `0` when scope is created, increases every tick by `1` with {@link executeTickForScope}.
     */
    public getCurrentTick(): number;
    public createRawHandle(func: () => void, object?: Scriptable): number;
    /**
     * Provides a way to directly create scoped ticking function without linking to
     * any object, which will update when {@link executeTickForScope} is called by developer (excluding
     * {@link UpdatableScheduler.getMainServerScope} and {@link UpdatableScheduler.getMainClientScope}
     * scopes where updates called automatically).
     */
    public create(func: () => void, thisObj?: Scriptable): UpdatableHandle;
    /**
     * Creates updatable of given object in scope, which will update when
     * {@link executeTickForScope} is called by developer (excluding
     * {@link UpdatableScheduler.getMainServerScope} and {@link UpdatableScheduler.getMainClientScope}
     * scopes where updates called automatically).
     */
    public create(updatable: IUpdatable): UpdatableHandle;
    public clearAll(): void;
    /**
     * @param timeLimitUs default `-1`
     */
    public executeTickForScope(tickNo: number, timeLimitUs?: number): void;
}

/**
 * @since 3.1.1b127
 */
declare class UpdatableHandle {
    public constructor(handle: number);
    /**
     * Unique updatable handle identifier, cannot be reused between sessions.
     */
    public getHandle(): number;
    public isAlive(): boolean;
    /**
     * By default, recurring schedule is set to 1 and performs indefinitely.
     * @param tickIn minimum ticks after which update is executed
     * @param tickUntil maximum ticks after which update is executed, determined
     * randomly from minimum to maximum, if not set, always uses minimum, default `-1`
     */
    public schedule(tickIn: number, tickUntil?: number): this;
    /**
     * @param tickIn minimum ticks after which update is executed
     * @param tickUntil maximum ticks after which update is executed, determined
     * randomly from minimum to maximum, if not set, always uses minimum, default `-1`
     */
    public setRecurringSchedule(tickIn: number, tickUntil?: number): this;
    /**
     * Returns object that is being hold by this handle, can be both, script object in
     * which updatable is located (or `thisObj`) and java interface with single method.
     */
    public getObject(): IUpdatable;
    public getScope(): UpdatableSchedulerScope;
    public destroy(): boolean;
}
