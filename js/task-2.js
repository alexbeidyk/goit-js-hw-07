'use strict';

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsRef = document.querySelector('#ingredients');

const ingredientsArr = ingredients.map((item) => {
  const ingredientsLi = document.createElement('li');
    ingredientsLi.textContent = item;
      ingredientsRef.append(ingredientsLi)
        return ingredientsRef;
});