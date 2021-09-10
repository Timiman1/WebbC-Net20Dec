const contactUsBtn = document.querySelector('.btn');

contactUsBtn.addEventListener('click', () => {
  openModal(generateHtml(), '400px');
});

function generateHtml() {
  return `<div class="form">
        <h4>Kontakt formulär</h4>
        <div class="mb-2">
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder="Ange namn"
          />
        </div>
        <div class="mb-2">
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder="Ange telefonnr"
          />
        </div>
        <div class="mb-2">
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder="Ange e-post"
          />
        </div>
        <div>
          <button class="btn">Skicka</button>
        </div>
      </div>`;
}
