$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
	$('button').click(function() {
		var yturl = $("input[name=YTautoreplay]").val();
		$('#ytar').append("<iframe width=\"100%\" height=\"80\" src=\"https://www.youtube.com/embed/" + "U9fXPOCfqqE" + "?version=3&amp;loop=1&amp;playlist=" + "U9fXPOCfqqE" + "&amp;autoplay=1 frameborder=\"0\" allowfullscreen></iframe>");
	});
});