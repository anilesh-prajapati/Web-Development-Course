// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.


function mirrorMirror(a){

    
    let stringArray = a.split("");
    
    
    let b = stringArray.reverse()
    
    return (a + (b.join("")));
    
}

console.log(mirrorMirror("Ravi"));
 