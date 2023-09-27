const primaryNav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');
navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false"){
        primaryNav.setAttribute("data-visible", true);
        primaryNav.setAttribute("aria-expanded", true);
    }else{
        primaryNav.setAttribute("data-visible", false);
        primaryNav.setAttribute("aria-expanded", false);
    }
})



const scrollToTopBtn = document.getElementById('scrollToTopBtn')
window.onscroll = () => {
    if(document  .body.scroll > 100 || document.documentElement.scrollTop > 100){
        scrollToTopBtn.style.visibility = "visible";
    }else{
        scrollToTopBtn.style.visibility = "hidden";
    }
}




