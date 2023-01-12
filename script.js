let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let dishes = document.querySelector('#dishess')
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    
}
dishes.onclick = () => {
    dishes.classList.toggle("active")
    menu.classList.remove('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active')
}
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active')
}
var swiper = new Swiper(".container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    loop:true
    
  });