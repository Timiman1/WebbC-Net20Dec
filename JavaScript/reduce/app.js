/*
  PLOCKA UT OCH RETURNERA ETT SAMMANSLAGET RESULTAT...
*/

const transactions = [100, -50, 800, 450, -675];

//funktion som tar in accumulerat värde samt nästa värde i listan...
const balance = transactions.reduce(function (acc, cur, index, arr) {
  console.log('Accumulerat ', acc);
  console.log('Current ', cur);
  console.log('Index ', index);
  console.log('Arr ', arr);

  return acc + cur;
});

console.log('balans: ', balance);
