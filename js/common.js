$(document).ready(function() {
	//команда для микситаб
	$("#portfolio_grid").mixItUp();

	$(".s-portfolio li").click(function() {
		$(".s-portfolio li").removeClass("active");
		$(this).addClass("active");
	});
	//конец команды для микситаб


	//form validator
	$("input, select, textarea").jqBootstrapValidation();
	$(".top-menu ul a").mPageScroll2id();

	// команда авто определения высоты экрана для определенного класса
	function heightDetect() {
		$(".main-head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	//нонец функции автоопределения высоты экрана
	$(".popup").magnificPopup({type:"image"});

	//команда для прелоадера
$(window).load(function() {
	$(".loader-inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".up").animated("fadeInDown", "fadeOutDown");
	$(".down").animated("fadeInUp", "fadeOutDown");
	$(".slide-left").animated("slideInLeft", "fadeOutDown");
	$(".slide-right").animated("slideInRight", "fadeOutDown");
	$(".center-animate").animated("zoomIn", "fadeOutDown");
});

	//команда для сэндвич-меню
$(".sandwich").click(function() {
  $(".sandwich").toggleClass("active");
});
	//конец сендвич-меню

	$(".top-menu ul a").click(function() {
		$(".top-menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top-text").css("opacity", "1");
	});

	//вызов выпадающего меню
	$(".toggle-menu").click(function() {
		if ($(".top-menu").is(":visible")) {
			$(".top-text").css("opacity", "1");
			$(".top-menu").fadeOut(600);
			$(".top-menu li a").removeClass("fadeInUp animated");
		} else {
			$(".top-text").css("opacity", ".2");
			$(".top-menu").fadeIn(600);
			$(".top-menu li a").addClass("fadeInUp animated");
		};
	});
	//конец вызова выпадающего меню

	
	
});