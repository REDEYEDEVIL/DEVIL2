burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.navlist')
snav=document.querySelector('.snav')


burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav');
    snav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
})
