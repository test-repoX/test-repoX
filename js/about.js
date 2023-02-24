function openAboutInfo(a) {
  var i;
  var x = document.getElementsByClassName("information-about");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(a).style.display = "block";
}