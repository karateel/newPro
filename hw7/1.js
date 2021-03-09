function isSymbolPresentInString(str,symbol){
    if (symbol === 'e' || str !== 'abc'){
        return false
    } else { 
        return true
    }

}

const isSymbolTest = isSymbolPresentInString('abc', 'a');
console.log (isSymbolTest)