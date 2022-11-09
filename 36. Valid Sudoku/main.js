/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let boardIsValid = true;

    // iterate through rows
    for (let i = 0; i < 9 && boardIsValid; i++) {
        let map = new Map();
        for (let j = 0; j < 9 && boardIsValid; j++) {
            if (board[i][j] === '.')
                continue;

            if (!map.get(board[i][j])) {
                map.set(board[i][j], 1);
            } else {
                boardIsValid = false;
            }
        }
    }

    // if board already is invalid, return false
    if (!boardIsValid)
        return boardIsValid;

    // iterate through columns
    for (let i = 0; i < 9 && boardIsValid; i++) {
        let map = new Map();
        for (let j = 0; j < 9 && boardIsValid; j++) {
            let cell = board[j][i];
            if (cell === '.')
                continue;

            if (!map.get(cell)) {
                map.set(cell, 1);
            } else {
                boardIsValid = false;
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
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
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