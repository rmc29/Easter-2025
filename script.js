/* function goOutside() {
	var tmp = document.getElementById("outdoor").style.visibility;
	console.log(tmp);
	
	document.getElementById("outdoor").style.visibility = document.getElementById("indoor").style.visibility;
	document.getElementById("indoor").style.visibility = tmp;
} */

function goInside() { //todo once we have >2 locations, change these to be more general and to make the chosen location visible and all others hidden
	display("indoor", true);
	display("outdoor", false);

}

function goOutside() {
	display("indoor", false);
	display("outdoor", true);

}

function display(id, value) {
	console.log(id, value)
	document.getElementById(id).style.visibility = value ? "visible" : "hidden";
}

//warning popup if on mobile
 function detectMob() {
	if (( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 )) { //todo check these numbers both ways
		alert("Happy Easter! I recommend viewing this on desktop because it's built in old-school JavaScript without any of that newfangled responsive design stuff.");
	}
}

function toggleForm() {
	display("form", true); //todo make go other way too
}



