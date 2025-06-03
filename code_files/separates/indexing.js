// let sum = 0;
// for (let i = 0; i < 1000000000; i++) {
//   sum += i;
// }
// console.log(sum);

function aja(a, b, funn) {
    const ba = funn(a, b);
    return ba;
  }
  
  function summ(a, b) {
    return a + b;
  }
  
  function greet() {
    console.log("Hey");
  }
  
  // console.log(aja(2,2,summ));
  // setInterval(greet, 1 * 1000);
  function timer(){
    let count = 10;
  const interval = setInterval(() => {
    console.log(count);
    count--;
  
    if(count == 0){
      clearInterval(interval)
    }
  },1000)
  }
  timer();
  
  function countt() {
    for (let i = 10; i > 0; i--) {
      console.log(i);
      setTimeout(foo,10000)
      function foo(){
        console.log("sadkfsbf");
      }
    }
  }
  // countt();
  // setInterval(counter, 1*1000);