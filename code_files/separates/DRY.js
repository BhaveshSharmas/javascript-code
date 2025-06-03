function square(a){
    return a*a;
}

function cube(a){
    return a*a*a;
}

function callback(whatnumber,whatFunction){
    let ans = (whatFunction(whatnumber))
    return ans;
}

console.log(callback(3,cube));