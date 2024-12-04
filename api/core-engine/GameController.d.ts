/**
 * Methods for manipulating player with world,
 * use callbacks of callbacks in their implementation.
 * @since 2.4.0b120
 */
declare namespace GameController {

	/**
	 * @remarks Can break a block that breaks instantly.
	 */
	function startDestroyBlock(x: number, y: number, z: number, side: number): boolean;

	/**
	 * Triggers client-side "DestroyBlockContinue" and "DestroyBlockStart" (on zero progress).
	 */
	function continueDestroyBlock(x: number, y: number, z: number, side: number): boolean;

	/**
	 * Interrupts destruction animation.
	 */
	function stopDestroyBlock(x: number, y: number, z: number): void;

	/**
	 */
	function startBuildBlock(x: number, y: number, z: number, side: number): void;

	/**
	 */
	function continueBuildBlock(x: number, y: number, z: number, side: number): void;

	/**
	 */
	function stopBuildBlock(): void;

	/**
	 * Triggers server-side "BreakBlock" and "DestroyBlock" (if not prevented).
	 */
	function destroyBlock(x: number, y: number, z: number, side: number): void;

	/**
	 * Triggers server-side "BuildBlock".
	 */
	function buildBlock(x: number, y: number, z: number, side: number): void;

	/**
	 * Triggers server-side "ItemUse" and "ItemUseServer"
	 * with client-side "ItemUseLocal" and "ItemUseLocalServer".
	 */
	function onItemUse(x: number, y: number, z: number, side: number): void;

	/**
	 * Triggers server-side "PlayerAttack" and "EntityHurt".
	 */
	function attack(entityUid: number): void;

	/**
	 * Triggers server-side "EntityInteract".
	 */
	function interact(entityUid: number, x: number, y: number, z: number): void;

	/**
	 */
	function releaseUsingItem(): void;

}
