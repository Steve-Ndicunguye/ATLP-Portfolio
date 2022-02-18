  async function blogFetch(){
        
    let response = await fetch("https://my-porfolio-rest-api.herokuapp.com/posts/getAllPosts")
    
    const allPosts = await response.json(); 
    const posts = allPosts.blog;
    console.log(posts[4]);
   
    for(let i=0;i<posts.length;i++){
          let displayer = document.getElementById("postId");
        let arr = posts[i];
        let title = arr.title;
        let img   = arr.imgLink;
        let articleBody = arr.body;
        

        // <div class="like_comment">
        //     <div class="like_btn">
        //         <button class="like__btn">
        //             <span id="icon"><i class="far fa-thumbs-up"></i></span>
        //             <span id="count">0</span> Like
        //         </button>
        //     </div>
        //     <div class="container" id="container">
        //         <h2>Leave a Comment</h2>
        //         <form>
        //          <textarea placeholder='Add Your Comment'></textarea>
        //           <div class="btn">
        //             <input type="submit" value='Comment'>
        //             <button id='clear' href='#'>Cancel</button>
        //           </div>
        //         </form>
        //       </div>
        //     </div>
        // </div>
        
      if(1>0) {
    
    let myKey =await arr._id ;

        let temp = `
        <div class="container-fluid" id="${myKey}">

        <div class="col-md-6">
            <div class="content_area">
                <img src="${img}" alt="#" class="img-responsive">
                <h3>${title}</h3>
                <p class="date">Posted by <a href="index.html">Steve Ndicunguye</a></p> <br>
                <p>${articleBody}</p>
                <div id="comment"></div>
            </div>

            
            
        
        `
 displayer.innerHTML += temp;
    
    }
    
        }
    }
    blogFetch();



    //>>>>>>>>>>>>>>>>>>>>>>>>>fetching Commet<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


    async function commentFetch() {
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