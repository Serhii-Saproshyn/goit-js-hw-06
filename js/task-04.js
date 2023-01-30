const refs = {
  decrementEl: document.querySelector('button[data-action="decrement"]'),
  incrementEL: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

refs.decrementEl.addEventListener("click", onDecrement);
refs.incrementEL.addEventListener("click", onIncrement);

function onDecrement() {
  counterValue -= 1;
  return setValue(counterValue);
}

function onIncrement() {
  counterValue += 1;
  return setValue(counterValue);
}

function setValue(value) {
  return (refs.value.innerHTML = value);
}
