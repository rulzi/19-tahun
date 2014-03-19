$(document).ready(function() {

	$('.wrap').hide();
	$('body').append('<div class="loader"></div>');

});

$(function() {

	$(' #da-thumbs > li ').each(function() { $(this).hoverdir(); });

});

$(window).load(function () {

	$('.wrap').fadeIn();
	$('.loader').transition( { left: 300 },1800, 'ease');

	setTimeout(function(){ $('.logo-dark').css('margin-right','200px'); },1800)
	setTimeout(function(){ $('.nav-area h1').show().addClass('animated bounceInDown'); },1800)
	setTimeout(function(){ $('#main-nav').show().addClass('animated bounceInUp'); },1800)
	setTimeout(function(){ $('.logo-area').show(); },1700)
	$('.nav-area h1').removeClass('animated bounceInDown');
	$('#main-nav').removeClass('animated bounceInUp');

	$('.logo-area').mouseenter(function() {

		$('.logo-dark').css('margin-right','400px');

	});

	$('.logo-area').mouseleave(function() {

		$('.logo-dark').css('margin-right','200px');

	});

	$('.item').click(function() {

		var href = $(this).attr('href');
		var rel = $(this).attr('rel');
		$('#main-nav').hide();    	
		$('.nav').transition( { top: 100 },800, 'ease');
		$('.logo-area').transition( { top: 100 },800, 'ease');
		$('.loader').transition( { top: 100 },800, 'ease');
		$(href).show();
		$(href).addClass('animated fadeInUpBig');
		$(href+' .close').attr('href', href);
		$('.nav-area h1').text(rel);   

	});

	$('.close').click(function() {

		var href = $(this).attr('href');
		$('#main-nav').show().addClass('animated bounceInUp'); 
		$('.nav-area h1').text('Welcome Home');
		$('.nav-area h1').addClass('animated bounceInDown');
		$('.nav').transition( { top: '50%' },800, 'ease');
		$('.logo-area').transition( { top: '50%' },800, 'ease');
		$('.loader').transition( { top: '50%' },800, 'ease');
		$(href).hide();
		$(href).removeClass('animated fadeInUpBig');

	});	
});