const container = document.getElementById('container');

let rowSize = 0;
let columnSize = rowSize;

function createGrid(rowSize, columnSize) {
    for (let i = 0; i < rowSize; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('rowDiv');
        container.appendChild(rowDiv);
        for (let j = 0; j < columnSize; j++) {
            const columnDiv = document.createElement('div');
            columnDiv.classList.add('columnDiv');
            rowDiv.appendChild(columnDiv);
        }
    }
}

window.onload = createGrid(16, 16);


function makeBlack() {
    container.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'black';
    });
}

makeBlack();


function getRandomColor() {
    let randomColor = "#" +Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

function makeRandomColor() {
    container.addEventListener('mouseover', function(event) {
        event.target.style.background = getRandomColor();
    })
}





const clear = document.getElementById('clear').addEventListener('click', event => {
//clear.addEventListener('click', event => {
    
    let gridSize;
    do {
       gridSize = window.prompt("Choose a number of squares per side (1 to 100)");
    }
    while (gridSize < 1 || gridSize > 100) 



    rowSize = gridSize;
    columnSize = gridSize;
    
    document.querySelectorAll('.columnDiv').forEach(item => {
        item.remove();
        document.querySelectorAll('.rowDiv').forEach(item => {
        item.remove();
    });
    })
    createGrid(rowSize, columnSize);
    makeBlack();
});



document.getElementById('black').addEventListener('click', function() {
    makeBlack();
})

document.getElementById('randomColors').addEventListener('click', function() {
    makeRandomColor();
})