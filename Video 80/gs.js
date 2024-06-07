class User {

    constructor(name){
        // invokes the setter
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Nume is too Short");
            return
        }
        this._name = value;
    }
}

let user = new User("Anni");
console.log(user.name); // Anni

// user = new User(""); // Name is too short.
user.name  = "Harry"
console.log(user.name);
