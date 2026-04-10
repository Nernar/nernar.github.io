# Ore with Manual Generation

Usually, ore generation comes down to a couple of methods, but it is limited by the shape and method of generation. We will use the built-in generator, consider options for creating our own generators and generate several shapes.

## Built-in generator

Any generation comes down to finding a suitable surface, checking conditions and placing blocks itself.

### Filters

The built-in generator provides the ability to select the blocks on which generation can be performed. By default, any ore is generated in stone, or regardless of whether there are any blocks at the placement location.

## Randomization methods

Usually come down to several options, in increasing order of complexity:

1. Pseudo-random generation, not tied to a seed
2. Pseudo-random generation by seed
3. Using various noise maps

## Seed dependency

The randomization method in the example with the built-in generator is reduced only to pseudo-random generation without a seed. It is suitable for most cases, but is not preferable from the point of view of in-game mechanics. Using seeds will allow you to get identical generation results, provided that the sequence remains the same. For this reason, most of the content in the game remains in the same place when generated again with the same seed.

:::tip Pseudo-random generation

Interested in creating a sequence of such numbers? Consider the [breakdown of pseudo-random number generation algorithms](https://habr.com/ru/companies/vk/articles/574414) for details, this is an integral part of all programming in general.

:::

## Noise maps

```mdx-code-block
import NotImplemented from "@site/src/components/NotImplemented"

<NotImplemented />
```

## Additional conditions

Regardless of the generation method, customizing the conditions for generation remains on your shoulders. It is important to know that the generator must not create excessive loads and must use the most efficient methods for this.

```mdx-code-block
<NotImplemented />
```
