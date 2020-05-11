$(document).ready(function() {
	$("button").click(function() {

		let suits = ['clubs', 'hearts', 'spades', 'diamonds'];
		let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
		let deck = [];

		suits.forEach(function(suit) {
		cards.forEach(function(card) {
  	deck.push(card + " of " + suit);
  });
});

		$(".cards").text(deck);

	});
});




console.log(deck);

//if cards, then suits, result is 2 of clubs, 2 of hearts, 2 of spades, etc.
//if suits, then cards, result is 2 of clubs, 3 of clubs, 4 of clubs, etc.