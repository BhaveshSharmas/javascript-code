const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) { //this run after below because this is an Async func;
    console.log(data);

})

console.log("hello there");//this run first

let a = 0;
for (let i = 0; i<100000000; i++) {
    a++;
}

console.log("hi there 2");

