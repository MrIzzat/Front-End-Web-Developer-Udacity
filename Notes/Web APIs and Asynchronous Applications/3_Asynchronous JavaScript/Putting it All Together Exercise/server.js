projectData = {};

const path = require("path");

const express = require('express');

const app = express();


const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname,"/website")));

const port = 8000;


const server = app.listen(port, listening);


function listening(){
    console.log(`Running On Port ${port}`);
}

app.get("/all", sendData);

function sendData(request, response){
    response.send(data);
}

app.post("/add", callBack);

function callBack(req, res){
    res.send('POST received');
}

const data = [];

app.post('/animal', addAnimal);

function addAnimal(req, res){
    console.log(`Received : ${JSON.stringify(req.body)}`)
    data.push(req.body);
}

