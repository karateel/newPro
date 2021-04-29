const url = 'https://rickandmortyapi.com/api/character/?page='
let pageNumber = 33; // max pages - 34!

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

const dataType = createButton("button")
dataType.addEventListener("click", (event) =>{
    event.target.innerText = "Getting data";
    event.target.setAttribute ("disabled", "disabled");
    dataGot("GET", url + pageNumber++, dataLoaded, errorLoaded);
})

document.body.appendChild(createList("list"));
document.body.appendChild(dataType);

function dataGot(request, url, callback, onerror) {
    const xhr = new XMLHttpRequest();
    xhr.open(request, url);
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = () => {
        if (xhr.status !== 200) {
            onerror(xhr);
            return;
        }
        callback(xhr.response);
    }
    xhr.onerror = () => {
        onerror(xhr);
    }
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