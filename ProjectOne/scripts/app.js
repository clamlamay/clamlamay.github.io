console.log('loaded window')
document.getElementById('FF7-theme').play();

var characters = [
		'Cloud', 
		'Cloud', 
		'Tifa', 
		'Tifa', 
		'Aeris', 
		'Aeris',
		'Barret',
		'Barret',
		'Vincent',
		'Vincent',
		'RedXIII',
		'RedXIII',
		'CaitSith',
		'CaitSith',
		'Cid',
		'Cid',
		'Yuffie',
		'Yuffie',
]; 

var cardsInPlay = [];
var board = document.getElementById('game-board');
var clicks = 0;
	$("#clicks").text("Clicks: " + clicks);
var score = 0;
	$("#score").text("Score: " + score);
var count = 46;
var counter = setInterval(timer,1000);

Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}

var cards = characters.shuffle();


function timer(){
	
	count = count-1;
	if (count <= 0)
	{
	clearInterval(counter);
	alert('Game Over');
	// location.reload(); 
	}
	$("#timer").text("Timer: " + count);
	};

timer();


function createBoard() {
  
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card',
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    board.appendChild(cardElement);
  }
}


function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'Cloud') {
    this.innerHTML = "<img src='../ProjectOne/images/Cloud.png'>"; }	
  if (this.getAttribute('data-card') === 'Tifa') {
    this.innerHTML = "<img src='../ProjectOne/images/Tifa.png'>"; }
  if (this.getAttribute('data-card') === 'Aeris') {
    this.innerHTML = "<img src='../ProjectOne/images/Aeris.png'>"; }
  if (this.getAttribute('data-card') === 'Barret') {
    this.innerHTML = "<img src='../ProjectOne/images/Barret.png'>"; }
  if (this.getAttribute('data-card') === 'Vincent') {
    this.innerHTML = "<img src='../ProjectOne/images/Vincent.png'>"; }
  if (this.getAttribute('data-card') === 'Yuffie') {
    this.innerHTML = "<img src='../ProjectOne/images/Yuffie.png'>"; }
  if (this.getAttribute('data-card') === 'CaitSith') {
    this.innerHTML = "<img src='../ProjectOne/images/CaitSith.png'>"; }
  if (this.getAttribute('data-card') === 'Cid') {
    this.innerHTML = "<img src='../ProjectOne/images/Cid.png'>"; }
  if (this.getAttribute('data-card') === 'RedXIII') {
    this.innerHTML = "<img src='../ProjectOne/images/RedXIII.png'>"; }  
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    score = score + 5;
    $("#score").text("Score: " + score);
    alert("You found a match!");
    document.getElementById('FF7-victory').play();
  } else {
    // alert("Sorry, try again.");
  }
  setTimeout(function(){
  	coverCard()
  },2000)
  clearTimeout(isMatch);
}

createBoard();

function coverCard(){
 var cards = $('.card')
 for (var i=0; i< cards.length; i++) {
   	$('.card').html("<img src='../ProjectOne/images/logo.png'>")
  }
}

function onClick() {
$('.card').on("click", function(){
	clicks = clicks + 1;
	$("#clicks").text("Clicks: " + clicks);
})
}
onClick();	



 
