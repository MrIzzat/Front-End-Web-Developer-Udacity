This can be managed by setting up the `nodemon` package. Then, setting it up in the `package.json` to know where the `server.js` file is.

In the `scripts` property in the `package.json` file, the following script can be added:

```json
"scripts":{
    "start:dev" : "nodemon server.js"
}

```

It can be used in the terminal with the following command:

```bash
npm run "start:dev"
```


This package is not setup in this lesson.