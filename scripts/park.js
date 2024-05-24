"use strict";
const listResults = document.getElementById("listResults")
const dropdown = document.getElementById("Dropdown");
const searchByLocation = document.getElementById("locationData");
const typedropdown = document.getElementById("typeDropdown");
const displayResult = document.getElementById("displayResult");
const locationDropdown = document.getElementById("locationDropdown")
window.onload = () => {
  // const parksDetailRow = document.getElementById("parksDetailRow");
  populateParkType();
  populateStatesList();
  // dropdown.onchange = onDropdownChange;
  //listResults.onchange = onListChange;
  // typedropdown.onchange = ontypeDropdownChange;
  // const parksListRow = document.getElementById("parksDetailRow");

  //for(let parks of nationalParksArray){
  //let parksColumnElement = createParksColumnElement(parks);
  // parksListRow.appendChild(parksColumnElement);
};
function populateStatesList() {
  // console.log("populate");
  const selectLocation = document.createElement("select");
  selectLocation.className = "form-control"

  selectLocation.addEventListener("change", () => onDropdownChange(selectLocation.value))

  const topOption = document.createElement("option");
  topOption.textContent = "Select a location";
  selectLocation.appendChild(topOption)

  locationsArray.forEach(state => {
    const newOption = document.createElement("option");
    newOption.textContent = state;
    newOption.value = state;
    selectLocation.appendChild(newOption)
  })
  locationDropdown.appendChild(selectLocation)
}
function populateParkType() {
  // for (let i = 0; i < parkTypesArray.length; i++) {
  //   let newOption = document.createElement("option");
  //   newOption.textContent = parkTypesArray[i];
  //   newOption.value = parkTypesArray[i];
  const  selectParkType = document.createElement("select");
  selectParkType.className = "form-control";

  selectParkType.addEventListener("change",() => ontypeDropdownchange(selectParkType.value) )

  const topOption = document.createElement("option");
  topOption.textContent = "Select A Park Type";
  selectParkType.appendChild(topOption);

    typedropdown.appendChild(topOption);
    parkTypesArray.forEach(State => {
      const newOption = document.createElement("option");
      newOption.textContent = State;
      selectParkType.appendChild(newOption)
    })
    typedropdown.appendChild(selectParkType)
  }
  //console.log(populateParkType);

function onDropdownChange(selectedLocation) {
  const filteredParks = nationalParksArray.filter(park => park.State === selectedLocation)
  // console.log(selectedLocation)
  if (filteredParks.length > 0) {
    displayResult.innerHTML = "";
    const table = document.createElement("table");
    table.id = "parkListings";
    table.className = "table mt-5";
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    ["Location Name", "Address"].forEach(text => {
      const header = document.createElement("th");
      header.textContent = text;
      headerRow.appendChild(header);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    filteredParks.forEach(park => {
      const row = document.createElement("tr");
      row.appendChild(createCell(park.LocationName));
      row.appendChild(createCell(park.Address));
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    displayResult.appendChild(table);
  } else {
    displayResult.innerHTML = `<p class = "mt-5">No parks found in ${selectedLocation}.</p>`;
  }
}
function createCell(text) {
  const cell = document.createElement("td");
  cell.textContent = text;
  cell.className = "w-25"
  return cell;
}
function createParksColumnElement(parks){
  let parksColumnDiv = document.createElement("div");
  parksColumnDiv.className = "col";
  let parksCardDiv = document.createElement("div");
  parksCardDiv.className = "card card";
  parksColumnDiv.appendChild(parksCardDiv);
  let cardBodyDiv = document.createElement("div");
  cardBodyDiv.className = "card-body";
  parksCardDiv.appendChild(cardBodyDiv);
  let parksHeadedTag = document.createElement("h6");
  parksHeadedTag.innerHTML = parks.LocationName;

  cardBodyDiv.appendChild(parksHeadedTag);
  let para = document.createElement("p");
  para.className = "card-text";
  cardBodyDiv.appendChild(para);
}
function ontypeDropdownchange(selectedParkType){
  const filteredParks = nationalParksArray.filter(park => park.parkType === selectedParkType);
  if(filteredParks.length > 0){
  }else{
    displayResult.innerHTML =  displayResult.innerHTML = `<p class = "mt-5">No parks found in ${selectedParkType}.</p>`;
  }
}