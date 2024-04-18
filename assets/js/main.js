$(document).ready(function () {
  var currentDir = $("body").css("direction");
  console.log(currentDir);

  if ($(".nice_select").length) {
    $(".nice_select").niceSelect();
  }

  if ($(".header_slider").length) {
    $(".header_slider").slick({
      autoplay: false,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      arrows: $(".container-fluid").length > 0, 
      dots: true,
      customPaging: function(slider, i) {
        return '<span class="custom-dot">_</span>';
      },
    });
  }
  
  

  if ($(".header_slider_about").length) {
    $(".header_slider_about").slick({
      autoplay: false,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      arrows: true,
      dots: true,
    });
  }

  if ($(".what_happen_slider").length) {
    $(".what_happen_slider").slick({
      slidesToShow: 3.7,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 300,
      infinite: false,
      loop: true,
      autoplaySpeed: 5000,
      centerMode: false,
      autoplay: false,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 3.3,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1.7,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1.7,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.1,
            // centerMode: false,
          },
        },
      ],
    });
  }

  if ($(".company_slider").length) {
    $(".company_slider").slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 5000,
      infinite: true,
      loop: true,
      autoplaySpeed: 100,
      centerMode: false,
      autoplay: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 6,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 6,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            // centerMode: false,
          },
        },
      ],
    });
  }

  // principles_slider
  if ($(".principles_slider").length) {
    $(".principles_slider").slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 5000,
      infinite: true,
      loop: true,
      autoplaySpeed: 100,
      centerMode: false,
      autoplay: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 6,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            // centerMode: false,
          },
        },
      ],
    });
  }

   // principles_slider
   if ($(".client_slider").length) {


    var $slider4 = $(".client_slider");
    var $progressBar4 = $(".our_produc_design_success_slider_progressbar");
    var $progressBarLabel4 = $(
      ".our_produc_design_success_slider_progressbar .slider__label"
    );

    $slider4.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var calc = (nextSlide / (slick.slideCount - 1)) * 100;

        $progressBar4
          .css("background-size", calc + "% 100%")
          .attr("aria-valuenow", calc);

        $progressBarLabel4.text(calc + "% completed");
      }
    );



    $(".client_slider").slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 300,
      infinite: true,
      loop: true,
      autoplaySpeed: 5000,
      centerMode: false,
      autoplay: true,
      cssEase: "linear",
      prevArrow: $(".our_product_design_successـcustom_arrow_next"),
      nextArrow: $(".our_product_design_successـcustom_arrow_prev"),
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 6,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            // centerMode: false,
          },
        },
      ],
    });
  }

  // certifications_licence_slider
  if ($(".certifications_licence_slider").length) {
    $(".certifications_licence_slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 1000,
      infinite: true,
      loop: true,
      autoplaySpeed: 5000,
      centerMode: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 3,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            // centerMode: false,
          },
        },
      ],
    });
  }

  if ($(".contact_us_section").length) {
    $(".contact_us_section #imageInput").on("change", function (e) {
      var fname = e.target.files[0].name;
      $(this).parent().find(".file_name").text(fname);
    });
  }

  // apply_jop_modal
  if ($(".apply_jop_modal").length) {
    $(".apply_jop_modal #imageInput").on("change", function (e) {
      var fname = e.target.files[0].name;
      $(this).parent().find(".file_name").text(fname);
    });
  }

  if ($(".gallery_cards_slider").length) {
    $(".gallery_cards_slider").slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      rtl: currentDir === "rtl" ? true : false,
      arrows: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            // centerMode: false,
          },
        },
      ],
    });
  }

  if ($("#gallery_card_for_modal").length) {
    $("#gallery_card_for_modal .slider_item").map((index, item) => {
      $(item).on("click", function (e) {
        var video = $(".gallery_modal_wrapper video");
        video.map((index, item) => {
          console.log(item);
          item.currentTime = 0;
          item.load();
        });
        var slideIndex = $(item).attr("data-gallery-index");
        $("#gallery_modal_img .project_img_slider").slick(
          "slickGoTo",
          slideIndex
        );
        $("html").addClass("active_gallery_modal");
      });
    });

    $(".gallery_modal .close_modal").on("click", function () {
      $("html").removeClass("active_gallery_modal");
      var video = $(".gallery_modal_wrapper video");
      video.map((index, item) => {
        console.log(item);
        // item.currentTime = 0;
        item.pause();
      });
    });
  }

  if ($(".project_img_slider").length) {
    $(".project_img_slider").slick({
      dots: true,
      arrows: true,
      rtl: currentDir === "rtl" ? true : false,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            dots: false,
          },
        },
      ],
    });
  }

  if ($(".swiper_team_card").length) {
    var $swiper = $(".swiper_team_card");
    var $bottomSlide = null;
    var $bottomSlideContent = null;
  }

  var mySwiper1;
  var mySwiper2;


  if ($(".swiper_years_slider").length) {
    // swiper1 = $(".swiper_years_slider");
    mySwiper1 = new Swiper(".swiper_years_slider", {
      grabCursor: false,
      loop: true,
      centeredSlides: false,
      slidesPerView: 6,
      draggable: false,
      allowTouchMove: false,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        400: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 3,
        },
      },
      controller: {
        control: mySwiper2, // Link to the second slider
      },
    });
  }
  // swiper_years_img_slider
  if ($(".swiper_years_img_slider").length) {
    // swiper2 = $(".swiper_years_img_slider");
    mySwiper2 = new Swiper(".swiper_years_img_slider", {
      effect: "coverflow",
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 20,
        depth: 200,
        modifier: 1.5,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        600: {
          slidesPerView: 1.1,
          coverflowEffect: {
            rotate: 0,
            stretch: 20,
            depth: 200,
            modifier: 2,
            slideShadows: true,
          },
        },
        1440: {
          coverflowEffect: {
            rotate: 0,
            stretch: 20,
            depth: 280,
            modifier: 1.5,
            slideShadows: true,
          },
        },
      },
      controller: {
        control: mySwiper1, // Link to the second slider
      },
      
    });
  }

  $(".nav-pills .nav-item .nav-link").on("shown.bs.tab", function () {
    $(".what_happen_slider").slick("setPosition");
    // console.log(mySwiper1.update())
    // mySwiper1.update();
    AOS.refresh();
  });


  if($(".apply_job").length){
    $(".btn_apply_modal").on('click', function(){
      $(".open_modal").addClass("active_open_modal")
      $(".apply_jop_modal").addClass("active_apply_jop_modal")
    })

    $(".apply_jop_modal .close").on('click', function(){
      $(".open_modal").removeClass("active_open_modal")
      $(".apply_jop_modal").removeClass("active_apply_jop_modal")
    })

  }




  AOS.init();
});

$(document).ready(function() {
 
  if (window.matchMedia("(max-width: 768px)").matches) {
    $('.our-mission').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
    });
  }
});



$(document).ready(function(){
  if (window.matchMedia("(max-width: 768px)").matches) {
  $('.cer-slide').slick({
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      prevArrow: $('.prev-arrow'),
      nextArrow: $('.next-arrow'),
      centerMode: false,
      centerPadding: '25px', 
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
          }
      ]
      
  });
}
});



$(document).ready(function(){
  $('.csr-slider2').slick({
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      prevArrow: $('.prev-arrow'),
      nextArrow: $('.next-arrow'),
      centerMode: true,
      centerPadding: '20px', 
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
          }
      ]
  });
});



$(document).ready(function(){
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.custom_navbar').addClass('scroll_bg');
      $('.custom_navbar .logo img').addClass('invert-color');
      $('.custom_navbar .list_link').addClass('invert-color');
      $('.custom_navbar .custom-icon path').addClass('invert-color');
      $('.contact_btn a').addClass('btn-blue');
      $('.notification-container svg').addClass('icon-blue');
    } else {
      $('.custom_navbar').removeClass('scroll_bg');
      $('.custom_navbar .logo img').removeClass('invert-color');
      $('.custom_navbar .list_link').removeClass('invert-color');
      $('.custom_navbar .custom-icon path').removeClass('invert-color');
      $('.contact_btn a').removeClass('btn-blue');
      $('.notification-container svg').removeClass('icon-blue');
    }
  });
});


/* Detect scroll position to add 'scrolled' class */
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.custom_navbar');
  const scrollY = window.scrollY; // Get scroll position

  if (scrollY > 0) { // Adjust this value to determine scroll amount for change
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});



$(document).ready(function() {
  $('.slick-toggle').on('click', function() {
    var targetId = $(this).data('slick-target');
    // Hide all slick contents before showing the clicked one
    $('.slick-content').addClass('d-none');
    $(targetId).removeClass('d-none');
  });
});

const accordionToggles = document.querySelectorAll('.accordion-button');

for (const toggle of accordionToggles) {
  toggle.addEventListener('click', (event) => {
    const currentCollapse = event.target.nextElementSibling;
    const isExpanded = currentCollapse.classList.contains('show');

    // Toggle active accordion item
    currentCollapse.classList.toggle('show');

    // Close other open accordions (optional)
    accordionToggles.forEach(otherToggle => {
      if (otherToggle !== toggle) {
        const otherCollapse = otherToggle.nextElementSibling;
        otherCollapse.classList.remove('show');
      }
    });
  });
}





$(document).ready(function(){
  if (window.matchMedia("(max-width: 768px)").matches) {
  $('.product-slide').slick({
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      prevArrow: $('.prev-arrow'),
      nextArrow: $('.next-arrow'),
      centerMode: false,
      centerPadding: '40px', 
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
          }
      ]
      
  });
}
});
