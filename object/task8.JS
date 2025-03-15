
let obj1 = {
    name: "srushti",
    age: 24
  };
  
  let obj2 = {
    location: "surat",
    salary: 25000
  };
  
  
  let details = { ...obj1, ...obj2 };
  
  console.log(details);