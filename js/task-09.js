const refs = {
  button: document.querySelector(".change-color"),
  currentColor: document.querySelector(".color"),
};

refs.button.addEventListener("click", onChangeColor);

function onChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.currentColor.textContent = document.body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
