# nernar.github.io

Inner Core, Core Engine and Horizon documentation implemented in one place. Make it simple, keep it clean. This site powered by GitHub Pages, built with :heart: and Docusaurus.

## Setting up

+ [Node.js](https://nodejs.org/en/download/) version 16.14 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed.
  + When installing Node.js, you are recommended to check all checkboxes related to dependencies.

```shell
npm install && npm run build-serve
```

Additionally, API Reference also may builded with same way after running in **api**:

```shell
npm install && npm run build:docs
```

But it requires lot of time and highly recommended test local builds with `npm run start`.

## Documentation

I mean modding documentation for Inner Core of course, rewrited from zero to TypeScript with exclusive new features. At beginning, it located by few locations: **docs** where everything starts, **i18n** where localization performs and **static** where additional files is located.

```text
.
├─ docs
│  └─ ...
├─ i18n/<language>
│  └─ docusaurus-plugin-content-docs
│     ├─ current
│     │  └─ ...
│     └─ current.json
├─ static
│  └─ images
│     └─ ...
└─ sidebars.js
```

Everything divided by categories, which also represents sidebar structure. Every markdown location described in **sidebars.js**, you can use it for auto-generation or manually provide required routes.

## API Reference

New era of Core Engine documentation, generated into single webpage like everything here. Forked also in [Nernar/innercore-docs](https://github.com/Nernar/innercore-docs) from [mineprogramming/innercore-docs](https://github.com/mineprogramming/innercore-docs). See [LICENSE](./LICENSE) for licensing information about this portion of the documentation.

You can also download [core-engine.d.ts](https://nernar.github.io/core-engine.d.ts) directly.

## Modding Examples

Here represented most of legendary Core Engine mods with unique mechanics, that you can freely take into your content.

## Libraries freely to use

Repository of external documentation, here modders alives.

## Contribution

Is not availabled right now, please wait before most part will be documented. Any PRs will be rejected.
