// Below is my array of quiz questions called 'quizArray'

var quizArray = {
	questions: [
		{
			question: 'What wild animal attacked Ted on his 31st birthday?',
			answers: ['pitbull', 'horse', 'bear', 'goat'],
			correctAnswer: 'goat'
		},		{
			question: 'What\'s the costume that Ted always wears in every halloween?',
			answers: ['A vampire', 'A pumpkin', 'A hanging chad', 'A pirate'],
			correctAnswer: 'A hanging chad'
		},
		{
			question: 'What was the character\'s name that Neil Patrick Harris\' husband played on the show?',
			answers: ['Blauman', 'Scooter', 'Punchy', 'Mickey'],
			correctAnswer: 'Scooter'
		},
		{
			question: 'Where\'s Marshall orginially from?',
			answers: ['Minnesota', 'Ohio', 'New York', 'Wisconsin'],
			correctAnswer: 'Minnesota'
		},
		{
			question: 'Which acronym represents what Barney does for a living?',
			answers: ['PASS', 'PLEASE', 'AWESOME', 'LEGENDARY'],
			correctAnswer: 'PLEASE'
		},
		{
			question: 'What instrument does Ted\'s wife play in her band?',
			answers: ['flute', 'drums', 'bass guitar', 'piano'],
			correctAnswer: 'bass guitar'
		},
		{
			question: 'What is tha name of Barney\'s gay brother?',
			answers: ['Ryan', 'Brad', 'Stewart', 'James'],
			correctAnswer: 'James'
		},
		{
			question: 'What is Robin\'s favorite hockey team?',
			answers: ['New York Rangers', 'Vancouver Canucks', 'Montreal Canadien', 'Boston Bruins'],
			correctAnswer: 'Vancouver Canucks'
		},
		{
			question: 'What does Lily\'s doppleganger do for a living?',
			answers: ['wrestler', 'teacher', 'stripper', 'paralegal'],
			correctAnswer: 'stripper'
		},
		{
			question: 'What was Robin famous for before coming to New York?',
			answers: ['pornstar', 'weather girl', 'news anchor', 'pop star'],
			correctAnswer: 'pop star'
		},
		{
			question: 'What tattoo did Ted get on his body before getting it removed?',
			answers: ['tiger', 'butterfly', 'dragon', 'koi fish'],
			correctAnswer: 'butterfly'
		},
		{
			question: 'What is Ted\'s middle name?',
			answers: ['Evelyn', 'Vivian', 'Trudy', 'Karen'],
			correctAnswer: 'Evelyn'
		},
		{
			question: 'Which University did Marshall studied law?',
			answers: ['New York University', 'Columbia University', 'Fordham University', 'Pace University'],
			correctAnswer: 'Columbia University'
		},
		{
			question: 'Who did Ted blame for not returning his red cowboy boots?',
			answers: ['Simon', 'Carl','Stewart','Mitch'],
			correctAnswer: 'Stewart'
		},
		{
			question: 'What part of Marshall\'s body did Lily find resistable?',
			answers: ['Ankles', 'Calves', 'Knees', 'Thighs'],
			correctAnswer: 'Calves'
		},
		{
			question: 'Where was Marshall when Lily went into labor?',
			answers: ['At a strip club', 'At a bar', 'At a casino', 'At the office'],
			correctAnswer: 'At a casino'
		},
		{
			question: 'What\'s the only song we hear from Barney\'s get psyched mix?',
			answers: ['Danger Zone by Kenny Loggins', 'Thunderstruck by AC/DC', 'You Give Love a Bad Name by Bon Jovi', 'Paradise City by Guns N Roses'],
			correctAnswer: 'You Give Love a Bad Name by Bon Jovi'
		},
		{
			question: 'What was the name of the Canadian bar that Robin goes to?',
			answers: ['The Zamboni', 'The Houser Hut', 'Puzzles', 'McLarens Pub'],
			correctAnswer: 'The Houser Hut'
		},
		{
			question: 'In season 7, who ruined the wedding of Ted\'s best friend from high school, Punchy?',
			answers: ['Barney', 'Robin', 'Lily', 'Marshall'],
			correctAnswer: 'Marshall'
		},
		{
			question: 'When Lily broke up with Marshall, what city does she go to pursue her art career?',
			answers: ['Paris', 'Seattle', 'Rome', 'San Francisco'],
			correctAnswer: 'San Francisco'
		},
	],
	currentQuestionIndex: 0,
	correctCount: 0,
};


// Below are our functions for rendering to the DOM.
function renderQuestionArray() {
	console.log("renderQuestionArray() ran");
	var currentQuestionObj = quizArray.questions[quizArray.currentQuestionIndex];
	renderQuestionPrompt();
	renderQuestionChoices(currentQuestionObj.answers);
}


function renderQuestionPrompt() {
console.log("renderQuestionPrompt() ran");
	var passHTML = '<h3>(' + (quizArray.currentQuestionIndex + 1) + '/' + quizArray.questions.length + ')</h3>'
	var questionText = quizArray.questions[quizArray.currentQuestionIndex].question;
	$('.js-quiz-question').html(passHTML + questionText);
}


function renderQuestionChoices(answers) {
	console.log("renderQuestionChoices() ran");
	$('#quiz-form label').each(function (index, label) {
    	$(this).find('input').attr('value', answers[index]);
    	$(this).find('input').prop('checked', false);
    	$(this).find('span').text(answers[index]);
  });
}


function renderQuestionFeedback(boolean) {
	console.log("renderQuestionFeedback() ran");
	var feedback = $('#js-quiz-feedback');
	if (boolean === true) {
		feedback.attr("style", "color: green;").html('<p> Correct! Barney says \"Nice!\" (' + quizArray.correctCount + ' / ' + quizArray.questions.length + ') </p>');
	} 
	else if (boolean === false) {
		feedback.attr("style", "color: red;").html('<p> Incorrect! Ted says \"Sorry Bro!\" (' + quizArray.correctCount + ' / ' + quizArray.questions.length + ') </p>');
	} 
	else if (boolean === 'unanswered'){
		feedback.attr("style", "color: blue;").html('<p> Marshall says \" C\'mon Bro! Don\'t bogart all the fungeons.\" Please select an answer. (' + quizArray.correctCount + ' / ' + quizArray.questions.length + ') </p>');
  	}
}


function renderQuestionResult() {
	console.log("renderQuestionResult() ran");
	$('#js-quiz-section').addClass('hidden');
	$('#js-quiz-feedback').addClass('hidden');
	$('#js-quiz-result').removeClass('hidden');
	var quizRestart = $('#js-quiz-result');
	quizRestart.html('<h2>' + 'You got ' + quizArray.correctCount + ' out of ' + quizArray.questions.length + ' right!' + '</h2>');
	handleQuizRestart();
}


// Below is our function that defines our logical statements.
function checkAnswer(userChoice) {
	console.log("checkAnswer() ran");
	var correctChoice = quizArray.questions[quizArray.currentQuestionIndex].correctAnswer;
	if(userChoice == correctChoice) {
		quizArray.correctCount++;
		renderQuestionFeedback(true);
		quizArray.currentQuestionIndex++;
		} 
		else if(userChoice === undefined) {
		renderQuestionFeedback('unanswered');
		} 
		else {
		renderQuestionFeedback(false);
		quizArray.currentQuestionIndex++;
		}
		if (quizArray.currentQuestionIndex == quizArray.questions.length) {
		renderQuestionResult();
		} 
		else {
		renderQuestionArray();
  	}
}


// Below are our functions for click handles and initializing/resetting our quiz.

function handleBeginQuizClicked() {
	console.log("handleBeginQuizClicked() ran");
	$('#js-begin-button').click(function (e) {
    	$('#js-quiz-section').removeClass('hidden');
		$('#js-quiz-restart-button').removeClass('hidden');
    	$('#js-quiz-feedback').removeClass('hidden');
    	$('#js-quiz-start').addClass('hidden');
  })
}


function handleQuizRestart() {
	console.log("handleQuizRestart() ran");
  	$('#js-quiz-restart-button').on('click', function (e) {
    $('#js-quiz-section').removeClass('hidden');
    $('#js-quiz-feedback').removeClass('hidden').text('');
    $('#js-quiz-result').addClass('hidden');
    handleQuizRestart();
    resetQuiz();
    renderQuestionArray();
  });
}


function resetQuiz() {
	console.log("resetQuiz() ran");
	quizArray.correctCount = 0
	quizArray.currentQuestionIndex = 0;
}


function handleQuizSubmitAnswerClicked() {
	console.log("handleQuizSubmitAnswerClicked() ran");
	$('#js-submit-button').click(function(event) {
		event.preventDefault();
		var userChoice = $('input[name="quizChoice"]:checked').val();
		checkAnswer(userChoice);
	});
	$('#js-quiz-feedback').text('');
}


$(function handleTriviaQuiz() {
	console.log("handleTriviaQuiz() ran");
	handleBeginQuizClicked();
	handleQuizRestart();
	renderQuestionArray();
	handleQuizSubmitAnswerClicked();
	renderQuestionFeedback();
});
