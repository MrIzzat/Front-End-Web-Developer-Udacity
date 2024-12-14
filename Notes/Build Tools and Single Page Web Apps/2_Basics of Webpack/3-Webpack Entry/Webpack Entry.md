The next step is to download the second branch `2-add-webpack-entry` from [the repo](https://github.com/udacity/fend-webpack-content/tree/2-add-webpack-entry)

As mentioned in `Some Basics of webpack.md`, THe default location for the webpack entry point is `index.js`, specifically `./src/index.js`. Because the the website is already set up with express, the file sturucture is different so that file does not exist.

Inside the webpak configuration file `webpack.config.js`, the new entry point can be added as follows:

```js
module.exports = {
    entry = './src/client/index.js'
}
```

If the Node.js version that is being used is 17 or higher, the `webpack` and `webpack-cli` packages in the `package.json` file need to have their version changed to `5.61.0` and `5.0.0` respectively, then the `npm i` command executed.

The webpack script can be run by doing `npm run build`. It fully work quite yet as there ae some additional configurations that are needed.

When the webpack script is ran for the first time, it creates a new `dist` folder. Inside it, there is a new `main.js` file. *I believe this `main.js` file is the single file output that is created by webpack that combines all of the project dependencies into (bundled into).*