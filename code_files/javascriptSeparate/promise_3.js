function wrapperFunction(){
    let p = new Promise(function(resolve){
        resolve("Hi there");
        // console.log(resolve);
        
    })
    
    return p;
}

function main(){
    wrapperFunction().then(function(value){
        console.log(value);
        console.log(value+1);//what ever i do 
        // with this value parameter same will done with
        //  the resolve parameter.
    })
}

main();