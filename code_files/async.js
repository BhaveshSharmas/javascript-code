function findsum(n){
    let a = 0;
    for(let i=0; i<n; i++){
        a = a+i;
    }
    return a;
}

function findTill100(){
    console.log(findsum(100));
}

// console.log(findTill100());
// findTill100();
// console.log(findsum(100));

setTimeout(findTill100,1000)
console.log("Hello World!");