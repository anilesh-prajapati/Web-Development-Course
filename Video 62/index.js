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

let adjectives = ["Crazy", "Amazing", "Fire"]

let shope_name = ["Engine", "Foods", "Garments"]

let another_word = ["Bros", "Limited", "Hub"]



function random_items(list) {
    // Generate a random index within the range of the list length
    let randomIndex = Math.floor(Math.random()* list.length);

    // Return the random item using the random index
    // console.log( list[randomIndex])
    return list[randomIndex];
}



console.log(`Your Business Name is :- ${random_items(adjectives)} ${random_items(shope_name)} ${random_items(another_word)}`)