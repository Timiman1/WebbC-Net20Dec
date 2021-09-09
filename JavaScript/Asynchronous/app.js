const buttonLoadText = document
  .querySelector('#btnText')
  .addEventListener('click', getText);
const buttonLoadJson = document
  .querySelector('#btnJson')
  .addEventListener('click', getJson);
const buttonLoadExternal = document
  .querySelector('#btnExternalData')
  .addEventListener('click', getExternalData);
const spinner = document.querySelector('#spinner');
const displayView = document.querySelector('#display');

//Funktion som visar upp datat på sidan...
function renderHtml(html) {
  //Göm spinner...
  spinner.classList.add('hidden');
  //Visa html
  displayView.innerHTML = html;
}
