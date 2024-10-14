const chessboard = document.getElementById('chessboard');
let selectedPiece = null;
let turn = 'white'; // El turno comienza con las blancas
let check = false;

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

// Movimientos de la torre
function isValidRookMove(fromRow, fromCol, toRow, toCol) {
    if (fromRow === toRow || fromCol === toCol) {
        return isPathClear(fromRow, fromCol, toRow, toCol);
    }
    return false;
}

// Movimientos del alfil
function isValidBishopMove(fromRow, fromCol, toRow, toCol) {
    if (Math.abs(fromRow - toRow) === Math.abs(fromCol - toCol)) {
        return isPathClear(fromRow, fromCol, toRow, toCol);
    }
    return false;
}

// Movimientos de la reina (combinación de torre y alfil)
function isValidQueenMove(fromRow, fromCol, toRow, toCol) {
    return isValidRookMove(fromRow, fromCol, toRow, toCol) ||
           isValidBishopMove(fromRow, fromCol, toRow, toCol);
}

// Movimientos del rey (1 casilla en cualquier dirección)
function isValidKingMove(fromRow, fromCol, toRow, toCol) {
    return Math.abs(fromRow - toRow) <= 1 && Math.abs(fromCol - toCol) <= 1;
}

// Movimientos del caballo (en "L")
function isValidKnightMove(fromRow, fromCol, toRow, toCol) {
    const rowDiff = Math.abs(fromRow - toRow);
    const colDiff = Math.abs(fromCol - toCol);
    return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
}

// Movimientos del peón (diferente para blancas y negras)
function isValidPawnMove(fromRow, fromCol, toRow, toCol, piece) {
    const direction = piece === 'P' ? -1 : 1;
    const startRow = piece === 'P' ? 6 : 1;
    
    // Movimiento hacia adelante (sin captura)
    if (fromCol === toCol) {
        if (toRow === fromRow + direction && !board[toRow][toCol]) {
            return true;
        }
        if (fromRow === startRow && toRow === fromRow + 2 * direction && !board[toRow][toCol] && !board[fromRow + direction][toCol]) {
            return true;
        }
    }
    // Captura en diagonal
    if (Math.abs(fromCol - toCol) === 1 && toRow === fromRow + direction && board[toRow][toCol]) {
        return true;
    }

    return false;
}

// Verificar si el camino está libre de piezas
function isPathClear(fromRow, fromCol, toRow, toCol) {
    const rowStep = Math.sign(toRow - fromRow);
    const colStep = Math.sign(toCol - fromCol);

    let currentRow = fromRow + rowStep;
    let currentCol = fromCol + colStep;

    while (currentRow !== toRow || currentCol !== toCol) {
        if (board[currentRow][currentCol]) {
            return false;
        }
        currentRow += rowStep;
        currentCol += colStep;
    }

    return true;
}

// Mover la pieza seleccionada
function movePiece(targetRow, targetCol) {
    const { row, col } = selectedPiece;

    if (isValidMove(row, col, targetRow, targetCol)) {
        board[targetRow][targetCol] = board[row][col];
        board[row][col] = '';

        // Alternar turno
        turn = turn === 'white' ? 'black' : 'white';

        // Reiniciar la pieza seleccionada
        selectedPiece = null;

        // Actualizar el tablero visual
        createBoard();
    }
}

// Determinar si el movimiento es válido según la pieza
function isValidMove(fromRow, fromCol, toRow, toCol) {
    const piece = board[fromRow][fromCol];
    const targetPiece = board[toRow][toCol];

    if (!piece || (turn === 'white' && piece === piece.toLowerCase()) || (turn === 'black' && piece === piece.toUpperCase())) {
        return false;
    }

    if (targetPiece && ((turn === 'white' && targetPiece === targetPiece.toUpperCase()) || (turn === 'black' && targetPiece === targetPiece.toLowerCase()))) {
        return false; // No puede capturar sus propias piezas
    }

    const pieceType = piece.toLowerCase();

    switch (pieceType) {
        case 'p': return isValidPawnMove(fromRow, fromCol, toRow, toCol, piece);
        case 'r': return isValidRookMove(fromRow, fromCol, toRow, toCol);
        case 'n': return isValidKnightMove(fromRow, fromCol, toRow, toCol);
        case 'b': return isValidBishopMove(fromRow, fromCol, toRow, toCol);
        case 'q': return isValidQueenMove(fromRow, fromCol, toRow, toCol);
        case 'k': return isValidKingMove(fromRow, fromCol, toRow, toCol);
        default: return false;
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

// Inicializar el juego
createBoard();
