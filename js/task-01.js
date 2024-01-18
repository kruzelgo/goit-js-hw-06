const categoriesList = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("ul li").length;
  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
