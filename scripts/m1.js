function populateMountainData() {
  let mountainList = document.createElement("select");
  mountainList.className = "form-control";

  mountainList.addEventListener("change", () => onDropdownChange(mountainList));

  let topOption = document.createElement("option");
  topOption.textContent = "Select a Mountain";
  mountainList.appendChild(topOption);

  for (let i = 0; i < mountainsArray.length; i++) {
    let mountainName = mountainsArray[i].name;
    let elevation = mountainsArray[i].elevation;
    let newOption = document.createElement("option");
    newOption.textContent = mountainName;
    newOption.value = elevation; // Assigning elevation as the value
    mountainList.appendChild(newOption);
  }

  output.appendChild(mountainList); // Appending to the output element
}

function onDropdownChange(mountainList) {
  let selectedElevation = mountainList.value;

  // Clear any prior results
  biggerDiv.innerHTML = "";

  for (let i = 0; i < mountainsArray.length; i++) {
    let mountain = mountainsArray[i];
    let mountainName = mountain.name;
    let description = mountain.desc;
    let elevation = mountain.elevation;

    if (selectedElevation === elevation) {
      let mountainInfo = document.createElement("div");
      mountainInfo.innerHTML = `Name: ${mountainName} <br> Description: ${description} <br> Elevation: ${elevation}`;
      biggerDiv.appendChild(mountainInfo);

      let mountainImage = document.createElement("img");
      mountainImage.src = "images/" + mountain.img;
      mountainImage.className = "card-img-top";
      biggerDiv.appendChild(mountainImage);
    }
  }
}
;
"use strict";
const mountainList = document.getElementById("Mountains");
const output = document.getElementById("output");
const searchButton = document.getElementById("searchButton");

const biggerDiv = document.getElementById("biggerDiv");


window.onload = () => {
  populateMountinData();
  //searchButton.onclick = onsearchBtnClicked;
//mountainList.onchange = onMountainListChange;
  // 
};
function populateMountinData() {
  let mountainList = document.createElement("select");
  mountainList.className = "form-control"
console.log(mountainList)
  mountainList.addEventListener("change", () => onDropdownChange(mountainList.value))
  let topOption = document.createElement("option");
  topOption.textContent = "Select a Mountain";
  mountainList.appendChild(topOption)

   for (let i = 0; i < mountainsArray.length; i++) {
     let mountainName = mountainsArray[i].name;
     let elevation = mountainsArray[i].elevation;
     let newOption = document.createElement("option");
     newOption.textContent = mountainName;
   newOption.value = mountainName;
    mountainList.appendChild(newOption);
   }
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
    //console.log(mountainName)

    if (mountainInfo == elevation) {
      output.innerHTML = `Description : ${description} `;

      let mountainImage = document.createElement("img");
      mountainImage.src = "images/" + mountain.img;
      mountainImage.className = "card-img-top";

      biggerDiv.appendChild(mountainImage);

    }

  }
}
