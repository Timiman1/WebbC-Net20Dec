'use strict';

/* ARBETA MED LISTOR (ARRAYS) */

//Literal syntax...
const vehicleManufacturer = [
  'Volvo',
  'Kia',
  'Renault',
  'BMW',
  'Ford',
  'Nissan',
  'Polestar',
  'Tesla',
];

console.log(vehicleManufacturer);

//Inte lika vanlig...
const vehicleModels = new Array('V40', 'V60', 'Ceed', '325i', 'Kuga', 'Yaris');

console.log(vehicleModels);

//Arbeta med array...
//Plocka ut ett element...
console.log(vehicleManufacturer[2]);

//Ta reda på längden antalet element.
console.log(vehicleManufacturer.length);
console.log(vehicleModels.length);

//Ta ut sista elementet ur en lista...
console.log(vehicleManufacturer[vehicleManufacturer.length - 1]);

//Lägga till något i en lista...
vehicleManufacturer.push('Volkswagen');
console.log(vehicleManufacturer);

vehicleModels.unshift('Tiguan');
console.log(vehicleModels);

//Ändra ett element i listan.
vehicleModels[4] = '520i';
console.log(vehicleModels);

//Ta bort ur listan
//Ta bort det sista elementet i listan...
const removed = vehicleModels.pop();
console.log(removed);
console.log(vehicleModels);
