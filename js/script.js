// navigation starts here
$("#toggle").click(function() {
  $("#full-menu").toggleClass("active");
  $(".line").toggleClass("active");
  $("#toggle").toggleClass("active");
});

$("#resize ul li a").click(function() {
  $("#full-menu").toggleClass("active");
  $(".line").toggleClass("active");
  $("#toggle").toggleClass("active");
});
// navigation ends here

// tasto torna su
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 500) {
    $(".tornaSu").css("opacity", "1");
    $(".tornaSu").css("visibility", "visible");
  } else {
    $(".tornaSu").css("opacity", "0");
    $(".tornaSu").css("visibility", "hidden");
  }
});
