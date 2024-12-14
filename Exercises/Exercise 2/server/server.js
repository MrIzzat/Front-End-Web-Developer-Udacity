const path = require("path")

const express = require("express")
const app = express()

app.use(express.static(path.join(__dirname,'../client')));


const port = 9009
const toSend = {"title": "Express" ,"id" : 2}

app.listen(port, () => console.log(`Running on port ${port}`))

app.get("/",(req, res)=>{
    res.send("Hello")
})


app.get("/details",(req, res)=>{
    res.send(JSON.stringify(toSend))
})