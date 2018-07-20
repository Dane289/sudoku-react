export const isFull = (board) => {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === 0) {
            return false;
        }
    }
    return true;
}

export const linesContainDuplicates = (board) => {
    let row = new Set();
    for (let i = 0; i < 9; i++) {
        row.clear();
        for (let j = 0; j < 9; j++) {
            let currentCell = board[i * 9 + j];
            if (currentCell === 0)
                continue;
            if (row.has(currentCell))
                return true;
            else
                row.add(currentCell);
        }
    }
    return false;
}

export const changeSudokuBoard = (board, i, j, newValue) => {
    let newBoard = [];
    for (let index = 0; index < board.length; index++) {
        newBoard[index] = board[index];
        
    }
    newBoard[i * 9  + j] = newValue;
    console.log(board);
    console.log(newBoard);
    return newBoard;
}