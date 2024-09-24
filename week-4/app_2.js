const studentGrades = [78,86,92,77];

const answersPTag = document.getElementById("answers");

function printAnswer(answer){
    answersPTag.innerHTML += `${answer} <br />`;
}
answersPTag.innerHTML += studentGrades +"<br />";
answersPTag.innerHTML += studentGrades[1] +"<br />";
studentGrades[1] = 83;
answersPTag.innerHTML += studentGrades +"<br />";
answersPTag.innerHTML += studentGrades.length +"<br />";
for(var x =0; x< studentGrades.length; x++){
 studentGrades[x]+=1;
 printAnswer(studentGrades[x]);
}
answersPTag.innerHTML += studentGrades +"<br />";
printAnswer(studentGrades[studentGrades.length-1]);
var totalgrades=0;
for(var x =0; x< studentGrades.length; x++){
    totalgrades+= studentGrades[x];
   }
const avggrade = totalgrades/studentGrades.length;
printAnswer(avggrade);
printAnswer(avggrade>80);

const fruits =["pineapple", "banana", "orange", "strawberry", "lemon", "grape"];

function printFruits(){
    document.getElementById("extraAnswers").innerHTML +=`${fruits} <br />`;
}
fruits.push("watermelon");
printFruits();
fruits.pop();
printFruits();
fruits.splice(0,1);
printFruits();
fruits.splice(0,0, "grapefruit");
printFruits();
fruits.splice(2,1);
printFruits();
fruits.splice(2,0, "durian");
printFruits();

const person = {
    firstName: "Ben",
    lastName: "E.T.",
    age: "21",
    homeTown: "Indy",
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    },
};
document.getElementById("fullName").innerHTML += person.getFullName();
document.getElementById("newFProp").innerHTML += person.lastName +"<br>";

person.lastName = "Egger-Torke";
document.getElementById("newFProp").innerHTML += person.lastName;

