
const myForm = document.querySelector('inputField');
myForm.noValidate = true
myForm.addEventListener('submit', validateForm)
// validate form on submission
function validateForm(e) {

    const form = e.target;
  
    if (form.checkValidity()) {
      // form is valid - make further checks
    }
    else {
      // form is invalid - cancel submit
      e.preventDefault();
  
    }
};

checkPasswords = () => {
    const pass = document.getElementById('password');
    const confirmPass = document.getElementById('confirmPass');
    const resultDiv = document.getElementById('resultDiv');
    if (pass === confirmPass) {
        resultDiv.textContent = 'Passwords match';
    } else {
        return console.log('valid input')
    }};


