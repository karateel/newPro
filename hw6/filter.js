// // const salary = [ //   {proffesion : "IT", salary : 15000},
// //   {proffesion : "lawyer", salary : 12000},
// //   {proffesion : "translater", salary : 16000},
// //   {proffesion : "sailor", salary : 240000},
// //   {proffesion : "economist", salary : 11000},
// //   {proffesion : "architect", salary : 15000},
// //   {proffesion : "teacher", salary : 6500},
// //   {proffesion : "medician", salary : 7300},
// // ];
// // const bigSalay = salary.filter(function (m){
// //   return m.salary > 13000
// // })
// // console.log (bigSalay);



// const salary = [   
//   {proffesion : "IT", salary : 15000},
//   {proffesion : "lawyer", salary : 12000},
//   {proffesion : "translater", salary : 16000},
//   {proffesion : "sailor", salary : 240000},
//   {proffesion : "economist", salary : 11000},
//   {proffesion : "architect", salary : 15000},
//   {proffesion : "teacher", salary : 6500},
//   {proffesion : "medician", salary : 7300},
// ];

// function selfFilter(array) {
//   let fakeArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].salary >= 10000) {
//       fakeArray.push(array[i]);
//     }
//   }
//   return fakeArray;
// }

// const fakeFilter = selfFilter(salary)
// console.log (salary, fakeFilter)


const lastChanse = [1, 2, 3, 4, 5, -9, -10];

function fakeFilter (array, callBack){
    const fakeLastChanse = [];
    for (let value of array){
        if (callBack(value)){
            fakeLastChanse.push(value)
        }
    }
    return fakeLastChanse
}

function fakeFilterMath (value){
    return value > 3
}

const fakeFilterLog = fakeFilter(lastChanse,fakeFilterMath);
console.log (fakeFilterLog)
