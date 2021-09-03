'use strict';

/* IF OCH ELSE */
// const age = 20;

// const hasTheAge = age >= 18;
// console.log(hasTheAge);
// console.log(age >= 18);

// if (hasTheAge) {
//   console.log('Du får köra bil 🏎');
// } else {
//   console.log('Tyvärr du får ta  bussen istället 😔');
// }

// if (age > 18) {
//   console.log('Du får köra bil 🏎');
// } else if (age == 18) {
//   console.log('Kör försiktigt 😁');
// } else {
//   console.log('Tyvärr du får ta  bussen istället 😔');
// }

/***************************************************/

/* Type conversion och coercion */
// Implicita(automatiska) eller Explicita(manuella) konvertering av datatyper...

//Sträng -> tal, tal -> sträng...

/* Type conversion */
/* const birthYearInput = '1992';
console.log(birthYearInput);

console.log(birthYearInput + 10);

//Explicit konvertering
console.log(Number(birthYearInput), birthYearInput);
console.log(Number(birthYearInput) + 10);

let birthYear = Number(birthYearInput);
console.log(birthYear);

const modelYear = '2018';
//Explicit konvertering
console.log(Number(modelYear));
console.log(NaN);

const regNumber = 2018;
//Implicit konvertering
console.log(regNumber + 'XY');
//Explicit konvertering
console.log(String(regNumber) + 'XY');*/

//Type Coercion = Implicit = Automatisk översättning
console.log('Min hund är ' + 6 + ' år gammal');

//Type Conversion = Explicit = Manuell översättning
console.log('Min hund är ' + String(6) + ' år gammal');

let x = '1' + 1;
console.log(x);
x = x - 1; //'11' -> 11 - 1
console.log(x);

let y = '10' - '2' - 3 + '5'; // '10' -> 10 - '2' -> 2 = 8 - 3 = 5 + '5' = '55'
console.log(y);

// const z = prompt('Ange ett värde'); //ALLTID RETURNERAR EN STRÄNG OAVSETT VÄRDE
// console.log(z);
// console.log(typeof z, z);

/* Truthy(Sant) - Falsy(Falskt) */
/* Falsy 
  0,
  '',
  undefined,
  null,
  NaN
*/

//Falsy values...
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

//Truthy values...
console.log(Boolean(1));
console.log(Boolean('Kalle'));
console.log(Boolean({})); //Ett tomt JavaScript objekt..
