//Reference Variables

const friendName =document.getElementById("friendName");
const friendsList =document.getElementById("friendsList")

const myFriends =[];

//Function for adding friend
function addFriend() {
    const nameValue =friendName.value;
    console.log(nameValue);
    friendsList.innerHTML +=`<li>${nameValue} <button onclick="removeFriend('${nameValue}')">X</button></li>`;
    myFriends.push(nameValue);
    friendName.value = "";
}
function removeFriend(friendToRemove){
    console.log(friendToRemove);
    let friendIndex;

    for(let i=0; i<myFriends.length; i++){
        if(myFriends[i]==friendToRemove) {
            friendIndex= i;
        }
        console.log(friendIndex);
    }
    myFriends.splice(friendIndex, 1);
    showFriends();
}
function showFriends(){
    friendsList.innerHTML ="";

    friendsList.forEach(function (friendToRemove){
        friendsList.innerHTML +=`<li>${nameValue} <button onclick="removeFriend('${nameValue}')">X</button></li>`; 
    })
}