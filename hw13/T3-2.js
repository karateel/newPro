let animal = {
    run: true,
    jump: true,
    sex: "W",
    milk: true
}

function mammals (sex){
    __proto__.animal;
    animal.sex = sex;
    if(sex === "W"){
        return (animal.milk = true);
    } else {
        return (animal.milk = false);
    }
};

function rakoons (){
    this.thief = true;
};

const dog = new mammals("M"); //смена пола тут W - women , M - men;
const rakoon = new rakoons();
dog.__proto__ = animal;
rakoon.__proto__ = dog;

console.log (rakoon.milk)

