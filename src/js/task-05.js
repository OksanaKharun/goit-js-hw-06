
const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const placeholder = (event) => {
    outputName.textContent = inputName.value !== ''
        ? event.currentTarget.value
        : 'Anonymous';
};
inputName.addEventListener('input', placeholder);