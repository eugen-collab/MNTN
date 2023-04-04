const navBtn = document.querySelector('.nav-btn');
const mobileNav = document.querySelector('.mobile__nav');
const spanBtn = document.querySelector('#span-btn');
const body = document.querySelector('body');

function toggleMobileNav(){
    mobileNav.classList.toggle('mobile__nav_active');
    spanBtn.classList.toggle('nav-button__icon_close');
    body.classList.toggle('no-scroll');
}

navBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    toggleMobileNav();
});

window.addEventListener('click', function(){
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav();
}})

mobileNav.addEventListener('click', function(event){
    event.stopPropagation();
})