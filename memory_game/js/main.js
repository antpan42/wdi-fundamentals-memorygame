console.log("Up and running!");


const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
function flipCard(cardId) {
	const cardOne = cards[0];
	cardsInPlay.push(cardOne);
	console.log("User Flipped queen");
	const cardTwo = cards[3];
	cardsInPlay.push(cardTwo);
	console.log("User Flipped king");
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0]===cardsInPlay[3]) { 
		alert("You Found A Match!")}
		 else { alert("Sorry Try Again.");}
		 	console.log("User flipped" + cards[cardId]);
		 		cardsInPlay.push(cards[cardId]);

	}
}
flipCard(0);
flipCard(2);

