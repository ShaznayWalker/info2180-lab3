//Exercise 1 
window.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const squares = board.getElementsByTagName('div');

    for (const square of squares) {
        square.classList.add('square');
    }
});

//Exercise 2
window.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div');
    let activePlayer = 'X';

    squares.forEach(square => {
        square.classList.add('square');

        square.addEventListener('click', () => {
            if (!square.textContent) {
                square.textContent = activePlayer;
                square.classList.add(activePlayer);
                activePlayer = activePlayer === 'X' ? 'O': 'X';
            }
        });
    });
});


//Exercise 3
window.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div');

    squares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.classList.add('hover');
        });

        square.addEventListener('mouseleave', () => {
            square.classList.remove('hover');
        });
    });
});
  
