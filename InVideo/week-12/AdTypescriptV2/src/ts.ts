interface Users{
    name: string
    age: number
    email: string
}

type Update = Pick<Users,'name'|'age'|'email'>

function updateUser(user:Update){
    console.log(user.name,user.age);
}

updateUser({
    name:"Bhavesh",
    age:12,
    email:"gmail"
})