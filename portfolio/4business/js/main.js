$(document).ready(function() {

$(window).scroll(function() {
if ($(this).scrollTop() > 200){
    $(".header").addClass('sticky');
}
else{
    $(".header").removeClass('sticky');
}
});


$('.practics-slider-wrapper').slick({
    infinite: false,
    autoplay: true,
    dots: true,
    arrows: true,
    draggable: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    dotsClass: 'custom_paging',
    customPaging: function (slider, i) {
        console.log(slider);
        var slideNumber = (i + 1),
            totalSlides = slider.slideCount;
        return '<div class="string"><span class="current-slick-item">' + slideNumber + '</span> / ' + totalSlides + '</div>';
    }
  });


$('.our-team__slider').slick({
  slidesToShow: 3,
  infinite: false,
  arrows: false,
  dots: false,
  responsive: [
  {
      breakpoint: 901,
      settings: {
      	centerMode: true,
      	initialSlide: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '170px',
        focusOnSelect: true,
        arrows: true,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
      	centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '10px',
        focusOnSelect: true,
        initialSlide: 0,
        arrows: true,
        dots: true,
      }
    }
  ]
});


$(".flipper").flip({
  trigger: 'hover',
  reverse: true,
  speed: 300
});


$(document).on('opening', '.remodal', function () {
    console.log('opening');
  });


$("input[type='tel']").mask("7 (000) 000-00-00");


/*
var lastScrollTop = 0;
$(window).scroll(function(event){
var st = $(this).scrollTop();
if (st > lastScrollTop){
	$('.btn-up').hide();
} else {
   $('.btn-up').show();
}
lastScrollTop = st;
});


$(window).scroll(function() {
if ($(this).scrollTop() > 3800){
    $(".btn-up").removeClass('hidden');
} else {
   $(".btn-up").addClass('hidden');
}
});
*/


$('.btn-up').click(function() {
	$('body,html').animate({scrollTop:0},800);
});



$(document).on('input', 'input', function () {
	var number = $(this).val().length;
	var info = $(this).prev("label"); 
	if ( number > 0 ) {
		$(info).addClass('active'); 
	} else {
    $(info).removeClass('active'); 
  }
});


var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $(".advantages").position().top;

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop){
        // Scroll Down
        $('.btn-up').addClass('hidden');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height() && st + $(window).height() > navbarHeight) {
          $('.btn-up').removeClass('hidden');  
        } else {
          $('.btn-up').addClass('hidden');
        }
    }
    
    lastScrollTop = st;
}

});