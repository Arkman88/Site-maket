function readMore() {
    let more = document.querySelector(".swiper__menu");
    let btn = document.querySelector(".button-show-more");
    if (more.style.overflow !== "visible" ) {
        more.style.overflow = "visible";
        more.style.height = "auto";        
        btn.innerHTML = "Скрыть";    
        btn.style.background = 'url(images/expand_alt.svg) no-repeat'
        console.log(more);  
    }
    else {           
        more.style.overflow = "hidden";
        more.style.height = "175px";
        btn.innerHTML = "Показать всё";
        btn.style.background = 'url(images/expand.svg) no-repeat'
        console.log(more);
    }
}
