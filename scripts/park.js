"use strict";
 
// Getting references to HTML elements
const listResults = document.getElementById("listResults");
const dropdown = document.getElementById("Dropdown");
const searchByLocation = document.getElementById("locationData");
const typedropdown = document.getElementById("typeDropdown");
const displayResult = document.getElementById("displayResult");
const locationDropdown = document.getElementById("locationDropdown");
// Function to execute when the window loads
window.onload = () => {
  // Populating the dropdowns
  populateParkType();
  populateStatesList();
};
// Function to populate the states list dropdown
function populateStatesList() {
  const selectLocation = document.createElement("select");
  selectLocation.className = "form-control";
  // Adding event listener to the location dropdown
  selectLocation.addEventListener("change", () => onDropdownChange(selectLocation.value));
  // Creating the default option for location dropdown
  const topOption = document.createElement("option");
  topOption.textContent = "Select a location";
  selectLocation.appendChild(topOption);
  // Populating the location dropdown with states
  locationsArray.forEach(state => {
    const newOption = document.createElement("option");
    newOption.textContent = state;
    newOption.value = state;
    selectLocation.appendChild(newOption);
  });
  locationDropdown.appendChild(selectLocation);
}
// Function to populate the park type dropdown
function populateParkType() {
  const selectParkType = document.createElement("select");
  selectParkType.className = "form-control";
  // Adding event listener to the park type dropdown
  selectParkType.addEventListener("change", () => ontypeDropdownchange(selectParkType.value));
  // Creating the default option for park type dropdown
  const topOption = document.createElement("option");
  topOption.textContent = "Select A Park Type";
  selectParkType.appendChild(topOption);
  // Populating the park type dropdown with park types
  parkTypesArray.forEach(State => {
    const newOption = document.createElement("option");
    newOption.textContent = State;
    selectParkType.appendChild(newOption);
  });
  typedropdown.appendChild(selectParkType);
}
// Function to handle the change event of the location dropdown
function onDropdownChange(selectedLocation) {
  // Filtering parks based on selected location
  const filteredParks = nationalParksArray.filter(park => park.State === selectedLocation);
  // Displaying filtered parks or message if no parks found
  if (filteredParks.length > 0) {
    displayParks(filteredParks);
  } else {
    displayResult.innerHTML = `<p class="mt-5">No parks found in ${selectedLocation}.</p>`;
  }
}
// Function to create and append parks to the display
function displayParks(parks) {
  displayResult.innerHTML = ""; // Clear previous content
  const table = document.createElement("table");
  table.id = "parkListings";
  table.className = "table mt-5";
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  // Creating table header
  const headerRow = document.createElement("tr");
  ["Location Name", "Address"].forEach(text => {
    const header = document.createElement("th");
    header.textContent = text;
    headerRow.appendChild(header);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);
  // Creating table rows for each park
  parks.forEach(park => {
    const row = document.createElement("tr");
    row.appendChild(createCell(park.LocationName));
    row.appendChild(createCell(park.Address));
    tbody.appendChild(row);
  });
  // Appending table rows to the table
  table.appendChild(tbody);
  displayResult.appendChild(table);
}
// Function to create table cell
function createCell(text) {
  const cell = document.createElement("td");
  cell.textContent = text;
  cell.className = "w-25";
  return cell;
}
// Function to handle the change event of the park type dropdown
function ontypeDropdownchange(selectedParkType) {
  // Filtering parks based on selected park type
  const filteredParks = nationalParksArray.filter(park => park.LocationName.includes(selectedParkType));
  // Displaying filtered parks or message if no parks found
  if (filteredParks.length > 0) {
    displayParks(filteredParks);
  } else {
    displayResult.innerHTML = `<p class="mt-5">No parks found for ${selectedParkType}.</p>`;
  }
}


