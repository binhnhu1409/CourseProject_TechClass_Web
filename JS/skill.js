var counting_skill = document.getElementsByClassName("ListItem ");
document.getElementById("click_to_add").onclick = function() {skillFunction()};
// to add the first skill
skill_name.oninput = function () {
  var newLi = document.createElement("li");
  var newLiContent = document.createTextNode(skill_name.value);
  newLi.appendChild(newLiContent);
  var beginLi = document.getElementById("skill-list");
  document.body.appendChild(beginLi);
};

function skillFunction() {
  counting_skill[counting_skill.length-1].remove(); // to remove the last_skill from the list
}
