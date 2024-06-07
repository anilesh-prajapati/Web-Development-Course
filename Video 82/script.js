
// ------------Immediately Invoke function----------------

async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(444)
        }, 1000);
    })
}

(async function main() {
    // let a = await sleep()
    // console.log(a);

    // let b = await sleep()
    // console.log(b);


})()

// ----------------Destructuring ------------------------

// let x, y = [1, 5]
// console.log(x, y); // ye undefined dega


// let [x, y] = [1, 5]
// console.log(x, y); // 1 or 5 dega

// let [x, y, ...rest] = [1, 5, 9, 8, 3, 7]
// console.log(x, y, rest); 

let obj = {
    a: 1,
    b: 2,
    c: 3
}
let {a, b} = obj
console.log(a,b);


//---------- Spread Syntax----------------

function sum(a, b , c){
    return (a+b+c)
}

let arr = [1, 2, 3]
// console.log(sum(arr[0], arr[1], arr[2]));
console.log(sum(...arr)); // This is the simple way to do this
let obj1 = {...arr}
console.log(obj1); // {0: 1, 1: 2, 2: 3}


