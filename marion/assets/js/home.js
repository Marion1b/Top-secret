document.addEventListener('DOMContentLoaded', function(){
    let burger = document.querySelector('.js-burger')
    let nav = document.querySelector('.js-nav')
    burger.addEventListener('click', function(){
        nav.classList.toggle('header-nav-visible')
    })
})