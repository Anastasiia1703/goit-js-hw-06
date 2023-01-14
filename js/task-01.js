const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

const categoriesArray = [...categoriesEl].map((elements) => {
  console.log(`Category: ${elements.children[0].textContent}`);
  console.log(`Elements: ${elements.children[1].children.length}`);
});
