// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
change_image();

function change_image() {
  var i;
  var x = document.getElementsByClassName("image_to_change");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout (change_image, 3000);
}
