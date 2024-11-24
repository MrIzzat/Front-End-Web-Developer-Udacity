# Routes: POST Requests

HTTP **POST** requests cans cbe used to collect and store user data to be accessed later on. Like the `.get()` function, there is the `.post()` function. An HTTP POST request can be used to send data to a project's endpoint where it can be stored and later accessed by a GET request.

An example of a simple POST request in Express using the `.post()` function is:


```js
app.post('/', (req, res) =>{
    res.send('POST received');
})
```

Another example:


```js

const data = [];

app.post('/addMovie', addMovie);

function addMovie(req, res){
    console.log(req.body);
    data.push(req.body);
}
```