// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputCheck)

function onInputCheck(event){
if(event.currentTarget.value.length === Number(input.dataset.length)){
    input.classList.add('valid')
    input.classList.remove('invalid')
    return; 
} input.classList.add('invalid')
input.classList.remove('valid')
return;
}