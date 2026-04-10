# First Liquid

Liquids are blocks that spread over a plane, which usually make it difficult for entities to move on them and form currents. In-game liquids include water and lava.

## Currents and flows

Before creating a block, or rather a pair of blocks, let's look at how liquids work in practice. Any liquid from the beginning of its flow forms a current in a radius of 15 blocks (including the flow itself).

<!-- TODO: ![liquid.gif](/images/blocks/liquid-principles.png) -->

Over the specified period of time, the liquid evenly spreads in all directions by exactly one block. We call a liquid a pair of blocks — still and flowing. The main one for the game is precisely the latter, the first one indicates the source (flow), and is used during generation and other scenarios, remaining purely technical.

## Let's register a block

Only one complex function is responsible for the registration of liquids:

```js
Block.createLiquidBlock("ink", {
    name: "Ink",
    tickDelay: 30,
    still: {
        texture: ["ink", 0]
    },
    flowing: {
        texture: ["ink", 0]
    },
    bucket: {
        texture: { name: "bucket_ink", meta: 0 }
    },
    uiTextures: ["liquid_ink"]
});
```

This will create a flowing and still liquid block, and also add a fully functional bucket to be used by the player and poured using dispensers. For the latter, the functions [Item.setLiquidClip](/api/namespace/Item#setLiquidClip) and [Item.registerDispenseFunction](/api/namespace/Item#registerDispenseFunction) are involved.

<details>
    <summary>Standards for creating localization</summary>
<div>

Translations of liquids are created both for the liquid block itself and for the bucket placing it. The general format of translations is no different from the rest:

```js
Translation.addTranslation("Ink", {
    en: "Ink",
    ru: "Чернила"
});
Translation.addTranslation("Bucket of Ink", {
    en: "Bucket of Ink",
    ru: "Ведро чернил"
});
```

In addition to translating the block itself, this will also set the translation in the interface, for example in the Recipe Viewer mod. Don't forget about translations, they are as important as all the added content.

</div>
</details>

## Other features

Any interactions with liquids must be handled by the developer, there are no specific events or recommendations here. Consider [LiquidRegistry](/api/namespace/LiquidRegistry) for details.

### Additional properties

Let's start with additional properties. First of all, liquids form their own settings of a special type, modifying the same last argument of block registration. To be more specific, liquids have the following standard settings:

```js
{
    renderlayer: EBlockRenderLayer.BLEND,
    rendertype: 4,
    material: 5 // if base is not set
}
```

These properties are set if not defined in the object describing the additional properties, their use is optional. A distinctive feature of liquid registration is the inability to use additional properties by identifier. They must be passed directly as an object.
