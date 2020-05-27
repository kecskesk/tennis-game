class TennisGame {
    constructor(playerOneName, playerTwoName) {
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
    }

    getScore() {

        if (this.hasWinner()) {
            return this.playerWithHighestScore() + " wins";
        }

        if (this.hasAdvantage()) {
            return "Advantage " + this.playerWithHighestScore();
        }

        if (this.isDeuce())
            return "Deuce";

        if (this.playerOneScore == this.playerTwoScore) {
            return this.translateScore(this.playerOneScore) + " all";
        }

        return this.translateScore(this.playerOneScore) + "," + this.translateScore(this.playerTwoScore);
    }

    isDeuce() {
        return this.playerOneScore >= 3 && this.playerTwoScore == this.playerOneScore;
    }

    playerWithHighestScore() {
        if (this.playerOneScore > this.playerTwoScore) {
            return this.playerOneName;
        } else {
            return this.playerTwoName;
        }
    }

    hasWinner() {
        if (this.playerTwoScore >= 4 && this.playerTwoScore >= this.playerOneScore + 2) {
            return true;
        }
        if (this.playerOneScore >= 4 && this.playerOneScore >= this.playerTwoScore + 2) {

            return true;
        }
        return false;
    }

    hasAdvantage() {
        if (this.playerTwoScore >= 4 && this.playerTwoScore == this.playerOneScore + 1) {
            return true;
        }

        if (this.playerOneScore >= 4 && this.playerOneScore == this.playerTwoScore + 1) {
            return true;
        }

        return false;
    }

    playerOneScores() {
        this.playerOneScore++;
    }

    playerTwoScores() {
        this.playerTwoScore++;
    }

    translateScore(score) {
        switch (score) {
            case 3:
                return "Forty";
            case 2:
                return "Thirty";
            case 1:
                return "Fifteen";
            case 0:
                return "Love";
        }
    }


}

module.exports = TennisGame;