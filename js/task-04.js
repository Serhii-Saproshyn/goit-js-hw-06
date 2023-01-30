const refs = {
  decrement: document.querySelector('button[data-action="decrement"]'),
  increment: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

refs.decrement.addEventListener("click", onDecrement);
refs.increment.addEventListener("click", onIncrement);

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
