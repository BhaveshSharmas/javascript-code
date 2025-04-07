function promisified(duration){
    const p = new Promise(function(resolve){
        setTimeOut(function(){
            resolve();
        },duration);
    });
    return p;
}

const ans = promisified(1000);
ans.then(function(){
    console.log("Final resolve call")
})