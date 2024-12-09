The following codes can be used to simulate how GET requests work with real APIs:


Client code:
```js


let baseURL = 'http://api.animalinfo.org/data/?animal=';
let apiKey = '&appid=9f15e45060...';// An example of how credentials might look like

document.getElementById('generate').addEventListener('click', performAction);// To dynamically get the query value based on user input

function performAction(event){
    const newAnimal = document.getElementById('animal').value;
    getAnimal(baseURL, newAnimal, apiKey);
}

const getAnimal = async (baseURL, animal, key) => {
    // const res = await fetch(baseURL+animal+key);
    const res = await fetch("/fakeAnimal");
    try{
        
        const data = await res.json();
        console.log(data);
        return data;
    }
    catch (error){
        console.log(`Error: ${error}`);
    }
}
```

Server code:

```js
const path = require("path");

/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static(path.join(__dirname,'/website')));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

// GET route
app.get('/all', sendData);

function sendData (request, response) {
  response.send(projectData);
};

// POST route
app.post('/add', callBack);

function callBack(req,res){
  res.send(JSON.stringify('POST received'));
}

// POST an animal
const data = [];

app.post('/animal', addAnimal);

function addAnimal (req,res){
    data.push(req.body);
};


const fakeAnimals = {animal: "Lion", age:1000};

app.get("/fakeAnimal", (req, res) => {
  res.send(JSON.stringify(fakeAnimals));
})
```