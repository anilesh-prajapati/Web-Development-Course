/*

Create a bussiness namge generator by combining list of adjectives , shope name and another word

Adjectives:
Crazy
Amazing
Fire

Shope Name:
Engine
Foods
Garments

Another Word:
Bors
Limited
Hub



*/
let first, second, third;

let rand = Math.random()
if (rand > 0.33) {
    first = "Crazy"
}
else if (rand > 0.66 && rand >= 0.33) {
    first = "Amazing"
}
else {
    first = "Fire"
}

rand = Math.random()
if (rand > 0.33) {
    second = "Engine"
}
else if (rand > 0.66 && rand >= 0.33) {
    second = "Foods"
}
else {
    second = "Garments"
}


rand = Math.random()

if (rand > 0.33) {
    third = "Bors"
}
else if (rand > 0.66 && rand >= 0.33) {
    third = "Limited"
}
else {
    third = "Hub"
}

console.log(`Your Business Name is :- ${first} ${second} ${third}`)