var path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname,'../../dist')))

console.log(__dirname)

// app.get('/', function (req, res) {
//     res.sendFile('dist/index.html')
// })

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send("TEST")
})
