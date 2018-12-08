document.addEventListener("DOMContentLoaded", function () {
	var musicAudio = document.getElementById("music");
	var afspelenLink = document.getElementById("afspelen");
	var pauzeLink = document.getElementById("pauze");

	music.addEventListener("play", function (event) {
		afspelenLink.className = "disabled";
		pauzeLink.className = "";
	});

	music.addEventListener("pause", function (event) {
		afspelenLink.className = "";
		pauzeLink.className = "disabled";
	});

	afspelenLink.addEventListener("click", function (event) {
		musicAudio.play();
		event.preventDefault();
	});

	pauzeLink.addEventListener("click", function (event) {
		musicAudio.pause();
		event.preventDefault();
	});
});