const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngridients = document.querySelector('#ingredients');

ingredients.forEach(ingredient = {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  ul.appendChild(li);
});