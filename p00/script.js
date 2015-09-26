$(document).ready(function() {
/* 
	U9fXPOCfqqE 
	XZcItivrKDg
	0SDlb_TU9-o
*/
	var yturl = "XZcItivrKDg";
	$('#ytarcontainer').append("<div id=\"ytar\"><br><iframe width=\"100%\" height=\"160\" src=\"https://www.youtube.com/embed/" + yturl + "?version=3&amp;loop=1&amp;playlist=" + yturl + "&amp;autoplay=1" + "\" frameborder=\"0\" allowfullscreen></iframe></div>");
	
	$('button').click(function() {
		yturl = $("input[name=YTautoreplay]").val();
		$('#ytar').remove();
		$('#ytarcontainer').append("<div id=\"ytar\"><br><iframe width=\"100%\" height=\"160\" src=\"https://www.youtube.com/embed/" + yturl + "?version=3&amp;loop=1&amp;playlist=" + yturl + "&amp;autoplay=1" + "\" frameborder=\"0\" allowfullscreen></iframe></div>");
	});
});