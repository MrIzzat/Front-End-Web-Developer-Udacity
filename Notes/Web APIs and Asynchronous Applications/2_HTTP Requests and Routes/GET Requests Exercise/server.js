const express = require("express");

const app = express();

let projectData= {};

port=8000;

const server = app.listen(port,
(event) => console.log(`Server is running
now Listening on port ${port}`));



app.get("/all",function(req,res){
    res.send(projectData);
})