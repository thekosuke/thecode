/**************************************************
SCROLL TO TOP AFTER REFRESH
**************************************************/
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

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
DISABLE CONTEXT MENU ON LONG TAPS ON MOBILE
**************************************************/

function absorbEvent_(event) {
  var e = event || window.event;
  e.preventDefault && e.preventDefault();
  e.stopPropagation && e.stopPropagation();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
}

function preventLongPressMenu(node) {
  node.ontouchstart = absorbEvent_;
  node.ontouchmove = absorbEvent_;
  node.ontouchend = absorbEvent_;
  node.ontouchcancel = absorbEvent_;
}

function init() {
  preventLongPressMenu(document.getElementById('main-page'));
}

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


/**************************************************
LEARN MORE
**************************************************/
$(document).ready(function() {
  function scrollToAnchor(aid){
    var aTag = $("iframe");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }

  $(".waves a").click(function() {
    scrollToAnchor('iframe');
  });
});

/*//////////////////// ///////////////////////
WAVE HOVER
//////////////////// ///////////////////////*/
$(document).ready(function() {
  $(".waves a").mouseenter(function() {
    $(".waves a svg").css("filter", "blur(15px)");
    $(".portal").css("opacity", "1");
  });

  $(".waves a").mouseleave(function() {
    $(".waves a svg").css("filter", "blur(0px)");
    $(".portal").css("opacity", "0");
  });

  $(".waves02 a").mouseenter(function() {
    $(".waves02 a svg").css("filter", "blur(15px)");
    $(".portal02").css("opacity", "1");
  });

  $(".waves02 a").mouseleave(function() {
    $(".waves02 a svg").css("filter", "blur(0px)");
    $(".portal02").css("opacity", "0");
  });

  $('.waves a').bind('touchstart', function(e){
    $(".waves a svg").css("filter", "blur(15px)");
    $(".portal").css("opacity", "1");
  }).bind('touchend', function(e){
    $(".waves a svg").css("filter", "blur(0px)");
    $(".portal").css("opacity", "0");
  });

  $('.waves02 a').bind('touchstart', function(e){
    $(".waves02 a svg").css("filter", "blur(15px)");
    $(".portal").css("opacity", "1");
  }).bind('touchend', function(e){
    $(".waves02 a svg").css("filter", "blur(0px)");
    $(".portal").css("opacity", "0");
  });
});

/*//////////////////// ///////////////////////
FULLPAGE
//////////////////// ///////////////////////*/
$(document).ready(function() {
  $('#fullpage').fullpage({
    autoScrolling: true,
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    anchors:['-', '_'],
    recordHistory: false,
  });
});

/*//////////////////// ///////////////////////
PROJECT BOX HOVER
//////////////////// ///////////////////////*/
$(document).ready(function() {
  $(".project-box").mouseenter(function() {
    $(".project-box").not(this).css("opacity", ".1");
    $(".color-frame").not(this).css("opacity", "0");
    $(".bottom-link").css("opacity", "0");
    $(".waves02").css("opacity", "0");
  });

  $(".project-box").mouseleave(function() {
    $(".project-box").css("opacity", "1");
    $(".color-frame").not(this).css("opacity", "1");
    $(".bottom-link").css("opacity", "1");
    $(".waves02").css("opacity", "1");
  });

  $(".project-box").mouseup(function() {
    $(".project-box").css("opacity", "1");
    $(".color-frame").not(this).css("opacity", "1");
    $(".bottom-link").css("opacity", "1");
    $(".waves02").css("opacity", "1");
  });

  $('.project-box').bind('touchstart', function(e){
    $(".project-box").not(this).css("opacity", ".1");
    $(".color-frame").not(this).css("opacity", "0");
    $(".bottom-link").css("opacity", "0");
    $(".waves02").css("opacity", "0");
  }).bind('touchend', function(e){
    $(".project-box").css("opacity", "1");
    $(".color-frame").not(this).css("opacity", "1");
    $(".bottom-link").css("opacity", "1");
    $(".waves02").css("opacity", "1");
  });
});

/*//////////////////// ///////////////////////
PROJECT BOX HOVER COLOR + COPY
//////////////////// ///////////////////////*/
$(document).ready(function() {
  $("#project-italia").mouseenter(function() {
    $("body").css("background-color", "#F1F0E4");
    $("#p01-copy").css("opacity", "1");
    $("#italiaHover p").css("opacity", "1");
    $("#italiaHover h2").addClass("active");
    $("#italiaHover .preview-image").addClass("active");
  });
  $("#project-room").mouseenter(function() {
    $("body").css("background-color", "#02A686");
    $("#p02-copy").css("opacity", "1");
    $("#roomHover p").css("opacity", "1");
    $("#roomHover h2").addClass("active");
    $("#roomHover .preview-image").addClass("active");
  });
  $("#project-npr").mouseenter(function() {
    $("body").css("background-color", "#3D68B1");
    $("#p03-copy").css("opacity", "1");
    $("#nprHover p").css("opacity", "1");
    $("#nprHover h2").addClass("active");
    $("#nprHover .preview-image").addClass("active");
  });
  $("#project-layers").mouseenter(function() {
    $("body").css("background-color", "#C41E20");
    $("#p04-copy").css("opacity", "1");
    $("#layersHover p").css("opacity", "1");
    $("#layersHover h2").addClass("active");
    $("#layersHover .preview-image").addClass("active");
  });
  $("#project-game").mouseenter(function() {
    $("body").css("background-color", "#ED1942");
    $("#p05-copy").css("opacity", "1");
    $("#gameHover p").css("opacity", "1");
    $("#gameHover h2").addClass("active");
    $("#gameHover .preview-image").addClass("active");
  });



  $("#project-italia").mouseleave(function() {
    $("body").css("background-color", "#16161A");
    $("#p01-copy").css("opacity", "0");
    $("#italiaHover p").css("opacity", "0");
    $("#italiaHover h2").removeClass("active");
    $("#italiaHover .preview-image").removeClass("active");
  });
  $("#project-room").mouseleave(function() {
    $("body").css("background-color", "#16161A");
    $("#p02-copy").css("opacity", "0");
    $("#roomHover p").css("opacity", "0");
    $("#roomHover h2").removeClass("active");
    $("#roomHover .preview-image").removeClass("active");
  });
  $("#project-npr").mouseleave(function() {
    $("body").css("background-color", "#16161A");
    $("#p03-copy").css("opacity", "0");
    $("#nprHover p").css("opacity", "0");
    $("#nprHover h2").removeClass("active");
    $("#nprHover .preview-image").removeClass("active");
  });
  $("#project-layers").mouseleave(function() {
    $("body").css("background-color", "#16161A");
    $("#p04-copy").css("opacity", "0");
    $("#layersHover p").css("opacity", "0");
    $("#layersHover h2").removeClass("active");
    $("#layersHover .preview-image").removeClass("active");
  });
  $("#project-game").mouseleave(function() {
    $("body").css("background-color", "#16161A");
    $("#p05-copy").css("opacity", "0");
    $("#gameHover p").css("opacity", "0");
    $("#gameHover h2").removeClass("active");
    $("#gameHover .preview-image").removeClass("active");
  });



  $("#project-italia").mouseup(function() {
    $("body").css("background-color", "#16161A");
    $("#p01-copy").css("opacity", "0");
    $("#italiaHover p").css("opacity", "0");
    $("#italiaHover h2").removeClass("active");
    $("#italiaHover .preview-image").removeClass("active");
  });
  $("#project-room").mouseup(function() {
    $("body").css("background-color", "#16161A");
    $("#p02-copy").css("opacity", "0");
    $("#roomHover p").css("opacity", "0");
    $("#roomHover h2").removeClass("active");
    $("#roomHover .preview-image").removeClass("active");
  });
  $("#project-npr").mouseup(function() {
    $("body").css("background-color", "#16161A");
    $("#p03-copy").css("opacity", "0");
    $("#nprHover p").css("opacity", "0");
    $("#nprHover h2").removeClass("active");
    $("#nprHover .preview-image").removeClass("active");
  });
  $("#project-layers").mouseup(function() {
    $("body").css("background-color", "#16161A");
    $("#p04-copy").css("opacity", "0");
    $("#layersHover p").css("opacity", "0");
    $("#layersHover h2").removeClass("active");
    $("#layersHover .preview-image").removeClass("active");
  });
  $("#project-game").mouseup(function() {
    $("body").css("background-color", "#16161A");
    $("#p05-copy").css("opacity", "0");
    $("#gameHover p").css("opacity", "0");
    $("#gameHover h2").removeClass("active");
    $("#gameHover .preview-image").removeClass("active");
  });



  $("#project-italia").bind('touchstart', function(e){
    $("body").css("background-color", "#F1F0E4");
    $("#p01-copy").css("opacity", "1");
    $("#italiaHover p").css("opacity", "1");
    $("#italiaHover h2").addClass("active");
    $("#italiaHover .preview-image").addClass("active");
  }).bind('touchend', function(e){
    $("body").css("background-color", "#16161A");
    $("#p01-copy").css("opacity", "0");
    $("#italiaHover p").css("opacity", "0");
    $("#italiaHover h2").removeClass("active");
    $("#italiaHover .preview-image").removeClass("active");
  });
  $("#project-room").bind('touchstart', function(e){
    $("body").css("background-color", "#02A686");
    $("#p02-copy").css("opacity", "1");
    $("#roomHover p").css("opacity", "1");
    $("#roomHover h2").addClass("active");
    $("#roomHover .preview-image").addClass("active");
  }).bind('touchend', function(e){
    $("body").css("background-color", "#16161A");
    $("#p02-copy").css("opacity", "0");
    $("#roomHover p").css("opacity", "0");
    $("#roomHover h2").removeClass("active");
    $("#roomHover .preview-image").removeClass("active");
  });
  $("#project-npr").bind('touchstart', function(e){
    $("body").css("background-color", "#3D68B1");
    $("#p03-copy").css("opacity", "1");
    $("#nprHover p").css("opacity", "1");
    $("#nprHover h2").addClass("active");
    $("#nprHover .preview-image").addClass("active");
  }).bind('touchend', function(e){
    $("body").css("background-color", "#16161A");
    $("#p03-copy").css("opacity", "0");
    $("#nprHover p").css("opacity", "0");
    $("#nprHover h2").removeClass("active");
    $("#nprHover .preview-image").removeClass("active");
  });
  $("#project-layers").bind('touchstart', function(e){
    $("body").css("background-color", "#C41E20");
    $("#p04-copy").css("opacity", "1");
    $("#layersHover p").css("opacity", "1");
    $("#layersHover h2").addClass("active");
    $("#layersHover .preview-image").addClass("active");
  }).bind('touchend', function(e){
    $("body").css("background-color", "#16161A");
    $("#p04-copy").css("opacity", "0");
    $("#layersHover p").css("opacity", "0");
    $("#layersHover h2").removeClass("active");
    $("#layersHover .preview-image").removeClass("active");
  });
  $("#project-game").bind('touchstart', function(e){
    $("body").css("background-color", "#ED1942");
    $("#p05-copy").css("opacity", "1");
    $("#gameHover p").css("opacity", "1");
    $("#gameHover h2").addClass("active");
    $("#gameHover .preview-image").addClass("active");
  }).bind('touchend', function(e){
    $("body").css("background-color", "#16161A");
    $("#p05-copy").css("opacity", "0");
    $("#gameHover p").css("opacity", "0");
    $("#gameHover h2").removeClass("active");
    $("#gameHover .preview-image").removeClass("active");
  });
});
