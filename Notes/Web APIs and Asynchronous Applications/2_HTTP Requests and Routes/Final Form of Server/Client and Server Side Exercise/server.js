const path = require('path');


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
app.use(express.static(path.join(__dirname, '/website')));

// app.use(express.static("website")); //Doesn't work  for nested website folder


const port = 8000;
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
  res.send('POST received');
}

// POST an animal
const data = [];

app.post('/addAnimal', addAnimal);

function addAnimal (req,res){
    res.send(JSON.stringify("Animal Received"));
    data.push(req.body);

    console.log(data);
};


//# Debugging some issues with the routing

// app.get('/', (req, res) => {
//     const fileDirectory = path.resolve(__dirname, '.', './website');

//     console.log(fileDirectory);
    
//     res.sendFile('index.html', {root: fileDirectory}, (err) => {
//       res.end();
  
//       if (err) throw(err);
//     });
// })

// app.get('/app.js', (req, res) => {
//     const fileDirectory = path.resolve(__dirname, '.', './website');

//     console.log(fileDirectory);
    
//     res.sendFile('app.js', {root: fileDirectory}, (err) => {
//       res.end();
  
//       if (err) throw(err);
//     });
// })