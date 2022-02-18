const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorEmail = document.getElementById('errorEmail');
errorEmail.style.display = "none";
const errorPassword = document.getElementById('errorPassword');
errorPassword.style.display = "none";
const errorValidation = document.getElementById('errorValidation');
errorValidation.style.display = "none";
const incorrectLogin = document.getElementById('incorrectLogin');
incorrectLogin.style.display = "none";

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    const errorEmail = document.getElementById('errorEmail');
    errorEmail.style.display = "block";
    const errorPassword = document.getElementById('errorPassword');
    errorPassword.style.display = "block";
    const errorValidation = document.getElementById('errorValidation');
    errorValidation.style.display = "block";
 
    checkInputs();
})

function checkInputs(){
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === ''){
        setErrorEmailFor('Username / Email cannot be blank');
      }
    else{
        setSuccessEmailFor(email);
      }

      if(passwordValue === ''){
        setErrorPasswordFor('Password cannot be blank');
      }
    else{
        setSuccessPasswordFor(password);
      }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailValue.match(mailformat))
{
    setSuccessValidationFor(email);
}
else
{
    setErrorValidationFor('Invalid email');
}  

}

function setErrorEmailFor(message){
    const errorEmail = document.getElementById('errorEmail');
    errorEmail.innerText = message; 
}

function setSuccessEmailFor(input){
    const errorEmail = document.getElementById('errorEmail');
    errorEmail.style.display = "none";
}

function setErrorValidationFor(message){
    const errorValidation = document.getElementById('errorValidation');
    errorValidation.innerText = message; 
}

function setSuccessValidationFor(input){
    const errorValidation = document.getElementById('errorValidation');
    errorValidation.style.display = "none";
}

function setErrorPasswordFor(message){
    const errorPassword = document.getElementById('errorPassword');
    errorPassword.innerText = message; 
}

function setSuccessPasswordFor(input){
    const errorPassword = document.getElementById('errorPassword');
    errorPassword.style.display = "none";
}

