/**

	┬  ┌─┐┌─┐┬  ┬─┐┌─┐┌┬┐┬┌─┐
	│  │ │├┤ │  ├┬┘├─┤ ││││ │
	┴─┘└─┘└  ┴  ┴└─┴ ┴─┴┘┴└─┘

	@author: jakeoid;
	@contributors: n/a;

**/

/** Add a listener for everytime someone presses a key **/
window.addEventListener("keydown", checkKeyPressed, false);

/** Check what key is actually being pressed down. **/
function checkKeyPressed(e) {
	/** Check if the spacebar is pressed */
	if (e.keyCode == "32") {
		vidplay()
	}
}

/** Function to run to toggle the output **/
function vidplay() {
	/* Variables */
	var video = document.getElementById("audioplayer");
	var button = document.getElementById("playback");
	var text = document.getElementById("play");
	
	/* Check if the video is paused */
	if (video.paused) {
		/* Play the video */
		video.play();
		/* Change the icon to the pause bars */
		text.textContent = "pause";
	} else {
		/* Pause the video */
		video.pause();
		/* Change the icon to the arrow */
		text.textContent = "play_arrow";
	}
}

/** 
if ((e.which == 191 || e.keyCode == 191) && e.metaKey) {
			// TODO -- MAKE A MODAL MENU
		}
	} **/