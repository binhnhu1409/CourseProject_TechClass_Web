//validate First name field: no bank, less than 25 characters
document.getElementById("fname").onchange = function () {
  var firstname = document.getElementById("fname").value;
  if (firstname.length == 0) {
    alert("First name field is required!");
  }
  if (firstname.length > 25) {
    alert("Your first name needs to be less than 25 characters!");
  }
}
//validate Last name field: no bank, less than 25 characters
document.getElementById("lname").onchange = function () {
  var lastname = document.getElementById("lname").value;
  if (lastname.length == 0) {
    alert("Last name field is required!");
  }
  if (lname.length > 25) {
    alert("Your first name needs to be less than 25 characters!");
  }
}
//validate Age: no blank, between 18 and 100
document.getElementById("age").onchange = function () {
  //get the value of the input AGE field
  var ageValue = document.getElementById("age").value;
  if (ageValue < 18 || ageValue > 100 ) {
    alert("Your age needs to be between 18 and 100");
  }
  if (ageValue.length == 0) {
    alert("Age field is required!");
  }
}
document.getElementById("click_to_show").onclick = function () {display()};
function display() {
  document.getElementById("contact_display").innerHTML = ("This information is submitted:");
  document.getElementById("fname_here").innerHTML = " Firtsname: " + fname.value;
  document.getElementById("lname_here").innerHTML = " Lastname: " + lname.value;
  var e = document.getElementById("gender");
  document.getElementById("gender_here").innerHTML = " Gender: " + e.options[e.selectedIndex].text;
  document.getElementById("age_here").innerHTML = " Age: " + age.value;
  document.getElementById("mail_here").innerHTML = " Email address: " + mail.value;
  document.getElementById("web_here").innerHTML = " Website address: " + web.value;
  document.getElementById("comment_here").innerHTML = " Your comment: " + comment.value;
}
