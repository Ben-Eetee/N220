//added c to playerChoice, not that i'm sure this needs to exist
let PlayerChoice = document.getElementsByClassName("choice");
      // added quotes around all elements in CompArray, mad CompArray an array
      let CompArray = ["Rock", "Paper", "Scissors"];
      let innerscore = 0;
      // added const
      function RPS(numb) {
        // added ]
        let CompDecision = CompArray[Math.floor(Math.random() * CompArray.length)];
        //changed name of result decision to match that in the html, removed boolean, added ;, amed there be only one =, added.innerHTML
        document.getElementById("resultDecision").innerHTML = "The computer chose: " + CompDecision;
        //removed the numb = 3 part, seemed unnessecary
          //changed to numb and changed 1 to 0, switched around plus and minus order, added second =
        if (numb == 0) {
          if (CompDecision == "Scissors") {
            //added =
            innerscore += 1;
          }
          else if (CompDecision == "Paper") {
            innerscore -= 1;
          }
          //if would work, but changed to else if
         
        }
        // removed brackets, added else added second =
        else if (numb == 1) {
          if (CompDecision == "Rock") {
            innerscore += 1;
          }
          //changed to else if
           else if(CompDecision == "Scissors") {
            //added =
            innerscore -= 1;
          }
        } 
        // added else, switched around plus and minus order, added second equal
        else if (numb == 2) {
          
          
          //changed to else if
          if(CompDecision == "Paper") {
            //added =
            innerscore += 1;
          
            }
          else if (CompDecision == "Rock") {
            innerscore -= 1;
            }
        //added }
      } 
        //added e to innerscore, also added Score in quotes sto that part wont go away in the future, changed to getElementById
        document.getElementById("Score").innerHTML = "Score: "+ innerscore;
      }