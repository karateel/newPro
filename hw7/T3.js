const originalObj = {
    name: "Tony",
    lastname: "Stark"
};

function copy (target, origin){
    for (let key in origin){
        target[key] = origin[key];
    }
    return target
}


const copyObj = copy ({}, originalObj);
console.log (copyObj)




