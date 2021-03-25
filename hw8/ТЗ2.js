function sumNumber(){
    let number = 0;
    return (numero) => {
        return number += numero
    }
}

const sum = sumNumber();
console.log (sum(3));
console.log (sum(5));
console.log (sum(20));