'use strict';

//Skapa en referens variabel till vår section med klassen gallery.
const gallery = document.querySelector('.gallery');

//Loopa igenom alla bilar i vehicles listan/array
// for (let car of vehicles) {
//   gallery.insertAdjacentHTML(
//     'beforeend',
//     `<div class="car">
//       <img src="./content/img/${car.imageName}.jpg" alt="${car.make}" />
//       <p>${car.make} ${car.model}</p>
//   </div>`
//   );
// }

//skriver om ovanstående till en forEach loop.
vehicles.forEach((car) => {
  gallery.insertAdjacentHTML(
    'beforeend',
    `<div class="car">
      <img src="./content/img/${car.imageName}.jpg" alt="${car.make}" />
      <p>${car.make} ${car.model}</p>
  </div>`
  );
});
