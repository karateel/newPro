// let r = +prompt ("Введите радиус")
// function calcCirlce (){
//     return square;  
// }
// let square = ((r**2) * Math.PI); 
// alert (square);


// function calcCirlce (){
//     let r = +prompt ("Введите радиус")
//     let d = ((r**2) * Math.PI);
//     console.log ("square:" , d) 
//     return d;  
// }
// calcCirlce('')


//переписал так (версия 1.1)

function calcCirlce (x){
    return ((x**2) * Math.PI); 
}

let calcCricleArea = calcCirlce (3);
console.log (calcCricleArea);
