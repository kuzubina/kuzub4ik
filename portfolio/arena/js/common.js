$(document).ready(function() {

	$("#main-slider").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

$(".sandwich").click(function() {
  $(".sandwich").toggleClass("active");
});

$(".menu-item-wrap").hover(function() {
     $(".item-1, .item-2, .item-3").animated("zoomIn");
 });


function heightDetect() {
		$(".mob-nav-wrap").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});


function widthDetect() {
		$(".mob-nav-wrap").css("width", $(window).width());
	};
	widthDetect();
	$(window).resize(function() {
		widthDetect();
	});

$(".sandwich").click(function(){  
	var wwwidth = $(window).width();
   if ($(".mob-nav-wrap").is(':visible')){
    $(".mob-nav-wrap").animate({'left': '-1280px' },250);
    $(".mob-nav-wrap").hide(250);
    $(".toggle-menu").css("position", "absolute");
      $(".head-logo").css("position", "relative");
   } else{
      $(".mob-nav-wrap").css("display", "block");
      $(".mob-nav-wrap").animate({'left': '0' },250);
      $(".toggle-menu").css("position", "fixed");
      $(".head-logo").css("position", "fixed");
   }
	});


 
  var owl = $(".ticket-line");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 1],
        [450, 1],
        [568, 2],
        [700, 3],
        [1000, 4],
        [1200, 5],
        [1400, 5],
        [1600, 7]
      ],
      autoPlay: 2000,
      loop: true
 
  });

    var owl = $(".games-line");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 2],
        [700, 2],
        [1000, 3],
        [1200, 4],
        [1400, 4],
        [1600, 5]
      ],
      autoPlay: 3000,
      loop: true
 
  });


  $(window).scroll(function() {     
        if($(this).scrollTop() > 870) {         
        $('.plav-bar').fadeIn(100);        
        } else {         
        $('.plav-bar').fadeOut(100);        
        }                     
    }); 
 
 $("#popup-wrap").hover(function() {
 	if ($(".timing-popup").is(':visible')){
    $(".timing-popup").css("display", "none");
   } else{
      $(".timing-popup").css("display", "block");
   }
 });
  
$(".mob-nav-row").click(function(){  
    var list = $(this).children(".mob-drop");
    var parentList = $(this).parent();
    var arrow = $(this).children(".arrow-down");
   if ($(list).is(':visible')){
   	   $(".mob-drop").slideUp();
       $(list).slideUp();
       $(parentList).css('transition', 'all 1.2s');
       $(arrow).addClass("back-transform");
       $(arrow).removeClass("transform");
       $(".arrow-down").removeClass("transform");
   	   $(".arrow-down").addClass("back-transform");
   	   $(".mob-nav-row").css("color", "#ffffff");
   } else{
   	  $(".mob-drop").slideUp();
      $(list).slideDown();
      $(parentList).css('transition', 'all 0s');
      $(".arrow-down").removeClass("transform");
   	   $(".arrow-down").addClass("back-transform");
      $(arrow).addClass("transform");
      $(arrow).removeClass("back-transform");
      $(".mob-nav-row").css("color", "#ffffff");
      $(this).css("color", "#e95925");
   }
   });

	
});