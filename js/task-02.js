const listEl = document.querySelector("#ingredients");
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemsEl = ingredients.map((el) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = el;
  itemEl.classList.add("item");
  return itemEl;
});

listEl.append(...itemsEl);
