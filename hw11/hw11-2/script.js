const block = 5;
const color = ["blue", "green", "yellow"]
const wrapper = document.createElement("div");
document.body.appendChild(wrapper);

function blockCreated(){
    const div = document.createElement("div");
    div.style.backgroundColor = [];
    return div;
}

for (let i = 0; i < block; i++){
    wrapper.appendChild(blockCreated());
}

wrapper.addEventListener("click", (event) => {
    const colorChange = event.target.style.backgroundColor
    const indexOfColor = color.indexOf(colorChange)
    if (indexOfColor !== color.length + 1){
        event.target.style.backgroundColor = color[+indexOfColor +1];
    }
})


// for (let i = 0; i < color.length; i++){
//     if (i === color.length -1){
//         event.target.style.backgroundColor = color [indexOfColor +1];
//     } else {
//         event.target.style.backgroundColor = color [0];
//     }
// } 
// Это я пытался зациклить переключение цвета...
