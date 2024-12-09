On larger scale projects, managing different libraries and files becomes a lot more complex than on a small project where there is only 1 HTML, 1 CSS file and 1 JavaScript file.

Build tools, like webpack, are very useful for helping the developer to manage these.

A good formal definition for build tools is they allow developers to automate their process of handling website assets, which saves them a lot of time and effort.


Some example of build tools are: Grunt, Bower, Gulp, Brunch, webpack, etc.

![](./Build%20Tools.png)


`npm` scripts are simple example of asset managment for a project.

`Grunt` and `Gulp` allow for the writing of simple rules to manage all of the assets in a specific way. They're pretty easy to set up.

`webpack` is JavaScript based. It's used in the creat react web app tool.

Webpack is becoming the most common build tool with Grunt and Gulp also being common options, they are basically simpler options to webpack as they don't contain all the functionality of webpack.

Build tools combines all the assets int oa single or a few files instead of many files. Rules can be set for the build tool to follow that specifies how it should handle each type of asset, it then takes all the assets and bundles them into a single large file. Usually files with names like bundle or main are the result of a build tool combining many assets into one.


Rules for build tools are written into config files. An example of a webpack config file is as follows:


```js 
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
       rules: [
          {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
          },
          {
                test: /\.html$/,
                use: [{ loader: "html-loader"}],
                },
                {
                    test: /\.scss$/,
                    use: [ 'style-loader', 'css-loader', 'sass-loader' ]
                }
       ]
 },
  plugins: [
    new HtmlWebPackPlugin({
           template: "./src/html/index.html",
           filename: "./index.html",
    })
  ]
}
```

