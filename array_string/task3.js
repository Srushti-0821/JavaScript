// validate password length

let password = "vb";
// let password = "123456";

if(password.length < 6) 
{
    console.log("Invalid: Your Password must be at least 6 characters long");
} 
else 
{
    console.log("Valid Password");
}