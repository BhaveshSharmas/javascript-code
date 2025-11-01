type Uuser = {
    name: string,
    age: number
}

function isLega(user: Uuser){
    let and: string = ""
    if (user.age > 18) {
        and = "Bitch Yes"
    }
    else{
        and = "Hell no"
    }

    return and
}

const ans = isLega({
    name: "Bhavesh",
    age: 22
})

console.log(ans);

// type id = string | number

function idOfUser(id: number | string){
    console.log(id);
    
}

idOfUser("22")