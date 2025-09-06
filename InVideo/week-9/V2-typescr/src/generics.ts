function generi<T>(arg: T){ //<T> this means anything
    return arg;
}

let bhss = generi("Bhasa");
console.log(bhss);

function upper<T>(input: T[]){
    return input[0];
}

let cc = upper(["asdad","asdasd","asdasd"]) //Here typescript auto detects the arraytype without<string>
console.log(cc.toUpperCase());

//you can also do this.

interface Usersa{
    name: string
}

let ab = upper<string>(["one","one","one"])
let ab2 = upper<number>([1,2,3])
let ab3 = upper<string | number>(["one","one","one",1,2,3])
let ab4 = upper<Usersa>([{name:"Bhasha"}]) //interface as type
