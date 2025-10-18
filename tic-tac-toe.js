window.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const squares = board.getElementsByTagName('div');

    for (const square of squares) {
        square.classList.add('square');
    }
});
