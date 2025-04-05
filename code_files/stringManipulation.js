function strfind(str, target) {
    console.log("Starting from index " + str.lastIndexOf(target));
  }
  
  strfind("Bhavesh sharma sharma", "sharma");
  
  console.log("Bhavesh sharma".slice(0, 7));
  
  function log1() {
    console.log("I called the log1 function");
  }
  
  function log2() {
    console.log("I called the log2 function");
  }
  
  function callFunctions(function_name) {
    function_name();
  }
  
  callFunctions(log1);
  
  let myList = [1, 2, 3, 45, 56, 67];
  
  function priontt(str) {
    if (str % 2 == 0) {
      console.log(str + "Tested");
    }
  }
  myList.forEach(priontt);