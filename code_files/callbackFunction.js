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