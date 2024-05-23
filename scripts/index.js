"use strict";
const listResults = document.getElementById("listResults")
const dropdown = document.getElementById("Dropdown");
const searchByLocation =document.getElementById("locationData");

window.onload = () => {

  populateParkType(); 
    populateStatesList();
    dropdown.onchange = onDropdownChange;
    listResults.onchange = onListChange;
   // const parksListRow = document.getElementById("parksDetailRow");

    //for(let parks of nationalParksArray){
      //let parksColumnElement = createParksColumnElement(parks);
     // parksListRow.appendChild(parksColumnElement);
  };
    

  function populateStatesList(){
    console.log("populate");
    
    for(let i = 0; i < locationsArray.length; i++){
        let newOption = document.createElement("option");
        newOption.textContent = locationsArray[i];
        newOption.value = locationsArray[i];
       
         dropdown.appendChild(newOption) }
       
        
    }
    function populateParkType(){
      for(let i = 0; i < parkTypesArray.length; i++){
        let newOption = document.createElement("option");
        newOption.textContent = parkTypesArray[i];
        newOption.value = parkTypesArray[i];
       
         dropdown.appendChild(newOption) }
         //console.log(populateParkType);
      }
    
    function onDropdownChange(){

      //clear the table
      listResults.innerHTML ="";
      //add to the table any park that is in a selected state

      let selectedstate = dropdown.value;


      nationalParksArray.forEach( (park) => {

        if(park.State === selectedstate){

          let row = listResults.insertRow();

          let cell0 = row.insertCell(0);
          cell0.innerHTML = park.LocationName;

          let cell1 = row.insertCell(1);
          cell1.innerHTML = park.Address;

        
          let cell2 = row.insertCell(2);
          cell2.innerHTML = park.State;
          
          let cell3 = row.insertCell(3);
          cell3.innerHTML = park.Phone;}
      })
      let selectedType = dropdown.value;
      //parkTypesArray.forEach((type) => {
      if (type = " "))
      }

  

    



   function onListChange(){}
    
  const selectValue = document.querySelector('input[name="radio"]:checked').value;
 if (selectValue === 'Location') {
// Location and state filter
populateStatesList();

 } else if (selectValue === 'type') {
// Park type filter


 }   
   