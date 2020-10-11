let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const argument = document.querySelector("#value")
const decrement = () => {
  console.log(counterValue = --argument.textContent);
  console.log(`Значение счетчика ${counterValue}`);
};
decrementBtn.addEventListener("click", decrement);
const incrementBtn = document.querySelector('[data-action="increment"]');
const increment = () => {
  console.log(counterValue = ++argument.textContent);
  console.log(`Значение счетчика ${counterValue}`);
};
incrementBtn.addEventListener("click", increment);
