/*const shareButton = document.getElementById('share-btn');
const Bio = document.getElementsByClassName('bio');
shareButton.addEventListener('click', function () {
    Bio.style.display = "none";
   });*/
   // (Bio.style.display = "none") activeState.style.display= "flex";

  /* var Bio = document.getElementById("bio")
   var shareButton = document.getElementById("share-btn");
   var activeState =document.getElementById("active-share");

   shareButton.onclick = function(){
    (Bio.style.display = "none");
     activeState.style.display= "flex";

     /*
       function show(){
      
         if (activeState.style.display === "none"){      
            Bio.style.display = "flex";
         }
        
         else if (Bio.style.display === "flex"){
            activeState.style.display = "none";
            Bio.style.display = "flex";
        }

         else{
            Bio.style.display = "none";
            activeState.style.display = "flex";
            
         }

       }
       }
       */

       var activeState =document.getElementById("active-share");
       var Bio = document.getElementById("bio");
       var shareButton = document.getElementById("share-btn");
       var HideButton = document.getElementById("hide-btn");

       shareButton.onclick = function(){
        (Bio.style.display = "none");
         activeState.style.display= "flex";
       }

    HideButton.onclick = function(){
       (Bio.style.display = "flex");
           activeState.style.display = "none"
    
    }
