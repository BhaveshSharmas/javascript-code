const sym = Symbol("systum")
const myObj = {
    name: "Bhavesh sharma",
    age: "18",
    Address: "manu marg HSB Alwar",
    [sym]: "hang"
}

// console.log(myObj.name);
// console.log(myObj["name"]);

// console.log(typeof myObj[sym]);
// console.log(myObj);

myObj.myF = function () {
    console.log(`helloe User ${this.name}`);
}

// console.log(myObj.myF());

// const newob = new Object;
// console.log("with new keyword",newob);

const tuser = {}
tuser.id = "12"
tuser.name = "Bhavesh"
tuser.isLoggedIn = false
// console.log(tuser);

const erson = {
    name: "bhavesh",
    surname: "sharma",
    full: function () {
        console.log("hello");
    },
    fullname: {
        userfullname: "Bhavesh sharma"
    }
}

console.log(erson.fullname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

const obj3 = Object.assign(obj1, obj2)
console.log(obj3);

const o3 = { ...obj1, ...obj2 }
console.log(o3);

console.log(Object.entries(obj1));
console.log(obj1.hasOwnProperty('1'));

const { 1: one } = obj1
console.log(one)

const obarr = [
    {
        name: "Bhavesh",
        age: "18",
        kaam: "bhari"
    },
    {
        name: "sharma",
        age: "19",
        kaam: "bhari"
    }
]

console.log(obarr[1].name);

function add2(n1, n2) {
    // console.log(n1+n2);
    let result = n1 + n2
    return n1 + n2
}

const result = add2(3, 4)
console.log(result);

function loggedin(username) {
    return `${username} just logged in`
}

const lgi = lo

function ss(s) {
    return s
}

const s = ss("ss")
console.log(s);


// const {kaam:km} = ob //this is called de-structure an object
// console.log(km);






