class TennisGame {
    constructor(playerOneName, playerTwoName) {
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
        this.scoreMap = {
            0 : "Love",
            1 : "Fifteen",
            2 : "Thirty",
            3 : "Forty"
        };
    }

    getScore() {
        if (this.isDeuce()) {
            return "Deuce";
        }
        let player = this.hasAdvantage();
        if (player) {
            return 'Advantage ' + player;
        }
        let winner = this.winner();
        if (winner) {
            return winner + ' wins';
        }

        const playerOne = this.scoreMap[this.playerOneScore]
        const playerTwo = this.scoreMap[this.playerTwoScore]

        if (this.playerOneScore === this.playerTwoScore) {
            return playerOne + " all"
        } else {
            return playerOne + "," + playerTwo
        }
    }

    playerOneScores() {
        this.playerOneScore++;
    }

    playerTwoScores() {
        this.playerTwoScore++;
    }

    winner() {
        let diff = this.playerOneScore - this.playerTwoScore;
        if (this.playerOneScore >= 4 || this.playerTwoScore >= 4) {
            if (diff >= 2) {
                return this.playerOneName;
            } else if (diff <= -2) {
                return this.playerTwoName;
            }
        }
        return null;
    }

    hasAdvantage() {
        let diff = this.playerOneScore - this.playerTwoScore;
        if (this.playerOneScore >= 4) {
            if (diff === 1) {
                return this.playerOneName;
            } else if (diff === -1) {
                return this.playerTwoName;
            }
        }
        return null;
    }

    isDeuce() {
        return this.playerOneScore === this.playerTwoScore && this.playerOneScore >= 3;
    }
}

module.exports = TennisGame;