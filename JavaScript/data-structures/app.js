/*
  DESTRUCTURING ETT SÄTT ATT PLOCKA ISÄR EN ARRAY ELLER ETT OBJEKT
  OCH BARA TA UT DET SOM ÄR INTRESSANT!
*/

const arr = [1, 2, 3, 4];
//Före ES6...
/*const a = arr[0];
const b = arr[2];
const c = arr[3];

console.log(a, b, c);
*/

//Med ES6...
/*const [a, b, c, d] = arr;
console.log(a, c, d);

//Ta bara ut första och sista element/objektet.
let [first, , , last] = arr;
console.log(first, last);

//Kasta om ordningen...
[first, last] = [last, first];
console.log(first, last);
*/

/* NÄSTLADE LISTOR/ARRAYS */
/*const nestedArray = [6, 7, [1, 2]];
console.log(nestedArray);

const [, x, [, y]] = nestedArray;
console.log(x, y);

const [k, l, z] = [3, 4];
console.log(k, l, z);
*/
/*
const [k = 1, l = 2, z = 10] = [3, 4];
console.log(k, l, z);
*/

//Destructuring objects...
/*const car = {
  id: 1,
  registrationNo: 'ABC123',
  make: 'Chevrolet',
  model: 'Corvette',
  modelYear: '2015',
  imageName: 'car1',
  mileage: 25000,
  description:
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur.',
};*/
/*
//Destructuring object.
//Bara plocka ut de egenskaper som är intressanta...
const {
  registrationNo: regNumber,
  make: tillverkare,
  model: modell,
  mileage,
} = car;
console.log(regNumber, tillverkare, modell, mileage);
*/

/* SPREAD OPERATOR... */
/*
const spreadArray = [5, 6, 7, 8, 9, 10];

console.log(spreadArray);
//Dåligt sätt
const badWay = [1, 2, 3, spreadArray[0], spreadArray[1]];
console.log(badWay);

//Bra sätt
const goodWay = [1, 2, 3, ...spreadArray];
console.log(goodWay);

//Kopiera en array
const copyOfArr = [...spreadArray];
console.log(copyOfArr);

//Kopiera objekt
const copyOfCar = { ...car };
console.log(copyOfCar);
*/

/* SETS ÄR LISTOR/ARRAYS MED ENDBART UNIKA VÄRDEN */
//Får inte finnas dubbletter!!!
//ES6 ...

/*
const manufacturers = [
  'Volvo',
  'Kia',
  'Fiat',
  'BMW',
  'Skoda',
  'Kia',
  'Volkswagen',
  'Kia',
  'Volvo',
];

console.log(manufacturers);

const makeSet = new Set(manufacturers);
console.log(makeSet);

//Kontrollera storleken
console.log(makeSet.size);
//Kontrollera om ett specifikt element/objekt finns i listan
console.log(makeSet.has('Fiat'));
console.log(makeSet.has('Porsche'));

//Lägga till nya element/objekt.
makeSet.add('Porsche');

console.log(makeSet);
console.log(makeSet.has('Porsche'));

//Ta bort element/objekt
makeSet.delete('Fiat');
makeSet.delete('volvo');
console.log(makeSet);

//Ta bort vårt Set
makeSet.clear();
console.log(makeSet);

//Vad ska vi ha det till?
//Eliminera dubbletter som vi kanske får tillbaka via ett REST anrop.

const models = [
  'V40',
  'V60',
  '320i',
  'Ceed',
  'Trafic',
  'Ceed',
  'V60',
  'Ceed',
  'Trafic',
];

const uniqueModels = new Set(models);
console.log(uniqueModels);

const newModels = [...uniqueModels];
console.log(newModels);

//One-liner...
const modelsArray = [...new Set(models)];
console.log(modelsArray);
*/

/* MAPS */
//Kan liknas vid Dictionaries. Nyckel(key) och värde(value) par.
const vehicleUsage = new Map();
vehicleUsage.set('N', 'Normal Use');
vehicleUsage.set('RC', 'Rental Car');
vehicleUsage.set('T', 'Taxi');
vehicleUsage.set('D', 'Driving School');

console.log(vehicleUsage);

console.log(vehicleUsage.get('RC'));
