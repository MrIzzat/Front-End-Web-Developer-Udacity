const path = require("path")
const express = require("express")
const app = express();
const cors = require("cors");

const port = 8000


app.use(express.static(path.join(__dirname,"../../dist")))


app.use(express.urlencoded({ extended:false }))
app.use(express.json())

app.use(cors());


const server = app.listen(port, () => console.log(`Server is running on port ${port}`))
