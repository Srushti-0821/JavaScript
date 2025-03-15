
function getProduct(name) {
  var arr = ["earphone", "headphone", "ipad"];
  if (name < 0) {
    return null;
  }
  return arr[name];
}
var result = getProduct(-1);

if (result == null)
{
  console.log("Invalid Input");
}