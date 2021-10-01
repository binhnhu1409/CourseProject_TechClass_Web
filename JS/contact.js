//validate First name field: no bank, less than 25 characters
document.getElementById("fname").onchange = function () {
  var fname = document.getElementById("fname").value;
  if (fname.length == 0) {
    alert("First name field is required!");
  }
  if (fname.length > 25) {
    alert("Your first name needs to be less than 25 characters!");
  }
}
//validate Last name field: no bank, less than 25 characters
document.getElementById("lname").onchange = function () {
  var lname = document.getElementById("lname").value;
  if (lname.length == 0) {
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
