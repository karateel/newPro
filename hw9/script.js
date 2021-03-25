const names = [
    "ZeroTwo",
    "Rem",
    "Rias"
];
const form = document.createElement("form");
const block = document.createElement("div");
const input = document.createElement("input");
const button = document.createElement("button");

button.type = "Confirm";
button.innerText = "Anime Waifu Name?";
button.className = "wrapper__button-confirm";
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
            array[i] = prompt ("Do you really want to RENAME your waifu?");
            block.replaceChild(newList(names), block.lastChild);
        })
        buttonForDelete.addEventListener("click", () =>{
            array[i] = confirm ("Do you really want to DELETE your waifu?")
            array.splice(i, 1);
            block.replaceChild(newList(names), block.lastChild)
        })    
   }
   return ul 
}

