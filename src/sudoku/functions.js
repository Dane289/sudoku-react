export const isFull = (board) => {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === 0) {
            return false;
        }
    }
    return true;
}

const linesContainDuplicates = (board) => {
    let row = new Set();
    for (let i = 0; i < 9; i++) {
        row.clear();
        for (let j = 0; j < 9; j++) {
            let currentCell = board[i * 9 + j];
            if (currentCell === 0)
                continue;
            if (row.has(currentCell)) {
                return true;
            }
            else
                row.add(currentCell);
        }
    }
    return false;
}

const columnsContanDuplicates = (board) => {
    let columns = new Set();
    for (let i = 0; i < 9; i++) {
        columns.clear();
        for (let j = 0; j < 9; j++) {
            let currentCell = board[i + j * 9];
            if (currentCell === 0)
                continue;
            if (columns.has(currentCell)) {
                return true;
            }
            else
                columns.add(currentCell);
        }
    }
    return false;
}

const regionsContainDuplicates = (board) => {
    let regionHash = new Set();
    for (let region=0; region<9; region++) {
        regionHash.clear();
        for(let i =0 ; i< 3; i++) {
            for(let j=0; j<3; j++) {
                let currentCell = board[9*3*Math.floor(region/3)+(region%3)*3+i*9+j];
                if(currentCell === 0) {
                    continue;
                }
                if(regionHash.has(currentCell)){
                    return true;
                } else {
                    regionHash.add(currentCell);
                }
            }
        }
    }
    return false;
}


export const isBoardValid = (board) => {
    let error = "";
    if(linesContainDuplicates(board)) {
        error += "Duplicates on lines.\n";
    }
    if(columnsContanDuplicates(board)) {
        error += "Duplicates on columns. \n"
    }
    if(regionsContainDuplicates(board)) {
        error += "Duplicates on regions.";
    }
    console.log(error);
    return error === "";
}

export const changeSudokuBoard = (board, i, j, newValue) => {
    let newBoard = [];
    for (let index = 0; index < board.length; index++) {
        newBoard[index] = board[index];

    }
    newBoard[i * 9 + j] = newValue;
    return newBoard;
}