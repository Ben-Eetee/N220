function validatePassword() {
    const password =document.getElementById("password");
    let validPassword = false;
    console.log(password.value.length);
for(let i=0; i<password.value.length; i++){
    const currentcharacter = password.value[i];
    if(isNaN(password.value[i]) === false){
        validPassword= true;
    }
    console.log(validPassword);
}
}

const newbtn =document.createElement("button");
newbtn.innerHTML = "Check Password";
newbtn.onclick = validatePassword;
document.body.appendChild(newbtn);