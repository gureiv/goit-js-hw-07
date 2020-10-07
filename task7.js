const inputElement = document.querySelector("#font-size-control");
inputElement.addEventListener("input", onInput);
function onInput() {
  const size = inputElement.value;
  document.body.style.fontSize = size + "px";
}
