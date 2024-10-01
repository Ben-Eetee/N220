// created two reference variables
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const output =document.getElementById("output");

function addNums() {
    const sum = parseFloat(num1.value) + parseFloat(num2.value);
    output.innerHTML = sum;
}

function multNums() {
    const product = parseFloat(num1.value) * parseFloat(num2.value);
    output.innerHTML = product;
}