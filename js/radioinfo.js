/**

	┬  ┌─┐┌─┐┬  ┬─┐┌─┐┌┬┐┬┌─┐
	│  │ │├┤ │  ├┬┘├─┤ ││││ │
	┴─┘└─┘└  ┴  ┴└─┴ ┴─┴┘┴└─┘

	@author: jakeoid;
	@contributors: n/a;

**/

function updateCounts() {

	/** Grab our statistics **/
	$.getJSON("http://lofi.jakeoid.com/stats", function(result){
		/** Log to our console the new information **/
		console.log('[INFO] Song Name and Listeners Count being added.')

		/** Get our variables to return in our information **/
		var songname = result['icestats']['source']['title'] + " - " + result['icestats']['source']['artist']
		var viewercount = result['icestats']['source']['listeners']

		/** ********************************* **/

		/** CURRENT SONG **/
		$('#track-title').text(songname); 
		
		/** PAGE TITLE **/
		document.title = songname + " | " + "LoFi Radio";

		/** LISTENER COUNT **/
		/** See that we have more than no viewers **/
		if(viewercount > 0) {
			/** We only have one viewer, show the information as only a singular person **/
			if(viewercount == 1) {
				/** Update the text. **/
				$('#listener-count').text(viewercount + " person is currently chilling out."); 
			/** We have more than one viewer, show the information as multiple people **/
			} else {
				/** Update the text. **/
				$('#listener-count').text(viewercount + " people are currently chilling out."); 
			}
		/** Else we can just show that nobody is currently listening **/
		} else {
			/** Update the text. **/
			$('#listener-count').text("Nobody is currently chilling out."); 
		}

		/** Log some output **/
		console.log('[INFO] Succesfully updated all of the values.')
	});
	
}

/** Document Ready we establish the loops to run. **/
$(document).ready(function(){

	/** Make sure we timeout this every 2 seconds. **/
	setTimeout(function(){updateCounts();}, 2000);
	/** Set the interval to check update information every 10 seconds. **/
	setInterval(function(){updateCounts();}, 10000);

});

/** TODO: MAKE ALERTS ON NEW SONGS **/