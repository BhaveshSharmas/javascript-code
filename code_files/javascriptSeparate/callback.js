const name = ["hustin", "justin", "austin"]

name.forEach(function (param) {
    console.log(param);

})

console.log();

name.forEach((param) => {
    console.log(param);

})

console.log();

name.forEach((a, b, c) => {
    console.log(a, b, c);

})

const objectss = [
    {
        language: "hindi",
        languageName: "HIN"
    },
    {
        language: "english",
        languageName: "ENG"
    }
]

objectss.forEach((item) => {
    console.log(item.language);
    
})