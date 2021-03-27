for (let i = 30; i <= 80; i++){
    for(let s = 30; s <= 80; s++){
        if(s % 2 === 1 || i % 2 === 1){
            continue;
        }
        console.log(i + s);
    }
}
