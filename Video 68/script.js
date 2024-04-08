console.log("Hello Anni")
// let box = document.getElementsByClassName("box")
// console.log(box)

// box[1].style.backgroundColor = 'red'

// document.getElementById('redbox').style.backgroundColor = 'red'


// ye first box ko red karega
// document.querySelector(".box").style.backgroundColor = "red"

console.log(document.querySelectorAll(".box"))

// Ye green nahi hoga ye error dega
// document.querySelectorAll(".box").style.backgroundColor = "green"

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green"
})