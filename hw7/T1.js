function isSymbolPresentInString(str,symbol){
    for (let value of str){
        if (value === symbol){
            return true;
        }
    }
    return false
}
console.log (isSymbolPresentInString("abc", "a"))
console.log (isSymbolPresentInString("abc", "e"))


