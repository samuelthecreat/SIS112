const chessboard = document.getElementById('chessboard');
const turnDisplay = document.querySelector('.turn');
const timerDisplay = document.getElementById('timer');
let selectedPiece = null;
let turn = 'white'; // El turno comienza con las blancas
let check = false;

let whiteTime = 600; // 10 minutos en segundos
let blackTime = 600;
let timerInterval;

// Tablero inicial
let board = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];

const pieceSymbols = {
    'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚', 'p': '♟',
    'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙'
};

// Iniciar el temporizador
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (turn === 'white') {
            whiteTime--;
            if (whiteTime <= 0) {
                alert("¡El tiempo de las Blancas se ha agotado! Ganan las Negras.");
                clearInterval(timerInterval);
                resetBoard();
            }
        } else {
            blackTime--;
            if (blackTime <= 0) {
                alert("¡El tiempo de las Negras se ha agotado! Ganan las Blancas.");
                clearInterval(timerInterval);
                resetBoard();
            }
        }
        updateTimerDisplay();
    }, 1000);
}

// Actualizar el temporizador en pantalla
function updateTimerDisplay() {
    const time = turn === 'white' ? whiteTime : blackTime;
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

// Mover la pieza seleccionada
function movePiece(targetRow, targetCol) {
    const { row, col } = selectedPiece;

    if (isValidMove(row, col, targetRow, targetCol)) {
        board[targetRow][targetCol] = board[row][col];
        board[row][col] = '';

        // Alternar turno
        turn = turn === 'white' ? 'black' : 'white';
        turnDisplay.textContent = `Turno: ${turn === 'white' ? 'Blancas' : 'Negras'}`;
        turnDisplay.style.backgroundColor = turn === 'white' ? '#ffca28' : '#1e88e5';

        // Reiniciar la pieza seleccionada
        selectedPiece = null;

        // Actualizar el temporizador
        startTimer();

        // Actualizar el tablero visual
        createBoard();
    }
}

// Inicializar el tablero
function createBoard() {
    chessboard.innerHTML = '';
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.id = `${row}-${col}`;
            cell.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
            cell.addEventListener('click', () => handleCellClick(row, col));

            if (board[row][col]) {
                const piece = document.createElement('span');
                piece.classList.add('piece');
                piece.textContent = pieceSymbols[board[row][col]];
                cell.appendChild(piece);
            }

            chessboard.appendChild(cell);
        }
    }
}

// Manejar el clic en una celda
function handleCellClick(row, col) {
    if (selectedPiece) {
        movePiece(row, col);
    } else if (board[row][col]) {
        const piece = board[row][col];
        if ((turn === 'white' && piece === piece.toUpperCase()) ||
            (turn === 'black' && piece === piece.toLowerCase())) {
            selectedPiece = { row, col };
        }
    }
}

// Reiniciar el tablero y el tiempo
function resetBoard() {
    board = [
        ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
    ];
    turn = 'white';
    whiteTime = 600;
    blackTime = 600;
    startTimer();
    createBoard();
}

// Iniciar el juego
createBoard();
startTimer();
