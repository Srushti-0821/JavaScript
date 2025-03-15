
var user2 = {
  name: "srushti",
  age: 25,
  gender: "female",
  city: "ahmedabad",
  hobbies: "coding",
  marks: [25, 100, 80, 90, 80],
  address: {
    state: "gujarat",
    country: "India",
    district: "ahmedabad",
    pincode: "380004"
  }
};

console.log(user2["address"]["country"]);

console.log(user2.address.country);

