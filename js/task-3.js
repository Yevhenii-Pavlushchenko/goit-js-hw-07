const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

input.addEventListener('input',() =>{
    const inputNormalize = input.value.trim();
    input.value.trim() === ''
    ? output.textContent = 'Anonymous'
    : output.textContent = inputNormalize

})