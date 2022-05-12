const firstArray = new Array(20);
const secondArray = new Array();

for(let i = 0; i < 10; i++){
    firstArray.push(Math.floor(Math.random() * (100 + 1)));
}

for(let i = 0; i < 10; i++){
    secondArray.push(Math.floor(Math.random() * (100 + 1)));
}

firstArray.forEach(item => {
    secondArray.push(item);
});

secondArray.forEach(function(item, index) {
    document.write(`Элемент ${item} находится на ${index} <br\/>`);
});