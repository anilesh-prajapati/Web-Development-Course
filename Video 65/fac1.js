let a = prompt("Enter You Number :-")
// let a = 6
let b = []


for (let i = a; i >= 1; i--) {
    b.push(i)

}

const factorial= (a, b)=>{
    return a * b
}

result = b.reduce(factorial)

alert(`Factorial of ${a} is :- ${result}`)

console.log(b.reduce(factorial))
