class TennisGame {
    constructor(playerOneName, playerTwoName) {
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
    }

    getScore() {
        //TODO implement
    }
   

    playerOneScores() {
        this.playerOneScore++;
    }

    playerTwoScores() {
        this.playerTwoScore++;
    }
}

module.exports = TennisGame;