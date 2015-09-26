$(document).ready(function() {
    /* 
	U9fXPOCfqqE 
	XZcItivrKDg
	*/
	
	$('#ytar').append("<br><iframe width=\"100%\" height=\"80\" src=\"https://www.youtube.com/embed/vq7iAClWcqE?list=PLiNxTMoz5rYX-Rpv0YGn6tPOtl8HYDG8B&autoreplay=1 frameborder=\"0\" allowfullscreen></iframe>");
		
	$('button').click(function() {
		var yturl = $("input[name=YTautoreplay]").val();
		$('#ytar').remove();
		$('#ytarcontainer').append("<div id=\"ytar\"><br><iframe width=\"100%\" height=\"80\" src=\"https://www.youtube.com/embed/" + yturl + "?version=3&amp;loop=1&amp;playlist=" + yturl + "&amp;autoplay=1 frameborder=\"0\" allowfullscreen></iframe></div>");
	});
});

<script>
$('button').click(function() {
	var yturl = $("input[name=YTautoreplay]").val();
	$('#ytar').remove();
	$('#ytarcontainer').append("<div id=\"ytar\"><br><iframe width=\"100%\" height=\"80\" src=\"https://www.youtube.com/embed/" + yturl + "?version=3&amp;loop=1&amp;playlist=" + yturl + "&amp;autoplay=1 frameborder=\"0\" allowfullscreen></iframe></div>");
});
</script>