function SliderBox1__init() {
    $('.slider-box-1 > .slick').slick({
      dots:true,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover:false,
      slidesToShow: 1,
      slidesToScroll: 1
      // arrows:true,
      // prevArrow:".slider-box-1 > .arrows > .btn-left",
      // nextArrow:".slider-box-1 > .arrows > .btn-right"
    });
  }
  
  $(function() {
    SliderBox1__init();
  });
  
  function SliderBox2__init() {
    $('.slider-box-2 > .slick').slick({
      dots:true,
      // autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover:false,
      slidesToShow: 3,
      slidesToScroll: 3,
      customPaging: function(slick, index) {
        var 내용 = '';
  
        if ( index == 0 ) {
          내용 = '페이스';
        }
        else if ( index == 1 ) {
          내용 = '립';
        }
        else if ( index == 2 ) {
          내용 = '향수';
        }
  
        return '<div class="page-btn">' + 내용 + '</div>';
      }
    });
  }
  
  $(function() {
    SliderBox2__init();
  });