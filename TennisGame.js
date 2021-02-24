class TennisGame {
    constructor(playerOneName, playerTwoName) {
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
    }

    getScore() {
        const winner = this.getWinner();
        if (!!winner) {
            return winner + ' wins';
        }
        if (this.playerOneScore === 3 && this.playerTwoScore === 3) {
            return 'Deuce';
        }
        if (this.playerOneScore < 4 && this.playerTwoScore < 4) {
            if (this.playerOneScore !== this.playerTwoScore) {
                return this.getMapping(this.playerOneScore) + ',' + this.getMapping(this.playerTwoScore);
            } else {
                return this.getMapping(this.playerOneScore) + ' all';
            }
        }
        if (this.playerOneScore === this.playerTwoScore) {
            return 'Deuce';
        } else {
            return 'Advantage ' + (this.playerOneScore > this.playerTwoScore ? this.playerOneName : this.playerTwoName);
        }
        return '';
    }

    getWinner() {
        if (this.playerOneScore > this.playerTwoScore + 1 && this.playerOneScore > 3) {
            return this.playerOneName;
        }
        if (this.playerTwoScore > this.playerOneScore + 1 && this.playerTwoScore > 3) {
            return this.playerTwoName;
        } else {
            return null;
        }
    }

   getMapping(score) {
        if (score === 0) {
            return 'Love';
        } else if (score === 1) {
            return 'Fifteen';
        } else if (score === 2) {
            return 'Thirty';
        } else if (score === 3) {
            return 'Forty';
        } else {
            return 'error';
        }
   }

    playerOneScores() {
        this.playerOneScore++;
    }

    playerTwoScores() {
        this.playerTwoScore++;
    }
}

module.exports = TennisGame;
