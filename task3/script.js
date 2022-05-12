const firstArray = new Array(20);

for(let i = 0; i < 20; i++){
    firstArray.push(Math.floor(Math.random() * (100 + 1)));
}

firstArray.forEach(function(item, index){
    document.write(`Элемент ${item} находится на ${index} <br\/>`);
});

document.write("<br\/><br\/><br\/>")

firstArray.pop();

firstArray.forEach(function(item, index){
    document.write(`Элемент ${item} находится на ${index} <br\/>`);
});
