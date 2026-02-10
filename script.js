// Business Logic
function Place(location, landmark, date, timeOfYear, note) {
  this.location = location;
  this.landmark = landmark;
  this.date = date;
  this.timeOfYear = timeOfYear;
  this.note = note;
}

// Store places
const places = [];

// UI Logic
document.getElementById("placeForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const location = document.getElementById("location").value;
  const landmark = document.getElementById("landmark").value;
  const date = document.getElementById("date").value;
  const timeOfYear = document.getElementById("timeOfYear").value;
  const note = document.getElementById("note").value;

  const newPlace = new Place(location, landmark, date, timeOfYear, note);
  places.push(newPlace);

  displayTravelEntries();
  displayVisitedPlaces();

  this.reset();
});

function displayTravelEntries() {
  const list = document.getElementById("travelEntriesList");
  list.innerHTML = "";

  places.forEach((place) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${place.location}</strong><br>
      Landmark: ${place.landmark}<br>
      Date: ${place.date}<br>
      Time of year: ${place.timeOfYear}<br>
      Note: ${place.note}
    `;
    list.appendChild(li);
  });
}

function displayVisitedPlaces() {
  const list = document.getElementById("visitedPlacesList");
  list.innerHTML = "";

  places.forEach((place) => {
    const li = document.createElement("li");
    li.textContent = place.location;
    list.appendChild(li);
  });
}

