# Routes: GET Requests

A server receives a request, process them then returns a response. Routes are used to handle these requests.


The new most common forms of requests are **GET** and **POST** requests.

The GET request gets data and the POST request sends data securely.


Express has methods that define routing. These methods respond directly to HTTP methods.

A basic example of an Express Route:

```js
const express = require('express');

const app = express();


app.get("/", function(req,res){
    res.send("hello, world!");
});
```

The `get()` method takes two arguments. The first argumetn is the relative url path. The second argument it takes is a function that contains two arguements for the request and the response. Inside the function, the `res.send()` function is used to send data to the client.