$(document).ready(function() {
	alert('Time to multiply!');
});


var timerElement = $('timer');
var count = 31;
var counter = setInterval(timer, 1000); 
var score = 0;


function getScore() {
    $( "#score" ).text("Current score:  " + score);
};
getScore();


function getName() {
    var username = prompt('What is your name?');
    $( "#name" ).text( "Welcome, " + username + "!");
};
getName();

// var gotName = false;
// while(gotName == false){
//   var userName = prompt("Yo passenger! What's your name?");

//   if ( confirm("Are you sure your name is " + userName + "?")){
//   alert("’Sup " + userName + "!");
//   gotName = true;
//   }
// } 


function timer(){
 	count = count-1;
 	if (count <= 0)
 	{
    clearInterval(counter);
    return;
 	}
 	$("#timer").text(count);
};
timer();

var questions = {};
    questions.one = 'What is 8 x 8?';
    questions.two ='What is 9 x 7?';
    questions.three = 'What is 10 x 10?';
    questions.four = 'What is 2 x 8?';
    questions.five = 'What is 4 x 7?';

var answers = {};
    answers.one = '64';
    answers.two = '63';
    answers.three = '100';
    answers.four = '16';
    answers.five = '28';
 
for (var prop in questions) { //prop can be any name
    //console.log(prop);
    var val = document.getElementById('question');
    val.textContent = questions[prop];
    console.log(val);
}

for (var prop in answers) { //prop can be any name
    //console.log(prop);
    var val = document.getElementById('one');
    val.textContent = answers[prop];
    console.log(val);
}

var buttonNumberTwo = document.getElementById('two');
function buttonTwo(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
buttonNumberTwo.textContent = buttonTwo(1, 90);


var buttonNumberTwo = document.getElementById('three');
function buttonTwo(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
buttonNumberTwo.textContent = buttonTwo(1, 90);


var buttonNumberTwo = document.getElementById('four');
function buttonTwo(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
buttonNumberTwo.textContent = buttonTwo(1, 90);

// // var randomQuestion = questions[Math.floor(questions.length * Math.random())];

// function questions(){
// 	var questionElement = ($'#question');
// 	($'#question').html("What is 8x8?");
// }
	
// $('#question').text(questionsArray)
// $('#one').text(choicesArray[0]);
// $('#two').text(choicesArray[0]);
// $('#three').text(choicesArray[0]);
// $('#four').text(choicesArray[0]);
// // }

// $.each([questionsArray], function(i, question ) {
//   $('#question').text(question[3]);
// });

// questions();

// Button hover - color change - works but not when i save the JS

// // function buttonHover(){
// 	var thirdButton = $('#one');
// 	thirdButton.on('click', function(){
// 	console.log('this button is working');
// 	thirdButton.css('background-color', '#de89f0');
// });
// // buttonHover();

$('one').click( function(){
  var buttonCount = $('#score');
  buttonCount += 1;
  console.log(score);
});

// 	var button = $('button');
// 	button.hover(function(){
//     button.css("background-color", "pink");
//     });

//     , function(){
//     $(this).css("background-color", "pink");
// });
// }


// var player = {
//   score: 0,

//   scorePoint: function(score){
//   	currentScore = $('#score');
//   	this.score = this.score + 1;
//     this.scorePoint.push(score)
//     currentScore.text = this.score;
  
// 	$('#one').click(function(){
// 	alert("The Button was clicked.");
//     	if(click === '#one'){
//      	var currentScore = $('#score');
//      	this.score = this.score + 1;
//      	currentScore.text = this.score;
//      	console.log(this.score);
//     };
// }
	// winGame: function (){
	// 	if(this.score === 5)
	// 	alert('You Won!');
	// }
// };

$('#one').click(function(){
	alert("Correct.");
});
$('#two').click(function(){
	alert("Wrong.");
});
$('#three').click(function(){
	alert("Wrong.");
});
$('#four').click(function(){
	alert("Wrong.");
});


