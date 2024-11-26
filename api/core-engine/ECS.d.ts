/**
 * @since 2.3.1b115
 */
declare namespace ECS {
	function getEntityManager(): EcsEntityManager;
	function getTypeName(id: number): string;
	function getTypeId(name: string): number;
	/**
	 * Same as {@link ECS_INVALID_ENTITY}.
	 */
	function getInvalidEntity(): number;
	/**
	 * Same as {@link ECS_TAG_OBJECT}.
	 */
	function getTagComponentObject(): any;

	interface LocalTicking {
		tick(queue: EcsActionQueue): void;
	}

	interface ServerTicking {
		tick(queue: EcsActionQueue): void;
	}

	interface VariadicQueryConsumer {
		(entity: number, components: any[]): void;
	}

	interface FixedQueryConsumer0 {
		(entity: number): void;
	}

	interface FixedQueryConsumer1<T1> {
		(entity: number, query1: T1): void;
	}

	interface FixedQueryConsumer2<T1, T2> {
		(entity: number, query1: T1, query2: T2): void;
	}

	interface FixedQueryConsumer3<T1, T2, T3> {
		(entity: number, query1: T1, query2: T2, query3: T3): void;
	}

	interface FixedQueryConsumer4<T1, T2, T3, T4> {
		(entity: number, query1: T1, query2: T2, query3: T3, query4: T4): void;
	}

	interface FixedQueryConsumer5<T1, T2, T3, T4, T5> {
		(entity: number, query1: T1, query2: T2, query3: T3, query4: T4, query5: T5): void;
	}

	interface FixedQueryConsumer6<T1, T2, T3, T4, T5, T6> {
		(entity: number, query1: T1, query2: T2, query3: T3, query4: T4, query5: T5, query6: T6): void;
	}
}

/**
 * @since 2.3.1b115
 */
declare interface EcsEntityManager {
	/* static */ INVALID_ENTITY: number;
	/* static */ TAG: java.lang.Object;
	createEntity(): number;
	removeEntity(entity: number): void;
	detachEntity(entity: number): EcsAddComponents;
	extend(entity: number, components: EcsAddComponents): void;
	shrink(entity: number, components: EcsRemoveComponents): void;
	removeAllEntitiesWithComponents(query: EcsQuery): void;
	performVariadicQuery(query: EcsQuery, consumer: ECS.VariadicQueryConsumer): void;
	performQuery(query: EcsQuery, consumer: ECS.FixedQueryConsumer0): void;
	performQuery<T1>(query: EcsQuery, consumer: ECS.FixedQueryConsumer1<T1>): void;
	performQuery<T1, T2>(query: EcsQuery, consumer: ECS.FixedQueryConsumer2<T1, T2>): void;
	performQuery<T1, T2, T3>(query: EcsQuery, consumer: ECS.FixedQueryConsumer3<T1, T2, T3>): void;
	performQuery<T1, T2, T3, T4>(query: EcsQuery, consumer: ECS.FixedQueryConsumer4<T1, T2, T3, T4>): void;
	performQuery<T1, T2, T3, T4, T5>(query: EcsQuery, consumer: ECS.FixedQueryConsumer5<T1, T2, T3, T4, T5>): void;
	performQuery<T1, T2, T3, T4, T5, T6>(query: EcsQuery, consumer: ECS.FixedQueryConsumer6<T1, T2, T3, T4, T5, T6>): void;
	getComponents(entity: number, query: EcsQuery): any[];
	getComponent(entity: number, index: number): any;
}

/**
 * @since 2.3.1b115
 */
declare class IntFlatMap {
	constructor();
	constructor(emptyKey: number);
	get(key: number, defaultValue: number): number;
	put(key: number, value: number): boolean;
	remove(key: number): boolean;
	clearNoDealloc(): void;
	clear(): void;
	reserve(newCount: number): void;
}

/**
 * @since 2.3.1b115
 */
declare class EcsQuery {
	constructor(...queries: object[]);
}

/**
 * @since 2.3.1b115
 */
declare class EcsAddComponents {
	constructor();
	addComponent(type: number | string, value: any): EcsAddComponents;
	addComponent<T>(type: java.lang.Class<T>, value: T): EcsAddComponents;
	setTypes(...types: number[] | string[]): EcsAddComponents;
	setTypes(...types: java.lang.Class<any>[]): EcsAddComponents;
	setValues(...values: object[]): EcsAddComponents;
	empty(): boolean;
}

/**
 * @since 2.3.1b115
 */
declare class EcsRemoveComponents {
	constructor();
	addComponent(type: number | string): EcsRemoveComponents;
	addComponent(type: java.lang.Class<any>): EcsRemoveComponents;
	setTypes(...types: number[] | string[]): EcsRemoveComponents;
	setTypes(...types: java.lang.Class<any>[]): EcsRemoveComponents;
	empty(): boolean;
}

/**
 * @since 2.3.1b115
 */
declare class EcsActionQueue {
	constructor();
	createEntity(): number;
	getEntityCount(): number;
	removeEntity(entity: number): EcsActionQueue;
	addComponent(entity: number, type: number | string, value: any): EcsActionQueue;
	addComponent(entity: number, type: java.lang.Class<any>, value: any): EcsActionQueue;
	extend(entity: number, components: EcsAddComponents): EcsActionQueue;
	extend(entity: number, types: number[], values: any[], count: number): EcsActionQueue;
	removeComponent(entity: number, type: number | string): EcsActionQueue;
	removeComponent(entity: number, type: java.lang.Class<any>): EcsActionQueue;
	shrink(entity: number, components: EcsRemoveComponents): EcsActionQueue;
	shrink(entity: number, types: number[], count: number): EcsActionQueue;
	flush(): void;
	clear(): void;
	/**
	 * Does {@link flush}() and {@link clear}() at same time.
	 */
	flushNoClear(): void;
	reserve(entityCount: number): void;
}

/**
 * @since 2.3.1b115
 */
declare interface EcsComponent {
	/* static */ COMPONENT_ID: number
}

/**
 * @since 2.3.1b115
 */
declare interface EcsBlockComponent extends EcsComponent {
	id: number;
	nameId: string;
	name: string;
}

/**
 * @since 2.3.1b115
 */
declare interface EcsItemComponent extends EcsComponent {
	id: number;
	nameId: string;
	name: string;
}

/**
 * @since 2.3.1b115
 */
declare interface EcsArmorItemComponent extends EcsComponent, Armor.IArmorInfo {
	slot: number;
	protection: number;
	kbResist: number; // knockback
}

/**
 * @since 2.3.1b115
 */
declare const EntityManager: EcsEntityManager;

/**
 * @since 2.3.1b115
 */
declare const ECS_INVALID_ENTITY: object;

/**
 * @since 2.3.1b115
 */
declare const ECS_TAG_OBJECT: object;
