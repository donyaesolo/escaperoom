var i = 0;

function base() {
	document.getElementById("change").style.backgroundImage = "url('images/wall.jpg')";
}
function left() {
	if (i == 0){
		  document.getElementById("change").style.backgroundImage = "url('images/wall.jpg')";
		  document.images["rock"].src ="";
		  document.images["door"].src ="images/door.png";
		  i = i + 1;
	} else if (i == 2) {
			  i = i - 2;
	} else {
		document.getElementById("change").style.backgroundImage = "url('images/wallb.png')";
		document.images["door"].src = "images/paper.png";
		document.images["paper"].src ="";
	}
}

function right() {
	if (i == 1){
		 	i =  i - 1;
	} else if (i == 0) {
			document.getElementById("change").style.backgroundImage = "url('images/wall.jpg')";
			document.images["paper"].src ="";
			 document.images["door"].src ="images/door.png";
			i =  i + 2;
	} else{
		document.getElementById("change").style.backgroundImage = "url('images/wallb.png')";
		document.images["rock"].src = "images/rock.png";
		document.images["door"].src ="";
	}
}