// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr = ["Apple", "Apple", "Orange", "Ravi", "Kabira"]
let arr1 =[1, 2, 2, 3, 3, 3, 4, 5, 5]


function double(arr) {
    if (arr.length == 0) return []


    let darr = []
    darr.push(arr[0], arr[0])

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i -1]) {
            darr.push(arr[i] , arr[i])

        }
        else {
            darr.push(arr[i])
        }
    


    }
    return darr



}
// let a = double(arr)
// console.log(a);
console.log(double(arr));
console.log(double(arr1));
