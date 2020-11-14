'use strict';

const category = document.querySelector('#categories');

console.log(`В списке ${category.childElementCount} категории`);

const categoryItem = document.querySelectorAll('.item');

const getItem = categoryItem.forEach(item =>
    console.log(`Категория ${item.children[0].textContent}\nКолличество елементов: ${item.children[1].childElementCount}`));
