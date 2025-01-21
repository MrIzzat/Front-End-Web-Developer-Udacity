# Clearn Webpack Plugin

This plugin automatically cleans out the `dist` folder after every run.

Add the clean HTML library to the development config file.
```bash
npm i -D clean-webpack-plugin
```
Import it: (needs to be that exact same spelling)

```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
```

Add to the Plugins section:
```js
plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html",
    }),
    new CleanWebpackPlugin({
        // Simulate the removal of files
        dry: true,
        // Write Logs to Console
        verbose: true,
        // Automatically remove all unused webpack assets on rebuild
        cleanStaleWebpackAssets: true,
        protectWebpackAssets: false
    })
    ]
```

# Webpack dev server

This library allows for restarting automatically of the dev server.

Add the `webpack-dev-server` library:

```bash
npm i -D webpack-dev-server
```

In the `package.json` file:

```JSON
"build-dev": "webpack-dev-server --config webpack.dev.js --open"
```

To the `build-dev` script in `package.json`.


# Source map

This generates a map file that shows how the `dist` JavaScript is linked to the `source` JavaScript.

Add:

```js
devtool: "source-map",
```

To `module.exports`