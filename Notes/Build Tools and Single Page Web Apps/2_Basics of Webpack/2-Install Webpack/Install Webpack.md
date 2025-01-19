The next step is to download the second branch `1-install-webpack` from [the repo](https://github.com/udacity/fend-webpack-content/tree/1-install-webpack)

Next, the dependencies in the `package.json` file need to be installed. They can be installed with the command `npm install`, or `npm i` for short. Webpack will be contained as: `"webpack": "^4.35.3"` and `"webpack-cli": "^3.3.5"`. It should look something like this:
```json
"dependencies": {
    "express": "^4.17.1",
    "webpack": "^4.47.0",
    "webpack-cli": "^3.3.12"
},
```

Inside the `scripts` property in the `package.json` file, the following property should be added within it: `"build" : "webpack"`. It should look like this:

```json
"scripts": {
    "build": "webpack"
},
```

Inside the `devDependencies` property in the `package.json` file, the following property should be added: `"webpack-dev-server": "^3.11.0"`. It should look something like this:

```json
"devDependencies":{
    "webpack-dev-server": "^3.11.0",
},
```

A `webpack.config.js` file needs to be created and placed in the root location of hte project. The following `require()` statements and black `module.exports` object need to be added in it:

```js
const path = require("path")
const webpack = require("webpack")
module.exports = {
}
```

The `module.exports` will be populated in the next step.

When the command `npm run build` is executed, an error will appear because the config file is still "empty".

See `Some Basics of webpack.md`.cd 

