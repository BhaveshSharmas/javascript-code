//this is not tuples its just fot the random question feel free to ignore   
interface randoms{
    name: String
    age: number
}

function ageCalculate(user1: randoms,user2: randoms){
    return user1.age + user2.age
}

const result = ageCalculate({
    name:"random",
    age: 12
},
{
    name:"random",
    age: 12
})

console.log(result);
