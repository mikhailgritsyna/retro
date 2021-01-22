$(function(){
    
  var mixer = mixitup('.products_inner-box');

 

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px"
  });
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: '$'
  });
  $('.product-slider-inner').slick({
      dots: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4
  });
  $('.icon-list-ul').on('click', function(){
    $('.products_item').addClass('list');
    $('.icon-list-ul').addClass('active');
    $('.icon-th-large').removeClass('active');
  });
  $('.icon-th-large').on('click', function () {
    $('.products_item').removeClass('list');
    $('.icon-list-ul').removeClass('active');
    $('.icon-th-large').addClass('active');
  });
  

})