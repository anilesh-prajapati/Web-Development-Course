
let a = 6

// Factorial Using Reduce Method
function faReduce(number){
    let arr = Array.from(Array(number+1).keys())
    let c = arr.slice(1,).reduce((a, b) => a*b)
    return c
}


// Factorial Using For loop Method

function facFor(number){
    let fac = 1
    for (let index = 1; index <= number; index++) {
        fac = fac * index;
        
    }
    return fac
}

console.log(faReduce(a))
console.log(facFor(a))