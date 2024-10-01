const classroom = {
    students: [],
    className: "N220",
    getStudents: function (){
        document.getElementById("students").innerHTML = "";
        for(var x =0; x< this.students.length; x++){
            document.getElementById("students").innerHTML += this.students[x] + "<br />";
           }
    },
    maxStudents: 20,
};

function addStudent() {
    if(classroom.students.length>=20){
        console.log("No Seats Available");
    }
    else {
        classroom.students.push(document.getElementById("studentName").value);
        classroom.getStudents();
    }
}