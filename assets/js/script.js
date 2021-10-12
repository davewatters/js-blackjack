// Initialise card & deck objects 
const RANK = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
const SUIT = ['S', 'H', 'D', 'C'];
const card = {
  rank: '',
  suit: '',
  weight: 0,
};
const deck = [];
const hand = {};
const player = {
  stack: 600,
  hand: [],
  score: 0,
};

// Initialise default vars
let numDecks = 1;
let autoLastBet = true;
let defaultStack = 600;
let betAmt = 0;


//
//  Run the game
//
createDeck();
console.log("FINISHED createDeck...");
console.log(deck);
console.log(deck[0]);
console.log(deck[37]);

shuffleDeck(deck)
console.log("FINISHED shuffle...");
console.log(deck);
console.log(deck[0]);
console.log(deck[37]);


//
//


// create deck
function createDeck() {
  let cardObj;
  for (let i = 0; i < SUIT.length; i++) {
    for (let j = 0; j < RANK.length; j++) {
      let weight = parseInt(RANK[j]);
      if (RANK[j] === 'A')
        weight = 11;
      if ('JQK'.includes(RANK[j]))
        weight = 10;
      cardObj = Object.create(card);
      cardObj.rank = RANK[j];
      cardObj.suit = SUIT[i];
      cardObj.weight = weight;
      deck.push(cardObj);
    }
  }
}


// shuffle
function shuffleDeck(deck) {
  let j, len, tmp;
  len = deck.length;
  for (let i = 0; i < len; i++) {
    // store the card at position i to one side
    tmp = deck[i]; 
    // generate a random card position   
    j =  Math.floor(Math.random() * len);
    // take card from random position and move to position i
    deck[i] = deck[j];
    // ..then put card from pos i into pos j
    deck[j] = tmp;
  }
}

// deal hands

// hit another card
