// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.


let arr = [1, 3, 4, 5, -6, -1]
function sum(arr){
    let add = 0
    for (const item of arr) {
        if(item > 0){
            add = add + item            
        }
    }
    console.log(add);
    
}

sum(arr)