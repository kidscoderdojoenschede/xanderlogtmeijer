document.addEventListener("DOMContentLoaded", function () {
	var bellsAudio = new Audio('geluiden/nb_sledebel.ogg');
	bellsAudio.loop = true;

	var kaart = document.getElementById("kaart");
	var musicAudio = document.getElementById("music");
	kaart.addEventListener("flip", function (event) {
		switch (event.detail) {
			case "opening":
				musicAudio.play();
				bellsAudio.play();
				break;
			case "closing":
				musicAudio.pause();
				bellsAudio.pause();
				break;
		}
	}, false);
});