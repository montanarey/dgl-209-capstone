/* */


// Mobile Hamburger Menu Functionality

console.log("js linked correctly");

const hamburger = document.querySelector(".hamburger");
const mobileNavMenu = document.querySelector(".mobile-nav-menu");
const navLinks = document.querySelectorAll(".mobile-nav-link");

console.log(hamburger);
hamburger.addEventListener('click', openMenu);

navLinks.forEach(link => link.addEventListener('click', closeMenu));

function openMenu() {
    console.log("menu toggled");
    hamburger.classList.toggle('active');
    mobileNavMenu.classList.toggle('active');
}

function closeMenu() {
    hamburger.classList.remove('active');
    mobileNavMenu.classList.remove('active');
}