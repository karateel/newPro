function calc(x, y, action) {
    x = +prompt ("Number one")
    y = +prompt ("Number two")
    action = prompt ('+ , - , * , / , % , ^')
    console.log(x,y,action);   
    switch (action){
        case "+":
            return x + y;
        case "-":
            return x - y;
        case "*":
            return x * y;
        case "/":
            return x / y;
        case "%":
            return x % y;
        case "^":
            return x ** y;
        default:
            alert ("Error")
            break;
    }
    return x,y,action;
}
console.log(calc(''))
