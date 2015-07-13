function Questions (number, answer, image, answer1, answer2, answer3, answer4) {
	this.number = number;
	this.answer = answer;
	this.image = img;
	this.answer1 = answer1;
	this.answer2 = answer2;
	this.answer3 = answer3;
	this.answer4 = answer4;
};

var question1 = new Questions (1, 2, '#image1', "Angry Pizza Man", "mario", "Wario", "Luigi");
var question2 = new Questions (2, 1, '#image2', "Link", "Zelda", "shiek", "Cheapest Smash Bros Character Ever");
var question3 = new Questions (3 ,4, '#image3', "Halo", "Cortana", "Samus", "Master Chief");
var question4 = new Questions (4, 3, '#image4', "Leon", "Wesker", "CHRIIIIISSSS!", "Jake");
var question5 = new Questions (5, 2, '#image5', "Spyro", "Crash Bandicoot", "Cortex", "Wizzy the Wombat");

var questionList = [
	question1, 
	question2,
	question3,
	question4,
	question5,
]

var answerList = [2, 1, 4, 3, 2]

function quizStart() {
	$('#start-button').click(function() {
		$('#instructions').hide();
		$('.question-container').show();
	});
}  