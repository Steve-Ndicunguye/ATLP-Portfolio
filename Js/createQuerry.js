let ContactForm = document.getElementById("form")
let messageSuccess = document.getElementById("message");
 messageSuccess.style.display = "none";
function storeMessage() {
 
 let sendName = document.getElementById("name").value;
 let email = document.getElementById("email").value;
 let message = document.getElementById("details").value;
 let messageSuccess = document.getElementById("message");
 messageSuccess.style.display = "block";
 messageSuccess.innerHTML =`
<img src="../images/Spinner.gif" alt="loading..." width="50px" height="50px">` ;

setTimeout(function(){
   messageSuccess.innerHTML = 'Message Sent' ;
  }, 4000);

  
 
 if(sendName == '' || email == "" || message == ""){
    return;
 }else{
 
    const UserRequestOptions = {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
    
          name: sendName,
          email: email,
          query: message
    
    
       })
    };
    
    fetch('https://my-porfolio-rest-api.herokuapp.com/contact/createQuerry', UserRequestOptions)
     
       .then(response => response.json())
       .then(data => {console.log(data)})
       console.log("deal done")
    
 }
  

 }