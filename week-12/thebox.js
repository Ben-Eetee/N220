const theBoxRef = document.getElementById("theBox");
theBoxRef.style.border = "3px solid black";
theBoxRef.style.minHeight = "300px";
theBoxRef.style.display ="grid";
theBoxRef.style.gridTemplateColumns ="1fr 1fr 1fr";
function addToBox() {
    const newThing= prompt("Thing to Add");

    const newDiv = document.createElement("div");
    newDiv.style.height= "100px";
    newDiv.style.width = "100px";
    newDiv.style.border= "2px solid darkgrey";
    newDiv.style.backgroundColor = "lightgrey";
    newDiv.style.margin = "5px";
    newDiv.classList.add("box");
    newDiv.innerHTML = newThing;


    theBoxRef.appendChild(newDiv);
    const allBoxes = document.querySelectorAll(".box");
    for(let i=0; i<allBoxes.length; i++){
        const box = allBoxes[i];
        box.onclick = clickBox;
    }
}
function clickBox(e) {
    console.log(e.currentTarget);
    if (e.currentTarget.style.backgroundColor === "lightgrey"){
    e.currentTarget.style.backgroundColor ="red";
    e.currentTarget.style.border ="maroon solid 2px";
    }
    else {
        e.currentTarget.style.backgroundColor = "lightgrey";
        e.currentTarget.style.border= "2px solid darkgrey";
    }
}

function toggleTheBoxHidden() {
    if (theBoxRef.style.display !== "none") {
        theBoxRef.style.display = "none";
    }
    else {
        theBoxRef.style.display = "block";
    }
}

