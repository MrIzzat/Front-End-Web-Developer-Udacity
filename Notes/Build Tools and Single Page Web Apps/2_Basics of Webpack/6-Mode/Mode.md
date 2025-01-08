Mode refers to selection of environment for the code, as in development or production.


Utilizing mode allows for running certain plugins and loaders for specific environments.

Two configuration files can be created, one for each mode.

Having it be in one single file will require if statements that check the mode before utilizing certain plugins or loaders etc.

For example:

```js
module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}
```


```js
module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}
```


To run webpack based a certain config file, the `--config` argument can be added in the CLI.

```bash
webpack --config webpack.prod.js
```

Usually, it's best to add it as a shortcut in the `scripts` in the `package.json` file.

For example:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/server/index.js",
    "build-prod": "webpack --config webpack.prod.js",
    "build-dev": "webpack --config webpack.dev.js"
  },
```