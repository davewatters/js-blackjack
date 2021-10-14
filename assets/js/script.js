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

// Initialise default vars
let numDecks = 1;
let autoLastBet = true;
let defaultStack = 600;
let betAmt = 0;
let gameOver = false;

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
 * Dealer's first & third cards affect 
 * card & score display.
 */
function dealCard(pObj) {
  let newCard = deck.pop();
  pObj.hand.push(newCard);
  pObj.score += newCard.weight;

  // create a div with class "card"
  let cardDiv = document.createElement("div");
  cardDiv.innerHTML = '<p class="card-rank">'+newCard.rank+'</p>' +'<p class="suit-big">'+newCard.suit+'</p>';
  let cardClass = "card";
  if ((newCard.suit === '&hearts;') || (newCard.suit === '&diams;')) {
    cardClass += " red-suit";
  }
  cardDiv.setAttribute("class", cardClass);

  // Display updated score & card to relevent screen section
  // pObj.id of 0 will always be the dealer
  if (pObj.id) {
    // Player
    document.getElementById('player-score').innerHTML = pObj.score;
    document.getElementById('player-section').appendChild(cardDiv);

    // check if bust 
    if (pObj.score > 21) {
      document.getElementById('status-section').innerHTML = "You've bust.. House wins!";
      gameOver = true;
    }

  } else {
    // Dealer
    document.getElementById('dealer-section').appendChild(cardDiv);
    
    let numCards = document.getElementById('dealer-section').childElementCount;
    // Dealer's second card is always face down so we show only back
    // of card by targetting with a different class.
    // Dealer's points score is not made visible
    if (numCards === 2) {
      cardClass = "card-back";
    }
    
    cardDiv.setAttribute("class", cardClass);
    
    if (numCards === 1 || numCards > 2) {
      if (numCards === 3) {
        turnDealerCard(pObj.hand);
      }
      
      document.getElementById('dealer-score').innerHTML = pObj.score;
    }

    // check if bust 
    if (pObj.score > 21) {
      document.getElementById('status-section').innerHTML = "Dealer busts.. You win!";
      player.stack += (betAmt * 2);
      gameOver = true;
    }
    
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
  let el = document.getElementById('dealer-section').children[1];
  el.setAttribute("class", cardClass);
}


/*
* might not use this
*/
function sleep(ms) {
  let start = new Date().getTime();
  let now = start;
  while ( true ) {
    console.log('.');
    now = new Date().getTime();
    let elapsed = now - start;
    if (elapsed > ms) {
      break;
    } 
  }
}


//-----
//  Run the game
//
function resetGame() {
  gameOver = false;
  player.stack = 600;
  for (i=0; i<numDecks; i++) {
    createDeck();
  }
  shuffleDeck(deck);
  // Would like to add a sleep() function here to show messages
  // Place bet code here
  betAmt = 10;
  document.getElementById('btn-play').style.display = 'block';
}

function gameLoop() {
  if (autoLastBet) {
    betAmt *= 2;
    player.stack -= betAmt;
  }
  document.getElementById('stack').innerHTML = player.stack;
  document.getElementById('status-section').innerHTML = "Bet Amount: €" +betAmt;

  document.getElementById('btn-play').style.display = 'none';
  document.getElementById('btn-deal').style.display = 'block';
}

/*
* Event listeners
*/
document.getElementById("btn-play").addEventListener("click", function() {
  resetGame();
  gameLoop();
});

document.getElementById("btn-deal").addEventListener("click", function() {
  dealHands();
  document.getElementById('btn-deal').style.display = 'none';
  document.getElementById('btn-hit').style.display = 'block';
  document.getElementById('btn-stay').style.display = 'block';
});

document.getElementById("btn-hit").addEventListener("click", function() {
  dealCard(player);
});

document.getElementById("btn-stay").addEventListener("click", function() {
  while (!gameOver) {
    dealCard(dealer);
  }
  document.getElementById('btn-deal').style.display = 'block';
  document.getElementById('btn-hit').style.display = 'none';
  document.getElementById('btn-stay').style.display = 'none';
  gameLoop();
});

