//  

// function sum(a,b,fn){
//     const result = a+b;
//     return fn(result)
    
// }

// function dd(data){
//     console.log("data ="+ data);
//     return data
// }

// console.log(sum(2,3,dd))


// const array = [1,2,3]
// console.log(array);

// function pnt(str){
//     console.log(str);
    
// }
// array.forEach(pnt)

// const dog = {
//     name: "dog",
//     legs: "4",
//     speaks: "bowbow"
// }

// console.log(dog["name"] + dog["legs"]);

// class Animal{
//     constructor(name,legs,speaks){
//         this.name = name;
//         this.legs = legs;
//         this.speaks = speaks;
//     }

//     static type() {
//         console.log("Animals");
        
//     }

//     theNameIs() {
//         console.log(this.name);
//         }
    
//     legCount() {
//             console.log(this.legs);
            
//         }
    
// }

// console.log(Animal.type());

// let Mydog = new Animal("kali",4,"bow bow");
// // console.log("Name is "+theNameIs()+" And the leg count is "+ Mydog.legCount());
// Mydog.legCount()

const { isUtf8 } = require('buffer');
const { log } = require('console');
const fs = require('fs');
const { resolve } = require('path');

// fs.readFile("a.txt","utf-8",function(err,data){
//     console.log(data);
    
// })

// console.log("log1");

// a=0;
// for (let index = 0; index < 10; index++) {    
//     a++;
//     console.log("looping");
    
// }

// console.log("log2");

// function showingFunction(){
//     return new Promise(function(paramenter){
//     //here do work like
//     fs.readFile("a.txt","Utf8",function(err,data){
//         paramenter(data)
//     })
// })

// }
// function done(param){
//     console.log(param);
    
// }


// var d = new Promise(function(resolve){
//     resolve("foo");
// })

// function callback(c){
//     console.log(d);
    
// }

// d.then(callback())


// function bhaveshReadFile(){
//     return new Promise(function (fn) {
//         fs.readFile("a.txt","Utf8",function(err,data){
//             fn(data)
//         })
//     })
// }



// bhaveshReadFile().then(done)

// function prmis(){
//     const p = new Promise(function(resolve){
//         resolve("hi there")
//     });
//     return p;
// }

// prmis.then(function(value   ) {
//     console.log(value)
// })

// function ks(callback) {
//     callback("hi there")
// }

// ks(function(value){
//     console.log(value);
    
// })

// function main(){
//     ks(function(value){
//         console.log(value);
        
//     })
// }

// main();

// function bs(){
//     let p = new Promise(function(resolve){
//         resolve("hi there");
//     })
//     return p;
// }

// function main2() {
//     bs().then(function(value){
//         console.log(value);
        
//     })
// }

// function cs(duration){
//     const p = new Promise(function(resolve){
//         setTimeout(resolve,duration)
//     })
//     return p;
// }

// cs(1000).then(function(){
//     console.log("done");
    
// })

function fn(resolve){
    for (index = 0; index < 10; index++) {
        a = a+1;
    }
    resolve(a);
}

function mm(){
    const p = new Promise(fn)
    return p;
}


mm().then(function(v){
    console.log(v);
    
})