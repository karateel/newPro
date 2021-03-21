// const moreNumbers = [17 , 90 , 3, 18 , 4 , 9];
// const numbersCheck = moreNumbers.some (function (z){
//     if (z <= 0){
//         return (true);
//     } else {
//         return (false);
//     }
// });
// console.log (numbersCheck)

const moreNumbers = [17 , 90 , 3, 18 , 4 , 9];
function fakeSome (array){
  for (let i = 0; i < array.length; i++){
    if (array[i] <= 0){
      return true
    } else {
      return false
    }
  }
}
const fakeNumbers = fakeSome(moreNumbers);
console.log (moreNumbers, fakeNumbers)
