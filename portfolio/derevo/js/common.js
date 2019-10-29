$(document).ready(function() {

	 $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });

   $("#owl-price-left").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });

   $("#owl-price-right").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });

$(".sandwich").click(function() {
  $(".sandwich").toggleClass("active");
});

$(".top-menu ul a").click(function() {
        $(".top-menu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".over-main-slider").css("opacity", ".5");
    });

    //вызов выпадающего меню
    $(".toggle-menu").click(function() {
        if ($(".top-menu").is(":visible")) {
            $(".top-menu").fadeOut(600);
            $(".top-menu li a").removeClass("fadeInUp animated");
        } else {
            $(".top-menu").fadeIn(600);
            $(".top-menu li a").addClass("fadeInUp animated");
        };
    });
	
});