

//scrolling of header
let navbar = document.querySelector('.navbar');
let back = document.querySelector('#backUp');

window.onscroll =function(){
    if(document.body.scrollTop > 50 ||document.documentElement.scrollTop >50){
        navbar.classList.add('header-scrolled');
        back.style.display = "block";
    }
    else{
        navbar.classList.remove('header-scrolled');
        back.style.display = "none";
    }

}

back.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };


//To close navbar when select link
let navbarLinks = document.querySelectorAll('.nav-link');
let collapseNavbar = document.querySelector('.navbar-collapse.collapse');

navbarLinks.forEach(function(link){
    link.addEventListener("click", function(){
        collapseNavbar.classList.remove('show')
    })//end of click event
})//end of forEach







// swiper SwiperProducts
var swiper = new Swiper(".SwiperProducts", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// AOS Animation
AOS.init({
  duration: 600,
  offset: 150,
});


