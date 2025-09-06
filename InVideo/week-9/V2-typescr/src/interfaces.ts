interface Animal{
    name: string
    speak: () => void
}

class Mammal implements Animal {
    name: string;

    constructor(name: string){
        this.name = name;
    }
    speak(){
        console.log("bark bark");
        
    }
}

const vv = new Mammal("Dog");
console.log(vv.speak());


// class nonMammal implements Animal {

// }

interface Person {
    name: string,
    age: number,
    greet(phrase: string): void;
}

class Employee implements Person {

    // name: string;
    // age: number;

    constructor(public name:string,public age:number){}

    // constructor(n: string, a: number) {
    //     this.name = n;
    //     this.age = a;
    // }

    greet(phrase: string): void {
        console.log("aksjdbasb");
        
        // console.log(`${phrase} ${this.name}`)
    }
}


const c = new Employee("Bhavesh",24)
console.log(c.name)