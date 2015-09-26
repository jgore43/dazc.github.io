$(document).ready(function() {
    /* U9fXPOCfqqE */
	$('button').click(function() {
		var yturl = $("input[name=YTautoreplay]").val();
		location.reload(function(){
			$('#ytar').append("<br><iframe width=\"100%\" height=\"80\" src=\"https://www.youtube.com/embed/" + yturl + "?version=3&amp;loop=1&amp;playlist=" + yturl + "&amp;autoplay=1 frameborder=\"0\" allowfullscreen></iframe>");
		});
	});
});