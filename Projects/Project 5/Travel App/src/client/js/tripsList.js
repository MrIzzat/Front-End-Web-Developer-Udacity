import { allTrips, globals } from "./globals.js";

export const dateDifferenceInDays = (newDate) => {
  console.log(Date.now());
  console.log(newDate);

  const difference = Math.abs(newDate - Date.now());

  const differneceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));

  return differneceInDays;
};


export const allTripsScript = (newLocationString, newDateString) => {
  
  const addNewTrip = async () => {
    globals.numberOfTrips += 1;
  
    const section = document.createElement("section");
  
    section.setAttribute("id", `trip-${globals.numberOfTrips}`);
    section.setAttribute("class", "travel-trip");
  
    section.innerHTML = `<div class="trip-image-container">
      <img class="trip-image" id="trip-image-${globals.numberOfTrips}" src="" alt="City Image">
  </div>
  <div class="trip-information">
      <div>
          <div id="destination-trip-${globals.numberOfTrips}">
              <h1>My trip to:</h1>
          </div>
          <div id="date-trip-${globals.numberOfTrips}">
              <h1>Departing: </h1>
          </div>
          <div class="trip-buttons">
              <div class="trip-buttons">
                  <div class="save-trip-button" id="save-trip-${globals.numberOfTrips}">save trip</div>
                  <div class="remove-trip-button" id="remove-trip-${globals.numberOfTrips}">remove trip</div>
              </div>
          </div>
          <div class="countdown-trip" id="countdown-trip-${globals.numberOfTrips}">
              <p>countdown</p>
          </div>
          <div class="weather-trip" id="weather-trip-${globals.numberOfTrips}">
              <p class="title-weather-trip">Typical Weather for then is:</p>
              <p class="high-low-weather-trip">high and low temps</p>
              <p class="cloudy-weather-trip">Weather Description</p>
          </div>
      </div>
  </div>`;
  
    allTrips.appendChild(section);
  
    //Adding event listener to remove button
  
    const removeTripButton = document.getElementById(
      `remove-trip-${globals.numberOfTrips}`
    );
  
    removeTripButton.addEventListener("click", () => {
      const tripId = removeTripButton.getAttribute("id").split("-")[2];
  
      const trip = document.getElementById(`trip-${tripId}`);
      trip.remove();
      globals.numberOfTrips -= 1;
    });
  
    //Add trip destination
  
    const destinationText = document.getElementById(
      `destination-trip-${globals.numberOfTrips}`
    ).lastElementChild;
    destinationText.textContent = `My trip to: ${newLocationString}`;
  
    //Add trip date
  
    const dateText = document.getElementById(
      `date-trip-${globals.numberOfTrips}`
    ).lastElementChild;
    dateText.textContent = `Departing: ${newDateString}`;
  
    //Add weather data
  
    //Call weather APi and get the weather information.
    const weatherData = await getCityWeather(newLocationString);
    const weatherDataElement = document.getElementById(
      `weather-trip-${globals.numberOfTrips}`
    );
  
    //set high and low stuff
    weatherDataElement.children[1].textContent = `High: ${weatherData.high_temp}, Low: ${weatherData.low_temp}`;
    weatherDataElement.children[2].textContent = `${weatherData.weather_description}`;
  
    //Add Image
  
    const cityImageElement = document.getElementById(
      `trip-image-${globals.numberOfTrips}`
    );
  
    await getCityImage(newLocationString).then((imageURL) => {
      cityImageElement.setAttribute("src", imageURL);
      console.log(`Image URL: ${imageURL}`);
    });
  
    //Add countdown
  
    const newDate = new Date(newDateString);
  
    const differenceInDays = dateDifferenceInDays(newDate);
  
    const countDownText = document.getElementById(
      `countdown-trip-${globals.numberOfTrips}`
    ).lastElementChild;
  
    countDownText.textContent = `${newLocationString} is ${differenceInDays} days away`;
  };
  
  const getCityImage = async (cityName) => {
    const response = await fetch(
      `${globals.serverURL}/getImage?cityName=${cityName.toLowerCase()}`
    ).catch((error) => {
      console.log(`Error with Getting City Weather: ${error}`);
      alert(`Error with Getting City Weather: ${error}`);
    });
    const response2 = response.clone();
  
    try {
      const data = await response.text();
      return data;
    } catch (error) {
      try {
        const data = await response2.text();
        if (data === "error") {
          console.log(`Getting City Image Error: ${error}`);
          alert(`Getting City Image Error: ${error}`);
        } else {
          alert("No weather Data About that city");
        }
      } catch (error) {
        console.log(`Getting City Image Error: ${error}`);
        alert(`Getting City Image Error: ${error}`);
      }
    }
  };
  
  const getCityWeather = async (cityName) => {
    const response = await fetch(
      `${globals.serverURL}/getWeather?cityName=${cityName.toLowerCase()}`
    ).catch((error) => {
      console.log(`Error with Getting City Weather: ${error}`);
      alert(`Error with Getting City Weather: ${error}`);
    });
    const response2 = response.clone();
    try {
      const data = await response.json();
      return data;
    } catch (error) {
      try {
        const data = await response2.text();
        if (data === "error") {
          console.log(`Getting City Weather Error: ${error}`);
          alert(`Getting City Weather Error: ${error}`);
        } else {
          alert("No weather Data About that city");
        }
      } catch (error) {
        console.log(`Getting City Weather Error: ${error}`);
        alert(`Getting City Weather Error: ${error}`);
      }
    }
  };

  addNewTrip();
  
  
}

