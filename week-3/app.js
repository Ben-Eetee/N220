function simpleFunctionOne() {
    document.getElementById("changeTxt").innerHTML = "Dont change this text";
}
simpleFunctionOne();
function simpleFunctionTwo() {
    document.querySelector("body").innerHTML += "this function does not take parameters";
}
simpleFunctionTwo();

function sayHelloWorld() {
    console.log("Hello World");
}
sayHelloWorld();
function sayBandName(bandName) {
    document.getElementById("favBand").innerHTML += bandName + "<br/>";
}

sayBandName("Fleetwood Mac");
function sayMyName(myrealName) {
console.log(myrealName);
}

sayMyName("Benjamin Egger-Torke");

function calcRectPerimeter(height, width) {
    const perimeter = 2 * height + 2 * width;
    document.querySelector("#panswer").innerHTML += perimeter;
}
calcRectPerimeter(2,4);
function calcArea() {
    const height = document.getElementById("height").value;
    const width = document.getElementById("width").value;
    console.log("height", height);
    console.log("width", width);
    document.querySelector("#answer").innerHTML += "Area: " + height*width +"<br/>";
}

function calcRectAreaAndPeri(height, width) {
    const perimeter = 2* (height+width);
    const area = height * width;
    document.getElementById("multiAnswer").innerHTML +=` 
    Height: ${height} 
    Width: ${width}
    Perimeter: ${perimeter}
    Area: ${area}`;
}
calcRectAreaAndPeri(14,20);

function myFunction() {
    alert("who goes there?");
}
function wizard(name, occupation){
    //confirm("Welcome" +name +", the"+ occupation);
    confirm(`Welcome ${name}, the ${occupation}!`);
}
function addItem() {
    const newItem = prompt("Add Item:");
    console.log(newItem);
}

function returnValue(color) {
    return color;
}
