function openNav(a) {
  var elements = document.getElementsByClassName("sidenav");
  for (var i = 0; i < elements.length; i++) {
      elements[i].style.left = "100%";
  }

  if (x.matches) {
    document.getElementById(a).style.left = "50%";
  }
  else if (y.matches) {
    document.getElementById(a).style.left = "33%";
  }
  else {
    document.getElementById(a).style.left = "15%";
  };
 
document.getElementById('top').style.pointerEvents = "none";
document.getElementById('hero').style.opacity = ".1";
document.getElementById('hero').style.transition = "opacity .5s";
document.getElementById('side-hero').style.pointerEvents = "all";
document.getElementById('work').style.opacity = ".1";
document.getElementById('work').style.transition = "opacity .5s";
document.getElementById('side-work').style.pointerEvents = "all";
}

function projNav(a) {
  var elements = document.getElementsByClassName("sidenav");
  for (var i = 0; i < elements.length; i++) {
      elements[i].style.left = "100%";
  }

  if (x.matches) {
    document.getElementById(a).style.left = "25%";
  }
  else {
    document.getElementById(a).style.left = "0%";
  };

document.getElementById('top').style.pointerEvents = "none";
document.getElementById('projects').style.opacity = ".1";
document.getElementById('projects').style.transition = "opacity 1s";
document.getElementById('side-project').style.pointerEvents = "all";
}

var x = window.matchMedia("(min-width: 1200px)");
var y = window.matchMedia("(min-width: 765px)");

function closeNav() {
  var elements = document.getElementsByClassName("sidenav");
  for (var i = 0; i < elements.length; i++) {
      elements[i].style.left = "100%";
  }
document.getElementById('hero').style.opacity = "1";
document.getElementById('work').style.opacity = "1";
document.getElementById('projects').style.opacity = "1";
document.getElementById('top').style.pointerEvents = "auto";
}