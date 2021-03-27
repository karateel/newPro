const arrayForCopy = [
    {name:'Natsuki Subaru'},
    {from:'Re:Zero'}
]

const objectForCopy = {
    name: "Asta",
    from: "Black Clover",
    mates : [
        {name: "Yuno"},
        {name: "Yammi"}
    ]
}


function cuteCopy(main) {
    if (typeof main !== "object" && main === null) {
        return main;
    } else if (Array.isArray(main)) {
        let fakeArray = [];
        for (let i of main) {
            fakeArray.push(cuteCopy(i));
        }
        return fakeArray;
    } else {
        let fakeObject = {};
        for (let i of Object.keys(main)) {
            fakeObject[i] = cuteCopy(main[i]);
        }
        return fakeObject;
    }
}



const objectCopied = cuteCopy(objectForCopy);
console.log (objectForCopy === objectCopied);
console.log (objectCopied.name === objectForCopy.name); 

const arrayCopied = cuteCopy(arrayForCopy);
console.log (arrayCopied === arrayForCopy);
console.log (arrayCopied.name === arrayForCopy.name);



