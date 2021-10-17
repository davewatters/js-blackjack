"use strict";

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
};

// Initialise default settings vars
let numDecks = 1;
let autoLastBet = true;
let defaultStack = 600;

// Default new in-game vars
let betAmt = 10;
let gameOver = false;
let handOver = false;

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

/**
 * Updates the text message in the game status div
 */
 function statusMsg(msg) {
  document.getElementById('status').textContent = msg;
}

/*
* Need a way of delaying action while I display  message to the player 
* might not use this
*/
function sleep(ms) {
  let start = new Date().getTime();
  let now = start;
  while ( true ) {
    now = new Date().getTime();
    let elapsed = now - start;
    if (elapsed > ms) {
      break;
    } 
  }
}

/**
 * Randomly sort a passed-in array using 
 * a well know algorithm
 */
function shuffleDeck(deck) {
  let j, tmp;
  let len = deck.length;
  statusMsg("Shuffling deck...");
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
 * Renders the card on screen in its respective div
 * and updates the displayed points score.
 * Accepts the player object as a parameter. 
 */
function displayCard(p) {
  let numCards = p.hand.length;
  let card = p.hand[numCards-1];
  let weight = card.weight;

  let cDiv = document.createElement("div");
  cDiv.innerHTML = '<p class="card-rank">'+card.rank+'</p>' + '<p class="suit-big">'+card.suit+'</p>';
  let cClass = "card";
  if ((card.suit === '&hearts;') || (card.suit === '&diams;')) {
    cClass += " red-suit";
  }
  cDiv.setAttribute("class", cClass);
  document.getElementById('player'+p.id).appendChild(cDiv);

  if (!p.id) {
    // 0 is Dealer

    // Dealer's second card is always face down so we show only
    // back of card by targetting with a different class.
    // Note that the dealer's points score is not made visible
    if (numCards === 2) {
      cClass = "card-back";
      cDiv.setAttribute("class", cClass);
    }

    if (numCards === 1 || numCards > 2) {
      if (numCards === 3) {
        turnDealerCard(p.hand);
      }
      document.getElementById('score'+p.id).textContent = p.score;
    }

  } else {
    // 1 is Player

    document.getElementById('score'+p.id).textContent = p.score;
  }
}

/**
 * Deals a single card to hand of player.
 * p will be the dealer or player object.
 * Dealer's first & third cards affect 
 * card & score display.
 */
function dealCard(p) {
  let newCard = deck.pop(); // take a card from the deck
  p.hand.push(newCard);
  p.score += newCard.weight;
  let cardCount = p.hand.length;
  displayCard(p);

  // Check for win, lose, or draw
  if (p.id) {
    // Player

    // check for blackjack (aka 'a natural') 
    if (cardCount === 2 && p.score === 21) {
      statusMsg("You hit blackjack!");
      player.stack += (betAmt * 1.5);
      handOver = true;
    }

    // check if bust 
    if (p.score > 21) {
      statusMsg("You've bust..  House wins!");
      handOver = true;
    }
  } else {
    // Dealer

    // check if bust 
    if (p.score > 21) {
      statusMsg("Dealer busts.. You win!");
      player.stack += (betAmt * 2);
      handOver = true;
    }    
  }
  if (handOver) {
    document.getElementById('stack').textContent = player.stack;
  }
}

/**
 * Turns the dealer's second card face up
 * when dealer is dealt third card
 */
function turnDealerCard(hand) {
  let cardClass = "card";
  if ((hand[1].suit === '&hearts;') || (hand[1].suit === '&diams;')) {
    cardClass += " red-suit";
  }
  let el = document.getElementById('player0').children[1];
  el.setAttribute("class", cardClass);
}

//
//
//
function resetGame() {
  gameOver = false;
  player.stack = 600;
  betAmt = 10;
  for (let i=0; i<numDecks; i++) {
    createDeck();
  }
  document.getElementById('btn-play').style.display = 'block';
}

//
//  This is essentially the main game loop
//
function newHand() {
  handOver = false;
  dealer.score = 0;
  player.score = 0;
  document.getElementById('score0').textContent = dealer.score;
  document.getElementById('score1').textContent = player.score;
  //clear the players' hands
  while (dealer.hand.length) {
    dealer.hand.pop();
  }
  while (player.hand.length) {
    player.hand.pop();
  }
  //clear the card divs
  let p0 = document.getElementById("player0");
  while (p0.childElementCount) {
    p0.removeChild(p0.children[0]);
  }
  let p1 = document.getElementById("player1");
  while (p1.childElementCount) {
    p1.removeChild(p1.children[0]);
  }

  // temp - until event listeners for chip btns are written
  placeBet(0);
  document.getElementById('btn-deal').style.display = 'block';
}

//
// called by: newHand
//
function placeBet(chipVal) {
  statusMsg("Place your bet...");
  betAmt += chipVal;
  player.stack -= betAmt;
  document.getElementById('bet').textContent = "You bet: €" +betAmt;
  document.getElementById('stack').textContent = player.stack;
}

/*
* Event listeners
*/
document.getElementById("btn-play").addEventListener("click", function() {
  this.style.display = 'none';
  shuffleDeck(deck);
  newHand();
});

document.getElementById("btn-deal").addEventListener("click", function() {
  this.style.display = 'none';
  statusMsg('');
  dealHands();
  if (handOver) {
    document.getElementById('btn-again').style.display = 'block';
  } else {
    document.getElementById('btn-hit').style.display = 'block';
    document.getElementById('btn-stay').style.display = 'block';  
  document.getElementById('btn-stay').style.display = 'block';
    document.getElementById('btn-stay').style.display = 'block';  
  }
});

document.getElementById("btn-hit").addEventListener("click", function() {
  dealCard(player);
  if (handOver) { 
    this.style.display = 'none';
    document.getElementById('btn-stay').style.display = 'none';  
    document.getElementById('btn-again').style.display = 'block';  
  }
});

document.getElementById("btn-stay").addEventListener("click", function() {
  this.style.display = 'none';
  document.getElementById('btn-hit').style.display = 'none';
  while (!handOver) {
    dealCard(dealer);
  }
  document.getElementById('btn-again').style.display = 'block';  
});

// 'Again' btn and event listener required to allow the last play to
// remain visible on screen until player is ready for next hand  
document.getElementById("btn-again").addEventListener("click", function() {
  this.style.display = 'none';
  newHand();
});


/* ********************************************************** */
//
resetGame();
//
/* ********************************************************** */
