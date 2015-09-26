$(document).ready(function() {
	// Header information, ie setting up preliminary stuff, eg, declaring variables and expressions
	var ytid = "0SDlb_TU9-o";
	var ytdiv = function(id) { return "<div id=\"ytar\"><iframe width=\"100%\" height=\"160\" src=\"https://www.youtube.com/embed/" + id + "?version=3&amp;loop=1&amp;playlist=" + id + "&amp;autoplay=1" + "\" frameborder=\"0\" allowfullscreen></iframe></div>"; }
	
	$('#ytarcontainer').append(ytdiv(ytid));
	
	// Play new video from submissions
	$('button').click(function() {
		ytid = $("input[name=YTautoreplay]").val();
		$('ul').append("<li>" + ytid + "</li>"); // ...yea, I know. I'll fix it later.
		$('#ytar').remove();
		$('#ytarcontainer').append(ytdiv(ytid));
	});
	
	// Play old video from the history list
	$('li').click(function() {
		ytid = $(this).text(); // set name of clicked li
		$('#ytar').remove();
		$('#ytarcontainer').append(ytdiv(ytid));
	});
});