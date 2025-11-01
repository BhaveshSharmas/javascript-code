interface User {
    firstname: string,
    lastnama: string,
    age: number
}

interface Car {
    brand: string,
    name: string,
    engineType: string,
    email?: string
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true;
    } else {
        return false;
    }
}

function vroom(car: Car){
    if (car.engineType == "I6"){
        return "stuutututu"
    }else{
        return "grrrr"
    }
}

const soundCheck = vroom({
    brand: "Toyota",
    name: "Supra",
    engineType: "I6"
})
console.log(soundCheck);

// isLegal({
//     firstname: "Bhavesh",
//     lastnama: "sharma",
//     age: 24
// })