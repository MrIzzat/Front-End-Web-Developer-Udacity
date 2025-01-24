import { allTrips, globals } from "./globals.js";

export const addNewTrip = () => {
  globals.numberOfTrips += 1;

  const section = document.createElement("section");

  section.setAttribute("id", `trip-${globals.numberOfTrips}`);
  section.setAttribute("class", "travel-trip");

  section.innerHTML = ` <div class="trip-image"><h1>IMAGE</h1></div>
                    <div class="trip-information">
                        <div><h1>INFO</h1></div>
                        <div class="trip-buttons">
                            <div class="trip-buttons">
                                <div class="save-trip-button" id="save-trip-${globals.numberOfTrips}">save trip</div>
                                <div class="remove-trip-button" id="remove-trip-${globals.numberOfTrips}">remove trip</div>
                            </div>
                        </div>
                        <h1>countdown</h1>
                        <h1>weather</h1>
                    </div>`;

  allTrips.appendChild(section);

  const removeTripButton = document.getElementById(`trip-${globals.numberOfTrips}`);

  removeTripButton.addEventListener("click", () => {
    const tripId = removeTripButton.getAttribute("id").split("-")[1];

    const trip = document.getElementById(`trip-${tripId}`);
    trip.remove();
    globals.numberOfTrips-=1
  });
};
