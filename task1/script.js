const firstArray = new Array(20);
const secondArray = new Array();

for(let i = 0; i < 20; i++){
    firstArray.push(Math.floor(Math.random() * (100 + 1)));
}

firstArray.forEach(item => {
    if(Number(item) % 2 != 0){
        secondArray.push(item);
    }   
});

document.write(firstArray.join(" "));
document.write("<br\/>" + secondArray.join(" "));