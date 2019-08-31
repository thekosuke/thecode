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
