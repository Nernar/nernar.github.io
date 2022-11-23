/**
 * Module used to log messages to Inner Core and internal log.
 */
declare namespace Logger {
    /**
     * Writes message to the log, using specified log prefix.
     * @param message message to be logged
     * @param prefix prefix of the message, can be used to filter log
     * @remarks
     * It will be writed to `[<prefix>/D] <message>` as-is,
     * where prefix will be **MOD** if it not specified.
     */
    function Log(message: string, prefix?: string): void;

    /**
     * Writes debugging message to log, using specified tag.
     * @remarks
     * It will be writed to `[<tag>/D] <message>` as-is.
     * @since 2.2.0b77
     */
    function debug(tag: string, message: string): void;

    /**
     * Writes information message to log, using specified tag.
     * @remarks
     * It will be writed to `[<tag>/I] <message>` as-is.
     * @since 2.2.0b77
     */
    function info(tag: string, message: string): void;

    /**
     * Writes error message to log, using specified tag.
     * If it writed before game startup finish, debugging
     * log with all messages will appear.
     * @remarks
     * It will be writed to `[<tag>/E] <message>` as-is.
     * If error also provided, it will be appended with
     * same tag above error message.
     * @since 2.2.0b77
     */
    function error(tag: string, message: string, error?: java.lang.Throwable): void;

    /**
     * Logs java Throwable with full stack trace to.
     * @param error java Throwable to be logged
     */
    function LogError(error: java.lang.Throwable): void;

    /**
     * Writes logger content to file and clears all buffers.
     */
    function Flush(): void;
}