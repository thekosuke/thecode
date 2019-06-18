/**************************************************
SCROLL TO TOP AFTER REFRESH
**************************************************/
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

/**************************************************
PRELOADER FADE OUT
**************************************************/
$(window).load(function() {
  $('#loader').fadeOut("slow");
});

/**************************************************
SMOOTH SCROLL
**************************************************/
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
});

/**************************************************
WAYPOINT
**************************************************/
$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Assign active class to nav links while scolling
		$('.phase-container').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.anchor.active').removeClass('active');
						$('.anchor').eq(i).addClass('active');
				}
		});
}).scroll();

/**************************************************
BACK TO TOP
**************************************************/
$(document).ready(function() {
  $(window).scroll( function() {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').addClass('show-back-to-top');
    } else {
      $('.back-to-top').removeClass('show-back-to-top');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate( {
      scrollTop : 0
    }, 500);
    return false;
  });
});
