
const loginFormRef = document.querySelector('.login-form');
loginFormRef.addEventListener('submit', loginForm);

function loginForm (event) {
    event.preventDefault();
    const {
        elements: {email , password }
      } = event.currentTarget;
      if (!email.value.trim() || !password.value.trim()) {
    return alert('Please fill in all the fields!');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
     loginFormRef.reset();
  }
}
