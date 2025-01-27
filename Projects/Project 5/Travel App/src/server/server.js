const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");

const port = 8000;

//Base urls
const geoNamesBaseUrl =
  "http://api.geonames.org/postalCodeLookupJSON?username=mrizzat&placename=";

const pixabayBaseUrl =
  "https://pixabay.com/api/?key=48484558-369809ba183225ac5de874fba&image_type=photo&pretty=true&q=";

const cityWeatherBaseUrl =
  "https://api.weatherbit.io/v2.0/forecast/daily?key=f4a08d4848264b99b65b143c1ad6e703";

app.use(express.static(path.join(__dirname, "../../dist")));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);

app.get("/getImage", async (req, res) => {
  const apiResponse = await getCityImage(
    `${pixabayBaseUrl}${req.query.cityName}`
  );

  console.log(`API Response: ${apiResponse}`);

  if (apiResponse === "no data") res.status(404).send("Not found");
  else res.send(apiResponse); //send back image URL
});

app.get("/getWeather", async (req, res) => {
  const apiResponse = await getGeoName(
    `${geoNamesBaseUrl}${req.query.cityName}`
  );

  if (apiResponse === "no data") res.status(404).send("Not found");
  else if (apiResponse === "error") {
    res.status(500).send("Problem with geo location API");
  } else {
    const weatherData = await getCityWeather(
      `${cityWeatherBaseUrl}&lat=${apiResponse.lat}&lon=${apiResponse.lng}`
    );

    res.send(
      JSON.stringify({
        high_temp: weatherData.high_temp,
        low_temp: weatherData.low_temp,
        weather_description: weatherData.weather.description,
      })
    );
  }
});

//Helper functions

//Geo name helper function
const getGeoName = async (url = "") => {
  const response = await fetch(url)
    .then(async (response) => {
      const data = await response.json();

      if (data.postalcodes.length > 0) {
        console.log(data.postalcodes[0]);
        return data.postalcodes[0];
      } else {
        return "no data";
      }
    })
    .catch((error) => {
      console.log(`Geonames API Error: ${error}`);
      return "error";
    });

  return response;
};

// getGeoName(`${geoNamesBaseUrl}paris`)

//City Weather helper function

const getCityWeather = async (url = "") => {
  const response = await fetch(url)
    .then(async (response) => {
      const data = await response.json();

      if (data.data) {
        console.log(data.data[0]);
        return data.data[0];
      } else return "no data";
    })
    .catch((error) => {
      console.log(`Weatherbit API Error: ${error}`);
      return "error";
    });

  return response;
};

// getCityWeather(`${cityWeatherBaseUrl}&lat=${38.123}&lon=${-78.543}`)

// City Image function helper
const getCityImage = async (url = "") => {
  const response = await fetch(url)
    .then(async (response) => {
      const data = await response.json();

      if (data.hits.length > 0) {
        console.log(data.hits[0].webformatURL);
        return data.hits[0].webformatURL;
      } else return "no data";
    })
    .catch((error) => {
      console.log(`Pixabay API Error: ${error}`);
      return "error";
    });
  return response;
};

// getCityImage(`${pixabayBaseUrl}paris`)
