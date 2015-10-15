$(document).ready(function() {

navTrigger = $("nav_trigger");
nav = $("#nav");
content = $("#content");
contentInner = $("#content_inner");

navAction();

});

function navAction() {

  navState = false;
  $(".nav-trigger").bind("touchstart click", function() {
    if (navState == false) {
      navOpen();
    } else {
      navClose();
    }
    return false;
  });
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      if (navState == true) {
        navClose();
      }
    }
  });
  $("#content").bind("touchstart click", function() {
    if (navState == true) {
      navClose();
      return false;
    }
  });

}

function navOpen() {

  animate.stop(content);
  animate.stop(contentInner);
  animate.stop(nav);
  animate({
    el: content,
    translateX: 280,
    duration: 750,
    easing: "easeOutExpo",
    begin: function() {
      navState = true;
    }
  });
  animate({
    el: contentInner,
    opacity: 0.5,
    duration: 300,
    easing: "linear",
  });
  animate({
    el: nav,
    opacity: [0, 1],
    translateX: [-15, 0],
    duration: 750,
    delay: 50,
    easing: "easeOutExpo",
  });

}

function navClose(el) {

  animate.stop(content);
  animate.stop(contentInner);
  animate.stop(nav);
  animate({
    el: content,
    translateX: [280, 0],
    duration: 750,
    easing: "easeOutExpo",
    begin: function() {
      navState = false;
    }
  });
  animate({
    el: contentInner,
    opacity: [0.5, 1],
    duration: 300,
    easing: "linear",
  });
  animate({
    el: nav,
    opacity: [1, 0],
    translateX: [0, -15],
    duration: 750,
    delay: 50,
    easing: "easeOutExpo",
  });

}