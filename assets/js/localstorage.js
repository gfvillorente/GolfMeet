function initLocalStorageControls() {


	var userMessage;

	// Test if browser supports local storage:
	if (Modernizr.localstorage) {
		// geolocation is available
		console.log("Local storage is supported.");
		userMessage = "Use the form below to sign up!"
		$(".status-message").html(userMessage);
		// Events handlers for onload:
		$('#data-dashboard').show('slow');
		
	} else {
		// No geolocation  support
		console.log("No local storage support.");
		userMessage = "Sorry, local storage is not available."
		$(".status-message").html(userMessage);
		$('#data-dashboard').hide('slow');
	}

		// Hardcode name to text field
		$('#firstname').val(localStorage.getItem('firstname'));
		$('#lastname').val(localStorage.getItem('lastname'));
		$('#email').val(localStorage.getItem('email'));
		$('#phone').val(localStorage.getItem('phone'));
		$('#password').val(localStorage.getItem('password'));
		$('#confirm-pw').val(localStorage.getItem('confirm-pw'));
	
		// Events handler for 'update' click
		$('#update-details').click(function() {
		console.log("you clicked the button!");

			$('form input').each(function() {
				console.log(this);
				var myId = $(this).attr('id');
				var myVal = $(this).val();
				localStorage.setItem(myId, myVal);
		
   				var storedVal = localStorage.getItem(myId);
   				console.log(storedVal);

   			});
   		});


		// Clear local storage items
		$('.clear').click(function() {
			var removeValue = $(this).attr('data-localitem');
			localStorage.removeItem(removeValue);
		});


		// Clear all items
		$('#clear-all').click(function() {

			localStorage.clear();
		});

};


$(document).ready(function () {

	initLocalStorageControls();

});












