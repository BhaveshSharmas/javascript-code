//use type for intersection and union
//use interface for the implements
type Employe = {
    name: string;
    date: Date;
}

interface Manager {
    name: string;
    department: string
}

type Techlead = Employe | Manager; //you can not use a interface here and if you use for implement then use interface

const t: Techlead = {
    name: "Bhavesh",
    date: new Date()
}
console.log(t);

//suppose you want to do this
interface offUser{
    age: number
}

interface manager extends offUser{
    name: number
}

interface emmployee extends offUser{
    name: string
}

function nname(ian: emmployee){
    console.log(ian.name)
}

nname({
    name: "Bhavesh",
    age:22
})