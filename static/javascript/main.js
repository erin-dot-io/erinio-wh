$(document).ready(function() {
  $.Velocity.RegisterEffect("transition.waffleIn", {
    defaultDuration: 800,
    calls: [
      [{ scale: [ 1, 1.45 ], translateZ: 0 }, 1, { easing: [ 45, 11 ] } ]
    ]
  });
  $.Velocity.RegisterEffect("transition.squareIn", {
    defaultDuration: 800,
    calls: [
      [ { scale: [ 1, 0.9 ], opacity: [ 1, 0 ], translateZ: 0 } ]
    ]
  });

  html = $('html');
  loader = $('#loader');
  loaderBg = $('#loader .loader__bg--inner');



  // imagesLoaded( loader, function() {
  //   html.addClass('loader--loaded');
  // });

  // waffle = $('.waffle');
  // square = $('.waffle__square');

  // var squareLoader = imagesLoaded('.square__thumb');

  // squareCount = 0;
  // squareTotal = squareLoader.images.length;
  // squareInc = 100 / squareTotal;

  // squareLoader.on( 'progress', function( instance, image ) {
  //   // var result = image.isLoaded ? 'loaded' : 'broken';
  //   // console.log( 'image is ' + result + ' for ' + image.img.src );
  //   squareCount = squareCount + squareInc;
  //   loaderBg.velocity({ translateX: squareCount + "%" }, {
  //     duration: 10
  //   });
  // });

  // squareLoader.on( 'done', function() {
  //   loaderBg.velocity({ translateX: "100%" }, {
  //     duration: 300,
  //     easing: "swing"
  //   });
  //   loader.velocity({ scale: [ 0.2, 1 ], translateZ: 0 }, {
  //     delay: 400,
  //     duration: 600,
  //     easing: "easeInOutQuad"
  //   });
  //   waffle.velocity('transition.waffleIn', {
  //     delay: 500,
  //     duration: 1700,
  //     display: null
  //   });
  //   square.velocity('transition.squareIn', {
  //     delay: 500,
  //     duration: 1000,
  //     stagger: 35,
  //     drag: true,
  //     display: null,
  //     complete: function() {
  //       html.addClass('intro--done')
  //     }
  //   });
  // });

});