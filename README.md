# nernar.github.io

Inner Core, Core Engine and Horizon documentation implemented in one place. Make it simple, keep it clean. This site powered by GitHub Pages, built with :heart: and Docusaurus.

## Setting up

+ [Node.js](https://nodejs.org/en/download/) version 16.14 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed.
  + When installing Node.js, you are recommended to check all checkboxes related to dependencies.

```shell
npm install && npm run build-serve
```

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

New era of Core Engine documentation, generated into single webpage like everything here. See [Nernar/API](https://github.com/Nernar/API) repository for details.

## Modding Examples

Here represented most of legendary Core Engine mods with unique mechanics, that you can freely take into your content.

## Libraries freely to use

Repository of external documentation, here modders alives.

## Contribution

Request PRs for `master` branch, *NEVER* commit to `deploy`. Docusaurus should be built successfully to being reviewed, your changes may also require some additional tunings before merging.
