function mats(num1,num2,fn){
    console.log(fn)
    let ans1 = fn(num1,num2);
    return ans1;
}

function addition(a,b){
    return a+b;
}

function subtra(a,b){
    return a-b;
}

function multi(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

console.log(mats(2,3,addition))
console.log(mats(2,3,subtra))
console.log(mats(2,3,multi))
console.log(mats(2,3,divide))

let lats = mats(2,3, function(a,b){
    return 2+3;
});

console.log(lats);


function task1(){
    console.log("task 1");
}

function task2(data){
    let ans = data+"1"
    return ans;
}

// task1();

// setTimeout(function(){
//     let a = task2("two");
//     console.log(a);
// }, 2000);

setTimeout(function(data) { 
    let a = task2(data);  // Passes the value of data to task2
    console.log(a);
}, 2000, "Hello");


// callback Anonymous function -----------------------------------------------------------------

function hithere(callback){
    callback("hithere");
}

function main(){
    hithere(function(value){
        console.log(value);
        
    })
}
main();