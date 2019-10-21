/**************************************************
    ANIMATE ON SCROLL
**************************************************/
$(window).scroll(function(){
  $("#about").css("opacity", 1 - $(window).scrollTop() / 700);
  $("#hello").css("opacity", 1 - $(window).scrollTop() / 700);
});

/**************************************************
    PRELOADER: FADE OUT
**************************************************/
$(window).load(function() {
  $('#loader').delay(3000).fadeOut("slow");
});

$(document).ready(function() {
  $('#project-loader').delay(1000).slideUp(1000);
  $('.loading').delay(1000).fadeOut(1000);
});

/**************************************************
    SCROLL TO TOP AFTER REFRESH
**************************************************/
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

/**************************************************
    SCROLL INDICATOR
**************************************************/
window.onscroll = function() { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

/**************************************************
    BACK TO TOP
**************************************************/
$(document).ready(function() {
  $('.back-to-top').click(function() {
    $('html, body').animate( {
      scrollTop : 0
    }, 750);
    return false;
  });
});
