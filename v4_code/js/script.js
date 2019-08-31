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
  $(".coke h2").mouseenter(function() {
    $("body").css("background-image", "radial-gradient(#F21919, #FF6868)");

    $(".coke h2").css("color", "#FAFAFC");
    $(".coke h4").css("color", "#FAFAFC");
    $("#projects h1").css("color", "#FAFAFC");

    $(".top").css("opacity", "0.2");
    $(".tp").css("opacity", "0.2");
    $(".italia").css("opacity", "0.2");
    $("#experience").css("opacity", "0.2");
    $("#moreBar").css("opacity", "0.2");
  });
  $(".coke h2").mouseleave(function() {
    $("body").css("background-image", "radial-gradient(#F0F0F2, #FAFAFC)");

    $(".coke h2").css("color", "#16161A");
    $(".coke h4").css("color", "#7E7E80");
    $("#projects h1").css("color", "#16161A");

    $(".top").css("opacity", "1");
    $(".tp").css("opacity", "1");
    $(".italia").css("opacity", "1");
    $("#experience").css("opacity", "1");
    $("#moreBar").css("opacity", "1");
  });

  $(".tp h2").mouseenter(function() {
    $("body").css("background", "radial-gradient(#2B65D9, #5FDFE9)");

    $(".tp h2").css("color", "#FAFAFC");
    $(".tp h4").css("color", "#FAFAFC");
    $("#projects h1").css("color", "#FAFAFC");

    $(".top").css("opacity", "0.2");
    $(".coke").css("opacity", "0.2");
    $(".italia").css("opacity", "0.2");
    $("#experience").css("opacity", "0.2");
    $("#moreBar").css("opacity", "0.2");
  });
  $(".tp h2").mouseleave(function() {
    $("body").css("background", "radial-gradient(#F0F0F2, #FAFAFC))");

    $(".tp h2").css("color", "#16161A");
    $(".tp h4").css("color", "#7E7E80");
    $("#projects h1").css("color", "#16161A");

    $(".top").css("opacity", "1");
    $(".coke").css("opacity", "1");
    $(".italia").css("opacity", "1");
    $("#experience").css("opacity", "1");
    $("#moreBar").css("opacity", "1");
  });

  $(".italia h2").mouseenter(function() {
    $("body").css("background", "radial-gradient(#0D0D0D, #404040)");

    $(".italia h2").css("color", "#FAFAFC");
    $(".italia h4").css("color", "#FAFAFC");
    $("#projects h1").css("color", "#FAFAFC");

    $(".top").css("opacity", "0.2");
    $(".coke").css("opacity", "0.2");
    $(".tp").css("opacity", "0.2");
    $("#experience").css("opacity", "0.2");
    $("#moreBar").css("opacity", "0.2");
  });
  $(".italia h2").mouseleave(function() {
    $("body").css("background", "radial-gradient(#F0F0F2, #FAFAFC)");

    $(".italia h2").css("color", "#16161A");
    $(".italia h4").css("color", "#7E7E80");
    $("#projects h1").css("color", "#16161A");

    $(".top").css("opacity", "1");
    $(".coke").css("opacity", "1");
    $(".tp").css("opacity", "1");
    $("#experience").css("opacity", "1");
    $("#moreBar").css("opacity", "1");
  });
});
