//this is the blueprint of the Object Human
const currentDate = new Date();
console.log(
  "Todays date is: " +
    currentDate.getDate() +
    " " +
    (currentDate.getYear() + 1900),
);

console.log(
  currentDate.getHours(),
  currentDate.getMinutes(),
  currentDate.getSeconds(),
);
console.log(currentDate.getTime());

// console.log("this is the show");

function looop() {
  let a = 0;
  for (let index = 0; index < 100000000; index++) {
    a = a + index;
  }
  return a;
}

const bt = new Date();
beforteTime = bt.getTime();
looop();
const at = new Date();
afterTime = at.getTime();

console.log(afterTime - beforteTime);
