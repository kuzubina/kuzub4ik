$(document).ready(function() {

/*
$('.all-select').click(function(){ 
    var sel = $(".selected-box").find(".tab-pane");
    $(sel).addClass("active");
});
*/

$(".product-box").mixItUp();	

$('.like-box > .like-btn').click(function(){ 
	var valBox = $(this).siblings(".like-value");
    if ($(this).hasClass("active")) {
    	$(this).removeClass("active");
    	$(valBox).val($(valBox).val() - 1);
    } else {
    	$(this).addClass("active");
    	$(valBox).val(parseInt($(valBox).val()) + 1);
    }
});

 jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });


$(".read-more").click(function() {
var par = $(this).parent(".read-more-box");

if ($(par).hasClass("visible-txt")) {
	$(".txt-box").removeClass('read');
	$(this).text('Весь текст');
	$(par).removeClass("visible-txt");
} else {
	$(".txt-box").addClass('read');
    $(this).text('Скрыть');
    $(par).addClass("visible-txt");
}

});


$(window).scroll(function() {
if ($(this).scrollTop() > 450){
$('.header').addClass("sticky");
}
else{
$('header').removeClass("sticky");
}
});

$('body').scrollspy({ target: '.navbar-example' })
	
	$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})

$(".sandwich").click(function() {
  $(".sandwich").toggleClass("active");
});

$(".toggle-menu").click(function() {
	if ($(".xs-nav").is(":visible")) {
		$(".xs-nav").slideUp();
	} else {
		$(".xs-nav").slideDown();
	};
});

$(".nav li a").click(function() {
	$(".sandwich").removeClass("active");
	$(".xs-nav").slideUp();
	$(".sub-nav").removeClass("visible-sub-nav")
	$(".prod-list").slideUp();
});

$(".sub-nav").click(function() {
	if ($(".prod-list").is(":visible")) {
		$(this).removeClass("visible-sub-nav")
		$(".prod-list").slideUp();
	} else {
		$(".prod-list").slideDown();
		$(this).addClass("visible-sub-nav")
	};
});


var slider =  $('.gallerySlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    pauseOnFocus: true,
    fade: true,
    cssEase: 'linear',
    asNavFor: '.gallerySliderPrev',
    focusOnSelect: true,
    autoplay: false,
});

 $('.gallerySliderPrev').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.gallerySlider',
  dots: false,
  arrows: false,
  focusOnSelect: true,
  centerMode: true,
  infinite: true,
});



$('.video-main').slick({
    slidesToShow: 1,
	  dots: false,
	  arrows: false,
	  autoplay: false,
	  adaptiveHeight: true,
	  fade: true,
});

$('.video-list-item').click(function() {

  var sl  = $(".video-main");

  $(sl).slick('slickGoTo',$(this).index());
  $('.video-list-item').removeClass("active");
  $(this).addClass("active");

})

$(document).on('opening', '.remodal', function () {
  $(".slick-slider").slick('reinit');
});


$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
     e.target
     e.relatedTarget
     $('.slick-slider').slick('setPosition');
 });

if ($(window).width() < 769) {

	$(".action-list-box .title").click(function() {
		var list = $(this).siblings('action-list');
		if ($(this).hasClass('visible-list')) {
			$(this).removeClass("visible-list")
			$(".action-list").slideUp();
		} else {
			$(".action-list").slideDown();
			$(this).addClass("visible-list")
		};
	});


	$('.cutstring').cutstring();

}


$(".filter").click(function() {

	var td = $(this).data('filter');
	var fd = $(".product-filter").find($("li[data-filter='" + td +"']"));
	$(".product-filter li").removeClass('active');
	$(fd).addClass('active');

});


$('.header-logo').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });




var ch = $(".video-slider-item").find('iframe[src*="https://www.youtube.com/"]');
jQuery(ch).addClass("youtube-iframe");

    jQuery(".video-list-item").click(function() {
      $('.youtube-iframe').each(function(index) {
        var el_src = $(this).attr("src");
        $(this).attr("src",el_src);
      });

    });

});



