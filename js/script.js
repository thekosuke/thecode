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
    $("#cokeBG").css("opacity", "1");

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
    $("#cokeBG").css("opacity", "0");

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
    $("#tpBG").css("opacity", "1");

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
    $("#tpBG").css("opacity", "0");

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
    $("#italiaBG").css("opacity", "1");

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
    $("#italiaBG").css("opacity", "0");

    $(".italia h2 a").css("color", "#FAFAFC");
    $(".italia h3").css("color", "#A4A4A6");
    $("#projects h1").css("color", "#FAFAFC");

    $(".top").css("opacity", "1");
    $(".coke").css("opacity", "1");
    $(".tp").css("opacity", "1");
    $("#experience").css("opacity", "1");
    $("#moreBar").css("opacity", "1");
  });

  $(".rga h2 a").mouseenter(function() {
    $("#rgaBG").css("opacity", "1");

    $(".rga h2 a").css("color", "#FAFAFC");
    $(".rga h3").css("color", "#FAFAFC");
    $("#experience h1").css("color", "#FAFAFC");

    $(".top").css("opacity", "0");
    $(".iamota").css("opacity", "0");
    $(".instaread").css("opacity", "0");
    $("#projects").css("opacity", "0");
    $("#moreBar").css("opacity", "0");
  });
  $(".rga h2 a").mouseleave(function() {
    $("#rgaBG").css("opacity", "0");

    $(".rga h2 a").css("color", "#FAFAFC");
    $(".rga h3").css("color", "#A4A4A6");
    $("#experience h1").css("color", "#FAFAFC");

    $(".top").css("opacity", "1");
    $(".iamota").css("opacity", "1");
    $(".instaread").css("opacity", "1");
    $("#projects").css("opacity", "1");
    $("#moreBar").css("opacity", "1");
  });

  $(".instaread h2 a").mouseenter(function() {
    $("#instaBG").css("opacity", "1");

    $(".instaread h2 a").css("color", "#FAFAFC");
    $(".instaread h3").css("color", "#FAFAFC");
    $("#experience h1").css("color", "#FAFAFC");

    $(".top").css("opacity", "0");
    $(".iamota").css("opacity", "0");
    $(".rga").css("opacity", "0");
    $("#projects").css("opacity", "0");
    $("#moreBar").css("opacity", "0");
  });
  $(".instaread h2 a").mouseleave(function() {
    $("#instaBG").css("opacity", "0");

    $(".instaread h2 a").css("color", "#FAFAFC");
    $(".instaread h3").css("color", "#A4A4A6");
    $("#experience h1").css("color", "#FAFAFC");

    $(".top").css("opacity", "1");
    $(".iamota").css("opacity", "1");
    $(".rga").css("opacity", "1");
    $("#projects").css("opacity", "1");
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
    }, 750);
    return false;
  });
});
