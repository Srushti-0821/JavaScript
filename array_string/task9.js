// remove char from string

let name = "shivendra";
let output = "";

for(let i=0; i<name.length; i++) 
{
    if(name[i] != "s") 
    {
    output = output + name[i];
    }
}
console.log(output);