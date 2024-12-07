# nernar.github.io

Inner Core, Core Engine and Horizon documentation implemented in one place. Make it simple, keep it clean. This site powered by GitHub Pages, built with :heart: and Docusaurus.

## Setting up

+ [Node.js](https://nodejs.org/en/download/) version 16.14 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed.
  + When installing Node.js, you are recommended to check all checkboxes related to dependencies.

Once *npm* installation is complete (comes with Node), don't forget to install project dependencies by opening console in downloaded repository folder:

```shell
npm install && npm run build-serve
```

## File structure

This site is built on Docusaurus and is completely dependent on its structure, and therefore we recommend that you start familiarizing yourself with site files using [Docusaurus guides](https://docusaurus.io/docs/category/guides).

If you're ready to start working on documentation without this or have already studied generator we're using, let's look at what files we'll need.

### Pages, docs and libraries

In total, structure is subdivided into several main folders for needs of different articles: *docs* (main documentation), *libraries* (documentation of individual libraries), *api* (reference engine methods and libraries), and all other pages with a simple structure in *src/pages*.

### Documentation structure

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

There are two main folders: *docs* folder contains main documentation files, and *i18n/<language>/docusaurus-plugin-content-docs/current* folder contains translations for them. Paths coincide, you can expand list of articles very easily with *sidebars.json*. It contains a list of paths to determine order of articles in sidebar. Articles don't have to be in it, but in most cases it is preffered way for a user to open a piece of documentation.

Also, if you need to add an image, file, or any other data (preferably placing large files on disks), you can use *static* folder. In this case, full path from beginning of this folder is specified in article, for example `![velocity.gif](/images/entities/velocity.gif)`.

### Library documentation structure

```text
.
├─ libraries
│  └─ ...
├─ i18n/<language>
│  └─ docusaurus-plugin-content-docs-libraries
│     ├─ current
│     │  └─ ...
│     └─ current.json
├─ static
│  └─ images
│     └─ ...
└─ libraries.js
```

Repeats structure of [main documentation](#documentation-structure), except for folder names (instead of *docs*, *libraries* is used, and so on).

### Reference structure

```text
.
└─ api
   ├─ core-engine
   │  │ Block.d.ts
   │  └─ ...
   ├─ libraries
   │  │ BlockEngine.d.ts
   │  └─ ...
   └─ ...
```

API references contain both engine methods and library methods at same time. This is extremely convenient, because it allows you to see classes in other mods that implement this or that feature right away in generated reference. Engine methods are located in *core-engine* and are split into a large number of files, while *libraries* contains separate files for each library. New declarations can be added or updated without changing configuration, it is very convenient for modders.

## Contribution

Request PRs for `master` branch, *NEVER* commit to `deploy`. Docusaurus should be built successfully to being reviewed, your changes may also require some additional tunings before merging.
