/* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
 */

let counterValue = 0; 

const decrementBtn = 
document.querySelector('button[data-action="decrement"]')

const totalValue = document.querySelector('#value');


const incrementBtn =
document.querySelector('button[data-action="increment"]')

decrementBtn.addEventListener('click', onTargetDecrementBtnClick);

function onTargetDecrementBtnClick(){
    counterValue-=1;
    totalValue.innerHTML=counterValue;
};

incrementBtn.addEventListener('click', onTargetIncrementBtnClick);
 
function onTargetIncrementBtnClick (){
    counterValue+=1;
    totalValue.innerHTML=counterValue;
};