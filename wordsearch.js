const wordSearch = (letters, word) => {
    const numRows = letters.length;
    const numCols = letters[0].length;

    const horizontalJoin = letters.map(ls => ls.join(''));

    for (const row of letters) {
        if (row.join('').includes(word)) {
            return true; // Horizontal match
        }
    }

    for (let col = 0; col < numCols; col++) {
        const verticalWord = [];
        for (let row = 0; row < numRows; row++) {
            verticalWord.push(letters[row][col]);
        }
        if (verticalWord.join('').includes(word)) {
            return true; // Vertical match
        }
    }

    for (let startRow = 0; startRow < numRows; startRow++) {
        for (let startCol = 0; startCol < numCols; startCol++) {
            const diagonalWord = [];
            let row = startRow;
            let col = startCol;

            while (row < numRows && col < numCols) {
                diagonalWord.push(letters[row][col]);
                row++;
                col++;
            }

            if (diagonalWord.join('').includes(word)) {
                return true; // Diagonal match
            }
        }
    }

    return false; // No match found
};

module.exports = wordSearch;


/*
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));

    for (l of horizontalJoin) {
        if (l.includes(word)) return true;

    }
    for (let i = 0; i < letters[0].length; i++) {
        let column = '';
        for (let j = 0; j < letters.length; j++)
            column += letters[j][i];

        console.log(column);
        if (column.includes(word)) {
            return true;

        }

    }
    return false;
};

