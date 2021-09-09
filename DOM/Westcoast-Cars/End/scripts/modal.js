const modalDialog = document.querySelector('.modal');
const closeDialog = document.querySelector('.close-modal');

/******************************************************************************/
//HANTERING AV DEN MODALA DIALOGRUTAN
/******************************************************************************/

closeDialog.addEventListener('click', closeModal);

//Funktion för att skapa upp den modala dialogrutan.
function openModal(html) {
  const dialog = modalDialog.querySelector('.modal-container');
  dialog.innerHTML = html;

  modalDialog.classList.remove('hidden');
}

//Funktion för att stänga det modala fönstret om man trycker på ESC knappen...
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!modalDialog.classList.contains('hidden')) {
      closeModal();
    }
  }
});

//Funktion för att stänga det modala fönstret...
function closeModal() {
  modalDialog.classList.add('hidden');
}
