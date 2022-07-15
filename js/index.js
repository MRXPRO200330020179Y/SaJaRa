$(document).ready(function(){
    $('.Photo__slaeder').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.Photo__slaederIn2'
      });

      $('.Photo__slaederIn2').slick({
                    arrows: false,
                    asNavFor:'.Photo__slaeder',
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                     responsive: [
                   {
                  breakpoint: 1630,
                  settings: {
                  slidesToShow: 6,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                  }
                },
                 {
                  breakpoint: 1440,
                  settings: {
                  slidesToShow: 5,
                 slidesToScroll: 1
                  }
                 },

                 {
                  breakpoint: 1180,
                  settings: {
                  slidesToShow: 4,
                 slidesToScroll: 1
                  }
                 },

                 {
                  breakpoint: 900,
                  settings: {
                  slidesToShow: 3,
                 slidesToScroll: 1
                  }
                 },

                 {
                  breakpoint: 600,
                  settings: {
                  slidesToShow: 2,
                 slidesToScroll: 1
                  }
                 },
               ]
      });
});

$(document).ready(function(){
  $('.burger__start').click(function(){
    $('.header__menu').fadeTo(500, 1)
    $('.header__menu').css('display','block')
    $('.burger__end').css('display','block')
    $('.burger__start').css('display','none')
  })
});

$(document).ready(function(){
  $('.burger__end').click(function(){
    $('.header__menu').fadeTo(500, 1)
    $('.header__menu').css('display','none')
    $('.burger__end').css('display','none')
    $('.burger__start').css('display','block')
  })
});