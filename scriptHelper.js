// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let doc = document.getElementById("missionTarget");
   doc.innerHTML = 
   `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth:${distance}</li>
        <li>Number of Moons: ${moons} </li>
    </ol>
    <img src="${imageUrl}">`

}


function validateInput(testInput) {

    if (testInput === ""){
        return "Empty"
    } else if (isNaN(testInput)){
        return "Not a Number"
    } else {
        return "Is a Number"
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "empty"){
    alert("All fields must be completed")
   } else if (validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number" || validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number"){
    alert("Valid data required for all fields")
   } else {

    let pilotStatus = document.getElementById('pilotStatus')
    let copilotStatus = document.getElementById('copilotStatus')
    let fuelStatus = document.getElementById('fuelStatus')
    let cargoStatus = document.getElementById('cargoStatus')
    let launchStatus = document.getElementById('launchStatus')

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (parseInt(fuelLevel) < 10000 || parseInt(cargoLevel) > 10000) {
            
        if (parseInt(fuelLevel) < 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
        }

        if (parseInt(cargoLevel) > 10000) {
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'rgb(199, 37, 78)';
        } else {
        launchStatus.innerHTML = "Shuttle is Ready for Launch"
        launchStatus.style.color = 'rgb(65, 159, 106)';
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    list.style.visibility = "visible";
    }

   }


   async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let number = Math.floor(Math.random()*planets.length);
    return planets[number];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
