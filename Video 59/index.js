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


function fcalc(a, b, c) {

    let random = Math.random()
    console.log(random)

    if (random < 0.1) {

        if (c == '+') {
            console.log(a - b)
        }
        else if (c == "-") {
            console.log(a / b)
        }
        else if (c == '*') {
            console.log(a + b)
        }
        else if (c == '/') {
            console.log(a ** b)
        }


    }
    else {
        if (c == '+') {
            console.log(a + b)
        }
        else if (c == "-") {
            console.log(a - b)
        }
        else if (c == '*') {
            console.log(a * b)
        }
        else if (c == '/') {
            console.log(a / b)
        }
        else if (c == '**') {
            console.log(a ** b)
        }
    }



}

fcalc(1 , 2, "-")

