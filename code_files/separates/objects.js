class Human {
    constructor(name, height, language) {
      this.name = name;
      this.height = height;
      this.language = language;
    }
    speak() {
      console.log(this.name + " speaks " + this.language);
    }
    tellIn() {
      console.log("the name is " + this.name);
    }
  }
  
  //this is the assigning of the object human to new Humans;
  let Bhavesh = new Human("Bhavesh", "5.6", "javascript");
  // console.log(Bhavesh.name);
  
  Bhavesh.speak();
  Bhavesh.tellIn();