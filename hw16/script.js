function getArrFromStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (error) {
        console.error("arror at  arr in localstorage");
        return false;
    }
}

const arrFromLStorage = getArrFromStorage("arr");

const names = arrFromLStorage || [
    "ZeroTwo",
    "Rem",
    "Rias Griamory"
];

const form = document.createElement("form");
const block = document.createElement("div");
const input = document.createElement("input");
const button = document.createElement("button");

button.type = "Confirm";
button.innerText = "Anime Waifu Name?";
button.className = "wrapper__button-confirm";
button.id = "saveButton"
block.appendChild(form);
form.appendChild(input);
form.appendChild(button);
document.body.appendChild(block);

const list = newList(names);
block.appendChild(list);

function addWaifus(event){
    event.preventDefault();
    if (input.value) {
        names.push(input.value);
        input.value = null;
        block.replaceChild(newList(names),block.lastChild);
    }
}

button.addEventListener("click", addWaifus);

function newList (array){
   const ul = document.createElement("ul");
   for (let i = 0; i < array.length; i++){
       const li = document.createElement("li");
       const newName = document.createElement("button");
       newName.innerText = "Rename Waifu";
       const buttonForDelete = document.createElement("button");
       buttonForDelete.innerText = "Delete waifu :C"
        li.innerHTML = array[i];
        ul.appendChild(li);
        ul.appendChild(newName);
        ul.appendChild(buttonForDelete);
        newName.addEventListener("click", () => {
            localStorage.setItem('waifuName', input.value)
            array[i] = prompt ("Do you really want to RENAME your waifu?");
            block.replaceChild(newList(names), block.lastChild);
        });
        let inputWaifu
        inputWaifu = document.getElementsByTagName('input');              
        inputWaifu.value = localStorage.getItem('savedName') || '';  
        let buttonSave = document.getElementById('saveButton');  
        buttonSave.addEventListener('click', () => {                  
        localStorage.setItem('savedName', JSON.stringify(names));  
        });
        buttonForDelete.addEventListener("click", () =>{
            array[i] = confirm ("Do you really want to DELETE your waifu?")
            array.splice(i, 1);
            localStorage.removeItem("savedName")
            block.replaceChild(newList(names), block.lastChild)
        })    
   }
   return ul 
}