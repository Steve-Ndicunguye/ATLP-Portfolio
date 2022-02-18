const form = document.getElementById('signupForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const error = document.getElementById('error');
error.style.display = "none";
const errorEmail = document.getElementById('errorEmail');
errorEmail.style.display = "none";
const errorPassword = document.getElementById('errorPassword');
errorPassword.style.display = "none";
const errorValidation = document.getElementById('errorValidation');
errorValidation.style.display = "none";
const firstnameValidation = document.getElementById('firstnameValidation');
errorValidation.style.display = "none";
const lastnameValidation = document.getElementById('lastnameValidation');
errorValidation.style.display = "none";

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    const error = document.getElementById('error');
    error.style.display = "block";
    const errorEmail = document.getElementById('errorEmail');
    errorEmail.style.display = "block";
    const errorPassword = document.getElementById('errorPassword');
    errorPassword.style.display = "block"; 
    const errorValidation = document.getElementById('errorValidation');
    errorValidation.style.display = "block";
    const firstnameValidation = document.getElementById('firstnameValidation');
errorValidation.style.display = "block";
const lastnameValidation = document.getElementById('lastnameValidation');
errorValidation.style.display = "block";
    checkInputs();
})

function checkInputs(){
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();

    
    if(emailValue === ''){
        setErrorEmailFor('email cannot be blank');
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

      if(firstnameValue === ''){
        setErrorFirstnameFor('First name cannot be blank');
      }
    else{
        setSuccessFirstnameFor(firstname);
      }

      if(lastnameValue === ''){
        setErrorLastnameFor('Last name cannot be blank');
      }
    else{
        setSuccessLastnameFor(lastname);
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

function setErrorFor(message){
    const error = document.getElementById('error');
    error.innerText = message;
}

function setErrorEmailFor(message){
    const errorEmail = document.getElementById('errorEmail');
    errorEmail.innerText = message; 
}

function setErrorFirstnameFor(message){
    const firstnameValidation = document.getElementById('firstnameValidation');
    firstnameValidation.innerText = message; 
}

function setErrorPasswordFor(message){
    const errorPassword = document.getElementById('errorPassword');
    errorPassword.innerText = message; 
}

function setErrorLastnameFor(message){
    const lastnameValidation = document.getElementById('lastnameValidation');
    lastnameValidation.innerText = message; 
}



function setSuccessFor(input){
    const error = document.getElementById('error');
    error.style.display = "none";
}

function setSuccessEmailFor(input){
    const errorEmail = document.getElementById('errorEmail');
    errorEmail.style.display = "none";
}

function setSuccessPasswordFor(input){
    const errorPassword = document.getElementById('errorPassword');
    errorPassword.style.display = "none";
}


function setErrorValidationFor(message){
    const errorValidation = document.getElementById('errorValidation');
    errorValidation.innerText = message; 
}

function setSuccessValidationFor(input){
    const errorValidation = document.getElementById('errorValidation');
    errorValidation.style.display = "none";
}

function setSuccessFirstnameFor(input){
    const firstnameValidation = document.getElementById('firstnameValidation');
    firstnameValidation.style.display = "none";
}

function setSuccessLastnameFor(input){
    const lastnameValidation = document.getElementById('lastnameValidation');
    lastnameValidation.style.display = "none";
}






    
