AOS.init();
$(window).scroll(function () {
  var counted = 0;

  var oTop = $("#counter").offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $(".count").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
    counted = 1;
  }

  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".header").addClass("bgBlur");
  } else {
    $(".header").removeClass("bgBlur");
  }
});

var swiper = new Swiper(".imgSwiper", {
  slidesPerView: 1,
  effect: "fade",
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints: {
  //   1200: {
  //     slidesPerView: 5,
  //     spaceBetween: 20,
  //   },
  //   992: {
  //     slidesPerView: 4,
  //     spaceBetween: 20,
  //   },

  //   768: {
  //     slidesPerView: 3,
  //     spaceBetween: 20,
  //   },
  //   570: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },

  //   0: {
  //     slidesPerView: 1,
  //   },
  // },
});

var swiper = new Swiper(".imgSwiper1", {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints: {
  //   1200: {
  //     slidesPerView: 5,
  //     spaceBetween: 20,
  //   },
  //   992: {
  //     slidesPerView: 4,
  //     spaceBetween: 20,
  //   },

  //   768: {
  //     slidesPerView: 3,
  //     spaceBetween: 20,
  //   },
  //   570: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },

  //   0: {
  //     slidesPerView: 1,
  //   },
  // },
});

var swiper = new Swiper(".imgSwiper2", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,

  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints: {
  //   1200: {
  //     slidesPerView: 5,
  //     spaceBetween: 20,
  //   },
  //   992: {
  //     slidesPerView: 4,
  //     spaceBetween: 20,
  //   },

  //   768: {
  //     slidesPerView: 3,
  //     spaceBetween: 20,
  //   },
  //   570: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },

  //   0: {
  //     slidesPerView: 1,
  //   },
  // },
});

var swiper = new Swiper(".TestiSwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
