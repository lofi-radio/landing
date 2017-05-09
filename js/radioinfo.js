/**

	┬  ┌─┐┌─┐┬  ┬─┐┌─┐┌┬┐┬┌─┐
	│  │ │├┤ │  ├┬┘├─┤ ││││ │
	┴─┘└─┘└  ┴  ┴└─┴ ┴─┴┘┴└─┘

	@author: jakeoid;
	@contributors: n/a;

	**/

	var lastsongtitle = ""
	var lastsongartist = ""

	function updateCounts() {

		/** Grab our statistics **/
		$.getJSON("http://lofi-radio.co/stats", function(result){
			/** Log to our console the new information **/
			console.log('[INFO] Song Name and Listeners Count being added.')

			/** Get our variables to return in our information **/
			var songname = result['icestats']['source']['title'] + " - " + result['icestats']['source']['artist']
			var songtitle = result['icestats']['source']['title']
			var songartist = result['icestats']['source']['artist']
			var viewercount = result['icestats']['source']['listeners']

			/** ********************************* **/

			/** Check that our last song that we checked for isnt the same **/
			if(lastsongtitle != songtitle && lastsongartist != songartist){
				/** Update it to be the same. **/
				lastsongartist = songartist;
				lastsongtitle = songtitle;

				/** Check if our user wants notifications **/
				if(isNotify == true) {
					/** Send our user a notification letting them know about the new song **/
					var notification = new Notification('Lofi Radio', {
						body: songtitle + " - " + songartist,
					});
				}

				/** Check if our user wants to skip to the next song **/
				if(isSkipNext == true) {
					/** Reset the value to the original **/
					isSkipNext = false;
					/** Variables **/
					var audioplayer = document.getElementById("audioplayer");
					var volumeRange = document.getElementById("volumerange");
					/** Set the volume to the users input **/
					audioplayer.volume = volumerange.value / 100;
				}
			}

			/** ********************************* **/

			/** CURRENT SONG **/
			$('#title').text(songtitle); 
			$('#artist').text(songartist); 

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