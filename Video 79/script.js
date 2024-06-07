let a = prompt("Enter First Number")

let b = prompt("Enter Second Number")

// You can throw custom erro like this
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry This is Wrong Input Type")
}

let sum = parseInt(a) + parseInt(b)


// You can handle error like simple 

try {
    console.log('The Sum is', sum * x);
    


} catch (error) {
    console.log('Erro aa gaya bhai');
    
    // console.log(error.name);
    // console.log(error.message);
    // console.log(error.stack);
}


// Finally 
function main() {

    let x = 1;
    try {
        console.log('The Sum is', sum * x);
        return true


    } catch (error) {
        console.log('Erro aa gaya bhai');
        return false
        // console.log(error.name);
        // console.log(error.message);
        // console.log(error.stack);

    }

    console.log("Files are being closed and db connection in being closed");



}

let cs = main()


function main1() {

    let x = 1;
    try {
        console.log('The Sum is', sum * x);
        return true


    } catch (error) {
        console.log('Erro aa gaya bhai');
        return false
        // console.log(error.name);
        // console.log(error.message);
        // console.log(error.stack);

    }
    finally {
        console.log("Files are being closed and db connection in being closed");

    }

}

let c = main1()