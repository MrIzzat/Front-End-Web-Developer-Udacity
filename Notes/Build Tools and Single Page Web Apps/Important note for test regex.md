There may be a mistake in some of the example projects where the test cause regex is written in a quotation `''`. It should not be written in a quotation.


For example:

```js
rules: [
    {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: "babel-loader"
    }
]
```

The above code is incorrect, instead it should be:


```js
rules: [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
    }
]
```

The above code here is correct.