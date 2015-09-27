$(document).ready(function() {
	// Header information, ie setting up preliminary stuff, eg, declaring variables and expressions
	
	/*
	0SDlb_TU9-o
	Djp8ODyRK68
	kPI1xV-oXmY
	pv5UhO_BRhw
	71rSc6LXlSo
	*/
	var ytid = "0SDlb_TU9-o";
	var ytdiv = function(id) { return "<div id=\"ytar\"><iframe width=\"100%\" height=\"160\" src=\"https://www.youtube.com/embed/" + id + "?version=3&amp;loop=1&amp;playlist=" + id + "&amp;autoplay=1" + "\" frameborder=\"0\" allowfullscreen></iframe></div>"; }

	$('#ytarcontainer').append(ytdiv(ytid)); // Initial load
	
	var listcap = function() {
		if ($('li').length == 5) { // List <= 5 by dropping oldest item
			$('li').first().remove();
		}
	}
	
	var updateVideo = function(id) {
		$('ul').append("<li>" + id + "</li>"); 
		$('#ytar').remove();
		$('#ytarcontainer').append(ytdiv(id));
	}
	
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
				listcap();
				updateVideo(ytid); // Adding new list item and updating video
            } else {
				var snd = new Audio("/audio/Uncool.mp3");
				snd.play();
			}
        } else if (ytaddr.length == 11) { // Accept video ids
			ytid = ytaddr;
			listcap();
			updateVideo(ytid); // Adding new list item and updating video
		} else {
			var snd = new Audio("/audio/Uncool.mp3");
			snd.play();
		}
	});
	
	// Play old video from the history list
	$('ul').on('click', 'li', function () {
		ytid = $(this).text(); // set name of clicked li
		$('#ytar').remove();
		$('#ytarcontainer').append(ytdiv(ytid));
	});
});