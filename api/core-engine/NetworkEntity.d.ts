declare namespace NetworkEntity {
	/**
	 * Listener used to handle type events.
	 */
	interface IPlayerListener {
		/**
		 * @param client (dis)connected client
		 */
		(client: NetworkClient): void
	}
}

/**
 * Class that represents network entity of the block, currently is not learned.
 */
declare class NetworkEntity {
	constructor(type: NetworkEntityType, context: any);
	remove(): void;
	send(name: string, data: any): void;
	getClients(): NetworkConnectedClientList;
	/**
	 * @since 2.3.1b116-3
	 */
	setConnectionPlayerListener(listener: NetworkEntity.IPlayerListener): void;
	/**
	 * @since 2.3.1b116-3
	 */
	setDisconnectionPlayerListener(listener: NetworkEntity.IPlayerListener): void;
	getType(): NetworkEntityType;
}
