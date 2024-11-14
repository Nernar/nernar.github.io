# Vein Miner

Vein Miner — это мод-библиотека, позволяющая добывать всю жилу руды при ломании одного блока. Поддерживает руды и инструменты из других модификаций. Последняя актуальная версия библиотеки доступна к загрузке в [браузере модов](https://icmods.mineprogramming.org/mod?id=274).

## Добавление своих руд

По умолчанию, все блоки из модов, распознанные как руды (идентификатор должен оканчиваться на *_ore* или содержать *ore*, тайлы игнорируются) автоматически регистрируются для добычи всей жилы. Однако, если идентификатор вашего блока не попадает под эти условия, есть возможность вручную добавить его к нужной категории.

<!-- TODO: Fix abobus text wrapping, should be in separate block or in same paragraph of text.
```mdx-code-block
import RotatableMinecraftBlock from "@site/src/components/RotatableMinecraftBlock"

<RotatableMinecraftBlock bottomTexture='ancient_abobus_top_0' northTexture='ancient_abobus_side_0' floatDirection='left' />
```

Это наш блок древнего абобуса, так зарегистрируем же его как руду!
-->

<Tabs groupId="scripting-language">
<TabItem value="js" label="JavaScript">

```js
ModAPI.addAPICallback("VeinMinerBlocks", function(ores) {
    ores.push(BlockID.ancient_abobus);
});
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```js
ModAPI.addAPICallback("VeinMinerBlocks", ores => ores.push(BlockID.ancient_abobus));
```

</TabItem>
</Tabs>

Изменяя массив с числовыми идентификаторами, также имеется возможность убрать зарегистрированные ранее блоки.
