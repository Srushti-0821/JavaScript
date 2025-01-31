// Solve the Marriage Problem

// Legal Age in India
// Males: 21
// Females: 18

var gender = "female";
var age = 21;

if (gender == "male") 
{
  if (age >= 21) 
  {
    console.log("Males: get married");
  } 
  else 
  {
    console.log("Males: Can't get married");
  }
} 

else 
{
  if (age >= 18) 
  {
    console.log("Females: get married");
  } 
  else 
  {
    console.log("Females: Can't get married");
  }
}