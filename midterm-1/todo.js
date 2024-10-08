const list = [];

function addItem() {
    list.push(document.getElementById("item").value);
    document.getElementById("list").innerHTML += "<li>"+list[list.length-1]+"</li>";
}
function summarizeList() {
    document.getElementById("summary").innerHTML="Total Items: " +list.length +"<br/> First Item: "+list[0]+"<br/> Last Item: "+list[list.length-1];
}