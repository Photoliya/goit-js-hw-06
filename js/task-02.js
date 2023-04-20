const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsList = document.querySelector("#ingredients");

const itemsList = ingredients.map((item) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = `${item}`;
  ingredient.classList.add("item");
  return ingredient;
});
ingridientsList.append(...itemsList);

console.log(ingridientsList)