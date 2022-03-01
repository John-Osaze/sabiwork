(function ($) {
  $(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop()) {
        $("header").addClass("nav-offset");
      } else {
        $("header").removeClass("nav-offset");
      }
    });

    // ISOTOPE INIT
    let $btns = $(".featured-artisans .btn-group button");
    $btns.click(function (e) {
      $(".featured-artisans .btn-group button").removeClass("active");
      e.target.classList.add("active");

      let selector = $(e.target).attr("data-filter");
      $(".featured-artisans .card-wrapper").isotope({
        filter: selector,
      });

      return false;
    });
    $("featured-artisans .btn-group #1st-btn").trigger("click");

    // COUNTERUP INIT
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });

    // FLICKITY INIT
    $(".carousel").flickity({
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      autoPlay: true,
      prevNextButtons: false,
      pageDots: true,
    });

    $(".testimonials").flickity({
      cellAlign: "left",
      wrapAround: true,
      contain: true,
      autoPlay: true,
      prevNextButtons: false,
      pageDots: true,
      groupCell: true,
    });
  });
})(jQuery);

// ACTIVE SWITCH
// $(document).on("click", ".btn-group button", function () {
//  $(this).addClass("current").siblings().removeClass("current");
// }); 

// var isoBtns = document.querySelectorAll(".iso-btn");

// let showBorder = false;

// isoBtns.addEventListener("click", revealBorder);

// function revealBorder(){
//   if (!showBorder){
//     isoBtns.forEach((button) => button.classList.add("clicked"));
//     showBorder = true;
//   }else{
//     isoBtns.forEach((button) => button.classList.remove("clicked"));
//     showBorder = false;
//   }
// };


document.querySelector("body").onload = function () {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "none";
  // if (preloader.style.display === "block") {
  //     document.querySelector('body').style.overflow = "hidden"
  // } else {
  //     document.querySelector('body').style.overflow = "auto"
  // }
};

const menuBtn = document.querySelector(".menu-btn"),
      hamburger = document.querySelector(".menu-toggler"),
      nav = document.querySelector(".nav-group"),
      menuNav = document.querySelector(".menu-nav"),
      navItems = document.querySelectorAll(".nav-item"),
      endTab = document.querySelector(".end-tabs"),
      navIcons = document.querySelectorAll(".navicon-link");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    endTab.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));
    navIcons.forEach((icon) => icon.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    endTab.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));
    navIcons.forEach((icon) => icon.classList.remove("open"));

    showMenu = false;
  }
}
