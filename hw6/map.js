  
// const numbers = [1, 3, 3, 7]
// function testingMap(value){
//     if (value % 3 === 0){
//         return (true);
//     } else {
//         return (false);
//     }
// }
// const y = numbers.map(testingMap);
// console.log (y)

const numberArray = [13, 18, 22, 80, 15]

function selfMap(array) {
  let fakeArray = [];
  for (let i = 0; i < array.length; i++) {
    fakeArray.push(array[i] * 2);
  }
  return fakeArray;
}
const mapTest = selfMap(numberArray)
console.log (mapTest)



