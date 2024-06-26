 function readMore() {
    let more = document.querySelector(".swiper-wrapper");
    let btn = document.querySelector(".button-show-more");
    if (more.style.overflow !== "visible" ) {
        more.style.overflow = "visible";
        more.style.height = "auto";        
        btn.innerHTML = "Скрыть";    
        btn.style.background = 'url(images/expand_alt.svg) no-repeat'
    }
    else {           
        more.style.overflow = "hidden";
        more.style.height = "173px";
        btn.innerHTML = "Показать всё";
        btn.style.background = 'url(images/expand.svg) no-repeat'
    }
  }  

window.addEventListener('DOMContentLoaded', () => {
    const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;
    let btn = document.querySelector(".button-show-more");
    let hght = document.querySelector(".swiper-wrapper");
    breakpoint = window.matchMedia(breakpoint);    
    const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);
    }

    const checker = function() {
            if (breakpoint.matches) {
                btn.innerHTML = "Показать всё";
                hght.style.height = "100px";
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) swiper.destroy(true, true);
                return;
            }
    };

    breakpoint.addEventListener('change', checker);
    checker();
    }
  
    resizableSwiper(
      '(max-width: 768px)',
      '.swiper',
      {
        spaceBetween: 20,
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    );
  });


/*
let menu = document.querySelector('.menu');
let openMenuButton = document.querySelector('.button-burger');
let closeMenuButton = menu.querySelector('.button-alt-burger');
let main = document.querySelector('.main');
let header = document.querySelector('.header');

openMenuButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    menu.classList.add('menu--show');
    main.classList.add('blur');
    header.classList.add('blur');
});




closeMenuButton.addEventListener('click', function() {
    menu.classList.remove('menu--show');
    main.classList.remove('blur');
    header.classList.remove('blur');
    isClick = false;
});

document.addEventListener('keydown', (evt) =>{
    if (evt.key = 'Escape') {
        menu.classList.remove('menu--show');
        main.classList.remove('blur');
        header.classList.remove('blur');
        isClick = false;
    }
})
*/