const refs = {
  input: document.querySelector('input[type="number"]'),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  boxesContainer: document.querySelector("#boxes"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.btnCreate.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", destroyBoxes);
const boxes = [];
function createBoxes(amount) {
  amount = Number(refs.input.value);
  boxes.fill("");
  boxes.length = amount;
  for (let i = 0; i < boxes.length; i += 1) {
    let box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = 30 + i * 10 + "px";
    box.style.height = 30 + i * 10 + "px";
    boxes[i] = box;
  }
  return refs.boxesContainer.append(...boxes);
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = "";
  refs.input.value = "";
}
