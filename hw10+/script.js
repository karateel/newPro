const numberArray = [1, 2, 3, 4, 5];

const numberArrayPlus = [1, 2, 3, [4, 5], 6];


function listMade(array){
    let ul = document.createElement("ul");
        for (let value of array){
            if (Array.isArray(value)){
                ul.appendChild(listMade(value));
            } else {
                let li = document.createElement("li");
                li.innerText = value;
                ul.appendChild(li);
            }
        }
    return ul;
};

const makingList = listMade (numberArrayPlus);
document.body.appendChild(makingList);





