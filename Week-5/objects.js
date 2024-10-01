
var totclassbase =20;
var totenrollbase =18;
const collegeclass = {
    courseNum: "N220",
    courseTitle: "Intro to Media Application Development",
    totSeats: 20,
    totEnrolled: 18,
    getAvail: function (){
        return this.totSeats-this.totEnrolled>0;
    },
};

function enrollTwo(){
    collegeclass.totEnrolled +=2;
    console.log(collegeclass.totEnrolled);
   }
function printClass() {
    document.getElementById("printHere").textContent = " ";
    document.getElementById("printHere").textContent = collegeclass.courseNum +" Open: "+collegeclass.getAvail();
    console.log(collegeclass.courseNum +" Open: "+collegeclass.getAvail());
}
