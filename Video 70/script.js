
let color = ["green", "red", "blue", "orange", "yellow"]

function randomColor(color){
    let rand = Math.floor(Math.random()* color.length)
    return color[rand]
}
// console.log(randomColor(color))


document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor= `${randomColor(color)}`
    e.style.color = `${randomColor(color)}`
});