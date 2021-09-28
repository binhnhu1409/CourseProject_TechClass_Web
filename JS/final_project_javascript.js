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

// JS of project page
function bigger(project_image) {
  project_image.style.height = "450px";
  project_image.style.width = "800px";
}
function back_normal(project_image) {
  project_image.style.height = "400px";
  project_image.style.width = "600px";
}
function loaded () {
  window.alert ("Project page is loading.");
}
var scrolled_times = 0;
function counting_scroll() {
  console.log(scrolled_times);
  document.getElementById("scroll-time").innerHTML = scrolled_times += 1;
}
