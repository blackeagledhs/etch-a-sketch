const container = document.getElementById('container');

function createGrid(size) {
    container.innerHTML = ''; // Clear container
    const squareSize = 960 / size; // Calculate size
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
}

// Default 16x16 grid
createGrid(16);

document.getElementById('reset').addEventListener('click', () => {
    const newSize = parseInt(prompt('Enter grid size (1-100):'));
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Please enter a number between 1 and 100.');
    }
});


// Implement extra credit

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function darken(square) {
    let currentOpacity = parseFloat(square.style.opacity) || 0;
    if (currentOpacity < 1) {
        currentOpacity += 0.1;
        square.style.opacity = currentOpacity;
    }
}

function createGrid(size) {
    container.innerHTML = '';
    const squareSize = 960 / size;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColor();
            darken(square);
        });

        container.appendChild(square);
    }
}
