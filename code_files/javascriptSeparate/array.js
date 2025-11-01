let array = [1, 2, 3, 4, 5, 11, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    console.log(array[i]);
  }
}
let bigg = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > bigg) {
    bigg = array[i];
  }
}
console.log(bigg);

let users = [
  { firstname: "Bhavesh", gender: "male" },
  { firstname: "rinki", gender: "female" },
  { firstname: "kenzo", gender: "male" },
];

for (let i = 0; i < users.length; i++) {
  if (users[i]["gender"] == "male") {
    console.log(users[i]["firstname"]);
    
  }
}