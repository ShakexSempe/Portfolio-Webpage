// DIALOG ELEMENTS
const html_modal = document.getElementById('html-modal');
const html_dialog = document.querySelector(".html-dialog");
const css_modal = document.getElementById('css-modal');
const css_dialog = document.querySelector(".css-dialog");
const js_modal = document.getElementById('js-modal');
const js_dialog = document.querySelector(".js-dialog");
const html_modal_close = document.querySelectorAll(".modal-close");
const css_modal_close = document.querySelectorAll(".modal-close");
const js_modal_close = document.querySelectorAll(".modal-close");
// console.log(modal_close);

html_modal.addEventListener('click', () => {
  html_dialog.showModal();
})
html_modal_close.forEach(item => {
  item.addEventListener('click', () => {
    html_dialog.close();
  })
})

css_modal.addEventListener('click', () => {
  css_dialog.showModal();
})
css_modal_close.forEach(item => {
  item.addEventListener('click', () => {
    css_dialog.close();
  })
})

js_modal.addEventListener('click', () => {
  js_dialog.showModal();
})
js_modal_close.forEach(item => {
  item.addEventListener('click', () => {
    js_dialog.close();
  })
})

// const dialog = document.querySelector("dialog");
