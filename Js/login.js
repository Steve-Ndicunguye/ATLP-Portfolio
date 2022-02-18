let loginForm = document.getElementById('loginForm')
const spinner = document.getElementById('spinner');
spinner.style.display = "none";
loginForm.addEventListener('submit', e=> {
    e.preventDefault()
const spinner = document.getElementById('spinner');
spinner.style.display = "block";
    spinner.innerHTML =`
<img src="../images/Spinner.gif" alt="loading..." width="40px" height="40px">` ;
    login()
})
const login = () => {

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let userData = {
        email: email,
        password: password
    }
    let fetchData = {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8'
        })
    }
    
    fetch('https://my-porfolio-rest-api.herokuapp.com/login', fetchData)

.then(response => response.json())
.then(data => {
    console.log(data)
 
 sessionStorage.setItem("token",JSON.stringify(data.token))
//  let permission = sessionStorage.getItem("token")
 if(data.role == 'admin'){
 setTimeout(()=>{  location = "./admin.html"},3000)
 }else if(data.role == 'user'){
    setTimeout(()=>{ location = "./index.html"},3000)
   location = "./blog.html"
 }
 
});
console.log("request sent")
}



