var input1 =0;
var input2 =0;
var inputnum =0;

function choice1() {
    if (inputnum==0){
        document.getElementById("scenario").innerHTML= "You pick up the Sword. The Spear disappears. A Minotaur stands before you. What do you do?";
        document.getElementById("answer1").innerHTML= "1. Stab at the Minotaur";
        document.getElementById("answer2").innerHTML= "2. Swing at the Minotaur";
        input1 =1;
    }
    else if(inputnum==1){
        if(input1==1){
            document.getElementById("scenario").innerHTML= "The Minotaur dodges your strike and raises his arms to crush you. What do you do?";
        document.getElementById("answer1").innerHTML= "1. Stab Again";
        document.getElementById("answer2").innerHTML= "2. Dodge";
        input2 =1;
        }
        else if (input1==2){
            document.getElementById("scenario").innerHTML= "The Minotaur Dodges your thrust and throws a punch. What do you do?";
        document.getElementById("answer1").innerHTML= "1. Thrust again";
        document.getElementById("answer2").innerHTML= "2. Duck";
        input2=1;
        }
    }
    else if (inputnum==2){
        if (input1==1 && input2==1){
            document.getElementById("scenario").innerHTML= "You Stab the Minotaur before he has time to crush you. The Minotaur falls over, dead. You Win!";
            document.getElementById("answer1").innerHTML= "";
            document.getElementById("answer2").innerHTML= "";
        }
        else if (input1==1 && input2==2){
            document.getElementById("scenario").innerHTML= "The Minotaur parries your thrust with his horns, and tramples you to death. You Lose!";
            document.getElementById("answer1").innerHTML= "";
            document.getElementById("answer2").innerHTML= "";
        }
        else if (input1==2 && input2==1){
            document.getElementById("scenario").innerHTML= "ThepPunch connects, blowing your head off. You Lose!";
            document.getElementById("answer1").innerHTML= "";
            document.getElementById("answer2").innerHTML= "";
        }
        else if (input1==2 && input2==2){
            document.getElementById("scenario").innerHTML= "You rush towards the Spear, but are trampled to death before you make it. You Lose!";
            document.getElementById("answer1").innerHTML= "";
            document.getElementById("answer2").innerHTML= "";
        }
    }
    inputnum++;
}
function choice2() {
    if (inputnum==0){
        document.getElementById("scenario").innerHTML= "You pick up the Spear. The Sword disappears. A Minotaur stands before you. What do you do?";
        document.getElementById("answer1").innerHTML= "1. Stab the Spear";
        document.getElementById("answer2").innerHTML= "2. Throw the Spear";
        input1 =2;
    }
    else if(inputnum==1){
        if(input1==1){
            document.getElementById("scenario").innerHTML= "Your slash wounds the Minotaur, who charges at you in rage. what do you do?";
        document.getElementById("answer1").innerHTML= "1. Thrust your Sword";
        document.getElementById("answer2").innerHTML= "2. Dodge";
        input2 =2;
        }
        else if (input1==2){
            document.getElementById("scenario").innerHTML= "You miss. The Minotaur charges you. What dou you head towards?";
        document.getElementById("answer1").innerHTML= "1. The Spear";
        document.getElementById("answer2").innerHTML= "2. The Minotaur";
        input2=2;
        }
    }
    else if (inputnum==2){
        if (input1==1 && input2==1){
            document.getElementById("scenario").innerHTML= "You Try to dodge the oncoming attack, but are too slow and get crushed. You Lose!";
            document.getElementById("answer1").innerHTML= "";
            document.getElementById("answer2").innerHTML= "";
        }
        else if (input1==1 && input2==2){
            document.getElementById("scenario").innerHTML= "You Dodge out of the way and the Minotaur runs headfirst into a wall, knocking him out. You Win!";
            document.getElementById("answer1").innerHTML= "";
            document.getElementById("answer2").innerHTML= "";
        }
        else if (input1==2 && input2==1){
            document.getElementById("scenario").innerHTML= "You duck the punch and then thrust, spearing the Minotaur in the gut. It falls to the floor, dead. You Win!";
            document.getElementById("answer1").innerHTML= "";
            document.getElementById("answer2").innerHTML= "";
        }
        else if (input1==2 && input2==2){
            document.getElementById("scenario").innerHTML= "You rush towards the Minotaur, jump over his horns, land on his back and, using his horns for steering, ram into a wall, knocking the Minotaur out. You Win!";
            document.getElementById("answer1").innerHTML= "";
            document.getElementById("answer2").innerHTML= "";
        }
    }
    inputnum++;
}