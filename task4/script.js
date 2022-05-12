const firstArray = new Array(20);

for(let i = 0; i < 20; i++){
    firstArray.push(Math.floor(Math.random() * (100 + 1)));
}

document.write(firstArray.join(" "))

firstArray.sort((a, b) => a - b);
document.write("<br\/>" + firstArray.join(" "))

firstArray.sort((b, a) => a - b);
document.write("<br\/>" + firstArray.join(" "));