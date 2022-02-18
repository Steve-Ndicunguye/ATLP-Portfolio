
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
        //   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
        //   @import url('https://fonts.googleapis.com/css2?family=Francois+One&family=Lato:wght@300&family=Montserrat&family=Mukta&family=Roboto:wght@100&family=Rubik:wght@400;500&display=swap');
          *{
             font-family: 'Roboto', sans-serif;
             
             
           }
          .articlebox{
              width: 80%;
              height: 70vh;
              background-color: rgb(235, 231, 231);
              overflow: auto;
              margin: auto;
          }

          .newArticle{
              width: 100%;
              background-color: rgb(148, 130, 27);
              height: 10%;
              padding-top: 8px;
              
          }
          .newArticle p{
              text-align: center;
              font-size: 20px;
              padding-top: 10px;
              color: white;
          }
          .messages{
              /*margin: auto;*/
              margin-left:10px;
              margin-top: 20px;
              width: 100%;
              height: auto;
              /* border: 1px solid black; */
              background-color: #0b0b0b;
              
              box-shadow: 1px 1px 5px #1D53AE;
              font-size: 14px;
          }
          .senderAddress{
              width: 90%;
              margin: auto;
              height: 60px;
              /* border: 1px solid black; */
              margin-bottom: 4px;
              font-size:10px;
          }
          .senderName, .senderEmail, .sendingTime, .senderTitles{
              position: relative;
              line-height: 0;
              font-family: 'Lato', sans-serif;
              font-family: 'Montserrat', sans-serif;
              font-family: 'Mukta', sans-serif;
              font-family: 'Roboto', sans-serif;
              font-family: 'Rubik', sans-serif;
              font-size:20px;
              
          }
          .messageBody{
            width: 90%;
              margin: auto;
              height: auto;
              
              /* border: 1px solid black; */
          }
          .messageBody2{
            font-size:23px;
            
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
      </style>
    
    
    </head>
    <body>
    
    
        <div class="articlebox">
            <div class="newArticle">
                <p style = "font-size:23px;">Messages From Your Clients</p>
            </div>
            <div id ="result1"></div>


          </div>



        </div>

        </div>
        
    </body>
    </html>
  
    `    
   
   
    a.innerHTML= `${b}`;
    //modify only below this line 
    

    
        
    

        async function art(){

            const MessageOptions = {
                method: 'GET',
                headers: { 'auth-token': JSON.parse(sessionStorage.getItem('token'))},
             };
             
            let response = await fetch("https://my-porfolio-rest-api.herokuapp.com/contact/getAllQuerries",MessageOptions)
            const allMessage = await response.json(); 
            const finalMessage = allMessage.data.queries;
            console.log(finalMessage);








                for(let i=0; i<finalMessage.length; i++){
                     
                    console.log(finalMessage[i])
                
                     displayer = document.getElementById("result1");
                     arr = finalMessage[i]
                     senderName = arr.name;
                     senderEmail= arr.email;
                     message = arr.query;
                     timeStamp = arr.dateCreated;
                     
            
                

              if(1 > 0) {
                 //console.log(long)
            

         

        displayer.innerHTML += `


    
        <div class="messages"><br/>
        <div class="senderAddress">
            <p class="senderName"><span class="senderTitles">Sender:   </span>${senderName}</p><br/><br/><br/>
            <p class="senderEmail"><span class="senderTitles">Sender email: </span>${senderEmail}</p><br/><br/><br/>
            <p class="sendingTime"><span class="senderTitles">Time sent:  </span>${timeStamp}</p><br/><br/><br/>

        </div>
        <div class="messageBody">
        <br/><br/><br/><p class="messageBody2">MESSAGE SAYS: ${message}</p>
          <br>
      </div>
      
      




        `
        
       }
       
    }



 } art();
  