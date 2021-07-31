class TicTacToe {
    constructor() {
        this.field = [[null, null, null], [null, null, null], [null, null, null]];
        this.currentSymbol = 'x';
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex]) {
            return;
        }

        this.field[rowIndex][columnIndex] = this.currentSymbol;
        this.currentSymbol = this.currentSymbol === 'x' ? 'o' : 'x';

        let gameIsOver = false;
        let sym;

        for (let i = 0; i < 3; i++) {
            sym = this.field[i][0];
            gameIsOver = this.field[i].every(one => one === sym);
            if (gameIsOver) break;

            sym = this.field[0][i];
            gameIsOver = this.field.every(arr => arr[i] === sym);
            if (gameIsOver) break;
        }
        if (!gameIsOver) {
            sym = this.field[1][1];
            gameIsOver = this.field.every((arr, i) => arr[i] === sym)
                || this.field.every((arr, i) => arr[2 - i] === sym);
        }

        if (gameIsOver) {
            this.winner = sym;
            return;
        }

        if (this.noMoreTurns()) {
            this.winner = 'draw';
        }
    }

    isFinished() {
        return !!this.winner;
    }

    getWinner() {
        return this.winner === 'draw' ? null : this.winner;
    }

    noMoreTurns() {
        return this.field.every(arr => arr.every(one => one !== null));
    }

    isDraw() {
        return this.winner === 'draw';
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
