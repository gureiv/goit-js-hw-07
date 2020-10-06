const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", inputFocus);
function inputFocus() {
  if (inputFocus.value.length == inputFocus.dataset.length) {
    inputFocus.classList.add(".valid");
    inputFocus.classList.remove(".invalid");
  } else {
    inputFocus.classList.remove(".valid");
    inputFocus.classList.add(".invalid");
  }
}
