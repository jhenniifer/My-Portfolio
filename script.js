const hamBurger = document.querySelector('.toggle__btn');
const navLinks = document.querySelector('.nav__link__mobile__container');
const icon = document.querySelector('.fa-solid')

hamBurger.addEventListener('click',function(){
    navLinks.classList.toggle('open');
    if(icon.classList.contains('fa-bars')){
        icon.classList.replace('fa-bars', 'fa-x');
    } else{
        icon.classList.replace('fa-x', 'fa-bar');
    }
    
})