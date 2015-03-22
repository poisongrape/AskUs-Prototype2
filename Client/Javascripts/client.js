var main = function(questionObjects){
	"use strict";

	//console.log("Hello Vane");

	function appendElements(element){
		$("main .content").append($("<p>").text(element.title));
		$("main .content").append($("<p>").text(element.explanation));
	};

	//Output question objects to see that we are getting the correct information.
	questionObjects.forEach(function(element){
		console.log(element);
		console.log(element.title);
		console.log(element.explanation);
	});

	$(".tabs a span").toArray().forEach(function(element){
		$(element).on("click", function(){
			var $element = $(element),
				$content,
				i;

			//Remove "active" class from all tags.
			$(".tabs a span").removeClass("active");
			//Make selected tab have "active" class.
			$element.addClass("active");
			//Delete all content from tabs.
			$("main .content").empty();

			if($element.parent().is(":nth-child(1)")){
				//"All Questions" tab clicked.
				console.log("Clicked All Questions");

				questionObjects.forEach(function(element){
					appendElements(element);
				});

			} else if($element.parent().is(":nth-child(2)")){
				//"Travel" tab clicked.
				console.log("Clicked Travel");

				questionObjects.forEach(function(element){
					if(element.tag === "travel"){
						appendElements(element);
					}
				});
			} else if($element.parent().is(":nth-child(3)")){
				//Food tab clicked.
				console.log("Clicked Food");

				questionObjects.forEach(function(element){
					if(element.tag === "food"){
						appendElements(element);
					}
				});
			} else if($element.parent().is(":nth-child(4)")){
				//Entertainment tab clicked.
				console.log("Clicked Entertainment");

				questionObjects.forEach(function(element){
					if(element.tag === "entertainment"){
						appendElements(element);
					}
				});
			} else if($element.parent().is(":nth-child(5)")){
				//Relationships tab clicked.
				console.log("Clicked Relationships");

				questionObjects.forEach(function(element){
					if(element.tag === "relationships"){
						appendElements(element);
					}
				});
			} else if($element.parent().is(":nth-child(6)")){
				//Career tab clicked
				console.log("Clicked the Career");

				questionObjects.forEach(function(element){
					if(element.tag === "career"){
						appendElements(element);
					}
				});
			} else if($element.parent().is(":nth-child(7)")){
				//Life tab clicked.
				console.log("Clicked Life");

				questionObjects.forEach(function(element){
					if(element.tag === "life"){
						appendElements(element);
					}
				});
			}

			return false;
		});//End of on click.
	});//End of forEach.

	$(".tabs a:first-child span").trigger("click");
};

$(document).ready(function(){
	$.getJSON("/questions.json", function(questionObjects){
		main(questionObjects);
	})
});