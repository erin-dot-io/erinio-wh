$(document).ready(function() {

  var photoPost = $("body.page--photo-post");

  if (photoPost.length) {

    // PhotoSwipe
    var $pswp = $('.pswp')[0];
    var image = [];

    $(this).find('.post-gallery__items').each(function() {
      var $pic   = $(this),
        getItems = function() {
          var items = [];
          $pic.find('a').each(function() {
            var $href   = $(this).attr('href'),
                $msrc   = $(this).find('.image-thumb').attr('data-src'),
                $thumb  = $(this).find('.image-thumb'),
                $size   = $(this).data('size').split('x'),
                $width  = $size[0],
                $height = $size[1];

            var item = {
                src   : $href,
                w     : $width,
                h     : $height,
                msrc  : $msrc,
                thumb : $thumb,
                first : false,
                last  : false
            }

            if ($(this).parent().is(':first-child')) {
              item.first = true
            }
            if ($(this).parent().is(':last-child')) {
              item.last = true
            }

            // console.log(item);

            items.push(item);
          });
          return items;
        }

      var items = getItems();

      var $pswp = $('.pswp')[0];
      $pic.on('click', 'figure', function(event) {
        event.preventDefault();

        var $index = $(this).index();
        var options = {
          index: $index,
          shareEl: false,
          loop: false,
          zoomEl: false,
          history: false,
          preload: [0,1],
          getThumbBoundsFn: function(index) {

            // find thumbnail element
            var thumbnail = $pic.find('.image-thumb')[index];

            // get window scroll Y
            var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
            // optionally get horizontal scroll

            // get position of element relative to viewport
            var rect = thumbnail.getBoundingClientRect();

            // w = width
            return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};


            // Good guide on how to get element coordinates:
            // http://javascript.info/tutorial/coordinates
          }
        }

        // Initialize PhotoSwipe
        var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
        lightBox.init();
      });

    });

  }

});