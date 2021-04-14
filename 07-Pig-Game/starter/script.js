'use strict';
/*
    GAME RULES:

    - The game has 2 players, playing in rounds
    - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his
    ROUND score
    - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
    - The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score.
    After that, it's the next player's turn.
    - The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// document.querySelector('#current--' + activePlayer).textContent = dice;
// var x = document.querySelector('#score--0').textContent;
// console.log(x);

document.querySelector('.dice').style.display = 'none';

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';

document.querySelector('.btn--roll').addEventListener('click', function () {
  // btn callback funtion
  // 1. Random number
  dice = Math.floor(Math.random() * 6) + 1;

  //2. Display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';

  //3. Update the round score IF the rolled number was NOT a 1
  if (dice !== 1) {
    //Add score
    roundScore += dice;
    document.querySelector(
      '#current--' + activePlayer
    ).textContent = roundScore;
  } else {
    //Next player
    nextPlayer();
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  // Add CURRENT score to GLOBAL score
  scores[activePlayer] += roundScore;

  // Update the UI
  document.querySelector('#score--' + activePlayer).textContent =
    scores[activePlayer];

  // Check if player win the game
  if (scores[activePlayer] >= 20) {
    document.querySelector('#name--' + activePlayer).textContent = 'Winner';
    document.querySelector('.dice').style.display = 'none';
  } else {
    nextPlayer();
  }
  //Next player
});

function nextPlayer() {
  //Next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';

  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');

  // document.querySelector('.player--0').classList.remove('player--active');
  // document.querySelector('.player--1').classList.add('player--active');

  document.querySelector('.dice').style.display = 'none';
}
