# Creating a Local Server with Node an Express

Usually, the first thing that is done in a Node Express environment is to create a simple local server that allows an app to run locally in a browser. A server receives and processes requests then returns a response.

Some basic code that can be used to create and run a local server in Node Express:


```js
const express = require('express');

const app = express();


const port = 8000;
const server = app.listen(port, listener);

function listener(){
    console.log('Server is Running');
    console.log(`running on localhost:${port}`);
}
```

The `app.listen()` function takes a port and a callback function that is run after the function is executed.

The code can be test in `server.js`. *Note it still needs routing to work as expected*


A more realistic version of server code can be found in `FullServer.js`.