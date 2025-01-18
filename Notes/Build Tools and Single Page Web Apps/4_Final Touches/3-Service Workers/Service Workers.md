Service workers are JavaScript code that run in between the web application and the internet that run in the background.

They can be used to offer certain features like push notifications or offline content.

They are often mentioned alongside progressive web apps, websites that feel like a mobile application.

How they work is they basically store a cached version of the website that they supply if the server can't be reached.

Service workers can be installed with:

```bash
npm install workbox-webpack-plugin --save-dev
```

It should be added to the production build rather than the dev build.


In the production configuration file, this should be added:
```js
const WorkBoxPlugin = require('workbox-webpack-plugin')
```

And in the Plugins section:
```js
plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html",
        publicPath: "/"

    }),
    new MiniCssExtractPlugin({filename: '[name].css'}),
    new WorkBoxPlugin.GenerateSW()
]
```

Finally, this script should be added into the HTML:
```html
<script>
    // Check that service workers are supported
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js');
        });
    }
</script>
```