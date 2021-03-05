const numbers = [1, 3, 3, 7]
function testingMap(value){
    if (value % 3 === 0){
        return (true);
    } else {
        return (false);
    }
}
const y = numbers.map(testingMap);
console.log (y)

