/**
 * Class used to define block models that depend on surrounding blocks. Some
 * examples of such blocks are wires, pipes, block structure parts, etc.
 */
declare namespace ICRender {
	/**
	 * Used to specify that the block should be present to satisfy condition.
	 */
	const MODE_INCLUDE = 0;

	/**
	 * Used to specify that the block should be absent to satisfy condition.
	 */
	const MODE_EXCLUDE = 1;

	/**
	 * @param name group name
	 * @returns Block group by it's name, if no group with specified name exist,
	 * this function creates a new one.
	 */
	function getGroup(name: string): ICRender.Group;

	/**
	 * Creates a new group with a unique name.
	 */
	function getUnnamedGroup(): ICRender.Group;

	/**
	 * Groups (of blocks) are used to determine some render conditions; e.g.,
	 * if a block exists on some relative coordinates, display some part of the
	 * model.
	 */
	interface Group {
		/**
		 * @returns Group's name.
		 */
		getName(): string,
		
		name: string;

		/**
		 * Adds a block to the group.
		 * @param id block ID
		 * @param data block data or -1 to use with all registered data values
		 */
		add(id: number, data: number): void
	}

	class Model {
		/**
		 * Constructs a base model that will be displayed.
		 * @param model optional model to be added without additional conditions
		 */
		constructor(model?: BlockRenderer.Model);

		/**
		 * Adds block model as an entry to the {@link ICRender}. You can then call
		 * {@link ICRender.RenderEntry.asCondition#1|RenderEntry.asCondition} to specify when to display the entry.
		 * @returns Created {@link ICRender.RenderEntry|RenderEntry} object.
		 */
		addEntry(model?: BlockRenderer.Model): RenderEntry;

		/**
		 * Adds render mesh as an entry to the {@link ICRender}. You can then call
		 * {@link ICRender.RenderEntry.asCondition#1|RenderEntry.asCondition} to specify when to display the entry.
		 * @returns Created {@link ICRender.RenderEntry|RenderEntry} object.
		 */
		addEntry(mesh?: RenderMesh): RenderEntry;
	}

	/**
	 * Object representing render entry with it's displaying condition.
	 */
	interface RenderEntry {
		/**
		 * @returns Parent {@link ICRender.Model|Model} object this entry belongs to.
		 */
		getParent(): Model;

		/**
		 * Sets {@link ICRender.BLOCK} condition with specified parameters. Uses coordinates
		 * that are relative to current block's ones.
		 * @param group group name or object
		 * @param mode one of the {@link ICRender.MODE_INCLUDE} and {@link ICRender.MODE_EXCLUDE} constants
		 * @returns Reference to itself to be used in sequential calls.
		 */
		asCondition(x: number, y: number, z: number, group: Group | string, mode: number): RenderEntry;

		/**
		 * Sets {@link ICRender.BLOCK} condition with specified parameters. Uses coordinates
		 * that are relative to current block's ones. Creates a new anonymous
		 * group with single block.
		 * @param id condition block ID
		 * @param data condition block data
		 * @param mode one of the {@link ICRender.MODE_INCLUDE} and {@link ICRender.MODE_EXCLUDE} constants
		 * @returns Reference to itself to be used in sequential calls.
		 */
		asCondition(x: number, y: number, z: number, id: number, data: number, mode: number): RenderEntry;

		/**
		 * Sets condition to be used for current entry.
		 * @returns Reference to itself to be used in sequential calls.
		 */
		setCondition(condition: CONDITION): RenderEntry;

		/**
		 * Sets block model used for the entry, specifying it's coordinates.
		 * @returns Reference to itself to be used in sequential calls.
		 */
		setModel(x: number, y: number, z: number, model: BlockRenderer.Model): RenderEntry;

		/**
		 * Sets block model used for the entry.
		 * @returns Reference to itself to be used in sequential calls.
		 */
		setModel(model: BlockRenderer.Model): RenderEntry;

		/**
		 * Sets render mesh to be used for the entry.
		 * @returns Reference to itself to be used in sequential calls.
		 */
		setMesh(mesh: RenderMesh): RenderEntry;
	}

	/**
	 * Class representing custom collision shapes used for block.
	 */
	class CollisionShape {
		/**
		 * Adds new entry to the collision shape. You can then call
		 * {@link ICRender.CollisionEntry.setCondition|CollisionEntry.setCondition} to specify when to display the entry.
		 */
		addEntry(): CollisionEntry;
	}

	/**
	 * Object representing collision shape entry with it's displaying condition.
	 */
	interface CollisionEntry {
		/**
		 * Adds new collision box to collision entry.
		 * @returns Reference to itself to be used in sequential calls.
		 */
		addBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): CollisionEntry;

		/**
		 * Sets condition, all the boxes of the entry work only if the condition is `true`.
		 * @returns Reference to itself to be used in sequential calls.
		 */
		setCondition(condition: CONDITION): CollisionEntry;
	}

	/**
	 * Common superclass for all condition classes.
	 */
	abstract class CONDITION { }

	/**
	 * Condition depending on random value.
	 */
	class RANDOM_CONDITION implements CONDITION {
		/**
		 * Forces engine to treat blocks along some axis in same way if enabled
		 * parameter value is `false.`
		 * @param axis 0 fpr x, 1 for y, 2 for z axis
		 */
		setAxisEnabled(axis: number, enabled: boolean): RANDOM_CONDITION;
	}

	/**
	 * Constructs new {@link ICRender.RANDOM_CONDITION} condition.
	 * @param value value that a generated random integer number should be for the 
	 * condition to evaluate as true
	 * @param max maximum value for the generator
	 * @param seed seed to be used for random numbers generation
	 */
	function RANDOM(value: number, max: number, seed?: number): RANDOM_CONDITION;

	/**
	 * Constructs new {@link ICRender.RANDOM#1} condition with default seed and `0` as
	 * desired random value.
	 * @param max maximum value for the generator
	 */
	function RANDOM(max: number): CONDITION;

	/**
	 * Constructs new {@link ICRender.BLOCK} condition.
	 * @param x is relative x coordinate
	 * @param y is relative y coordinate
	 * @param z is relative z coordinate
	 * @param group blocks group to check the condition for
	 * @param exclude if true, the blocks from the group make the condition 
	 * evaluate as false, as true otherwise
	 */
	function BLOCK(x: number, y: number, z: number, group: ICRender.Group, exclude: boolean): CONDITION;

	/**
	 * Constructs new {@link ICRender.NOT} condition.
	 * @param condition condition to be inverted
	 */
	function NOT(condition: CONDITION): CONDITION;

	/**
	 * Constructs new {@link ICRender.OR} condition.
	 */
	function OR(...conditions: CONDITION[]): CONDITION;

	/**
	 * Constructs new {@link ICRender.AND} condition.
	 */
	function AND(...conditions: CONDITION[]): CONDITION;
}