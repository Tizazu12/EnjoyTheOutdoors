"use strict";
const listResults = document.getElementById("listResults")
const dropdown = document.getElementById("Dropdown");
const searchByLocation =document.getElementById("locationData");
const typedropdown =
window.onload = () => {
  populateParkType(); 
    populateStatesList();
    dropdown.onchange = onDropdownChange;
    listResults.onchange = onListChange;
  };
  function populateStatesList(){
    // console.log("populate");
    dropdown.innerHTML = "";
    for(let i = 0; i < locationsArray.length; i++){
        let newOption = document.createElement("option");
        newOption.innerHTML = locationsArray[i];
        newOption.value = locationsArray[i];
         dropdown.appendChild(newOption) 
        }
    }
    function populateParkType(){
      for(let i = 0; i < parkTypesArray.length; i++){
        let newOption = document.createElement("option");
        newOption.innerHTML = parkTypesArray[i];
        newOption.value = parkTypesArray[i];
       
         typedropdown.appendChild(newOption) }
      }
      function onDropdownChange(){
      //clear the table
      listResults.innerHTML ="";
      //add to the table any park that is in a selected state
      let selectedValue = dropdown.value; //good
      if(selectedValue === "Location"){
        // get the location
        let SelectedLocation = searchByLocation.value; //good
        // we need to filter parks by location
        filterParksByLocation(SelectedLocation)

      } else if(selectedValue === "type"){
        // get the selected park type
        // let seletectedParkType = searchByLocation.value;
        // filter by park Type
        filterByParksType(selectedValue)
      }
        }
      
   
   function filterParksByLocation(location){
    nationalParksArray.forEach((park) => {
      if(park.LocationName === location){
        addParkRow(park);
      }
    });
   }

   function filterByParksType(parkType){
    nationalParksArray.forEach((park) => {
      if(park.parkType === parkType){
        addParkRow(park);
      }
    });
   }

function addParkRow(){
  let row = listResults.insertRow();
  let cell0 = row.insertCell(0);
  cell0.innerHTML = park.LocationName;
  let cell1 = row.insertCell(1);
  cell1.innerHTML = park.Address;
  let cell2 = row.insertCell(2);
  cell2.innerHTML = park.State;
  let cell3 = row.insertCell(3);
  cell3.innerHTML = park.Phone;
  let cell4 =row.insertCell(4);
  cell4.innerHTML = park.Fax;
}
  //Determine if 'location or type is selected dropdown accordingly
  const selectValue = document.querySelector('input[name="radio"]:checked').value;
 if (selectValue === 'Location') {
// Location and state filter
populateStatesList();
 } else if (selectValue === 'type') {
// Park type filter
populateParkType();
 }   
   