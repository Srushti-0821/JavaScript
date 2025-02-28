// counts name starting with N or n

let names = ["Nobita", "Naruto", "Noddy", "Shinchan", "Oswald"];
let count = 0;

for(let i=0; i<names.length; i++) 
{
    let name = names[i];
    if(name[0] == "N" || name[0] == "n") 
    {
    count++;
    }
}
console.log(count);