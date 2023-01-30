const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const items = [];
function createIngredientsItemEl(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let ingredientsItemEl = document.createElement("li");
    ingredientsItemEl.classList.add("item");
    ingredientsItemEl.textContent = arr[i];
    items.push(ingredientsItemEl);
  }
  return items;
}

createIngredientsItemEl(ingredients);
ingredientsEl.append(...items);

console.log(ingredientsEl);
