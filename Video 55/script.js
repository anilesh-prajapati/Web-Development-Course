
console.log("Hey This is Tutorial 55")
// var global scope hota h
var a = 3;
a = a+2
var b = 5;
var c = "Anni"
var _a = "Rohan"
// var 55a = "Shubham"  Not allowed

console.log(a+b +7)
console.log(typeof a, typeof b, typeof c)

{
    var a = 55;
    console.log(a)
}

console.log(a)



// const a1 = 6;
// a1 = a1 +1    
// Not allowed because a1 is constanat


// --------------------------------------------------------
// Net block scope hota h
let a2 = 3;
a2 = a2+2
let b2 = 5;
let c2 = "Anni"
let  _a2 = "Rohan"

{
    let a2 = 55;
    console.log(a2)


}

console.log(a2)

let x = 'anni';
let y = 22;
let z = 3.33;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


let obj = {
    name: "Anni",
    "job code" : 4444,
    is_handsome : true
}

console.log(obj)

obj.salary="100crores"
console.log(obj)
obj.salary="600crores"
console.log(obj)

