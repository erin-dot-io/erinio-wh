$(document).ready(function() {

navTrigger = $("#nav_trigger");
navBars = $("#trigger_bars");
topBar = $("#top_bar");
midBar = $("#mid_bar");
bottomBar = $("#bottom_bar");
nav = $("#nav");
content = $("#content");
contentInner = $("#content_inner");
hero = $("#hero_nav_wrap");
heroLink = $("#hero_link_wrap");

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
  $(content).bind("touchstart click", function() {
    if (navState == true) {
      navClose();
      return false;
    }
  });
  $("#hero_image").bind("touchstart click", function() {
    if (navState == true) {
      navClose();
      return false;
    }
  });

}

function navOpen() {

  $(navTrigger).addClass("nav--opened");

  navState = true;

  // console.log(navState);

  animate.stop(content, contentInner, nav, hero, heroLink, topBar, midBar, bottomBar);
  animate({
    el: content,
    translateX: 280,
    duration: 750,
    easing: "easeOutExpo",
    begin: function() {
      $(contentInner).css("pointer-events", "none");
    }
  });
  // animate({
  //   el: contentInner,
  //   opacity: 0.5,
  //   duration: 250,
  //   easing: "easeOutQuad",
  // });
  animate({
    el: nav,
    opacity: [0, 1],
    translateX: [-15, 0],
    duration: 750,
    easing: "easeOutExpo",
    begin: function() {
      $(nav).show();
    }
  });
  animate({
    el: hero,
    opacity: 0.05,
    scale: 0.982,
    duration: 1050,
    easing: "easeOutExpo",
  });
  animate({
    el: heroLink,
    opacity: 0,
    scale: 0.95,
    duration: 400,
    easing: "easeOutExpo",
  });
  animate({
    el: midBar,
    opacity: 0,
    delay: 150,
    duration: 50,
    easing: "easeOutExpo",
  });
  animate({
    el: topBar,
    translateY: ["-8px", "0px"],
    duration: 350,
    easing: "easeOutExpo",
  });
  animate({
    el: topBar,
    rotate: "45deg",
    delay: 200,
    duration: 450,
    easing: "easeOutExpo",
  });
  animate({
    el: bottomBar,
    translateY: ["8px", "0px"],
    duration: 350,
    easing: "easeOutExpo",
  });
  animate({
    el: bottomBar,
    rotate: "-45deg",
    delay: 200,
    duration: 450,
    easing: "easeOutExpo",
  });

}

function navClose() {

  $(navTrigger).removeClass("nav--opened");

  navState = false;

  // console.log(navState);

  animate.stop(content, contentInner, nav, hero, heroLink, topBar, midBar, bottomBar);
  animate({
    el: content,
    translateX: [280, 0],
    duration: 750,
    easing: "easeOutExpo",
    begin: function() {
      $(contentInner).css("pointer-events", "auto");
    }
  });
  // animate({
  //   el: contentInner,
  //   opacity: [0.5, 1],
  //   duration: 250,
  //   easing: "easeOutQuad"
  // });
  animate({
    el: nav,
    opacity: [1, 0],
    translateX: [0, -15],
    duration: 750,
    easing: "easeOutExpo",
    complete: function() {
      if (navState == false) {
        $(nav).hide();
      }
    }
  });
  animate({
    el: hero,
    opacity: [0.05, 1],
    scale: [0.982, 1],
    duration: 1050,
    easing: "easeOutExpo",
  });
  animate({
    el: heroLink,
    opacity: [0, 1],
    scale: [0.95, 1],
    duration: 850,
    easing: "easeOutExpo",
  });
  animate({
    el: midBar,
    opacity: [0, 1],
    delay: 250,
    duration: 50,
    easing: "easeOutExpo",
  });
  animate({
    el: topBar,
    rotate: ["45deg", "0deg"],
    duration: 350,
    easing: "easeOutExpo",
  });
  animate({
    el: topBar,
    translateY: ["0px", "-8px"],
    delay: 250,
    duration: 450,
    easing: "easeOutExpo",
  });
  animate({
    el: bottomBar,
    rotate: ["-45deg", "0deg"],
    duration: 350,
    easing: "easeOutExpo",
  });
  animate({
    el: bottomBar,
    translateY: ["0px", "8px"],
    delay: 250,
    duration: 450,
    easing: "easeOutExpo",
  });



}