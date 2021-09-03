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
//console.log('Min hund är ' + 6 + ' år gammal');

//Type Conversion = Explicit = Manuell översättning
//console.log('Min hund är ' + String(6) + ' år gammal');

// let x = '1' + 1;
// console.log(x);
// x = x - 1; //'11' -> 11 - 1
// console.log(x);

// let y = '10' - '2' - 3 + '5'; // '10' -> 10 - '2' -> 2 = 8 - 3 = 5 + '5' = '55'
// console.log(y);

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
/*
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
*/

//Truthy values...
/*
console.log(Boolean(1));
console.log(Boolean('Kalle'));
console.log(Boolean({})); //Ett tomt JavaScript objekt..
*/

/* JÄMFÖRELSE OPERATORER */
/* Jämförelse operatorn i JavaScript har vi två stycken */
// == (loose) JavaScript nu använder sig av Coercion för att jämföra.
// === (strict) Då använder inte JavaScript sig av Coercion.

/*
const modelYear = '2015';

if (modelYear === 2015) {
  console.log('loose comparison', modelYear);
} else {
  console.log('strict comparison', modelYear);
}

console.log(modelYear, typeof modelYear);
*/

/* SWITCH I JAVASCRIPT */
/* const day = 'sunday';

switch (day) {
  case 'monday':
    console.log('Sprint möte med gruppen');
    break;
  case 'tuesday':
  case 'wednesday':
    console.log('Skriver kod');
    break;
  case 'thursday':
    console.log('Möte med utvecklarna');
    break;
  case 'friday':
    console.log('Varvar ner inför helgen😁');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Nu tar vi det lugnt');
    break;
}
*/

/* Strict Mode */
//Att tvinga oss att skriva bättre och säkrare kod...
//Deklareras högst upp i JavaScript filen...
//'use strict';

/* TERNARY OPERATOR I JAVASCRIPT */
//One-line if och else
const time = 23;
time >= 23
  ? console.log('Det är läggdags!')
  : console.log('Du får vara vaken!');
