const express = require('express');

const app = express();


const port = 8000;
const server = app.listen(port, listener);

function listener(){
    console.log('Server is Running');
    console.log(`running on localhost:${port}`);
}