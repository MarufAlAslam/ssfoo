var timer = 1000

$('.hero1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
  });

  $('.hero2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.hero3').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.hero4').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  // $('.topSlider1').slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: true,
  //   prevArrow: '<button class="btn prevBtn text-white"><i class="fa fa-angle-left"></i></button>',
  //   nextArrow: '<button class="btn nextBtn text-white"><i class="fa fa-angle-right"></i></button>',
  // });


  $('.anotherSlider1').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="btn prevBtn2 text-brown"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="btn nextBtn2 text-brown"><i class="fa fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.blogSlider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button class="btn prevBtn1 text-white btn-brown slidbtn"><i class="fa fa-arrow-left"></i></button>',
    nextArrow: '<button class="btn nextBtn1 text-white btn-brown slidbtn"><i class="fa fa-arrow-right"></i></button>',
  });


  $('.menBtn').click(function(e){
      e.preventDefault()
  })
  $('.menBtn, .womenBtn').mouseover(function(){
    $('.bg-overlay').show()
    $(this).css('color','#A87560')
})
$('.bg-overlay, .hideDrop, .logo, .menuopener2').mouseover(function(){
    $('.bg-overlay').hide()
    // $('.menDropDown').css("transform"," translateX(-50%) translateY(-200%)")
    // $('.womenDropDown').css("transform"," translateX(-50%) translateY(-200%)")
    $('.menDropDown').hide(100)
    $('.womenDropDown').hide(100)
})

$('.menBtn').mouseover(function(){
    // $('.menDropDown').css("transform"," translateX(-50%) translateY(0)")
    // $('.womenDropDown').css("transform"," translateX(-50%) translateY(-200%)")

    $('.menDropDown').show(100)
    $('.womenDropDown').hide(100)
})
$('.womenBtn').mouseover(function(){
    $('.womenDropDown').show(100)
    $('.menDropDown').hide(100)
})
var opened = false
$('.menuopener2').click(function(){
    if(!opened){
        $('.navbar-nav.ms-auto.mb-2.mb-lg-0').css('transform','translateX(0)')
        opened = true
    }
    else{
        $('.navbar-nav.ms-auto.mb-2.mb-lg-0').css('transform','translateX(100%)')
        opened = false
    }
})