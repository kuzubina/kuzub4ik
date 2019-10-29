$(document).ready(function() {

$(".sandwich").click(function() {
  $(".sandwich").toggleClass("active");
});

$('#main-slider').owlCarousel({
    loop:true,
    items: 1,
    dots: true,
})


$('.catalog-slider').owlCarousel({
    items:3,
    nav: true,
    dots: true,
    loop: true,
    responsive:{
        1024:{
            items:3,
            center: true,
            loop: true,
        },
        800:{
            items:3,
            center: true,
            loop: true,
        },
        480:{
            items:2,
            center: true,
            loop: true,
        },
        320:{
            items:1,
            center: true,
            loop: true,
        }
    }
});

$('.news-slide').owlCarousel({
    items:3,
    dots: true,
    loop: true,
    responsive:{
        1024:{
            items:3,
        },
        800:{
            items:3,
        },
        480:{
            items:2,
        },
        320:{
            items:1,
        }
    }
});





  (function($) {
    $.lockfixed(".menu-wrap",{offset: {top: 30, bottom: 10}});
})(jQuery); 

 jQuery(window).scroll(function() {     
        if(jQuery(this).scrollTop() > 500) {         
        jQuery('.top-btn').fadeIn();        
        } else {         
        jQuery('.top-btn').fadeOut();         
        }         
        });         
        jQuery('.top-btn').click(function() {         
        jQuery('body,html').animate({scrollTop:0},600);     
    });



$(".mob-name-item").click(function(){  
    var list = $(this).next(".open-item");
    var parentList = $(this).parent();
    var arrow = $(this).children(".arrow-down");
   if ($(list).is(':visible')){
       $(".open-item").slideUp();
       $(list).slideUp();
       $(parentList).css('transition', 'all 1.2s');
       $(arrow).addClass("back-transform");
       $(arrow).removeClass("transform");
       $(".arrow-down").removeClass("transform");
       $(".arrow-down").addClass("back-transform");
   } else{
      $(".open-item").slideUp();
      $(list).slideDown();
      $(parentList).css('transition', 'all 0s');
      $(".arrow-down").removeClass("transform");
       $(".arrow-down").addClass("back-transform");
      $(arrow).addClass("transform");
      $(arrow).removeClass("back-transform");
   }
   });

$(".toggle-menu").click(function(){  
     if ($(".mob-nav").is(':visible')){
      $(".mob-nav").animate({'right': '-500px' },500);
      $(".mob-nav").hide(500);
      $(".toggle-menu").removeClass("toggle-active");
      $(".darknes").css({'display': 'none' },500);
     } else{
        $(".mob-nav").css("display", "block");
        $(".mob-nav").animate({'right': '0' },500);
        $(".toggle-menu").addClass("toggle-active");
        $(".darknes").css({'display': 'block' },500);
     }
    });
	
});