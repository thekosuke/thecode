/**************************************************
    ICON SCROLL HIDE AFTER SCROLL
**************************************************/
$(window).scroll(function() {
    if ($(this).scrollTop()>0) {
		$('.icon-scroll').fadeOut();
	}
    else {
		$('.icon-scroll').fadeIn();
	}
});

/**************************************************
    TYPING ON LANDING SCREEN
**************************************************/
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  // var delta = 300 - Math.random() * 1000;
  var delta = 300 - 2.55 * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};





/**************************************************
    SIDEBAR + OVERLAY TOGGLE
**************************************************/
$(".menu-link").click(function() {
    $("#menu").toggleClass("active");
    $("#overlay").fadeToggle("active");
    $("#overlay").toggleClass("active");
});

$("#overlay").click(function() {
    $("#menu").toggleClass("active");
    $("#overlay").fadeToggle("active");
    $("#overlay").toggleClass("active");
});

/**************************************************
    CONNECT + CLOSE TOGGLE
**************************************************/
$(document).ready(function () {
    $("#openbtn").click(function () {
        $(".menu-link").fadeOut(0, function () {
            $(".menu-link").text(($(".menu-link").text() == 'Connect') ? 'Close' : 'Connect').fadeIn(0);
        })
    })

    $("#overlay").click(function () {
        $(".menu-link").fadeOut(0, function () {
            $(".menu-link").text(($(".menu-link").text() == 'Connect') ? 'Close' : 'Connect').fadeIn(0);
        })
    })
});





/**************************************************
    MORE PIECES - HOVER INTERACTION
**************************************************/
$(".piece-npr").mouseenter(function() {
    $("#project-section6").css("background", "#3D68B1");
    $(".piece-npr-tag").css("color", "#efeff0");
    $(".piece-layers").css("color", "#3D68B1");
    $(".piece-layers-tag").css("color", "#3D68B1");
    $(".piece-coc").css("color", "#3D68B1");
    $(".piece-coc-tag").css("color", "#3D68B1");
    $("#Oval6").css("fill", "#3D68B1");
});

$(".piece-npr").mouseleave(function() {
    $("#project-section6").css("background", "#3E3F3F");
    $(".piece-layers").css("color", "#efeff0");
    $(".piece-layers-tag").css("color", "#A2A4A6");
    $(".piece-coc").css("color", "#efeff0");
    $(".piece-coc-tag").css("color", "#A2A4A6");
    $("#Oval6").css("fill", "#3E3F3F");
});

$(".piece-layers").mouseenter(function() {
    $("#project-section6").css("background", "#C41E20");
    $(".piece-layers-tag").css("color", "#efeff0");
    $(".piece-coc").css("color", "#C41E20");
    $(".piece-coc-tag").css("color", "#C41E20");
    $(".piece-npr").css("color", "#C41E20");
    $(".piece-npr-tag").css("color", "#C41E20");
    $("#Oval6").css("fill", "#C41E20");
});

$(".piece-layers").mouseleave(function() {
    $("#project-section6").css("background", "#3E3F3F");
    $(".piece-layers-tag").css("color", "#A2A4A6");
    $(".piece-coc").css("color", "#efeff0");
    $(".piece-coc-tag").css("color", "#A2A4A6");
    $(".piece-npr").css("color", "#efeff0");
    $(".piece-npr-tag").css("color", "#A2A4A6");
    $("#Oval6").css("fill", "#3E3F3F");
});

$(".piece-coc").mouseenter(function() {
    $("#project-section6").css("background", "#ED1941");
    $(".piece-coc-tag").css("color", "#efeff0");
    $(".piece-layers").css("color", "#ED1941");
    $(".piece-layers-tag").css("color", "#ED1941");
    $(".piece-npr").css("color", "#ED1941");
    $(".piece-npr-tag").css("color", "#ED1941");
    $("#Oval6").css("fill", "#ED1941");
});

$(".piece-coc").mouseleave(function() {
    $("#project-section6").css("background", "#3E3F3F");
    $(".piece-coc-tag").css("color", "#A2A4A6");
    $(".piece-layers").css("color", "#efeff0");
    $(".piece-layers-tag").css("color", "#A2A4A6");
    $(".piece-npr").css("color", "#efeff0");
    $(".piece-npr-tag").css("color", "#A2A4A6");
    $("#Oval6").css("fill", "#3E3F3F");
});

/**************************************************
    PROJECT HOVER ON HOME PAGE   4E86E6
**************************************************/
$("#p-black").hover(
    function () {
        $("body").css("background", "#F1F0E4");
        $(".menu-link").css("color", "#EEEEEE");
        $("h2").css("color", "#EEEEEE");
        $("#p-blue h3").css("color", "#EEEEEE");
        $("#p-blue h4").css("color", "#EEEEEE");
        $("#p-blue .sentence").css("color", "#EEEEEE");
        $("#p-blue .view").css("color", "#EEEEEE");
        $("#p-red").css("opacity", "0");
        $("#p-pink").css("opacity", "0");

    }, function () {
        $("body").css("background", "linear-gradient(302deg, #FFFFFF, #EEEEEE)");
        $(".menu-link").css("color", "#575859");
        $("h2").css("color", "#575859");
        $("h3").css("color", "#575859");
        $("h4").css("color", "#A2A4A6");
        $(".sentence").css("color", "#7D7E80");
        $(".view").css("color", "#A2A4A6");
        $("#p-red").css("opacity", "1");
        $("#p-pink").css("opacity", "1");
    }
);

$("#p-blue").hover(
    function () {
        $("body").css("background", "#3D68B1");
        $(".menu-link").css("color", "#EEEEEE");
        $("h2").css("color", "#EEEEEE");
        $("#p-blue h3").css("color", "#EEEEEE");
        $("#p-blue h4").css("color", "#EEEEEE");
        $("#p-blue .sentence").css("color", "#EEEEEE");
        $("#p-blue .view").css("color", "#EEEEEE");
        $("#p-red").css("opacity", "0");
        $("#p-pink").css("opacity", "0");

    }, function () {
        $("body").css("background", "linear-gradient(302deg, #FFFFFF, #EEEEEE)");
        $(".menu-link").css("color", "#575859");
        $("h2").css("color", "#575859");
        $("h3").css("color", "#575859");
        $("h4").css("color", "#A2A4A6");
        $(".sentence").css("color", "#7D7E80");
        $(".view").css("color", "#A2A4A6");
        $("#p-red").css("opacity", "1");
        $("#p-pink").css("opacity", "1");
    }
);

$("#p-red").hover(
    function () {
        $("body").css("background", "#C41E20");
        $(".menu-link").css("color", "#EEEEEE");
        $("h2").css("color", "#EEEEEE");
        $("#p-red h3").css("color", "#EEEEEE");
        $("#p-red h4").css("color", "#EEEEEE");
        $("#p-red .sentence").css("color", "#EEEEEE");
        $("#p-red .view").css("color", "#EEEEEE");
        $("#p-blue").css("opacity", "0");
        $("#p-pink").css("opacity", "0");
    }, function () {
        $("body").css("background", "linear-gradient(302deg, #FFFFFF, #EEEEEE)");
        $(".menu-link").css("color", "#575859");
        $("h2").css("color", "#575859");
        $("h3").css("color", "#575859");
        $("h4").css("color", "#A2A4A6");
        $(".sentence").css("color", "#7D7E80");
        $(".view").css("color", "#A2A4A6");
        $("#p-blue").css("opacity", "1");
        $("#p-pink").css("opacity", "1");
    }
);

$("#p-pink").hover(
    function () {
        $("body").css("background", "#ED1941");
        $(".menu-link").css("color", "#EEEEEE");
        $("h2").css("color", "#EEEEEE");
        $("#p-pink h3").css("color", "#EEEEEE");
        $("#p-pink h4").css("color", "#EEEEEE");
        $("#p-pink .sentence").css("color", "#EEEEEE");
        $("#p-pink .view").css("color", "#EEEEEE");
        $("#p-blue").css("opacity", "0");
        $("#p-red").css("opacity", "0");
        $("#footer-links").css("background", "none");
    }, function () {
        $("body").css("background", "linear-gradient(302deg, #FFFFFF, #EEEEEE)");
        $(".menu-link").css("color", "#575859");
        $("h2").css("color", "#575859");
        $("h3").css("color", "#575859");
        $("h4").css("color", "#A2A4A6");
        $(".sentence").css("color", "#7D7E80");
        $(".view").css("color", "#A2A4A6");
        $("#p-blue").css("opacity", "1");
        $("#p-red").css("opacity", "1");
        $("#footer-links").css("background", "#575859");
    }
);

/**************************************************
    CREDITS FADE IN + ICON SCROLL FADE OUT
**************************************************/
$("#creditbtn").click(function() {
    $("#credits").fadeToggle("active");
    $('.icon-scroll').fadeOut();
});

$("#credits").click(function() {
    $("#credits").fadeToggle("active");
    $('.icon-scroll').fadeIn();
});

$( window ).scroll( function() {
    if ( $( this ).scrollTop() > 300 ) {
        $( '.back-to-top' ).addClass( 'show-back-to-top' );
    } else {
        $( '.back-to-top' ).removeClass( 'show-back-to-top' );
    }
});

/**************************************************
    CLICK TO SCROLL TO TOP
**************************************************/
$( '.back-to-top' ).click( function() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 300 );
    return false;
});