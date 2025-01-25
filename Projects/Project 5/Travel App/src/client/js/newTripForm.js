import { allTrips, globals } from "./globals.js";
import { addNewTrip } from "./tripsList.js";

let newTripFormExists = false;



// Getting the base form, used for validating inputs
const baseForm = document.getElementById("base-form");

baseForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

//Get the button that adds new trips
const newTripButton = document.getElementById("add-trip-button");

newTripButton.addEventListener("click", () => {
  //Only create a new "new trip form" if there isn't one on the screen
  if (!newTripFormExists) {
    newTripFormExists = true;
    const newTrip = document.createElement("section");

    //class for style
    newTrip.setAttribute("class", "new-travel-trip");

    //Add the content (inputs, buttons etc.)
    newTrip.innerHTML = `                    <div class="new-trip-destination">
                              <h2>My trip to:</h2>
                              <input form="base-form" required type="text" placeholder="Enter Location">
                          </div>
                          <div class="new-travel-departing-date">
                              <h2>Departing:</h2>
                              <input placeholder="MM/DD/YYYY" type="text" required
                                  pattern="([1-9]|[1][0-2])/([1-9]|[1-2][0-9]|[3][0-1])/([0-9][0-9][0-9][0-9])" form="base-form">
                          </div>
                          <div class="new-trip-buttons">
                              <div class="save-trip-form-button">save trip</div>
                              <div class="remove-trip-form-button">remove trip</div>
                          </div>`;

    allTrips.appendChild(newTrip);

    const saveTripButton =
      document.getElementsByClassName("save-trip-form-button")[0];

    saveTripButton.addEventListener("click", () => {
      if (baseForm.reportValidity()) {
        console.log("SUCCESS"); //Add as a trip

        const newLocationString = document.getElementsByClassName("new-trip-destination")[0].lastElementChild.value
        const newDateString = document.getElementsByClassName("new-travel-departing-date")[0].lastElementChild.value

        console.log(newLocationString)
        console.log(newDateString)
        
        addNewTrip(newLocationString, newDateString);

        removeNewTripForm();
      }
    });

    const removeTripButton =
      document.getElementsByClassName("remove-trip-form-button")[0];

    //Remove the new trip form
    removeTripButton.addEventListener("click", removeNewTripForm);
  } else {
    alert("There already is a new trip form.");
  }
});

const removeNewTripForm = () => {
  const newTripForm = document.getElementsByClassName("new-travel-trip")[0];
  newTripFormExists = false;
  newTripForm.remove();
};