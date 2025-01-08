```js
module: {
    rules: [
        {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
        }
    ]
}
```


Loaders allow the transforming of files from one type into another type so that webpack can work with them.

Since webpack only understands JavaScript and JSON files, webpack requires laoders to process other types of files to convert them to a valid module that can be used by an application.

The `rules` property contains all the loaders. Each loader specifies what types of files it will run on based on a regex. 

To prevent the loader from running files outside of the loader, the `exclude` property is used to exclude those files. 

The `loader` property is just to name the loader that will run on the selected files. *I think it just names the loader*

