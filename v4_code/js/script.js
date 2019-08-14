/**************************************************
    MORE: TOGGLE
**************************************************/
$(document).ready(function () {
    $("#moreTrigger").click(function () {
      $(".button").toggleClass("active"); /* rotate */
      $(".dot1").toggleClass("active"); /* spiral */
      $(".dot2").toggleClass("active");
      $(".dot3").toggleClass("active");
      $(".dot4").toggleClass("active");

      $("#backDrop").toggleClass("active"); /* overlay */
      $("#overlay").toggleClass("active"); /* outline */
      $(".more").toggleClass("active"); /* copy */
    });
  });
