
const token = JSON.parse(sessionStorage.getItem('token'))

if (!token) {
    document.querySelector("body").innerHTML = `
<img src="../images/Spinner.gif" alt="loading..." class="loaderIMG">
`
setTimeout(()=>{ location = "./pageError.html"},3000)
 }
    

else {
    
    document.querySelector("body").innerHTML = `

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel </title>
    <link rel="stylesheet" href="./CSS/admin.css">
</head>
<body>
    <div class="header">
      
      <center><img src="../images/adminLogo.png" alt="Admin Logo" class="logo_image">
        <br>Admin Pannel</center> 
        
        <a href="index.html" id="login_css" style="color: #0b0b0b; text-decoration: none;">Back To Portfolio</a>
    </div>
    

    <div class="sidebar">
      <ul>
          <li><a href="create.html">Create a new Post</a> </li>
          <li><a href="update.html">Update and Delete Posts</a> </li>
          <li><a href="messages.html">Messages From Clients</a> </li>
          <li><a href="getUsers.html">View Signed Up Users</a> </li>
          <li><a href="admin.html">Back To Home</a> </li>
          
      </ul> 
    </div>

    <div class="data"><br>
      <button><a href="create.html">Create a new Post</a></button>
      <button><a href="update.html">Update and Delete Posts</a></button>
      <button><a href="messages.html">Messages From Clients</a></button>
      <button><a href="getUsers.html">View Signed Up Users</a></button>
    </div>
    
</body>
</html>

`
    
}