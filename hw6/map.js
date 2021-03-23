  
// // const numbers = [1, 3, 3, 7]
// // function testingMap(value){
// //     if (value % 3 === 0){
// //         return (true);
// //     } else {
// //         return (false);
// //     }
// // }
// // const y = numbers.map(testingMap);
// // console.log (y)

// const numberArray = [13, 18, 22, 80, 15]

// function selfMap(array) {
//   let fakeArray = [];
//   for (let i = 0; i < array.length; i++) {
//     fakeArray.push(array[i] * 2);
//   }
//   return fakeArray;
// }
// const mapTest = selfMap(numberArray)
// console.log (numberArray, mapTest)



const lastChanse = [1, 2, 3, 4, 5, -9, -10];

function fakeMap (array, callback){
    const fakeLastChanse = [];
    for (let value of array){
        fakeLastChanse.push(callback(value))
    }
    return fakeLastChanse
}

function fakeMath (value){
    return value / 2
}

const fakeMapConsole = fakeMap (lastChanse, fakeMath);
console.log (fakeMapConsole)
