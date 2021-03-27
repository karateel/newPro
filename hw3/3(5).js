//     for (let s = 15; s <= 35; s++) {
//         for (let m = 35; m <= 35; m++) {
//             console.log (s * m)
//         }
//     }


// for (let s = 15; s <= 35; s++) {
//     let d = (s * s);
//     console.log(d)
// }

//Переписал на 1 переменную

let multiplication = 1;
for (let i = 15; i <= 35; i++){
    multiplication *= i;
}
console.log (multiplication)
