const categoriesEl = document.querySelector("#categories");
const categoriesChildrenEl = categoriesEl.children;
const listOfCategories = categoriesEl.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesChildrenEl.length}`);

function getCategories(items) {
  for (const item of items) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  }
}

getCategories(categoriesChildrenEl);
