declare namespace SyncedNetworkData {
    /**
     * Server synced data validator and transformer, calls for every change.
     * **Warning!** Please do NOT send changes here, any changes will sent after verifying.
     * @param key key that was changed
     * @param value value for this key
     * @returns transformed value to set, `null` means no change will be performed
     */
    interface DataVerifierFunction {
        (key: string, value: object): Nullable<object>
    }
    /**
     * When data changes (no matter where, it will be applied on both client and server sides),
     * listener will be called with received or set synced data.
     * @param data instance of data, there is no way to listener be called from other ones
     * @param key key that was changed
     * @param isExternal is change was received from other side (server for client, client for server)
     */
    interface OnDataChangedListenerFunction {
        (data: SyncedNetworkData, key: string, isExternal: boolean): void
    }
}

/**
 * Class to work with values, synchronized between server and all clients.
 */
declare class SyncedNetworkData {
    /**
     * @returns Registered client synced data by name or null if it was not yet received.
     */
    static getClientSyncedData(name: string): Nullable<SyncedNetworkData>;

    /**
     * Constructs server network data by specified name, clients will receive
     * data via instance with same contructor. 
     */
    constructor(name: string);
    /**
     * Constructs server network data with random uuid, name like SND<uuid> will
     * be applied (e.g., "SNDe58ed763-928c-4155-bee9-fdbaaadc15f3").
     */
    constructor();

    /**
     * @returns Requested value by key or null if key not found.
     */
    getObject(key: string): Nullable<java.lang.Object>;
    /**
     * @returns Requested value by key or fallback if key not found.
     */
    getInt(key: string, fallback?: number): number;
    /**
     * @returns Requested value by key or fallback if key not found.
     */
    getLong(key: string, fallback?: number): number;
    /**
     * @returns Requested value by key or fallback if key not found.
     */
    getFloat(key: string, fallback?: number): number;
    /**
     * @returns Requested value by key or fallback if key not found.
     */
    getDouble(key: string, fallback?: number): number;
    /**
     * @returns Requested value by key or fallback if key not found.
     */
    getString(key: string, fallback?: string): string;
    /**
     * @returns Requested value by key or fallback if key not found.
     */
    getBoolean(key: string, fallback?: boolean): boolean;
    /**
     * Sets Object value by key.
     */
    putObject(key: string, value: java.lang.Object): void;
    /**
     * Sets Integer value by key.
     */
    putInt(key: any, value: number): void;
    /**
     * Sets Long value by key.
     */
    putLong(key: any, value: number): void;
    /**
     * Sets Float value by key.
     */
    putFloat(key: any, value: number): void;
    /**
     * Sets Double value by key.
     */
    putDouble(key: any, value: number): void;
    /**
     * Sets String value by key.
     */
    putString(key: any, value: string): void;
    /**
     * Sets Boolean value by key.
     */
    putBoolean(key: any, value: boolean): void;

    /**
     * @returns Name passed in constructor, which one will be used for packets.
     */
    getName(): string;
    /**
     * @returns `true` if it was server-side data that can be sent to clients.
     */
    isServer(): boolean;
    /**
     * @returns Connected client list, which receive this data.
     */
    getClients(): NetworkConnectedClientList;
    /**
     * Overrides connected client list, new one will automatically send server data.
     */
    setClients(clients: NetworkConnectedClientList): void;
    /**
     * Same as {@link SyncedNetworkData.sendChanges}.
     */
    apply(): void;
    /**
     * Sends changed data values.
     */
    sendChanges(): void;
    /**
     * Sends changed data values for specific client (dirty data remains).
     * @param client connected client to server
     * @since 2.3.1b116-3
     */
    sendChangesForClient(client: NetworkClient): void;

    /**
     * Adds event that catches changes of any data values on both sides.
     */
    addOnDataChangedListener(listener: SyncedNetworkData.OnDataChangedListenerFunction): void;
    /**
     * Removes data change event, that was registered by
     * {@link SyncedNetworkData.addOnDataChangedListener} before.
     */
    removeOnDataChangedListener(listener: SyncedNetworkData.OnDataChangedListenerFunction): void;
    /**
     * Removes all data change events, that was registered by
     * {@link SyncedNetworkData.addOnDataChangedListener} before.
     */
    removeAllListeners(): void;

    /**
     * Adds server-side data transformer received from client
     * to the object by specified key.
     */
    addVerifier(key: string, verifier: SyncedNetworkData.DataVerifierFunction): void;
    /**
     * Adds server-side data transformer received from client
     * that will be used if there is no verifier with specified key
     * registered via {@link SyncedNetworkData.addVerifier}.
     */
    setGlobalVerifier(verifier: SyncedNetworkData.DataVerifierFunction): void;
    /**
     * Global verifier that was set via {@link SyncedNetworkData.setGlobalVerifier}.
     */
    getGlobalVerifier(): SyncedNetworkData.DataVerifierFunction;

    /**
     * @returns Serialized object data which are in object.
     * @since 2.3.1b116-3
     */
    toJSON(): string;

    /**
     * Replaces existing data with those that are in given object.
     * @param json serialized object data
     * @since 2.3.1b116-3
     */
    fromJSON(json: string): void;
}
