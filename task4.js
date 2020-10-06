let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const decrement = () => {
  console.log((counterValue = --document.querySelector("#value").textContent));
  console.log(`Значение счетчика ${counterValue}`);
};
decrementBtn.addEventListener("click", decrement);
const incrementBtn = document.querySelector('[data-action="increment"]');
const increment = () => {
  console.log((counterValue = ++document.querySelector("#value").textContent));
  console.log(`Значение счетчика ${counterValue}`);
};
incrementBtn.addEventListener("click", increment);
