//>>>>>>>>>>>>>>>>>>>>>>>>>fetching Commet<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


const fetchingCommet = async () => {
    let currentPostId  = JSON.parse(localStorage.getItem('currentPostId'));
    articleUrl = `https://my-brand-api-v2.herokuapp.com/api/articles/${currentPostId}`
    
    
    let response = await fetch(articleUrl)
        const Commentdisplayer = document.querySelector("#kk");
        const SinglePost = await response.json();
        const setOfComments = SinglePost.articles.Comments;
    
        for(let i=0;i<setOfComments.length;i++){
            console.log(setOfComments[i])
    
    
    
        let commmentTemplete = `
          <div class="comment-container"><br/>
                <div class="sendName">
                    <p id="sendName">${setOfComments[i].username}</p>
                </div>
                <div class="commentBody">
                    <p id="commentBody">${setOfComments[i].comment} </p>
                </div><br/>
        
            </div>
          
          
          `
          Commentdisplayer.innerHTML += commmentTemplete;
    
    
    
    }
    }
    
//>>>>>>>>>>>>>>>>>>>>>>>>>Posting a comment<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


const createCommet = async () => {
commentBody = document.getElementById("commentBody").value;
console.log("coment body",commentBody)
const commentOptions = {
    
   method: 'PATCH',
   headers: {
    'Content-Type': 'application/json',
    'token': JSON.parse(sessionStorage.getItem('token'))

  },
    body: JSON.stringify({
      
        "comments":commentBody
        
     })
};
console.log("coment body",commentBody)

let currentPostId  = JSON.parse(localStorage.getItem('currentPostId'));

fetch(`https://my-brand-api-v2.herokuapp.com/api/articles/comments/${currentPostId}`, commentOptions)

setTimeout(() => {location.reload()}, 5000);


     

}


//>>>>>>>>>>>>>>>>>>>>>>>>>liking post<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

 const liking = async() => {


    let currentPostId  = JSON.parse(localStorage.getItem('currentPostId'));
    articleUrl = `https://my-brand-api-v2.herokuapp.com/api/articles/like/${currentPostId}`


    const likeOptions = {
    
        method: 'PATCH',
        headers: {
         'Content-Type': 'application/json',
         'token': JSON.parse(sessionStorage.getItem('token'))
     
       },
    }



    fetch(`https://my-brand-api-v2.herokuapp.com/api/articles/like/${currentPostId}`, likeOptions)
    
    setTimeout(() => {location.reload()}, 5000);
    

}




