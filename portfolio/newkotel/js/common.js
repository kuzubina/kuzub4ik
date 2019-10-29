function stickyFn(){

if(window.innerWidth < 1024)
  {
    $('.xl-tab-nav').unstick();
  }

}

$slickBenefits = false;
function benefitsSlider(){    
    if($(window).width() < 767){
        if(!$slickBenefits){
            $(".benefits-item-box").slick({
                dots: true,
                arrows: false,
                slidesToShow: 2,
                infinite: true,
            });
            $slickBenefits = true;
        }
    } else if($(window).width() > 767){
        if($slickBenefits){
            $('.benefits-item-box').slick('unslick');
            $slickBenefits = false;
        }
    }
};


function wrapperWidth() {
  var vw = $(window).width();
  var ww = $('.rezult-wrap').width() / 2;
  var tb = $('.rezult-table-wrap').outerWidth();
  var sz = (tb - ww + 40)*(-1)

  // var vwr = $('.rezult-wrap').width();
  // var emp = (vw - vwr) / 2
  // var empt = vwr - tb
  // var bg = (empt + emp) / 2

  // var sl = (tb/2) + emp

  var rzw = $('.rezult-wrap').width()
  var rz2 = (vw - rzw)/2
  var out = tb + rz2
  var outw = vw - out

  var sl = outw/2

  $('.show-slider').css('margin-right' , sz);
  // $('.rezult-slider-box').css('transform' , 'translateX(' + sl + 'px)');
  $('.rezult-slider-box').css('margin-right' ,  sl);

  // console.log(rzw + 'wrapper');
  // console.log(tb + 'table');
  // console.log(sz + 'button');
  // console.log(outw/2 + 'outw');
}









$(document).ready(function() {

  wrapperWidth();

	//вызов выпадающего меню
	$(".toggle-menu").click(function() {
		if ($(".mobile-nav-box").is(":visible")) {
			$(".mobile-nav-box").slideUp();
		} else {
			$(".mobile-nav-box").slideDown();
		};
	});

	$(".close-nav").click(function() {
		$(".mobile-nav-box").slideUp();
	});
	//конец вызова выпадающего меню

$('.top-index-slider').slick({
  slidesToShow: 1,
  infinite: true,
  autoplay: false,
  arrows: true,
  dots: true,
  fade: true,
	responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: false
      }
    }
  ]
});



$('.half-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  $('.half-slider .slick-active').removeClass("half-item");
  $(".half-slider .slick-active:eq(0)").addClass('half-item');
  $(".half-slider .slick-active:eq(1)").addClass('half-item');
});


$('.portfolio-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  $('.portfolio-slider .slick-active').removeClass("half-item");
  $(".portfolio-slider .slick-active:eq(0)").addClass('half-item');
  $(".portfolio-slider .slick-active:eq(1)").addClass('half-item');
});


$(".portfolio-slider").slick({
	slidesToShow: 1,
    slidesToScroll: 1,
	infinite: false,
	autoplay: false,
	arrows: true,
	dots: false,
	fade: true,
	responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        arrows: false,
        dots: true,
        fade: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true,
        fade: false
      }
    }
    ,
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        fade: false
      }
    }
  ]
});

$(".portfolio-slider .slick-active:eq(0)").addClass('half-item');
$(".portfolio-slider .slick-active:eq(1)").addClass('half-item');


$(".half-slider").slick({
    slidesToScroll: 1,
	infinite: false,
	autoplay: false,
	arrows: false,
	dots: true,
	responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    }
    ,
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

$(".half-slider .slick-active:eq(0)").addClass('half-item');
$(".half-slider .slick-active:eq(1)").addClass('half-item');


 jQuery("a.scrollto").click(function () {
  elementClick = jQuery(this).attr("href")
  destination = jQuery(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 111}, 1100);
  return false;
});



$(".change-model-box").click(function(){  
  var drop = $('.drop-wrap')
 if ($(drop).hasClass('drop-active')){
     $('.drop-arrow').removeClass('active-drop-arrow');
     $(drop).removeClass('drop-active');
     $(drop).slideUp();
 } else{
     $('.drop-arrow').addClass('active-drop-arrow');
     $(drop).addClass('drop-active');
     $(drop).slideDown();
 }
 });


$(".drop-value").click(function(){  
  var val = $(this).html();
  $('.drop-value').removeClass('active');
  $(this).addClass('active');
  $(".model-value").html(val);
  $('.drop-arrow').removeClass('active-drop-arrow');
  $('.drop-wrap').removeClass('drop-active');
  $('.drop-wrap').fadeOut(300);
 });




$(".plus-header").click(function(){  
  var list = $(this).next(".plus-body");
  var parentList = $(this).parent();
 if ($(parentList).hasClass('plus-active')){
     $(list).slideUp();
     $(parentList).removeClass("plus-active");
 } else{
    $(list).slideDown();
    $(parentList).addClass("plus-active");
 }
 });



$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
     e.target
     e.relatedTarget
     $('.slick-slider').slick('setPosition');
 });

/*
$('.benefits-item-box').slick({
    unslick: true,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        dots: true,
        infinite: false,
        arrow: false,
      }
    }
  ]
});
*/


$(".show-slider").click(function() {
  $($(this).parents(".rezult-case-row")).addClass('full-slider');
  $('.hide-slider').show();
});

$(".hide-slider").click(function() {
  $($(this).parents(".rezult-case-row")).removeClass('full-slider');
  $(this).hide();
});




$('.select-tab').on('change', function(e) {
    var $optionSelected = $("option:selected", this);
    $optionSelected.tab('show')
});





$(".spoiler-header").click(function(){  
  var list = $(this).next(".spoiler-body");
  var parentList = $(this).parent();
 if ($(parentList).hasClass('body-visible')){
     $(list).slideUp();
     $(parentList).removeClass("body-visible");
 } else{
    $(list).slideDown();
    $(parentList).addClass("body-visible");
 }
 });



$(".xl-tab-nav").sticky({topSpacing:111});
$(".xs-tab-nav").sticky({topSpacing:56});



$('.selectric').selectric({
  disableOnMobile: false,
  nativeOnMobile: false
 });


$('.select-cotel-item').on('change', function() {
    var parent = $(this).parents('.select-cotel-filed');
    var labl = $(parent).find('.field-label')
    $(labl).addClass("active-select-label");
    $(parent).addClass('white-bg')
  });



$(".news-slider").slick({
	slidesToShow: 4,
    slidesToScroll: 1,
	infinite: false,
	autoplay: false,
	arrows: true,
	dots: true,
	responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    }
  ]
});


$('.news-slider').each(function(){
  $(this).on('afterChange', function(event, slick, currentSlide, nextSlide){
    $(this).find('.slick-active').removeClass("half-item");
    $(this).find('.slick-active:eq(0)').addClass('half-item');
    $(this).find('.slick-active:eq(1)').addClass('half-item');
  });

  $(this).find('.slick-active:eq(0)').addClass('half-item');
  $(this).find('.slick-active:eq(1)').addClass('half-item');
});



$(".f-nav-header").click(function(){  
  var list = $(this).next(".f-nav");
  var parentList = $(this).parent();
 if ($(parentList).hasClass('nav-visible')){
     $(list).slideUp();
     $(parentList).removeClass("nav-visible");
 } else{
    $(".f-nav").slideUp();
    $(list).slideDown();
    $(parentList).addClass("nav-visible");
 }
 });




$(".related-product-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  autoplay: false,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    }
  ]
});




$('.single-slider').slick({
  slidesToShow: 1,
  infinite: true,
  autoplay: false,
  arrows: true,
  dots: false,
});




/*

if ($(window).width() < 1024) {
	 
	shotTxt();

}

*/


$('[data-fancybox]').fancybox({
  loop : false,
  thumbs : {
    showOnStart : true,
  }
})

$('[data-fancybox]').click(function(event) {
  $(".fancybox-button--thumbs").click();
});





stickyFn();

benefitsSlider();

	
});

/*
function shotTxt(){
	var size = 108,
	    newsContent= $('.short-txt'),
	    newsText = newsContent.text();
	    
	if(newsText.length > size){
		newsContent.text(newsText.slice(0, size) + ' ...');
	}
}
*/


function masterFix() {
  if ($(window).width() > 1200) {
   
    $(".sticky-item").stick_in_parent();

  }
}




$(window).on('load resize', function(){
     $(".half-slider .slick-active:eq(0)").addClass('half-item');
     $(".half-slider .slick-active:eq(1)").addClass('half-item');
	 $(".portfolio-slider .slick-active:eq(0)").addClass('half-item');
	 $(".portfolio-slider .slick-active:eq(1)").addClass('half-item');
	 $(".news-slider .slick-active:eq(0)").addClass('half-item');
	 $(".news-slider .slick-active:eq(1)").addClass('half-item');
	 $(".half-slider .slick-active:eq(0)").addClass('half-item');
	 $(".half-slider .slick-active:eq(1)").addClass('half-item');
   stickyFn();
   benefitsSlider();
   wrapperWidth();
   masterFix();
});





$('.number-slider').each(function(){
    
// start number-slider
var $gallery = $(this);
var slideCount = null;

$gallery.on('init', function(event, slick){
  slideCount = slick.slideCount;
  setSlideCount();
  setCurrentSlideNumber(slick.currentSlide);
});
$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  setCurrentSlideNumber(nextSlide);
});
function setSlideCount() {
  var $el = $($($gallery).next('.slide-count-wrap')).find('.total');
  $el.text(slideCount);
}
function setCurrentSlideNumber(currentSlide) {
  var $el = $($($gallery).siblings('.slide-count-wrap')).find('.current');
  $el.text(currentSlide + 1);
}

//end number-slider

});
