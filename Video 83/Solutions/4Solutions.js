

function passwordValidator(pass) {
    if (pass.length < 8) {
        console.log("Password is not valid. It must be at least 8 characters long.");
    } else if (!/[A-Z]/.test(pass)) {
        console.log("Password is not valid. It must contain at least one uppercase letter.");
    } else if (!/[a-z]/.test(pass)) {
        console.log("Password is not valid. It must contain at least one lowercase letter.");
    } else if (!/\d/.test(pass)) {
        console.log("Password is not valid. It must contain at least one digit.");
    } else {
        console.log("Password is valid.");
    }
}

passwordValidator("aaajjjadjjjjj"); 
passwordValidator("Password123"); 

