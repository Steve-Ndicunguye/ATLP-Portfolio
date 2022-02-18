let keySectionOne = Math.floor(Math.random() * (9000000-100000)+100000);
// second part of the key
let alpha = ["a","b","c","d"];
let as = Math.floor(Math.random()*(3-0)+0)
let keySectionTwo = alpha[as]
// third part of the key

let keySectionThree = Math.floor(Math.random() * (90-10)+10);
//final key

let key = `${keySectionOne}${keySectionTwo}${keySectionThree}`;



function meee() {

    const img = document.getElementById("imgUrl")
    const imgLink =  img.files
    console.log(imgLink);
     const reader =  new FileReader();
     reader.readAsDataURL(imgLink[0])
     reader.addEventListener("load",()=>{
        finalImage = reader.result
        console.log(finalImage)
     


    let title =document.getElementById("title").value;
    let fullArticle = document.getElementById("fullart").value;
    let imgUrl = finalImage;


    

    const UserRequestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': JSON.parse(sessionStorage.getItem('token'))
        
          },
        body: JSON.stringify({
            title: `${title}`,
            body: `${fullArticle}`,
            imgLink: `${imgUrl}`,
     
     
        })
     };
     
     fetch('https://my-porfolio-rest-api.herokuapp.com/posts/createPost', UserRequestOptions)
      
     .then(response => {
        if(response.status == 200){
            alert('Post Created')
        }
        else{
            alert("Oppss!!!... Error, Can't create post")
        }
    })
        
        .then(data => {console.log(data)})
        console.log("deal done")
    


    })

}

