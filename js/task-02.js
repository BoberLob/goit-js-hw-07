
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ulEl = document.querySelector('#ingredients');

const listElOfLi = ingredients.map(ingredient=>{
  const liEl= document.createElement('li');
  liEl.textContent= ingredient;
  return liEl;
});

ulEl.append(...listElOfLi);