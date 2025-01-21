The next step is to download the second branch `2-webpack-output-and-loaders` from [the repo](https://github.com/udacity/fend-webpack-content/tree/3-webpack-output-and-loaders)

So far, webpack can only go so far as the create the `dist` folder with the `main.js` file. The server still functions exactly as it normally does but the `main.js` file does not contain any other asset written for the webpage.

The next step is to customize the `output` of the webpack, which is the distribution folder `dist`. The `dist` folder is where webapck generates or "outputs" the bundles of assets that it creates from all the individual files.

The output destination can be set manually using the `output` property, like this:

```js
output: { ...output options }
```

The source folder `src` is the folder that contains all the assets the developer builds. The distribution folder `dist` contains all of the assets that will be sent to the client. In other words, the webpage that is loading on the client's side is referencing the `dist` folder and not the `src` folder.

Changes made to files in the `dist` folder will appear to the user but will be overwritten when the source files are rebuilt if these changes are not also done in the source files.

Changes made to files in the source folder will not appear to the user until the source files are built into the `dist` folder.

So far, the `main.js` file has been generated, but it's not being used by anything. All the useful JavaScript and CSS files are being referenced and used in `index.html`. These should no longer be referenced in the `index.html` as they'll all be bundled. The `index.html` file just needs one reference, to the `main.js` file:

```html
<head>
    <script src="../../../dist/main.js"></script>
</head>
```

This hardcoded reference is just temporary and will be gotten rid of as there is a better way to reference the generated bundle.


Another issue is that `main.js` is still empty, because the `index.js` is not taking in any of the source JavaScript files. For this step, there are two example JavaScript files provided that should be attached to the `index.js` files, `formHandler.js` and `nameChecker.js`.

Usually, the files could just be grabbed using `require()`, but since `require()` cannot be used in anything pre ES6, if used, some modules that use old JavaScript versions (pre ES6) and browsers that don't support ES6 will not be able to run the JavaScript properly.

The **Babel** build tool can be used to allow for importing of other JavaScript files into `index.js` while making it compatible with pre ES6 processes. Babel takes code written in ES6 or greater and converts it to pre ES6 compatible code and allows the browser to run that code. In other words, Babel allows developers to write code using ES6 syntax but allows the browsers to execute code from a different JavaScript version, usually pre ES6 due to compatibility issues.

Even though most browsers nowadays support ES6 and Babel is not needed in every case, some modules are built on JavaScript that doesn't work in ES6+ and will have issues if not imported with Babel. Babel is also used a lot in React.

The following command can be used to install Babel:

```bash
npm i -D @babel/core@^7.5.4 @babel/preset-env@^7.5.4 babel-loader@^8.0.6
```

The `-D` argument is to specifiy that a package is being installed in development, not for production. The package does not need to served to the user.

Babel, like webpack, needs a configuration file, called `.babelrc`. It requires the following configuration:

```json
{
    "presets": ["@babel/preset-env:"]
}
```

Now the JavaScript files can be imported into `index.js` using babel while maintaing the ES6+ syntax.

In the `index.js` file, they can be imported like this:

```js
import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

console.log(checkForName);
```

The `checkForName` and `handleSubmit` variables that are being imported are actually functions in those two JavaScript files. While the `import from` keywords are being used in the `index.js` file, the `export` keyword has to be used in the JavaScript files to be imported so that it is specified what function needs to be exported:


For example in the `forHandler.js` file, the `handleSubmit()` function is exported as follows:

```js
function handleSubmit(event) {
    .
    .
    .
    .
    .
}

export { handleSubmit }
```

The same thing is done for the `checkForName()` function in the `nameChecker.js` file.

Something can't be imported if it has not been exported.


In order for Babel to able to be used in webpack, it must be added as a loader in the webpack configuration file. Webpack uses loaders and plugins to acheive the bundling of the assets. A loader as added as rule into the `module` property in `module.exports`. Adding babel would look like this:

```js
module.exports = {
    entry: './src/client/index.js',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}
```

The `loader` property specifies that it should use the `"babel-loader"`.

The `test` property is used to specify the type of file the loader should be used on using a regEx. `'/\.js$/'` means look for anything that ends in `.js`. It basically looks for any files that end with `.js` in the dependency tree and runs them through the babel loader.

Rerunning the `npm run build` command will show the new JavaScript files.

When a file is imported into `index.js`, it becomes a dependency for that file. If that file contains any imports, then those imported files also become dependencies. Webpack will search through the files starting with `index.js` for dependencies to add to the dependency tree.