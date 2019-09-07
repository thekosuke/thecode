/**************************************************
    SCROLL TO TOP AFTER REFRESH
**************************************************/
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

/**************************************************
    PRELOADER: FADE OUT
**************************************************/
$(window).load(function() {
  $('#loader').delay(3000).fadeOut("slow");
});

$(window).load(function() {
  $('#project-loader').delay(1000).slideUp(1000);
  $('.loading').delay(1000).fadeOut(1000);
});

/**************************************************
    MORE: TOGGLE
**************************************************/
$(document).ready(function () {
    $("#moreBar").click(function () {
      $("#moreBar").toggleClass("active");
      $("#moreContent").toggleClass("active");
      $('#overlay').toggleClass("active");

      $(".button").toggleClass("active"); /* rotate */
      $(".dot1").toggleClass("active"); /* spiral */
      $(".dot2").toggleClass("active");
      $(".dot3").toggleClass("active");
      $(".dot4").toggleClass("active");
      $(".dot5").toggleClass("active");
    });
    $('#overlay').click(function(){
      $("#moreBar").toggleClass("active");
      $("#moreContent").toggleClass("active");
      $('#overlay').toggleClass("active");

      $(".button").toggleClass("active"); /* rotate */
      $(".dot1").toggleClass("active"); /* spiral */
      $(".dot2").toggleClass("active");
      $(".dot3").toggleClass("active");
      $(".dot4").toggleClass("active");
      $(".dot5").toggleClass("active");
    });
});

/**************************************************
    PROJECT: HOVER
**************************************************/
$(document).ready(function() {
  $(".coke h2 a").mouseenter(function() {
    $(".coke-bg").css("opacity", "1");

    $(".coke h2 a").css("color", "#FAFAFC");
    $(".coke h3").css("color", "#FAFAFC");
    $("#projects h1").css("color", "#FAFAFC");

    $(".top").css("opacity", "0");
    $(".tp").css("opacity", "0");
    $(".italia").css("opacity", "0");
    $("#experience").css("opacity", "0");
    $("#moreBar").css("opacity", "0");
  });
  $(".coke h2 a").mouseleave(function() {
    $(".coke-bg").css("opacity", "0");

    $(".coke h2 a").css("color", "#FAFAFC");
    $(".coke h3").css("color", "#A4A4A6");
    $("#projects h1").css("color", "#FAFAFC");

    $(".top").css("opacity", "1");
    $(".tp").css("opacity", "1");
    $(".italia").css("opacity", "1");
    $("#experience").css("opacity", "1");
    $("#moreBar").css("opacity", "1");
  });

  $(".tp h2 a").mouseenter(function() {
    $(".tp-bg").css("opacity", "1");

    $(".tp h2 a").css("color", "#FAFAFC");
    $(".tp h3").css("color", "#FAFAFC");
    $("#projects h1").css("color", "#FAFAFC");

    $(".top").css("opacity", "0");
    $(".coke").css("opacity", "0");
    $(".italia").css("opacity", "0");
    $("#experience").css("opacity", "0");
    $("#moreBar").css("opacity", "0");
  });
  $(".tp h2 a").mouseleave(function() {
    $(".tp-bg").css("opacity", "0");

    $(".tp h2 a").css("color", "#FAFAFC");
    $(".tp h3").css("color", "#A4A4A6");
    $("#projects h1").css("color", "#FAFAFC");

    $(".top").css("opacity", "1");
    $(".coke").css("opacity", "1");
    $(".italia").css("opacity", "1");
    $("#experience").css("opacity", "1");
    $("#moreBar").css("opacity", "1");
  });

  $(".italia h2 a").mouseenter(function() {
    $(".italia-bg").css("opacity", "1");

    $(".italia h2 a").css("color", "#FAFAFC");
    $(".italia h3").css("color", "#FAFAFC");
    $("#projects h1").css("color", "#FAFAFC");

    $(".top").css("opacity", "0");
    $(".coke").css("opacity", "0");
    $(".tp").css("opacity", "0");
    $("#experience").css("opacity", "0");
    $("#moreBar").css("opacity", "0");
  });
  $(".italia h2 a").mouseleave(function() {
    $(".italia-bg").css("opacity", "0");

    $(".italia h2 a").css("color", "#FAFAFC");
    $(".italia h3").css("color", "#A4A4A6");
    $("#projects h1").css("color", "#FAFAFC");

    $(".top").css("opacity", "1");
    $(".coke").css("opacity", "1");
    $(".tp").css("opacity", "1");
    $("#experience").css("opacity", "1");
    $("#moreBar").css("opacity", "1");
  });
});

/**************************************************
BACK TO TOP
**************************************************/
$(document).ready(function() {
  $('.back-to-top').click(function() {
    $('html, body').animate( {
      scrollTop : 0
    }, 500);
    return false;
  });
});
