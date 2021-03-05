let s = +prompt("Number");

for (let i = 1; i <= s; i++) {
    if (i % 2 === 1) {
        continue;
    }

    console.log(i, i + i);
}
