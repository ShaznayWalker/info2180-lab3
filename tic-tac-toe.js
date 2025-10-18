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

    //Exercise 4
     let gameState = ['', '', '', '', '', '', '', '', ''];

    const newButton = document.querySelector('.btn');//Exercise 6
    let gameOver = false;


    squares.forEach((square, index) => {
        square.classList.add('square');

        square.addEventListener('click', () => {
            //these conditions hinder altering squares that already have an X or O
            if (!square.textContent) {
                square.textContent = activePlayer;
                square.classList.add(activePlayer);

                gameState[index] = activePlayer;

                checkWin(); //Exercise 4

                activePlayer = activePlayer === 'X' ? 'O': 'X';
            }
        });
    });

    //Exercise 4 function
function checkWin() {
        const win = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal win
            [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical win
            [0, 4, 8], [2, 4, 6]   //diagobal win
        ];

        for (const pattern of win) {
            const [a, b, c] = pattern;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                const status = document.getElementById('status');
                status.textContent = `Congratulations! ${gameState[a]} is the Winner!`;
                status.classList.add('you-won');
                gameOver = true; //Exercise 6
                return;
            }
        }
    }
    
    newGameButton.addEventListener('click', () => {
        gameState = ['', '', '', '', '', '', '', '', ''];
        activePlayer = 'X';
        gameOver = false;
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


//Exercise 5
window.addEventListener('DOMContentLoaded', () => {
    const newGameButton = document.querySelector('.btn');
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div');
    const status = document.getElementById('status');

    newGameButton.addEventListener('click', () => {

        // Clear all squares
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
});


        // Reset status message
        status.textContent = 'Move your mouse over a square and click to play an X or an O.';
        status.classList.remove('you-won');
    });
});




