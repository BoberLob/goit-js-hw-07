// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//  после чего вставит все li за одну операцию в список ul.ingredients.
//  Для создания DOM - узлов используй document.createElement().
const allElOfMainList = document.querySelectorAll('.item'); // Объект NodeList 
console.log(`В списке ${allElOfMainList.length} категории`)

allElOfMainList.forEach(el=> {const newTitle = el.querySelector('h2'); 
console.log(`Категория: ${newTitle.textContent}`);

const newItem = el.querySelectorAll('li')
console.log(`Количество элементов: ${newItem.length}`)
});
