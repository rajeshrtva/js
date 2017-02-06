// Slim Header
var header = 0;
function scrollHead(){    
    if ($(document).scrollTop() > 0) {
        if (header == 0) {
            header = 1;
            $('.header').addClass('slim-header');
            $('.quote-button').addClass('slim-quote');
        }
    } else {
        if (header == 1) {
            header = 0;
            $('.header').removeClass('slim-header');
            $('.quote-button').removeClass('slim-quote');
        }
    }
}
scrollHead();
$(window).scroll(scrollHead)



//Mobile Menu


$('.mob-btn').click(function(event){

  $('body').toggleClass('open');
  event.stopPropagation();

})

$('.menu').click(function(event){

  event.stopPropagation();

})
$('.overlay').click(function(){
  if($('body').hasClass('open')){
    $('body').removeClass('open');
  }
});

$('.subnav ul').clone().prependTo('.main-nav');

$('ul.menu li:has(ul)').addClass('submenu');
$('ul.menu li:has(ul)').append( "<i></i>" );

$('ul.menu i').click(function(){
 $(this).parent('li').toggleClass('open');
})



$('.bnr-slide').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  prevArrow: false,
  nextArrow: false
});


$('.banner .slick-dots').prependTo('.banner-text');


$('.tstmnal-otr').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow: false,
  nextArrow: false
});


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider-nav',
    arrows:true
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows:true,
    centerMode: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 659,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});


 // hide #back-top first
  jQuery("#scrollUp").hide();
  
  // fade in #back-top
  jQuery(function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 250) {
        jQuery('#scrollUp').fadeIn();
      } else {
        jQuery('#scrollUp').fadeOut();
      }
    });

// scroll body to 0px on click
    jQuery('#scrollUp a').click(function () {
      jQuery('body,html').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  });







