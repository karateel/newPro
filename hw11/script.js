const block = 5;
const wrapper = document.createElement("div");
document.body.appendChild(wrapper);

function blockCreated(){
    const div = document.createElement("div");
    const span = document.createElement("span");
    span.innerText = 0;
    div.appendChild(span);
    return div;
}

for (let i = 0; i < block; i++){
    wrapper.appendChild(blockCreated());
}

wrapper.addEventListener("click", event => {
    const div = event.target.closest("div");
    div.firstChild.innerText = +div.firstChild.innerText + 1;
})




