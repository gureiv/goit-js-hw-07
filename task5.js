const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", onInputChange);
function onInputChange(element) {
  if (element.currentTarget.value !== 0) {
    output.textContent = element.currentTarget.value;
  } else {
    output.textContent = "незнакомец";
  }
}
