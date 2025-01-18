A production configuration is used to try to optimize a website as best as possible.

A website can be slow due to lots of styles, JavaScript and big images.

Webpack automatically does some optimization with the JavaScript by default.

A minifying CSS extract plug in can be used to minify the CSS used in the front end.

Minifying means reducing the CSS or compressing the CSS.


These packages should be installed for production:

```bash
npm install --save-dev mini-css-extract-plugin terser-webpack-plugin@5 css-minimizer-webpack-plugin
```

# Mini CSS Extract Plugin

The Mini CSS Extract plugin can be configured in the webpack production configuration file by firstu importing it:

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
```

Then adding it to the rules in `module.exports`, it searches for Sass files:

```js
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.scss$/,
            use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
        },
    ]
},
```

Finally, an instance of it should be created for the plugins section in `module.exports`:

```js
plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html",
        publicPath: "/"

    }),
    new MiniCssExtractPlugin({filename: '[name].css'})
]
```

The Mini CSS Extract plugin will extract all CSS in the project to a single CSS file in the `dist` folder, it's human readable.

# Terser and Optimize CSS Assets

In order to compress the CSS further, the Terser and Optimize CSS Assets Plugins can be used.


They can be imported as normal:

```js
const OptimizeCssAssetsPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
```

But they are added in a new section of `module.exports` called `optimization`:

```js
module.exports = {

    entry: './src/client/index.js',
    mode: 'production',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCssAssetsPlugin({})]
    },
```

The new generated CSS is less human readable, all the CSS is just on one line.
