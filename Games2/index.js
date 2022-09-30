var numberLength = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberLength; i++)
  document.querySelectorAll("button")[i].addEventListener("click", clickonam);
function clickonam() {
  this.style.color="blue";
}
