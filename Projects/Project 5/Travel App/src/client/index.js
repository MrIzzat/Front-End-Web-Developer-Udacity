import "./styles/newTripFormStyle.scss";
import "./styles/tripStyle.scss";


import "./js/newTripForm.js"
import "./js/tripsList.js"
import { addNewTrip, turnOffDefault } from "./js/newTripForm.js";


// Getting the base form, used for validating inputs
export const baseForm = document.getElementById("base-form");

baseForm.addEventListener("submit",turnOffDefault);

addNewTrip();