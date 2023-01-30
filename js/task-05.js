const refs = {
  input: document.querySelector("#name-input"),
  name: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    return (refs.name.textContent = "Anonymous");
  }
  refs.name.textContent = event.currentTarget.value;
});
