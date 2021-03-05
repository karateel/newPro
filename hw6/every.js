function lookingFor (value){
    return value > 10;
}

const z = [19, 3, 18, 42, 9];
const l = [44, 13, 19, 22, 1337];

const r = z.every(lookingFor);
const r1 = l.every(lookingFor);

console.log (r, r1)