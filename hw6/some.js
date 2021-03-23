// // const moreNumbers = [17 , 90 , 3, 18 , 4 , 9];
// // const numbersCheck = moreNumbers.some (function (z){
// //     if (z <= 0){
// //         return (true);
// //     } else {
// //         return (false);
// //     }
// // });
// // console.log (numbersCheck)

// const moreNumbers = [17 , 90 , 3, 18 , 4 , 9];
// function fakeSome (array){
//   for (let i = 0; i < array.length; i++){
//     if (array[i] <= 0){
//       return true
//     } else {
//       return false
//     }
//   }
// }
// const fakeNumbers = fakeSome(moreNumbers);
// console.log (moreNumbers, fakeNumbers)


const lastChanse = [1, 2, 3, 4, 5, -9, -10];

function fakeSome (array, callBack){
    const fakeLastChanse = [];
    for (let value in array){
        if (callBack(value)){
            return true
        }
        return false
    }
    return fakeLastChanse
}

function fakeSomeMath (value) {
    return value % 2 === 0
}

const fakeSomeLog = fakeSome (lastChanse, fakeSomeMath);
console.log (fakeSomeLog)
