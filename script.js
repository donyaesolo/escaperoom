var i = 0;
function base() {
	document.getElementById("change").style.backgroundImage = "url('images/wall.jpg')";
	document.getElementById("busha").addEventListener("click", blank);
	document.getElementById("bushb").addEventListener("click", blank);
}
function l(){
	var d = document.getElementById("door");
	var b = document.getElementById("bushc");
	var c = document.getElementById("busha");
	if (i == 0){
		  document.getElementById("change").style.backgroundImage = "url('images/wall.jpg')";
		  document.images["rock"].src ="images/back.png";
			document.images["key"].src ="images/back.png";
			d.style.display = "block";
		  document.images["window"].src = "images/back.png";
		  document.images["busha"].src ="";
		  document.images["bushb"].src ="";
		  document.images["bushc"].src ="";
		  i = i + 1
	} else if (i == 2) {
			  i = i - 2;
	} else {
		document.getElementById("bushc").removeEventListener("click", hey);
		document.getElementById("busha").removeEventListener("click", blank);
		document.getElementById("bushc").addEventListener("click", blank);
		document.getElementById("busha").addEventListener("click", heyk);
		document.getElementById("change").style.backgroundImage = "url('images/wallb.png')";
		document.images["paper"].src = "images/paper.png";
		document.images["key"].src ="images/key.png";
		d.style.display = "none";
		b.style.display = "inline";
		c.style.display = "inline";
		document.images["busha"].src ="images/bush.png";
		document.images["bushb"].src ="images/bush.png";
		document.images["bushc"].src ="images/bush.png";

	}
}

function r(){
	var d = document.getElementById("door");
	var b = document.getElementById("bushc");
	var c = document.getElementById("busha");
	if (i == 1){
		 	i =  i - 1;
	} else if (i == 0) {
			document.getElementById("change").style.backgroundImage = "url('images/wall.jpg')";
			d.style.display = "block";
			document.images["paper"].src ="images/back.png";
			document.images["key"].src ="images/back.png";
			document.images["window"].src = "images/back.png";
			document.images["busha"].src ="";
			document.images["bushb"].src ="";
			document.images["bushc"].src ="";
			i =  i + 2;
	} else{
		document.getElementById("busha").addEventListener("click", blank);
		document.getElementById("bushc").removeEventListener("click", blank);
		document.getElementById("busha").removeEventListener("click", heyk);
		document.getElementById("bushc").addEventListener("click", hey);
		document.getElementById("change").style.backgroundImage = "url('images/wallb.png')";
		document.images["rock"].src = "images/rock.png";
		d.style.display = "none";
		b.style.display = "inline";
		c.style.display = "inline";
		document.images["window"].src = "images/windows.png";
		document.images["busha"].src ="images/bush.png";
		document.images["bushb"].src ="images/bush.png";
		document.images["bushc"].src ="images/bush.png";
	}
}

function news(){
  var x = document.getElementById("pop");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
	x.style.display = "block";
  }
}

var rock = new Boolean(false);
function next(){
	var b = document.getElementById("bushc");
	var p = document.getElementById("rock");
	rock = true;
	p.style.display = "none";
	b.style.display = "inline";
}

function smash() {
	if (rock == true){
		document.images["window"].src ="images/broken.png";
		alert("You broke the window open with a rock");
		document.getElementsByTagName("a")[0].setAttribute("href", "http://www.google.com");
		rock = false;
	}
}
var key = new Boolean(false);
function nextb(){
	var b = document.getElementById("busha");
	var p = document.getElementById("key");
	key = true;
	p.style.display = "none";
	b.style.display = "inline";
}
function door(){
	if (key == true){
		alert("You opened the door with the key");
		document.images["door"].src ="images/open_door.png";
		document.getElementsByTagName("a")[1].setAttribute("href", "http://www.google.com");
		key = false;
	}
}

function hey() {
	var x = document.getElementById("bushc");
	x.style.display = "none";
}
function heyk() {
	var x = document.getElementById("busha")
	x.style.display = "none";
}

function blank() {
	alert("You found nothing behind this bush");
}
