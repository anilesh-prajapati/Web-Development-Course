
console.log("Script.js Initializing")

// let  boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 225);
    let val2 = Math.ceil(0 + Math.random()* 225);
    let val3 = Math.ceil(0 + Math.random()* 225);
    return `rgb( ${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e =>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})

// console.log(boxes)