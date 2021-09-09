'use strict';

//Skapa en referens variabel till vår section med klassen gallery.
const gallery = document.querySelector('.gallery');
const modalDialog = document.querySelector('.modal');
const closeDialog = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

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

//skriv om ovanstående for let loop till en forEach loop.
vehicles.forEach((car) => {
  gallery.insertAdjacentHTML(
    'beforeend',
    `<div class="car">
      <img id="${car.id}" src="./content/img/${car.imageName}.jpg" alt="${car.make}" />
      <p>${car.make} ${car.model}</p>
  </div>`
  );
});

const images = document.querySelectorAll('.car img');

images.forEach((image) => {
  const src = image.getAttribute('src');
  const id = image.getAttribute('id');
  //console.log(src, id);

  image.addEventListener('click', () => {
    //console.log(src, id);
    //Nu ska vi skapa en modal dialogruta.
    openModal(src, id);
  });
});

/******************************************************************************/
//HANTERING AV DEN MODALA DIALOGRUTAN
/******************************************************************************/

closeDialog.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//document.querySelector('.close-modal').addEventListener('click', closeModal);

//Funktion för att skapa upp den modala dialogrutan.
function openModal(imageSource, id) {
  const image = modalDialog.querySelector('.modal-container');
  image.innerHTML = `<img src="${imageSource}" alt=""/><a class="btn" href="car-detail.html?vehicleId=${id}">Mer Information</a>`;

  overlay.classList.remove('hidden');
  modalDialog.classList.remove('hidden');
}

//Funktion för att stänga det modala fönstret om man trycker på ESC knappen...
document.addEventListener('keydown', (e) => {
  console.log(e.key);
  if (e.key === 'Escape') {
    if (!modalDialog.classList.contains('hidden')) {
      closeModal();
    }
  }
});

//Funktion för att stänga det modala fönstret...
function closeModal() {
  modalDialog.classList.add('hidden');
  overlay.classList.add('hidden');
}
