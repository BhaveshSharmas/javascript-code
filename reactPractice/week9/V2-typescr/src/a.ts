// let x: number = 10;
// x = 2
// console.log(x);

// function greet(name: string, lastname: string) {
//     console.log("hello" + name + "" + lastname)
// }

// greet("Bhavesh", "Sharma");

function RAF(callback: () => void) {
    setTimeout(function () {
        callback() ;
    }, 1000)
}

function test(){
    console.log("promotion")
}

RAF(test);

const oneLiner = (name: string) => `hello, ${name}`

console.log(oneLiner("Bhavesh is the real coder"));
