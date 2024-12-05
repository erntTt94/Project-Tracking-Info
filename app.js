document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const img = document.querySelector('.img');

    hamburger.addEventListener('click', (e) => {
        navMenu.classList.toggle('active');
        img.classList.toggle('img');
    })
})