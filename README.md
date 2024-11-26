# nernar.github.io/api

Inner Core, Core Engine and Horizon documentation implemented in one place. This site subdomain is powered by GitHub Pages, built with :heart: and [Typedoc](https://typedoc.org).

> [!CAUTION]
> Repository has been been moved as subtree to [Nernar/nernar.github.io](https://github.com/Nernar/nernar.github.io), since Typedoc build now takes place using Docusaurus plugin and this repository is no longer relevant.

## Setting up

+ [Node.js](https://nodejs.org/en/download/) version 16.14 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed.
  + When installing Node.js, you are recommended to check all checkboxes related to dependencies.

```shell
npm install && npm run typedoc
```

## Contribution

Request PRs for `master` branch, *NEVER* commit to `deploy`. Typedoc should be built successfully to being reviewed, your changes may also require some additional tunings before merging.
