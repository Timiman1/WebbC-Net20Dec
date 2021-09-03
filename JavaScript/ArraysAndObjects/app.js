'use strict';

/* ARBETA MED LISTOR (ARRAYS) */
/*
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
//Lägg till sist i listan
vehicleManufacturer.push('Volkswagen');
console.log(vehicleManufacturer);

//Lägg till först i listan
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

//Ta bort första elementet i listan...
const firstCar = vehicleManufacturer.shift();
console.log(firstCar);
console.log(vehicleManufacturer);

//Ta reda på ett elements position i listan...
const idx = vehicleManufacturer.indexOf('Kia');
console.log(idx);

console.log(vehicleManufacturer.indexOf('Ford'));

//E6...
console.log(vehicleManufacturer.includes('Ford'));
*/

/******************************************************************/
/* ARBETA MED OBJEKT */

//Object literal syntax...
/*
const bil1 = {
  regNo: 'CER932',
  make: 'Renault',
  model: 'Trafic',
  modelYear: 2011,
  mileage: 98000,
  equipments: ['Cruise Control', 'Navigator', 'Parking Sensor'],
};

console.log(bil1);

//Åtkomst till egenskaperna i objektet.
console.log(bil1.make);
console.log(bil1.regNo);
console.log(bil1['model']);
console.log(bil1.equipments);
console.log(bil1.equipments[1]);

const customer = {
  firstName: 'Michael',
  lastName: 'Gustavsson',
  email: 'michael.gustavsson@softtech-dev.se',
};

console.log(customer);

const key = 'Name';
console.log(customer['first' + key]);
console.log(customer['last' + key]);

// var result = prompt(
//   'Vad vill du veta om bilen? Välj mellan regNo, make eller model'
// );

// console.log(result);

//console.log(bil1[result]);

bil1.color = 'Silver';
console.log(bil1);

//Object literal syntax...
//Skapar även metoder...
const bil2 = {
  regNo: 'CER932',
  make: 'Renault',
  model: 'Trafic',
  modelYear: 2011,
  mileage: 98000,
  equipments: ['Cruise Control', 'Navigator', 'Parking Sensor'],
  averageMilesPerYear: function (currentYear) {
    console.log(this);
    this.averageMileage = Number.parseInt(
      this.mileage / (currentYear - this.modelYear)
    );
    return this.averageMileage;

    //return Number.parseInt(this.mileage / (currentYear - this.modelYear));
  },
};

console.log(bil2.averageMilesPerYear(2021));
console.log(bil2.averageMileage);
*/

/* LOOPA IGENOM LISTOR */
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

for (let i = 0; i < vehicleManufacturer.length; i++) {
  console.log(vehicleManufacturer[i]);
}

console.log('----------------------------------');

for (let item of vehicleManufacturer) {
  console.log(item);
}

console.log('----------------------------------');

vehicleManufacturer.forEach((make) => {
  console.log(make);
});

console.log('----------------------------------');

/* WHILE LOOPS */
//ENBART FÖR REFERENSE, ANVÄNDS NÄSTAN ALDRIG!!!
let i = 0;
while (i <= vehicleManufacturer.length) {
  console.log(vehicleManufacturer[i]);
  i++;
}
