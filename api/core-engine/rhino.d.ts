declare function getClass(property: string): any;

declare class java {
	private constructor();
	/**
	 * @deprecated Probably is not known package, please
	 * ensure in availability before publishing.
	 */
	static readonly [pkg: string]: any;
}
declare class javax {
	private constructor();
	/**
	 * @deprecated Probably is not known package, please
	 * ensure in availability before publishing.
	 */
	static readonly [pkg: string]: any;
}
declare class org {
	private constructor();
	/**
	 * @deprecated Probably is not known package, please
	 * ensure in availability before publishing.
	 */
	static readonly [pkg: string]: any;
}
declare class com {
	private constructor();
	/**
	 * @deprecated Probably is not known package, please
	 * ensure in availability before publishing.
	 */
	static readonly [pkg: string]: any;
}
declare class edu {
	private constructor();
	/**
	 * @deprecated Probably is not known package, please
	 * ensure in availability before publishing.
	 */
	static readonly [pkg: string]: any;
}
declare class net {
	private constructor();
	/**
	 * @deprecated Probably is not known package, please
	 * ensure in availability before publishing.
	 */
	static readonly [pkg: string]: any;
}
declare class android {
	private constructor();
	/**
	 * @deprecated Probably is not known package, please
	 * ensure in availability before publishing.
	 */
	static readonly [pkg: string]: any;
}

declare abstract class Packages {
	private constructor();
	static readonly java: typeof java;
	static readonly javax: typeof javax;
	static readonly org: typeof org;
	static readonly com: typeof com;
	static readonly edu: typeof edu;
	static readonly net: typeof net;
	static readonly android: typeof android;
	/**
	 * @deprecated Probably is not known package, please
	 * ensure in availability before publishing.
	 */
	static readonly [pkg: string]: any;
}

declare class JavaImporter {
	constructor(...packagesOrClasses: any);
	importClass(clazz: any): void;
	importPackage(package: any): void;
	readonly [property: string]: any;
}
