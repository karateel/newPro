const moreNumbers = [17 , 90 , 3, 18 , 4 , 9];
const numbersCheck = moreNumbers.some (function (z){
    if (z <= 0){
        return (true);
    } else {
        return (false);
    }
});
console.log (numbersCheck)