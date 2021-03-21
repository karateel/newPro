// const salary = [ //   {proffesion : "IT", salary : 15000},
//   {proffesion : "lawyer", salary : 12000},
//   {proffesion : "translater", salary : 16000},
//   {proffesion : "sailor", salary : 240000},
//   {proffesion : "economist", salary : 11000},
//   {proffesion : "architect", salary : 15000},
//   {proffesion : "teacher", salary : 6500},
//   {proffesion : "medician", salary : 7300},
// ];
// const bigSalay = salary.filter(function (m){
//   return m.salary > 13000
// })
// console.log (bigSalay);



const salary = [   
  {proffesion : "IT", salary : 15000},
  {proffesion : "lawyer", salary : 12000},
  {proffesion : "translater", salary : 16000},
  {proffesion : "sailor", salary : 240000},
  {proffesion : "economist", salary : 11000},
  {proffesion : "architect", salary : 15000},
  {proffesion : "teacher", salary : 6500},
  {proffesion : "medician", salary : 7300},
];

function selfFilter(array) {
  let fakeArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].salary >= 10000) {
      fakeArray.push(array[i]);
    }
  }
  return fakeArray;
}

const fakeFilter = selfFilter(salary)
console.log (salary, fakeFilter)
