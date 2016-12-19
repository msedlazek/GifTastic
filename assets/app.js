$("document").ready(function(){

	// This first part will happen on page load, it appends the array as buttons to the page.

	var topics = ["Guns", "Fantasy", "Cyberpunk"]
	
	newTopics();

	

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
		makeButtons();
	};

	

	$("#addTopic").on("click", function(e){
		var addedTopic = $("#topic-input").val();
		topics.push(addedTopic);
		newTopics();
		// return false;
		e.preventDefault();
	});
	
	// This is our ajax query.
	$("button").on("click", function(){
		var searchTopic = $(this).val();
		var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + searchTopic + "&api_key=dc6zaTOxFJmzC&limit=10";

		$.ajax({
        	url: queryUrl,
        	method: "GET"
      	}).done(function(response) {
      		console.log(response);
      		var results = response.data
      		for (var j = 0; j < results.length; j++) {
      			var gifDiv = $("<div>");
      			var rating = results[j].rating
      			var p = $("<p>").text("Rating: " + rating);
      			var topicImage = $("<img>");
            	topicImage.attr("src", results[j].images.fixed_height_still.url);
            	gifDiv.prepend(p);
            	gifDiv.prepend(topicImage);

            	$("#topicGifs").prepend(gifDiv);
      		}
      	});

	});

	// $("img").on("click", function(){
	// 	if (){

	// 	}
	// });

});

// rating???
// if (rating == g )