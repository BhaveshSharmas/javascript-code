

function one() {
    const username = "Bhavesh"
    console.log(username)


    function two() {
        const surname = "sharma"
        console.log(username)

    }

    // console.log(surname);
    two()
}

one()
function functioname(name) {
    if (!name) {
        console.log("Give name first");
        return
    }
    return console.log(`My name is ${name}`);
}

functioname()

const vafunc = (n, m) => (n + m)

console.log(vafunc(12, 13))

const welcome = {
    username: "Bhavesh",
    price: "999",
    webname: function wname() {
        console.log(`webname is ${this.username}`);
        console.log(this);

    }
}

console.log(welcome.webname());
console.log(this);

const checkthis = (usernames) => {
    console.log(this);

}

const objreturn = () => ({ username: "Bhaveshsharma" })

console.log(objreturn());



checkthis()
console.log("Isse niche ka");


(function chai() { //THIS IS NAMED IIFE
    console.log("damn")
})();

(() => {console.log("damn")})(); //this we called IIFE

// chai()

() => {}