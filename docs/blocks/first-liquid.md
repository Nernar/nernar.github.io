# First Liquid

Liquids are blocks that spread over a plane, which usually make it difficult for creatures to move through them and form currents. In-game liquids include water and lava.

## Currents and Flows

Before creating a block, or rather a pair of blocks, let's look at how liquids work in practice. Any liquid from the beginning of its flow forms a current within a radius of 15 blocks (including the flow itself).

<!-- TODO: ![liquid.gif](/images/blocks/liquid-principles.png) -->

Over the specified period of time, the liquid spreads evenly in all directions exactly one block. We call a liquid a pair of blocks — still and flowing. The main one for the game is the latter, while the first one denotes the source (flow), and is used in generation and other scenarios, remaining purely technical.

## Let's Register a Block

Only one complex function is responsible for registering liquids:

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

This will create flowing and still liquid blocks, as well as add a fully functional bucket for player use and dispensing via dispensers. For the latter, the functions [Item.setLiquidClip](/api/namespace/Item#setLiquidClip) and [Item.registerDispenseFunction](/api/namespace/Item#registerDispenseFunction) are involved.

<details>
    <summary>Standards for creating localization</summary>
<div>

Liquid translations are created for both the liquid block itself and the bucket that places it. The general translation format is no different from the rest:

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

In addition to translating the block itself, this will also set the translation in the interface, for example in the Recipe Viewer mod. Do not forget about translations, they are as important as all added content.

</div>
</details>

## Other Capabilities

Any interactions with liquids must be handled by the developer, there are no specific events or recommendations here. Consider [LiquidRegistry](/api/namespace/LiquidRegistry) for details.

### Additional Properties

Let's start with additional properties. First of all, liquids form their own special type settings, changing the same last argument of block registration. To be more specific, liquids have the following standard settings:

```js
{
    renderlayer: EBlockRenderLayer.BLEND,
    rendertype: 4,
    material: 5 // if base is not set
}
```

These properties are set if not specified in the additional properties description object, their use is optional. A distinctive feature of liquid registration is the inability to use additional properties by identifier. They must be passed directly as an object.
