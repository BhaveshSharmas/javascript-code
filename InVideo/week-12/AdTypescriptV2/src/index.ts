  type User = {
    name: string
    age: number
  }  

  const rdm: Readonly<User>={
    name: "Bhavesh",
    age: 21
  }

  console.log(rdm.name);
  