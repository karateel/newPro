// function lookingFor (value){
//   return value > 10;
// }

// const z = [19, 3, 18, 42, 9];
// const l = [44, 13, 19, 22, 1337];

// const r = z.every(lookingFor);
// const r1 = l.every(lookingFor);

// console.log (r, r1)




// const numbers = [18, 5, 13, 22, 3]

// function fakEvery(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] >= 10) {
//       return false;
//     } else {
//     return true;
//   }
//  }
// }

// const fakeNumbers = fakEvery (numbers);
// console.log (fakeNumbers)


const lastChanse = [1, 2, 3, 4, 5, -9, -10];

function fakeEvery (array, callBack){
    for (let value of array){
        if(!callBack(value)){
            return false
        }
        return true
    }
}

function fakeEveryMath (value){
    return value % 2 === 0
}

const fakeEveryLog = fakeEvery(lastChanse, fakeEveryMath);
console.log (fakeEveryLog)



