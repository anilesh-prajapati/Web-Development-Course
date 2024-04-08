
/*
Create a faulty calculator using JavaScript


This faulty calculator does following:
1. It takes two numbers as inputs form the user
2. It perfoms wrong operations as follows:


+ ---------> -
* ---------> +
- --------> /
/ --------> **


It performs worng operation 10% of the times
*/

random = Math.random()
console.log(random)

let a = prompt("Enter Your First Number :-")
let b = prompt("Enter Your Operation :-")
let c = prompt("Enter Your Second Number :-")


let obj = {
 "+":"-",
 "*":"+",
 "-":"/",
 "/":"**"
}

if (random> 0.1){
    // Perform Calculation
    alert( `The result is :-${eval(`${a} ${b} ${c}`)}`)
}
else{
    // Perform Wrong Calculation
    b=obj[b]
    alert( `The result is :-${eval(`${a} ${b} ${c}`)}`)

}