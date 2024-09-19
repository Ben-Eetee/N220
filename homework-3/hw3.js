function getInterest(){
    const p = parseFloat(document.getElementById("prin").value);
    const i = parseFloat(document.getElementById("inter").value);
    const t = parseFloat(document.getElementById("time").value);
    const truei = i/100;
    const total = p*(1+truei*t);
    const realtotal =total.toFixed(2);
    const inttotal = (realtotal-p).toFixed(2);
    document.getElementById("answer").innerHTML = "With a beginning Principle of $" +p+ " at a rate of " +i +"% over " +t+ " years, your total interest will be $" +inttotal + " for a grand total of $" +realtotal+ ".";
}