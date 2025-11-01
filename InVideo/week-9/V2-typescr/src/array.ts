//number[] thisis the syntax form array in typescript
type NumArray = number[]; //You can also do this.

function itterate(array: number[]) {
    let max = 0;
    for (const i in array) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

console.log(itterate([1, 33, 3]));

interface Userssss{
    name: string
    age: number
}

function check(user: Userssss[]) {
    for (const i in user) {
        if (user[i].age > 18) {
            console.log(user[i].name);
        }
    }
}

check([
  { name: "Bhavesh", age: 24 },
  { name: "Ravi", age: 16 },
  { name: "Neha", age: 30 }
]);