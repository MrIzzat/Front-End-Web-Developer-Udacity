import { allTrips, globals } from "./globals.js";


const dateDifferenceInDays = (newDate) => {
  console.log(Date.now())
  console.log(newDate)

  const difference = Math.abs(newDate- Date.now());

  const differneceInDays = Math.floor(difference/(1000 * 60 * 60 * 24))

  return differneceInDays

}

export const addNewTrip = (newLocationString, newDateString) => {
  globals.numberOfTrips += 1;

  const section = document.createElement("section");

  section.setAttribute("id", `trip-${globals.numberOfTrips}`);
  section.setAttribute("class", "travel-trip");

  section.innerHTML = ` 
                    <div class="trip-image"><h1>IMAGE</h1></div>
                    <div class="trip-information">
                        <div id="destination-trip-${globals.numberOfTrips}"><h1>My trip to:</h1></div>
                        <div id="date-trip-${globals.numberOfTrips}"><h1>Departing: </h1></div>
                        <div class="trip-buttons">
                            <div class="trip-buttons">
                                <div class="save-trip-button" id="save-trip-${globals.numberOfTrips}">save trip</div>
                                <div class="remove-trip-button" id="remove-trip-${globals.numberOfTrips}">remove trip</div>
                            </div>
                        </div>
                        <div id="countdown-trip-${globals.numberOfTrips}"><h1>countdown</h1></div>
                        <div id="weather-trip-${globals.numberOfTrips}"><h1>weather</h1></div>
                    </div>
                `;

  allTrips.appendChild(section);

  //Add trip destination

  const destinationText = document.getElementById(`destination-trip-${globals.numberOfTrips}`).lastElementChild
  destinationText.textContent = `My trip to: ${newLocationString}`;

  //Add trip date

  const dateText = document.getElementById(`date-trip-${globals.numberOfTrips}`).lastElementChild
  dateText.textContent = `Departing: ${newDateString}`;

  //Add countdown
  
  const newDate = new Date(newDateString)

  const differenceInDays = dateDifferenceInDays(newDate);

  const countDownText = document.getElementById(`countdown-trip-${globals.numberOfTrips}`).lastElementChild

  countDownText.textContent= `Countdown: ${differenceInDays} days`

  const removeTripButton = document.getElementById(`remove-trip-${globals.numberOfTrips}`);

  removeTripButton.addEventListener("click", () => {
    const tripId = removeTripButton.getAttribute("id").split("-")[1];

    const trip = document.getElementById(`trip-${tripId}`);
    trip.remove();
    globals.numberOfTrips-=1;
  });
};
