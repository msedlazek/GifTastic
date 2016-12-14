$("document").ready(function(){

	// This first part will happen on page load, it appends the array as buttons to the page.

	var topics = ["Guns", "Fantasy", "Cyberpunk"]
	
	makeButtons();

	function makeButtons(){
		for (var i = 0; i < topics.length; i++) {
			var newBtn = $("<button>");
			newBtn.text(topics[i]);
			newBtn.val(topics[i]);
			$("#topicButtons").append(newBtn);
		};
	};

	function newTopics(){
		$("#topicButtons").empty();
	}

	$("#addTopic").on("click", function(e){
		var addedTopic = $("#topic-input").val();
		topics.push(addedTopic);
		newTopics();
		makeButtons();
		e.preventDefault();
	});
	
	// $("button").on("click", function(){
	// 	var searchTopic = $(this).val();
	// 	var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + searchTopic + "&api_key=dc6zaTOxFJmzC&limit=10";

	// 	$.ajax({
 //        	url: queryURL,
 //        	method: "GET"
 //      	}).done(function(response) {
 //      		console.log(response);
 //      	})

	// });



	// $("input").on("click", function(){
	// 	alert("hi");
	// });

})

// rating???
// if (rating == g )