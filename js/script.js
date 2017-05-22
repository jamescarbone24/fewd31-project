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

		$('.marbomText').slideUp();

	});

	$('.febPic').mouseover(function() {
		$('.febbomText').slideDown();

		$('.janbomText').slideUp();

		$('.marbomText').slideUp();

	});

	$('.marPic').mouseover(function() {
		$('.marbomText').slideDown();

		$('.janbomText').slideUp();

		$('.febbomText').slideUp();

	});

	$("a[href='#top']").click(function() {
  		$("html, body").animate({ scrollTop: 0 }, "slow");
  		return false;
	});
	// FAQS

	$('.answer1').hide();

	$('.answer2').hide();

	$('.answer3').hide();

	$('.answer4').hide();

	$('.answer5').hide();

	$('.answer6').hide();

	$('.question1').click(showAnswer1)

	function showAnswer1() {
		$('.answer1').slideDown();

		$('.answer2').slideUp();

		$('.answer3').slideUp();

		$('.answer4').slideUp();

		$('.answer5').slideUp();

		$('.answer6').slideUp();
	}
	$('.question2').click(showAnswer2)

	function showAnswer2() {
		$('.answer2').slideDown();
		
		$('.answer1').slideUp();

		$('.answer3').slideUp();

		$('.answer4').slideUp();

		$('.answer5').slideUp();

		$('.answer6').slideUp();
	}

	$('.question3').click(showAnswer3) 
		
	function showAnswer3() {
		$('.answer3').slideDown();

		$('.answer2').slideUp();

		$('.answer1').slideUp();

		$('.answer4').slideUp();

		$('.answer5').slideUp();

		$('.answer6').slideUp();
	}

	$('.question4').click(showAnswer4) 
		
	function showAnswer4() {
		$('.answer3').slideUp();

		$('.answer2').slideUp();

		$('.answer1').slideUp();

		$('.answer4').slideDown();

		$('.answer5').slideUp();

		$('.answer6').slideUp();
	}

	$('.question5').click(showAnswer5) 
		
	function showAnswer5() {
		$('.answer3').slideUp();

		$('.answer2').slideUp();

		$('.answer1').slideUp();

		$('.answer4').slideUp();

		$('.answer5').slideDown();

		$('.answer6').slideUp();
	}

	$('.question6').click(showAnswer6)

	function showAnswer6() {
		$('.answer3').slideUp();

		$('.answer2').slideUp();

		$('.answer1').slideUp();

		$('.answer4').slideUp();

		$('.answer5').slideUp();

		$('.answer6').slideDown();
	}

	// about us 
	$('#eboard').hide();

	$('#chairmen').hide();

	$('#members').hide();

	$('#eboardName').click(function() {
		$('#eboard').slideDown();

		$('#chairmen').slideUp();

		$('#members').slideUp();
	});

	$('#chairmenName').click(function() {
		$('#chairmen').slideDown();

		$('#eboard').slideUp();

		$('#members').slideUp();
	});

	$('#membersName').click(function() {
		$('#chairmen').slideUp();

		$('#eboard').slideUp();

		$('#members').slideDown();
	});


	// FAQS form
	$('#submit').click(function(event) {
		event.preventDefault();
		var firstName = $('#firstName').val();

		var lastName = $('#lastName').val();

		var email = $('#email').val();

		var who = $('#who').val();

		var question = $('#question').val();

		if (firstName === '' || lastName === '' || email === '' || who === '' || question === '') {
			$('#output').html('<h1>' + 'Error! You need to fill out all the fields in order to submit your question. Thank you.' + ' ' + '<a href="../pages/faq.html">' + 'Click here to return to the form' + '</a>' + '</h1>');
		} else {
			$('#output').html('<h1>' + 'Thank you for your question, we will get back to you as soon as possible.' + '</h1>');
		}
	});

	// causes
	$('.causeText1').hide();

	$('.causeText2').hide();

	$('.cause1').click(function() {
		$('.causeText1').slideDown();
		$('.causeText2').slideUp();
	});

	$('.cause2').click(function() {
		$('.causeText1').slideUp();
		$('.causeText2').slideDown();
	});

});