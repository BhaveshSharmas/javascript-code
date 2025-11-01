enum options {
    one=1,
    two,
    three,
    four
}

function option(op: options){
    console.log(op)
}

console.log(options.one);
console.log(options.two);

type Input = number | string;

function arrayname(input: Input[]){
    return(input[2]) //[input[0]] => will give you this => ["firstElement"]
}

const value = arrayname(["asdasd",1,2,"Three"]);

console.log(value);

//solution 1 for this upper is:
// write like this function arrayname(input: string[] | number[])

//Nice solution is "GENERICS"
