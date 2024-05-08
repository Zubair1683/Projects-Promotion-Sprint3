$(document).ready(function() {
  // When hovering over an image with the class 'imagebutton'
  $('.imagebutton').hover(function() {
    // Increase the image size on hover
    $(this).find('img').css({
      'transform': 'scale(1.05)', // Scale factor
      'transition': 'transform 0.5s ease' // Smooth transition
    });
  }, function() {
    // Restore the original size when mouse leaves
    $(this).find('img').css({
      'transform': 'scale(1)', // Original scale
      'transition': 'transform 0.5s ease' // Smooth transition
    });
  });
});

// If title visible show paragraph and hide title , if paragraph visible show title and hide paragraph when you clicked
$(document).ready(function() {
  $('.infobutton').click(function() {
      var $h1 = $('.ProjectVInfo h1');
      var $p = $('.ProjectVInfo p');

      if ($h1.hasClass('normal')) {
          $h1.removeClass('normal');
          $h1.addClass('hide');
          $('.infobutton').html('Back <i class="fa fa-refresh"></i>');
      } else {
          $h1.removeClass('hide');
          $h1.addClass('normal');
          $('.infobutton').html('Info <i class="fa fa-refresh"></i>');
      }

      if ($p.hasClass('normal')) {
          $p.removeClass('normal');
          $p.addClass('hide');
      } else {
          $p.removeClass('hide');
          $p.addClass('normal');
      }

      $('.ProjectVInfo').toggleClass('rotate');
      $('.infobutton').toggleClass('buttonrotate');
      $h1.toggleClass('rotate');
      $p.toggleClass('rotate');

  });
});
