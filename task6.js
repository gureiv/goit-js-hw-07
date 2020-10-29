const inputValueEl = document.querySelector("#validation-input");
inputValueEl.addEventListener("blur", validation);
function validation() {
  if ( inputValueEl.value.length === Number(inputValueEl.dataset.length)) {
    inputValueEl.classList.remove("invalid");
    inputValueEl.classList.add("valid");
  }else {
    inputValueEl.classList.add("invalid");
    inputValueEl.classList.remove("valid");
  }
}