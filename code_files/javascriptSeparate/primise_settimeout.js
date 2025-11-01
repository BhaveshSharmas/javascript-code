function wait(n) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there")
        },n)
    })
}

wait(1000).then(function(v){
    console.log(v)
})