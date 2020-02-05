function progress() {
  var elements = document.getElementsByClassName("fill");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.width = "100%";
        elements[i].style.transition = "width 2s 2.25s";
}
}