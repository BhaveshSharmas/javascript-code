const numbers = ["hustin", "justin", "austin"] //not using anywhere
const num = [1,2,3,4,5] //below example


const nums = num
            .map((n) => {return n+10}) //first map
            .map((n) => {return n+1}) //second map after map
            .filter((n) => n > 13) //filter after second map
console.log(nums); //log the final output

// console.log(numbers.map((n) => {return n+10}));

console.log("Hello world! This is keyboard testing..")
