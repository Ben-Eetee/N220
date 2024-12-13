const titlebackground = document.getElementById("title");
titlebackground.style.backgroundColor= "salmon";
titlebackground.style.minHeight = "70px";
const fullbackground = document.getElementById("backgroundcolor");
fullbackground.style.backgroundColor ="lightgreen";
const use = document.getElementById("username");
const pass = document.getElementById("password");
let err = document.getElementById("errormessage");
err.style.color ="red";
function validatepassword() {
    const useval =use.value;
    const passval =pass.value;
    var connum =0;
    var concap=0;
    var consp=0;
    
    for(var i=0; i<passval.length; i++){
        let ch = passval.charCodeAt(i);
        if (isNaN(passval[i])===false){
            connum= 1;
        }
        else if (
            !(ch >= 65 && ch <= 90) && !(ch >= 97 && ch <= 122) && !(ch >= 48 && ch <= 57) 
        ) {
            consp=1;
        }
        else if(passval[i]===passval[i].toUpperCase()){
            concap=1;
        }
    }

    if (useval==0) {
        err.innerHTML ="Error: Invalid Username";
    }
    else if (passval==0) {
        err.innerHTML ="Error: Invalid Password";
    }
    else if (passval.length<8){
        err.innerHTML="Error: Password must contain at least 8 characters";
    }
    else if (connum==0){
        err.innerHTML ="Error: Password must contain at least one number";
    }
    else if(concap==0){
        err.innerHTML ="Error: Password must contain at least capital letter";
    }
    else if(consp==0){
        err.innerHTML ="Error: Password must contain at least one special character";
    }
    else {
        localStorage.username= use;
        localStorage.getItem(username);
        window.location.href= "https://ben-eetee.github.io/N220/Final-Project/home.html";
    }
}