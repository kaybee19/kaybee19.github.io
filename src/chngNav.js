function setHero() {
	document.getElementById('hero').style.cssText = "left: 0; transform: scale(1)";
}

function chngNav(a) {
  var elements = document.getElementsByClassName("main");
  for (var i = 0; i < elements.length; i++) {
      elements[i].style.left = "-100%";
      elements[i].style.opacity = ".1";
      elements[i].style.transform = "scale(.85)";
      elements[i].style.transition = "transform .75s 0s, opacity 1.75s .5s, left 1s .5s";
  }
document.getElementById(a).style.cssText = "top: 0; left: 0; opacity: 1; transform: scale(1); transition: transform .75s 2s, opacity 0s 0s, left 1s 1s";
}