$(window).load(function() {


});

$(document).ready(function() {

  if($("body.page--index").length) {

    logo = $("#logo");
    heroImage = $("#hero_image_wrap");
    heroLink = $("#hero_link_wrap");

    var heroScroll = new ScrollMagic.Controller();

    // hero image fade
    var heroFadeTween = TweenMax.to(heroImage, 1, {opacity: 0, ease: 'ease'});
    var heroFade = new ScrollMagic.Scene({triggerElement: "#content", duration: 800, offset: -200})
                        .setTween(heroFadeTween)
                        // trigger a velocity opaticy animation
                        // .setVelocity("#animate", {opacity: 0}, {duration: 400})
                        // .addIndicators()
                        .addTo(heroScroll);

    // hero link fade
    var linkFadeTween = TweenMax.to(heroLink, 1, {opacity: 0, ease: 'linear'});
    var linkFade = new ScrollMagic.Scene({triggerElement: "#content", duration: 175})
                       .setTween(linkFadeTween)
                       // trigger a velocity opaticy animation
                       // .setVelocity("#animate", {opacity: 0}, {duration: 400})
                       // .addIndicators()
                       .addTo(heroScroll);

    // hero link scroll
    var linkScrollTween = TweenMax.to(heroLink, 1, {yPercent: 300, ease: 'linear'});
    var linkScroll = new ScrollMagic.Scene({triggerElement: "#content", triggerHook: 'onEnter', offset: 150, duration: 500})
                       .setTween(linkScrollTween)
                       // trigger a velocity opaticy animation
                       // .setVelocity("#animate", {opacity: 0}, {duration: 400})
                       // .addIndicators()
                       .addTo(heroScroll);

    // logo fade
    var logoFadeTween = TweenMax.to(logo, 1, {opacity: 0, yPercent: -22, ease: 'linear'});
    var logoFade = new ScrollMagic.Scene({triggerElement: "#content", duration: 175})
                       .setTween(logoFadeTween)
                       // trigger a velocity opaticy animation
                       // .setVelocity("#animate", {opacity: 0}, {duration: 400})
                       // .addIndicators()
                       .addTo(heroScroll);
  } else {

    logo = $("#logo");

    var logoScroll = new ScrollMagic.Controller();

    // logo fade
    var logoFadeTween = TweenMax.to(logo, 1, {opacity: 0, yPercent: -18, ease: 'linear'});
    var logoFade = new ScrollMagic.Scene({triggerElement: "#content", triggerHook: 'onLeave', offset: -88, duration: 35})
                       .setTween(logoFadeTween)
                       // trigger a velocity opaticy animation
                       // .setVelocity("#animate", {opacity: 0}, {duration: 400})
                       // .addIndicators()
                       .addTo(logoScroll);

  }

});