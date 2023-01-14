const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemPotatoesEl = document.createElement("li");
itemPotatoesEl.textContent = ingredients[0];
itemPotatoesEl.classList.add("item");

const itemMushroomsEl = document.createElement("li");
itemMushroomsEl.textContent = ingredients[1];
itemMushroomsEl.classList.add("item");

const itemGarlicEl = document.createElement("li");
itemGarlicEl.textContent = ingredients[2];
itemGarlicEl.classList.add("item");

const itemTomatosEl = document.createElement("li");
itemTomatosEl.textContent = ingredients[3];
itemTomatosEl.classList.add("item");

const itemHerbsEl = document.createElement("li");
itemHerbsEl.textContent = ingredients[4];
itemHerbsEl.classList.add("item");

const itemCondimentsEl = document.createElement("li");
itemCondimentsEl.textContent = ingredients[5];
itemCondimentsEl.classList.add("item");

const listEl = document.getElementById("ingredients");
listEl.append(
  itemPotatoesEl,
  itemMushroomsEl,
  itemGarlicEl,
  itemTomatosEl,
  itemHerbsEl,
  itemCondimentsEl
);
