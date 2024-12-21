const apiKey = "cef657663967c9e4808ab1bb77fe3cd4";
const baseURL = "https://api.openweathermap.org/data/2.5/forecast?";

const button = document.getElementById("submit");
const txtField = document.getElementById("city_country");

const weatherLocation = document.getElementById("location");
const date = document.getElementById("date");
const temp = document.getElementById("temp");
const desc = document.getElementById("desc");

const getWeather = async (url = "") => {
  try {
    const response = await fetch(url);

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

const getWeatherInformation = async (cityName) => {
  let weatherURL = `${baseURL}q=${cityName}&cnt=${1}&APPID=${apiKey}`;

  getWeather(weatherURL).then(
    (data) => {
      weatherLocation.textContent = txtField.value;
      date.textContent = `Date: ${data.list[0].dt_txt}`;
      temp.textContent = `Temperature: ${data.list[0].main.temp}`;
      temp.textContent = `Description: ${data.list[0].weather[0].description}`;
    }
    // console.log({
    //   date: data.list[0].dt_txt,
    //   temperature: data.list[0].main.temp,
    // })
  );
};

button.addEventListener("click", (event) => {
  const cityName = txtField.value;
  getWeatherInformation(cityName);
});
