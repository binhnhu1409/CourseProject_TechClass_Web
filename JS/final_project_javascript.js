// Automatic Slideshow - change image every 3 seconds - homepage
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

//show current date and time at the bottom of homepage
var show_time = new Date();
document.getElementById("show_date_time").innerHTML = show_time;

// Automatic Slideshow - change image every 3 seconds - gallery nature
var slide_index = 0;
slideshow();
function slideshow() {
  var j;
  var y = document.getElementsByClassName("slideshow_nature");
  for (j = 0; j<y.length; j++) {
    y[j].style.display = "none";
  }
  slide_index++;
  if (slide_index > y.length) {slide_index = 1}
  y[slide_index-1].style.display = "block";
  setTimeout (slideshow, 3000);
}
