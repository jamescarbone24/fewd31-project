// PeusdoCode

// index page
// - nav bar hover

// brother of the month page
// - nav bar hover
// - click on picture, come up with discription

// event page
// - nav bar hover
// - click on picture, come up with discription

// causes page
// - nav bar hover
// - click on picture, come up with discription

// FAQS page
// - nav bar hover
// - click on each question, get the answer and closed all other answers
// - form fill for other questions, get value

$(document).ready(function() {

	// brother of the month
	$('.janPic').mouseover(function() {
		$('.janbomText').slideDown();

		$('.febbomText').slideUp();

	});

	$('.febPic').mouseover(function() {
		$('.febbomText').slideDown();

		$('.janbomText').slideUp();

	});

	// FAQS

	$('.answer1').hide();

	$('.answer2').hide();

	$('.answer3').hide();

	$('.answer4').hide();

	$('.answer5').hide();

	$('.question1').click(showAnswer1)

	function showAnswer1() {
		$('.answer1').show();

		$('.answer2').hide();

		$('.answer3').hide();

		$('.answer4').hide();

		$('.answer5').hide();
	}
	$('.question2').click(showAnswer2)

	function showAnswer2() {
		$('.answer2').show();
		
		$('.answer1').hide();

		$('.answer3').hide();

		$('.answer4').hide();

		$('.answer5').hide();
	}

	$('.question3').click(showAnswer3) 
		
	function showAnswer3() {
		$('.answer3').show();

		$('.answer2').hide();

		$('.answer1').hide();

		$('.answer4').hide();

		$('.answer5').hide();
	}

	$('.question4').click(showAnswer4) 
		
	function showAnswer4() {
		$('.answer3').hide();

		$('.answer2').hide();

		$('.answer1').hide();

		$('.answer4').show();

		$('.answer5').hide();
	}

	$('.question5').click(showAnswer5) 
		
	function showAnswer5() {
		$('.answer3').hide();

		$('.answer2').hide();

		$('.answer1').hide();

		$('.answer4').hide();

		$('.answer5').show();
	}

	// FAQS form
	$('form').submit(function() {

	});

});