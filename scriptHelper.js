// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {

    if (testInput === ""){
        return "Empty"
    } else if (isNaN(testInput)){
        return "Not a number"
    } else {
        return "Is a number"
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "empty"){
    alert("All fields must be completed")
   } else if (validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number" || validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number"){
    alert("Valid data required for all fields")
   } else{

    let pilotStatus = document.getElementById('pilotStatus')
    let copilotStatus = document.getElementById('copilotStatus')
    let fuelStatus = document.getElementById('fuelStatus')
    let cargoStatus = document.getElementById('cargoStatus')

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (parseInt(fuelLevel) < 10000 || parseInt(cargoLevel) > 10000) {
            
        if (parseInt(fuelLevel) < 10000) {
            fuelStatus.innerHTML = "Need more fuel to launch";
        } else {
            fuelStatus.innerHTML = "Fuel level is ready for launch";
        }

        if (parseInt(cargoLevel) > 10000) {
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        } else {
        launchStatus.innerHTML = "Shuttle is Ready for Launch"
        launchStatus.style.color = "green";
        fuelStatus.innerHTML = "Fuel level is ready for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    list.style.visibility = "visible";
    }

   }


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
