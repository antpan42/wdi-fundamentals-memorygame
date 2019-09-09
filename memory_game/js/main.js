console.log("Up and running!");


const cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: 'images/queen-of-hearts.png'
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png'
},
{
rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-hearts.png'
},
{
rank: 'king',
suit: 'diamonds',
cardImage: 'images/king-of-diamonds.png'
}

];
const cardsInPlay = [];
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
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
		 	console.log("User flipped" + cards[cardId].rank);
		 		cardsInPlay.push(cards[cardId].rank);
		 		console.log(cards[cardId].cardImage);
		 		console.log(cards[cardId].suit);

	}
}
flipCard(0);
flipCard(2);
flipCard("checkForMatch")
