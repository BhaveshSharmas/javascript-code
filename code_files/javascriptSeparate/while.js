const array = ["spiderman", "superman", "heman"]
let arr = 0

while (arr < array.length) {
    // console.log(`so its ${array[arr]}`);
    arr = arr + 1
}

//for off
const st = "helloworld"
for (const s of st) {
    // console.log(s);
}

const myobj = {
    java: "java",
    cpp: "c plus plus",
    rb: "ruby"
}

for (const key in myobj) {
    // console.log(myobj[key]);

}

const arrays = [1, 2, 3, 4, 5]
for (const key in arrays) {
    // console.log(arrays[key]);

}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
