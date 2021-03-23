// const m = [1, 2, 3];
// function numberSearch(value){
//     console.log ("numberSearch", value);
// }


// const d = m.forEach(numberSearch);
// console.log (m);


// const m = [1, 2, 3];

// function callback(value) {
//   return value;
// }

// const fakeEach = callback (m);
// console.log (m, fakeEach);


const lastChanse = [1, 2, 3, 4, 5, -9, -10];

function fakeForEach(array, callBack) {
    for (let value of array) {
        callBack(value);
    }
}
function fakeEach(value) {
    console.log(value);
}
fakeForEach(lastChanse, fakeEach);


