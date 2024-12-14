If a custom function is created in one JavaScript File and it is needed in an other JavaScript file, the needed function can be exported using:

```js
module.exports = {function}
```

and imported into the file using:

```js
const {function} = require("{fileName}")
```

[More About Exporting](https://www.w3schools.com/js/js_modules.asp)



If an item is imported more than once, it will only be evaluated once, meaning only one instance will be used when imported. The second time is, its evlauation will be skipped.

[Importing More Than Once](https://dmitripavlutin.com/javascript-module-import-twice/)

In order to have multiple instances of the same module, a different way of exporting is required, where the exported module can be used to create instances of the required module. A great way to do this is wayt the singleton pattern. In other words, the instance of the module that is exported can be used to generated more instances of the module. [See Here For More Information](https://stackoverflow.com/questions/28833808/how-to-get-multiple-instances-of-module-in-node-js)