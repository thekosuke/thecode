/**************************************************
    SCROLL TO TOP AFTER REFRESH
**************************************************/
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

/**************************************************
    REMOVE # FROM URL
**************************************************/
$(document).ready(function() {
  const menuBtn = $('.sideNav li a');

  menuBtn.click(()=>{
    setTimeout(()=>{
      removeHash();
    }, 5);
  });

  function removeHash(){
    history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
  }
});
