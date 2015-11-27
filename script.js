$(document).on('ready', function() {
	var player1 = "player1";
	var player2 = "player2";
	var turn = "player1";
	var winningCombo = [[1,2,3],[4,5,6],[7,8,9],[3,5,7],[1,5,9],[1,4,7],[2,5,8],[3,6,9]]



	var turns = function() {
		if (turn === "player1") { 	
		$(this).text('X');
			turn = "player2"
		} else {

		$(this).text('O');	
			turn = "player1"
		}

	};

	$("td").on('click', turns);

	var winner = function() {
		$('td').off('click');
		window.alert('winner');
	}

for (var i = winningCombo.length - 1; i >= 0; i--) {
	winningCombo[i]

	var id = winningCombo[i][0];
	var moveOne = $('#' + id).text()

	var id = winningCombo[i][1];
	var moveTwo = $('#' + id).text()

	var id = winningCombo[i][2];
	var moveThree = $('#' + id).text()

	if (moveOne === moveTwo && moveTwo === moveThree) {
		winner();
	}

};

});

