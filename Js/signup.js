const signupForm = document.getElementById("signupForm");
const message = document.getElementById('message');
message.style.display = "none";
const messageSuccess = document.getElementById('messageSuccess');
messageSuccess.style.display = "none";
signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const messageSuccess = document.getElementById('messageSuccess');
    messageSuccess.style.display = "block";
    const message = document.getElementById('message');
    message.style.display = "block";
    
    signup();
})

async function signup(){
    let fName = document.getElementById("firstname").value
    let lName = document.getElementById("lastname").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let data = {
        email: email,
        password: password,
        firstname: fName,
        lastname: lName
    }
    let fetchData = {
      method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            // 'Authorization': `Bearer ${user.token}`
        })
    }
    fetch(`https://my-porfolio-rest-api.herokuapp.com/register/`, fetchData)
    .then((response)=>{
      return response.json()
    }).then((datas)=>{
        console.log(datas);
        if (datas.message == 'User already exists') {
        const exists = document.getElementById('message')
        exists.innerText = datas.message;
            // alert(datas.message)
          }
          else {
        const success = document.getElementById('messageSuccess')
        success.innerText = datas.success;

        setTimeout(function(){
        signupForm.reset();
        location.href = `./login.html`
       }, 4000);
        
        }
    
    })
    .catch(()=>{

    })
}