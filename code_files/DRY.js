function square(a){
    return a*a;
}

function cube(a){
    return a*a*a;
}

function callback(a,cb){
    let ans = (cb(a))
    return ans;
}

console.log(callback(2,cube))