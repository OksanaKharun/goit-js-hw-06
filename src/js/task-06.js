
const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (event)=> {
  
  if (inputEl.getAttribute('data-length') === event.currentTarget.value.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
})