let box = document.querySelector('.box');
let input = document.querySelector('input');

input.addEventListener('input', () =>{
    box.style.borderRadius = input.value;
    box.style.background = input.value;
})