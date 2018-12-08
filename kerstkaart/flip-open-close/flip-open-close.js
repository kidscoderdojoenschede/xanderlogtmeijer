document.addEventListener("DOMContentLoaded", function () {
	var kaart = document.getElementById("kaart");

	function vervolgKaartOpenDicht(event) {
		if (kaart.className === "opening")
			kaart.className = "open";
		if (kaart.className === "closing")
			kaart.className = "closed";
	}

	kaart.addEventListener('transitionend', vervolgKaartOpenDicht, true);

	function openkaart() {
		console.log("openkaart");
		if (kaart.className !== "closed") return;
		kaart.className = "opening";
		var event = new CustomEvent("flip", {detail: "opening"});
		kaart.dispatchEvent(event);
	}

	function closekaart() {
		if (kaart.className !== "open") return;
		kaart.className = "closing";
		var event = new CustomEvent("flip", {detail: "closing"});
		kaart.dispatchEvent(event);
	}

	var voorzijde = document.getElementById("voorzijde");
	var linkerbinnenkant = document.getElementById("linkerbinnenkant");
	voorzijde.addEventListener("click", function (event) {
		openkaart();
		event.preventDefault();
	});
	linkerbinnenkant.addEventListener("click", function (event) {
		closekaart();
		event.preventDefault();
	});
	document.addEventListener("keydown", function (event) {
		switch (event.key) {
			case "Right":
			case "ArrowRight":
				openkaart();
				break;
			case "Left":
			case "ArrowLeft":
				closekaart();
				break;
		}
	}, false);
});

