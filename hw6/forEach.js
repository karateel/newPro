// const m = [1, 2, 3];
// function numberSearch(value){
//     console.log ("numberSearch", value);
// }


// const d = m.forEach(numberSearch);
// console.log (m);


const m = [1, 2, 3];

function callback(value) {
  return value;
}

const fakeEach = callback (m);
console.log (m, fakeEach);
