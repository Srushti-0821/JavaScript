// update string using array and third variable 
// 1st way

let name = "Superman";
let name2 = [];
for(let i=0; i<name.length; i++) 
{
    name2.push(name[i]);
}

name2[0] = "N";
let bag = "";

for(let i=0; i<name2.length; i++) 
{
    bag = bag + name2[i];
}

console.log(bag);


//2ed way

let name1 = "Madam";
let output = "";

for(let i=0; i<name1.length; i++) 
{
    if(i==0) 
    {
    output = output + "N";
    } 
    else 
    {
    output = output + name1[i];
    }
}
console.log(output); 