Plugins can be used for a wider range of tasks than loaders such as bundle optimization, asset management and even injection of environment variables.

It can also be used for automatically addin asset references into an html file.

The `html-webpack-plugin` does this.


It can be installed using

```bash
npm i -D html-webpack-plugin
```

First the plugin needs to references in the webpack config file:

```js
const HtmlWebPackPlugin = require("html-webpack-plugin")
```


The plugin should be added to the `module.exports` as a new entry called `plugins`.

```js
plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html",
    })
]
```
This basically tells plugin look for the original `index.html` and rebuild it. This makes it so the client JavaScript file no longer needs to be hardcoded.