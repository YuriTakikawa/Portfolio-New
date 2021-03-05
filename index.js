$(function () {
  //console.log('Hello World');

  $(window).on('load', function () {
    $('.p-home__profile').css({
        left:"-800px",
        opacity:"0.0"
    }).animate({
        left:"800px",
        opacity:"1.0"
    },1000);

  });

  $(window).scroll(function () {
    $('.p-home-service__item').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > elemPos - height) {
        $(this).addClass('active');
      }
    });
  });
});