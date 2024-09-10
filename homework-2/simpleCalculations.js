let tnum = 3, tcost = 14,
 btotal = 235,
 jak = 70.,
shir = 35.,
pan = 79.,
shoe = 60.,
bafter = btotal - shir -pan - shoe,
adult = 12.00,
child = 6.00,
drink = 1.50;


function ticketget() {document.getElementById("ticketNum").innerHTML ="Tickets: "+ tnum;
document.getElementById("ticketCost").innerHTML ="Cost: $"+ tcost;
document.getElementById("ttCost").innerHTML ="Total: $"+ (tnum*tcost);
}
function theRest() {
document.getElementById("bank").innerHTML ="$"+ (bafter)+ ".87";
document.getElementById("addJacket").innerHTML = (bafter - jak)>0;
document.getElementById("profPizza").innerHTML =((4*8)/2.5) -((8/4)/2.5)+" students, "+ ((8/4)/2.5)*8+ " slices left over";
document.getElementById("Monty").innerHTML = "$" + ((2*adult) + child + (3*drink))+"0";
document.getElementById("tips").innerHTML = "$" + ((202.45+134.97+256.63+178.22)/4);
}
ticketget();
theRest();
