/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let boardIsValid = true;

    // iterate through rows and columns at once
    for (let i = 0; i < 9 && boardIsValid; i++) {
        let mapRows = new Map();
        let mapColumns = new Map();
        for (let j = 0; j < 9 && boardIsValid; j++) {

            let cellRow = board[i][j];

            if (cellRow !== '.') {
                if (!mapRows.has(cellRow)) {
                    mapRows.set(cellRow, 1);
                } else {
                    boardIsValid = false;
                }
            }

            let cellCol = board[j][i];
            if (cellCol !== '.') {
                if (!mapColumns.has(cellCol)) {
                    mapColumns.set(cellCol, 1);
                } else {
                    boardIsValid = false;
                }
            }
        }
    }
    if (!boardIsValid)
        return boardIsValid;



    // iterate through chunks of 3
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            // then iterate the submatrix to check for duplicates
            let map = new Map();

            for (let i1 = i; i1 < i + 3; i1++) {
                for (let j1 = j; j1 < j + 3; j1++) {

                    let cell = board[i1][j1];

                    if (cell === '.')
                        continue;

                    if (!map.get(cell)) {
                        map.set(cell, 1);
                    } else {
                        boardIsValid = false;
                    }

                }
            }

        }
    }


    return boardIsValid;

};

let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

console.log(isValidSudoku(board))