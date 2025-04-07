// function fn(){
//     return("hi there")
// }
// let p = Promise.resolve(fn())
// let p = Promise.resolve(fn())
// let ps = new Promise(function(resolve){
//     resolve("hithere");

const { log } = require('console')

// })

// p.then(function(v){
//     console.log(v);

// })

// function myfunc() {
//     return new Promise(function (resolve) {
//         resolve("this is my text")
//     })
//     // return r;
// }

// myfunc().then(function(v){
//     console.log(v)
// })


//readAsync----------------------------------------

function readAsync(){
    return new Promise(function(resolve){
        const fs = require('fs')
        let b = fs.readFile("a.txt","utf-8",function(err,data){
            console.log(data)
            resolve(data);
        })
    })
}

readAsync().then(function(dataComeFromFileReading){
    console.log(dataComeFromFileReading)
})

// console.log("logging");
