"use strict";
const mountainList = document.getElementById("MountainsList");
const output = document.getElementById("output");
const searchButton = document.getElementById("searchButton");
const image = document.getElementById("image");
const biggerDiv = document.getElementById("biggerDiv");


window.onload = () => {
 populateMountinData();
  searchButton.onclick = onsearchBtnClicked;
  
  //for(let mountains of mountainsArray){}
    //let mountainElement = createMountainElement(mountains);
   // mountainList.appendChild(mountainElement);}
};
function populateMountinData(){

  for(let i=0; i< mountainsArray.length; i++){
    let mountainName = mountainsArray[i].name;
    let elevation = mountainsArray[i].elevation;
    let newOption = document.createElement("option");
    newOption.textContent = mountainName;
    newOption.value = elevation;
    mountainList.appendChild(newOption);
  }
}
function onsearchBtnClicked(){
  let mountainInfo = mountainList.value;
  // console.log(mountainInfo)
  
  //let's clear any prior results
  
  biggerDiv.innerHTML = "";
  for(let i=0; i < mountainsArray.length; i++){
    let mountain = mountainsArray[i]
    let mountainName= mountainsArray[i].name;
    let description = mountainsArray[i].desc;
    let elevation = mountainsArray[i].elevation;
    //console.log(mountainName)
 
     if( mountainInfo == elevation){
      output.innerHTML =`Description : ${description} `;

        let mountainImage = document.createElement("img");
        mountainImage.src = "images/" + mountain.img;
        mountainImage.className = "card-img-top";
    
        biggerDiv.appendChild(mountainImage);

      }
 
  }
  }
  