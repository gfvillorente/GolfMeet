$(document).ready(function () {


	$(".all").hide();

	$("#p").click(function () {
        $("#profile-div").slideToggle('slow', 'swing');
	});

	$("#c").click(function () {
        $("#calendar-div").slideToggle('slow', 'swing');
	});

	$("#s").click(function () {
        $("#scorecard-div").slideToggle('slow', 'swing');
	});


})


 // $("#s").css("background-color","#a7cc25");