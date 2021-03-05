// let n = Math.floor(Math.random() * 10) + 1;
// while(true){
//     let s = prompt("Number?");
//     if (isNaN(n)){
//         alert ("Its not a number!")
//     } else if ( s < n || s > n ){
//         confirm("Try again")
//     } else {
//         confirm ("You have nice luck :)")
//         break;
//     }
    
//     console.log (n)
// }

let n = Math.floor(Math.random() * 10) + 1;
while(true){
    let s = prompt ("number?")
    if (s === '' || s === null){
        break;  
    } else if (isNaN(n)) {
        alert ("Its not a number!")
        break;
    }else if (s < n || s > n){
        confirm ("try again")
    } else {
        alert ("Well Played")
        break;
    }
    console.log (n)
}
