$(window).load(function() {


});

$(document).ready(function() {

  if($("body.page--index").length) {

    logo = $("#logo");
    triggerBars = $("#trigger_bars");
    triggerLogo = $("#nav_trigger_logo");
    triggerBg = $("#trigger_bg");
    heroImage = $("#hero_image_wrap");
    heroLink = $("#hero_link_wrap");

    var heroScroll = new ScrollMagic.Controller();

    // hero image fade
    var heroFadeTween = TweenMax.to(heroImage, 1, {opacity: 0.04, ease: 'ease'});
    var heroFade = new ScrollMagic.Scene({triggerElement: "#content", triggerHook: 'onEnter', offset: 10, duration: 900})
                        .setTween(heroFadeTween)
                        // trigger a velocity opaticy animation
                        // .setVelocity("#animate", {opacity: 0}, {duration: 400})
                        // .addIndicators()
                        .addTo(heroScroll);

    // hero link fade
    var linkFadeTween = TweenMax.to(heroLink, 1, {opacity: 0, ease: 'linear'});
    var linkFade = new ScrollMagic.Scene({triggerElement: "#content", triggerHook: 'onEnter', offset: 150, duration: 300})
                       .setTween(linkFadeTween)
                       // trigger a velocity opaticy animation
                       // .setVelocity("#animate", {opacity: 0}, {duration: 400})
                       // .addIndicators()
                       .addTo(heroScroll);

    // hero link scroll
    var linkScrollTween = TweenMax.to(heroLink, 1, {yPercent: 400, ease: 'linear'});
    var linkScroll = new ScrollMagic.Scene({triggerElement: "#content", triggerHook: 'onEnter', duration: 450})
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

    // nav trigger span fade
    var triggerFadeTween = TweenMax.to(triggerBars, 0.2, {opacity: 0, ease: 'easeInOutQuad'});
    var triggerFade = new ScrollMagic.Scene({triggerElement: "#content", offset: 150})
                       .setTween(triggerFadeTween)
                       // trigger a velocity opaticy animation
                       // .setVelocity("#animate", {opacity: 0}, {duration: 400})
                       // .addIndicators()
                       .addTo(heroScroll);

    // nav trigger logo fade
    var triggerLogoFadeTween = TweenMax.to(triggerLogo, 0.2, {opacity: 1, ease: 'easeInOutQuad'});
    var triggerLogoFade = new ScrollMagic.Scene({triggerElement: "#content", offset: 150})
                       .setTween(triggerLogoFadeTween)
                       // trigger a velocity opaticy animation
                       // .setVelocity("#animate", {opacity: 0}, {duration: 400})
                       // .addIndicators()
                       .addTo(heroScroll);

    // nav trigger logo bg fade
    var triggerBgFadeTween = TweenMax.to(triggerBg, 0.2, {opacity: 1, ease: 'easeInOutQuad'});
    var triggerBgFade = new ScrollMagic.Scene({triggerElement: "#content", offset: 150})
                       .setTween(triggerBgFadeTween)
                       // trigger a velocity opaticy animation
                       // .setVelocity("#animate", {opacity: 0}, {duration: 400})
                       // .addIndicators()
                       .addTo(heroScroll);

  } else {

    logo = $("#logo");
    triggerBars = $("#trigger_bars");
    triggerLogo = $("#nav_trigger_logo");
    triggerBg = $("#trigger_bg");

    var logoScroll = new ScrollMagic.Controller();

    // logo fade
    var logoFadeTween = TweenMax.to(logo, 1, {opacity: 0, ease: 'linear'});
    var logoFade = new ScrollMagic.Scene({triggerElement: "#content", triggerHook: 'onLeave', offset: -88, duration: 35})
                       .setTween(logoFadeTween)
                       // trigger a velocity opaticy animation
                       // .setVelocity("#animate", {opacity: 0}, {duration: 400})
                       // .addIndicators()
                       .addTo(logoScroll);

    // nav trigger span fade
    var triggerFadeTween = TweenMax.to(triggerBars, 0.2, {opacity: 0, ease: 'easeOutQuad'});
    var triggerFade = new ScrollMagic.Scene({triggerElement: "#content", triggerHook: 'onLeave'})
                       .setTween(triggerFadeTween)
                       // trigger a velocity opaticy animation
                       // .setVelocity("#animate", {opacity: 0}, {duration: 400})
                       // .addIndicators()
                       .addTo(logoScroll);

    // nav trigger logo fade
    var triggerLogoFadeTween = TweenMax.to(triggerLogo, 0.2, {opacity: 1, ease: 'easeInQuad'});
    var triggerLogoFade = new ScrollMagic.Scene({triggerElement: "#content", triggerHook: 'onLeave'})
                       .setTween(triggerLogoFadeTween)
                       // trigger a velocity opaticy animation
                       // .setVelocity("#animate", {opacity: 0}, {duration: 400})
                       // .addIndicators()
                       .addTo(logoScroll);

    // nav trigger logo bg fade
    var triggerBgFadeTween = TweenMax.to(triggerBg, 0.2, {opacity: 1, ease: 'easeInOutQuad'});
    var triggerBgFade = new ScrollMagic.Scene({triggerElement: "#content", triggerHook: 'onLeave'})
                       .setTween(triggerBgFadeTween)
                       // trigger a velocity opaticy animation
                       // .setVelocity("#animate", {opacity: 0}, {duration: 400})
                       // .addIndicators()
                       .addTo(logoScroll);


  }

});