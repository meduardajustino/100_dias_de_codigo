const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.message');
const playerSpan = document.getElementById('player');
const resetBtn = document.getElementById('reset-btn');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6]
];

function handleCellClick(event) {
  const cell = event.target;
  const cellIndex = Array.from(cells).indexOf(cell);

  if (board[cellIndex] !== '' || !gameActive) {
    return;
  }

  cell.innerText = currentPlayer;
  board[cellIndex] = currentPlayer;

  checkForWinner();
}

function checkForWinner() {
  let roundWon = false;

  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    message.innerHTML = `Vitória do ${currentPlayer}!`;
    gameActive = false;
    return;
  }

  if (!board.includes('')) {
    message.innerHTML = 'Deu velha, joguem novamente.';
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  playerSpan.innerText = currentPlayer;
}

function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => cell.innerText = '');
  playerSpan.innerText = 'X';
  message.innerHTML = 'Quem começa é o <span id="player">X</span>';
  gameActive = true;
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetBtn.addEventListener('click', resetGame);
