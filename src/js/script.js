

$(document).ready(function(){
    $('.carousel__inner').slick({
        // dots: true,
        speed: 800,
        // adaptiveHeight: true,
        // utoplay: true,
        // autoplaySpeed: 2000
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg" alt="left"></img> </button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg" alt="right"></img> </button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false
              }
            }
        ]
      });
  });