let firstObj = {
    name : "Yuno",
    lastname : "Gasai"
};
let secondObj = {
    name : "02",
    from: "Darling in the Franxx"
};

function checkingObjects (fobject, sobject){
    for (let i in fobject){
        if ((i in sobject) || fobject[i] === sobject[i] || Object.keys(firstObj).lenght === Object.keys(secondObj).lenght){
        return true
        } 
    }
    return false
}

const copyObjects = checkingObjects(firstObj, secondObj);
console.log (copyObjects) // true
console.log (firstObj === secondObj) //false

//Не понимаю. Объекты не равны , ключи тоже , так почему мне пишет true??
//Но при обычной проверке в консоли , пишет false...
//По дебагеру объекты вообще не похожи...


