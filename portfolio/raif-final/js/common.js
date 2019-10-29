$(document).ready(function() {
	$('#fullpage').fullpage({
		navigation: true,
		navigationPosition: 'left',
		navigationTooltips: ['', '', ''],
		normalScrollElements: '.faq-shadow',
		'afterLoad': function(anchorLink, index){
					if(index == 1){
						$('.left-player').addClass('animated slideInLeft visible');
						$('.right-player').addClass('animated slideInRight visible');
						$('.section-intro1').addClass('animated slideInDown visible');
						$('.section_1_wrap').addClass('animated fadeIn visible');
					}
					if(index == 2){
						$('.hand').addClass('animated slideInUp visible');
						$('.section-intro2').addClass('animated slideInDown visible');
					}
					if(index == 3){
						$('.skates').addClass('animated slideInRight visible');
						$('.phone').addClass('animated slideInUp visible');
						$('.shaiba').addClass('animated slideInLeft visible');
						$('.glove').addClass('animated slideInDown visible');
						$('.date-info').addClass('animated fadeIn visible');
					}
				},
	});

	$(".toggle-menu").click(function(){  
       if ($(".mob-nav").is(':visible')){
       	  $(".mob-nav").hide();
       	  $(".licenze").css("display","none");
       } else{
          $(".mob-nav").show();
          $(".licenze").css("display","block");
       }
       });

		$(".faq, .mob-faq").click(function(){  
       		 $(".faq-shadow").show();
       		 $(".faq-wrap").slideDown(500);
       });
		$(".close-faq, .faq-back, .mob-faq-back").click(function(){  
       		 $(".faq-shadow").hide();
       		 $(".faq-wrap").slideUp();
       });

 $(".faq-shadow").niceScroll(".faq-wrap",{cursorcolor:"#FFFFFF", hwacceleration:false, touchbehavior:true}); 

	$(".sandwich").click(function() {
  $(".sandwich").toggleClass("active");
});

	$(".close-faq").mouseover(function(){  
        $(".close-faq").addClass("transform-close");
       });
	$(".close-faq").mouseout(function(){  
        $(".close-faq").removeClass("transform-close");
       });


function centerNav() {
        mainH = $(".nav-bar").width();
        logoH = $("#fp-nav").width();
        logoDel = logoH/2;
        mainDel = mainH / 2;
        logoMargin = mainDel - logoDel;
        $("#fp-nav").css("left", logoMargin); 
    };
    centerNav();
    $(window).resize(function() {
        centerNav();
    });




	
});