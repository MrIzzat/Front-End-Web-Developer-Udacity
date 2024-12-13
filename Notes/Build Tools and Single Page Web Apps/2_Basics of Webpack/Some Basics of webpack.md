The informaton here is from the `install webpack` lesson.

A unique aspect of webpack is that it builds a dependency tree, something that many other build tools don't do.

The dependency will start in one file and as webpack goes through that file, it will install dependencies of that file. For example, if webpack starts in an HTML file and it sees that it requires a CSS file, it will move to the required file and look in it for dependencies. As it goes through this process, it builds a tree also known as a dependency tree.

Other build tools just run rules instead of doing something as sophistaced as building a dependeancy tree.

Webpack has the knowledge of the entire file structure of a project.

In order for webpack to working, it will need a starting place. The starting place is called the **entry**. Webpack 4 creates a default setting for all of the required webpack configurations. In the default settings, the entry point is set to `index.js`.

To set a custom entry point (or any other custom configurations), the `webpack.config.js` can be used to change the default webpack setup.

The Core Concepts in web pack are:

* **Entry**
* **Output**
* **Loaders**
* **Plugins**
* **Mode**