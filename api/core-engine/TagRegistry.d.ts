/**
 * Tag system allows you to assign tags to objects
 * and put them into groups for further object search.
 * @since 2.0.4b38
 * 
 * @example
 * Use constant to define group in global scope to reuse/export it:
 * 
 * ```js
 * const ENCHANT_TAG_GROUP = TagRegistry.getOrCreateGroup("enchant");
 * 
 * BlockRegistry.registerDropFunctionForID(BlockID.tin_ore, function(coords, id, data, level, enchant, item, region) {
 * 	if (level >= 2) {
 * 		// Check item for "smelting" tag, which can be set to obtain smelted result
 * 		if (ENCHANT_TAG_GROUP.getTags(item).contains("smelting")) {
 * 			ToolAPI.dropOreExp(coords, 2, 2, enchant.experience, blockSource);
 * 			return [[ItemID.tin_ingot, 1, 0]];
 * 		} else {
 * 			// Do default logic otherwise (if no tag has been set)
 * 			return [[BlockID.tin_ore, 1, 0]]
 * 		}
 * 	}
 * 	return [];
 * }, 2);
 * 
 * // Register tag factory, which are called to obtain tags every iteration
 * ENCHANT_TAG_GROUP.addTagFactory(function(object, tags) {
 * 	// In case if our object is item-like and equals smelting tool
 * 	if (object && object.id == ItemID.smelting_multitool) {
 * 		// Smelt our BlockID.tin_ore and a few vanilla ones
 * 		tags.add("smelting");
 * 	}
 * });
 * ```
 * 
 * @example
 * Obtain tag group automatically via registry:
 * 
 * ```js
 * BlockRegistry.registerDropFunctionForID(BlockID.tin_ore, function(coords, id, data, level, enchant, item, region) {
 * 	if (level >= 2) {
 * 		// Check item for "smelting" tag, which can be set to obtain smelted result
 * 		if (TagRegistry.getTagsFor("enchant", item).contains("smelting")) {
 * 			ToolAPI.dropOreExp(coords, 2, 2, enchant.experience, blockSource);
 * 			return [[ItemID.tin_ingot, 1, 0]];
 * 		} else {
 * 			// Do default logic otherwise (if no tag has been set)
 * 			return [[BlockID.tin_ore, 1, 0]]
 * 		}
 * 	}
 * 	return [];
 * }, 2);
 * 
 * // Register tag factory, which are called to obtain tags every iteration
 * TagRegistry.addTagFactory("enchant", function(object, tags) {
 * 	// In case if our object is item-like and equals smelting tool
 * 	if (object && object.id == ItemID.smelting_multitool) {
 * 		// Smelt our BlockID.tin_ore and a few vanilla ones
 * 		tags.add("smelting");
 * 	}
 * });
 * ```
 */
declare namespace TagRegistry {
	interface TagGroup<T = any> {
		readonly name: string;
		/**
		 * Tag factory determines additional tags, which should
		 * be added for specific object in group.
		 */
		addTagFactory(factory: TagFactory<T>): void;
		/**
		 * Appends object to group to use in iterator and
		 * filtering functions like {@link TagGroup.getAllWhere}, etc.
		 * @param tags primary tags to be added for object
		 */
		addCommonObject(obj: T, ...tags: string[]): void;
		/**
		 * Removes object from group, so it no longer can
		 * be fetched via {@link TagGroup.getAllWhere}, etc.
		 */
		removeCommonObject(obj: T): void;
		/**
		 * Appends primary tags for object; regardless of whether
		 * object is in group or not, tags will be added.
		 * @param tags primary tags to be added for object
		 */
		addTagsFor(obj: T, ...tags: string[]): void;
		/**
		 * Fetches object tags and appends it to a present
		 * collection in fixed order: primary tags added via
		 * {@link TagGroup.addTags}, serialized tags from object `_tags`
		 * property, tags added from {@link TagGroup.addTagFactory}.
		 * @param tags collection tor which tags applies
		 */
		addTags(obj: T, tags: java.util.Collection<string>): void;
		/**
		 * Removes primary tags from object.
		 * @param tags primary tags to be removed from object
		 */
		removeTagsFor(obj: T, ...tags: string[]): void;
		/**
		 * Fetches object tags in fixed order: primary tags added via
		 * {@link TagGroup.addTags}, serialized tags from object `_tags`
		 * property, tags added from {@link TagGroup.addTagFactory}.
		 */
		getTags(obj: T): java.util.HashSet<string>;
		/**
		 * Iterates over existing common objects added via
		 * {@link TagGroup.addCommonObject} and collects objects
		 * matched predicate to list.
		 */
		getAllWhere(predicate: TagPredicate<T>): java.util.List<T>;
		/**
		 * Fetches objects which have all of presented tags.
		 */
		getAllWithTags(tags: java.util.Collection<string>): java.util.List<T>;
		/**
		 * Fetches objects which has presented tag.
		 */
		getAllWithTag(tag: string): java.util.List<T>;
	}

	/**
	 * Gets or creates a new tag group to append tags
	 * for any objects.
	 */
	function getOrCreateGroup(name: string): TagGroup;

	/**
	 * Gets or creates a new tag group to append tags
	 * for any objects with generic type.
	 */
	function getOrCreateGroup<T>(name: string): TagGroup<T>;

	interface TagFactory<T = any> {
		/**
		 * @param obj object from group
		 * @param tags changeable tags collection
		 */
		(obj: T, tags: java.util.Collection<string>): void;
	}

	/**
	 * Tag factory determines additional tags, which should
	 * be added for specific object in group.
	 */
	function addTagFactory(group: string, factory: TagFactory): void;

	interface TagPredicate<T = any> {
		/**
		 * @param obj object from group
		 * @param tags collection with all tags
		 */
		(obj: T, tags: java.util.Collection<string>): boolean;
	}

	/**
	 * Iterates over existing common objects in group added via
	 * {@link TagGroup.addCommonObject} and collects objects
	 * matched predicate to list.
	 */
	function getAllWith(group: string, predicate: TagPredicate): any[];
	/**
	 * Fetches objects in group which have all of presented tags.
	 */
	function getAllWithTags(group: string, tags: string[]): any[];
	/**
	 * Fetches objects in group which has presented tag.
	 */
	function getAllWithTag(group: string, tag: string): any[];

	/**
	 * Appends object to group to use in iterator and
	 * filtering functions like {@link TagRegistry.getAllWith}, etc.
	 * @param tags primary tags to be added for object
	 */
	function addCommonObject(group: string, obj: any, tags: string[]): void;
	/**
	 * Removes object from group, so it no longer can
	 * be fetched via {@link TagRegistry.getAllWith}, etc.
	 */
	function removeCommonObject(group: string, obj: any): void;
	/**
	 * Appends primary tags for object in group; regardless of whether
	 * object is in group or not, tags will be added.
	 * @param tags primary tags to be added for object
	 * @param useExistingObject do not append object to group
	 */
	function addTagsFor(group: string, obj: any, tags: string[], useExistingObject: boolean): void;
	/**
	 * Appends primary tag for object in group.
	 * @param tag primary tag to be added for object
	 * @param useExistingObject do not append object to group
	 */
	function addTagFor(group: string, obj: any, tag: string, useExistingObject: boolean): void;
	/**
	 * Removes primary tags from object in group.
	 * @param tags primary tags to be removed from object
	 */
	function removeTagsFor(group: string, obj: any, tags: string[]): void;
	/**
	 * Fetches object tags in fixed order: primary tags added via
	 * {@link TagRegistry.addTagsFor}, serialized tags from object `_tags`
	 * property, tags added from {@link TagRegistry.addTagFactory}.
	 */
	function getTagsFor(group: string, obj: any): string[];
}
