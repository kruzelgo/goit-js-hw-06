const ingredientsList = document.querySelector("#ingredients");
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingredientsList = document.createElement("ingredients");
console.log(ingredientsList);

const items = ingredients.map((ingredient) => {
  const listElement = document.createElement("li");

  listElement.textContent = ingredient;

  listElement.classList.add("item");

  return listElement;
});
ingredientsList.append(...items);
