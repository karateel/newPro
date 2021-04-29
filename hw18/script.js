const url = 'https://rickandmortyapi.com/api/character/?page='
let pageNumber = 33; // max pages - 34!
let currentPage = 1;

function createButton (className){
    const button = document.createElement('button');
    button.className = className
    button.innerText = "get data"
    return button    
}

function createList (){
    const list = document.createElement('ul');
    return list
}

function selectList(page){
    const select = document.createElement("select");
    for (let i = 1; i <= page; i++){
        const option = document.createElement("option")
        option.value = i;
        option.innerText = "Page number" + i;
        select.appendChild(option)
    }
    return select;
}

const dataType = createButton("button")
const pageList = selectList(pageNumber);

document.body.appendChild(pageList);
document.body.appendChild(dataType);
document.body.appendChild(createList("list"));

dataType.addEventListener("click", (event) =>{
    event.target.innerText = "Getting data";
    event.target.setAttribute ("disabled", "disabled");
    dataGot(url)
        .then(response => dataLoaded(response))
        .catch(error => console.error(error)) 
})

pageList.addEventListener("change", (event) => {
    currentPage = event.target.value;
})


function dataGot() {
    return fetch(url + currentPage)
        .then(res => res.json());
}

function dataLoaded (data){
    const btn = document.querySelector("button");
    if (data.info.next === null){
        btn.innerText = "it was last page"
    }
    btn.innerText = "get data";
    btn.removeAttribute ("disabled");
    const list = document.querySelector ("ul");
    for (let i of data.results){
        const li = document.createElement("li")
        li.innerText = i.name;
        list.appendChild(li)
    }
}

function errorLoaded (xhr){
    const btn = document.querySelector("button")
    console.error (new Error (`Error in ${xhr.status}`));
    btn.removeAttribute("disabled")
    btn.innerText = "Wrong URL"
}