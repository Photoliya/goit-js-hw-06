const counter = document.querySelector("#value");

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let counterValue = 0;

function decreaseValue() {
  counterValue += -1;

  counter.textContent = counterValue;
}

function increaseValue() {
  counterValue += 1;

  counter.textContent = counterValue;
}

decrementButton.addEventListener("click", decreaseValue);
incrementButton.addEventListener("click", increaseValue);
