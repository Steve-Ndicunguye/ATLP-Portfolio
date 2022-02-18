let a = document.getElementById("board");

    let b = `  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>new article</title>
    
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
          *{
             font-family: 'Roboto', sans-serif;
             
           }
          .trafficsource{
              width: 80%;
              height: 70vh;
              background-color: #dde9f0;
              margin: auto;
              
              overflow-y: scroll;
              transition: 2s;
          }

          .usersLocation{
              width: 100%;
              background-color: rgb(148, 130, 27);
              height: 10%;
              
    
          }
          th{
            
            top:8px;
            transition:2s;

          }
          .usersLocation p{
              text-align: center;
              font-size: 28px;
              padding-top: 12px;
              color: white;
          }
          .cen{
              margin-left: 30%;
              width: 50%;
              margin-bottom: 5px;
          }
          .btn1{
              width: 51%;
              margin-left: 30%;
          }
          .long, .lat{
              background-color: rgb(235, 231, 231);
              border-radius:1px;
              width:25%;
              color:black;
              text-align: center;
          }
          .long:hover{

            background-color:white;

          }
           .lat:hover{
              background-color:white;
          }

          .table1{
            background-color: rgb(235, 231, 231); 
            color: rgb(148, 130, 27);
            padding-bottom: 50px;
          }
      </style>
      
    
    
    
    </head>
    <body>
    
    
        <div class="trafficsource">
            <div class="usersLocation">
                <p>Signed Up Users</p>
            </div>

            <!--end of title-->
            
            <table class="table1">
                <tr>
                  <th> First Name</th> 
                  <th> Last Name</th> 
                  <th> Email</th>
                  <th> Role</th>
                </tr>
            
                    
                


                <tbody id="mytable">
            
                </tbody>
            
            </table>
        
           
        </div>
        
        
    </body>
    </html>  
   
    `
    

    a.innerHTML= `${b}`;
    

    
    

    async function buildTable(){
    
        const UsersOptions = {
            method: 'GET',
            headers: { 'auth-token': JSON.parse(sessionStorage.getItem('token'))},
         };
         
        let response = await fetch("https://my-porfolio-rest-api.herokuapp.com/getAllUsers",UsersOptions)
        const allUsers = await response.json(); 
        console.log(allUsers);


            
                for(let i=0;i<allUsers.length;i++){
            
                
                    let arr1 = allUsers[i]
                    let long1 = arr1.firstname;
                    let long2 = arr1.lastname;
                    let lat   = arr1.email;
                    let role   = arr1.role;
                
                    console.log(arr1)
                
                    
            
              if(1> 0) {
                
              
            
              
        

        let arr = [
        {longitude:`${long1}`,longitude2:`${long2}`, latitude:`${lat}`,role:`${role}`},
        
       
       ];
    
       let mytable = document.getElementById("mytable");
       for(let i of arr) {
        mytable.innerHTML += `
        <tr class="fetched">
         <td class="long">${i.longitude}</td>    
         <td class="long">${i.longitude2}</td>    
         <td class="lat">${i.latitude}</td>
         <td class="lat">${i.role}</td>
        </tr>
        
        `
       }
    
       }
    }
    
    
    } buildTable()
    


