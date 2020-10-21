const inputAs = document.querySelector("#validation-input");
function inputFocus() {
  if (inputAs.value.length === inputAs.dataset.length) {
    inputAs.classList.add("valid");
    inputAs.classList.remove("invalid");
  } if(inputAs.value.length != inputAs.dataset.length) {
    inputAs.classList.remove("valid");
    inputAs.classList.add("invalid");
  } if (inputAs.value.length === 0) {
    inputAs.classList.remove("invalid");
  }
}
inputAs.addEventListener("blur", inputFocus);