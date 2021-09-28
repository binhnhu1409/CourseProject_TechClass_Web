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
  document.getElementById("scroll-time").innerHTML = scrolled_times += 1;
}
