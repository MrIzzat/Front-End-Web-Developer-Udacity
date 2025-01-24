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



const geoNamesBaseUrl = "http://api.geonames.org/postalCodeLookupJSON?username=mrizzat&placename="

const getGeoName = async (url="") => {
    const response = await fetch(url).then( async (data) => {
         const response = await data.json();

         if(response.postalcodes.length>0){
            console.log(response.postalcodes[0]);
            return response.postalcodes[0];
         }else{
            return "no data"
         }

    }).catch( (error) => {console.log(`Geonames API Error: ${error}`); return "error"})
}


getGeoName(`${geoNamesBaseUrl}paris`)