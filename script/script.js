$(document).ready(function () {
    $(".bxslider").bxSlider({
      pager: false,
      // captions: true,
      auto: true,
    });
  });
  
  $(document).ready(function () {
    $(".bxslider_team").bxSlider({
      // pager: false,
      // captions: true,
      auto: true,
      controls: false,
    });
  });
  
  $(document).ready(function () {
    $(".flexslider").flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 200,
      itemMargin: 25,
      touch: true,
    });
  });
  
  $(document).ready(function () {
    $(".accordion").accordion({
      defaultOpen: "",
    });
  });
  
  
  $(function () {
    let filterList = {
      init: function () {
        $(".workportfolio").mixitup({
          targetSelector: ".portfolio",
          filterSelector: ".filter",
          effects: ["fade"],
          easing: "snap",
        });
      },
    };
    filterList.init();
  });
  
  $(document).ready(function ($) {
    $(".primary-nav-trigger").on("click", function () {
      $(".menu-icon").toggleClass("is-clicked");
      $(".primary-nav").toggleClass("is-visible");
      $("body").toggleClass("overflow-hidden");
    });
  });
  
  
  $(".primary-nav").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body, html").animate({ scrollTop: top }, 1000);
  
    $(".primary-nav").toggleClass("is-visible");
    $(".menu-icon").toggleClass("is-clicked");
    $("body").toggleClass("overflow-hidden");
  });
  
  let headerHeight = $(".topheader").height();
  $(window).on("scroll", {previousTop: 0}, function () {
    let currentTop = $(window).scrollTop();
    // console.log("Current: " + currentTop)
    // console.log("Previous: " + this.previousTop)
    // console.log(!(currentTop > 0))
   
    if (currentTop < this.previousTop) {
      if (!(currentTop > 0) && $(".topheader").hasClass("is-fixed")) {
        $(".topheader").removeClass("is-fixed");
      }
    } else {
      if (currentTop > headerHeight && !$(".topheader").hasClass("is-fixed")) {
        $(".topheader").addClass("is-fixed");
      }
    }
    this.previousTop = currentTop;
  });
  $(window).load(function(){
    $(".preload").delay(5000).fadeOut("slow");
  })

