const express = require('express');

const app = express();

const port = 8000;

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors);
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());


app.use(express.static('static'));

const server = app.listen(port, listener);

function listener(){

    console.log("Server is Running");
    console.log(`Listening on port:${port}`);
}