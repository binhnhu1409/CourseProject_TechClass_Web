var counting_skill = document.getElementsByClassName("ListItem ");
document.getElementById("click_to_add").onclick = function() {skillFunction()};
function skillFunction() {
  //var new_skill_name = document.forms["SkillForm"];???
  counting_skill[counting_skill.length-1].remove(); // to remove the last_skill from the list
   //var new_skill_name = document.getElementById("skill_name");
   //document.getElementById("new_skill_here").innerHTML = new_skill_name;
  //document.getElementById("new_skill_here").innerHTML = new_skill_name;
   //var new_skill_photo =  document.getElementById("skill_photo");

}
