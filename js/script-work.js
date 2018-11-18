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
