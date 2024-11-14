# `kex-config.json` file explained

Starting from KernelExtension `RELEASE 4.0`, you can improve your KEX user experience by creating a new special file in your mod's directory, named `kex-config.json`. It will make easier for KEX to navigate to different non-program files in your mod's directory, which are used in-game, without needing to call any additional methods in your mod's code.

## KEX config parameters

### _**kex-config.json**_

```jsonc
{
    "resources": [ "kex-res/" ] // KEX resource directory path relative to your mod's directory path
}
```

As of KEX 4.0, `kex-config.json` takes only one parameter `"resources"`, which is used to navigate to one or multiple KEX resource directories inside the directory of your mod. It can be a string if you have one KEX resource directory, or an array of strings if you have multiple of them. The path must be _**relative to your mod's directory path**_ and must end with slash (_**`/`**_).

### KEX resource directory structure

***

#### _**A KEX resource directory**_

```txt
┃— lang
┃    ┃— en_us.json
┃    ╹— ru_ru.json
┃— blockstates
┃    ╹— my_block.json
╹— models
        ┃— block
        ┃    ╹— my_block_model.json
        ╹— item
                ╹— my_item.json
```

Currently there are two things you can make a KEX resource directory in your mod for: `lang` files and JSON block and item models. The latter is explained in detail in [this article](json-models.md).

Talking about `lang`-s, it's just an alternative solution for calling [KEX.I18n.addLangDir](https://dmhyt.github.io/kex-docs/api/modules/KEX.I18n.html#addLangDir) to add your directory containing vanilla localization files. For example, if you create the `kex-config.json` with `"resources"` parameter set to `"kex-res/"`, and create a `"lang/"` folder in `"your_mod_directory/kex-res/"`, you won't need to additionally write this JS/TS code:

```js
KEX.I18n.addLangDir(`${__dir__}/kex-res/lang/`)
```
