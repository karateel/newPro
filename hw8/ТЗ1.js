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
<<<<<<< HEAD
    if (typeof(main) !== "object") {
=======
    if (typeof (main) !== "object") {
>>>>>>> 17dadb2bec2988470b7b13798de93c09bb7072f6
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



