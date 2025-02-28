// count name which contain A in them

let names = ["Nobita", "Naruto", "Noddy", "Shinchan", "Oswald"];
let count = 0;

for(let i=0; i<names.length; i++) 
{
	let name = names[i];
    
	for(let j = 0; j<name.length; j++)
    {
	    if(name[j]=='a' || name[j]=='A') 
        {
	        count++;
	        break;
	    }
	}
}
console.log(count);