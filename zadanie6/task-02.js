const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.getElementById("ingredients");

const listItems = ingredients.map(ingredient => {
   const listItem = document.createElement("li");
   listItem.textContent = ingredient;
   listItem.classList.add("item");
   return listItem;
});

listItems.forEach(item => {
   ulIngredients.appendChild(item);
});