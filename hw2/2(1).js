const a = +prompt ('First number');
const b = +prompt ('Second number');

if (Number.isNaN(a)) {
    console.log ("NaN")  
    alert('Its not a number')
}   else if (Number.isNaN(b)) {
    alert('Its not a number')
    console.log ("NaN")
} 
if (a > b){
    alert ("First number is >")
    console.log ("A IS >")
} else {
    alert ("Second number is >")
    console.log ("B IS >")
}
