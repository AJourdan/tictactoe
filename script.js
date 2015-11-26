$(document).on('ready', function() {
	var player1 = "player1";
	var player2 = "player2";
	var turn = "player1";



	var turns = function() {
		if (turn === "player1") { 	
		$(this).text('x');
			turn = "player2"
		} else {
			
		$(this).text('O');	
			turn = "player1"
		}

	};

	$("td").on('click', turns);


});