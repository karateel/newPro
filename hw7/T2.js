function getSymbolIndex(str,symbol){
    let index = 0;
    for (let key of str){
        if (key === symbol){
            return index
        }
        index++
    }
}
console.log (getSymbolIndex("hello lol","h"))
console.log (getSymbolIndex("hello lol","l"))
console.log (getSymbolIndex("hello lol","v")) // у меня undefined :C
    





