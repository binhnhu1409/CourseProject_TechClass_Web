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

//skill-page
var skill_number = 7;
document.getElementById("add-new").onclick = function() {
 //var counting_skill = document.getElementsByTagNam("ListItem"); // thay document = body?
// var new_skill = document.createElement ('li'); //create new element to append it later? before that remove the last in the list?
//new_skill.setAttribute ("id", "item" + skill_number + ""); //minh can lam sao de lay dc cai input vao day
//new_skill.innerHTML = "Item" + skill_number; //minh can lam sao de lay dc cai input vao day
 //new_skill.setAttribute ("onclick", "remove(this)");
 //list.appendChild(new_skill);
}
function remove(el) {
  var last_skill = el;
  last_skill.remove();
}
