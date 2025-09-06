let x: number = 1;
console.log(x);

function greet(mn: string):string {
    return mn
}

// function isLegal(age: number) {
//     if(age>18){
//         return true;
//     }else{
//         return false;
//     }
// }

// let ss = isLegal(22);
// console.log(ss);
console.log(greet("Bhavesh"))

function runn(fn: (n: number) => number){
    setTimeout(function(){
        fn(10)
    },1000)
}

runn(function(n) {
    console.log(n)
    return n
})


// function greet(name: string, lastname: string) {
//     console.log("hello" + name + "" + lastname)
// }

// greet("Bhavesh", "Sharma");

// function RAF(callback: () => void) {
//     setTimeout(function () {
//         callback();
//     }, 1000)
// }

// function test(){
//     console.log("promotion")
// }

// RAF(test);

// const oneLiner = (name: string) => `hello, ${name}`

// console.log(oneLiner("Bhavesh is the real coder"));

// function Name(name: any) {
//     console.log(name)
// }

// Name("Bhavesh")
