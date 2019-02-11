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
		document.images["paper"].src = "images/paper.png";
		document.images["door"].src ="";
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
		document.images["bush"].src ="images/bush.png";
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
function next() {
	rock = true;
	document.images["rock"].src ="";
}

function door(){
	if (rock == true){
		document.images["door"].src ="images/open_door.png";
	} 
	alert("You broke the door open with a rock");
}