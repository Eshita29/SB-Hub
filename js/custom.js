$(function () {

  "use strick"

  // search js

  const icon = document.querySelector('.icon');
  const search = document.querySelector('.search');
  icon.onclick = function () {
    search.classList.toggle('active')
  }

  "use strick"

  // world-clock slick
  $('.wc_slide').slick({
      slidesToShow: 9,
      slidesToScroll: 1,
      nextArrow: '<i class="fa-solid fa-angle-right nxtarw"></i>',
      prevArrow: false,
      responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              arrows:false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows:false,
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
      ]
    });

    // banner slick
    $('.banner_main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      dots:true,
      // autoplay: true,
      // autoplaySpeed: 1200,
    });















})