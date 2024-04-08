// console.log("Hey Anni your are nice!")
// console.log("Hey Anni your are good!")
// console.log("Hey Anni your tshirt is nice")
// console.log("Hey Anni your course is good too!")

function anni(name) {
    console.log("Hey" +name+ " your are nice!")
    console.log("Hey" +name+ " your are good!")
    console.log("Hey" +name+ " tshirt is nice")
    console.log("Hey" +name+ " course is good too!")
    

}


// anni("Ravi")

// anni("Rohan")


function sum(a, b , c=4) {
    // console.log(a + b)
    return a+b+c
}

restult1 = sum(3, 4)
restult2 = sum(7, 4)
restult3 = sum(3, 9)

console.log("The sum of these numbers is :" , restult1)
console.log("The sum of these numbers is :" , restult2)
console.log("The sum of these numbers is :" , restult3)


const func1 = (x)=>{
    console.log("I am an arrow fuction", x)
}

func1(22)
func1(44)
func1(77)