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
const car = {
  id: 1,
  registrationNo: 'ABC123',
  make: 'Chevrolet',
  model: 'Corvette',
  modelYear: '2015',
  imageName: 'car1',
  mileage: 25000,
  description:
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur.',
};
