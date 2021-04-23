// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const input = document.querySelector('#name-input');
const spanOutput = document.querySelector('#name-output');

input.addEventListener('input', onInputDo);

function onInputDo(element){
    input.value === '' 
    ? spanOutput.textContent = 'незнакомец' 
    : spanOutput.textContent = element.currentTarget.value;
};