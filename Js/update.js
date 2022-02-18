let deletePost=(myKey) => {



    const deleteOptions = {
    
        method: 'DELETE',
        headers: {
        
         'auth-token': JSON.parse(sessionStorage.getItem('token'))
     
       },
    }



    fetch('https://my-porfolio-rest-api.herokuapp.com/posts/deletePost/'+myKey, deleteOptions)
    
    .then(response => {
        if(response.status == 204){
            alert('Post Deleted')
        }
        else{
            alert("Oppss!!!... Error, Can't delete post")
        }
    })
}



function saveChange(myKey){
    let title1 = document.querySelector(".ed").value;
    let body1 = document.querySelector(".er").value;
    let imageLink = document.querySelector(".img").value;

    console.log(body1)
 
    const UpdateOptions = {

    
        method: 'PUT',
        headers: {
         'Content-Type':'application/json',
         'auth-token': JSON.parse(sessionStorage.getItem('token'))
     
       },
       body: JSON.stringify({
   
        title: title1,
        body: body1,
        imgLink: imageLink
        
  
  
     })
    }

    fetch('https://my-porfolio-rest-api.herokuapp.com/posts/updatePost/'+myKey, UpdateOptions)
    .then(response => {
        if(response.status == 200){
            alert('Post Updated')
        }
        else{
            alert("Oppss!!!... Error, Can't update post")
        }
    })

}


    let a = document.getElementById("board");

    let b = `
    <!DOCTYPE html>
    <html lang="en">
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
          .articlebox{
              width: 90%;
              height: 80vh;
              background-color: #dde9f0; 
              margin: auto;
              overflow-y: scroll;
              overflow-x: hidden;
              
          }

          .newArticle{
              width: 100%;
              background-color: rgb(148, 130, 27);
              height: 10%;
              
          }
          .newArticle p{
              text-align: center;
              font-size: 30px;
              padding-top: 18px;
              color: white;
          }
          .articleContainer{
              width: 100%;
              height: 400px;
              box-shadow:0px 0px 3px rgb(148, 130, 27);
              border:2px solid rgb(148, 130, 27);
              border-right:none;
              display: flex;
              justify-content:space-between;
              
          }
          .articleImage{
              width: 100%;
              height: 100%;
              border-radius: 3px;
              
          }
          .titleBodyButtons{
           width: 70%;
           height: 100%;
          }.save, .delete {
            width: 30%;
            border:none;
          }
          .save{
              background-color:rgb(148, 130, 27);
              font-size: 25px;
              width: 25%;
          }.delete{
              background-color: rgb(240, 83, 83);
              font-size: 25px;
              width: 25%;
          }
          .save:hover{
              opacity: 0.9;
          }.delete:hover{
            opacity: 0.9;
          }.articleBdy{
              width:100%
              
          }
          textarea {
            
            width:97%;
            font-size: 16px;
        }
        .ed{
            font-size: 19px;
            height: 20%;
        }
        .er{
            height: 40%;
        }
          .articleBody{
              width: 100%;
              margin-right:0;
              border: none;
              outline: none;
          }
          .articleTitle{
            width: 100%;
            margin-right:0;
            border: none;
            outline: none;

          }
          .articleBody{
              font-size: 10px;
              margin-top:-30px;
              padding-top:0;
          }
          .articleTitle{
              margin-top:20px;
          }

      </style>
    
    
    </head>
    <body>
    
    
        <div class="articlebox result">
            <div class="newArticle">
                <p>Update and Delete Posts</p>
            </div>
                        <div id="result1"></div>

            <!--end of title-->

         
        </div>


    </body>
    </html>
    `    
   
   
    a.innerHTML= `${b}`;
   
    

   async function art(){
        


        let response = await fetch("https://my-porfolio-rest-api.herokuapp.com/posts/getAllPosts")
        const allPosts = await response.json(); 
        const posts = allPosts.blog;
        console.log(posts[4]);

        for(let i=0;i<posts.length;i++){
            let arr = posts[i];
            let title = arr.title;
            let img   = arr.imgLink;
            let articleBody = arr.body;
            let comments = arr.comments;
            let like = parseInt(arr.likes);
            let type = arr.type;
          
                
displayer = document.getElementById("result1");
                    
            
                     if(1>0) {
                 
              
                 let myKey =await arr._id ;

         

        displayer.innerHTML += `<div class="articleContainer">
        <div><img src="${img}" class="articleImage"></div>
        <div class="titleBodyButtons">
            <textarea class="articleBdy ed">${title}</textarea>
            <textarea class="articleBdy er">${articleBody}</textarea>
            <textarea class="articleBdy img">${img}</textarea>
            
            <div class="articleBtns">
                <button type="submit" class="save" id= '${myKey}' onclick="saveChange('${myKey}')">Update</button>
                <button type="submit" class="delete" id= '${myKey}' onclick="deletePost('${myKey}')">Delete</button>

            </div>
        </div>                
        <div>
        <br/>

        `
        
       }
       
    }



 } art()
    


  






       
    