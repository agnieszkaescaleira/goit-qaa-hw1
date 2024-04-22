const categories = document.querySelectorAll('#categories .item');
console.log('Number of categories: '+ categories.length);

categories.forEach(category => {
    const nameCategory = category.querySelector('h2').textContent
    console.log('Category : ' + nameCategory);
    const numberOfElement = category.querySelectorAll('li').length
    console.log('Elements: ' + numberOfElement);
});
