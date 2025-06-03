let p = new Promise(function(resolve){

});//thisis the syntax of the promise;

let d = new Promise(function(resolve){
    // console.log("heyo");
    resolve();
});

function callback(){
    console.log(2+3);   
}

// d.then(callback);
console.log(d.then(callback));