let bigNumber = 89657;
console.log (bigNumber);
let a = (bigNumber % 10);
let b = ((bigNumber % 100) - a) / 10 ;
let c = ((bigNumber % 1000) - bigNumber %100) / 100;
let d = ((bigNumber % 10000) - bigNumber %1000) / 1000;
let e = ((bigNumber % 100000) - bigNumber %10000) / 10000;
console.log (e , d , c , b , a);
