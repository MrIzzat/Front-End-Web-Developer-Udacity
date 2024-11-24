const express = require('express');

const app = express();


const port = 8000;

const server = app.listen(port,() => console.log(`Server is Running on port ${port}`));

app.post('/add',(req, res)=>{
    res.send("POST received");
});

const data = [];

app.post('/animal', (req, res)=>{
    data.push(req.body);
})