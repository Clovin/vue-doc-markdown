# vue-doc-markdown
> A Vue.js scaffold for write documentation using markdown.

## Documentation
- This template builds on top of the main webpack template, so please refer to the <a href="http://vuejs-templates.github.io/webpack/">webpack template docs</a>.
- Check out the <a href="https://vuejs.org/v2/guide/">official Vue.js guide</a> for general information about Vue that is not specific to this template.

## Usage

This is a project template for <a href="https://github.com/vuejs/vue-cli">vue-cli</a>. It is recommended to use npm 3+ or yarn for a more efficient dependency tree.

```text
$ npm install -g vue-cli
$ vue init Clovin/vue-doc-markdown my-project
$ cd my-project
$ npm install
$ npm run dev
```

If port 8081 is already in use on your machine you must change the port number in `/config/index.js`. Otherwise `npm run dev` will fail.

### How to add a new page in your documentation

1. Add a new markdown file in `src/pages`.
2. Add router config in `src/router/index.js`.
3. Add nav config in `src/nav.config.json`.
   
   Tip: The nav config's name should not too long. If you need a long name, you can change the CSS.

### How to build your documentation

1. Run `npm run build`, and see the `dist` folder.
