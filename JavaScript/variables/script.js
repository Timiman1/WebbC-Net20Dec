//Deklarera variabler i JavaScript...

/*
JavaScript variabler är alltid camelCase...
*/

//let variabler är mutable...
let firstName = 'Michael';
let address = 'Gatan';
let year = 2021;

let vehicles = [];
let vehicle = { name: 'Kalle', address: 'gatan 4' };

//const variabler är immutable...
const lastName = 'Eriksson';

console.log(firstName, lastName);

console.log(typeof firstName);
console.log(typeof year);
console.log(typeof vehicles);
console.log(typeof vehicle);
console.log(typeof false);
console.log(vehicle.name);

const info = firstName + ' ' + address;
console.log(info);
console.log(4 - 4);

let x = 2 + 5;
console.log(x);

x += 10;
console.log(x);
x -= 5;
console.log(x);
x *= 3;
console.log(x);
x /= 9;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

++x;
console.log(x);

const now = 2021;
const ageMalin = now - 1990;
console.log(ageMalin);

const occupation = 'Teacher';
const yearsOfTeaching = 1990;

//Dålig sammanslagning...
const infoBad =
  "I'm " +
  firstName +
  ', and I am a ' +
  occupation +
  ' and have been teaching web technologies for ' +
  (now - yearsOfTeaching) +
  ' years!';

//Bra sammanslagning...
//String interpolation...
const goodInfo = `I'm ${firstName} and I am a ${occupation} and been teaching web technologies for ${
  now - yearsOfTeaching
} years`;

console.log(goodInfo);

const html = `<h1>${firstName}</h1><h4>${address}</h4><span>Här kommer lite text...</span>
<input type="submit" value="Klicka här!"/>`;

console.log(html);

//DOM manipulering...
/*
  # = sök på id
  . = sök på class namn
  h1 = sök på element namn
 */
const placeToAddHtml = document.querySelector('#placeholder');

placeToAddHtml.innerHTML = html;
