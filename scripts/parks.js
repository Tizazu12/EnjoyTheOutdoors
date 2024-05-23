"use strict";



window.onload = () => {

    const parksListRow = document.getElementById("parksDetailRow");

    console.log("load");


    for(let parks of nationalParksArray){
        let parksColumnElement = createParksColumnElement(parks);
        parksListRow.appendChild(parksColumnElement);
    }
 };
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


  //let visit = document.createElement("a");
  //visit.href = parks.visit;
  //visit.innerHTML = parks.visit;para.appendChild();





 


  return parksColumnDiv;

 }

  

 let parksColumnDiv = document.createElement("div");
 parksColumnDiv.className = "card text-bg-light mb-3";
  parksColumnDiv.style ="max-width: 18rem;";
 
let parksCardDiv = document.createElement("div");
parksCardDiv.className = "card header";
parksCardDiv.innerHTML = parks.State;


parksColumnDiv.appendChild(parksCardDiv);



let cardBodyDiv = document.createElement("div");
cardBodyDiv.className = "card-body";

parksCardDiv.appendChild(cardBodyDiv);

let parksHeadedTag = document.createElement("h5");
parksHeadedTag.innerHTML = parks.LocationName;

cardBodyDiv.appendChild(parksHeadedTag);


let para = document.createElement("p");
para.className = "card-text";
cardBodyDiv.appendChild(para);
