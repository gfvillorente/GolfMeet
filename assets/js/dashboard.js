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

	$("button .dropdown").click(function () {
		$(".dropdown").dropdown();
	});
})


 // $("#s").css("background-color","#a7cc25");