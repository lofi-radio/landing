/**

	┬  ┌─┐┌─┐┬  ┬─┐┌─┐┌┬┐┬┌─┐
	│  │ │├┤ │  ├┬┘├─┤ ││││ │
	┴─┘└─┘└  ┴  ┴└─┴ ┴─┴┘┴└─┘

	@author: jakeoid;
	@contributors: n/a;

	**/

	var audioplayer = document.getElementById("audioplayer");
	audioplayer.play();
	audioplayer.volume = 0;

	var isPaused = false;
	var volumeRange = document.getElementById("volumerange");
	volumerange.value = "100"

	volumeRange.addEventListener("input", function() {
		if(isPaused) {
			var audioplayer = document.getElementById("audioplayer");
			audioplayer.volume = volumerange.value / 100;
		} else {
			return
		}
	});

	/** Add a listener for everytime someone presses a key **/
	window.addEventListener("keydown", checkKeyPressed, false);

	/** Function to toggle the fullscreen for our clients **/
	function toggleFullScreen() {
		/* Variables */
		var doc = window.document;
		var docEl = doc.documentElement;
		var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
		var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

		/* Check if our browser allows for fullscreen */
		if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
			/* If so, allow */
			requestFullScreen.call(docEl);
		} else {
			/* Else, deny */
			cancelFullScreen.call(doc);
		}
	}

	/** Check what key is actually being pressed down. **/
	function checkKeyPressed(e) {
		/** Check if the spacebar is pressed */
		if (e.keyCode == "32") {
			vidplay()
		}

		/** TODO -- MAKE A MODAL MENU **/
		if ((e.which == 191 || e.keyCode == 191) && e.metaKey) {
			// CODE GOES HERE
		}

		/** Check if CMD + F is pressed **/
		if ((e.which == 70 || e.keyCode == 70) && e.metaKey) {
			/** Dont open our search menu **/
			e.preventDefault();
			/** Toggle the fullscreen mode of the browser **/
			toggleFullScreen();
		}
	}

	/** Function to run to toggle the output **/
	function vidplay() {
		/* Variables */
		var audioplayer = document.getElementById("audioplayer");
		var button = document.getElementById("playback");
		var text = document.getElementById("play");

		/* Check if the video is paused */
		if (isPaused == false){
			/* Change our value */
			isPaused = true;
			/* Play the video */
			audioplayer.volume = volumerange.value / 100;

			/* Change the icon to the pause bars */
			text.textContent = "pause";
			/* Print a message */
			console.log('[INFO] Resuming playback of the content.')
		} else {
			/* Change our value */
			isPaused = false;
			/* Pause the video */
			audioplayer.volume = 0;
			/* Change the icon to the arrow */
			text.textContent = "play_arrow";
			/* Print a message */
			console.log('[INFO] Pausing playback of the content.')
		}
	}