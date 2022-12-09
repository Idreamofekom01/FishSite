
let button = document.querySelector('.call-to-action');
button.onclick = () => {
    alert('Thank you for contacting us, we are re-directing you now');
};


const swiper = new Swiper('.swiper', {
    // Optional parameters
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const menu = document.querySelector('.menu');
  const close = document.querySelector('.close');
  const rightSec = document.querySelector('.right-section');

  menu.addEventListener('click',() => {
        rightSec.classList.add('open-nav');
  });
  close.addEventListener('click',() => {
        rightSec.classList.remove('open-nav');
  });
