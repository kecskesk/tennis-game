var TennisGame = require('../TennisGame');

test('Tennis game', () => {
	var game = new TennisGame("Boris Becker" , "Bjørn Borg");
	expect(game.getScore()).toBe('Love all');
});

test('Tennis game', () => {
	var game = new TennisGame("Boris Becker" , "Bjørn Borg");
	game.playerOneScores();
	expect(game.getScore()).toBe('Fifteen,Love');
});

test('Tennis game', () => {
	var game = new TennisGame("Boris Becker" , "Bjørn Borg");
	game.playerOneScores();
	game.playerTwoScores();

	expect(game.getScore()).toBe('Fifteen all');
});

test('Tennis game', () => {
	var game = new TennisGame("Boris Becker" , "Bjørn Borg");
	createScore(game, 0, 2);
	expect(game.getScore()).toBe("Love,Thirty");
});

test('Tennis game', () => {
	var game = new TennisGame("Boris Becker" , "Bjørn Borg");
	createScore(game, 3, 0);
	expect(game.getScore()).toBe("Forty,Love");
});

test('Tennis game', () => {
	var game = new TennisGame("Boris Becker" , "Bjørn Borg");
	createScore(game, 3, 3);
	expect(game.getScore()).toBe("Deuce");
});

test('Tennis game', () => {
	var game = new TennisGame("Boris Becker" , "Bjørn Borg");
	createScore(game, 4, 0);
	expect(game.getScore()).toBe("Boris Becker wins");
});

test('Tennis game', () => {
	var game = new TennisGame("Boris Becker" , "Bjørn Borg");
	createScore(game, 1, 4);
	expect(game.getScore()).toBe("Bjørn Borg wins");
});

test('Tennis game', () => {
	var game = new TennisGame("Boris Becker" , "Bjørn Borg");
	createScore(game, 4, 4);
	expect(game.getScore()).toBe("Deuce");
});

test('Tennis game', () => {
	var game = new TennisGame("Boris Becker" , "Bjørn Borg");
	createScore(game, 4, 5);
	expect(game.getScore()).toBe("Advantage Bjørn Borg");
});

test('Tennis game', () => {
	var game = new TennisGame("Boris Becker" , "Bjørn Borg");
	createScore(game, 5, 4);
	expect(game.getScore()).toBe("Advantage Boris Becker");
});

test('Tennis game', () => {
	var game = new TennisGame("Boris Becker" , "Bjørn Borg");
	createScore(game, 2, 4);
	expect(game.getScore()).toBe("Bjørn Borg wins");
});

test('Tennis game', () => {
	var game = new TennisGame("Boris Becker" , "Bjørn Borg");
	createScore(game, 6, 8);
	expect(game.getScore()).toBe("Bjørn Borg wins");
});

test('Tennis game', () => {
	var game = new TennisGame("Boris Becker" , "Bjørn Borg");
	createScore(game, 8, 6);
	expect(game.getScore()).toBe("Boris Becker wins");
});


function createScore(game, playerOneBalls, playerTwoBalls) {
	for (var i = 0; i < playerOneBalls; i++) {
		game.playerOneScores();
	}
	for (var i = 0; i < playerTwoBalls; i++) {
		game.playerTwoScores();
	}
}
