$(document).ready(function() {
    /* 
	U9fXPOCfqqE 
	XZcItivrKDg
	*/
	
	$('#ytar').append("<br><iframe width=\"100%\" height=\"80\" src=\"https://www.youtube.com/embed/" + "U9fXPOCfqqE" + "?version=3&amp;loop=1&amp;playlist=" + "U9fXPOCfqqE" + "&amp;autoplay=1 frameborder=\"0\" allowfullscreen></iframe>");
		
	$('button').click(function() {
		var yturl = $("input[name=YTautoreplay]").val();
		$('#ytar').remove();
		$('#ytarcontainer').append("<div id=\"ytar\"><br><iframe width=\"100%\" height=\"80\" src=\"https://www.youtube.com/embed/" + yturl + "?version=3&amp;loop=1&amp;playlist=" + yturl + "&amp;autoplay=1 frameborder=\"0\" allowfullscreen></iframe></div>");
	});
});