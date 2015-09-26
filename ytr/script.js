$(document).ready(function() {
/* 
	U9fXPOCfqqE
	XZcItivrKDg
	0SDlb_TU9-o
*/
	var ytid = "0SDlb_TU9-o";
	var ytdiv = function(id) { return "<div id=\"ytar\"><br><iframe width=\"100%\" height=\"160\" src=\"https://www.youtube.com/embed/" + id + "?version=3&amp;loop=1&amp;playlist=" + id + "&amp;autoplay=1" + "\" frameborder=\"0\" allowfullscreen></iframe></div>"; }
	
	$('#ytarcontainer').append(ytdiv(ytid));
	
	$('button').click(function() {
		ytid = $("input[name=YTautoreplay]").val();
		$('#ytar').remove();
		$('#ytarcontainer').append(ytdiv(ytid));
	});
	
	$('li').click(function() {
		ytid = $(this).text(); // set name of clicked li
		$('#ytar').remove();
		$('#ytarcontainer').append(ytdiv(ytid));
	});
});