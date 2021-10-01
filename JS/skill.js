var counting_skill = document.getElementsByClassName("ListItem ");
document.getElementById("click_to_add").onclick = function() {skillFunction()};
// to add the first skill
skill_name.oninput = function () {
  new_skill_here.innerHTML = skill_name.value;
};
function skillFunction() {
  counting_skill[counting_skill.length-1].remove(); // to remove the last_skill from the list
}
