The `package.json` file can contain a `script` property. The script property can contain refrences to many different scripts. A script declared in the `package.json` file can be executed by doing `npm run {scriptName}`.

Example usage of the `script` property:

```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/server/index.js",
    "build": "webpack"
  },
```