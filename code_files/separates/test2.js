const arr = [1,2,3,4,5]

for (const element of arr) { //this is for of loop
    // console.log(element);
    
}

for (const [key,values] in arr) {  //this is for in loop
    // console.log(key,"sdsa",values);
    
}

const a = arr.forEach((num) => num+1)
// console.log(a);

const numarr = [1,2,3,5,6]
for (const element of numarr) {
    console.log(element);
    
}

const nameobj = {
    js: "javascript",
    py: "python",
    ja: "java",
    cpp: "c++",
    ht: "html"
}

for (const element in nameobj) {
    // console.log(element,"=",nameobj[element]);
}