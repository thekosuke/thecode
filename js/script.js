/**************************************************
    SCROLL TO TOP AFTER REFRESH
**************************************************/
// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }

/**************************************************
    REMOVE # FROM URL
**************************************************/
$(document).ready(function() {
  const menuBtn = $('.side-nav li a');

  menuBtn.click(()=>{
    setTimeout(()=>{
      removeHash();
    }, 5);
  });

  function removeHash(){
    history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
  }
});

/**************************************************
    SMOOTH SCROLLING FOR SIDE NAV
**************************************************/
$(document).ready(function() {
  window.addEventListener("DOMContentLoaded", () => {
  	const observer = new IntersectionObserver((entries) => {
  		entries.forEach((entry) => {
  			const id = entry.target.getAttribute("id");
  			if (entry.intersectionRatio > 0) {
  				document
  					.querySelector(`.side-nav li li a[href="#${id}"]`)
  					.parentElement.classList.add("active");
  			} else {
  				document
  					.querySelector(`.side-nav li li a[href="#${id}"]`)
  					.parentElement.classList.remove("active");
  			}
  		});
  	});

  	document.querySelectorAll("section[id]").forEach((section) => {
  		observer.observe(section);
  	});
  });
});
