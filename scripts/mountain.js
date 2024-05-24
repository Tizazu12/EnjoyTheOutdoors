
"use strict";
 
const output = document.getElementById("output");
const searchButton = document.getElementById("searchButton");
const biggerDiv = document.getElementById("biggerDiv");
 
let mountainList;
window.onload = () => {
  populateMountinData();
  //searchButton.onclick = onsearchBtnClicked;
  //mountainList.onchange = onMountainListChange;
  //
};
function populateMountinData() {
  mountainList = document.createElement("select");
  mountainList.className = "form-control";
  console.log(mountainList);
  mountainList.addEventListener("change", () => onDropdownChange());
 
  let topOption = document.createElement("option");
  topOption.textContent = "Select a Mountain";
  mountainList.appendChild(topOption);
 
  for (let i = 0; i < mountainsArray.length; i++) {
    let mountainName = mountainsArray[i].name;
    let elevation = mountainsArray[i].elevation;
    let newOption = document.createElement("option");
    newOption.textContent = mountainName;
    newOption.value = i; // Set the value to the index of the mountain in the array
    mountainList.appendChild(newOption);
  }
 
  const mountainsDiv = document.getElementById("Mountains");
  mountainsDiv.appendChild(mountainList);
}
function onDropdownChange() {
  let selectedIndex = mountainList.value;
  let selectedMountain = mountainsArray[selectedIndex];
 
  // Update output div with mountain details
  output.innerHTML = `
    <h2>${selectedMountain.name}</h2>
    <p>Elevation: ${selectedMountain.elevation}</p>
    <p>Description: ${selectedMountain.desc}</p>
  `;
 
  // Create and append the mountain image
  let mountainImage = document.createElement("img");
  mountainImage.src = "images/" + selectedMountain.img;
  mountainImage.className = "card-img-top";
  biggerDiv.innerHTML = ""; // Clear previous image
  biggerDiv.appendChild(mountainImage);
}
function onsearchBtnClicked() {
  let mountainInfo = mountainList.value;
  //let's clear any prior results
  biggerDiv.innerHTML = "";
  for (let i = 0; i < mountainsArray.length; i++) {
    let mountain = mountainsArray[i]
    let mountainName = mountainsArray[i].name;
    let description = mountainsArray[i].desc;
    let elevation = mountainsArray[i].elevation;
    if (mountainInfo == elevation) {
      output.innerHTML = `Description : ${description} `;
      let mountainImage = document.createElement("img");
      mountainImage.src = "images/" + mountain.img;
      mountainImage.className = "card-img-top";
 
      biggerDiv.appendChild(mountainImage);
 
    }
  }
}
 

 