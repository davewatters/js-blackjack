// Initialise card & deck objects 
const RANK = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
const SUIT = ['&spades;', '&hearts;', '&diams;', '&clubs;'];
const card = {
  rank: '',
  suit: '',
  weight: 0,
};
const deck = [];
const hand = [];
const player = {
  id: 1,
  stack: 600,
  hand: [],
  score: 0,
};
const dealer = {
  id: 0,
  hand: [],
  score: 0,
}

// Initialise default vars
let numDecks = 1;
let autoLastBet = true;
let defaultStack = 600;
let betAmt = 0;


//
// create deck
//
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

//
// shuffle
//
function shuffleDeck(deck) {
  let j, tmp;
  let len = deck.length;
  document.getElementById('status-section').innerHTML = "Shuffling deck...";
  for (let i = 0; i < len; i++) {
    // store the card at position i to tmp
    tmp = deck[i]; 
    // generate a random card position   
    j =  Math.floor(Math.random() * len);
    // take card from random position and move to position i
    deck[i] = deck[j];
    // ..then put card from tmp into pos j
    deck[j] = tmp;
  }
}

/**
 * Deals the opening two cards to each player.
 * Calls dealCard() for player & dealer
 */
 function dealHands() {
  for (let i=0; i<2; i++) {
    dealCard(player);
    dealCard(dealer);
  }
}

/**
 * Deals a single card to hand of player.
 * pObj will be the dealer or player object.
 */
function dealCard(pObj) {
  let newCard = deck.pop();
  pObj.hand.push(newCard);
  pObj.score += newCard.weight;

  // create a div with class "card"
  let cardDiv = document.createElement("div");
  cardDiv.innerHTML = newCard.rank + newCard.suit;
  let att = document.createAttribute("class");
  att.value = "card";
  if ((newCard.suit === '&hearts;') || (newCard.suit === '&diams;')) {
    att.value += " red-suit";
  }
  // Display updated score & add the card to the screen section
  // pObj.id of 0 will always be the dealer
  if (pObj.id) {
    // Player
    document.getElementById('player-score').innerHTML = pObj.score;

    let el = document.getElementById('player-section').appendChild(cardDiv);
    el.setAttributeNode(att);
    // if ((newCard.suit === '&hearts;') || (newCard.suit === '&diams;')) {
    //   el.className += " red-suit";
    // }
  } else {
    // Dealer
    document.getElementById('dealer-score').innerHTML = pObj.score;

    let el = document.getElementById('dealer-section').appendChild(cardDiv);
    el.setAttributeNode(att);
  }
}


//-----
//  Run the game
//
createDeck();

shuffleDeck(deck);

dealHands();

