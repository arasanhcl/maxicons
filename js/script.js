$(document).ready(function() {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
      $("nav.navbar").addClass("sticky-top");
    }
    else {
     $("nav.navbar").removeClass("sticky-top"); 
    }
  });
});
