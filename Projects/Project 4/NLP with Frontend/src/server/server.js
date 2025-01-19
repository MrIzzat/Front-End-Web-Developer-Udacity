const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");


dotenv.config();

const app = express();

const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../../dist")));

const port = 8081;

app.listen(port, serverStart(port));

function serverStart(port){
  console.log(`Server is running on port: ${port}`);
}

app.post("/api", async (req, res) => {
  const url =  await req.body.formText;

  let formData = new FormData();
  formData.append("key", process.env.APP_KEY);
  formData.append("url", url);
  formData.append("lang", "en");

  const requestOptions = {
    method: "POST",
    body: formData,
    redirect: "follow",
  };

  const response = fetch(
    "https://api.meaningcloud.com/sentiment-2.1",
    requestOptions
  )
    .then(async (response) => ({
      status: response.status,
      body: await response.json(),
    }))
    .then(({ status, body }) => {
      res.send(JSON.stringify(body));
    })
    .catch((error) => console.log(`Text Analysis API Error: ${error}`));
});


module.exports = {serverStart}