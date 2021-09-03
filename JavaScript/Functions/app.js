'use strict';

/* FUNKTIONER I JAVASCRIPT */
//Är ett sätt att gruppera återanvändbar kod / logik...

/*
//Funktion som inte returnerar något värde...
function writeToLog(message) {
  console.log('Detta kommer ifrån funktionen writeToLog ' + message);
}

writeToLog('Meddelande 1');
writeToLog('Meddelande 2');
writeToLog('Meddelande 3');
writeToLog('Meddelande 4');

//Funktion som returnerar värde...
function findVehicle(regNumber) {
  console.log(regNumber);
  //Normalt gör vi ett http anrop till en REST tjänst här...
  const car = `Bil med registeringsnummer ${regNumber} Volvo V60`;
  return car;
}

let foundVehicle = findVehicle('CER932');
console.log(foundVehicle);
*/

/* FUNCTION DECLARATIONS VS. FUNCTION EXPRESSIONS */

//Tack vare 'Hoisting' i JavaScript...
console.log(calculateVehicleAge(2016));

//DETTA ÄR FUNCTION DECLARATION OBS!!!!
function calculateVehicleAge(modelYear) {
  //const age = 2021 - modelYear;
  return 2021 - modelYear;
}

console.log(calculateVehicleAge(2016));

//DETTA ÄR EN FUNCTION EXPRESSION OBS!!!

//Detta fungerar ej, funktionen laddas inte in i minnet.
//console.log(myCalculateVehicleAge(2014));

//En funktion utan namn
const myCalculateVehicleAge = function (modelYear) {
  //const age = 2021 - modelYear;
  return 2021 - modelYear;
};

console.log(myCalculateVehicleAge(2014));

//ARROW FUNCTION => (KOM I E6 VERSION AV JAVASCRIPT)
//Function Expression i minimaliserad version...

const arrowFunction1 = (modelYear) => {
  //const age = 2021 - modelYear;
  return 2021 - modelYear;
};

const arrowFunction2 = (modelYear) => 2021 - modelYear;

const arrowFunction3 = () => 2021 - 2012;

const howLongToRetirement = (birthYear) => {
  const age = 2021 - birthYear;
  const retirement = 67 - age;
  return retirement;
};

const howLongToRetirement2 = (birthYear, currentYear, retirementAge) => {
  const age = 2021 - birthYear;
  const retirement = 67 - age;
  return retirement;
};
