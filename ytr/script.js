$(document).ready(function() {
	// Header information, ie setting up preliminary stuff, eg, declaring variables and expressions
	var ytid = "0SDlb_TU9-o";
	var ytdiv = function(id) { return "<div id=\"ytar\"><iframe width=\"100%\" height=\"160\" src=\"https://www.youtube.com/embed/" + id + "?version=3&amp;loop=1&amp;playlist=" + id + "&amp;autoplay=1" + "\" frameborder=\"0\" allowfullscreen></iframe></div>"; }
	var errstr = "Whoooa, unauthorized string up in my grill. You trying to hack my site? Uncool bro, uncool.";
	$('#ytarcontainer').append(ytdiv(ytid)); // Initial load
	
	// Play new video from submissions
	$('button').click(function() {
		var ytaddr = $("input[name=YTautoreplay]").val();
        if (ytaddr.length > 11) { // Accept full or partial video urls
            var search = "=";
            var start = ytaddr.indexOf(search); // finds first occurrence
            if (start != -1)
            {
                start += search.length;
                var limit = start + 11;
                ytid = ytaddr.substring(start, limit);
				$('ul').append("<li>" + ytid + "</li>"); 
				$('#ytar').remove();
				$('#ytarcontainer').append(ytdiv(ytid));
            } else {
				alert(errstr);
			}
        } else if (ytaddr.length == 11) { // Accept video ids
			ytid = ytaddr;
			$('ul').append("<li>" + ytid + "</li>"); 
			$('#ytar').remove();
			$('#ytarcontainer').append(ytdiv(ytid));
		} else {
			alert(errstr);
		}
	});
	
	// Play old video from the history list
	$('li').click(function() {
		ytid = $(this).text(); // set name of clicked li
		$('#ytar').remove();
		$('#ytarcontainer').append(ytdiv(ytid));
	});
});