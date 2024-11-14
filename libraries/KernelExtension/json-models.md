# JSON block and item models

Remember that tremendously bulky and absolutely non-human-readable code of adding variations to a Java-registered custom block? It was unacceptable to leave it like this and make the Java developers suffer from those crazy sequential calls with `JSONObject`s and `JSONArray`s. So the decision was made to (almost) fully port **the JSON block and item models parser** from `Minecraft: Java Edition`.

:::tip Create models easier than ever

To understand the block and item models JSON format, here is [this article on official Minecraft Wiki website](https://minecraft.wiki/w/Tutorials/Models).

:::

All the `blockstates/` and `models/` directories must be inside of a KEX resource directory, more detailed about it read in [the previous article](kex-config.md). The names of JSON files in `blockstates/` and `models/item/` directories must be the same as the name IDs of blocks and items you've registered to assign these models to. For example:

```java
BlockRegistry.register(new MyBlock("my_block"));
ItemRegistry.register(new MyItem("my_item"));
```

Therefore, you will have to create the files `blockstates/my_block.json` and `models/item/my_item.json`.

For you not to create base template models like cube, column, cross etc. yourself, KEX provides you with 56 of them. You can see the list by going into the KernelExtension mod directory and browsing to `kex-res/models/block/`, or by going to [this folder in KernelExtension public GitHub repository](https://github.com/DMHYT/KernelExtension/tree/main/src/assets/root/kex-res/models/block).

<details>
<summary>List of differences between KEX JSON block and item models parser, and the original one from Java Minecraft.</summary>
<div>

- **Differences in `blockstates` JSON format:**
  - `variants` parameter must be an array instead of an object. Index of each variant JSON description in this array corresponds to the data value, to which this variant of the model will be assigned to. Block states support is planned to be added in future updates.
  - In `multipart` only [ICRender groups](https://nernar.github.io/api/modules/ICRender.html#getGroup) are supported. In `north`, `south`, `west` and `east` conditions, instead of `side` or `up` you have to write the name of the ICRender group, or multiple of them separated by **`|`**. Also the `NOT` operator is additionally supported. If you add the **`!`** before the ICRender group name, it will be parsed as `NOT(group)`. The support of the rest of block states support is planned to be added in nearest updates.
- **Differences in `models` JSON format:**
  - `ambientocclusion` parameter is not supported
  - In `display` parameter, only `"hand"` and `"gui"` keys are supported (`"hand"` instead of `"thirdperson_righthand"`, `"thirdperson_lefthand"`, `"firstperson_righthand"` and `"firstperson_lefthand"` combined)
  - `shade` parameter in cubes (elements) is not supported
  - `cullface` and `tintindex` parameters in cube (element) faces are not supported
  - In item models, `gui_light` and `overrides` parameters are not supported (`overrides` support is planned in future updates)
  - In item model textures, `"layerN"` format is not supported, if you want an item with a default (flat) model, don't use JSON models, just call `setIcon` or implement `IHasDynamicIcon` component.

</div>
</details>
