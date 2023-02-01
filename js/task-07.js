const refs = {
  range: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};
refs.text.style.fontSize = refs.range.value + "px";
refs.range.addEventListener("input", (event) => {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
});
