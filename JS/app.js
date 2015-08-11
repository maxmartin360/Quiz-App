
function Questions (number, answer, image, answer1, answer2, answer3, answer4) {
	this.number = number;
	this.answer = answer;
	this.image = image;
	this.answer1 = answer1;
	this.answer2 = answer2;
	this.answer3 = answer3;
	this.answer4 = answer4;
};

var question1 = new Questions (0, 2, 'http://i.imgur.com/Vp3AQNy.jpg', "Angry Pizza Man", "Mario", "Wario", "Luigi");
var question2 = new Questions (1, 1, 'http://i.imgur.com/8D2Knvp.jpg', "Link", "Zelda", "shiek", "Cheapest Smash Bros Character Ever");
var question3 = new Questions (2 ,4, 'http://i.imgur.com/4lL9RgF.jpg', "Halo", "Cortana", "Samus", "Master Chief");
var question4 = new Questions (3, 3, 'http://i.imgur.com/7BrnQ52.jpg', "Leon", "Wesker", "CHRIIIIISSSS!", "Jake");
var question5 = new Questions (4, 2, 'http://i.imgur.com/UG2ZtJr.jpg', "Spyro", "Crash Bandicoot", "Cortex", "Wizzy the Wombat");

var questionList = [
	question1, 
	question2,
	question3,
	question4,
	question5,
]

var numberCorrect = 0;
var currentQuestionNumber = 0;
var currentQuestion;

function nextQuestion() {
	if (currentQuestionNumber < 5) {
		currentQuestion = questionList[currentQuestionNumber];
		$('#image').attr('src', currentQuestion.image);
		$('.answer1').text(currentQuestion.answer1);
		$('.answer2').text(currentQuestion.answer2);
		$('.answer3').text(currentQuestion.answer3);
		$('.answer4').text(currentQuestion.answer4); 
	} else {
		endGame();
	};
};

function checkAnswer() {
	$('input[name=option]:checked').attr('value');
		if('value' === currentQuestion.answer) {
			console.log('correct!');
			numberCorrect++;
		};
	};

function endGame() {
	$('.questions').hide();
	$('results').show();
	$('.feedback').show();
	if (numberCorrect === 1){
		$('.feedback').text("looks like you only got one right. Bet you have a girlfriend or something...");
	} else if (numberCorrect === 2){
		$('.feedback').text("Well two right is better than none I guess...");
	} else if (numberCorrect === 3){
		$('.feedback').text("You scored 3 out of 5. Casual...");
	} else if (numberCorrect === 4){
		$('.feedback').text("4 out of 5 is still the first place loser...");
	} else if (numberCorrect === 5){
		$('.feedback').text("5 out of 5...   Nerd.");
	} else if (numberCorrect === 0){
		$('.feedback').text("Man... you didn't even try...");
	}

};


// hit start button to initiate quiz

//$('#start-button').click(function(){
	//console.log('im being clicked');
	//$('.instructions').hide();
//}

$(document).ready(function(){

	nextQuestion();

	$("#next-button").on("click", function(){
		$('[name="option"]').removeAttr('checked');
		currentQuestionNumber++;
		nextQuestion();

	});

	
});