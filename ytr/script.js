$(document).ready(function() {
/* 
	U9fXPOCfqqE 
	XZcItivrKDg
	0SDlb_TU9-o
*/
	var ytid = "U9fXPOCfqqE";
	var ytdiv = "<div id=\"ytar\"><br><iframe width=\"100%\" height=\"160\" src=\"https://www.youtube.com/embed/" + yturl + "?version=3&amp;loop=1&amp;playlist=" + ytid + "&amp;autoplay=1" + "\" frameborder=\"0\" allowfullscreen></iframe></div>";
	
	$('#ytarcontainer').append(ytdiv);
	
	$('button').click(function() {
		yturl = $("input[name=YTautoreplay]").val();
		$('#ytar').remove();
		$('#ytarcontainer').append(ytdiv);
	});
	$('#testcases li').click(function(){
		yturl = $(this).text();
		$('#ytar').remove();
		$('#ytarcontainer').append(ytdiv);
	});
});