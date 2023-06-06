/**
 * Class used to create new entity AI types.
 */
declare class EntityAIClass implements EntityAIClass.EntityAIPrototype {
    /**
     * Creates new entity AI type.
     * @param customPrototype AI type prototype
     */
    constructor(customPrototype: EntityAIClass.EntityAIPrototype);

    /**
     * Sets execution timer time in ticks. AI will be executed specified
     * number of ticks.
     * @param timer execution time in ticks
     */
    setExecutionTimer(timer: number): void;

    /**
     * Resets execution timer so that AI is executed with no time limits.
     */
    removeExecutionTimer(): void;

    /**
     * If set to true, it is an instance of AI type, else the pattern
     * (pattern should not be modified directly, AI controller calls
     * instantiate to create instances of AI type).
     * 
     * @todo Add link to AI controller type.
     */
    isInstance: boolean;

    /**
     * @todo Determine type.
     */
    parent: any;

    /**
     * Id of the entity that uses this AI type instance or `null` if it is
     * the pattern.
     */
    entity?: number;

    /**
     * Method that is called to create AI type instance using current
     * instance as pattern.
     */
    instantiate(parent: any, name: string): EntityAIClass;

    /**
     * Occurs when entity this instance is assigned to this AI type
     * instance, if you override this method, be sure to assign entity
     * to {@link EntityAIClass.EntityAIPrototype}.
     */
    aiEntityChanged(entity: number): void;

    /**
     * Finishes AI execution and disables it in parent controller.
     */
    finishExecution(): void;

    /**
     * Changes own priority in parent's controller.
     */
    changeSelfPriority(priority: number): void;

    /**
     * Enables any AI by it's name in the controller.
     * @param name AI name to be enables
     * @param priority priority to be set to the enabled AI
     * @param extra some extra data passed to 
     */
    enableAI(name: string, priority: number, extra: any): void;

    /**
     * Disables any AI by it's name in the controller.
     * @param name AI name to be disabled
     */
    disableAI(name: string): void;

    /**
     * Sets any AI priority by it's name in the controller.
     * @param name AI name to change priority
     * @param priority priority to be set to the AI
     */
    setPriority(name: string, priority: number): void;

    /**
     * Gets any AI object by it's name from the current controller.
     * @param name AI name
     */
    getAI(name: string): EntityAIClass;

    /**
     * Gets any AI priority from the current controller by AI name.
     * @param name AI name
     */
    getPriority(name: string): number;

    /**
     * @returns AI type's default name.
     */
    setParams(params: object): void;

    /**
     * All the parameters of the AI instance.
     */
    params: object;

    /**
     * Object containing the state of the AI type.
     */
    data: object;
}

declare namespace EntityAIClass {
    /**
     * Object used to register entity AI prototypes.
     */
    interface EntityAIPrototype {
        /**
         * @returns AI type's default priority.
         */
        getDefaultPriority?(): number,

        /**
         * @returns AI type's default name.
         */
        getDefaultName?(): string,

        /**
         * Default parameters set.
         */
        params?: object,

        /**
         * Called when AI type execution starts.
         * @param extra additional data passed from {@link EntityAIClass.enableAI} 
         * method 
         */
        executionStarted?(extra?: any): void,

        /**
         * Called when AI type execution ends.
         */
        executionEnded?(): void,

        /**
         * Called when AI type execution is paused.
         */
        executionPaused?(): void,

        /**
         * Called when AI type execution is resumed.
         */
        executionResumed?(): void,

        /**
         * Defines main logic of the AI type.
         */
        execute?(): void,

        /**
         * Object containing the state of the AI type.
         */
        data?: object,

        /**
         * Called when entity is attacked by player.
         * @param attacker player that attacked this entity
         */
        attackedBy?(attacker: number): void;

        /**
         * Called when entity gets hurt.
         * @param attacker entity that damaged this entity, or -1 if damage 
         * source is not an entity
         * @param damage amount of damage
         */
        hurtBy?(attacker: number, damage: number): void;

        /**
         * Called when a projectile hits the entity.
         * @param projectile projectile entity ID
         */
        projectileHit?(projectile: number): void;

        /**
         * Called when entity is dead.
         * @param attacker entity that damaged this entity, or -1 if damage 
         * source is not an entity
         */
        death?(attacker: number): void;
    }

    /**
     * Object used to register entity AI prototypes.
     */
    interface WanderLikeAIPrototype extends EntityAIPrototype {
        /**
         * Entity movement speed when AI is executed.
         */
        speed?: number;
        /**
         * Entity speed when turning.
         */
        angular_speed?: number;
    }

}

/**
 * A set of predefined entity AI types.
 */
declare namespace EntityAI {
    /**
     * Simple Idle AI type, entity just does nothing.
     */
    class Idle extends EntityAIClass {
        /**
         * Creates Idle entity AI type.
         * @param customPrototype AI type prototype
         */
        constructor(customPrototype: EntityAIClass.EntityAIPrototype);
    }

    /**
     * Follow AI type, entity follows it's target. Use another AI type to set
     * target for this AI type.
     */
    class Follow extends EntityAIClass {
        /**
         * Creates follow entity AI type.
         * @param customPrototype AI type prototype
         */
        constructor(customPrototype: EntityAIClass.EntityAIPrototype & {
            /**
             * Entity movement speed when AI is executed.
             * @default 0.2
             */
            speed?: number;
            /**
             * Jump (y) velocity.
             * @default 0.45
             */
            jumpVel?: number;
            /**
             * Entity rotation speed.
             * @default 0.4
             */
            rotateSpeed?: number;
            /**
             * How long will be the rotation path.
             * @default 0.5
             */
            rotateRatio?: number;
            /**
             * If `true`, entity turns it's head to the target.
             * @default true
             */
            rotateHead?: boolean;
            /**
             * If `true`, entity won't change it's Y velocity.
             * @default true
             */
            denyY?: boolean;
            /**
             * Coordinates used as a target.
             */
            target?: Vector;
            /**
             * Entity used as a target; when specified, target data is ignored.
             */
            targetEntity?: number;
        });
    }

    /**
     * Panic AI type, entity just rushes around.
     */
    class Panic extends EntityAIClass {
        /**
         * Creates panic entity AI type.
         * @param customPrototype AI type prototype
         */
        constructor(customPrototype: EntityAIClass.WanderLikeAIPrototype);
    }

    /**
     * Wander AI type, entity walks around making pauses.
     */
    class Wander extends EntityAIClass {
        /**
         * Creates wander entity AI type.
         * @param customPrototype AI type prototype
         */
        constructor(customPrototype: EntityAIClass.WanderLikeAIPrototype & {
            /**
             * Part of the time entity is making pause.
             * @default 0.3
             */
            delay_weight?: number;
        });
    }

    /**
     * Attack AI type, entity causes damage to the target entity.
     */
    class Attack extends EntityAIClass {
        /**
         * Creates attack entity AI type.
         * @param customPrototype AI type prototype
         */
        constructor(customPrototype: EntityAIClass.EntityAIPrototype & {
            /**
             * Damage amount.
             * @default 5
             */
            attack_damage?: number;
            /**
             * Damage radius.
             * @default 2.5
             */
            attack_range?: number;
            /**
             * Time between to attacks in ticks.
             * @default 12
             */
            attack_rate?: number;
            /**
             * Target entity.
             * @default null
             */
            target?: Nullable<number>;
        });
    }

    /**
     * Swim AI type, if the entity is in water, it swims.
     */
    class Swim extends EntityAIClass {
        /**
         * Creates swim entity AI type.
         * @param customPrototype AI type prototype
         */
        constructor(customPrototype: EntityAIClass.EntityAIPrototype & {
            /**
             * Swimming speed.
             * @default 0.2
             */
            velocity?: number;
        });
    }

    /**
     * Panic AI watcher type, controls entity panic behavior after getting hurt.
     */
    class PanicWatcher extends EntityAIWatcher {
        /**
         * Creates panic watcher entity AI type.
         * @param customPrototype AI type prototype
         */
        constructor(customPrototype: EntityAIClass.EntityAIPrototype & {
            /**
             * Time the entity will be in panic.
             * @default 200
             */
            panic_time?: number;
            /**
             * Panic AI priority when entity should be in panic.
             * @default 5
             */
            priority_panic?: number;
            /**
             * Panic AI priority when entity should not be in panic.
             * @default 1
             */
            priority_default?: number;
            /**
             * Panic AI priority when entity should not be in panic
             * @default "panic"
             */
            name?: string;
        });
    }
}

/**
 * Parent class for {@link EntityAI.PanicWatcher}, does nothing
 * like {@link EntityAI.Idle}.
 */
declare class EntityAIWatcher extends EntityAIClass {
    /**
     * Creates watcher entity AI type.
     * @param customPrototype AI type prototype
     */
    constructor(customPrototype: EntityAIClass.EntityAIPrototype);
}
